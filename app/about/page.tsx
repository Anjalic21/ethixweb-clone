import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Target,
  Users,
  Lightbulb,
  ArrowRight,
  Search,
  PenTool,
  Code2,
  Rocket,
  HeartHandshake,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Ethixweb — our approach, values, and commitment to building premium digital products for Indian businesses.',
}

const values = [
  {
    icon: Target,
    title: 'Outcome-Focused',
    description:
      'Every decision we make is tied to a measurable outcome for your business — traffic, conversions, or retention.',
  },
  {
    icon: Users,
    title: 'Collaborative',
    description:
      'We work as an extension of your team, keeping you informed and involved at every stage of the project.',
  },
  {
    icon: Lightbulb,
    title: 'Craft-Driven',
    description:
      'We care deeply about the quality of what we ship — clean code, accessible interfaces, and polished visuals.',
  },
  {
    icon: HeartHandshake,
    title: 'Honest',
    description:
      'We give you a realistic scope, timeline, and budget upfront. No surprises, no hidden costs.',
  },
]

const processSteps = [
  {
    icon: Search,
    title: 'Discovery',
    description:
      'We start with a structured conversation to understand your business goals, target audience, and technical requirements.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description:
      'Wireframes and high-fidelity mockups are created and iterated with your feedback before development begins.',
  },
  {
    icon: Code2,
    title: 'Development',
    description:
      'We build using modern, maintainable technology with regular check-ins and a staging environment for your review.',
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description:
      'After thorough testing, we deploy your product and provide post-launch support to ensure a smooth go-live.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section
          className="bg-[#0C0D10] py-20 text-center border-b border-white/5"
          aria-labelledby="about-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h1
              id="about-heading"
              className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
            >
              About Ethixweb
            </h1>
            <p className="text-lg text-[rgba(231,235,242,0.60)] leading-relaxed">
              A digital agency built to help Indian businesses compete and grow online.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-[#13141A] py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="rounded-2xl bg-[#1A1B22] border border-white/5 p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Our Mission</h2>
              <p className="text-[rgba(231,235,242,0.65)] leading-relaxed text-lg">
                Ethixweb exists to close the gap between world-class digital quality and the
                Indian market. We believe every business — regardless of size — deserves a
                digital presence that is fast, beautiful, and built to last.
              </p>
              <p className="text-[rgba(231,235,242,0.55)] leading-relaxed mt-4">
                We focus on building long-term relationships with our clients, not one-off
                projects. That means we invest in understanding your business deeply and
                delivering work that continues to perform well after launch.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#0C0D10] py-20" aria-labelledby="values-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 id="values-heading" className="text-2xl sm:text-3xl font-bold text-white mb-3">
                What We Stand For
              </h2>
              <p className="text-[rgba(231,235,242,0.55)] max-w-xl mx-auto">
                The principles that guide every project we take on.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="p-6 rounded-2xl bg-[#13141A] border border-white/5 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E51D25]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-[#E51D25]" aria-hidden="true" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-[rgba(231,235,242,0.55)] leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Working Process */}
        <section className="bg-[#13141A] py-20" aria-labelledby="process-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 id="process-heading" className="text-2xl sm:text-3xl font-bold text-white mb-3">
                How We Work
              </h2>
              <p className="text-[rgba(231,235,242,0.55)] max-w-xl mx-auto">
                A transparent, structured process so you always know what happens next.
              </p>
            </div>

            <ol className="relative" role="list">
              {/* Vertical line */}
              <div
                aria-hidden="true"
                className="absolute left-5 top-0 bottom-0 w-px bg-white/5 hidden sm:block"
              />

              <div className="space-y-8">
                {processSteps.map(({ icon: Icon, title, description }, i) => (
                  <li key={title} className="relative sm:pl-16">
                    {/* Step number + icon */}
                    <div className="flex items-start gap-4 sm:gap-0">
                      <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-xl bg-[#E51D25]/10 border border-[#E51D25]/20 shrink-0 sm:absolute sm:left-0 sm:top-0">
                        <Icon size={18} className="text-[#E51D25]" aria-hidden="true" />
                      </div>
                      <div className="sm:ml-0">
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="text-xs font-bold text-[rgba(231,235,242,0.25)] tracking-widest">
                            0{i + 1}
                          </span>
                          <h3 className="text-white font-semibold">{title}</h3>
                        </div>
                        <p className="text-sm text-[rgba(231,235,242,0.55)] leading-relaxed max-w-2xl">
                          {description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0C0D10] py-20 text-center border-t border-white/5">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to work together?</h2>
            <p className="text-[rgba(231,235,242,0.60)] mb-8">
              Send us an enquiry and we will talk about what we can build for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E51D25] hover:bg-[#B32228] text-white font-semibold transition-colors shadow-lg shadow-[#E51D25]/20"
            >
              Contact Us
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
