import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NetworkViz from '@/components/NetworkViz'
import {
  Globe,
  Smartphone,
  BarChart3,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Search,
  PenTool,
  Code2,
  Rocket,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ethixweb — Digital Solutions for India',
  description:
    'Ethixweb delivers premium web design, development, and digital marketing solutions tailored for Indian businesses.',
}

const services = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description:
      'Pixel-perfect, performance-first websites built with modern frameworks and tailored to your brand.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile applications that deliver seamless experiences on iOS and Android.',
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing & SEO',
    description:
      'Data-driven SEO, paid campaigns, and content strategies that grow your reach across India.',
  },
  {
    icon: ShieldCheck,
    title: 'UI/UX Design',
    description:
      'Research-backed interfaces that convert visitors into customers through intuitive design.',
  },
  {
    icon: Zap,
    title: 'Performance Optimisation',
    description:
      'Speed audits, Core Web Vitals improvements, and infrastructure tuning for strong PageSpeed scores.',
  },
]

const process = [
  {
    step: '01',
    icon: Search,
    title: 'Discover',
    description:
      'We start by understanding your business, goals, and audience through a structured discovery session.',
  },
  {
    step: '02',
    icon: PenTool,
    title: 'Design',
    description:
      'Wireframes and high-fidelity designs are crafted and reviewed with you before a single line of code is written.',
  },
  {
    step: '03',
    icon: Code2,
    title: 'Build',
    description:
      'We build your product using modern, maintainable technology with regular progress updates.',
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Launch',
    description:
      'We deploy, test, and hand over your product with documentation and post-launch support included.',
  },
]

const reasons = [
  'India-focused market understanding',
  'Transparent, fixed-price engagements',
  'Dedicated point of contact on every project',
  'Post-launch support included',
]

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero — two-column ── */}
        <section
          className="relative min-h-screen flex items-center hero-bg bg-grid overflow-hidden pt-16"
          aria-labelledby="hero-heading"
        >
          {/* Subtle top-right corner glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 w-[520px] h-[520px] rounded-full"
            style={{
              background:
                'radial-gradient(ellipse at top right, rgba(139,24,28,0.20) 0%, transparent 65%)',
            }}
          />

          <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* ── Left: text ── */}
              <div className="text-center lg:text-left">
                {/* Eyebrow */}
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E51D25]/25 bg-[#E51D25]/8 text-[#E51D25] text-xs font-medium tracking-wide mb-7">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#E51D25] animate-pulse"
                    aria-hidden="true"
                  />
                  Digital Agency · India
                </span>

                {/* Headline */}
                <h1
                  id="hero-heading"
                  className="text-[2.6rem] sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-extrabold tracking-tight text-white leading-[1.08] mb-6"
                >
                  We build the tech.{' '}
                  <br className="hidden sm:block" />
                  You run the{' '}
                  <span className="text-gradient">business.</span>
                </h1>

                {/* Supporting copy */}
                <p className="text-base sm:text-lg text-[rgba(231,235,242,0.62)] leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                  Ethixweb designs and builds websites, mobile apps, and digital marketing
                  solutions for Indian businesses that want to grow online — without the
                  complexity.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E51D25] hover:bg-[#C41920] text-white font-semibold text-sm transition-colors shadow-lg shadow-[#E51D25]/20"
                  >
                    Start a project
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/12 hover:border-white/25 hover:bg-white/[0.03] text-white font-semibold text-sm transition-colors"
                  >
                    Explore services
                  </Link>
                </div>
              </div>

              {/* ── Right: network visualization ── */}
              <div className="flex items-center justify-center lg:justify-end">
                <NetworkViz />
              </div>

            </div>
          </div>
        </section>

        {/* ── Services Preview ── */}
        <section
          className="bg-[#0E0F14] py-24 border-t border-white/[0.04]"
          id="services"
          aria-labelledby="services-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2
                id="services-heading"
                className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight"
              >
                What We Build
              </h2>
              <p className="max-w-xl mx-auto text-[rgba(231,235,242,0.55)] leading-relaxed">
                End-to-end digital services designed to take your business from idea to impact.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="group relative p-6 rounded-2xl bg-[#13141A] border border-white/[0.06] hover:border-[#E51D25]/25 hover:bg-[#14151C] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E51D25]/10 flex items-center justify-center mb-4 group-hover:bg-[#E51D25]/18 transition-colors">
                    <Icon size={20} className="text-[#E51D25]" aria-hidden="true" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-[0.95rem]">{title}</h3>
                  <p className="text-sm text-[rgba(231,235,242,0.50)] leading-relaxed">
                    {description}
                  </p>
                </article>
              ))}

              {/* View all */}
              <Link
                href="/services"
                className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-dashed border-white/[0.08] hover:border-[#E51D25]/30 hover:bg-[#E51D25]/[0.03] transition-colors text-center"
              >
                <span className="text-[rgba(231,235,242,0.70)] font-semibold mb-1.5 text-sm group-hover:text-white transition-colors">
                  View All Services
                </span>
                <ArrowRight
                  size={16}
                  className="text-[rgba(231,235,242,0.30)] group-hover:text-[#E51D25] transition-colors"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* ── How We Work ── */}
        <section
          className="bg-[#0C0D10] py-24 border-t border-white/[0.04]"
          aria-labelledby="process-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2
                id="process-heading"
                className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight"
              >
                How We Work
              </h2>
              <p className="max-w-xl mx-auto text-[rgba(231,235,242,0.55)] leading-relaxed">
                A clear, collaborative process from first conversation to final delivery.
              </p>
            </div>

            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
              {process.map(({ step, icon: Icon, title, description }, i) => (
                <li
                  key={step}
                  className="relative p-6 rounded-2xl bg-[#13141A] border border-white/[0.06]"
                >
                  {/* Connector (desktop) */}
                  {i < process.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden lg:block absolute top-[2.2rem] left-full w-5 h-px bg-[#E51D25]/20 z-10"
                    />
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#E51D25]/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#E51D25]" aria-hidden="true" />
                    </div>
                    <span className="text-[10px] font-bold text-[rgba(231,235,242,0.20)] tracking-[0.15em] uppercase">
                      {step}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-[0.95rem]">{title}</h3>
                  <p className="text-sm text-[rgba(231,235,242,0.48)] leading-relaxed">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Why Ethixweb ── */}
        <section
          className="py-24 bg-[#0E0F14] border-t border-white/[0.04]"
          aria-labelledby="why-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2
                  id="why-heading"
                  className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight"
                >
                  Why Businesses Choose Ethixweb
                </h2>
                <p className="text-[rgba(231,235,242,0.58)] mb-8 leading-relaxed">
                  We combine global design standards with an understanding of the Indian market
                  to deliver products that work for your audience and your business goals.
                </p>
                <ul className="space-y-3.5" role="list">
                  {reasons.map((r) => (
                    <li
                      key={r}
                      className="flex items-center gap-3 text-[rgba(231,235,242,0.78)] text-sm"
                    >
                      <CheckCircle2
                        size={17}
                        className="text-[#E51D25] shrink-0"
                        aria-hidden="true"
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Value panel — replaces the "90+" block */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: 'PageSpeed',
                    value: '90+',
                    sub: 'Score target we aim for on every build',
                  },
                  {
                    label: 'Turnaround',
                    value: '1 day',
                    sub: 'Response time on every enquiry',
                  },
                  {
                    label: 'Approach',
                    value: 'Fixed',
                    sub: 'Transparent, fixed-price engagements',
                  },
                  {
                    label: 'Support',
                    value: 'Included',
                    sub: 'Post-launch support on every project',
                  },
                ].map(({ label, value, sub }) => (
                  <div
                    key={label}
                    className="p-5 rounded-2xl bg-[#13141A] border border-white/[0.06] flex flex-col gap-1"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[rgba(231,235,242,0.30)]">
                      {label}
                    </span>
                    <span className="text-2xl font-extrabold text-white leading-tight">
                      {value}
                    </span>
                    <span className="text-xs text-[rgba(231,235,242,0.45)] leading-snug">
                      {sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section
          className="py-20 bg-[#0C0D10] border-t border-white/[0.04]"
          aria-labelledby="cta-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            {/* Subtle glow behind CTA */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full blur-[80px]"
              style={{ background: 'rgba(139,24,28,0.15)' }}
            />
            <h2
              id="cta-heading"
              className="relative text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight"
            >
              Ready to Build Something?
            </h2>
            <p className="relative text-[rgba(231,235,242,0.58)] mb-8 leading-relaxed">
              Tell us about your project and we will get back to you within one business day.
            </p>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#E51D25] hover:bg-[#C41920] text-white font-semibold text-sm transition-colors shadow-lg shadow-[#E51D25]/20"
            >
              Send an Enquiry
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
