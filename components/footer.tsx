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
              <span className="text-xl font-bold text-primary">Nofonex</span>
            </Link>
            <p className="text-gray-600 text-sm">
              SaaS tools and human translation services. Built for churches, creators, and businesses communicating across languages.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sofowo" className="footer-link">
                  SoFoWo
                </Link>
              </li>
              <li>
                <Link href="/beamfowo" className="footer-link">
                  BeamFoWo
                </Link>
              </li>
              <li>
                <Link href="/trabyhum" className="footer-link">
                  TraByHum
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="footer-link">
                  Pricing
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
                <Link href="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="footer-link">
                  Contact
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
                <Link href="/terms" className="footer-link">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="footer-link">
                  Refund Policy
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
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Nofonex. All rights reserved.</p>
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
