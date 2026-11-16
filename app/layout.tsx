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
    default: "Nofonex - Christian Digital Production House",
    template: "%s | Nofonex",
  },
  description:
    "Nofonex is a Christian digital production house in Suriname, creating software and publications for churches, creators and communities worldwide.",
  keywords:
    "Nofonex, SoFoWo, worship songbook, setlists, worship team software, Christian, Suriname",
  authors: [{ name: "Nofonex" }],
  openGraph: {
    title: "Nofonex - Christian Digital Production House",
    description:
      "Software and publications for churches, creators and communities worldwide.",
    url: "https://nofonex.com",
    siteName: "Nofonex",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nofonex - Christian Digital Production House",
    description:
      "Software and publications for churches, creators and communities worldwide.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180' },
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
