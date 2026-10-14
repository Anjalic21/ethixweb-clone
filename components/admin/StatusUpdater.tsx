'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { ENQUIRY_STATUSES, STATUS_LABELS, type EnquiryStatus } from '@/lib/types'

interface Props {
  enquiryId: string
  currentStatus: EnquiryStatus
}

export default function StatusUpdater({ enquiryId, currentStatus }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [selected, setSelected] = useState<EnquiryStatus>(currentStatus)
  const [feedback, setFeedback] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = async (newStatus: EnquiryStatus) => {
    if (newStatus === selected) return
    setFeedback('idle')
    setSelected(newStatus)

    const res = await fetch(`/api/admin/enquiries/${enquiryId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    })

    if (res.ok) {
      setFeedback('success')
      startTransition(() => router.refresh())
    } else {
      setSelected(currentStatus) // revert
      setFeedback('error')
    }
  }

  return (
    <div className="flex items-center gap-3">
      <select
        value={selected}
        onChange={(e) => handleChange(e.target.value as EnquiryStatus)}
        disabled={isPending}
        className="px-3 py-2 rounded-lg bg-[#0C0D10] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E51D25]/50 transition-colors disabled:opacity-60"
        aria-label="Update enquiry status"
      >
        {ENQUIRY_STATUSES.map((s) => (
          <option key={s} value={s}>{STATUS_LABELS[s]}</option>
        ))}
      </select>

      {isPending && <Loader2 size={15} className="animate-spin text-[rgba(231,235,242,0.40)]" />}
      {!isPending && feedback === 'success' && (
        <span className="flex items-center gap-1 text-xs text-green-400">
          <CheckCircle2 size={13} /> Saved
        </span>
      )}
      {!isPending && feedback === 'error' && (
        <span className="flex items-center gap-1 text-xs text-red-400">
          <AlertCircle size={13} /> Failed
        </span>
      )}
    </div>
  )
}
