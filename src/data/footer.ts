import { IMenuItem, ISocials } from '@/types'

export const footerDetails: {
  subheading: string
  quickLinks: IMenuItem[]
  email: string
  telephone: string
  socials: ISocials
} = {
  subheading: 'Um app para bloqueio de conteudo adulto e criaçao de novos habitos.',
  quickLinks: [
    {
      text: 'Features',
      url: '#features',
    },
    {
      text: 'Pricing',
      url: '#pricing',
    },
    {
      text: 'Testimonials',
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
