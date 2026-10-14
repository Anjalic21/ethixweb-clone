import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NetworkTransition from '@/components/NetworkTransition'
import {
  ArrowRight,
  Compass,
  Eye,
  Target,
  Heart,
  Zap,
  Check,
  X,
  Smartphone,
  Cpu,
  ShieldCheck,
  Layers,
  CheckCircle2,
  Gauge,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Ethixweb — Digital Experiences for Ambitious Indian Businesses',
  description:
    'Built for ambitious businesses. Designed for India’s digital future. Ethixweb helps Indian startups, MSMEs, and D2C brands turn ideas into high-performance digital products.',
}

// ── How We Work Steps (Section 03) ──
const workflowSteps = [
  {
    step: '01',
    title: 'Discover & strategize',
    desc: 'We dig into your business model, target Indian demographics, and competitors to build a roadmap focused on revenue, not vanity metrics.',
  },
  {
    step: '02',
    title: 'Design & build',
    desc: 'Senior designers and developers engineer a fast, conversion-focused interface and clean codebase, built right the first time.',
  },
  {
    step: '03',
    title: 'Launch & optimize',
    desc: 'We ship in weeks, not months, then evaluate real usage patterns to refine messaging, load speeds, and conversion flows.',
    hasCornerWeb: true,
  },
  {
    step: '04',
    title: 'Grow & scale',
    desc: 'Once the core product excels, we double down on high-performing features and scale across channels.',
  },
]

// ── Core Values (Section 04) ──
const coreValues = [
  {
    icon: Target,
    title: 'Business-first thinking',
    desc: 'We evaluate every technology choice through business outcomes: qualified inquiries, conversions, and customer retention.',
  },
  {
    icon: Cpu,
    title: 'Thoughtful engineering',
    desc: 'Clean, type-safe TypeScript architectures built for longevity, easy maintenance, and zero vendor lock-in.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-first accessibility',
    desc: 'Deep optimization for Indian network realities, ensuring sub-second speeds on 4G and 5G connections across all devices.',
  },
  {
    icon: Heart,
    title: 'Clear communication',
    desc: 'Direct developer access on every project. No account manager telephone games, technical jargon, or hidden agendas.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsible execution',
    desc: 'Fixed-price milestone sprints agreed upfront in writing, with 100% source code and repository ownership from day one.',
  },
  {
    icon: Zap,
    title: 'Continuous improvement',
    desc: 'Lean releases and rapid iteration. We launch in weeks and optimize continuously based on real customer feedback.',
  },
]

// ── Metrics (Section 05) ──
const metrics = [
  { value: '2–4 wks', label: 'TYPICAL TIME TO LAUNCH' },
  { value: '100%', label: 'IN-HOUSE SENIOR BUILDERS' },
  { value: 'Pan-India', label: 'DIGITAL EXECUTION' },
  { value: '90+', label: 'TARGET PAGESPEED SCORE' },
]

// ── Checklist for Feature Panel ──
const checklistItems = [
  'Direct access to senior developers & strategists',
  'Transparent fixed-price sprints in INR (₹)',
  'Mobile-first optimization for Indian cellular networks',
  'Decisions backed by data, not guesswork',
  'Ongoing 30-day care and stabilization support',
  '100% IP, repository, and deployment ownership',
]

// ── Comparison Table Data (Section 06) ──
const comparisonRows = [
  {
    category: 'Communication',
    ethix: 'Direct line to the senior team building your product',
    typical: 'Multiple account managers passing filtered messages',
  },
  {
    category: 'Project scope',
    ethix: 'Fixed scope and milestones, agreed in writing upfront',
    typical: 'Vague scopes, open-ended retainers, and surprise invoices',
  },
  {
    category: 'Mobile experience',
    ethix: 'Mobile-first responsive architecture tested for Indian networks',
    typical: 'Desktop-first templates that drag on mobile connections',
  },
  {
    category: 'Performance',
    ethix: 'Sub-second load times targeting 90+ Core Web Vitals',
    typical: 'Bloated themes, slow plugins, and high user bounce rates',
  },
  {
    category: 'Code maintainability',
    ethix: 'Clean TypeScript, complete documentation, 100% IP ownership',
    typical: 'Proprietary vendor lock-in and difficult-to-maintain code',
  },
  {
    category: 'Testing & launch',
    ethix: 'Thorough multi-device testing with 30-day launch warranty',
    typical: 'Rushed launches with bugs discovered by real customers',
  },
]

// ── Spiderweb Corner SVG Decoration ──
function SpiderwebDecoration() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-0 right-0 w-36 h-36 overflow-hidden opacity-30 select-none"
    >
      <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
        <circle cx="160" cy="0" r="40" stroke="#E51D25" strokeWidth="1" />
        <circle cx="160" cy="0" r="75" stroke="#E51D25" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="160" cy="0" r="110" stroke="#E51D25" strokeWidth="1" />
        <circle cx="160" cy="0" r="145" stroke="#E51D25" strokeWidth="1" />
        <line x1="160" y1="0" x2="30" y2="160" stroke="#E51D25" strokeWidth="0.8" />
        <line x1="160" y1="0" x2="75" y2="160" stroke="#E51D25" strokeWidth="0.8" />
        <line x1="160" y1="0" x2="120" y2="160" stroke="#E51D25" strokeWidth="0.8" />
        <line x1="160" y1="0" x2="0" y2="60" stroke="#E51D25" strokeWidth="0.8" />
        <line x1="160" y1="0" x2="0" y2="110" stroke="#E51D25" strokeWidth="0.8" />
      </svg>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#08090C] text-[#E7EBF2] overflow-x-hidden pt-24 sm:pt-28">
        {/* ── SECTION 1: ABOUT HERO ── */}
        <section
          className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden"
          style={{
            background:
              'radial-gradient(circle at 60% 0%, rgba(138, 24, 28, 0.32) 0%, rgba(20, 8, 12, 0.4) 40%, transparent 70%)',
          }}
          aria-labelledby="about-hero-heading"
        >
          {/* Subtle background grid */}
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

          {/* Subtle animated red ambient light behind content */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-12 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] animate-hero-ambient"
            style={{
              background:
                'radial-gradient(circle, rgba(229, 29, 37, 0.40) 0%, rgba(138, 24, 28, 0.18) 50%, transparent 70%)',
            }}
          />

          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              {/* Eyebrow: Red outlined pill */}
              <div className="animate-hero-eyebrow inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#E51D25]/35 bg-[#E51D25]/10 text-xs font-mono tracking-wider text-white mb-8 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E51D25]" aria-hidden="true" />
                <span>ABOUT ETHIXWEB</span>
              </div>

              {/* Main Heading */}
              <h1
                id="about-hero-heading"
                className="animate-hero-headline text-4xl sm:text-6xl lg:text-[4.65rem] font-extrabold tracking-tight text-white leading-[1.06] mb-8"
              >
                Built for ambitious businesses.{' '}
                <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#F0F3F8] via-[#F1C3C7] to-[#D57B84] bg-clip-text text-transparent">
                  Designed for India’s digital future.
                </span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="animate-hero-copy text-base sm:text-lg lg:text-xl text-[rgba(240,243,248,0.70)] leading-relaxed mb-10 max-w-2xl font-normal">
                Ethixweb helps Indian businesses turn ideas into thoughtful digital experiences through web development, mobile applications, and practical technology solutions.
              </p>

              {/* Dual Action Buttons */}
              <div className="animate-hero-ctas flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-white/90 text-black text-sm font-bold transition-all shadow-lg shadow-white/10 hover:scale-[1.02] active:scale-[0.98] focus:ring-2 focus:ring-[#FF3843]"
                >
                  <span>Start a Project</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>

                <a
                  href="#how-we-work"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#180A0E]/70 hover:bg-[#250E14] border border-white/15 hover:border-white/30 text-white text-sm font-semibold transition-all duration-200 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98] focus:ring-2 focus:ring-white/40"
                >
                  <span>How We Work</span>
                  <ArrowRight size={16} className="text-white/60" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: ANIMATED INDIAN DIGITAL-NETWORK TRANSITION ── */}
        <NetworkTransition />

        {/* ── SECTION 3: OUR STORY (01) ── */}
        <section
          className="py-24 lg:py-32 relative overflow-hidden"
          style={{
            background:
              'radial-gradient(circle at 10% 40%, rgba(138, 24, 28, 0.18) 0%, transparent 50%), #08090C',
          }}
          aria-labelledby="story-heading"
        >
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: High-Quality Modern Indian Tech Collaboration Photo + Floating Badge (6 cols) */}
              <div className="lg:col-span-6 relative pb-6 sm:pb-8 pr-2">
                {/* Main Landscape Collaboration Image */}
                <div className="animate-image-enter relative rounded-[28px] overflow-hidden border border-white/10 shadow-2xl bg-[#140A0D] group transition-all duration-500 hover:border-[#E51D25]/30 hover:shadow-[0_20px_50px_rgba(229,29,37,0.14)]">
                  <Image
                    src="/images/team-collaboration.jpg"
                    alt="Contemporary Indian software engineer and UI/UX designer collaborating over a laptop reviewing product wireframes and code in a modern Bengaluru studio"
                    width={720}
                    height={480}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090C]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Badge (Top Right) */}
                <div className="animate-badge-float absolute top-4 right-4 z-20 rounded-2xl p-3.5 sm:p-4 bg-[#16080B]/90 border border-white/12 backdrop-blur-md shadow-2xl">
                  <div className="text-base sm:text-lg font-black text-[#FF3843] leading-none mb-1">
                    Since 2020
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/60">
                    SENIOR-LED TEAM
                  </div>
                </div>
              </div>

              {/* Right Column: Copy (6 cols) */}
              <div className="lg:col-span-6">
                {/* Outlined Section Number 01 + Animated Divider Line */}
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="text-5xl sm:text-6xl font-black font-mono text-transparent select-none"
                    style={{
                      WebkitTextStroke: '1.5px rgba(229, 29, 37, 0.45)',
                    }}
                  >
                    01
                  </span>
                  <div className="animate-line-draw h-px bg-gradient-to-r from-[#E51D25]/60 via-[#E51D25]/25 to-transparent flex-1" />
                </div>

                {/* Eyebrow */}
                <span className="block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-4">
                  OUR STORY
                </span>

                {/* Heading */}
                <h2
                  id="story-heading"
                  className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.14] mb-6"
                >
                  Big ambitions don’t need{' '}
                  <span className="bg-gradient-to-r from-white via-[#F3C5C9] to-[#DF7E87] bg-clip-text text-transparent">
                    complicated technology.
                  </span>
                </h2>

                {/* Body Paragraphs */}
                <div className="space-y-5 text-sm sm:text-base text-[rgba(240,243,248,0.70)] leading-relaxed">
                  <p>
                    We started Ethixweb to help Indian businesses establish a credible digital presence, simplify customer journeys, reach expanding domestic markets, and build maintainable technology.
                  </p>
                  <p>
                    We’re a tight-knit team of senior developers, designers, and digital strategists. When you partner with Ethixweb, you collaborate directly with the people architecting and writing your code. No account managers passing messages. No juniors learning on your budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: MISSION & VISION (02) ── */}
        <section
          className="py-24 lg:py-32 relative overflow-hidden border-t border-white/[0.06]"
          style={{
            background:
              'radial-gradient(circle at 80% 20%, rgba(138, 24, 28, 0.16) 0%, transparent 60%), #08090C',
          }}
          aria-labelledby="mission-vision-heading"
        >
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
            {/* Header: Outlined 02 + Red Divider */}
            <div className="flex items-center gap-4 mb-4">
              <span
                className="text-5xl sm:text-6xl font-black font-mono text-transparent select-none"
                style={{
                  WebkitTextStroke: '1.5px rgba(229, 29, 37, 0.45)',
                }}
              >
                02
              </span>
              <div className="animate-line-draw h-px bg-gradient-to-r from-[#E51D25]/60 via-[#E51D25]/25 to-transparent flex-1" />
            </div>

            <span className="block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-3">
              WHAT DRIVES US
            </span>

            <h2
              id="mission-vision-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-14"
            >
              Mission &amp; vision
            </h2>

            {/* Two Wide Burgundy Cards Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Card 1: Our Mission */}
              <div className="group rounded-3xl p-8 sm:p-10 lg:p-12 bg-gradient-to-b from-[#19090D] via-[#14080B] to-[#0D0507] border border-white/[0.10] hover:border-[#E51D25]/40 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(229,29,37,0.12)] transition-all duration-300 relative overflow-hidden shadow-2xl flex flex-col justify-between">
                {/* Subtle Inner Red Ambient Glow on Hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-[#E51D25]/15 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#E51D25] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#E51D25]/25 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                    <Compass size={24} aria-hidden="true" />
                  </div>

                  <span className="block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-3">
                    OUR MISSION
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-4">
                    Make useful, well-designed technology accessible to businesses ready to grow.
                  </h3>

                  <p className="text-sm sm:text-base text-[rgba(240,243,248,0.65)] leading-relaxed">
                    Every project we take on is judged by tangible business outcomes: did it move the needle on inquiries, user adoption, and revenue? We build websites and applications that earn their place in your budget.
                  </p>
                </div>
              </div>

              {/* Card 2: Our Vision (with Corner Spiderweb) */}
              <div className="group rounded-3xl p-8 sm:p-10 lg:p-12 bg-gradient-to-b from-[#19090D] via-[#14080B] to-[#0D0507] border border-white/[0.10] hover:border-[#E51D25]/40 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(229,29,37,0.12)] transition-all duration-300 relative overflow-hidden shadow-2xl flex flex-col justify-between">
                <SpiderwebDecoration />

                {/* Subtle Inner Red Ambient Glow on Hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-[#E51D25]/15 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#E51D25] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#E51D25]/25 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                    <Eye size={24} aria-hidden="true" />
                  </div>

                  <span className="block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-3">
                    OUR VISION
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-4">
                    Help ambitious Indian businesses compete and grow through better digital experiences.
                  </h3>

                  <p className="text-sm sm:text-base text-[rgba(240,243,248,0.65)] leading-relaxed">
                    We’re building Ethixweb into the go-to technology partner for Indian enterprises, MSMEs, and startups — known for senior craftsmanship, honest communication, and measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: HOW WE WORK (03) ── */}
        <section
          id="how-we-work"
          className="py-24 lg:py-32 relative overflow-hidden border-t border-white/[0.06]"
          style={{
            background:
              'radial-gradient(circle at 20% 80%, rgba(138, 24, 28, 0.16) 0%, transparent 60%), #08090C',
          }}
          aria-labelledby="how-we-work-heading"
        >
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
            {/* Outlined 03 + Red Divider */}
            <div className="flex items-center gap-4 mb-4">
              <span
                className="text-5xl sm:text-6xl font-black font-mono text-transparent select-none"
                style={{
                  WebkitTextStroke: '1.5px rgba(229, 29, 37, 0.45)',
                }}
              >
                03
              </span>
              <div className="animate-line-draw h-px bg-gradient-to-r from-[#E51D25]/60 via-[#E51D25]/25 to-transparent flex-1" />
            </div>

            <span className="block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-3">
              HOW WE WORK
            </span>

            {/* Layout: Left Column (Heading + Weekly Card) vs Right Column (2x2 Workflow Grid) */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <h2
                  id="how-we-work-heading"
                  className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.12]"
                >
                  A clear process.{' '}
                  <span className="bg-gradient-to-r from-white via-[#F3C5C9] to-[#DF7E87] bg-clip-text text-transparent">
                    Zero guesswork.
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-[rgba(240,243,248,0.70)] leading-relaxed">
                  From first architecture session to production deployment, you’ll always know what’s happening, why, and what’s next. No black boxes, no surprise invoices.
                </p>

                {/* "Every Single Week" Dark Burgundy Card */}
                <div className="rounded-2xl p-6 sm:p-7 bg-[#14080B] border border-white/10 hover:border-[#E51D25]/30 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden shadow-xl mt-6">
                  <div
                    aria-hidden="true"
                    className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 pointer-events-none select-none text-[#FF3843]"
                  >
                    <CheckCircle2 size={128} />
                  </div>

                  <span className="block text-[11px] font-mono uppercase tracking-widest text-[#FF3843] font-bold mb-4">
                    EVERY SINGLE WEEK
                  </span>

                  <ul className="space-y-3 mb-6 relative z-10" role="list">
                    <li className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                      <div className="w-4 h-4 rounded-full border border-[#FF3843] flex items-center justify-center shrink-0">
                        <Check size={10} className="text-[#FF3843] stroke-[3]" />
                      </div>
                      <span>You know what’s shipping</span>
                    </li>
                    <li className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                      <div className="w-4 h-4 rounded-full border border-[#FF3843] flex items-center justify-center shrink-0">
                        <Check size={10} className="text-[#FF3843] stroke-[3]" />
                      </div>
                      <span>You know why it’s prioritized</span>
                    </li>
                    <li className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                      <div className="w-4 h-4 rounded-full border border-[#FF3843] flex items-center justify-center shrink-0">
                        <Check size={10} className="text-[#FF3843] stroke-[3]" />
                      </div>
                      <span>You see what it moved</span>
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-white/10 relative z-10">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white">
                      2–4 weeks
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mt-0.5">
                      TYPICAL TIME TO LAUNCH
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 2x2 Grid of Cards (7 cols) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {workflowSteps.map(({ step, title, desc, hasCornerWeb }) => (
                  <div
                    key={step}
                    className="rounded-2xl p-6 sm:p-7 bg-gradient-to-b from-[#180A0E] to-[#100608] border border-white/10 hover:border-[#E51D25]/35 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(229,29,37,0.08)] transition-all duration-300 relative overflow-hidden shadow-xl flex flex-col justify-between"
                  >
                    {hasCornerWeb && <SpiderwebDecoration />}

                    <div className="relative z-10">
                      <span className="block text-3xl font-extrabold font-mono text-[#FF3843] mb-3">
                        {step}
                      </span>

                      <h3 className="text-lg font-bold text-white mb-2.5">
                        {title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[rgba(240,243,248,0.60)] leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: CORE VALUES (04) ── */}
        <section
          className="py-24 lg:py-32 relative overflow-hidden border-t border-white/[0.06]"
          style={{
            background:
              'radial-gradient(circle at 80% 50%, rgba(138, 24, 28, 0.16) 0%, transparent 60%), #08090C',
          }}
          aria-labelledby="values-heading"
        >
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
            {/* Outlined 04 + Red Divider */}
            <div className="flex items-center gap-4 mb-4">
              <span
                className="text-5xl sm:text-6xl font-black font-mono text-transparent select-none"
                style={{
                  WebkitTextStroke: '1.5px rgba(229, 29, 37, 0.45)',
                }}
              >
                04
              </span>
              <div className="animate-line-draw h-px bg-gradient-to-r from-[#E51D25]/60 via-[#E51D25]/25 to-transparent flex-1" />
            </div>

            <span className="block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-3">
              WHAT WE STAND FOR
            </span>

            <h2
              id="values-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-14"
            >
              Core values that shape everything we build.
            </h2>

            {/* 6 Value Cards in 3x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group rounded-3xl p-8 bg-gradient-to-b from-[#180A0E] to-[#100608] border border-white/10 hover:border-[#E51D25]/40 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(229,29,37,0.12)] transition-all duration-300 relative overflow-hidden shadow-xl flex flex-col justify-between"
                >
                  {/* Subtle Inner Red Ambient Glow on Hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-[#E51D25]/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#E51D25] flex items-center justify-center text-white mb-6 shadow-md shadow-[#E51D25]/25 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                      <Icon size={22} aria-hidden="true" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {title}
                    </h3>

                    <p className="text-sm text-[rgba(240,243,248,0.65)] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 7: WHY ETHIXWEB (05) ── */}
        <section
          id="operating-standards"
          className="scroll-mt-24 py-24 lg:py-32 relative overflow-hidden border-t border-white/[0.06]"
          style={{
            background:
              'radial-gradient(circle at 30% 20%, rgba(138, 24, 28, 0.20) 0%, transparent 60%), #08090C',
          }}
          aria-labelledby="why-heading"
        >
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
            {/* Outlined 05 + Red Divider */}
            <div className="flex items-center gap-4 mb-4">
              <span
                className="text-5xl sm:text-6xl font-black font-mono text-transparent select-none"
                style={{
                  WebkitTextStroke: '1.5px rgba(229, 29, 37, 0.45)',
                }}
              >
                05
              </span>
              <div className="animate-line-draw h-px bg-gradient-to-r from-[#E51D25]/60 via-[#E51D25]/25 to-transparent flex-1" />
            </div>

            <span className="block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-3">
              WHY ETHIXWEB
            </span>

            <h2
              id="why-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-12"
            >
              Why clients choose us and stay.
            </h2>

            {/* 4 Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
              {metrics.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl p-6 sm:p-7 bg-[#14080B] border border-white/10 hover:border-[#E51D25]/35 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(229,29,37,0.08)] transition-all duration-300 shadow-lg"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-mono tracking-tight mb-2">
                    {value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-white/50">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Panel with Checklist + Performance Commitment */}
            <div className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-gradient-to-b from-[#1A0A0E] via-[#14070A] to-[#0D0507] border border-[#E51D25]/30 shadow-2xl relative overflow-hidden hover:border-[#E51D25]/45 transition-colors duration-300">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left: 6-item Checklist (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    {checklistItems.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#E51D25]/15 border border-[#E51D25]/40 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} className="text-[#FF3843] stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-white/90 font-medium leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Performance Outcome Card (5 cols) */}
                <div className="lg:col-span-5 rounded-2xl p-6 sm:p-7 bg-[#0E0507] border border-white/10 shadow-xl relative hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Gauge size={22} className="text-[#FF3843]" />
                    <span className="text-2xl font-black text-white font-mono">Sub-Second</span>
                  </div>

                  <span className="block text-[10px] font-mono uppercase tracking-wider text-white/40 mb-3">
                    CORE WEB VITALS BENCHMARK
                  </span>

                  <p className="text-sm text-white/80 leading-relaxed mb-4">
                    Engineered specifically for fluctuating cellular networks and diverse Android/iOS devices across Tier-1, Tier-2, and Tier-3 Indian cities.
                  </p>

                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#FF3843] font-bold">
                    VERIFIED PERFORMANCE TARGET · ZERO OUTSOURCING
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 8: COMPARISON TABLE (06) ── */}
        <section
          className="py-24 lg:py-32 relative overflow-hidden border-t border-white/[0.06]"
          style={{
            background:
              'radial-gradient(circle at 70% 30%, rgba(138, 24, 28, 0.16) 0%, transparent 60%), #08090C',
          }}
          aria-labelledby="comparison-heading"
        >
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
            {/* Outlined 06 + Red Divider */}
            <div className="flex items-center gap-4 mb-4">
              <span
                className="text-5xl sm:text-6xl font-black font-mono text-transparent select-none"
                style={{
                  WebkitTextStroke: '1.5px rgba(229, 29, 37, 0.45)',
                }}
              >
                06
              </span>
              <div className="animate-line-draw h-px bg-gradient-to-r from-[#E51D25]/60 via-[#E51D25]/25 to-transparent flex-1" />
            </div>

            <span className="block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-3">
              THE DIFFERENCE
            </span>

            <h2
              id="comparison-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-12"
            >
              Ethixweb vs. the typical agency.
            </h2>

            {/* Desktop Table Container */}
            <div className="hidden md:block rounded-3xl bg-[#14080B]/90 border border-white/10 overflow-hidden shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="py-5 px-6 text-xs font-mono uppercase tracking-widest text-white/40 w-1/4">
                      Dimension
                    </th>
                    <th className="py-5 px-6 text-xs font-mono uppercase tracking-widest text-[#FF3843] bg-[#E51D25]/10 border-x border-[#E51D25]/20 w-3/8 font-bold">
                      ETHIXWEB
                    </th>
                    <th className="py-5 px-6 text-xs font-mono uppercase tracking-widest text-white/40 w-3/8">
                      TYPICAL AGENCY
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] text-sm">
                  {comparisonRows.map(({ category, ethix, typical }) => (
                    <tr key={category} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-5 px-6 font-semibold text-white/80">
                        {category}
                      </td>
                      <td className="py-5 px-6 text-white font-medium bg-[#E51D25]/[0.04] border-x border-[#E51D25]/15">
                        <div className="flex items-center gap-2.5">
                          <Check size={16} className="text-[#FF3843] shrink-0 stroke-[2.5]" />
                          <span>{ethix}</span>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-white/50">
                        <div className="flex items-center gap-2.5">
                          <X size={16} className="text-white/30 shrink-0 stroke-[2]" />
                          <span>{typical}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Comparison Cards */}
            <div className="md:hidden space-y-4">
              {comparisonRows.map(({ category, ethix, typical }) => (
                <div
                  key={category}
                  className="rounded-2xl p-5 bg-[#14080B] border border-white/10 space-y-3"
                >
                  <div className="text-xs font-mono uppercase tracking-wider text-white/40 pb-2 border-b border-white/10">
                    {category}
                  </div>

                  <div className="p-3 rounded-xl bg-[#E51D25]/10 border border-[#E51D25]/20 flex items-start gap-2.5 text-xs text-white font-medium">
                    <Check size={15} className="text-[#FF3843] shrink-0 mt-0.5 stroke-[2.5]" />
                    <div>
                      <span className="block text-[10px] font-mono text-[#FF3843] uppercase mb-0.5">
                        Ethixweb
                      </span>
                      <span>{ethix}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-white/50">
                    <X size={15} className="text-white/30 shrink-0 mt-0.5 stroke-[2]" />
                    <div>
                      <span className="block text-[10px] font-mono text-white/40 uppercase mb-0.5">
                        Typical Agency
                      </span>
                      <span>{typical}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 9: PAN-INDIA EXECUTION PANEL ── */}
        <section className="py-12 lg:py-16 relative">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
            <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#180A0E] via-[#14070A] to-[#0D0507] border border-white/10 shadow-2xl text-center max-w-4xl mx-auto relative overflow-hidden hover:border-[#E51D25]/30 transition-colors duration-300">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-36 rounded-full blur-[60px] opacity-25"
                style={{ background: '#E51D25' }}
              />

              <div className="w-12 h-12 rounded-2xl bg-[#E51D25]/15 border border-[#E51D25]/35 flex items-center justify-center text-[#FF3843] mx-auto mb-4 relative z-10">
                <Layers size={24} aria-hidden="true" />
              </div>

              <span className="block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-3 relative z-10 font-bold">
                PAN-INDIA DIGITAL EXECUTION
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 relative z-10">
                Engineered for India’s digital ecosystem.
              </h3>

              <p className="text-sm sm:text-base text-[rgba(240,243,248,0.75)] leading-relaxed max-w-2xl mx-auto relative z-10">
                Ethixweb builds and deploys high-performance digital products for companies across India — from Bengaluru and Mumbai to Delhi NCR, Hyderabad, Pune, and emerging growth hubs. We engineer for domestic payment infrastructure, mobile-first performance, and scalable cloud architectures with complete IP ownership.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 10: FINAL CTA PANEL ── */}
        <section className="py-20 lg:py-28 relative">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
            <div
              className="animate-cta-gradient rounded-3xl p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl border border-white/10"
              style={{
                background:
                  'linear-gradient(135deg, #4A0B0E 0%, #7A1418 25%, #A3181E 50%, #7A1418 75%, #4A0B0E 100%)',
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15)_0%,_transparent_60%)]"
              />

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  Ready to take your business further online?
                </h2>

                <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
                  Tell us what you want to build. Let’s turn your next idea into a thoughtful digital experience.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-white/95 text-black text-sm font-bold transition-all shadow-xl shadow-black/25 hover:scale-[1.03] active:scale-[0.98] focus:ring-2 focus:ring-white"
                  >
                    <span>Start a Project</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black/35 hover:bg-black/55 border border-white/20 hover:border-white/40 text-white text-sm font-semibold transition-all backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98] focus:ring-2 focus:ring-white/40"
                  >
                    <span>Explore Services</span>
                    <ArrowRight size={16} className="text-white/70" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
