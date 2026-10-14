import type { Metadata } from 'next'
import { Suspense } from 'react'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import LoginForm from '@/components/admin/LoginForm'
import BrandLogo from '@/components/BrandLogo'

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
          <Link href="/" className="inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#FF3843] rounded" aria-label="Ethixweb Home">
            <BrandLogo className="h-8 w-auto" priority />
          </Link>
          <p className="mt-3 text-xs font-mono tracking-widest uppercase text-[rgba(231,235,242,0.45)]">ADMIN DASHBOARD</p>
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
