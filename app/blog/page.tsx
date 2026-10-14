'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  ArrowUpRight,
  ArrowRight,
  Clock,
  Sparkles,
  BookOpen,
  Filter,
  CheckCircle2,
  ChevronRight,
  Layers,
  Search,
  Bot,
  TrendingUp,
  MapPin,
  Palette,
  Terminal,
  Zap,
  Cpu,
  ShieldCheck,
  X,
  FileText,
  AlertCircle
} from 'lucide-react'

// Article definition interface
interface Article {
  id: string
  number: string
  category: 'Growth' | 'AI' | 'Design' | 'SEO' | 'Local SEO' | 'Engineering'
  readingTime: string
  status: 'In the works'
  title: string
  description: string
  isFeatured?: boolean
  takeaways?: string[]
  accentColor: string
  accentGlow: string
}

// Exact 12 articles from the reference
const ARTICLES: Article[] = [
  {
    id: 'why-landing-page-isnt-converting',
    number: '01',
    category: 'Growth',
    readingTime: '6 min read',
    status: 'In the works',
    title: "Why your landing page isn't converting",
    description:
      'The 7 elements every modern hero section needs in 2026 — and the friction patterns we remove first on every client rebuild.',
    isFeatured: true,
    takeaways: [
      'Sticky mobile click-to-call mechanics that capture high-intent distress queries',
      'The cognitive load threshold: why multi-step navigation kills campaign ROI',
      'Verified trust badge sequences that reduce decision friction in under 3 seconds',
    ],
    accentColor: '#E51D25',
    accentGlow: 'rgba(229, 29, 37, 0.25)',
  },
  {
    id: 'building-ai-support-agent-14-days',
    number: '02',
    category: 'AI',
    readingTime: '8 min read',
    status: 'In the works',
    title: 'Building an AI support agent in 14 days',
    description: 'How we shipped a production agent for ShipForge.',
    takeaways: [
      'Structuring domain-specific vector databases with zero hallucination boundaries',
      'Deterministic fallback triggers for live human dispatch handoffs',
      'Real-world customer resolution benchmarks across 2,400+ initial sessions',
    ],
    accentColor: '#A855F7',
    accentGlow: 'rgba(168, 85, 247, 0.25)',
  },
  {
    id: 'ad-budget-not-problem-follow-up-is',
    number: '03',
    category: 'Growth',
    readingTime: '6 min read',
    status: 'In the works',
    title: "Your ad budget isn't the problem. Your follow-up is.",
    description: 'Five leaks in the average lead funnel, and what plugging each one is worth.',
    takeaways: [
      'The 5-minute lead decay curve: how response latency cuts closing rates by 80%',
      'Automated two-way SMS confirmation sequences that double show-up rates',
      'Calculating true revenue leakage across third-party lead brokers',
    ],
    accentColor: '#FF3843',
    accentGlow: 'rgba(255, 56, 67, 0.25)',
  },
  {
    id: 'google-map-pack-real-homepage',
    number: '04',
    category: 'Local SEO',
    readingTime: '6 min read',
    status: 'In the works',
    title: 'The Google Map Pack is your real homepage',
    description:
      "The top three local results get the calls. Here's the weekly routine that gets you there.",
    takeaways: [
      'Geo-targeted service zone signals and primary category optimization',
      'The weekly photo and review response rhythm that search algorithms favor',
      'Eliminating NAP (Name, Address, Phone) citation discrepancies across directories',
    ],
    accentColor: '#38BDF8',
    accentGlow: 'rgba(56, 189, 248, 0.25)',
  },
  {
    id: 'brand-systems-that-scale-with-you',
    number: '05',
    category: 'Design',
    readingTime: '5 min read',
    status: 'In the works',
    title: 'Brand systems that scale with you',
    description: 'Designing identities that survive ten product pivots.',
    takeaways: [
      'Modular design tokens and typographic scales that translate to native mobile',
      'Building durable component libraries in Tailwind and Figma without tech debt',
      'Visual hierarchy rules that communicate premium pricing from the first glance',
    ],
    accentColor: '#F59E0B',
    accentGlow: 'rgba(245, 158, 11, 0.25)',
  },
  {
    id: 'ai-receptionist-answered-while-on-ladder',
    number: '06',
    category: 'AI',
    readingTime: '5 min read',
    status: 'In the works',
    title: 'An AI receptionist answered while you were on a ladder',
    description: 'What 24/7 missed-call capture actually looks like for a two-truck HVAC shop.',
    takeaways: [
      'Real-time caller speech-to-text triage and urgency tagging',
      'Automated dispatch calendar slot locking without double-booking',
      'How capturing three emergency weekend calls covers annual software costs',
    ],
    accentColor: '#C084FC',
    accentGlow: 'rgba(192, 132, 252, 0.25)',
  },
  {
    id: 'seo-is-dead-long-live-seo',
    number: '07',
    category: 'SEO',
    readingTime: '7 min read',
    status: 'In the works',
    title: 'SEO is dead. Long live SEO.',
    description: 'What AI search means for organic growth.',
    takeaways: [
      'Information gain scoring: why regurgitated content no longer ranks',
      'Structuring digital assets for Large Language Model citation indexing',
      'The shift from vanity keyword tracking to commercial entity authority',
    ],
    accentColor: '#10B981',
    accentGlow: 'rgba(16, 185, 129, 0.25)',
  },
  {
    id: 'core-web-vitals-sell-real-things',
    number: '08',
    category: 'Engineering',
    readingTime: '7 min read',
    status: 'In the works',
    title: 'Core Web Vitals for people who sell real things',
    description: 'Taking a contractor site from a 40 to a 95+ without a replatform.',
    takeaways: [
      'Isolating heavy third-party tracking tags and offloading to server-side GTM',
      'Eliminating Cumulative Layout Shift (CLS) on dynamic appointment widgets',
      'Next.js image optimization and CSS tree-shaking that yields sub-second FCP',
    ],
    accentColor: '#6366F1',
    accentGlow: 'rgba(99, 102, 241, 0.25)',
  },
  {
    id: 'trust-signals-10k-job-safe-to-book',
    number: '09',
    category: 'Design',
    readingTime: '5 min read',
    status: 'In the works',
    title: 'Trust signals that make a $10k job feel safe to book',
    description: 'Reviews, licenses, photos — and the order they should appear on the page.',
    takeaways: [
      'Placing proof elements directly adjacent to commitment CTAs',
      'Video testimonials vs. static review widgets: where conversion inflection occurs',
      'Communicating insurance, licensing, and warranties without visual clutter',
    ],
    accentColor: '#F43F5E',
    accentGlow: 'rgba(244, 63, 94, 0.25)',
  },
  {
    id: 'ai-overviews-local-service-search',
    number: '10',
    category: 'SEO',
    readingTime: '8 min read',
    status: 'In the works',
    title: 'What AI Overviews mean for local service search',
    description: 'Where the clicks are going, and how to stay the answer.',
    takeaways: [
      'Deconstructing the Google SGE layout and where click-throughs migrate',
      'Schema markup patterns that feed AI Overviews structured business data',
      'Repositioning high-margin service pages for direct source citation',
    ],
    accentColor: '#34D399',
    accentGlow: 'rgba(52, 211, 153, 0.25)',
  },
  {
    id: 'wordpress-astro-headless-decision-tree',
    number: '11',
    category: 'Engineering',
    readingTime: '9 min read',
    status: 'In the works',
    title: 'WordPress, Astro or headless: an honest decision tree',
    description: "The stack we pick for each kind of client, and why it's rarely the trendy one.",
    takeaways: [
      'Evaluating maintenance overhead vs. developer velocity across CMS stacks',
      'When WordPress is still the practical business choice — and when it becomes technical debt',
      'Next.js headless architectures for scaling multi-location service brands',
    ],
    accentColor: '#818CF8',
    accentGlow: 'rgba(129, 140, 248, 0.25)',
  },
  {
    id: 'review-harvesting-without-begging',
    number: '12',
    category: 'Local SEO',
    readingTime: '4 min read',
    status: 'In the works',
    title: 'Review harvesting without begging',
    description: 'Automations that turn happy customers into a steady stream of five-star reviews.',
    takeaways: [
      'Triggering SMS review prompts at the exact moment of job completion',
      'Direct deep-linking into Google review submission modals without intermediate barriers',
      'Internal sentiment filtering to catch friction before public reviews are posted',
    ],
    accentColor: '#0EA5E9',
    accentGlow: 'rgba(14, 165, 233, 0.25)',
  },
]

const CATEGORIES = ['All', 'Growth', 'AI', 'Design', 'SEO', 'Local SEO', 'Engineering'] as const
type Category = (typeof CATEGORIES)[number]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  const [activeModalArticle, setActiveModalArticle] = useState<Article | null>(null)

  // Filtered list
  const filteredArticles =
    selectedCategory === 'All'
      ? ARTICLES
      : ARTICLES.filter((article) => article.category === selectedCategory)

  // Featured article (Article 1)
  const featuredArticle = ARTICLES[0]

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#070508] text-white pt-24 pb-20 selection:bg-[#E51D25] selection:text-white">
        {/* Background radial lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[950px] h-[550px] bg-gradient-to-b from-[#E51D25]/12 via-[#4A0A18]/15 to-transparent blur-[140px] rounded-full" />
          <div className="absolute top-[800px] -right-40 w-[600px] h-[600px] bg-[#E51D25]/06 blur-[160px] rounded-full" />
          <div className="absolute top-[1700px] -left-40 w-[600px] h-[600px] bg-[#4A0A18]/10 blur-[180px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          {/* ========================================================= */}
          {/* SECTION 1: BLOG HERO SECTION                              */}
          {/* ========================================================= */}
          <section className="pt-6 sm:pt-12 pb-14 lg:pb-20 border-b border-white/[0.08]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF3843]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E51D25] animate-pulse" />
                  Journal — 12 essays in the queue
                </div>

                {/* Exact reference headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                  Field notes <br />
                  <span className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
                    on SEO.
                  </span>
                </h1>

                {/* Exact reference description with Indian practitioner perspective */}
                <p className="text-base sm:text-lg text-[rgba(240,243,248,0.72)] leading-relaxed max-w-xl">
                  Tactics, essays and case studies on shipping great digital work — written by the people doing the shipping, not a content team.
                </p>

                {/* Editorial Positioning Note for Indian Businesses */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] max-w-xl space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#FF3843]">
                    <Sparkles size={13} />
                    <span>FOUNDER & PRACTITIONER FIELD JOURNAL</span>
                  </div>
                  <p className="text-xs text-[rgba(240,243,248,0.65)] leading-relaxed">
                    Observations from engineering high-conversion web platforms, local search capture systems, and AI workflows for ambitious Indian enterprises, MSMEs, and scaling service providers.
                  </p>
                </div>

                {/* Live Stats Rail */}
                <div className="pt-4 grid grid-cols-3 gap-4 max-w-lg border-t border-white/[0.08]">
                  <div>
                    <div className="text-2xl font-bold font-mono text-white">12</div>
                    <div className="text-xs text-[rgba(240,243,248,0.55)]">Curated Essays</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-mono text-[#FF3843]">6</div>
                    <div className="text-xs text-[rgba(240,243,248,0.55)]">Core Domains</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-mono text-white">0%</div>
                    <div className="text-xs text-[rgba(240,243,248,0.55)]">Ghostwritten Fluff</div>
                  </div>
                </div>
              </div>

              {/* Right Hero Visual: Connected SEO & Search Telemetry (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Subtle decorative glow */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#E51D25]/20 to-[#38BDF8]/10 rounded-3xl blur-xl opacity-60" />

                  {/* Frame */}
                  <div className="relative rounded-2xl bg-[#12080E] border border-white/15 p-5 shadow-2xl backdrop-blur-xl space-y-4">
                    {/* Console Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-white/50">
                        ethixweb.journal / live-research
                      </span>
                      <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>QUEUED</span>
                      </div>
                    </div>

                    {/* Animated Search Query Telemetry Preview */}
                    <div className="space-y-3 py-2">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono text-[#FF3843] text-[11px] font-semibold">
                            SEARCH SIGNALS &bull; LOCAL PACK
                          </span>
                          <span className="text-[10px] font-mono text-white/50">Live Routine</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold text-white">
                          <Search size={15} className="text-[#FF3843]" />
                          <span>Google Map Pack Discovery</span>
                        </div>
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#E51D25] h-full w-[78%] rounded-full" />
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-white/50">
                          <span>Top 3 Placement Rate</span>
                          <span className="text-white font-bold">78% Inbound Calls</span>
                        </div>
                      </div>

                      {/* AI Search & LLM Overviews Signal */}
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono text-purple-400 text-[11px] font-semibold">
                            AI OVERVIEWS &bull; SGE ATTRIBUTION
                          </span>
                          <span className="text-[10px] font-mono text-white/50">2026 Shift</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold text-white">
                          <Bot size={15} className="text-purple-400" />
                          <span>Large Model Source Citation</span>
                        </div>
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-purple-500 h-full w-[84%] rounded-full" />
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-white/50">
                          <span>Structured Entity Authority</span>
                          <span className="text-white font-bold">84% Verification</span>
                        </div>
                      </div>

                      {/* Editorial Stamp */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-white/60 pt-1">
                        <span>Lead Author: Senior Engineering</span>
                        <span className="text-[#FF3843]">12 Upcoming Drafts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 2: FEATURED ARTICLE                               */}
          {/* ========================================================= */}
          <section className="py-14 sm:py-16 border-b border-white/[0.08]">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF3843]">
                  <Sparkles size={13} />
                  <span>FEATURED ESSAY</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold">
                  {featuredArticle.status}
                </span>
              </div>

              {/* Large Featured Article Presentation Card */}
              <div className="rounded-3xl bg-gradient-to-br from-[#1B0A14] via-[#12070D] to-[#0A0508] border border-white/[0.14] hover:border-[#E51D25]/50 transition-all p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden group">
                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[120px] opacity-25"
                  style={{ background: featuredArticle.accentColor }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                  {/* Left Featured Content (7 cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    {/* Category & Read Time */}
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[#E51D25]/20 border border-[#E51D25]/40 text-[#FF3843] font-bold">
                        {featuredArticle.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-white/50">
                        <Clock size={13} />
                        <span>{featuredArticle.readingTime}</span>
                      </div>
                      <span className="text-xs font-mono text-white/30">· Essay 01</span>
                    </div>

                    {/* Exact Title */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight group-hover:text-white transition-colors">
                      {featuredArticle.title}
                    </h2>

                    {/* Exact Description */}
                    <p className="text-sm sm:text-base text-[rgba(240,243,248,0.78)] leading-relaxed">
                      {featuredArticle.description}
                    </p>

                    {/* Key Takeaways Preview */}
                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-white/50">
                        Key Deconstructions Inside:
                      </div>
                      <ul className="space-y-2">
                        {featuredArticle.takeaways?.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs text-white/80">
                            <CheckCircle2 size={14} className="text-[#FF3843] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom CTA to View Preview Outline */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setActiveModalArticle(featuredArticle)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-white/90 text-black text-xs font-bold transition-all shadow-md hover:scale-[1.02]"
                      >
                        <span>Preview Outline & Key Insights</span>
                        <ArrowUpRight size={14} className="stroke-[2.5]" />
                      </button>

                      <span className="text-xs font-mono text-white/40">
                        Full essay dropping soon
                      </span>
                    </div>
                  </div>

                  {/* Right Animated Landing Page Wireframe Diagnostic (5 cols) */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-black/60 border border-white/10 p-5 space-y-3 font-mono text-xs shadow-inner">
                      {/* Browser Mockup Top Bar */}
                      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-white/40">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                        </div>
                        <span>conversion-audit-matrix.svg</span>
                        <span className="text-[#FF3843]">DIAGNOSTIC</span>
                      </div>

                      {/* Wireframe Mockup Elements with Friction Annotations */}
                      <div className="space-y-2 py-1">
                        <div className="p-3 rounded-lg bg-white/[0.04] border border-dashed border-[#E51D25]/40 flex items-center justify-between">
                          <span className="text-[11px] text-white/80 font-bold">1. Above-the-Fold Value Prop</span>
                          <span className="text-[10px] text-emerald-400 font-mono">0.8s Scan</span>
                        </div>

                        <div className="p-3 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-between">
                          <span className="text-[11px] text-white/80 font-bold">2. Sticky Click-to-Call / Direct CTA</span>
                          <span className="text-[10px] text-[#FF3843] font-mono">High Urgency</span>
                        </div>

                        <div className="p-3 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-between">
                          <span className="text-[11px] text-white/80 font-bold">3. Trust Signals (Reviews & Licensing)</span>
                          <span className="text-[10px] text-amber-400 font-mono">Verified Proof</span>
                        </div>

                        <div className="p-3 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-between">
                          <span className="text-[11px] text-white/80 font-bold">4. Zero Cumulative Layout Shift (CLS)</span>
                          <span className="text-[10px] text-emerald-400 font-mono">Core Web Vital</span>
                        </div>
                      </div>

                      <div className="text-[10px] text-white/50 text-center pt-1 border-t border-white/10">
                        Field data collected across 40+ client landing page rebuilds
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 3: CATEGORY FILTERING & ALL 12 ARTICLES GRID      */}
          {/* ========================================================= */}
          <section id="articles-grid" className="py-14 sm:py-20 scroll-mt-24">
            <div className="space-y-8">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-4 border-b border-white/[0.08]">
                <div className="space-y-2 max-w-xl">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF3843]">
                    <Layers size={13} />
                    <span>ARTICLE ARCHIVE</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    All 12 Essays in the Queue
                  </h2>
                  <p className="text-sm text-[rgba(240,243,248,0.68)] leading-relaxed">
                    Filter by discipline to explore our upcoming technical playbooks, architecture decision trees, and local search routines.
                  </p>
                </div>

                {/* Filter status */}
                <div className="text-xs font-mono text-white/50 flex items-center gap-2">
                  <Filter size={13} className="text-[#FF3843]" />
                  <span>Filtered:</span>
                  <span className="text-white font-semibold">
                    {filteredArticles.length} {filteredArticles.length === 1 ? 'Essay' : 'Essays'}
                  </span>
                </div>
              </div>

              {/* Functional Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat
                  const count =
                    cat === 'All'
                      ? ARTICLES.length
                      : ARTICLES.filter((a) => a.category === cat).length

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

              {/* 12 Articles Responsive Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="group relative rounded-2xl bg-gradient-to-b from-[#14090F] to-[#0A0508] border border-white/[0.10] hover:border-[#E51D25]/40 transition-all duration-300 p-6 flex flex-col justify-between space-y-6 shadow-xl hover:shadow-2xl hover:shadow-[#E51D25]/10"
                  >
                    {/* Top Metadata Row: Number, Category, Reading Time, Status */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                        <span className="text-xs font-mono font-bold text-white/40 group-hover:text-[#FF3843] transition-colors">
                          {article.number}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-white/[0.05] border border-white/10 text-white/70">
                            {article.category}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/15 text-amber-400 font-bold border border-amber-500/25">
                            {article.status}
                          </span>
                        </div>
                      </div>

                      {/* Title & Reading Time */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-[11px] font-mono text-white/40">
                          <Clock size={12} />
                          <span>{article.readingTime}</span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-white transition-colors leading-snug">
                          {article.title}
                        </h3>

                        <p className="text-xs text-[rgba(240,243,248,0.68)] leading-relaxed line-clamp-3">
                          {article.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action / Teaser Affordance */}
                    <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveModalArticle(article)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white/70 group-hover:text-[#FF3843] transition-colors"
                      >
                        <span>VIEW ABSTRACT</span>
                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                      </button>

                      <span className="text-[10px] font-mono text-white/30">
                        In the queue
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 4: CLOSING CTA (EXACT REFERENCE COPY)             */}
          {/* ========================================================= */}
          <section className="mt-12 sm:mt-20 rounded-3xl bg-gradient-to-b from-[#180810] via-[#10050B] to-[#080306] border border-white/[0.14] p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
            {/* Subtle background red glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 select-none"
            >
              <div className="w-[500px] h-[300px] bg-[#E51D25] rounded-full blur-[130px]" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF3843]">
                <Zap size={13} />
                <span>DIRECT EXECUTION</span>
              </div>

              {/* Exact reference headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Don&apos;t wait for the essay.
              </h2>

              {/* Exact reference description */}
              <p className="text-base sm:text-lg text-[rgba(240,243,248,0.78)] leading-relaxed max-w-xl mx-auto">
                Everything we&apos;re writing about, we already do for clients. Skip the reading list and put it to work on your business.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-white/90 text-black text-sm font-bold transition-all shadow-xl shadow-white/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Start a project</span>
                  <ArrowUpRight size={16} className="stroke-[2.5]" />
                </Link>

                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white text-sm font-semibold transition-all hover:border-white/30"
                >
                  <span>See our work</span>
                  <ChevronRight size={16} className="text-white/60" />
                </Link>
              </div>

              {/* Trust Guarantees */}
              <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[rgba(240,243,248,0.55)] font-mono">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#FF3843]" />
                  <span>Direct Senior Engineering</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#FF3843]" />
                  <span>No Junior Outsource</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#FF3843]" />
                  <span>24-Hour Scoping SLA</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE ARTICLE ABSTRACT / IN-PROGRESS DRAWER         */}
        {/* ========================================================= */}
        {activeModalArticle && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
            onClick={() => setActiveModalArticle(null)}
          >
            <div
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#12080E] border border-white/20 p-6 sm:p-8 text-white shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.08] hover:bg-white/20 text-white/70 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-[#E51D25]/20 border border-[#E51D25]/40 text-[#FF3843] font-bold">
                    {activeModalArticle.category}
                  </span>
                  <span className="text-xs font-mono text-white/50">· {activeModalArticle.readingTime}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/15 text-amber-400 font-bold border border-amber-500/25 ml-auto">
                    {activeModalArticle.status}
                  </span>
                </div>

                <h3 id="article-modal-title" className="text-xl sm:text-2xl font-black text-white leading-snug">
                  {activeModalArticle.title}
                </h3>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed flex items-start gap-2.5">
                <AlertCircle size={15} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Manuscript In Progress:</strong> This essay is currently being compiled from real client deployment logs. Below is the verified thesis and core takeaways planned for this release.
                </div>
              </div>

              {/* Summary Description */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-white/50 font-bold">
                  Core Premise & Description
                </div>
                <p className="text-sm text-[rgba(240,243,248,0.85)] leading-relaxed italic pl-3 border-l-2 border-[#E51D25]">
                  &ldquo;{activeModalArticle.description}&rdquo;
                </p>
              </div>

              {/* Key Takeaways */}
              {activeModalArticle.takeaways && (
                <div className="space-y-2.5">
                  <div className="text-xs font-mono uppercase tracking-wider text-white/50 font-bold">
                    Primary Practitioner Takeaways
                  </div>
                  <ul className="space-y-2">
                    {activeModalArticle.takeaways.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs text-white/80">
                        <CheckCircle2 size={13} className="text-[#FF3843] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Footer CTA */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-white/60">Need these results today?</span>
                <Link
                  href="/contact"
                  onClick={() => setActiveModalArticle(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-white/90 text-black text-xs font-bold transition-all shadow-md"
                >
                  <span>Put it to work now</span>
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
