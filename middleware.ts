import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default auth((req: NextRequest & { auth: unknown }) => {
  const { pathname } = req.nextUrl

  // /admin/login is public — never redirect it
  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  // All other /admin/* and /api/admin/* routes require a session
  if (!req.auth) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Unauthorised.' }, { status: 401 })
    }
    const loginUrl = new URL('/admin/login', req.url)
    loginUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
})

export const config = {
  // Match /admin/* and /api/admin/* but NOT /api/auth/* (NextAuth's own routes)
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
