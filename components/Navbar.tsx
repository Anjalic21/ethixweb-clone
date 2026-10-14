'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06]"
      style={{
        background:
          'linear-gradient(180deg, rgba(12,13,16,0.92) 0%, rgba(18,10,12,0.88) 100%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold text-[1.15rem] tracking-tight shrink-0"
        >
          {/* Red square mark */}
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-7 h-7 rounded-[5px] bg-[#E51D25]"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2h4v4H2zM8 2h4v4H8zM2 8h4v4H2zM8 8h4v4H8z" fill="white" opacity="0.9" />
            </svg>
          </span>
          <span className="text-white">
            Ethix<span className="text-[#E51D25]">web</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive(href) ? 'page' : undefined}
                className={`relative px-3 py-1.5 text-sm rounded-md transition-colors ${
                  isActive(href)
                    ? 'text-white font-medium'
                    : 'text-[rgba(231,235,242,0.55)] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {label}
                {isActive(href) && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-3 right-3 h-px bg-[#E51D25] rounded-full"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-[#E51D25] hover:bg-[#C41920] text-white text-sm font-semibold transition-colors shadow-md shadow-[#E51D25]/15"
        >
          Get a Quote
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[rgba(231,235,242,0.80)] hover:text-white p-1.5 rounded-md transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-white/[0.06] px-4 pb-5"
          style={{ background: 'rgba(13,10,12,0.97)' }}
        >
          <ul className="flex flex-col pt-2" role="list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(href) ? 'page' : undefined}
                  className={`flex items-center gap-2 py-2.5 px-2 text-sm rounded-md transition-colors ${
                    isActive(href)
                      ? 'text-white font-medium'
                      : 'text-[rgba(231,235,242,0.60)] hover:text-white'
                  }`}
                >
                  {isActive(href) && (
                    <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[#E51D25]" />
                  )}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block text-center px-4 py-2.5 rounded-lg bg-[#E51D25] hover:bg-[#C41920] text-white text-sm font-semibold transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  )
}
