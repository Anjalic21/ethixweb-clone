import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

/**
 * Returns a configured Ratelimit instance, or null in development when
 * Upstash env vars are not set.
 *
 * In production, missing env vars are a hard error — the caller must
 * block the request rather than allow unrestricted submissions.
 */
export function getRateLimiter(): Ratelimit | null {
  const url   = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN

  if (!url || !token) {
    if (process.env.NODE_ENV === 'production') {
      // Intentionally return null so the route handler can block the request.
      // Do NOT throw here — the caller decides the HTTP response.
      return null
    }
    // Development: warn once and skip rate limiting so local testing works.
    console.warn(
      '[ratelimit] UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN not set. ' +
      'Rate limiting is disabled in development. Set these vars before deploying.'
    )
    return null
  }

  const redis = new Redis({ url, token })

  // 5 submissions per IP per hour, sliding window.
  // Generous enough for legitimate use; tight enough to block abuse.
  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, '1 h'),
    prefix:  'ethix:enquiry',
    analytics: false,
  })
}
