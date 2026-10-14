import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GlobeViz from '@/components/GlobeViz'
import {
  Globe,
  Smartphone,
  ShoppingBag,
  Palette,
  Zap,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Shield,
  Gauge,
  Clock,
  Briefcase,
  Store,
  Factory,
  HeartPulse,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ethixweb — Digital Experiences Built for India’s Next Generation of Businesses',
  description:
    'Ethixweb helps Indian startups, growing businesses, and established brands build fast websites, mobile applications, and digital experiences that turn visitors into customers.',
}

const trustIndicators = [
  {
    icon: Smartphone,
    text: "Designed for India's mobile-first audience",
  },
  {
    icon: Zap,
    text: 'Built for variable devices & network conditions',
  },
  {
    icon: TrendingUp,
    text: 'Digital experiences for growing Indian businesses',
  },
]

const services = [
  {
    icon: Globe,
    tag: 'Web Engineering',
    title: 'Custom Websites & Web Apps',
    description:
      'Engineered with Next.js and TypeScript for blazing speed, robust security, and seamless mobile responsiveness across Indian cellular networks.',
    benefit: 'Sub-second load times & higher search rankings',
    href: '/services#web',
  },
  {
    icon: Smartphone,
    tag: 'Mobile Development',
    title: 'Cross-Platform Mobile Apps',
    description:
      'Native-feel iOS and Android applications built with React Native. Optimized for low memory footprints and seamless performance across diverse Android devices.',
    benefit: 'Fast time-to-market with reduced maintenance overhead',
    href: '/services#mobile',
  },
  {
    icon: ShoppingBag,
    tag: 'E-commerce & D2C',
    title: 'High-Converting D2C Storefronts',
    description:
      'Tailored shopping experiences with seamless Indian payment gateway integrations (UPI, Razorpay, Cashfree, PhonePe) and lightning-fast checkout.',
    benefit: 'Reduced cart abandonment & friction-free Indian checkout',
    href: '/services#commerce',
  },
  {
    icon: Palette,
    tag: 'UI/UX & Brand Systems',
    title: 'Editorial Interface & Brand Design',
    description:
      'Intuitive user interfaces that capture the ambition of your brand. Clean design systems crafted in Figma with full component documentation.',
    benefit: 'Distinctive brand authority that inspires customer trust',
    href: '/services#design',
  },
  {
    icon: TrendingUp,
    tag: 'Search & Visibility',
    title: 'Data-Driven SEO & Growth',
    description:
      'Technical SEO architecture, localized search visibility, and schema optimization built directly into your website’s code for regional reach.',
    benefit: 'Sustainable organic customer acquisition without recurring ad waste',
    href: '/services#seo',
  },
  {
    icon: Zap,
    tag: 'Speed & Optimization',
    title: 'Core Web Vitals & Speed Tuning',
    description:
      'Comprehensive performance audits, bundle size reductions, image compression pipelines, and edge CDN routing targeting 90+ PageSpeed.',
    benefit: 'Superior user retention even on fluctuating mobile connections',
    href: '/services#speed',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategic Scoping',
    description:
      'We unpack your business objectives, target Indian demographics, and technical constraints to formulate a clear, fixed-price sprint plan.',
    deliverable: 'Technical Roadmap & Scope Specification',
  },
  {
    number: '02',
    title: 'Architecture & UI/UX Design',
    description:
      'We craft high-fidelity prototypes and design systems. You preview, interact with, and approve the user experience before code is written.',
    deliverable: 'Clickable Prototype & Component Library',
  },
  {
    number: '03',
    title: 'Precision Full-Stack Engineering',
    description:
      'Our team builds your product using modern, maintainable stacks. You receive regular staging deployments to test progress firsthand.',
    deliverable: 'Production-Ready Codebase & Staging Previews',
  },
  {
    number: '04',
    title: 'Edge Deployment & Ongoing Care',
    description:
      'Zero-downtime launch, domain DNS setup, Core Web Vitals audit, and 30 days of post-launch stabilization support included.',
    deliverable: 'Live Production Launch & Handover Documentation',
  },
]

const capabilityCases = [
  {
    badge: 'D2C Storefront Blueprint',
    featured: true,
    title: 'High-Speed E-commerce for Indian Consumer Brands',
    description:
      'Designed specifically for mobile commerce with instant UPI deep-linking (PhonePe, GPay, Paytm) and Razorpay integration. Engineered with server-side rendered catalogs for sub-800ms page transitions and zero checkout drop-offs across Tier-1, Tier-2, and Tier-3 Indian cities.',
    metrics: [
      { label: 'Mobile Latency', value: '< 250ms' },
      { label: 'Payments', value: 'UPI / Cards' },
      { label: 'Stack', value: 'Next.js + Edge' },
    ],
  },
  {
    badge: 'MSME Quotation Engine',
    featured: false,
    title: 'Cloud Operations & RFQ Portal for Indian MSMEs',
    description:
      'A streamlined digital portal designed for Indian manufacturers and distributors in industrial hubs like Pune and Peenya. Automates lead intake, generates GST-compliant commercial estimates, and offers downloadable machine capability sheets.',
    metrics: [
      { label: 'Workflows', value: 'Real-time' },
      { label: 'Quoting', value: 'GST-Ready' },
      { label: 'Stack', value: 'React + Supabase' },
    ],
  },
  {
    badge: 'Healthcare Clinic Blueprint',
    featured: false,
    title: 'Patient Discovery & Consultation Hub for Clinics',
    description:
      'A reassuring, patient-centric web platform featuring verified doctor credentials, transparent treatment guidelines, local clinic SEO, and friction-free appointment scheduling synced with WhatsApp notifications.',
    metrics: [
      { label: 'Enquiry Flow', value: 'WhatsApp Sync' },
      { label: 'Local Search', value: 'Geo-Targeted' },
      { label: 'UX Target', value: 'Senior-Friendly' },
    ],
  },
  {
    badge: 'Mobile Product Blueprint',
    featured: false,
    title: 'Cross-Platform App for High-Growth Startups',
    description:
      'Cross-platform iOS and Android application with offline data synchronization, biometric authentication, and smooth 60fps animations across diverse Android and iOS hardware.',
    metrics: [
      { label: 'Platforms', value: 'iOS & Android' },
      { label: 'Offline Sync', value: 'Enabled' },
      { label: 'Stack', value: 'React Native' },
    ],
  },
]

const valueProps = [
  {
    icon: Smartphone,
    title: 'Mobile-First for Indian Network Realities',
    description:
      'Over 80% of Indian internet traffic happens on mobile devices. We optimize asset weights, implement aggressive caching, and guarantee smooth performance on 4G and 5G connections alike.',
  },
  {
    icon: Shield,
    title: 'Transparent Fixed-Price Sprints in INR (₹)',
    description:
      'No surprise billing, nebulous hourly rates, or scope creep. We provide itemized, honest proposals with defined milestones before work starts.',
  },
  {
    icon: Cpu,
    title: '100% In-House Engineering & Zero Tech Debt',
    description:
      'You collaborate directly with senior engineers and designers. We write clean, well-commented TypeScript code that your team can confidently own and scale.',
  },
  {
    icon: Layers,
    title: 'Complete Ownership & Zero Vendor Lock-in',
    description:
      'You own 100% of the code, repositories, domain configurations, and credentials from day one. Full documentation and clean handovers are guaranteed.',
  },
]

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        {/* ── 1. Hero Section ── */}
        <section
          className="relative min-h-[92vh] flex items-center hero-bg bg-grid pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Ambient Lighting Gradients */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-25"
            style={{
              background: 'radial-gradient(circle, #E51D25 0%, #8A181C 50%, transparent 70%)',
            }}
          />

          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Hero Copy (7 cols) */}
              <div className="lg:col-span-7 text-center lg:text-left z-10">
                {/* Agency Pill Badge */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#FF3843] animate-pulse" aria-hidden="true" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[rgba(240,243,248,0.85)]">
                    Digital Agency for Ambitious India
                  </span>
                </div>

                {/* Primary Headline */}
                <h1
                  id="hero-heading"
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold tracking-tight text-white leading-[1.08] mb-6"
                >
                  Digital experiences built for{' '}
                  <span className="text-gradient-red">India’s next generation of businesses.</span>
                </h1>

                {/* Supporting Copy */}
                <p className="text-base sm:text-lg lg:text-xl text-[rgba(240,243,248,0.70)] leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 font-normal">
                  Ethixweb helps Indian startups, growing businesses, and established brands build fast websites, mobile applications, and digital experiences that turn visitors into customers.
                </p>

                {/* Primary & Secondary CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#E51D25] via-[#D11A21] to-[#8A181C] hover:from-[#FF3843] hover:to-[#E51D25] text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-[#E51D25]/25 hover:shadow-[#E51D25]/40 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Start a Project</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>

                  <Link
                    href="/services"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 text-white font-semibold text-base transition-all duration-200 backdrop-blur-sm"
                  >
                    <span>Explore Services</span>
                    <ArrowUpRight size={17} className="text-[rgba(240,243,248,0.6)]" aria-hidden="true" />
                  </Link>
                </div>

                {/* Sub-CTA Indian Sector Navigation Links */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-[rgba(240,243,248,0.55)] mb-8">
                  <span className="font-mono uppercase text-[10px] tracking-wider text-white/40">Serving:</span>
                  <Link href="/industries#retail" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/20">D2C &amp; Retail</Link>
                  <span>•</span>
                  <Link href="/industries#manufacturing" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/20">MSMEs</Link>
                  <span>•</span>
                  <Link href="/industries#healthcare" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/20">Healthcare</Link>
                  <span>•</span>
                  <Link href="/industries#startups" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/20">Startups</Link>
                  <span>•</span>
                  <Link href="/industries" className="text-[#FF454E] font-medium hover:underline">All 8 Sectors →</Link>
                </div>

                {/* Trust Markers Bar with Credible Indian Context */}
                <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                  {trustIndicators.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#E51D25]/10 border border-[#E51D25]/25 flex items-center justify-center shrink-0">
                        <Icon size={14} className="text-[#FF454E]" />
                      </div>
                      <span className="text-xs text-[rgba(240,243,248,0.80)] font-medium leading-snug">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Signature Animated Digital Globe & India Ecosystem (5 cols) */}
              <div className="lg:col-span-5 flex items-center justify-center relative w-full">
                <GlobeViz />
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Actual Services Section ── */}
        <section
          id="services"
          className="py-24 lg:py-32 section-bg-dark border-t border-white/[0.06] relative"
          aria-labelledby="services-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-3xl mb-16">
              <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-3">
                Full-Lifecycle Solutions
              </span>
              <h2
                id="services-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
              >
                End-to-end digital capabilities designed to generate business revenue.
              </h2>
              <p className="text-base sm:text-lg text-[rgba(240,243,248,0.60)] leading-relaxed">
                We combine modern engineering practices with sharp design to craft digital touchpoints that convert visitors into loyal clients.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(({ icon: Icon, tag, title, description, benefit, href }) => (
                <article
                  key={title}
                  className="premium-card rounded-2xl p-7 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header with Icon and Category Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF3843] group-hover:border-[#E51D25]/40 group-hover:bg-[#E51D25]/10 transition-colors">
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[rgba(240,243,248,0.45)]">
                        {tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF3843] transition-colors">
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[rgba(240,243,248,0.60)] leading-relaxed mb-6">
                      {description}
                    </p>
                  </div>

                  {/* Benefit & Link Footer */}
                  <div className="pt-4 border-t border-white/[0.06] mt-auto">
                    <div className="flex items-center gap-2 text-xs text-[rgba(240,243,248,0.75)] font-medium mb-3">
                      <Sparkles size={13} className="text-[#FF3843] shrink-0" />
                      <span>{benefit}</span>
                    </div>

                    <Link
                      href={href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#FF3843] transition-colors"
                    >
                      <span>Explore Capability</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Featured Work & Conceptual Architecture Showcase ── */}
        <section
          id="work"
          className="py-24 lg:py-32 bg-[#08090C] border-t border-white/[0.06] relative"
          aria-labelledby="work-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-3">
                  Agency Architecture &amp; Capabilities
                </span>
                <h2
                  id="work-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
                >
                  Engineered for real-world Indian business constraints.
                </h2>
                <p className="text-base text-[rgba(240,243,248,0.60)] leading-relaxed">
                  A look at our architectural blueprints and capability concepts, demonstrating how we solve high concurrency, UPI payment checkout flows, and edge mobile performance.
                </p>
              </div>

              <div className="shrink-0">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-[rgba(240,243,248,0.50)] font-mono">
                  Concept Blueprints · Honest Technical Specs
                </span>
              </div>
            </div>

            {/* Architecture Cards Grid — Editorial Composition */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilityCases.map(({ badge, featured, title, description, metrics }) => (
                <div
                  key={title}
                  className={`rounded-3xl p-8 bg-gradient-to-b from-[#141622] via-[#10121A] to-[#0A0B10] border border-white/[0.08] hover:border-[#E51D25]/40 hover:-translate-y-1 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden ${
                    featured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-b from-[#191522] via-[#130E17] to-[#0B0910] border-[#E51D25]/25' : ''
                  }`}
                >
                  {/* Subtle inner hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#E51D25]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-block px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-[#E51D25]/10 text-[#FF454E] border border-[#E51D25]/20">
                        {badge}
                      </span>
                      {featured && (
                        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                          High-Concurrency Blueprint
                        </span>
                      )}
                    </div>

                    <h3 className={`font-bold text-white mb-3 leading-snug group-hover:text-[#FF3843] transition-colors ${
                      featured ? 'text-xl sm:text-2xl' : 'text-lg'
                    }`}>
                      {title}
                    </h3>

                    <p className="text-sm text-[rgba(240,243,248,0.65)] leading-relaxed mb-6">
                      {description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-white/[0.08] grid grid-cols-3 gap-2 relative z-10">
                    {metrics.map(({ label, value }) => (
                      <div key={label} className="flex flex-col">
                        <span className="text-[10px] font-mono text-[rgba(240,243,248,0.40)] uppercase">
                          {label}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-white mt-0.5">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Link to Industries Deep-Dives */}
            <div className="mt-12 text-center">
              <Link
                href="/industries"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#E51D25]/40 text-xs sm:text-sm font-semibold text-white transition-all shadow-md group"
              >
                <span>Explore specialized solutions across 8 Indian business sectors</span>
                <ArrowRight size={14} className="text-[#FF454E] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 4. Process Timeline Section ── */}
        <section
          className="py-24 lg:py-32 section-bg-dark border-t border-white/[0.06] relative"
          aria-labelledby="process-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-3">
                Methodology
              </span>
              <h2
                id="process-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
              >
                A disciplined engineering workflow with zero guesswork.
              </h2>
              <p className="text-base text-[rgba(240,243,248,0.60)] leading-relaxed">
                From initial whiteboard architecture to continuous edge deployment, we keep communication transparent and deliverables clearly defined.
              </p>
            </div>

            <div className="relative">
              {/* Subtle progressive connecting line on desktop */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute top-[2.75rem] left-8 right-8 h-px bg-gradient-to-r from-[#E51D25]/10 via-[#E51D25]/35 to-[#E51D25]/10 pointer-events-none z-0"
              />

              <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10" role="list">
                {processSteps.map(({ number, title, description, deliverable }) => (
                  <li
                    key={number}
                    className="rounded-2xl p-6 bg-[#111319] border border-white/[0.07] hover:border-[#E51D25]/35 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between shadow-lg"
                  >
                    <div>
                      {/* Top Step Number Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-black font-mono text-[rgba(240,243,248,0.22)]">
                          {number}
                        </span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E51D25] shadow-[0_0_8px_#E51D25]" aria-hidden="true" />
                      </div>

                      <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                      <p className="text-xs text-[rgba(240,243,248,0.55)] leading-relaxed mb-6">
                        {description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/[0.05]">
                      <span className="block text-[10px] font-mono text-[rgba(240,243,248,0.40)] uppercase mb-0.5">
                        Key Milestone
                      </span>
                      <span className="text-xs font-medium text-white/90">
                        {deliverable}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── 5. Why Ethixweb (Market-Specific Advantage) ── */}
        <section
          className="py-24 lg:py-32 bg-[#08090C] border-t border-white/[0.06] relative"
          aria-labelledby="why-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Why Ethixweb Narrative */}
              <div className="lg:col-span-6">
                <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-3">
                  Strategic Advantage
                </span>
                <h2
                  id="why-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6"
                >
                  Why ambitious brands choose Ethixweb over generic agencies.
                </h2>
                <p className="text-base text-[rgba(240,243,248,0.65)] leading-relaxed mb-8">
                  Most digital agencies either charge exorbitant global fees or deliver low-quality, template-ridden WordPress websites that collapse on Indian mobile networks. Ethixweb solves this by uniting high-end engineering craft with transparent, India-focused delivery.
                </p>

                {/* Grid of key value props */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {valueProps.map(({ icon: Icon, title, description }) => (
                    <div key={title} className="flex flex-col">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF3843] mb-3 shrink-0">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-sm font-bold text-white mb-1.5">{title}</h3>
                      <p className="text-xs text-[rgba(240,243,248,0.55)] leading-relaxed">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Quantitative Commitment Dashboard */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#161822] to-[#0F1017] border border-white/[0.08] shadow-2xl relative overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#E51D25]/15 blur-[60px]"
                  />

                  <div className="relative z-10">
                    <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-[rgba(240,243,248,0.40)] mb-6">
                      Engineering Standards &amp; Benchmarks
                    </span>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="flex items-center gap-2 text-xs font-mono text-[rgba(240,243,248,0.50)] uppercase mb-2">
                          <Gauge size={14} className="text-[#FF3843]" />
                          PageSpeed Goal
                        </div>
                        <div className="text-3xl sm:text-4xl font-black text-white">90+</div>
                        <p className="text-[11px] text-[rgba(240,243,248,0.50)] mt-1.5">
                          Target Core Web Vitals score on mobile &amp; desktop
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="flex items-center gap-2 text-xs font-mono text-[rgba(240,243,248,0.50)] uppercase mb-2">
                          <Clock size={14} className="text-[#FF3843]" />
                          Inquiry SLA
                        </div>
                        <div className="text-3xl sm:text-4xl font-black text-white">24h</div>
                        <p className="text-[11px] text-[rgba(240,243,248,0.50)] mt-1.5">
                          Direct engineer response on all qualified inquiries
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="flex items-center gap-2 text-xs font-mono text-[rgba(240,243,248,0.50)] uppercase mb-2">
                          <Shield size={14} className="text-[#FF3843]" />
                          Billing Integrity
                        </div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-white">Fixed Sprints</div>
                        <p className="text-[11px] text-[rgba(240,243,248,0.50)] mt-1.5">
                          Milestones in INR (₹) with zero hidden fees
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="flex items-center gap-2 text-xs font-mono text-[rgba(240,243,248,0.50)] uppercase mb-2">
                          <Layers size={14} className="text-[#FF3843]" />
                          Ownership
                        </div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-white">100% IP</div>
                        <p className="text-[11px] text-[rgba(240,243,248,0.50)] mt-1.5">
                          Full source code, Git repo, and deployment ownership
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. High-Impact Final CTA Banner ── */}
        <section
          className="py-24 lg:py-32 relative overflow-hidden border-t border-white/[0.06]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(138, 24, 28, 0.28) 0%, rgba(8, 9, 12, 0.95) 75%)',
          }}
          aria-labelledby="cta-heading"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[110px] opacity-25"
            style={{ background: 'radial-gradient(circle, #E51D25 0%, #8A181C 70%, transparent 100%)' }}
          />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-4">
              Let’s Build Your Digital Advantage
            </span>

            <h2
              id="cta-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
            >
              Ready to elevate your digital presence in the Indian market?
            </h2>

            <p className="text-base sm:text-lg text-[rgba(240,243,248,0.70)] max-w-2xl mx-auto mb-10 leading-relaxed">
              Tell us about your brand, technical goals, and timeline. We will review your requirements and provide an honest, actionable proposal within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#E51D25] via-[#D11A21] to-[#8A181C] hover:from-[#FF3843] hover:to-[#E51D25] text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-[#E51D25]/30 hover:-translate-y-0.5"
              >
                <span>Start a Project</span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link
                href="/industries"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/30 text-white font-medium text-base transition-all"
              >
                <span>Explore Industries We Serve</span>
                <ArrowUpRight size={16} className="text-white/60" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
