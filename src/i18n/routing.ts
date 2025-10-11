import { defaultLocale, locales } from '@/locales'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: 'as-needed',
})
