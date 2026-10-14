import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Globe,
  Smartphone,
  BarChart3,
  ShieldCheck,
  Zap,
  PenTool,
  ArrowRight,
  Check,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description:
    "Explore Ethixweb's full range of digital services — web design, mobile apps, SEO, UI/UX, and performance optimisation.",
}

const services = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description:
      'Custom websites and web applications built with modern frameworks. Fast, accessible, and built to convert.',
    deliverables: [
      'Responsive, mobile-first design',
      'Next.js / React development',
      'CMS integration',
      'Performance & SEO foundations',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Cross-platform iOS and Android apps using React Native. Native performance with a single shared codebase.',
    deliverables: [
      'iOS & Android from one codebase',
      'Offline-capable architecture',
      'Push notifications',
      'App Store submission support',
    ],
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing & SEO',
    description:
      'Search engine optimisation, Google Ads, and content strategies tailored to Indian audiences and search behaviour.',
    deliverables: [
      'Technical SEO audit & fixes',
      'Keyword research & content strategy',
      'Google Ads campaign setup',
      'Monthly performance reporting',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'UI/UX Design',
    description:
      'User research, wireframing, and high-fidelity prototypes that reduce friction and increase engagement.',
    deliverables: [
      'User research & journey mapping',
      'Wireframes & interactive prototypes',
      'Design system creation',
      'Usability testing',
    ],
  },
  {
    icon: Zap,
    title: 'Performance Optimisation',
    description:
      'Core Web Vitals audits, image optimisation, caching strategies, and infrastructure tuning for 90+ PageSpeed scores.',
    deliverables: [
      'PageSpeed & Core Web Vitals audit',
      'Image & asset optimisation',
      'Caching & CDN configuration',
      'Ongoing monitoring setup',
    ],
  },
  {
    icon: PenTool,
    title: 'Brand & Visual Identity',
    description:
      'Logo design, brand guidelines, and visual systems that communicate your values clearly across every touchpoint.',
    deliverables: [
      'Logo design & variations',
      'Colour & typography system',
      'Brand guidelines document',
      'Social media kit',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section
          className="bg-[#0C0D10] py-20 text-center border-b border-white/5"
          aria-labelledby="services-page-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h1
              id="services-page-heading"
              className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
            >
              Our Services
            </h1>
            <p className="text-lg text-[rgba(231,235,242,0.60)] leading-relaxed">
              End-to-end digital services that take your business from idea to impact.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="bg-[#13141A] py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(({ icon: Icon, title, description, deliverables }) => (
                <article
                  key={title}
                  className="group flex flex-col p-6 rounded-2xl bg-[#1A1B22] border border-white/5 hover:border-[#E51D25]/30 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#E51D25]/10 flex items-center justify-center mb-4 group-hover:bg-[#E51D25]/20 transition-colors">
                    <Icon size={22} className="text-[#E51D25]" aria-hidden="true" />
                  </div>
                  <h2 className="text-white font-semibold mb-2">{title}</h2>
                  <p className="text-sm text-[rgba(231,235,242,0.55)] leading-relaxed mb-5">
                    {description}
                  </p>
                  <ul className="mt-auto space-y-2" role="list">
                    {deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[rgba(231,235,242,0.65)]">
                        <Check size={14} className="text-[#E51D25] mt-0.5 shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0C0D10] py-20 text-center border-t border-white/5">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-white mb-4">Have a project in mind?</h2>
            <p className="text-[rgba(231,235,242,0.60)] mb-8">
              Tell us what you need and we will put together a tailored proposal.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E51D25] hover:bg-[#B32228] text-white font-semibold transition-colors shadow-lg shadow-[#E51D25]/20"
            >
              Get in Touch
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
