import { IMenuItem, TTranslateFunction } from '@/types'

export function getMenuItems(t: TTranslateFunction): IMenuItem[] {
  return [
    {
      text: t('features'),
      url: '#features',
    },
    {
      text: t('pricing'),
      url: '#pricing',
    },
    {
      text: t('testimonials'),
      url: '#testimonials',
    },
  ]
}
