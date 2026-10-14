import Link from 'next/link'
import { Mail } from 'lucide-react'

const pageLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/services', label: 'Web Design & Development' },
  { href: '/services', label: 'Mobile App Development' },
  { href: '/services', label: 'Digital Marketing & SEO' },
  { href: '/services', label: 'UI/UX Design' },
  { href: '/services', label: 'Performance Optimisation' },
]

export default function Footer() {
  return (
    <footer className="bg-[#13141A] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold text-xl tracking-tight mb-4"
            >
              <span className="inline-block w-6 h-6 rounded bg-[#E51D25]" aria-hidden="true" />
              <span className="text-white">
                Ethix<span className="text-[#E51D25]">web</span>
              </span>
            </Link>
            <p className="text-sm text-[rgba(231,235,242,0.50)] leading-relaxed max-w-xs mt-3">
              Premium digital solutions crafted for Indian businesses ready to grow online.
            </p>
            <a
              href="mailto:hello@ethixweb.com"
              className="inline-flex items-center gap-2 mt-5 text-sm text-[rgba(231,235,242,0.50)] hover:text-white transition-colors"
            >
              <Mail size={14} />
              hello@ethixweb.com
            </a>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[rgba(231,235,242,0.35)] mb-4">
              Pages
            </h3>
            <nav aria-label="Footer page links">
              <ul className="space-y-2.5" role="list">
                {pageLinks.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-[rgba(231,235,242,0.55)] hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[rgba(231,235,242,0.35)] mb-4">
              Services
            </h3>
            <nav aria-label="Footer service links">
              <ul className="space-y-2.5" role="list">
                {serviceLinks.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-[rgba(231,235,242,0.55)] hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[rgba(231,235,242,0.30)]">
          <span>© {new Date().getFullYear()} Ethixweb. All rights reserved.</span>
          <span>Built for the Indian market.</span>
        </div>
      </div>
    </footer>
  )
}
