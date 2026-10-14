import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#08090C',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Ethixweb — Premium Digital Agency for Ambitious Indian Businesses',
    template: '%s | Ethixweb',
  },
  description:
    'Ethixweb designs and engineers world-class websites, cross-platform mobile apps, and scalable digital solutions tailored for Indian startups, MSMEs, and D2C brands.',
  keywords: [
    'digital agency India',
    'Next.js web development India',
    'React Native mobile apps',
    'D2C ecommerce development India',
    'UI/UX design agency India',
    'Core Web Vitals optimization',
    'Ethixweb',
  ],
  metadataBase: new URL('https://ethixweb.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Ethixweb',
    title: 'Ethixweb — Premium Digital Agency for Ambitious Indian Businesses',
    description:
      'Digital experiences built for ambitious Indian businesses. High-performance web development, mobile apps, and e-commerce solutions.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#08090C] text-[#F0F3F8] selection:bg-[#E51D25]/30 selection:text-white">
        {children}
      </body>
    </html>
  )
}
