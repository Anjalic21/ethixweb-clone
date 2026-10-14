import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

const loginSchema = z.object({
  email:    z.string().email(),
  password: z.string().min(1),
})

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email:    { label: 'Email',    type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials)
        if (!parsed.success) return null

        const adminEmail   = process.env.ADMIN_EMAIL?.trim()
        const adminHash    = process.env.ADMIN_PASSWORD_HASH?.trim()

        if (!adminEmail || !adminHash) {
          console.error('[auth] ADMIN_EMAIL or ADMIN_PASSWORD_HASH is not set')
          return null
        }

        const { email, password } = parsed.data

        if (email.trim() !== adminEmail) return null

        const valid = await bcrypt.compare(password, adminHash)
        if (!valid) return null

        return { id: '1', email: adminEmail, name: 'Admin' }
      },
    }),
  ],

  pages: {
    signIn: '/admin/login',
  },

  session: { strategy: 'jwt' },

  callbacks: {
    // Keep the session lean — only expose what the client needs
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.email = token.email as string
      }
      return session
    },
  },
})
