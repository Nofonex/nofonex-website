import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClientProvider } from "@/components/client-provider"
import HeaderWrapper from "@/components/header-wrapper"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://nofonex.com"),
  title: {
    default: "Nofonex - Language Services & Digital Content Production",
    template: "%s | Nofonex",
  },
  description:
    "Professional English-Dutch translation, content writing, transcreation, and digital content production. Based in Suriname, serving businesses worldwide.",
  keywords:
    "translation, language services, content writing, Dutch, English, digital content, transcreation, MTPE, Suriname, localization",
  authors: [{ name: "Nofonex" }],
  openGraph: {
    title: "Nofonex - Language Services & Digital Content Production",
    description:
      "Professional English-Dutch translation, content writing, and digital content production for global businesses.",
    url: "https://nofonex.com",
    siteName: "Nofonex",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nofonex - Language Services & Digital Content Production",
    description:
      "Professional English-Dutch translation, content writing, and digital content production for global businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
