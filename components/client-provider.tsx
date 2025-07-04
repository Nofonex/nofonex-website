"use client"

import { SessionProvider } from "next-auth/react"
import type { ReactNode } from "react"

interface ClientProviderProps {
  children: ReactNode
}

export function ClientProvider({ children }: ClientProviderProps) {
  return <SessionProvider>{children}</SessionProvider>
}
