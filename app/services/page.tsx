'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Zap,
  Globe,
  Bot,
  TrendingUp,
  BarChart3,
  Eye,
  Headphones,
  Search,
  Layers,
  ShieldCheck,
  Clock,
  Compass,
  Code2,
  MessageSquare,
  Cpu,
  Smartphone,
  Share2,
  Mail,
  Database,
  Activity,
  Check,
  HelpCircle,
  ExternalLink
} from 'lucide-react'

// =================================================================
// 6 CATEGORIES & 22 EXACT SERVICES FROM REFERENCE
// =================================================================

interface ServiceItem {
  id: string
  name: string
  description: string
  details: string
  deliverables: string[]
  badge?: string
}

interface ServiceCategory {
  id: string
  name: string
  shortLabel: string
  countText: string
  count: number
  icon: any
  tagline: string
  accentColor: string
  accentGlow: string
  services: ServiceItem[]
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'website',
    name: 'Website Architecture & Engineering',
    shortLabel: 'Website',
    countText: '4 Services',
    count: 4,
    icon: Globe,
    tagline: 'High-speed, conversion-engineered digital platforms built around how your business sells.',
    accentColor: '#E51D25',
    accentGlow: 'rgba(229, 29, 37, 0.25)',
    services: [
      {
        id: 'website-redesign',
        name: 'Website Redesign',
        description: 'A modern site built around how your business sells.',
        details:
          'We replace sluggish, outdated templates with high-performance Next.js architectures built specifically for how Indian and global customers discover and purchase from your business.',
        deliverables: ['Custom bespoke UI/UX', 'Mobile-first responsive design', 'Core Web Vitals 95+ score', 'Full CMS integration'],
        badge: 'Core Foundation',
      },
      {
        id: 'headless-architecture',
        name: 'Headless Architecture',
        description: 'Faster, more flexible foundation for future growth.',
        details:
          'Decouple your frontend presentation layer from backend systems. Ship updates instantaneously across web, mobile, and third-party channels with zero server downtime.',
        deliverables: ['Edge-rendered Next.js frontend', 'Headless CMS (Sanity / Supabase)', 'Instant static cache invalidation', 'Infinite horizontal scale'],
      },
      {
        id: 'landing-pages',
        name: 'Landing Pages',
        description: 'Purpose-built pages that convert campaign traffic.',
        details:
          'Surgically engineered landing pages with dedicated search intent matching, sticky mobile click-to-call mechanics, and zero distracting navigation links.',
        deliverables: ['Dedicated campaign funnels', 'A/B testing architecture', 'Sub-second mobile loading', 'Integrated CRM lead capture'],
        badge: 'High Conversion',
      },
      {
        id: 'maintenance-security',
        name: 'Maintenance & Security',
        description: 'Updates, monitoring, and patching after launch.',
        details:
          'Proactive weekly dependency updates, real-time uptime telemetry, SSL certificate management, and automated daily backups so your business is always open.',
        deliverables: ['24/7 uptime monitoring', 'Weekly security vulnerability patching', 'Daily off-site cloud backups', 'Guaranteed rollback recovery'],
      },
    ],
  },
  {
    id: 'ai',
    name: 'AI & Autonomous Assistance',
    shortLabel: 'AI',
    countText: '4 Services',
    count: 4,
    icon: Bot,
    tagline: 'Intelligent automation that captures leads, answers customer queries, and routes distress calls 24/7.',
    accentColor: '#A855F7',
    accentGlow: 'rgba(168, 85, 247, 0.25)',
    services: [
      {
        id: 'knowledge-chatbot',
        name: 'Knowledge Chatbot',
        description: 'Fast answers from a fixed script or FAQ library.',
        details:
          'Instant, deterministic responses for your most frequent customer inquiries, pricing questions, service areas, and appointment booking criteria.',
        deliverables: ['Curated FAQ decision tree', 'Zero hallucination guarantee', 'Brand tone compliance', 'Multi-channel embed support'],
      },
      {
        id: 'llm-chatbot',
        name: 'LLM Chatbot',
        description: 'Reasons over your real knowledge base, in your voice.',
        details:
          'Advanced Retrieval-Augmented Generation (RAG) agent indexed across your proprietary service catalogs, operating guidelines, past quotes, and client policies.',
        deliverables: ['Vector database knowledge indexing', 'Custom fine-tuned tone of voice', 'Complex context reasoning', 'Context-aware lead qualification'],
        badge: 'Advanced RAG',
      },
      {
        id: 'ai-receptionist',
        name: 'AI Receptionist / CSR',
        description: 'Handles inquiries and requests around the clock.',
        details:
          'Never miss a late-night distress inquiry or emergency weekend request. Automatically collects contact details, verifies service area eligibility, and schedules visits.',
        deliverables: ['24/7/365 inquiry capture', 'Instant SMS/WhatsApp confirmation', 'Calendar dispatch sync', 'Spam & bot filtration'],
        badge: '24/7 Availability',
      },
      {
        id: 'human-handoff',
        name: 'Human Handoff',
        description: 'A real person steps in when it actually matters.',
        details:
          'Smooth, seamless escalation protocols. When a high-ticket customer or urgent emergency is detected, the conversation is immediately routed to your live dispatch team.',
        deliverables: ['Real-time Slack / WhatsApp notification', 'Complete chat context transcript transfer', 'Seamless agent takeover', 'Escalation trigger rules'],
      },
    ],
  },
  {
    id: 'growth',
    name: 'Growth & Multi-Channel Acquisition',
    shortLabel: 'Growth',
    countText: '6 Services',
    count: 6,
    icon: TrendingUp,
    tagline: 'Performance marketing, local search capture, and retention engines delivering real calls and booked revenue.',
    accentColor: '#FF3843',
    accentGlow: 'rgba(255, 56, 67, 0.25)',
    services: [
      {
        id: 'seo',
        name: 'SEO',
        description: 'Technical fixes, content, and authority over time.',
        details:
          'Code-level semantic HTML, schema structured data, local Google Business Profile ranking, and high-intent keyword capture engineered for sustainable organic visibility.',
        deliverables: ['Technical SEO & schema markup', 'Local geographic landing pages', 'Authority backlink acquisition', 'Keyword gap analysis'],
        badge: 'High ROI',
      },
      {
        id: 'google-ads-lsa',
        name: 'Google Ads + LSA',
        description: 'Campaigns built, tracked, and optimized weekly.',
        details:
          'Dominate local search results and Google Local Services Ads (LSA). We manage negative keyword lists and bid strategies to capture high-urgency commercial intent.',
        deliverables: ['Google Search & LSA setup', 'Negative keyword suppression', 'Target CPA & ROAS optimization', 'Weekly bid adjustments'],
      },
      {
        id: 'meta-ads',
        name: 'Meta Ads',
        description: 'Facebook and Instagram, targeted and retargeted.',
        details:
          'Compelling video and carousel creatives targeting homeowners, business operators, and specific regional demographics with retargeting funnels.',
        deliverables: ['Creative ad variations & video copy', 'Custom & lookalike audience building', 'Multi-touch dynamic retargeting', 'Pixel & CAPI server-side tracking'],
      },
      {
        id: 'social-reels',
        name: 'Social + Reels',
        description: 'Strategy, content calendar, and creative production.',
        details:
          'Short-form vertical video and educational social content showcasing before-and-after project transformations, building brand authority across YouTube, Instagram, and LinkedIn.',
        deliverables: ['Monthly editorial content calendar', 'Scriptwriting & video editing', 'Brand aesthetic templates', 'Community engagement guidance'],
      },
      {
        id: 'email-marketing',
        name: 'Email Marketing',
        description: 'Campaigns, automation, and segmentation that convert.',
        details:
          'Automated lifecycle sequences for seasonal reminders, maintenance checkups, review requests, and repeat client reactivation without manual effort.',
        deliverables: ['Automated onboarding & follow-up flows', 'Customer segmentation', 'Custom branded HTML templates', 'Deliverability optimization'],
      },
      {
        id: 'crm-integration',
        name: 'CRM Integration',
        description: 'Leads flow straight into the system you already use.',
        details:
          'Direct webhook pipelines connecting your website forms, chatbots, and ad campaigns directly into HubSpot, Salesforce, Zoho, or your proprietary dispatch software.',
        deliverables: ['Zero lead latency webhooks', 'Field mapping & duplicate detection', 'Automated sales notifications', 'Multi-channel attribution tags'],
      },
    ],
  },
  {
    id: 'data',
    name: 'Data, Telemetry & Reporting',
    shortLabel: 'Data',
    countText: '3 Services',
    count: 3,
    icon: BarChart3,
    tagline: 'End-to-end attribution connecting ad clicks and website visits directly to revenue and booked jobs.',
    accentColor: '#38BDF8',
    accentGlow: 'rgba(56, 189, 248, 0.25)',
    services: [
      {
        id: 'dashboard',
        name: 'Dashboard',
        description: 'Every channel\'s performance in one live view.',
        details:
          'A centralized, unified client dashboard showing real-time website traffic, phone calls, cost-per-lead, and closed revenue across all marketing channels.',
        deliverables: ['Single pane of glass analytics', 'Real-time call tracking metrics', 'Channel ROI comparison', 'Secure client portal login'],
      },
      {
        id: 'analytics',
        name: 'Analytics',
        description: 'Website, ads, and lead tracking, fully connected.',
        details:
          'Server-side Google Tag Manager (sGTM), GA4 event architectures, and call attribution software configured with zero data loss from browser ad-blockers.',
        deliverables: ['Server-side event tracking', 'GA4 custom conversion events', 'Dynamic call tracking numbers', 'Form submission drop-off telemetry'],
        badge: 'Zero Data Loss',
      },
      {
        id: 'monthly-reporting',
        name: 'Monthly Reporting',
        description: 'What happened, why, and what to do next.',
        details:
          'No confusing 40-page vanity metric dumps. Every month you receive a concise executive briefing highlighting revenue generated, cost efficiency, and priorities for the next sprint.',
        deliverables: ['Executive summary brief', 'Direct senior engineer consultation', 'Clear ROI & revenue attribution', 'Next-month strategic roadmap'],
      },
    ],
  },
  {
    id: 'accessibility',
    name: 'Accessibility & Inclusive Engineering',
    shortLabel: 'Accessibility',
    countText: '2 Services',
    count: 2,
    icon: Eye,
    tagline: 'Inclusive digital architecture that ensures every customer can navigate, interact, and transact effortlessly.',
    accentColor: '#10B981',
    accentGlow: 'rgba(16, 185, 129, 0.25)',
    services: [
      {
        id: 'accessibility-improvements',
        name: 'Accessibility Improvements',
        description: 'Contrast, navigation, and structure that includes everyone.',
        details:
          'Remediation of colour contrast ratios, proper keyboard tab-order navigation, ARIA live regions, and semantic landmark hierarchies that eliminate digital exclusion.',
        deliverables: ['WCAG 2.1 AA compliance audit', 'Screen reader navigation optimization', 'Keyboard-only accessibility pathing', 'Touch target size calibration'],
      },
      {
        id: 'accessibility-testing',
        name: 'Accessibility Testing',
        description: 'Reviewed against recognized accessibility standards.',
        details:
          'Rigorous automated and manual inspection against international WCAG standards using NVDA, VoiceOver, and assistive device simulations to ensure zero compliance risks.',
        deliverables: ['Automated axe-core regression tests', 'Manual screen-reader audit report', 'Compliance certificate & roadmap', 'Annual accessibility re-verification'],
        badge: 'WCAG 2.1 AA',
      },
    ],
  },
  {
    id: 'support',
    name: 'Support & Ongoing Partnership',
    shortLabel: 'Support',
    countText: '3 Services',
    count: 3,
    icon: Headphones,
    tagline: 'Direct access to senior engineers who built your platform, keeping systems resilient and aligned with growth.',
    accentColor: '#F59E0B',
    accentGlow: 'rgba(245, 158, 11, 0.25)',
    services: [
      {
        id: 'technical-support',
        name: 'Technical Support',
        description: 'A real team, reachable when something breaks.',
        details:
          'Dedicated senior support channel with guaranteed SLA response times. When you call or message, you speak directly with technical leads who know your codebase inside out.',
        deliverables: ['Dedicated Slack / email channel', 'Guaranteed emergency SLA response', 'Direct founder & lead engineer access', 'Monthly codebase health check'],
        badge: 'SLA Guaranteed',
      },
      {
        id: 'ai-content-updates',
        name: 'AI + Content Updates',
        description: "Your chatbot's knowledge, kept current every month.",
        details:
          'As your business launches new service tiers, updates pricing, or expands geographic zones, we retrain your AI assistants and refresh website content monthly.',
        deliverables: ['Monthly knowledge base re-indexing', 'Promotional banner updates', 'Seasonal service copy updates', 'Ongoing response accuracy audits'],
      },
      {
        id: 'api-maintenance',
        name: 'API Maintenance',
        description: 'Every integration monitored and kept in sync.',
        details:
          'Continuous monitoring of third-party CRM webhooks, payment gateways, SMS providers, and external APIs to prevent breaking changes when providers update versions.',
        deliverables: ['Webhook failure alerting', 'API version migration handling', 'Database schema synchronization', 'Third-party uptime monitoring'],
      },
    ],
  },
]

// =================================================================
// 4-STAGE OPERATING PROCESS (EXACT REFERENCE ORDER & MEANING)
// =================================================================

const PROCESS_STEPS = [
  {
    step: '01',
    name: 'Audit',
    tagline: 'DIAGNOSE FRICTION',
    description: 'We tear down your current site, ads and tracking, and show you exactly where leads leak.',
    details:
      'We run exhaustive audits on your mobile Core Web Vitals, conversion drop-off points, Google Ads search query waste, and analytics gaps. You receive an honest diagnostic before making any investment.',
    deliverable: 'Exhaustive friction teardown & leak map',
    duration: 'Week 1',
  },
  {
    step: '02',
    name: 'Plan',
    tagline: 'PRIORITIZE IMPACT',
    description: 'A prioritized roadmap with expected impact per item — you approve what we build, and why.',
    details:
      'We formulate a transparent, milestone-based execution plan. Every proposed feature or campaign is ranked by estimated revenue impact versus engineering effort. No surprise scope changes.',
    deliverable: 'Milestone roadmap with exact deliverables',
    duration: 'Week 1–2',
  },
  {
    step: '03',
    name: 'Build',
    tagline: 'DIRECT ENGINEERING',
    description: 'Senior hands ship the site, campaigns and integrations in weeks, not quarters.',
    details:
      'Our senior engineers and growth specialists write production-ready code, deploy high-speed Next.js architectures, configure zero-leak tracking, and test integrations across real devices.',
    deliverable: 'Production deployment with zero downtime',
    duration: 'Weeks 2–6',
  },
  {
    step: '04',
    name: 'Optimize',
    tagline: 'DURABLE REVENUE',
    description: 'Weekly iteration on real data: calls, bookings and revenue — not vanity dashboards.',
    details:
      'Post-launch, we review live customer inquiries, cost-per-lead, and booking outcomes weekly. We fine-tune ad bids, update AI knowledge bases, and eliminate checkout friction continuously.',
    deliverable: 'Weekly sprints on validated commercial data',
    duration: 'Ongoing',
  },
]

// =================================================================
// 5 EXACT FAQS FROM REFERENCE
// =================================================================

const FAQS = [
  {
    q: 'What types of Indian businesses do you work with?',
    a: 'We work with ambitious Indian startups, MSMEs, D2C brands, healthcare clinics, educational academies, and regional professional service providers requiring high-conversion websites, mobile apps, instant UPI checkout flows, and localized SEO.',
  },
  {
    q: 'Can you work with my existing website?',
    a: 'Yes. If your current website stack is technically sound, we can integrate AI chatbots, optimize speed and Core Web Vitals, connect analytics telemetry, and run your advertising campaigns. However, if your existing platform is built on sluggish legacy page-builders that actively choke conversion rates, we will transparently recommend a modern Next.js rebuild to eliminate friction.',
  },
  {
    q: 'How do you price projects?',
    a: 'We operate with transparent, fixed-milestone pricing in INR (₹) rather than open-ended hourly billing. Following the initial Audit and Planning phase, you receive an itemized proposal with clear deliverables, guaranteed timelines, and fixed costs. You know your exact investment before any code is deployed.',
  },
  {
    q: 'How fast can we start?',
    a: 'We typically initiate discovery and onboarding within 3 to 5 business days following scope approval. Our initial technical and marketing audit is delivered in your first week, and full production builds are engineered and deployed in weeks, not quarters.',
  },
  {
    q: 'Who actually does the work?',
    a: 'Senior in-house engineers, UI/UX designers, and growth practitioners handle your project directly. We never hand off work to junior interns or sub-contractors. You maintain a direct communication line with the actual specialists engineering your digital systems.',
  },
]

// Anchor and category hash routing map
const HASH_MAP: Record<string, string> = {
  website: 'website',
  web: 'website',
  mobile: 'website',
  commerce: 'website',
  design: 'website',
  speed: 'website',
  ai: 'ai',
  growth: 'growth',
  seo: 'growth',
  marketing: 'growth',
  data: 'data',
  telemetry: 'data',
  accessibility: 'accessibility',
  support: 'support',
}

// =================================================================
// MAIN SERVICES PAGE COMPONENT
// =================================================================

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('website')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)
  const [viewMode, setViewMode] = useState<'category' | 'all'>('category')

  // Listen to hash change to support external and internal anchor linking
  useEffect(() => {
    const handleHash = () => {
      const rawHash = window.location.hash.replace('#', '').toLowerCase()
      if (rawHash && HASH_MAP[rawHash]) {
        setActiveCategory(HASH_MAP[rawHash])
        const targetElement = document.getElementById(rawHash) || document.getElementById('services-explorer')
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const currentCategoryData =
    SERVICE_CATEGORIES.find((cat) => cat.id === activeCategory) || SERVICE_CATEGORIES[0]

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#070508] text-white pt-24 pb-20 selection:bg-[#E51D25] selection:text-white">
        {/* Background ambient radial gradients */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[950px] h-[600px] bg-gradient-to-b from-[#E51D25]/12 via-[#4A0A18]/15 to-transparent blur-[140px] rounded-full" />
          <div className="absolute top-[800px] -right-40 w-[650px] h-[650px] bg-[#E51D25]/06 blur-[160px] rounded-full" />
          <div className="absolute top-[1600px] -left-40 w-[700px] h-[700px] bg-[#4A0A18]/10 blur-[180px] rounded-full" />
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
                  Services
                </div>

                {/* India-oriented headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                  Full-lifecycle digital solutions <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
                    for ambitious Indian businesses.
                  </span>
                </h1>

                {/* Description with Indian business relevance */}
                <p className="text-base sm:text-lg text-[rgba(240,243,248,0.72)] leading-relaxed max-w-xl">
                  High-speed websites, AI automation, localized search, and growth engineering handled by a senior team with zero account-manager layers. Engineered for Indian startups, MSMEs, D2C brands, and established service enterprises.
                </p>

                {/* Working CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-white/90 text-black text-sm font-bold transition-all shadow-lg shadow-white/10 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Start a project</span>
                    <ArrowUpRight size={16} className="stroke-[2.5]" />
                  </Link>

                  <a
                    href="#services-explorer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.09] border border-white/12 text-white text-sm font-semibold transition-all hover:border-white/25"
                  >
                    <span>Browse services</span>
                    <ChevronDown size={16} className="text-white/60" />
                  </a>
                </div>

                {/* Core System Signals Mini-Rail */}
                <div className="pt-6 grid grid-cols-3 gap-4 max-w-lg border-t border-white/[0.08]">
                  <div>
                    <div className="text-2xl font-bold font-mono text-white">22</div>
                    <div className="text-xs text-[rgba(240,243,248,0.55)]">Services Under 1 Roof</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-mono text-[#FF3843]">6</div>
                    <div className="text-xs text-[rgba(240,243,248,0.55)]">Specialized Disciplines</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-mono text-white">1</div>
                    <div className="text-xs text-[rgba(240,243,248,0.55)]">Senior Unified Team</div>
                  </div>
                </div>
              </div>

              {/* Right Hero Visual: Connected Business Growth System (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Subtle decorative glow */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#E51D25]/20 to-[#38BDF8]/10 rounded-3xl blur-xl opacity-60" />

                  {/* Connected System Frame */}
                  <div className="relative rounded-2xl bg-[#12080E] border border-white/15 p-6 shadow-2xl backdrop-blur-xl space-y-5">
                    {/* Visual header */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                        Ethixweb Integrated Growth Engine
                      </span>
                      <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>ACTIVE</span>
                      </div>
                    </div>

                    {/* Animated SVG Connected System Diagram */}
                    <div className="relative aspect-square max-w-[340px] mx-auto flex items-center justify-center">
                      <svg viewBox="0 0 320 320" className="w-full h-full" fill="none">
                        {/* Outer Orbit Lines */}
                        <circle cx="160" cy="160" r="120" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="4 4" />
                        <circle cx="160" cy="160" r="75" stroke="rgba(229, 29, 37, 0.15)" strokeWidth="1" />

                        {/* Connection Spokes with Traveling Signal Particles */}
                        <line x1="160" y1="160" x2="160" y2="40" stroke="#E51D25" strokeWidth="1.5" strokeOpacity="0.4" />
                        <line x1="160" y1="160" x2="264" y2="100" stroke="#A855F7" strokeWidth="1.5" strokeOpacity="0.4" />
                        <line x1="160" y1="160" x2="264" y2="220" stroke="#FF3843" strokeWidth="1.5" strokeOpacity="0.4" />
                        <line x1="160" y1="160" x2="160" y2="280" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.4" />
                        <line x1="160" y1="160" x2="56" y2="220" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.4" />
                        <line x1="160" y1="160" x2="56" y2="100" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.4" />

                        {/* Node 1: Website Architecture (Top) */}
                        <circle cx="160" cy="40" r="18" fill="#180A12" stroke="#E51D25" strokeWidth="2" />
                        <circle cx="160" cy="40" r="5" fill="#E51D25" />

                        {/* Node 2: AI Assistance (Top-Right) */}
                        <circle cx="264" cy="100" r="18" fill="#180A12" stroke="#A855F7" strokeWidth="2" />
                        <circle cx="264" cy="100" r="5" fill="#A855F7" />

                        {/* Node 3: Growth & Ads (Bottom-Right) */}
                        <circle cx="264" cy="220" r="18" fill="#180A12" stroke="#FF3843" strokeWidth="2" />
                        <circle cx="264" cy="220" r="5" fill="#FF3843" />

                        {/* Node 4: Data & Telemetry (Bottom) */}
                        <circle cx="160" cy="280" r="18" fill="#180A12" stroke="#38BDF8" strokeWidth="2" />
                        <circle cx="160" cy="280" r="5" fill="#38BDF8" />

                        {/* Node 5: Accessibility (Bottom-Left) */}
                        <circle cx="56" cy="220" r="18" fill="#180A12" stroke="#10B981" strokeWidth="2" />
                        <circle cx="56" cy="220" r="5" fill="#10B981" />

                        {/* Node 6: Support (Top-Left) */}
                        <circle cx="56" cy="100" r="18" fill="#180A12" stroke="#F59E0B" strokeWidth="2" />
                        <circle cx="56" cy="100" r="5" fill="#F59E0B" />

                        {/* Center Hub: The Business Core */}
                        <circle cx="160" cy="160" r="34" fill="#200A15" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
                        <circle cx="160" cy="160" r="30" fill="url(#centerGrad)" />
                        <defs>
                          <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#E51D25" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#4A0A18" stopOpacity="0.9" />
                          </radialGradient>
                        </defs>
                        <text x="160" y="156" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="monospace">
                          ETHIX
                        </text>
                        <text x="160" y="169" textAnchor="middle" fill="#FF8A90" fontSize="9" fontWeight="bold" fontFamily="monospace">
                          CORE
                        </text>
                      </svg>
                    </div>

                    {/* Diagram Micro-Labels */}
                    <div className="grid grid-cols-3 gap-2 text-center pt-1 border-t border-white/10">
                      <div className="p-1.5 rounded-lg bg-white/[0.02]">
                        <span className="block text-[10px] font-mono text-white/50">DISCOVERY</span>
                        <span className="text-[11px] font-bold text-white">SEO & Ads</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-white/[0.02]">
                        <span className="block text-[10px] font-mono text-[#FF3843]">ENGINE</span>
                        <span className="text-[11px] font-bold text-white">Next.js + AI</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-white/[0.02]">
                        <span className="block text-[10px] font-mono text-white/50">OUTCOME</span>
                        <span className="text-[11px] font-bold text-white">Booked Jobs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 2: WHAT WE OFFER / 6 CATEGORIES & 22 SERVICES     */}
          {/* ========================================================= */}
          <section id="services-explorer" className="py-16 sm:py-20 scroll-mt-24 border-b border-white/[0.08] relative">
            {/* Service Anchor Targets for Deep Links */}
            <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-0">
              <span id="website" />
              <span id="web" />
              <span id="mobile" />
              <span id="commerce" />
              <span id="design" />
              <span id="speed" />
              <span id="ai" />
              <span id="growth" />
              <span id="seo" />
              <span id="marketing" />
              <span id="data" />
              <span id="accessibility" />
              <span id="support" />
            </div>
            <div className="space-y-10">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-white/[0.08]">
                <div className="space-y-3 max-w-2xl">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF3843]">
                    <Layers size={13} />
                    <span>WHAT WE OFFER</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                    Everything under one roof.
                  </h2>
                  <p className="text-base sm:text-lg text-[rgba(240,243,248,0.72)] leading-relaxed">
                    &ldquo;22 services across website, AI, growth, data, accessibility, and support — run by one team instead of five disconnected vendors.&rdquo;
                  </p>
                </div>

                {/* View Mode Toggle: Interactive Explorer vs. All 22 Services Grid */}
                <div className="flex items-center p-1 rounded-full bg-white/[0.04] border border-white/10 shrink-0">
                  <button
                    type="button"
                    onClick={() => setViewMode('category')}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                      viewMode === 'category'
                        ? 'bg-white text-black font-bold shadow'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Category Explorer
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('all')}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                      viewMode === 'all'
                        ? 'bg-white text-black font-bold shadow'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    All 22 Services
                  </button>
                </div>
              </div>

              {/* MODE 1: INTERACTIVE CATEGORY EXPLORER */}
              {viewMode === 'category' && (
                <div className="space-y-8">
                  {/* Category Selection Tabs */}
                  <div
                    role="tablist"
                    aria-label="Service categories"
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5"
                  >
                    {SERVICE_CATEGORIES.map((category) => {
                      const Icon = category.icon
                      const isSelected = activeCategory === category.id

                      return (
                        <button
                          key={category.id}
                          role="tab"
                          id={`tab-${category.id}`}
                          aria-selected={isSelected}
                          aria-controls={`panel-${category.id}`}
                          onClick={() => setActiveCategory(category.id)}
                          className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all border flex flex-col justify-between space-y-3 relative overflow-hidden group ${
                            isSelected
                              ? 'bg-gradient-to-b from-[#1E0B16] to-[#12070D] border-[#E51D25] shadow-lg shadow-[#E51D25]/15'
                              : 'bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.05] hover:border-white/20'
                          }`}
                        >
                          {isSelected && (
                            <span
                              className="absolute top-0 left-0 right-0 h-1 bg-[#E51D25]"
                              aria-hidden="true"
                            />
                          )}

                          <div className="flex items-center justify-between">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                              style={{
                                background: isSelected ? category.accentGlow : 'rgba(255, 255, 255, 0.05)',
                                color: isSelected ? category.accentColor : 'rgba(255, 255, 255, 0.7)',
                              }}
                            >
                              <Icon size={16} />
                            </div>
                            <span
                              className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                              style={{
                                background: isSelected ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.04)',
                                color: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                              }}
                            >
                              {category.countText}
                            </span>
                          </div>

                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-white transition-colors">
                              {category.shortLabel}
                            </div>
                            <div className="text-[10px] text-white/40 line-clamp-1 mt-0.5">
                              {category.name.split('&')[1] || category.name}
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {/* Active Category Display Panel */}
                  <div
                    id={`panel-${currentCategoryData.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${currentCategoryData.id}`}
                    className="rounded-3xl bg-gradient-to-b from-[#140A10] to-[#0A0508] border border-white/[0.12] p-6 sm:p-10 shadow-2xl relative overflow-hidden"
                  >
                    {/* Decorative ambient glow */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[100px] opacity-20"
                      style={{ background: currentCategoryData.accentColor }}
                    />

                    {/* Category Overview Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/[0.08] relative z-10">
                      <div className="space-y-2 max-w-2xl">
                        <div className="flex items-center gap-2">
                          <span
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold"
                            style={{
                              background: currentCategoryData.accentGlow,
                              color: currentCategoryData.accentColor,
                            }}
                          >
                            Category {SERVICE_CATEGORIES.findIndex((c) => c.id === currentCategoryData.id) + 1} of 6
                          </span>
                          <span className="text-xs font-mono text-white/40">· {currentCategoryData.countText}</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {currentCategoryData.name}
                        </h3>
                        <p className="text-sm text-[rgba(240,243,248,0.70)] leading-relaxed">
                          {currentCategoryData.tagline}
                        </p>
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-white/90 text-black text-xs font-bold transition-all shadow-md shrink-0 self-start lg:self-center"
                      >
                        <span>Request Scope for this Discipline</span>
                        <ArrowUpRight size={14} className="stroke-[2.5]" />
                      </Link>
                    </div>

                    {/* Services Grid Inside Active Category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 relative z-10">
                      {currentCategoryData.services.map((service, index) => (
                        <div
                          key={service.id}
                          className="rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all p-6 space-y-4 flex flex-col justify-between group"
                        >
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono text-white/40">
                                0{index + 1} · {currentCategoryData.shortLabel}
                              </span>
                              {service.badge && (
                                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white font-semibold">
                                  {service.badge}
                                </span>
                              )}
                            </div>

                            <h4 className="text-lg font-bold text-white group-hover:text-[#FF3843] transition-colors">
                              {service.name}
                            </h4>

                            {/* Reference Description */}
                            <p className="text-xs font-medium text-[rgba(240,243,248,0.85)] italic pl-2.5 border-l-2 border-[#E51D25]">
                              &ldquo;{service.description}&rdquo;
                            </p>

                            <p className="text-xs text-[rgba(240,243,248,0.65)] leading-relaxed">
                              {service.details}
                            </p>
                          </div>

                          <div className="space-y-3 pt-3 border-t border-white/[0.06]">
                            <div className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                              Core Deliverables
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {service.deliverables.map((item) => (
                                <div key={item} className="flex items-center gap-1.5 text-[11px] text-white/70">
                                  <Check size={12} className="text-[#FF3843] shrink-0" />
                                  <span className="truncate">{item}</span>
                                </div>
                              ))}
                            </div>

                            <div className="pt-2">
                              <Link
                                href={`/contact?service=${service.id}`}
                                className="inline-flex items-center gap-1 text-xs font-mono text-white/60 hover:text-white transition-colors"
                              >
                                <span>Inquire about {service.name}</span>
                                <ArrowRight size={12} className="text-[#FF3843]" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* MODE 2: COMPLETE 22 SERVICES SYSTEM GRID */}
              {viewMode === 'all' && (
                <div className="space-y-12">
                  {SERVICE_CATEGORIES.map((cat, catIdx) => {
                    const CatIcon = cat.icon
                    return (
                      <div
                        key={cat.id}
                        className="rounded-3xl bg-[#11080E] border border-white/[0.08] p-6 sm:p-8 space-y-6"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center"
                              style={{ background: cat.accentGlow, color: cat.accentColor }}
                            >
                              <CatIcon size={20} />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-mono uppercase tracking-wider text-white/50">
                                  Category 0{catIdx + 1}
                                </span>
                                <span className="text-xs font-mono text-[#FF3843]">· {cat.countText}</span>
                              </div>
                              <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                            </div>
                          </div>

                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-white/70 hover:text-white transition-colors self-start sm:self-center"
                          >
                            <span>Scope Discipline</span>
                            <ArrowUpRight size={13} />
                          </Link>
                        </div>

                        {/* Services inside this category */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {cat.services.map((service) => (
                            <div
                              key={service.id}
                              className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all flex flex-col justify-between space-y-3"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="text-sm font-bold text-white">{service.name}</h4>
                                  {service.badge && (
                                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-white/80">
                                      {service.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-[rgba(240,243,248,0.75)] italic leading-relaxed">
                                  &ldquo;{service.description}&rdquo;
                                </p>
                              </div>

                              <Link
                                href={`/contact?service=${service.id}`}
                                className="inline-flex items-center gap-1 text-[11px] font-mono text-white/40 hover:text-[#FF3843] transition-colors pt-2 border-t border-white/[0.05]"
                              >
                                <span>Get in touch</span>
                                <ArrowRight size={11} />
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 3: ENGAGEMENT PROCESS (4 STEPS IN EXACT ORDER)     */}
          {/* ========================================================= */}
          <section className="py-16 sm:py-20 border-b border-white/[0.08]">
            <div className="space-y-12">
              {/* Process Section Header */}
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF3843]">
                  <Compass size={13} />
                  <span>How an engagement runs</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                  Audit first. Build second. <br className="hidden sm:inline" />
                  <span className="text-[#FF3843]">Optimize forever.</span>
                </h2>
                <p className="text-base sm:text-lg text-[rgba(240,243,248,0.72)] leading-relaxed">
                  Every service above plugs into the same four-beat operating rhythm, so you always know what happens next.
                </p>
              </div>

              {/* 4-Step Animated Progression Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                {PROCESS_STEPS.map((step, idx) => (
                  <div
                    key={step.step}
                    className="relative rounded-2xl bg-gradient-to-b from-[#150A10] to-[#0A0508] border border-white/[0.10] hover:border-[#E51D25]/40 transition-all p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-xl group"
                  >
                    {/* Top Step Number & Timing */}
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-white/10">
                        <span className="text-2xl font-black font-mono text-[#FF3843] group-hover:scale-105 transition-transform">
                          {step.step}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-white/[0.05] border border-white/10 text-white/60">
                          {step.duration}
                        </span>
                      </div>

                      {/* Step Header */}
                      <div className="space-y-2 pt-4">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[#FF3843] font-semibold">
                          {step.tagline}
                        </div>
                        <h3 className="text-xl font-bold text-white">{step.name}</h3>
                        <p className="text-xs font-semibold text-white/90 italic leading-relaxed">
                          &ldquo;{step.description}&rdquo;
                        </p>
                        <p className="text-xs text-[rgba(240,243,248,0.60)] leading-relaxed pt-1">
                          {step.details}
                        </p>
                      </div>
                    </div>

                    {/* Deliverable Badge */}
                    <div className="pt-4 border-t border-white/[0.08]">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1">
                        Tangible Output
                      </div>
                      <div className="text-xs font-mono font-medium text-white/90 flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                        <span className="truncate">{step.deliverable}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 4: FAQ SECTION (5 EXACT REFERENCE QUESTIONS)      */}
          {/* ========================================================= */}
          <section className="py-16 sm:py-20 border-b border-white/[0.08]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
              {/* Left Header Column (4 cols) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF3843]">
                  <HelpCircle size={13} />
                  <span>COMMON QUESTIONS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-[rgba(240,243,248,0.68)] leading-relaxed">
                  Transparent answers regarding our client partnerships, technical scope, pricing, and execution rhythms.
                </p>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-mono text-[#FF3843] hover:text-white transition-colors"
                  >
                    <span>Have an unlisted question? Talk to us →</span>
                  </Link>
                </div>
              </div>

              {/* Right Accordion Column (8 cols) */}
              <div className="lg:col-span-8 space-y-3">
                {FAQS.map((faq, index) => {
                  const isOpen = expandedFaq === index

                  return (
                    <div
                      key={faq.q}
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? 'bg-[#150910] border-white/20 shadow-lg'
                          : 'bg-white/[0.02] border-white/[0.06] hover:border-white/15'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedFaq(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                      >
                        <span className="text-sm sm:text-base font-bold text-white">
                          {faq.q}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                            isOpen ? 'bg-[#E51D25] text-white rotate-180' : 'bg-white/[0.06] text-white/60'
                          }`}
                        >
                          <ChevronDown size={15} />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[rgba(240,243,248,0.75)] leading-relaxed border-t border-white/[0.05]">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 5: FINAL CLOSING CTA SECTION                      */}
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
                <span>UNIFIED ARCHITECTURE</span>
              </div>

              {/* Exact reference headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                One team for your <br />
                <span className="text-[#FF3843]">whole growth system.</span>
              </h2>

              {/* Exact reference supporting text */}
              <p className="text-base text-[rgba(240,243,248,0.75)] leading-relaxed max-w-xl mx-auto">
                Stop stitching together freelancers and point tools. Tell us what growth looks like for you — we&apos;ll map the system that gets you there.
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
                  href="/our-work"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white text-sm font-semibold transition-all hover:border-white/30"
                >
                  <span>See the results</span>
                  <ArrowRight size={16} className="text-white/60" />
                </Link>
              </div>

              {/* Guarantees */}
              <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[rgba(240,243,248,0.55)] font-mono">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#FF3843]" />
                  <span>Direct Senior Engineering</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#FF3843]" />
                  <span>Fixed Milestone Delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#FF3843]" />
                  <span>24-Hour Scoping SLA</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  )
}
