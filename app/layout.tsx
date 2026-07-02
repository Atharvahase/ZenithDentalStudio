import type { Metadata } from 'next'
import { Inter, Inter_Tight, Instrument_Serif } from 'next/font/google'
import { clinic } from '@/lib/content'
import { LenisProvider } from '@/components/providers/lenis-provider'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const title = `${clinic.name} — Luxury Dental Care, ${clinic.city}`
const description =
  'A private dental studio in Nashik for smile design, dental implants, crowns & bridges, root canal treatment and family dentistry. Book a consultation on WhatsApp — one tap, no forms.'

export const metadata: Metadata = {
  metadataBase: new URL(clinic.siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: clinic.siteUrl,
    siteName: clinic.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  alternates: { canonical: '/' },
}

// LocalBusiness/Dentist schema for local SEO (PRD §9).
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: clinic.name,
  url: clinic.siteUrl,
  telephone: clinic.phoneHref,
  address: {
    '@type': 'PostalAddress',
    streetAddress: clinic.address.street,
    addressLocality: clinic.address.locality,
    addressRegion: clinic.address.region,
    postalCode: clinic.address.postalCode,
    addressCountry: clinic.address.country,
  },
  sameAs: [clinic.instagram],
  openingHours: 'Mo-Sa 10:00-20:00',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${instrumentSerif.variable} ${inter.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="fixed left-4 top-4 z-100 -translate-y-24 rounded-full bg-ink px-5 py-2.5 text-sm text-porcelain transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* Analytics: add the Cloudflare Web Analytics beacon (cookieless, free)
            here once the site has a domain — see PRD §8. */}
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
