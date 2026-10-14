import { createClient } from '@supabase/supabase-js'

/**
 * Server-only Supabase client.
 *
 * Uses SUPABASE_SECRET_KEY (no NEXT_PUBLIC_ prefix) so Next.js never
 * bundles this key into client-side JavaScript.
 *
 * Must only be imported by server-side code: API routes and Server Components.
 */
export function createServerSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    throw new Error(
      'Missing Supabase environment variables: ' +
      'NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SECRET_KEY (or SUPABASE_SERVICE_ROLE_KEY) must be set in .env.local'
    )
  }

  return createClient(url, key)
}
