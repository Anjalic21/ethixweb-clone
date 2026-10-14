'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[+\d\s\-()]{7,20}$/, 'Please enter a valid phone number')
    .or(z.literal('')),
  company: z.string().max(100).optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().optional(),
  message: z.string().min(20, 'Please provide at least 20 characters about your project'),
  // Honeypot — kept in schema so it is included in the submitted payload
  _hp: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const services = [
  { value: 'web', label: 'Web Design & Development' },
  { value: 'mobile', label: 'Mobile App Development' },
  { value: 'marketing', label: 'Digital Marketing & SEO' },
  { value: 'uiux', label: 'UI/UX Design' },
  { value: 'performance', label: 'Performance Optimisation' },
  { value: 'brand', label: 'Brand & Visual Identity' },
  { value: 'other', label: 'Other' },
]

const budgets = [
  { value: 'under-50k', label: 'Under ₹50,000' },
  { value: '50k-150k', label: '₹50,000 – ₹1,50,000' },
  { value: '150k-500k', label: '₹1,50,000 – ₹5,00,000' },
  { value: 'above-500k', label: 'Above ₹5,00,000' },
  { value: 'not-sure', label: 'Not sure yet' },
]

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-[#0B0C12] border text-white placeholder-[rgba(240,243,248,0.30)] focus:outline-none transition-all duration-200 text-sm'
const inputNormal = 'border-white/10 focus:border-[#FF3843] focus:ring-1 focus:ring-[#FF3843]/30'
const inputError = 'border-red-500/70 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'

export default function EnquiryForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState<string>('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { _hp: '', company: '' },
  })

  const onSubmit = async (data: FormData) => {
    if (status === 'loading') return
    setStatus('loading')
    setServerError('')

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.status === 201) {
        setStatus('success')
        return
      }

      // Parse error message from API when available
      let message = 'Something went wrong. Please try again or email us directly.'
      if (res.status === 429) {
        message = 'Too many submissions. Please wait a while before trying again.'
      } else {
        try {
          const json = await res.json()
          if (json?.error) message = json.error
        } catch {
          // ignore parse failure — use default message
        }
      }

      setServerError(message)
      setStatus('error')
    } catch {
      setServerError('Could not reach the server. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-6 text-center rounded-2xl bg-gradient-to-b from-[#141620] to-[#0E0F15] border border-white/10">
        <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5">
          <CheckCircle2 size={32} className="text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
          Enquiry Received Successfully
        </h3>
        <p className="text-[rgba(240,243,248,0.70)] text-sm max-w-md leading-relaxed mb-6">
          Thank you for reaching out to Ethixweb. A senior engineer will review your project requirements and respond within 24 hours (IST).
        </p>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-[rgba(240,243,248,0.60)] mb-6 font-mono">
          <ShieldCheck size={14} className="text-green-400" />
          <span>Encrypted Submission · Direct In-House Review</span>
        </div>

        <button
          onClick={() => {
            reset()
            setStatus('idle')
          }}
          className="text-xs font-semibold uppercase tracking-wider text-[#FF3843] hover:text-white transition-colors underline underline-offset-4"
        >
          Submit another project inquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      aria-label="Project enquiry form"
      noValidate
    >
      {/* Honeypot field — visually hidden from real users, filled by bots */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
      >
        <label htmlFor="_hp">Leave this field empty</label>
        <input
          id="_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('_hp')}
        />
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[rgba(240,243,248,0.75)] mb-2">
            Full Name <span className="text-[#FF3843]" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Rahul Sharma"
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`${inputClass} ${errors.name ? inputError : inputNormal}`}
            {...register('name')}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-2 text-xs text-red-400 flex items-center gap-1.5">
              <AlertCircle size={13} aria-hidden="true" />
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[rgba(240,243,248,0.75)] mb-2">
            Work Email <span className="text-[#FF3843]" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="rahul@company.com"
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`${inputClass} ${errors.email ? inputError : inputNormal}`}
            {...register('email')}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-2 text-xs text-red-400 flex items-center gap-1.5">
              <AlertCircle size={13} aria-hidden="true" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Company + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-[rgba(240,243,248,0.75)] mb-2">
            Company / Business Name <span className="text-[rgba(240,243,248,0.40)] font-normal text-[11px]">(optional)</span>
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            placeholder="e.g. Apex Retail India"
            className={`${inputClass} ${inputNormal}`}
            {...register('company')}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-[rgba(240,243,248,0.75)] mb-2">
            Phone / WhatsApp <span className="text-[rgba(240,243,248,0.40)] font-normal text-[11px]">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`${inputClass} ${errors.phone ? inputError : inputNormal}`}
            {...register('phone')}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="mt-2 text-xs text-red-400 flex items-center gap-1.5">
              <AlertCircle size={13} aria-hidden="true" />
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Service + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-[rgba(240,243,248,0.75)] mb-2">
            Primary Capability <span className="text-[#FF3843]" aria-hidden="true">*</span>
          </label>
          <select
            id="service"
            aria-required="true"
            aria-describedby={errors.service ? 'service-error' : undefined}
            className={`${inputClass} select-arrow ${errors.service ? inputError : inputNormal}`}
            {...register('service')}
          >
            <option value="">Select a service category...</option>
            {services.map(({ value, label }) => (
              <option key={value} value={value} className="bg-[#0B0C12] text-white">
                {label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" role="alert" className="mt-2 text-xs text-red-400 flex items-center gap-1.5">
              <AlertCircle size={13} aria-hidden="true" />
              {errors.service.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-wider text-[rgba(240,243,248,0.75)] mb-2">
            Estimated Budget <span className="text-[rgba(240,243,248,0.40)] font-normal text-[11px]">(optional)</span>
          </label>
          <select
            id="budget"
            className={`${inputClass} select-arrow ${inputNormal}`}
            {...register('budget')}
          >
            <option value="">Select an investment range...</option>
            {budgets.map(({ value, label }) => (
              <option key={value} value={value} className="bg-[#0B0C12] text-white">
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Project Details */}
      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[rgba(240,243,248,0.75)] mb-2">
          Project Scope & Objectives <span className="text-[#FF3843]" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Briefly describe what you're building, key challenges, target delivery timeline, and any reference sites..."
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${inputClass} resize-none ${errors.message ? inputError : inputNormal}`}
          {...register('message')}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-2 text-xs text-red-400 flex items-center gap-1.5">
            <AlertCircle size={13} aria-hidden="true" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Server error banner */}
      {status === 'error' && serverError && (
        <div
          role="alert"
          className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs sm:text-sm text-red-300"
        >
          <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-400" aria-hidden="true" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-[#E51D25] via-[#D11A21] to-[#8A181C] hover:from-[#FF3843] hover:to-[#E51D25] text-white font-semibold text-sm transition-all duration-200 shadow-xl shadow-[#E51D25]/25 hover:shadow-[#E51D25]/35 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            <span>Transmitting Enquiry...</span>
          </>
        ) : (
          <>
            <span>Submit Project Enquiry</span>
            <Send size={15} aria-hidden="true" />
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-2 text-[11px] text-[rgba(240,243,248,0.45)] text-center">
        <ShieldCheck size={13} className="text-[#FF3843]" />
        <span>Strict privacy. We never share your contact information or spam.</span>
      </div>
    </form>
  )
}
