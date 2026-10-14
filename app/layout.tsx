import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Ethixweb — Digital Solutions for India',
    template: '%s | Ethixweb',
  },
  description:
    'Ethixweb delivers premium web design, development, and digital marketing solutions tailored for Indian businesses.',
  keywords: ['web design India', 'web development', 'digital marketing', 'Ethixweb'],
  metadataBase: new URL('https://ethixweb.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Ethixweb',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
