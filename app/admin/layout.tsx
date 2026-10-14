// This layout wraps all /admin/* pages including /admin/login.
// Do NOT add an auth redirect here — it would catch /admin/login itself
// and create an infinite redirect loop.
// Route protection is handled by:
//   1. middleware.ts  — redirects unauthenticated /admin/* (excluding /admin/login) to /admin/login
//   2. Each protected page — calls auth() and redirects individually
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#0C0D10] text-[#E7EBF2]">
      {children}
    </div>
  )
}
