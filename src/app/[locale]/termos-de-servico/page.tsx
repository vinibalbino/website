import type { Metadata } from 'next'
import Container from '@/components/Container'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('termsOfService')
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function TermsOfServicePage() {
  const translation = useTranslations('termsOfService')

  return (
    <Container className="py-16 lg:py-28">
      {/* LOGO E TÍTULO */}
      <div className="flex flex-col items-start mb-10">
        <span className="text-3xl text-slate-700 font-bold mt-2 ml-1 drop-shadow-sm">
          {translation('title')}
        </span>
      </div>
      {/* TERMOS ORIGINAIS */}
      <div
        className="prose max-w-7xl prose-slate dark:prose-invert bg-white/90 rounded-xl shadow-lg px-8 py-10
        prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-800 prose-p:leading-relaxed
        prose-h2:mt-8 prose-h2:mb-2 prose-h2:text-lg prose-h2:font-bold prose-h2:text-slate-800
        prose-strong:text-slate-900 prose-strong:font-bold"
      >
        <h1 className="hidden">{translation('title')}</h1>

        <p>
          <strong>{translation('content.firstParagraph')}</strong>
        </p>

        <p>{translation('content.secondParagraph')}</p>

        <p>{translation('content.thirdParagraph')}</p>

        <p>{translation('content.fourthParagraph')}</p>

        <p>{translation('content.fifthParagraph')}</p>

        <p>
          <strong>{translation('content.sixthParagraph')}</strong>
        </p>

        <p>
          <strong>{translation('content.seventhParagraph')}</strong>
        </p>

        <h2>{translation('content.sections.1.title')}</h2>
        <p>{translation('content.sections.1.text')}</p>

        <h2>{translation('content.sections.2.title')}</h2>
        <p>{translation('content.sections.2.text')}</p>

        <h2>{translation('content.sections.3.title')}</h2>
        <p>{translation('content.sections.3.paragraphs.0')}</p>
        <p>{translation('content.sections.3.paragraphs.1')}</p>

        <h2>{translation('content.sections.4.title')}</h2>
        <p>{translation('content.sections.4.paragraphs.0')}</p>
        <p>{translation('content.sections.4.paragraphs.1')}</p>

        <h2>{translation('content.sections.5.title')}</h2>
        <p>{translation('content.sections.5.text')}</p>

        <h2>{translation('content.sections.6.title')}</h2>
        <p>{translation('content.sections.6.paragraphs.0')}</p>
        <p>{translation('content.sections.6.paragraphs.1')}</p>
        <p>{translation('content.sections.6.paragraphs.2')}</p>

        <h2>{translation('content.sections.7.title')}</h2>
        <p>{translation('content.sections.7.text')}</p>

        <h2>{translation('content.sections.8.title')}</h2>
        <p>{translation('content.sections.8.text')}</p>

        <h2>{translation('content.sections.9.title')}</h2>
        <p>{translation('content.sections.9.text')}</p>

        <h2>{translation('content.sections.10.title')}</h2>
        <p>{translation('content.sections.10.text')}</p>

        <h2>{translation('content.sections.11.title')}</h2>
        <p>{translation('content.sections.11.text')}</p>

        <h2>{translation('content.sections.12.title')}</h2>
        <p>{translation('content.sections.12.text')}</p>

        <p className="text-sm text-slate-500 mt-8">{translation('content.effectiveDate')}</p>
      </div>
    </Container>
  )
}
