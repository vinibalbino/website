const PT_BR = 'pt-br' as const
const EN = 'en' as const

const locales = [PT_BR, EN] as const

const defaultLocale = PT_BR

export type Locale = (typeof locales)[number]

export { locales, defaultLocale }
