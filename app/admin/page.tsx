import type { Metadata } from 'next'
import Link from 'next/link'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { createServerSupabaseClient } from '@/lib/supabase'
import LogoutButton from '@/components/admin/LogoutButton'
import {
  STATUS_LABELS,
  STATUS_COLORS,
  ENQUIRY_STATUSES,
  type Enquiry,
  type EnquiryStatus,
} from '@/lib/types'
import { Search, Inbox } from 'lucide-react'

export const metadata: Metadata = { title: 'Dashboard | Ethixweb Admin' }

// Force dynamic — never cache this page
export const dynamic = 'force-dynamic'

const SERVICE_LABELS: Record<string, string> = {
  web:         'Web Dev',
  mobile:      'Mobile',
  marketing:   'Marketing',
  uiux:        'UI/UX',
  performance: 'Performance',
  brand:       'Brand',
  other:       'Other',
}

interface PageProps {
  searchParams: { q?: string; status?: string }
}

export default async function AdminDashboardPage({ searchParams }: PageProps) {
  // Double-check auth at the page level (layout also checks, but defence-in-depth)
  const session = await auth()
  if (!session?.user) redirect('/admin/login')

  const q      = (searchParams.q      ?? '').trim()
  const status = (searchParams.status ?? '').trim()

  const supabase = createServerSupabaseClient()

  let query = supabase
    .from('enquiries')
    .select('id, name, email, phone, company, service, budget, message, status, created_at')
    .order('created_at', { ascending: false })

  if (status && ENQUIRY_STATUSES.includes(status as EnquiryStatus)) {
    query = query.eq('status', status)
  }

  if (q) {
    query = query.or(`name.ilike.%${q}%,email.ilike.%${q}%`)
  }

  const { data: enquiries, error } = await query.returns<Enquiry[]>()

  return (
    <div className="min-h-screen bg-[#0C0D10]">
      {/* Top bar */}
      <header className="border-b border-white/[0.06] bg-[#0C0D10]/90 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-block w-6 h-6 rounded bg-[#E51D25]" aria-hidden="true" />
            <span className="font-bold text-white text-sm">
              Ethix<span className="text-[#E51D25]">web</span>
              <span className="text-[rgba(231,235,242,0.35)] font-normal ml-2">Admin</span>
            </span>
          </div>
          <LogoutButton />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Page heading */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">Enquiries</h1>
          <p className="text-sm text-[rgba(231,235,242,0.45)] mt-1">
            Manage and respond to incoming leads.
          </p>
        </div>

        {/* Search + filter bar */}
        <form method="GET" className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[rgba(231,235,242,0.30)] pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              name="q"
              defaultValue={q}
              placeholder="Search by name or email…"
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#13141A] border border-white/[0.07] text-white placeholder-[rgba(231,235,242,0.30)] text-sm focus:outline-none focus:border-[#E51D25]/40 transition-colors"
            />
          </div>

          <select
            name="status"
            defaultValue={status}
            className="px-3 py-2 rounded-lg bg-[#13141A] border border-white/[0.07] text-sm text-white focus:outline-none focus:border-[#E51D25]/40 transition-colors"
            aria-label="Filter by status"
          >
            <option value="">All statuses</option>
            {ENQUIRY_STATUSES.map((s) => (
              <option key={s} value={s}>{STATUS_LABELS[s]}</option>
            ))}
          </select>

          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-[#E51D25] hover:bg-[#B32228] text-white text-sm font-medium transition-colors"
          >
            Filter
          </button>

          {(q || status) && (
            <Link
              href="/admin"
              className="px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 text-[rgba(231,235,242,0.60)] hover:text-white text-sm transition-colors text-center"
            >
              Clear
            </Link>
          )}
        </form>

        {/* Error state */}
        {error && (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-300 mb-6">
            Failed to load enquiries: {error.message}
          </div>
        )}

        {/* Empty state */}
        {!error && (!enquiries || enquiries.length === 0) && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Inbox size={36} className="text-[rgba(231,235,242,0.20)] mb-3" />
            <p className="text-[rgba(231,235,242,0.40)] text-sm">
              {q || status ? 'No enquiries match your filters.' : 'No enquiries yet.'}
            </p>
          </div>
        )}

        {/* Table */}
        {enquiries && enquiries.length > 0 && (
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#13141A] border-b border-white/[0.06]">
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[rgba(231,235,242,0.35)]">Name</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[rgba(231,235,242,0.35)] hidden sm:table-cell">Email</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[rgba(231,235,242,0.35)] hidden md:table-cell">Service</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[rgba(231,235,242,0.35)]">Status</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[rgba(231,235,242,0.35)] hidden lg:table-cell">Received</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {enquiries.map((e) => (
                    <tr key={e.id} className="bg-[#0C0D10] hover:bg-[#13141A] transition-colors">
                      <td className="px-4 py-3 font-medium text-white whitespace-nowrap">{e.name}</td>
                      <td className="px-4 py-3 text-[rgba(231,235,242,0.60)] hidden sm:table-cell">{e.email}</td>
                      <td className="px-4 py-3 text-[rgba(231,235,242,0.60)] hidden md:table-cell">
                        {SERVICE_LABELS[e.service] ?? e.service}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${STATUS_COLORS[e.status]}`}>
                          {STATUS_LABELS[e.status]}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[rgba(231,235,242,0.40)] text-xs hidden lg:table-cell whitespace-nowrap">
                        {new Date(e.created_at).toLocaleDateString('en-IN', {
                          day: '2-digit', month: 'short', year: 'numeric',
                        })}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link
                          href={`/admin/enquiries/${e.id}`}
                          className="text-xs text-[#E51D25] hover:underline whitespace-nowrap"
                        >
                          View →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
