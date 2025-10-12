import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Source_Sans_3, Manrope } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteDetails } from '@/data/siteDetails'

import './globals.css'

const manrope = Manrope({ subsets: ['latin'] })
const sourceSans = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  keywords: [
    `${siteDetails.siteName}`,
    'app',
    'bloqueio',
    'conteúdo',
    'pornografia',
    'hábitos',
    'foco',
    'controle',
    'vida',
  ],
  authors: [{ name: siteDetails.siteName }],
  creator: siteDetails.siteName,
  publisher: siteDetails.siteName,
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    locale: siteDetails.locale,
    siteName: siteDetails.siteName,
    images: [
      {
        url: '/images/diaum-logo.png',
        width: 1200,
        height: 630,
        alt: `${siteDetails.metadata.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['/images/diaum-logo.png'],
  },
  alternates: {
    canonical: siteDetails.siteUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.className} ${sourceSans.className} antialiased`}>
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
