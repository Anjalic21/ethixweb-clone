import type { Metadata } from 'next'
import { Suspense } from 'react'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import LoginForm from '@/components/admin/LoginForm'

export const metadata: Metadata = { title: 'Admin Login | Ethixweb' }

export default async function AdminLoginPage() {
  // Already authenticated — go straight to dashboard
  const session = await auth()
  if (session?.user) redirect('/admin')

  return (
    <div className="min-h-screen bg-[#0C0D10] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 font-bold text-xl tracking-tight">
            <span className="inline-block w-7 h-7 rounded bg-[#E51D25]" aria-hidden="true" />
            <span className="text-white">Ethix<span className="text-[#E51D25]">web</span></span>
          </span>
          <p className="mt-2 text-sm text-[rgba(231,235,242,0.45)]">Admin Dashboard</p>
        </div>

        <div className="rounded-2xl bg-[#13141A] border border-white/5 p-8">
          <h1 className="text-lg font-bold text-white mb-6">Sign in</h1>
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
