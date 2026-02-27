import './globals.css'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'
import { getLocale } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'CampingOS',
  description: 'The Ultimate Camping Management Platform'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies()
  const locale = getLocale(cookieStore.get('NEXT_LOCALE')?.value)
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang={locale}>
      <head>
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}