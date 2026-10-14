import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EnquiryForm from '@/components/EnquiryForm'
import { Mail, Clock, ShieldCheck, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact & Project Enquiries — Ethixweb',
  description:
    'Start your project with Ethixweb. Submit your requirements or email us directly for a comprehensive technical review and fixed-price estimate within 24 hours.',
}

const stepsAfterSubmission = [
  {
    step: '1',
    title: 'Requirement Evaluation',
    desc: 'A senior engineer and design strategist review your project brief and technical constraints.',
  },
  {
    step: '2',
    title: 'Introductory Discovery Call',
    desc: 'A 25-minute focused discussion to clarify core priorities, milestones, and system integrations.',
  },
  {
    step: '3',
    title: 'Fixed-Price Proposal',
    desc: 'You receive an itemized proposal with clear deliverables, tech stack choices, and fixed sprint costs.',
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        {/* ── Page Header ── */}
        <section
          className="hero-bg bg-grid py-20 lg:py-28 border-b border-white/[0.06] relative"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#FF3843] mb-4">
              Direct Technical Consultation
            </span>
            <h1
              id="contact-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
            >
              Let’s build something for your{' '}
              <span className="text-gradient-red">business.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[rgba(240,243,248,0.70)] max-w-2xl mx-auto leading-relaxed">
              Share what you’re planning, what needs improving, or where technology could help your business move forward.
            </p>
          </div>
        </section>

        {/* ── Form & Consultation Overview ── */}
        <section className="py-20 lg:py-28 section-bg-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Engagement Context & SLA (5 cols) */}
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <h2 className="text-2xl font-extrabold text-white tracking-tight mb-3">
                    What to expect after you submit
                  </h2>
                  <p className="text-sm text-[rgba(240,243,248,0.60)] leading-relaxed">
                    We treat project inquiries with urgency. You will not receive robotic templates or generic sales pitches.
                  </p>
                </div>

                {/* Steps Timeline */}
                <div className="space-y-6">
                  {stepsAfterSubmission.map(({ step, title, desc }) => (
                    <div key={step} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#E51D25]/10 border border-[#E51D25]/25 flex items-center justify-center font-mono text-xs font-bold text-[#FF3843] shrink-0 mt-0.5">
                        {step}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white mb-1">{title}</h3>
                        <p className="text-xs text-[rgba(240,243,248,0.55)] leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct Channel Box */}
                <div className="p-6 rounded-2xl bg-[#0F1017] border border-white/[0.08] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FF3843]">
                    <Clock size={14} />
                    <span>Response Commitment</span>
                  </div>
                  <p className="text-xs text-[rgba(240,243,248,0.65)] leading-relaxed">
                    All qualified project inquiries receive an initial technical evaluation within 24 business hours.
                  </p>

                  <div className="pt-3 border-t border-white/[0.06]">
                    <span className="block text-[11px] font-mono text-[rgba(240,243,248,0.40)] uppercase mb-1">
                      Direct Email Fallback
                    </span>
                    <a
                      href="mailto:hello@ethixweb.com"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#FF3843] transition-colors group"
                    >
                      <Mail size={15} className="text-[#FF3843]" />
                      <span>hello@ethixweb.com</span>
                      <ArrowUpRight size={13} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[rgba(240,243,248,0.70)]">
                    <CheckCircle2 size={15} className="text-[#FF3843] shrink-0" />
                    <span>Non-Disclosure Agreement (NDA) supported upon request</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[rgba(240,243,248,0.70)]">
                    <CheckCircle2 size={15} className="text-[#FF3843] shrink-0" />
                    <span>Zero vendor lock-in & full IP ownership guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[rgba(240,243,248,0.70)]">
                    <CheckCircle2 size={15} className="text-[#FF3843] shrink-0" />
                    <span>Fixed-price engagement with milestone escrow delivery</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Upgraded Enquiry Form Card (7 cols) */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-gradient-to-b from-[#141620] to-[#0E0F15] border border-white/[0.08] shadow-2xl relative">
                  <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/[0.06]">
                    <div className="w-10 h-10 rounded-xl bg-[#E51D25]/10 border border-[#E51D25]/20 flex items-center justify-center text-[#FF3843]">
                      <MessageSquare size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white tracking-tight">Project Brief Intake</h2>
                      <p className="text-xs text-[rgba(240,243,248,0.50)]">
                        Provide project parameters for an accurate estimate.
                      </p>
                    </div>
                  </div>

                  <EnquiryForm />
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
