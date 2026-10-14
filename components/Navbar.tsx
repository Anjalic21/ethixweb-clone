'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react'
import BrandLogo from '@/components/BrandLogo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/our-work', label: 'Our Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState<string>('03:32 PM')
  const pathname = usePathname()

  // Live IST time (Asia/Kolkata) with cleanup on unmount
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date()
        const istString = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
        setCurrentTime(istString)
      } catch {
        // graceful fallback
      }
    }
    updateTime()
    const interval = setInterval(updateTime, 10000)
    return () => clearInterval(interval)
  }, [])

  const isActive = (href: string, label: string) => {
    if (label === 'Home') return pathname === '/'
    if (label === 'About') return pathname === '/about'
    if (label === 'Services') return pathname === '/services'
    if (label === 'Industries') return pathname === '/industries'
    if (label === 'Our Work') return pathname === '/our-work'
    if (label === 'Blog') return pathname === '/blog'
    if (label === 'Contact') return pathname === '/contact'
    return false
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <nav
        className="max-w-[1240px] mx-auto rounded-full px-5 sm:px-6 py-2.5 flex items-center justify-between pointer-events-auto border border-white/[0.12] shadow-2xl transition-all"
        style={{
          background: 'rgba(24, 9, 13, 0.82)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(229, 29, 37, 0.08)',
        }}
        aria-label="Main navigation"
      >
        {/* ── Brand Logo: Official Ethixweb Logotype ── */}
        <Link
          href="/"
          className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3843] rounded-lg px-1 py-0.5"
          aria-label="Ethixweb Home"
        >
          <BrandLogo className="h-5 sm:h-6 w-auto" priority />
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden md:flex items-center gap-1.5" role="list">
          {navLinks.map(({ href, label }) => {
            const active = isActive(href, label)
            return (
              <li key={label}>
                <Link
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative px-3.5 py-1.5 text-xs sm:text-sm tracking-wide transition-colors ${
                    active
                      ? 'text-white font-semibold'
                      : 'text-[rgba(240,243,248,0.65)] hover:text-white'
                  }`}
                >
                  {label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-[-2px] left-3.5 right-3.5 h-[2px] bg-[#E51D25] rounded-full shadow-[0_0_8px_#E51D25]"
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* ── Right Items: Time Indicator, Theme Toggle, Start a project button ── */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Live India Time Pill */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/80 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-bold text-white/90">IN</span>
            <span className="text-[11px] text-white/70">{currentTime}</span>
            <ChevronDown size={11} className="text-white/40 ml-0.5" />
          </div>

          {/* White Pill CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full bg-white hover:bg-white/90 text-black text-xs sm:text-sm font-bold transition-all shadow-md shadow-white/10 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#FF3843] focus:ring-offset-2 focus:ring-offset-[#08090C]"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={14} className="stroke-[2.5]" aria-hidden="true" />
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <div className="flex items-center gap-2 sm:hidden">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1 px-3.5 min-h-[40px] rounded-full bg-white text-black text-xs font-bold"
          >
            <span>Start</span>
            <ArrowUpRight size={12} className="stroke-[2.5]" />
          </Link>
          <button
            type="button"
            className="p-2.5 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-full bg-white/[0.06] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#FF3843]"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Dropdown Menu ── */}
      {open && (
        <div
          className="sm:hidden mt-2 max-w-[1240px] mx-auto rounded-3xl p-5 border border-white/10 shadow-2xl pointer-events-auto"
          style={{
            background: 'rgba(20, 8, 12, 0.96)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <ul className="flex flex-col gap-2 mb-4" role="list">
            {navLinks.map(({ href, label }) => {
              const active = isActive(href, label)
              return (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm ${
                      active
                        ? 'bg-white/[0.08] text-white font-semibold'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <span>{label}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-[#E51D25]" />}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/70 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>IN {currentTime}</span>
            </div>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-[#FF3843] font-bold"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
