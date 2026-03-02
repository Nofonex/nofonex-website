export const locales = ["en", "nl", "ja"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const localeNames: Record<Locale, string> = {
  en: "English",
  nl: "Nederlands",
  ja: "日本語",
}

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  nl: "🇳🇱",
  ja: "🇯🇵",
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}
