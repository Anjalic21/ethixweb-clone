import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { createServerSupabaseClient } from '@/lib/supabase'
import StatusUpdater from '@/components/admin/StatusUpdater'
import LogoutButton from '@/components/admin/LogoutButton'
import BrandLogo from '@/components/BrandLogo'
import {
  STATUS_LABELS,
  STATUS_COLORS,
  type Enquiry,
  type EnquiryStatus,
} from '@/lib/types'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = { title: 'Enquiry Detail | Ethixweb Admin' }
export const dynamic = 'force-dynamic'

const SERVICE_LABELS: Record<string, string> = {
  web:         'Web Design & Development',
  mobile:      'Mobile App Development',
  marketing:   'Digital Marketing & SEO',
  uiux:        'UI/UX Design',
  performance: 'Performance Optimisation',
  brand:       'Brand & Visual Identity',
  other:       'Other',
}

const BUDGET_LABELS: Record<string, string> = {
  'under-50k':  'Under ₹50,000',
  '50k-150k':   '₹50,000 – ₹1,50,000',
  '150k-500k':  '₹1,50,000 – ₹5,00,000',
  'above-500k': 'Above ₹5,00,000',
  'not-sure':   'Not sure yet',
}

interface PageProps {
  params: { id: string }
}

export default async function EnquiryDetailPage({ params }: PageProps) {
  const session = await auth()
  const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(params?.id ?? '')
  if (!isUUID) notFound()

  let enquiry: Enquiry | null = null
  try {
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase
      .from('enquiries')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error || !data) notFound()
    enquiry = data as Enquiry
  } catch {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0C0D10]">
      {/* Top bar */}
      <header className="border-b border-white/[0.06] bg-[#0C0D10]/90 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-[#FF3843] rounded" aria-label="Ethixweb Home">
              <BrandLogo className="h-5 w-auto" />
            </Link>
            <span className="text-[rgba(231,235,242,0.35)] font-normal text-xs font-mono border-l border-white/10 pl-2.5">
              Admin
            </span>
          </div>
          <LogoutButton />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Back link */}
        <Link
          href="/admin"
          className="inline-flex items-center gap-1.5 text-sm text-[rgba(231,235,242,0.45)] hover:text-white transition-colors mb-6"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to enquiries
        </Link>

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">{enquiry.name}</h1>
            <p className="text-sm text-[rgba(231,235,242,0.45)] mt-1">
              {new Date(enquiry.created_at).toLocaleString('en-IN', {
                day: '2-digit', month: 'long', year: 'numeric',
                hour: '2-digit', minute: '2-digit',
              })}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${STATUS_COLORS[enquiry.status]}`}>
              {STATUS_LABELS[enquiry.status]}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: contact details */}
          <div className="lg:col-span-1 space-y-4">
            <div className="rounded-2xl bg-[#13141A] border border-white/[0.06] p-5">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[rgba(231,235,242,0.35)] mb-4">
                Contact
              </h2>
              <dl className="space-y-3">
                <div>
                  <dt className="text-xs text-[rgba(231,235,242,0.40)]">Email</dt>
                  <dd className="text-sm text-white mt-0.5">
                    <a href={`mailto:${enquiry.email}`} className="hover:text-[#E51D25] transition-colors">
                      {enquiry.email}
                    </a>
                  </dd>
                </div>
                {enquiry.phone && (
                  <div>
                    <dt className="text-xs text-[rgba(231,235,242,0.40)]">Phone</dt>
                    <dd className="text-sm text-white mt-0.5">{enquiry.phone}</dd>
                  </div>
                )}
                {enquiry.company && (
                  <div>
                    <dt className="text-xs text-[rgba(231,235,242,0.40)]">Company</dt>
                    <dd className="text-sm text-white mt-0.5">{enquiry.company}</dd>
                  </div>
                )}
              </dl>
            </div>

            <div className="rounded-2xl bg-[#13141A] border border-white/[0.06] p-5">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[rgba(231,235,242,0.35)] mb-4">
                Project
              </h2>
              <dl className="space-y-3">
                <div>
                  <dt className="text-xs text-[rgba(231,235,242,0.40)]">Service</dt>
                  <dd className="text-sm text-white mt-0.5">
                    {SERVICE_LABELS[enquiry.service] ?? enquiry.service}
                  </dd>
                </div>
                {enquiry.budget && (
                  <div>
                    <dt className="text-xs text-[rgba(231,235,242,0.40)]">Budget</dt>
                    <dd className="text-sm text-white mt-0.5">
                      {BUDGET_LABELS[enquiry.budget] ?? enquiry.budget}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Status update */}
            <div className="rounded-2xl bg-[#13141A] border border-white/[0.06] p-5">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[rgba(231,235,242,0.35)] mb-4">
                Update Status
              </h2>
              <StatusUpdater
                enquiryId={enquiry.id}
                currentStatus={enquiry.status as EnquiryStatus}
              />
            </div>
          </div>

          {/* Right: message */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-[#13141A] border border-white/[0.06] p-5 h-full">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[rgba(231,235,242,0.35)] mb-4">
                Message
              </h2>
              <p className="text-sm text-[rgba(231,235,242,0.75)] leading-relaxed whitespace-pre-wrap">
                {enquiry.message}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
