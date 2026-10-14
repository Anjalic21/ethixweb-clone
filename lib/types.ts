export type EnquiryStatus = 'new' | 'contacted' | 'qualified' | 'closed'

export const ENQUIRY_STATUSES: EnquiryStatus[] = ['new', 'contacted', 'qualified', 'closed']

export const STATUS_LABELS: Record<EnquiryStatus, string> = {
  new:       'New',
  contacted: 'Contacted',
  qualified: 'Qualified',
  closed:    'Closed',
}

export const STATUS_COLORS: Record<EnquiryStatus, string> = {
  new:       'bg-blue-500/15 text-blue-300 border-blue-500/20',
  contacted: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/20',
  qualified: 'bg-green-500/15 text-green-300 border-green-500/20',
  closed:    'bg-[rgba(231,235,242,0.06)] text-[rgba(231,235,242,0.40)] border-white/10',
}

export interface Enquiry {
  id:         string
  name:       string
  email:      string
  phone:      string | null
  company:    string | null
  service:    string
  budget:     string | null
  message:    string
  status:     EnquiryStatus
  created_at: string
}
