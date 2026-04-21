import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { BookOpen, Laptop, FileText, Globe, Award, Users } from "lucide-react"
import BrandCarousel from "@/components/brand-carousel"

export const metadata: Metadata = {
  title: "Nofonex — Digital Production House",
  description:
    "Nofonex is a Christian digital production house creating software, publications, and language services for global audiences.",
  openGraph: {
    title: "Nofonex — Digital Production House",
    description:
      "Software, publications, and language services for global audiences.",
  },
}

const productLines = [
  {
    icon: BookOpen,
    name: "SoFoWo",
    tagline: "Worship songbook for churches worldwide",
    href: "/sofowo",
    comingSoon: false,
  },
  {
    icon: Laptop,
    name: "BeamFoWo",
    tagline: "Screen presentation app, offline-first",
    href: "/beamfowo",
    comingSoon: false,
  },
  {
    icon: FileText,
    name: "Magaxines",
    tagline: "Seven digital magazines",
    href: "/magaxines",
    comingSoon: true,
  },
  {
    icon: Globe,
    name: "Language Solutions",
    tagline: "TraByHum + TraByAge",
    href: "/language-solutions",
    comingSoon: false,
  },
  {
    icon: Award,
    name: "Tov Ro’eh",
    tagline: "Christian children’s books and e-books",
    href: "/tov-roeh",
    comingSoon: true,
  },
  {
    icon: Users,
    name: "Walabamba",
    tagline: "Our shop and checkout layer",
    href: "/walabamba",
    comingSoon: true,
  },
]

export default function Home() {
  return (
    <main className="flex-grow">
      {/* ── Hero ── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="badge badge-secondary mb-2">Digital Production House</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                We build products.{" "}
                <span className="text-secondary">We produce content.</span>{" "}
                We bridge languages.
              </h1>
              <p className="text-lg text-gray-600">
                Nofonex is a Christian digital production house creating software, publications, and language services
                for global audiences.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/#products" className="btn btn-primary">
                  Explore our products
                </Link>
                <Link href="/language-solutions" className="btn btn-outline">
                  Language Solutions
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <Image
                src="/images/digital_city_1.jpg"
                alt="Global city representing Nofonex digital production"
                width={600}
                height={500}
                className="rounded-lg shadow-lg relative z-10 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Production lines ── */}
      <section id="products" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="badge badge-secondary mb-2">Our Production Lines</div>
            <h2 className="section-title">Our Production Lines</h2>
            <p className="section-subtitle">
              Software tools, digital publications, and language services — built for communities worldwide.
            </p>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productLines.map(({ icon: Icon, name, tagline, href, comingSoon }) => (
              <div
                key={name}
                className={`card p-6 flex flex-col gap-4 ${comingSoon ? "opacity-70" : "hover:shadow-lg transition-shadow"}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-primary">{name}</h3>
                      {comingSoon && (
                        <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{tagline}</p>
                  </div>
                </div>
                {!comingSoon && (
                  <Link href={href} className="text-primary text-sm font-medium hover:underline mt-auto">
                    Learn more →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Christian identity ── */}
      <section className="py-12 bg-primary/5">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600">
              Nofonex is rooted in Christian values. Our work is guided by faith, integrity, and a commitment to serve
              communities that are often underserved by mainstream digital products.
            </p>
          </div>
        </div>
      </section>

      {/* ── Clients ── */}
      <section id="clients" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="badge badge-secondary mb-2">Our Clients</div>
            <h2 className="section-title">Brands that we&apos;ve served</h2>
            <p className="section-subtitle">
              We&apos;re proud to work with innovative companies across various industries
            </p>
            <div className="section-divider" />
          </div>
        </div>
        <BrandCarousel />
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="badge badge-secondary mb-2">Contact Us</div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our products or ready to start a language project? Get in touch and we&apos;ll get
                back to you shortly.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Us</h3>
                    <a href="mailto:info@nofonex.com" className="text-gray-600 hover:text-primary transition-colors">
                      info@nofonex.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Call Us</h3>
                    <p className="text-gray-600">+597 882 8756</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Visit Us</h3>
                    <p className="text-gray-600">
                      Weg naar Reeberg 27<br />
                      Lelydorp, Wanica<br />
                      Suriname
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form
                className="bg-white p-8 rounded-lg shadow-lg border border-primary/10"
                action="mailto:info@nofonex.com"
                method="post"
                encType="text/plain"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" name="name" required placeholder="John Doe"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="john@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary" />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" id="subject" name="subject" required placeholder="How can we help you?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary" />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={5} required placeholder="Your message here..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary" />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
