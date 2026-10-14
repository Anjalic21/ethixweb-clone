import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { createServerSupabaseClient } from '@/lib/supabase'
import { ENQUIRY_STATUSES } from '@/lib/types'

const patchSchema = z.object({
  status: z.enum(ENQUIRY_STATUSES as [string, ...string[]]),
})

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // ── Independent auth check — do not rely solely on middleware ──
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorised.' }, { status: 401 })
  }

  const { id } = params
  const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id ?? '')
  if (!id || !isUUID) {
    return NextResponse.json({ error: 'Invalid or missing enquiry ID.' }, { status: 400 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const parsed = patchSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid status value.', issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  let supabase
  try {
    supabase = createServerSupabaseClient()
  } catch (err) {
    console.error('[admin/enquiry] Supabase init error:', err)
    return NextResponse.json({ error: 'Service unavailable.' }, { status: 503 })
  }

  const { error: dbError } = await supabase
    .from('enquiries')
    .update({ status: parsed.data.status })
    .eq('id', id)

  if (dbError) {
    console.error('[admin/enquiry] Update error:', dbError.message)
    return NextResponse.json({ error: 'Failed to update status.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 })
}
