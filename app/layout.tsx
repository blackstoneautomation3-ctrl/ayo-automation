import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

// ─── Site-wide metadata ───────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: 'Ayo Automation – Websites, Mobile Apps & Make Money with AI in Lagos',
    template: '%s | Ayo Automation',
  },
  description:
    'Ayo Automation offers professional website development, mobile app development, and AI money-making training in Lagos, Nigeria. Fast delivery, affordable rates, real results.',
  keywords: [
    'website developer Lagos',
    'mobile app development Nigeria',
    'make money with AI Nigeria',
    'AI training Lagos',
    'web design Lagos',
    'Ayo Automation',
    'freelance developer Lagos',
    'e-commerce website Nigeria',
  ],
  authors: [{ name: 'Ayo', url: 'https://ayoautomation.com.ng' }],
  creator: 'Ayo Automation',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://ayoautomation.com.ng',
    siteName: 'Ayo Automation',
    title: 'Ayo Automation – Websites, Mobile Apps & Make Money with AI in Lagos',
    description:
      'Professional web development, mobile apps, and AI income training. Based in Lagos, Nigeria. Fast, clean, affordable.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayo Automation – Websites & AI Training Lagos',
    description: 'Professional web & app development + AI money-making training in Lagos, Nigeria.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#0A0F1E] text-slate-200 font-body antialiased">
        {/* ── Shared Navigation ── */}
        <Navbar />

        {/* ── Page content ── */}
        <main>{children}</main>

        {/* ── Shared Footer ── */}
        <Footer />

        {/* ── Floating WhatsApp button ── */}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
