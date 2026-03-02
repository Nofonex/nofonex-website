"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSession, signOut } from "next-auth/react"
import { Menu, X, User, LogOut } from "lucide-react"
import LanguageSelector from "@/components/language-selector"
import { useLocale } from "@/lib/i18n/context"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: session } = useSession()
  const { t } = useLocale()

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about-us" },
    { name: t("nav.services"), href: "/#services" },
    { name: t("nav.pricing"), href: "/pricing" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.contact"), href: "/#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-small.png" alt="Nofonex Logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-xl font-bold text-primary">Bridging languages</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="nav-link">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth + Language */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSelector />
            {session ? (
              <div className="flex items-center gap-2">
                <Link href="/profile" className="btn btn-ghost">
                  <User className="h-4 w-4 mr-2" />
                  {t("nav.profile")}
                </Link>
                <button onClick={() => signOut()} className="btn btn-ghost">
                  <LogOut className="h-4 w-4 mr-2" />
                  {t("nav.signOut")}
                </button>
              </div>
            ) : (
              <>
                <Link href="/login" className="btn btn-ghost">
                  {t("nav.signIn")}
                </Link>
                <Link href="/register" className="btn btn-primary">
                  {t("nav.signUp")}
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="nav-link block" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}

              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <LanguageSelector />
              </div>

              {/* Mobile Auth */}
              <div className="pt-4 border-t border-gray-200 mt-4">
                {session ? (
                  <div className="flex flex-col space-y-2">
                    <Link href="/profile" className="nav-link block">
                      {t("nav.profile")}
                    </Link>
                    <button onClick={() => signOut()} className="nav-link block text-left">
                      {t("nav.signOut")}
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Link href="/login" className="nav-link block">
                      {t("nav.signIn")}
                    </Link>
                    <Link href="/register" className="nav-link block">
                      {t("nav.signUp")}
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
