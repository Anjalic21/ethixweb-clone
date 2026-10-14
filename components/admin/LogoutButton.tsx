'use client'

import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/admin/login' })}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-[rgba(231,235,242,0.55)] hover:text-white hover:bg-white/[0.05] transition-colors"
    >
      <LogOut size={15} aria-hidden="true" />
      Sign out
    </button>
  )
}
