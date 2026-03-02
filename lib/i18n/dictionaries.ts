import type { Locale } from "./config"

import en from "./dictionaries/en.json"
import nl from "./dictionaries/nl.json"
import ja from "./dictionaries/ja.json"

export type Dictionary = typeof en

const dictionaries: Record<Locale, Dictionary> = { en, nl, ja }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en
}

/**
 * Get a nested translation value by dot-notation key.
 * Example: t("nav.home") => "Home"
 */
export function getTranslation(dict: Dictionary, key: string): string {
  const keys = key.split(".")
  let value: unknown = dict
  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = (value as Record<string, unknown>)[k]
    } else {
      return key // fallback to key if not found
    }
  }
  return typeof value === "string" ? value : key
}
