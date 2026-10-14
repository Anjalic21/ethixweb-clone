import Link from 'next/link'
import BrandLogo from '@/components/BrandLogo'
import { Mail, ArrowUpRight, ShieldCheck, Calendar, Twitter, Linkedin, Github, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-[#070508] border-t border-white/[0.08] overflow-hidden text-white">
      {/* Decorative red network artwork in the bottom corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-10 w-[420px] h-[420px] opacity-20 select-none"
      >
        <svg viewBox="0 0 300 300" fill="none" className="w-full h-full">
          <circle cx="300" cy="300" r="100" stroke="#E51D25" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="300" cy="300" r="180" stroke="#E51D25" strokeWidth="1" />
          <circle cx="300" cy="300" r="260" stroke="#E51D25" strokeWidth="1" strokeDasharray="8 8" />
          <line x1="100" y1="300" x2="300" y2="100" stroke="#E51D25" strokeWidth="1" />
          <line x1="20" y1="300" x2="300" y2="20" stroke="#E51D25" strokeWidth="0.8" strokeDasharray="3 3" />
          <circle cx="120" cy="280" r="4" fill="#E51D25" />
          <circle cx="210" cy="210" r="5" fill="#E51D25" />
          <circle cx="280" cy="120" r="4" fill="#E51D25" />
        </svg>
      </div>

      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3843] rounded" aria-label="Ethixweb Home">
              <BrandLogo className="h-7 sm:h-8 w-auto" />
            </Link>

            <p className="text-sm text-[rgba(240,243,248,0.65)] leading-relaxed max-w-sm">
              Digital agency engineering high-performance websites, mobile applications, and digital experiences for ambitious businesses across India.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ethixweb on Twitter"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#E51D25]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF3843]"
              >
                <Twitter size={15} aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ethixweb on LinkedIn"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#E51D25]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF3843]"
              >
                <Linkedin size={15} aria-hidden="true" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ethixweb on GitHub"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#E51D25]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF3843]"
              >
                <Github size={15} aria-hidden="true" />
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="mailto:hello@ethixweb.com"
                className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-[#FF3843] transition-colors"
              >
                <Mail size={15} className="text-[#FF3843]" />
                <span>hello@ethixweb.com</span>
              </a>

              <div className="inline-flex items-center gap-2 text-xs text-[rgba(240,243,248,0.50)]">
                <Clock size={13} className="text-[#FF3843]" />
                <span>Response SLA: Within 24 hours · Mon – Sat (IST)</span>
              </div>
            </div>
          </div>

          {/* Company Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm" role="list">
              <li>
                <Link href="/" className="text-white/60 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-white/60 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-white/60 hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/60 hover:text-white transition-colors">
                  Blog / Journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
              What We Build
            </h3>
            <ul className="space-y-2.5 text-sm" role="list">
              <li>
                <Link href="/services#website" className="text-white/60 hover:text-white transition-colors">
                  Web Architecture &amp; Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="text-white/60 hover:text-white transition-colors">
                  AI Assistants &amp; Automation
                </Link>
              </li>
              <li>
                <Link href="/services#growth" className="text-white/60 hover:text-white transition-colors">
                  SEO &amp; Growth Acquisition
                </Link>
              </li>
              <li>
                <Link href="/services#data" className="text-white/60 hover:text-white transition-colors">
                  Telemetry &amp; Data Dashboards
                </Link>
              </li>
              <li>
                <Link href="/services#accessibility" className="text-white/60 hover:text-white transition-colors">
                  Accessibility &amp; WCAG Compliance
                </Link>
              </li>
              <li>
                <Link href="/services#support" className="text-white/60 hover:text-white transition-colors">
                  Technical Support &amp; Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Appointment / Meeting CTA (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
              Get Started
            </h3>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E51D25] hover:bg-[#B32228] text-white text-xs font-bold transition-all shadow-md shadow-[#E51D25]/20 focus:outline-none focus:ring-2 focus:ring-[#FF3843]"
            >
              <Calendar size={13} aria-hidden="true" />
              <span>Book Discovery Call</span>
            </Link>
            <div className="mt-4 text-xs text-white/40 leading-relaxed">
              Pan-India Digital Delivery: <br />
              <span className="text-white/70">Remote engineering across Bengaluru, Mumbai, Delhi NCR &amp; all regions</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#FF3843]" aria-hidden="true" />
            <span>© {new Date().getFullYear()} Ethixweb. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about#operating-standards" className="hover:text-white transition-colors">
              Operating Standards &amp; Privacy
            </Link>
            <Link href="/about#operating-standards" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
            <span className="text-white/30 hidden md:inline">Engineered for Ambitious Indian Businesses</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
