'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[+\d\s\-()]{7,15}$/, 'Please enter a valid phone number')
    .or(z.literal('')),
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
  'w-full px-4 py-2.5 rounded-lg bg-[#0C0D10] border text-white placeholder-[rgba(231,235,242,0.30)] focus:outline-none transition-colors text-sm'
const inputNormal = 'border-white/10 focus:border-[#E51D25]/50'
const inputError = 'border-red-500/60 focus:border-red-500'

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
    defaultValues: { _hp: '' },
  })

  const onSubmit = async (data: FormData) => {
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
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
          <CheckCircle2 size={28} className="text-green-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Enquiry Received</h3>
        <p className="text-[rgba(231,235,242,0.60)] max-w-sm">
          Thank you for reaching out. We will get back to you within one business day.
        </p>
        <button
          onClick={() => { reset(); setStatus('idle') }}
          className="mt-6 text-sm text-[#E51D25] hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      aria-label="Enquiry form"
      noValidate
    >
      {/*
        Honeypot field — visually hidden from real users, filled by bots.
        Using opacity/position rather than display:none so screen readers
        also skip it (aria-hidden) while bots still see it in the DOM.
      */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
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
          <label htmlFor="name" className="block text-sm font-medium text-[rgba(231,235,242,0.70)] mb-1.5">
            Full Name <span className="text-[#E51D25]" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`${inputClass} ${errors.name ? inputError : inputNormal}`}
            {...register('name')}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle size={12} aria-hidden="true" />
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[rgba(231,235,242,0.70)] mb-1.5">
            Email Address <span className="text-[#E51D25]" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`${inputClass} ${errors.email ? inputError : inputNormal}`}
            {...register('email')}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle size={12} aria-hidden="true" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[rgba(231,235,242,0.70)] mb-1.5">
          Phone Number <span className="text-[rgba(231,235,242,0.35)] font-normal">(optional)</span>
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
          <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={12} aria-hidden="true" />
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Service + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-[rgba(231,235,242,0.70)] mb-1.5">
            Service Required <span className="text-[#E51D25]" aria-hidden="true">*</span>
          </label>
          <select
            id="service"
            aria-required="true"
            aria-describedby={errors.service ? 'service-error' : undefined}
            className={`${inputClass} select-arrow ${errors.service ? inputError : inputNormal}`}
            {...register('service')}
          >
            <option value="">Select a service...</option>
            {services.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle size={12} aria-hidden="true" />
              {errors.service.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-[rgba(231,235,242,0.70)] mb-1.5">
            Approximate Budget <span className="text-[rgba(231,235,242,0.35)] font-normal">(optional)</span>
          </label>
          <select
            id="budget"
            className={`${inputClass} select-arrow ${inputNormal}`}
            {...register('budget')}
          >
            <option value="">Select a range...</option>
            {budgets.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[rgba(231,235,242,0.70)] mb-1.5">
          Project Details <span className="text-[#E51D25]" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project, goals, and any specific requirements..."
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${inputClass} resize-none ${errors.message ? inputError : inputNormal}`}
          {...register('message')}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={12} aria-hidden="true" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Server error banner */}
      {status === 'error' && serverError && (
        <div
          role="alert"
          className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-300"
        >
          <AlertCircle size={16} className="shrink-0 mt-0.5" aria-hidden="true" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#E51D25] hover:bg-[#B32228] text-white font-semibold transition-colors shadow-lg shadow-[#E51D25]/20 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            Send Enquiry
            <Send size={16} aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  )
}
