import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Globe, FileText, Film, Pencil, BookOpen, Laptop, CheckCircle, Award, Clock, Users } from "lucide-react"
import ServiceCard from "@/components/service-card"
import BrandCarousel from "@/components/brand-carousel"
import { ClientProvider } from "@/components/client-provider"

export const metadata: Metadata = {
  title: "Nofonex - Professional Language Services & Digital Content Production",
  description:
    "Professional English-Dutch translation, transcreation, content writing, and digital content production. Based in Suriname, serving businesses worldwide since 2014.",
  openGraph: {
    title: "Nofonex - Professional Language Services & Digital Content Production",
    description:
      "Professional English-Dutch translation, transcreation, content writing, and digital content production for global businesses.",
  },
}

export default function Home() {
  return (
    <ClientProvider>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="badge badge-secondary mb-2">Language Services & Digital Content</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                  Bridging Languages, <span className="text-secondary">Connecting Worlds</span>
                </h1>
                <p className="text-lg text-gray-600">
                  Specialized language services and digital content production to help businesses
                  communicate effectively across cultures and platforms.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link href="/get-started" className="btn btn-primary">
                    Get Started
                  </Link>
                  <Link href="/#services" className="btn btn-outline">
                    Explore Services
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                <Image
                  src="/images/digital_city_1.jpg"
                  alt="Global city with modern skyscrapers and waterways representing international connectivity"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg relative z-10 object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="badge badge-secondary mb-2">Our Services</div>
              <h2 className="section-title">What We Offer</h2>
              <p className="section-subtitle">
                Comprehensive language and digital content solutions tailored to your business needs
              </p>
              <div className="section-divider"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Language Services"
                description="Professional translation, editing, proofreading, LQA, MTPE, and more in multiple languages."
                icon={Globe}
                link="/services/language-services"
              />
              <ServiceCard
                title="Audio/Video Services"
                description="Professional transcription, subtitling, and multimedia accessibility solutions."
                icon={Film}
                link="/services/audio-video-services"
              />
              <ServiceCard
                title="Content Writing"
                description="Compelling copywriting, articles, product descriptions, educational material, and e-books."
                icon={Pencil}
                link="/services/content-writing"
              />
              <ServiceCard
                title="Interactive Media"
                description="Engaging interactive content, animation, audio, and video production."
                icon={Laptop}
                link="/services/interactive-media"
              />
              <ServiceCard
                title="E-Book Production"
                description="End-to-end e-book creation including writing, editing, formatting, and publishing."
                icon={BookOpen}
                link="/services/ebook-production"
              />
              <ServiceCard
                title="Document Services"
                description="Professional document preparation, formatting, and management services."
                icon={FileText}
                link="/services/language-services"
              />
            </div>
          </div>
        </section>

        {/* For Entrepreneurs Section */}
        <section id="entrepreneurs" className="py-16 md:py-24 bg-primary text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="badge badge-secondary mb-2">For Entrepreneurs</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Launch Your Digital Journey</h2>
                <p className="text-gray-200 mb-6">
                  Starting a business with international ambitions? We provide specialized services to help
                  entrepreneurs establish a compelling global presence from day one.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-white">Multilingual Website Development</h3>
                      <p className="text-gray-200">
                        Create a professional website that speaks your customers' language
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-white">Brand Identity Creation</h3>
                      <p className="text-gray-200">Develop a consistent and compelling brand across all markets</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-white">Digital Marketing Materials</h3>
                      <p className="text-gray-200">Get the content you need to launch successful marketing campaigns</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-white">Ongoing Support</h3>
                      <p className="text-gray-200">Continuous language and content assistance as your business grows</p>
                    </div>
                  </div>
                </div>

                <Link href="/entrepreneur-package" className="btn bg-secondary text-white hover:bg-secondary-dark">
                  Explore Entrepreneur Package
                </Link>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
                <Image
                  src="/images/digital_city_night_1.jpg"
                  alt="Global network of digital connections representing international business opportunities"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg border-4 border-white object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="badge badge-secondary mb-2">Our Values</div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Drives Our Work</h2>
              <p className="text-gray-600">
                These core values have guided our journey from simple transcription work to complex language projects and
                now into creative content exploration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform hover:translate-y-[-5px]">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Continuous Learning</h3>
                <p className="text-gray-600">
                  Every project teaches us something new. From basic transcription to complex language quality
                  assurance, we continuously refine our skills and apply what we learn to deliver better results for each
                  client.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform hover:translate-y-[-5px]">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Reliable Delivery</h3>
                <p className="text-gray-600">
                  Our reputation depends on meeting deadlines and delivering quality work consistently.
                  We respect our clients' timelines and communicate clearly throughout every project.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform hover:translate-y-[-5px]">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Cultural Bridge-Building</h3>
                <p className="text-gray-600">
                  Working between international contexts, we understand that effective communication goes beyond
                  literal translation—it's about making messages feel natural and appropriate in each cultural setting.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform hover:translate-y-[-5px]">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Thoughtful Adaptation</h3>
                <p className="text-gray-600">
                  We embrace new tools and approaches that genuinely improve our work, from AI assistance in language
                  tasks to exploring creative content production with our family—always with purpose, not just for
                  novelty.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform hover:translate-y-[-5px]">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Personal Attention</h3>
                <p className="text-gray-600">
                  Working directly with clients means we can offer the kind of personalized service and attention to
                  detail that larger operations often can't provide. Your project gets our full focus.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform hover:translate-y-[-5px]">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Honest Communication</h3>
                <p className="text-gray-600">
                  We believe in transparent communication about timelines, capabilities, and costs. If we can't do
                  something or need to collaborate with others, we'll tell you upfront rather than overpromise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bridging Languages Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Bridging Languages, Connecting Worlds
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Nofonex, we believe that language should never be a barrier to success. Our comprehensive language
                  services are designed to help businesses and individuals communicate effectively across cultural and
                  linguistic boundaries.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/services/translation" className="btn btn-primary">
                    Translation Services
                  </Link>
                  <Link href="/services/content-writing" className="btn btn-primary">
                    Content Writing
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="images/bridges__futuristic_city_1.jpg"
                  alt="bridges futuristic city"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="py-16 md:py-24 bg-primary/5">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="badge badge-secondary mb-2">Our Clients</div>
              <h2 className="section-title">Brands that we've served</h2>
              <p className="section-subtitle">
                We're proud to work with innovative companies across various industries
              </p>
              <div className="section-divider"></div>
            </div>
          </div>

          {/* Brand Carousel Component */}
          <BrandCarousel />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="badge badge-secondary mb-2">Contact Us</div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our services or ready to start a project? Contact us today and one of our experts
                  will get back to you shortly.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-secondary/10 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Call Us</h3>
                      <p className="text-gray-600">+597 882 8756</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-secondary/10 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Visit Us</h3>
                      <p className="text-gray-600">
                        Weg naar Reeberg 27
                        <br />
                        Lelydorp, Wanica
                        <br />
                        Suriname
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
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
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
                      placeholder="Your message here..."
                      required
                    ></textarea>
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
    </ClientProvider>
  )
}
