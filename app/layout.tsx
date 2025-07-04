import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClientProvider } from "@/components/client-provider"
import HeaderWrapper from "@/components/header-wrapper"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nofonex - Language Services & Digital Content",
  description:
    "Specialized English-Dutch language services and digital content production to help businesses communicate effectively across cultures and platforms.",
  keywords: "translation, language services, content writing, Dutch, English, digital content",
  authors: [{ name: "Nofonex" }],
  openGraph: {
    title: "Nofonex - Language Services & Digital Content",
    description: "Specialized English-Dutch language services and digital content production",
    url: "https://nofonex.com",
    siteName: "Nofonex",
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
          <div className="min-h-screen flex flex-col">
            <HeaderWrapper />
            {children}
            <Footer />
          </div>
        </ClientProvider>
      </body>
    </html>
  )
}
