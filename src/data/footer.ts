import { IFooterDetails, TTranslateFunction } from '@/types'

export function getFooterDetails(t: TTranslateFunction): IFooterDetails {
  return {
    subheading: t('subheading'),
    quickLinks: [
      {
        text: t('quickLinks.features'),
        url: '#features',
      },
      {
        text: t('quickLinks.pricing'),
        url: '#pricing',
      },
      {
        text: t('quickLinks.testimonials'),
        url: '#testimonials',
      },
    ],
    email: 'contato@diaum.app',
    telephone: '',
    socials: {
      github: 'https://github.com/Diaum',
      linkedin: 'https://www.linkedin.com',
      instagram: 'https://www.instagram.com/diaum.app',
    },
  }
}
