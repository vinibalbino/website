import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Source_Sans_3, Manrope } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteDetails } from '@/data/siteDetails'

import './globals.css'
import { Locale } from '@/locales'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'

const manrope = Manrope({ subsets: ['latin'] })
const sourceSans = Source_Sans_3({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('globals.metadata')
  const locale = await getLocale()

  const keywords = [
    siteDetails.siteName,
    ...t('keywords')
      .split(',')
      .map(k => k.trim()),
  ]

  console.log(keywords)
  return {
    title: t('title'),
    description: t('description'),
    keywords: keywords,
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
      title: t('title'),
      description: t('description'),
      url: siteDetails.siteUrl,
      type: 'website',
      locale: locale,
      siteName: siteDetails.siteName,
      images: [
        {
          url: '/images/diaum-logo.png',
          width: 1200,
          height: 630,
          alt: `${t('title')}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/diaum-logo.png'],
    },
    alternates: {
      canonical: siteDetails.siteUrl,
    },
  }
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: Locale
  }
}

export default function RootLayout({ children, params: { locale } }: Readonly<RootLayoutProps>) {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body className={`${manrope.className} ${sourceSans.className} antialiased`}>
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
