"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"
import { type Locale, defaultLocale, isValidLocale } from "./config"
import { getDictionary, getTranslation, type Dictionary } from "./dictionaries"

const LOCALE_COOKIE = "NEXT_LOCALE"

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  dict: Dictionary
  t: (key: string) => string
}

const LocaleContext = createContext<LocaleContextType | null>(null)

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale

  // Check cookie first
  const cookieMatch = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${LOCALE_COOKIE}=`))
  if (cookieMatch) {
    const value = cookieMatch.split("=")[1]
    if (isValidLocale(value)) return value
  }

  // Fallback to localStorage
  const stored = localStorage.getItem(LOCALE_COOKIE)
  if (stored && isValidLocale(stored)) return stored

  return defaultLocale
}

function storeLocale(locale: Locale) {
  if (typeof window === "undefined") return

  // Set cookie (1 year expiry)
  const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString()
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;expires=${expires};SameSite=Lax`

  // Also store in localStorage as backup
  localStorage.setItem(LOCALE_COOKIE, locale)
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [dict, setDict] = useState<Dictionary>(getDictionary(defaultLocale))

  // Load stored locale on mount
  useEffect(() => {
    const stored = getStoredLocale()
    if (stored !== locale) {
      setLocaleState(stored)
      setDict(getDictionary(stored))
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    setDict(getDictionary(newLocale))
    storeLocale(newLocale)

    // Update the html lang attribute
    document.documentElement.lang = newLocale
  }, [])

  const t = useCallback(
    (key: string) => getTranslation(dict, key),
    [dict]
  )

  return (
    <LocaleContext.Provider value={{ locale, setLocale, dict, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
