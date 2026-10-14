import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase'
import { getRateLimiter } from '@/lib/ratelimit'

// ── Validation schema (server-side) ──────────────────────────────────────────
// Mirrors the form fields. phone and budget are optional.
// company is accepted but not shown in the form (maps to the DB column).
const schema = z.object({
  name:     z.string().min(2).max(100),
  email:    z.string().email().max(254),
  phone:    z.string().regex(/^[+\d\s\-()]{7,15}$/).or(z.literal('')).optional(),
  company:  z.string().max(100).optional(),
  service:  z.enum(['web', 'mobile', 'marketing', 'uiux', 'performance', 'brand', 'other']),
  budget:   z.enum(['under-50k', '50k-150k', '150k-500k', 'above-500k', 'not-sure', '']).optional(),
  message:  z.string().min(20).max(5000),
  // Honeypot — must be empty. Bots fill hidden fields; humans leave them blank.
  _hp:      z.string().max(0, 'Bot detected'),
})

export async function POST(req: NextRequest) {
  // ── Rate limiting ────────────────────────────────────────────────────────────
  const limiter = getRateLimiter()

  if (limiter === null && process.env.NODE_ENV === 'production') {
    // Upstash vars missing in production — fail closed.
    console.error('[enquiry] Rate limiter unavailable in production. Blocking request.')
    return NextResponse.json(
      { error: 'Service temporarily unavailable. Please try again later.' },
      { status: 503 }
    )
  }

  if (limiter !== null) {
    // Use the real client IP; fall back to a fixed key if the header is absent.
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim()
              ?? req.headers.get('x-real-ip')
              ?? 'anonymous'

    const { success, limit, remaining, reset } = await limiter.limit(ip)

    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait before submitting again.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit':     String(limit),
            'X-RateLimit-Remaining': String(remaining),
            'X-RateLimit-Reset':     String(reset),
            'Retry-After':           String(Math.ceil((reset - Date.now()) / 1000)),
          },
        }
      )
    }
  }

  // ── Parse body ──────────────────────────────────────────────────────────────
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  // ── Honeypot check (fast-path before full validation) ───────────────────────
  if (typeof body === 'object' && body !== null && '_hp' in body) {
    const hp = (body as Record<string, unknown>)._hp
    if (typeof hp === 'string' && hp.length > 0) {
      // Return 200 to avoid tipping off bots that they were caught
      return NextResponse.json({ ok: true })
    }
  }

  // ── Server-side Zod validation ──────────────────────────────────────────────
  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed.', issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  const { _hp: _ignored, ...fields } = parsed.data

  // ── Supabase insert ─────────────────────────────────────────────────────────
  let supabase
  try {
    supabase = createServerSupabaseClient()
  } catch (err) {
    console.error('[enquiry] Supabase init error:', err)
    return NextResponse.json(
      { error: 'Service temporarily unavailable. Please try again later.' },
      { status: 503 }
    )
  }

  const { error: dbError } = await supabase
    .from('enquiries')
    .insert({
      name:    fields.name,
      email:   fields.email,
      phone:   fields.phone   || null,
      company: fields.company || null,
      service: fields.service,
      budget:  fields.budget  || null,
      message: fields.message,
      status:  'new',
    })

  if (dbError) {
    console.error('[enquiry] Supabase insert error:', dbError.message)
    return NextResponse.json(
      { error: 'Could not save your enquiry. Please try again or email us directly.' },
      { status: 500 }
    )
  }

  // ── Success — confirmed DB write ────────────────────────────────────────────
  return NextResponse.json({ ok: true }, { status: 201 })
}

// Reject all other HTTP methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 })
}
