import { IMenuItem, TTranslateFunction } from '@/types'

export function getMenuItems(t: TTranslateFunction): IMenuItem[] {
  return [
    {
      text: t('features'),
      url: '#funcionalidades',
    },
    {
      text: 'Blog',
      url: '/blog',
    },
    {
      text: t('aboutUs'),
      url: '#sobreNos',
    },
  ]
}
