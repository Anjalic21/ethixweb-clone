import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EnquiryForm from '@/components/EnquiryForm'
import { Mail, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with Ethixweb. Send us an enquiry and we'll respond within one business day.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section
          className="bg-[#0C0D10] py-20 text-center border-b border-white/5"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h1
              id="contact-heading"
              className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
            >
              Get in Touch
            </h1>
            <p className="text-lg text-[rgba(231,235,242,0.60)] leading-relaxed">
              Tell us about your project. We will get back to you within one business day.
            </p>
          </div>
        </section>

        {/* Form section */}
        <section className="bg-[#13141A] py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <div className="rounded-2xl bg-[#1A1B22] border border-white/5 p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#E51D25]/10 flex items-center justify-center">
                  <MessageSquare size={20} className="text-[#E51D25]" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-white">Send an Enquiry</h2>
              </div>

              <EnquiryForm />
            </div>

            {/* Email fallback */}
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-[rgba(231,235,242,0.45)]">
              <Mail size={15} aria-hidden="true" />
              <span>
                Prefer email?{' '}
                <a
                  href="mailto:hello@ethixweb.com"
                  className="text-[rgba(231,235,242,0.70)] hover:text-white transition-colors underline underline-offset-2"
                >
                  hello@ethixweb.com
                </a>
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
