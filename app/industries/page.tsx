import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import IndustriesHeroViz from '@/components/IndustriesHeroViz'
import {
  Store,
  HeartPulse,
  GraduationCap,
  Factory,
  Building2,
  UtensilsCrossed,
  Scale,
  Rocket,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Smartphone,
  ShieldCheck,
  Zap,
  Clock,
  Sparkles,
  Layers,
  Check,
  ChevronRight,
  AlertCircle,
  TrendingUp,
  Cpu,
  PhoneCall,
  Search,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industries We Serve — Digital Solutions for Indian Business Growth',
  description:
    'Ethixweb engineers high-performance web platforms, mobile applications, and digital experiences tailored for Indian retail, healthcare, coaching, MSMEs, real estate, and startups.',
}

// ── 8 Dedicated Indian Business Categories ──
const industriesData = [
  {
    id: 'retail',
    name: 'Retail & Local Commerce',
    subhead: 'From Neighbourhood Kiranas to D2C Storefronts',
    headline: 'Turn browsers into loyal customers across physical and digital storefronts.',
    icon: Store,
    badgeColor: 'border-[#E51D25]/30 bg-[#E51D25]/10 text-[#FF454E]',
    challenge:
      'Indian retailers lose over 65% of potential shoppers due to slow-loading mobile catalogs, complicated registration flows, and clunky checkouts that fail to support native UPI apps.',
    solution:
      'We engineer lightweight, sub-second mobile storefronts with one-click UPI checkout (PhonePe, Google Pay, Paytm), WhatsApp product inquiries, and automated customer order notifications.',
    highlights: [
      'Instant UPI & Razorpay 1-click checkout flows',
      'Direct WhatsApp Catalog & automated order alerts',
      'Sub-800ms search and localized inventory indexing',
      'Mobile-optimized for fluctuating cellular networks',
    ],
    impactBadge: 'Conversion Boost',
    impactText: 'Engineered for zero-lag mobile shopping across Tier 1, 2, and 3 cities.',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Wellness',
    subhead: 'Clinics, Diagnostic Labs & Dental Practices',
    headline: 'Make it effortless for patients to find, trust, and book your practice.',
    icon: HeartPulse,
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    challenge:
      'Patients searching for reliable doctors or diagnostic services face abandoned websites with outdated timings, missing doctor credentials, and cumbersome phone tag booking systems.',
    solution:
      'We build clean, reassuring patient portals that showcase verifiable doctor qualifications, service costs, test preparation guidelines, and friction-free appointment scheduling via WhatsApp.',
    highlights: [
      'Direct WhatsApp & calendar appointment routing',
      'Verified doctor credentials & speciality profiles',
      'Local clinic SEO targeting neighbourhood radius',
      'Accessibility-first layouts for senior patients',
    ],
    impactBadge: 'Patient Trust',
    impactText: 'Transparent clinic information reduces front-desk call burdens by 40%.',
  },
  {
    id: 'education',
    name: 'Education & Coaching',
    subhead: 'Test-Prep Institutes, Academies & Skill Centers',
    headline: 'Help ambitious students and parents find the right learning path.',
    icon: GraduationCap,
    badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    challenge:
      'Coaching institutes waste large ad spends on landing pages that take 6+ seconds to load on mobile, causing prospective students to abandon inquiry forms before submitting.',
    solution:
      'We build high-velocity course discovery hubs with structured curriculum breakdowns, faculty credentials, batch schedule displays, and instant 2-step counselor lead capture.',
    highlights: [
      'Ultra-fast course landing pages (< 1s First Paint)',
      'Frictionless 2-step mobile inquiry & syllabus download',
      'Direct CRM integration with counselor WhatsApp alerts',
      'Results showcase with authentic student verification',
    ],
    impactBadge: 'Lead Velocity',
    impactText: 'Instant lead handoff ensures student inquiries get answered within minutes.',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial MSMEs',
    subhead: 'Tier-2 Suppliers, Factories & B2B Distributors',
    headline: 'Make your manufacturing capability easy to discover, verify, and quote.',
    icon: Factory,
    badgeColor: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
    challenge:
      'Indian industrial manufacturers with world-class plant capabilities often present decade-old static websites, missing out on high-value domestic tenders and international procurement contracts.',
    solution:
      'We design authoritative digital catalog platforms with downloadable technical data sheets (TDS), plant machinery specs, ISO/CE compliance badges, and automated Request-for-Quotation (RFQ) engines.',
    highlights: [
      'Dynamic B2B Request-for-Quotation (RFQ) workflow',
      'Downloadable CAD drawings and technical specifications',
      'Machinery capacity and quality certification showcase',
      'GST-compliant lead intake and quotation management',
    ],
    impactBadge: 'B2B Credibility',
    impactText: 'Positions regional MSMEs as dependable partners for global supply chains.',
  },
  {
    id: 'realestate',
    name: 'Real Estate & Construction',
    subhead: 'Builders, Property Consultants & Interior Studios',
    headline: 'Convert property interest into verified, high-intent site visits.',
    icon: Building2,
    badgeColor: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
    challenge:
      'Property portals overwhelm buyers with spam, while developer landing pages feature blurry PDFs and broken sliders that fail to communicate project prestige or build authentic trust.',
    solution:
      'We craft high-fidelity architectural showcases with interactive floor plan explorers, verified RERA registration details, construction milestone tracking, and seamless site-visit booking.',
    highlights: [
      'High-resolution floor plans & interactive layout viewers',
      'Verified RERA compliance integration and legal clarity',
      'VIP site-visit scheduling with WhatsApp directions',
      'Construction progress galleries and drone video embeds',
    ],
    impactBadge: 'Qualified Leads',
    impactText: 'Filters out casual window-shoppers and connects you with serious buyers.',
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Regional Travel',
    subhead: 'Boutique Stays, Cafés, Resorts & Tour Operators',
    headline: 'Make discovering your ambiance, menu, and stay an effortless delight.',
    icon: UtensilsCrossed,
    badgeColor: 'border-rose-500/30 bg-rose-500/10 text-rose-400',
    challenge:
      'Hospitality businesses lose 20–30% of their revenue to online travel aggregator (OTA) commissions because their direct website booking experience is clunky, slow, or outdated on phones.',
    solution:
      'We build visually evocative, mobile-first websites with instant digital menu viewers, commission-free room inquiry flows, curated regional itineraries, and direct payment reservations.',
    highlights: [
      'Direct, zero-commission room and table inquiry engines',
      'Lightning-fast digital QR menu & cocktail showcases',
      'Immersive regional travel itinerary storytelling',
      'Localized Google Business Profile & local SEO tuning',
    ],
    impactBadge: 'Direct Bookings',
    impactText: 'Recapture high-margin revenue through seamless direct guest relationships.',
  },
  {
    id: 'services',
    name: 'Professional Services',
    subhead: 'Chartered Accountants, Corporate Law & Advisory',
    headline: 'Project authoritative credibility to attract discerning corporate clients.',
    icon: Scale,
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    challenge:
      'High-end consultancy firms and legal practices rely entirely on word-of-mouth because generic agency templates make their sophisticated expertise look like an off-the-shelf commodity.',
    solution:
      'We build refined, editorial digital identities featuring practice area deep-dives, regulatory compliance updates, landmark transaction highlights, and secure confidential consultation booking.',
    highlights: [
      'Editorial architecture for tax, legal, and compliance insights',
      'Partner credentials, published works, and case history',
      'Confidential consultation intake with SLA commitments',
      'Strict client privacy, SSL encryption, and data security',
    ],
    impactBadge: 'Brand Authority',
    impactText: 'Instills confidence in CXOs and family offices evaluating your advisory firm.',
  },
  {
    id: 'startups',
    name: 'Startups & High-Growth D2C',
    subhead: 'Tech Ventures, Platforms & Digital Products',
    headline: 'Ship scalable digital experiences that grow alongside your user base.',
    icon: Rocket,
    badgeColor: 'border-[#FF3843]/30 bg-[#FF3843]/10 text-[#FF454E]',
    challenge:
      'Fast-moving founders need to test go-to-market propositions rapidly, but generic no-code tools and WordPress themes become slow, buggy, and impossible to scale when traffic spikes.',
    solution:
      'We architect production-grade Next.js web applications, integrated with Indian fintech APIs, analytics instrumentation, and robust serverless backends built to scale from day one.',
    highlights: [
      'Next.js 14 App Router on global Edge CDN for < 0.5s response',
      'Seamless India Stack, UPI, and webhook integrations',
      'Clean TypeScript codebase with 100% intellectual property ownership',
      'Zero vendor lock-in with continuous deployment workflows',
    ],
    impactBadge: 'Scale-Ready',
    impactText: 'Built to withstand viral launch traffic surges with zero server crashes.',
  },
]

// ── Indian Digital Challenges ──
const indianChallenges = [
  {
    icon: Smartphone,
    title: 'Fluctuating Cellular Networks',
    desc: 'Over 80% of Indian internet visits happen on mobile connections that vary from high-speed 5G in metro centers to congested 4G in suburban and rural hubs. Bloated websites suffer massive bounce rates before content appears.',
  },
  {
    icon: Search,
    title: 'Customers Can’t Find Key Information',
    desc: 'Buyers in Tier 1, 2, and 3 cities demand clear pricing signals, verifiable credentials, exact service locations, and operating hours. Complex, convoluted navigation drives users directly to competitors.',
  },
  {
    icon: Clock,
    title: 'Missed Enquiries & Delayed Follow-Ups',
    desc: 'In India’s fast-moving commerce environment, a customer who waits hours for a response has already moved on. Generic contact forms that fail to trigger instant notifications lead to lost business.',
  },
  {
    icon: ShieldCheck,
    title: 'Websites That Fail to Inspire Trust',
    desc: 'With increasing digital fraud awareness, Indian buyers instinctively distrust poorly designed, outdated websites with broken links or generic stock photos. Credibility must be earned in the first three seconds.',
  },
  {
    icon: PhoneCall,
    title: 'Fragmented Communication Channels',
    desc: 'Indian business happens on WhatsApp, phone calls, and direct consultations. Websites that force customers into foreign ticket systems create friction and high customer abandonment.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Systems That Block Expansion',
    desc: 'As regional businesses expand across states, their outdated digital infrastructure struggles to showcase multiple branch locations, diverse catalogs, or regional market nuances.',
  },
]

// ── 4-Stage Methodology ──
const methodologySteps = [
  {
    step: '01',
    title: 'Understand the business & target customers',
    subtitle: 'Deep Market & Demographic Scoping',
    desc: 'We analyze your target Indian audience, regional demographics, competitive alternatives, and unit economics. We identify what truly drives qualified inquiries and customer retention.',
    deliverable: 'Strategic Blueprint & Information Architecture',
  },
  {
    step: '02',
    title: 'Design an intuitive, mobile-first experience',
    subtitle: 'High-Conversion UI/UX System',
    desc: 'We craft high-fidelity Figma prototypes designed around Indian mobile ergonomics — thumb-accessible touch targets, clear typographic hierarchies, and instant visual trust cues.',
    deliverable: 'Clickable Mobile & Desktop Prototypes',
  },
  {
    step: '03',
    title: 'Build and integrate the required technology',
    subtitle: 'Precision Full-Stack Engineering',
    desc: 'Our senior in-house developers build your product with Next.js, TypeScript, and edge routing. We integrate native Indian services like instant UPI payments, WhatsApp API, and CRM webhooks.',
    deliverable: 'Production-Ready Codebase & Staging Previews',
  },
  {
    step: '04',
    title: 'Test, launch, and improve the experience',
    subtitle: 'Edge Deployment & Ongoing Care',
    desc: 'We benchmark on budget and flagship Android & iOS devices under simulated 4G throttling. Post-launch, you get 30 days of warranty support and performance tuning.',
    deliverable: 'Live Production Launch + 30-Day Stabilization',
  },
]

// ── Mobile-First Technology Pillars ──
const mobilePillars = [
  {
    icon: Zap,
    title: 'Sub-Second Speeds on Variable Networks',
    desc: 'Engineered with server-side rendering and aggressive edge caching to achieve first contentful paint under 0.8s, even on fluctuating 4G mobile connections.',
  },
  {
    icon: Smartphone,
    title: 'Fluid Across Budget & Flagship Smartphones',
    desc: 'Tested across diverse viewport resolutions, ensuring your interface performs flawlessly whether your customer uses an entry-level smartphone or a high-end device.',
  },
  {
    icon: PhoneCall,
    title: 'High-Visibility WhatsApp & Direct CTAs',
    desc: 'Thumb-reachable action buttons that let Indian customers start a WhatsApp chat, place a call, or request a quotation with a single tap.',
  },
  {
    icon: CheckCircle2,
    title: 'Accessible Forms with Auto-Detection',
    desc: 'Form inputs with numeric keypads for mobile numbers, auto-capitalization, and instant client-side validation to eliminate user frustration.',
  },
  {
    icon: ShieldCheck,
    title: 'Bank-Grade Security & Payment Reliability',
    desc: 'SSL encryption, CSRF protection, and deep integration with RBI-compliant payment gateways ensuring your customers transact with peace of mind.',
  },
  {
    icon: Cpu,
    title: 'Scalable Architecture for Festival Surges',
    desc: 'Serverless architecture that scales seamlessly during high-traffic promotional periods (Diwali, festive sales, or news coverage) with zero slowdown.',
  },
]

export default function IndustriesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#08090C] text-[#E7EBF2] overflow-x-hidden pt-24 sm:pt-28">
        {/* ── SECTION A: HERO SECTION ── */}
        <section
          className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden hero-bg bg-grid"
          aria-labelledby="industries-hero-heading"
        >
          {/* Subtle Ambient Lighting Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25"
            style={{
              background: 'radial-gradient(circle, #E51D25 0%, #8A181C 50%, transparent 70%)',
            }}
          />

          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Hero Text (7 cols) */}
              <div className="lg:col-span-7 text-center lg:text-left">
                {/* Eyebrow Label */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#E51D25]/35 bg-[#E51D25]/10 text-xs font-mono uppercase tracking-wider text-white mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#FF3843] animate-pulse" aria-hidden="true" />
                  <span>INDUSTRIES WE SERVE</span>
                </div>

                {/* Main Headline */}
                <h1
                  id="industries-hero-heading"
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight text-white leading-[1.08] mb-6"
                >
                  Built for the businesses{' '}
                  <span className="text-gradient-red block mt-1 sm:mt-2">
                    moving India forward.
                  </span>
                </h1>

                {/* Supporting Description */}
                <p className="text-base sm:text-lg lg:text-xl text-[rgba(240,243,248,0.70)] leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 font-normal">
                  Ethixweb helps Indian businesses build a stronger digital presence, generate qualified enquiries, improve customer experiences, and grow with technology tailored to the Indian market.
                </p>

                {/* Primary & Secondary CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#E51D25] via-[#D11A21] to-[#8A181C] hover:from-[#FF3843] hover:to-[#E51D25] text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-[#E51D25]/25 hover:shadow-[#E51D25]/40 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>

                  <a
                    href="#industry-grid"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 text-white font-semibold text-base transition-all duration-200 backdrop-blur-sm"
                  >
                    <span>Explore Industries</span>
                    <ArrowUpRight size={17} className="text-[rgba(240,243,248,0.6)]" aria-hidden="true" />
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#FF3843] shrink-0" />
                    <span className="text-xs text-[rgba(240,243,248,0.75)] font-medium">
                      Mobile-First India UX
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#FF3843] shrink-0" />
                    <span className="text-xs text-[rgba(240,243,248,0.75)] font-medium">
                      Instant UPI &amp; WhatsApp
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                    <CheckCircle2 size={16} className="text-[#FF3843] shrink-0" />
                    <span className="text-xs text-[rgba(240,243,248,0.75)] font-medium">
                      100% In-House Builders
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Original Animated India Business Ecosystem (5 cols) */}
              <div className="lg:col-span-5 flex items-center justify-center relative">
                <IndustriesHeroViz />
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION B: REFINED INDUSTRY CATEGORY RAIL (NOT A RED MARQUEE) ── */}
        <section
          className="relative py-6 border-y border-white/[0.08] bg-[#0E0609]/90 backdrop-blur-md z-20"
          aria-label="Industry Quick Jump Navigator"
        >
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/40 shrink-0 hidden md:inline-block">
                JUMP TO SECTOR:
              </span>

              {/* Clean, dark, softly illuminated horizontal category rail */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 w-full md:w-auto">
                {industriesData.map(({ id, name, icon: Icon }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#E51D25]/40 text-xs text-white/80 hover:text-white transition-all whitespace-nowrap shrink-0 group"
                  >
                    <Icon size={13} className="text-[#FF454E] group-hover:scale-110 transition-transform" />
                    <span>{name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION C: INDUSTRY CARDS (THE CORE SHOWCASE) ── */}
        <section
          id="industry-grid"
          className="py-24 lg:py-32 relative section-bg-dark"
          aria-labelledby="industry-grid-heading"
        >
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-3xl mb-16">
              <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-3">
                Tailored Solutions for Real Sectors
              </span>
              <h2
                id="industry-grid-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
              >
                Engineered for genuine Indian business realities.
              </h2>
              <p className="text-base sm:text-lg text-[rgba(240,243,248,0.65)] leading-relaxed">
                Every sector operates under distinct buyer behaviors, payment preferences, and inquiry lifecycles. We build purpose-crafted digital systems rather than forcing generic templates onto your business.
              </p>
            </div>

            {/* 8 Industry Cards in Varied Two-Column Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industriesData.map(
                ({
                  id,
                  name,
                  subhead,
                  headline,
                  icon: Icon,
                  badgeColor,
                  challenge,
                  solution,
                  highlights,
                  impactBadge,
                  impactText,
                }) => (
                  <article
                    key={id}
                    id={id}
                    className="group rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#16090D] via-[#12070A] to-[#0A0507] border border-white/10 hover:border-[#E51D25]/40 transition-all duration-300 shadow-2xl relative overflow-hidden flex flex-col justify-between scroll-mt-32"
                  >
                    {/* Subtle corner glow on hover */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#E51D25]/15 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    <div>
                      {/* Card Header: Icon + Category Badge */}
                      <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
                        <div className="w-13 h-13 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-3 text-white group-hover:bg-[#E51D25]/15 group-hover:border-[#E51D25]/35 transition-colors">
                          <Icon size={24} className="text-[#FF454E]" />
                        </div>

                        <span
                          className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider border ${badgeColor}`}
                        >
                          {subhead}
                        </span>
                      </div>

                      {/* Industry Title & Headline */}
                      <div className="mb-6 relative z-10">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 group-hover:text-[#FF3843] transition-colors">
                          {name}
                        </h3>
                        <p className="text-base sm:text-lg font-semibold text-white/90 leading-snug">
                          “{headline}”
                        </p>
                      </div>

                      {/* Challenge & Solution Breakdown */}
                      <div className="space-y-4 mb-6 relative z-10 text-sm">
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                          <span className="block text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1">
                            The Challenge
                          </span>
                          <p className="text-[rgba(240,243,248,0.70)] leading-relaxed">
                            {challenge}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-[#E51D25]/[0.04] border border-[#E51D25]/15">
                          <span className="block text-[10px] font-mono uppercase tracking-wider text-[#FF3843] mb-1 font-bold">
                            How Ethixweb Solves It
                          </span>
                          <p className="text-white/90 leading-relaxed font-medium">
                            {solution}
                          </p>
                        </div>
                      </div>

                      {/* Key Service Highlights Checklist */}
                      <div className="mb-8 relative z-10">
                        <span className="block text-[11px] font-mono uppercase tracking-wider text-white/40 mb-3">
                          Key Capabilities Included:
                        </span>
                        <ul className="space-y-2.5" role="list">
                          {highlights.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                              <Check
                                size={14}
                                className="text-[#FF3843] shrink-0 mt-0.5 stroke-[2.5]"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Card Footer: Impact Badge + Direct CTA Link */}
                    <div className="pt-6 border-t border-white/[0.08] relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[10px] font-mono text-white/60">
                          {impactBadge}
                        </span>
                        <span className="text-xs text-[rgba(240,243,248,0.60)] line-clamp-1">
                          {impactText}
                        </span>
                      </div>

                      <Link
                        href={`/contact?industry=${id}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white hover:text-[#FF3843] transition-colors shrink-0 group/link"
                      >
                        <span>Discuss Your Industry</span>
                        <ArrowRight size={14} className="group-link-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* ── SECTION D: THE INDIAN BUSINESS CHALLENGE ── */}
        <section
          className="py-24 lg:py-32 relative bg-[#08090C] border-t border-white/[0.06]"
          aria-labelledby="challenge-heading"
        >
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-3">
                The Indian Digital Landscape
              </span>
              <h2
                id="challenge-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
              >
                Why conventional websites fail growing Indian businesses.
              </h2>
              <p className="text-base sm:text-lg text-[rgba(240,243,248,0.65)] leading-relaxed">
                Building for the Indian market requires understanding cellular network variability, mobile-first browsing habits, and local trust triggers. Here are the common pitfalls holding Indian businesses back.
              </p>
            </div>

            {/* 6 Challenges Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {indianChallenges.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl p-7 bg-gradient-to-b from-[#14080B] to-[#0D0507] border border-white/[0.08] hover:border-[#E51D25]/35 hover:-translate-y-1 transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF454E] mb-5">
                      <Icon size={20} aria-hidden="true" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                      {title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[rgba(240,243,248,0.65)] leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.05] mt-6 flex items-center gap-2 text-xs font-mono text-[#FF3843]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF3843]" />
                    <span>SOLVED BY ETHIXWEB</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION E: HOW ETHIXWEB HELPS (4-STAGE TIMELINE) ── */}
        <section
          className="py-24 lg:py-32 relative section-bg-dark border-t border-white/[0.06]"
          aria-labelledby="methodology-heading"
        >
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-3">
                Disciplined Execution
              </span>
              <h2
                id="methodology-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
              >
                A connected bridge from business friction to digital growth.
              </h2>
              <p className="text-base text-[rgba(240,243,248,0.60)] leading-relaxed">
                We follow a rigorous, 4-stage engineering sprint that replaces guesswork with measurable milestone delivery.
              </p>
            </div>

            {/* Visual Process Timeline */}
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative" role="list">
              {methodologySteps.map(({ step, title, subtitle, desc, deliverable }, index) => (
                <li
                  key={step}
                  className="rounded-2xl p-7 bg-[#12080B] border border-white/10 hover:border-[#E51D25]/35 hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between shadow-xl"
                >
                  {/* Step Header */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black font-mono text-[#FF3843]">
                        {step}
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E51D25] shadow-[0_0_8px_#E51D25]" />
                    </div>

                    <span className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-1">
                      {subtitle}
                    </span>

                    <h3 className="text-base font-bold text-white mb-3 leading-snug">
                      {title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[rgba(240,243,248,0.60)] leading-relaxed mb-6">
                      {desc}
                    </p>
                  </div>

                  {/* Milestone Footer */}
                  <div className="pt-3 border-t border-white/[0.08]">
                    <span className="block text-[10px] font-mono text-white/40 uppercase mb-0.5">
                      Milestone Handover
                    </span>
                    <span className="text-xs font-semibold text-white/90">
                      {deliverable}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── SECTION F: TECHNOLOGY FOR INDIA'S MOBILE-FIRST AUDIENCE ── */}
        <section
          className="py-24 lg:py-32 relative bg-[#08090C] border-t border-white/[0.06]"
          aria-labelledby="mobile-tech-heading"
        >
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Narrative (5 cols) */}
              <div className="lg:col-span-5">
                <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-3">
                  Mobile Architecture
                </span>
                <h2
                  id="mobile-tech-heading"
                  className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-tight mb-6"
                >
                  Technology calibrated for India’s digital economy.
                </h2>
                <p className="text-base text-[rgba(240,243,248,0.70)] leading-relaxed mb-8">
                  India’s digital revolution is uniquely mobile-first, powered by low-latency UPI payments, widespread 4G/5G adoption, and high expectations for instantaneous interactions. We engineer architectures specifically built to thrive in this environment.
                </p>

                <div className="p-6 rounded-2xl bg-[#14080B] border border-white/10 shadow-xl space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E51D25]/15 border border-[#E51D25]/30 flex items-center justify-center text-[#FF3843] shrink-0">
                      <Zap size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Sub-Second Target (TTFB)</div>
                      <div className="text-xs text-white/50">Edge nodes stationed in Mumbai &amp; Bengaluru</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">100% IP &amp; Code Ownership</div>
                      <div className="text-xs text-white/50">Full repository transfer on project completion</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 6 Pillars Grid (7 cols) */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                {mobilePillars.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="p-6 rounded-2xl bg-gradient-to-b from-[#14080B] to-[#0E0508] border border-white/10 hover:border-[#E51D25]/30 transition-all duration-300 shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF454E] mb-3">
                        <Icon size={17} />
                      </div>
                      <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                        {title}
                      </h3>
                      <p className="text-xs text-[rgba(240,243,248,0.60)] leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION G: HIGH-IMPACT FINAL CTA ── */}
        <section
          className="py-24 lg:py-32 relative overflow-hidden border-t border-white/[0.08]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(138, 24, 28, 0.32) 0%, rgba(8, 9, 12, 0.98) 75%)',
          }}
          aria-labelledby="industries-cta-heading"
        >
          {/* Subtle Ambient Radial Halos */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] rounded-full blur-[120px] opacity-25"
            style={{ background: 'radial-gradient(circle, #E51D25 0%, #8A181C 70%, transparent 100%)' }}
          />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#E51D25]/35 bg-[#E51D25]/10 text-xs font-mono uppercase tracking-wider text-white mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3843]" />
              <span>START YOUR NEXT CHAPTER</span>
            </div>

            <h2
              id="industries-cta-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
            >
              Your next stage of growth starts with a better digital experience.
            </h2>

            <p className="text-base sm:text-lg text-[rgba(240,243,248,0.70)] max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you manage an industrial factory in Pune, a diagnostic clinic in Hyderabad, a coaching academy in Delhi, or an expanding D2C brand in Bengaluru, Ethixweb delivers the engineering craft your business deserves.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#E51D25] via-[#D11A21] to-[#8A181C] hover:from-[#FF3843] hover:to-[#E51D25] text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-[#E51D25]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start a Project</span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-base transition-all"
              >
                <span>Explore All Services</span>
                <ArrowUpRight size={16} className="text-white/60" />
              </Link>
            </div>

            <div className="mt-8 text-xs font-mono text-white/40">
              Direct Senior Developer Response &bull; Proposals in INR (₹) within 24 Hours
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
