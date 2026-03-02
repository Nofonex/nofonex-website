"use client"

import { SessionProvider } from "next-auth/react"
import { LocaleProvider } from "@/lib/i18n/context"
import type { ReactNode } from "react"

interface ClientProviderProps {
  children: ReactNode
}

export function ClientProvider({ children }: ClientProviderProps) {
  return (
    <SessionProvider>
      <LocaleProvider>{children}</LocaleProvider>
    </SessionProvider>
  )
}
