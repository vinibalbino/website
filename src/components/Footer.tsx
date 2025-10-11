import Link from 'next/link'
import Script from 'next/script'
import React from 'react'
import Image from 'next/image'
import { FaEnvelope } from 'react-icons/fa'

import { siteDetails } from '@/data/siteDetails'
import { getFooterDetails } from '@/data/footer'
import { getPlatformIconByName } from '@/utils'
import { useTranslations } from 'next-intl'
import { IFooterDetails } from '@/types'

type ContactPointLD = {
  '@type': 'ContactPoint'
  email?: string
  telephone?: string
  contactType: 'customer support' | string
}

type OrganizationLD = {
  '@context': 'https://schema.org'
  '@type': 'Organization'
  name: string
  url: string
  logo?: string
  sameAs?: string[]
  contactPoint?: ContactPointLD[]
}

function buildOrganizationJsonLd(footerDetails: IFooterDetails): string {
  const sameAs = Object.values(footerDetails.socials ?? {}).filter((v): v is string => Boolean(v))

  const contactPoint: ContactPointLD[] = []

  if (footerDetails.email) {
    contactPoint.push({
      '@type': 'ContactPoint',
      email: footerDetails.email,
      contactType: 'customer support',
    })
  }

  if (footerDetails.telephone) {
    contactPoint.push({
      '@type': 'ContactPoint',
      telephone: footerDetails.telephone,
      contactType: 'customer support',
    })
  }

  const org: OrganizationLD = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteDetails.siteName,
    url: siteDetails.siteUrl,
    logo: siteDetails.siteLogo,
    sameAs: sameAs.length ? sameAs : undefined,
    contactPoint: contactPoint.length ? contactPoint : undefined,
  }

  return JSON.stringify(org)
}

const Footer: React.FC = () => {
  const translations = useTranslations('footer')
  const footerDetails = getFooterDetails(translations)

  return (
    <footer className="bg-[var(--footer-background)] text-[var(--footer-text)]">
      <div
        className="h-[2px] w-full opacity-70"
        style={{ backgroundImage: 'var(--footer-divider)' }}
        aria-hidden="true"
      />

      <Script id="org-schema" type="application/ld+json">
        {buildOrganizationJsonLd(footerDetails)}
      </Script>

      <div className="py-10 max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label={`${siteDetails.siteName} home`}
          >
            <Image
              width={40}
              height={40}
              src="/images/diaum-logo.png"
              alt={siteDetails.siteName}
              className="h-8 w-auto"
              priority
            />
            <h3 className="manrope text-xl font-semibold cursor-pointer hover:text-[var(--footer-link)] transition-colors">
              {siteDetails.siteName}
            </h3>
          </Link>
          <p className="mt-3.5 text-[var(--footer-muted)]">{footerDetails.subheading}</p>
        </div>

        <nav aria-label={translations('quickLinks.title')}>
          <h4 className="text-lg font-semibold mb-4 text-[var(--footer-link)]">
            {translations('quickLinks.title')}
          </h4>
          <ul className="text-[var(--footer-text)]" role="list">
            {footerDetails.quickLinks.map(link => (
              <li key={link.text} className="mb-2">
                <Link href={link.url} className="hover:text-[var(--footer-link)] transition-colors">
                  {link.text}
                </Link>
              </li>
            ))}
            <li className="mb-2">
              <Link href="/about" className="hover:text-[var(--footer-link)] transition-colors">
                {translations('about')}
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/privacy-policy"
                className="hover:text-[var(--footer-link)] transition-colors"
              >
                {translations('privacyPolicy')}
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/terms" className="hover:text-[var(--footer-link)] transition-colors">
                {translations('termsOfUse')}
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-[var(--footer-link)]">
            {translations('contact')}
          </h4>

          {footerDetails.email && (
            <a
              href={`mailto:${footerDetails.email}`}
              className="flex items-center gap-2 text-[var(--footer-text)] hover:text-[var(--footer-link)] transition-colors"
              aria-label={translations('sendMail', { email: footerDetails.email })}
            >
              <FaEnvelope className="w-5 h-5" aria-hidden="true" />
              <span>{footerDetails.email}</span>
            </a>
          )}

          {footerDetails.telephone && (
            <a
              href={`tel:${footerDetails.telephone}`}
              className="block mt-2 text-[var(--footer-text)] hover:text-[var(--footer-link)] transition-colors"
              aria-label={translations('callTo', { phone: footerDetails.telephone })}
            >
              {translations('phone')}: {footerDetails.telephone}
            </a>
          )}

          {footerDetails.socials && (
            <nav aria-label={translations('socials')} className="mt-5">
              <ul className="flex items-center gap-5 flex-wrap" role="list">
                {Object.entries(footerDetails.socials).map(
                  ([platformName, url]) =>
                    url && (
                      <li key={platformName}>
                        <a
                          href={url}
                          target="_blank"
                          rel="me noopener noreferrer"
                          aria-label={platformName}
                          className="text-2xl text-[var(--footer-text)] hover:text-[var(--footer-link)] transition-colors"
                          title={platformName}
                        >
                          {getPlatformIconByName(platformName)}
                        </a>
                      </li>
                    ),
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>

      <div className="md:text-center text-[var(--footer-muted)] px-6 pb-8">
        <p>
          Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}.{' '}
          {translations('copyright')}
        </p>
      </div>
    </footer>
  )
}

export default Footer
