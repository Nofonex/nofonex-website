import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-small.png" alt="Nofonex Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold text-primary">Bridging langauges</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Specialized  language services and digital content production to help businesses communicate
              effectively across cultures and platforms.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/language-services" className="footer-link">
                  Language Services
                </Link>
              </li>
              <li>
                <Link href="/services/content-writing" className="footer-link">
                  Content Writing
                </Link>
              </li>
              <li>
                <Link href="/services/audio-video-services" className="footer-link">
                  Audio/Video Services
                </Link>
              </li>
              <li>
                <Link href="/services/interactive-media" className="footer-link">
                  Interactive Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="footer-link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="footer-link">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="footer-link">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="footer-link">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">© 2024 Nofonex Online Services. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="mailto:info@nofonex.com" className="text-gray-500 hover:text-primary transition-colors">
              info@nofonex.com
            </a>
            <span className="text-gray-300">|</span>
            <a href="tel:+5978828756" className="text-gray-500 hover:text-primary transition-colors">
              +597 882 8756
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
