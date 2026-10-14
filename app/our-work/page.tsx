'use client'

import { useState, useId } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  ArrowUpRight,
  Star,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Award,
  Layers,
  Wrench,
  Search,
  Zap,
  Globe2,
  Filter,
  X,
  Smartphone,
  Flame,
  Droplets,
  Home as HomeIcon,
  Compass,
  Building2,
  Activity
} from 'lucide-react'

// Case study project types
interface CaseStudy {
  id: string
  title: string
  category: 'Web Design' | 'SEO' | 'Paid Media' | 'Social' | 'UX Design' | 'Content'
  categories: Array<'Web Design' | 'SEO' | 'Paid Media' | 'Social' | 'UX Design' | 'Content'>
  client: string
  year: string
  tagline: string
  resultBadge: string
  description: string
  problem: string
  solution: string
  techStack: string[]
  metrics: { label: string; value: string; change?: string }[]
  previewBg: string
  accentColor: string
  icon: 'wrench' | 'droplets' | 'home' | 'compass' | 'truck' | 'sparkles'
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'all-phase-plumbing',
    title: 'All Phase Plumbing',
    category: 'Web Design',
    categories: ['Web Design', 'SEO', 'UX Design'],
    client: 'All Phase Plumbing Services',
    year: '2026',
    tagline: 'FROM INVISIBLE TO FULLY BOOKED',
    resultBadge: '90 DAYS TO CAPACITY',
    description:
      'Complete digital transformation and local distress dispatch system converting emergency homeowner searches into instant booked appointments.',
    problem:
      'The client operated a high-quality plumbing fleet but had zero local search visibility, losing urgent emergency calls to low-grade directories and paying exorbitant third-party lead brokers.',
    solution:
      'We engineered an ultra-fast Next.js dispatch platform with sub-second mobile loading, geo-targeted service zone landing funnels, and click-to-dispatch call mechanics that convert distress searches immediately.',
    techStack: ['Next.js 14', 'Tailwind CSS', 'PostgreSQL', 'Twilio SMS Dispatch', 'Edge CDN'],
    metrics: [
      { label: 'Time to Full Schedule', value: '90 Days', change: 'Record speed' },
      { label: 'Inbound Dispatch Calls', value: '+240%', change: 'MoM growth' },
      { label: 'Mobile Page Speed Score', value: '99/100', change: 'Core Web Vitals' },
    ],
    previewBg: 'from-amber-950/40 via-red-950/20 to-black',
    accentColor: '#E51D25',
    icon: 'wrench',
  },
  {
    id: 'garys-pipelining',
    title: "Gary's Pipelining & Drain Cleaning",
    category: 'Web Design',
    categories: ['Web Design', 'SEO', 'Paid Media'],
    client: "Gary's Trenchless Sewer Infrastructure",
    year: '2026',
    tagline: 'PRECISION TRENCHLESS PIPE RESTORATION',
    resultBadge: 'HIGH-TICKET PIPELINE',
    description:
      'Educational, high-trust digital platform demystifying trenchless pipe repair and generating qualified residential and municipal sewer contracts.',
    problem:
      'Trenchless pipe relining is a high-ticket service ($5k-$25k) that homeowners frequently misunderstood, leading to long hesitation cycles and price shopping against destructive traditional excavation.',
    solution:
      'Engineered a visual no-dig comparison tool with interactive pipe diagnostics, transparent pricing calculators, and video inspection showcase that builds unquestioned authority.',
    techStack: ['React', 'Next.js', 'Framer Motion', 'Stripe Invoicing', 'Vercel Edge'],
    metrics: [
      { label: 'Quote Completion Rate', value: '3.8x', change: 'vs old site' },
      { label: 'Cost Per Qualified Lead', value: '-45%', change: 'PPC efficiency' },
      { label: 'Average Contract Size', value: '$12,400', change: 'Premium tier' },
    ],
    previewBg: 'from-blue-950/40 via-zinc-950/30 to-black',
    accentColor: '#38BDF8',
    icon: 'droplets',
  },
  {
    id: 'preventive-home-solutions',
    title: 'Preventive Home Solutions',
    category: 'Web Design',
    categories: ['Web Design', 'UX Design', 'Content'],
    client: 'Preventive Home Solutions Inc.',
    year: '2026',
    tagline: 'PREVENTIVE RESIDENTIAL HEALTH PLATFORM',
    resultBadge: 'MEMBERSHIP PORTAL',
    description:
      'Preventive residential inspections, HVAC, heating, and plumbing maintenance hub engineered with tiered subscription memberships and transparent reporting.',
    problem:
      'Homeowners only called when systems failed catastrophically. The business needed to pivot from erratic one-off repairs to predictable recurring inspection retainers.',
    solution:
      'Designed a membership-first customer portal with digital inspection reports, automated maintenance scheduling, and streamlined service feeds integrated at every touchpoint.',
    techStack: ['Next.js', 'Tailwind CSS', 'Supabase Auth', 'Resend Email API', 'TypeScript'],
    metrics: [
      { label: 'Member Retention', value: '88%', change: 'Annual plan' },
      { label: 'Annual Retainer Adoption', value: '68%', change: 'Recurring revenue' },
      { label: 'First Contentful Paint', value: '0.8s', change: 'Instant load' },
    ],
    previewBg: 'from-emerald-950/40 via-neutral-950/30 to-black',
    accentColor: '#10B981',
    icon: 'home',
  },
  {
    id: 'catching-chrome',
    title: 'Catching Chrome',
    category: 'Web Design',
    categories: ['Web Design', 'Social', 'Content'],
    client: 'Catching Chrome Charter Expeditions',
    year: '2026',
    tagline: 'PREMIER EXPEDITION & CHARTER PLATFORM',
    resultBadge: '100% SEASONAL CAPACITY',
    description:
      'Immersive adventure booking platform with live waterway conditions, tidal tracking, and instant deposit scheduling for premier river fishing expeditions.',
    problem:
      'The charter business was managing inquiries manually across Instagram DMs and text messages, leading to double-bookings, lost deposits, and off-season cashflow cliffs.',
    solution:
      'Built a rich, cinematic charter platform featuring high-definition trip previews, live river condition telemetry, seamless Stripe deposit capture, and automated trip preparation packs.',
    techStack: ['Next.js 14', 'Framer Motion', 'Stripe Checkout', 'Tailwind CSS', 'Vercel'],
    metrics: [
      { label: 'Seasonal Capacity Booked', value: '100%', change: 'Sold out season' },
      { label: 'Online Deposit Capture', value: '82%', change: 'Direct checkout' },
      { label: 'Social Referral Conversion', value: '+190%', change: 'From IG & YT' },
    ],
    previewBg: 'from-teal-950/40 via-slate-950/30 to-black',
    accentColor: '#2DD4BF',
    icon: 'compass',
  },
  {
    id: 'apex-freight-corridor',
    title: 'Apex Freight Corridor',
    category: 'Paid Media',
    categories: ['Paid Media', 'SEO', 'Web Design'],
    client: 'Apex Transit Logistics Network',
    year: '2026',
    tagline: 'SCALED B2B FREIGHT & CARGO ENGINE',
    resultBadge: '4.2X ROAS ON AD SPEND',
    description:
      'Performance-driven search domination and freight quoting engine routing enterprise cargo requests across major national shipping corridors.',
    problem:
      'B2B shippers experienced high ad burn rates with unqualified consumer inquiries and low quote-to-close conversions across high-competition industrial routes.',
    solution:
      'Restructured Google Search intent targeting with custom corridor landing pages, instant RFQ calculators, and direct dispatch validation APIs.',
    techStack: ['Next.js', 'Google Ads API', 'HubSpot CRM Webhooks', 'Cloudflare Workers'],
    metrics: [
      { label: 'Return on Ad Spend', value: '4.2x', change: 'Search campaigns' },
      { label: 'Cost Per RFQ', value: '-38%', change: 'Efficiency gain' },
      { label: 'Corridor Volume Growth', value: '+180%', change: 'Q1 2026' },
    ],
    previewBg: 'from-purple-950/40 via-zinc-950/30 to-black',
    accentColor: '#A855F7',
    icon: 'truck',
  },
  {
    id: 'veda-direct-wellness',
    title: 'Veda Direct Wellness',
    category: 'Content',
    categories: ['Content', 'Social', 'UX Design'],
    client: 'Veda Direct Botanical Labs',
    year: '2026',
    tagline: 'EDITORIAL D2C REVENUE ARCHITECTURE',
    resultBadge: '310% SUBSCRIBER GROWTH',
    description:
      'Ayurvedic and wellness storytelling commerce funnel turning informed lifestyle interest into recurring replenishment memberships.',
    problem:
      'High customer acquisition costs on paid social were eroding margins because single-purchase customers rarely returned for replenishment cycles.',
    solution:
      'Constructed an editorial-led retention engine with educational ingredient dossiers, personalized regimen quizzes, and friction-free subscription mechanics.',
    techStack: ['Next.js App Router', 'Tailwind CSS', 'Shopify Storefront API', 'Klaviyo'],
    metrics: [
      { label: 'Subscriber Retention Rate', value: '74%', change: '6-month mark' },
      { label: 'Regimen Quiz Completion', value: '62%', change: 'High intent' },
      { label: 'Average Order Value', value: '₹3,450', change: '+34% uplift' },
    ],
    previewBg: 'from-rose-950/40 via-stone-950/30 to-black',
    accentColor: '#F43F5E',
    icon: 'sparkles',
  },
]

const CATEGORIES = ['All', 'Web Design', 'SEO', 'Paid Media', 'Social', 'UX Design', 'Content'] as const
type Category = (typeof CATEGORIES)[number]

// Core engineering delivery standards
const DELIVERY_STANDARDS = [
  {
    title: 'Transparent Fixed-Price Sprints',
    description:
      'Every project is scoped in writing with transparent INR deliverables. No surprise invoices, open retainers, or hidden fees.',
    badge: 'Fixed Scope & Price',
    icon: ShieldCheck,
  },
  {
    title: 'Direct Line to Senior Builders',
    description:
      'You collaborate directly with the engineers and UI designers building your product. No middle account managers or telephone games.',
    badge: 'Direct Engineering',
    icon: Zap,
  },
  {
    title: '100% Code & IP Ownership',
    description:
      'Full repository access, production deployment pipelines, and environment ownership belong to you from day one. Zero vendor lock-in.',
    badge: 'Full Ownership',
    icon: Award,
  },
]

// Trusted client rail data (reference-backed)
const TRUSTED_CLIENTS = [
  { name: 'All Phase Plumbing', sector: 'Plumbing & Emergency Dispatch' },
  { name: "Gary's Pipelining", sector: 'Trenchless Infrastructure' },
  { name: 'Preventive Home Solutions', sector: 'Residential Inspection Systems' },
  { name: 'Catching Chrome', sector: 'Expedition Charter Platforms' },
  { name: 'Apex Freight Corridor', sector: 'Commercial Freight Transit' },
  { name: 'Veda Direct Wellness', sector: 'Botanical Lifestyle Commerce' },
]

export default function OurWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null)

  const filteredStudies =
    selectedCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) => study.categories.includes(selectedCategory as any))

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#070508] text-white pt-24 pb-20 selection:bg-[#E51D25] selection:text-white">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#E51D25]/12 via-[#4A0A18]/15 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[800px] -left-40 w-[600px] h-[600px] bg-[#E51D25]/06 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION 1: HERO SECTION                                   */}
        {/* ========================================================= */}
        <section className="pt-6 sm:pt-12 pb-16 lg:pb-24 border-b border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF3843]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E51D25] animate-pulse" />
                Our Work
              </div>

              {/* Exact reference headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                We build things <br />
                <span className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
                  that matter.
                </span>
              </h1>

              {/* Exact reference description */}
              <p className="text-base sm:text-lg text-[rgba(240,243,248,0.72)] leading-relaxed max-w-xl">
                From fast-moving local businesses to scaling brands, we create websites and campaigns
                designed to drive meaningful outcomes. This page presents a curated selection of our work.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-white/90 text-black text-sm font-bold transition-all shadow-lg shadow-white/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Start a project</span>
                  <ArrowUpRight size={16} className="stroke-[2.5]" />
                </Link>

                <a
                  href="#case-studies"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.09] border border-white/12 text-white text-sm font-semibold transition-all hover:border-white/25"
                >
                  <span>See the case studies</span>
                  <ChevronRight size={16} className="text-white/60" />
                </a>
              </div>

              {/* Verified Trust Stats Mini-Rail */}
              <div className="pt-6 grid grid-cols-3 gap-4 max-w-lg border-t border-white/[0.08]">
                <div>
                  <div className="text-2xl font-bold font-mono text-white">100%</div>
                  <div className="text-xs text-[rgba(240,243,248,0.55)]">Direct Engineering</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-[#FF3843]">90 Days</div>
                  <div className="text-xs text-[rgba(240,243,248,0.55)]">Avg. Growth Sprint</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-white">0 Lock-in</div>
                  <div className="text-xs text-[rgba(240,243,248,0.55)]">Full Code Ownership</div>
                </div>
              </div>
            </div>

            {/* Right Portfolio Showcase Visual (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Outer decorative glow */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#E51D25]/20 to-[#38BDF8]/10 rounded-3xl blur-xl opacity-60" />

                {/* Primary Layered Showcase Frame */}
                <div className="relative rounded-2xl bg-[#120A0E] border border-white/15 p-5 shadow-2xl backdrop-blur-xl space-y-4">
                  {/* Browser Bar Mockup Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[10px] font-mono text-white/60">
                      ethixweb.com/case-studies/live
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>LIVE</span>
                    </div>
                  </div>

                  {/* Top Featured Project Card Snippet: All Phase Plumbing */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/30 to-black/60 border border-[#E51D25]/30 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[#FF3843] uppercase tracking-wider font-semibold">
                        Web Design · Emergency Dispatch
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white">
                        2026
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white">All Phase Plumbing</h3>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Instant mobile dispatch mechanics taking local emergency service from invisible to fully booked in 90 days.
                    </p>
                    <div className="flex items-center gap-3 pt-1">
                      <span className="px-2 py-1 rounded bg-[#E51D25]/20 text-[#FF3843] text-[10px] font-mono font-bold">
                        90 DAYS TO CAPACITY
                      </span>
                      <span className="text-[11px] text-white/50 font-mono">+240% Inbound Calls</span>
                    </div>
                  </div>

                  {/* Overlapping Secondary Card Snippet: Preventive Home Solutions */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                        Home Maintenance Portal
                      </span>
                      <div className="flex items-center gap-1 text-emerald-400 text-xs">
                        <span className="font-bold text-[10px] text-emerald-400 font-mono">PORTAL ACTIVE</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-white/90">Preventive Home Solutions</span>
                      <span className="text-white/50 font-mono text-[10px]">68% Retainer Adoption</span>
                    </div>
                  </div>

                  {/* Overlapping Tertiary Mini Card: Gary's Pipelining */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-sky-400" />
                      <span className="text-white/80 font-medium">Gary&apos;s Pipelining &amp; Drain</span>
                    </div>
                    <span className="font-mono text-sky-400 text-[11px]">3.8x Quotes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: CASE STUDIES & FUNCTIONAL CATEGORY FILTERS     */}
        {/* ========================================================= */}
        <section id="case-studies" className="py-16 sm:py-20 scroll-mt-24">
          <div className="space-y-8">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-4 border-b border-white/[0.08]">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF3843]">
                  <Layers size={13} />
                  <span>CASE STUDIES</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  A clear before and after, every time.
                </h2>
                <p className="text-sm sm:text-base text-[rgba(240,243,248,0.68)] leading-relaxed">
                  Every project begins with friction and ends with measurable business outcomes.
                  Filter our recent digital builds by technical discipline.
                </p>
              </div>

              {/* Active Filter Indicator */}
              <div className="text-xs font-mono text-white/50 flex items-center gap-2">
                <Filter size={13} className="text-[#FF3843]" />
                <span>Showing:</span>
                <span className="text-white font-semibold">{filteredStudies.length} {filteredStudies.length === 1 ? 'Project' : 'Projects'}</span>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat
                const count =
                  cat === 'All'
                    ? CASE_STUDIES.length
                    : CASE_STUDIES.filter((s) => s.categories.includes(cat as any)).length

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-white text-black font-bold shadow-md shadow-white/10 scale-[1.02]'
                        : 'bg-white/[0.04] text-[rgba(240,243,248,0.65)] hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive ? 'bg-black/10 text-black' : 'bg-white/10 text-white/60'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* ========================================================= */}
            {/* SECTION 3: PROJECT CARDS GRID (With Exact Reference Data) */}
            {/* ========================================================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-4">
              {filteredStudies.map((project) => (
                <div
                  key={project.id}
                  className="group relative rounded-2xl bg-gradient-to-b from-[#150A10] to-[#0A0609] border border-white/[0.12] hover:border-[#E51D25]/50 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-[#E51D25]/10"
                >
                  {/* Top Metadata Row */}
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/[0.06] border border-white/10 text-[#FF3843] font-semibold">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-white/40">· {project.year}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-bold bg-[#E51D25]/15 border border-[#E51D25]/30 text-[#FF3843]">
                        {project.resultBadge}
                      </span>
                    </div>

                    {/* Interactive Browser Frame Mockup */}
                    <div
                      className={`rounded-xl border border-white/10 p-4 bg-gradient-to-br ${project.previewBg} space-y-3 transition-transform duration-300 group-hover:scale-[1.01]`}
                    >
                      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-white/50">
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-white/30" />
                          <span className="w-2 h-2 rounded-full bg-white/30" />
                          <span className="w-2 h-2 rounded-full bg-white/30" />
                        </div>
                        <span className="truncate max-w-[200px]">{project.title.toLowerCase().replace(/\s+/g, '')}.com</span>
                        <div className="flex items-center gap-1 text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>SECURE</span>
                        </div>
                      </div>

                      {/* Mockup Body Content */}
                      <div className="space-y-1.5 py-1">
                        <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF3843]">
                          {project.tagline}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs text-[rgba(240,243,248,0.70)] line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Mockup Live Metric Badges */}
                      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="bg-black/40 rounded-lg p-2 border border-white/5">
                            <div className="text-sm font-bold font-mono text-white">{m.value}</div>
                            <div className="text-[10px] text-white/50 truncate">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Detailed Card Body */}
                    <div className="space-y-3 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-white/60 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveModalStudy(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white hover:text-[#FF3843] transition-colors"
                    >
                      <span>VIEW FULL CASE STUDY</span>
                      <ArrowUpRight size={14} className="stroke-[2.5]" />
                    </button>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-xs text-white/50 hover:text-white transition-colors"
                    >
                      <span>Similar Scope?</span>
                      <ChevronRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: REFINED TRUSTED-BY SECTION (NO RED MARQUEE)   */}
        {/* ========================================================= */}
        <section className="py-14 my-10 rounded-3xl bg-gradient-to-b from-[#13090F] to-[#0A0508] border border-white/[0.08] p-6 sm:p-10 relative overflow-hidden">
          <div className="space-y-6 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-white/70">
              <ShieldCheck size={14} className="text-[#FF3843]" />
              <span>TRUSTED BY BUSINESSES WORLDWIDE</span>
            </div>
            <p className="text-sm text-[rgba(240,243,248,0.65)] leading-relaxed">
              We partner with founder-led trade operations, infrastructure contractors, and expanding service enterprises to build digital platforms that drive durable revenue.
            </p>
          </div>

          {/* Clean Monochrome Client Rail (Dark & Refined, NOT a bright red banner) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-8">
            {TRUSTED_CLIENTS.map((client) => (
              <div
                key={client.name}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all flex flex-col justify-center items-center text-center group"
              >
                <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center text-white/60 mb-2 group-hover:text-[#FF3843] group-hover:bg-[#E51D25]/10 transition-colors">
                  <Building2 size={16} />
                </div>
                <div className="text-xs font-bold text-white/90 group-hover:text-white transition-colors">
                  {client.name}
                </div>
                <div className="text-[10px] text-white/40 mt-0.5 line-clamp-1">
                  {client.sector}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: ENGINEERING STANDARDS & COMMITMENTS             */}
        {/* ========================================================= */}
        <section className="py-16 sm:py-20 border-t border-white/[0.08]">
          <div className="space-y-10">
            {/* Header & Badges Container */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF3843]">
                  <Award size={13} />
                  <span>ENGINEERING COMMITMENTS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  How we guarantee quality on every build.
                </h2>
                <p className="text-sm sm:text-base text-[rgba(240,243,248,0.68)] leading-relaxed">
                  Disciplined engineering, transparent communication, and complete client ownership from discovery to deployment.
                </p>
              </div>

              {/* SLA & Ops Badge Container */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-black text-sm">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">100% Repository Transfer</div>
                    <div className="text-[10px] text-white/50 font-mono">Full IP Ownership</div>
                  </div>
                </div>

                <div className="px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-[#E51D25]/20 border border-[#E51D25]/40 flex items-center justify-center text-[#FF3843]">
                    <Clock size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>24-Hour Scoping SLA</span>
                    </div>
                    <div className="text-[10px] text-white/50 font-mono">Mon – Sat IST Hub</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Standards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DELIVERY_STANDARDS.map((standard) => {
                const IconComponent = standard.icon
                return (
                  <div
                    key={standard.title}
                    className="rounded-2xl bg-[#12080E] border border-white/[0.10] p-6 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF3843]">
                          <IconComponent size={20} />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-bold bg-[#E51D25]/15 border border-[#E51D25]/30 text-[#FF3843]">
                          {standard.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {standard.title}
                      </h3>

                      <p className="text-sm text-[rgba(240,243,248,0.75)] leading-relaxed">
                        {standard.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs font-mono text-emerald-400">
                      <CheckCircle2 size={13} />
                      <span>Standard on all Ethixweb engagements</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 6: FINAL CLOSING CTA SECTION                      */}
        {/* ========================================================= */}
        <section className="mt-16 sm:mt-24 rounded-3xl bg-gradient-to-b from-[#180810] via-[#10050B] to-[#080306] border border-white/[0.14] p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle background red glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 select-none"
          >
            <div className="w-[500px] h-[300px] bg-[#E51D25] rounded-full blur-[130px]" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF3843]">
              <Sparkles size={13} />
              <span>READY TO BUILD?</span>
            </div>

            {/* Exact reference headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Let&apos;s create your <br />
              <span className="text-[#FF3843]">next success story.</span>
            </h2>

            {/* Exact reference description */}
            <p className="text-base text-[rgba(240,243,248,0.75)] leading-relaxed max-w-xl mx-auto">
              Tell us where the friction is. We&apos;ll tell you how we&apos;d fix it — no pitch deck required.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-white/90 text-black text-sm font-bold transition-all shadow-xl shadow-white/10 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start a project</span>
                <ArrowUpRight size={16} className="stroke-[2.5]" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white text-sm font-semibold transition-all hover:border-white/30"
              >
                <span>See what we do</span>
                <ChevronRight size={16} className="text-white/60" />
              </Link>
            </div>

            {/* Guarantees */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[rgba(240,243,248,0.55)] font-mono">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#FF3843]" />
                <span>24-Hour Scoping SLA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#FF3843]" />
                <span>Founder-Led Architecture</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#FF3843]" />
                <span>Fixed Milestone Delivery</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================= */}
      {/* INTERACTIVE CASE STUDY MODAL / DRAWER                     */}
      {/* ========================================================= */}
      {activeModalStudy && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalStudy(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#12080E] border border-white/20 p-6 sm:p-8 text-white shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalStudy(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.08] hover:bg-white/20 text-white/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-[#E51D25]/20 border border-[#E51D25]/40 text-[#FF3843] font-bold">
                  {activeModalStudy.category}
                </span>
                <span className="text-xs font-mono text-white/50">· {activeModalStudy.year}</span>
                <span className="text-xs font-mono text-emerald-400 ml-auto">
                  {activeModalStudy.resultBadge}
                </span>
              </div>
              <h3 id="case-study-title" className="text-2xl sm:text-3xl font-black text-white">
                {activeModalStudy.title}
              </h3>
              <p className="text-xs font-mono text-white/60 uppercase tracking-wider">
                Client: {activeModalStudy.client}
              </p>
            </div>

            {/* Metrics Highlight Rail */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
              {activeModalStudy.metrics.map((m) => (
                <div key={m.label} className="text-center sm:text-left">
                  <div className="text-lg sm:text-xl font-bold font-mono text-[#FF3843]">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-white/80 font-medium">{m.label}</div>
                  {m.change && (
                    <div className="text-[10px] text-emerald-400 font-mono mt-0.5">{m.change}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="space-y-4 text-sm text-[rgba(240,243,248,0.78)] leading-relaxed">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF3843] font-bold mb-1">
                  The Friction & Challenge
                </h4>
                <p>{activeModalStudy.problem}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-1">
                  The Engineered Solution
                </h4>
                <p>{activeModalStudy.solution}</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 font-bold mb-2">
                Architecture & Core Tech
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalStudy.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.05] border border-white/10 text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-white/60">Ready to engineer a similar outcome?</span>
              <Link
                href="/contact"
                onClick={() => setActiveModalStudy(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-white/90 text-black text-xs font-bold transition-all shadow-md"
              >
                <span>Initiate Project Scope</span>
                <ArrowUpRight size={13} className="stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      )}
      </div>
      <Footer />
    </>
  )
}
