import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Globe, FileText, Laptop, Rocket, Target, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Entrepreneur Package - Launch Your Global Business",
  description:
    "Comprehensive language and digital content solution for entrepreneurs entering international markets. Multilingual websites, brand identity, and marketing materials.",
  openGraph: {
    title: "Entrepreneur Package | Nofonex",
    description: "Launch your global business with multilingual websites, brand identity, and content.",
  },
}

export default function EntrepreneurPackagePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="badge badge-secondary mb-2">For Entrepreneurs & Startups</div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary">Entrepreneur Package</h1>
              <p className="text-xl text-gray-600">
                Launch your global business with our comprehensive language and digital content solution designed
                specifically for entrepreneurs entering international markets.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="#pricing-section" className="btn btn-primary">
                  View Pricing
                </Link>
                <Link href="/get-started" className="btn btn-outline">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <Image
                src="/global-networker.png"
                alt="Entrepreneur launching global business"
                width={600}
                height={500}
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Package Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="badge badge-secondary mb-2">Package Overview</div>
            <h2 className="section-title">Everything You Need to Go Global</h2>
            <p className="section-subtitle">
              A comprehensive solution to help entrepreneurs establish a strong international presence from day one
            </p>
            <div className="section-divider"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Multilingual Website</h3>
              <p className="text-gray-600">
                Professional translation and localization of your website content in up to 3 languages, ensuring your
                business speaks your customers' language from the start.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Content Creation</h3>
              <p className="text-gray-600">
                AI-enhanced content creation for your business, including website copy, product descriptions, blog
                posts, and marketing materials tailored to your target markets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Laptop className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Digital Presence</h3>
              <p className="text-gray-600">
                Comprehensive digital presence setup including social media profiles, business listings, and basic SEO
                optimization to ensure your business is discoverable globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Package */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Image
                src="/multilingual-global-growth.png"
                alt="Global business growth"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="badge badge-secondary mb-2">Why Choose This Package</div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Built for Global Success</h2>
              <p className="text-gray-600">
                In today's interconnected world, establishing a global presence from the start gives entrepreneurs a
                significant competitive advantage. Our package is designed to help you overcome language barriers and
                cultural differences that often challenge new businesses entering international markets.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">Cost-Effective Solution</h3>
                    <p className="text-gray-600">
                      Save up to 60% compared to hiring separate services for translation, content creation, and digital
                      marketing
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">Faster Time to Market</h3>
                    <p className="text-gray-600">
                      Launch your business in multiple markets simultaneously with our streamlined process
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">Cultural Adaptation</h3>
                    <p className="text-gray-600">
                      Ensure your business messaging resonates with local audiences through cultural adaptation
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">Ongoing Support</h3>
                    <p className="text-gray-600">
                      Receive continuous assistance as your business grows and expands to new markets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="badge badge-secondary mb-2">What's Included</div>
            <h2 className="section-title">Comprehensive Package Features</h2>
            <p className="section-subtitle">
              Everything you need to establish a strong global presence for your business
            </p>
            <div className="section-divider"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-4">Language Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Website translation in up to 3 languages (5,000 words per language)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Business document translation (up to 2,000 words)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Product description translation (up to 20 products)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Email template translation (up to 5 templates)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Cultural adaptation consultation (2 hours)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-4">Content Creation</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>AI-enhanced website copy (up to 5 pages)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Blog post creation (4 articles, 800 words each)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Social media content (20 posts)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Email marketing content (3 campaigns)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Content strategy consultation (2 hours)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-4">Digital Presence</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Social media profile setup (up to 3 platforms)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Business listing creation (up to 5 directories)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Basic SEO optimization for target markets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Multilingual metadata optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Digital presence strategy consultation (2 hours)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-4">Additional Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Monthly progress reports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Priority support (response within 24 hours)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>10% discount on additional services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>Quarterly strategy review session</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="badge badge-secondary mb-2">Our Process</div>
            <h2 className="section-title">How We Work With You</h2>
            <p className="section-subtitle">A streamlined process to get your business global-ready</p>
            <div className="section-divider"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative pl-8 border-l-2 border-primary space-y-12">
              <div className="relative">
                <div className="absolute left-[-17px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Discovery & Strategy</h3>
                <p className="text-gray-600">
                  We begin with a comprehensive consultation to understand your business, target markets, goals, and
                  unique value proposition. Together, we'll develop a tailored strategy for your global expansion.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[-17px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Content Development</h3>
                <p className="text-gray-600">
                  Our team creates compelling, culturally-appropriate content for your business, leveraging AI
                  technologies and human expertise to ensure your messaging resonates with your target audiences.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[-17px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Translation & Localization</h3>
                <p className="text-gray-600">
                  We translate and adapt your content for each target market, ensuring linguistic accuracy and cultural
                  relevance. All translations are performed by native speakers with industry expertise.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[-17px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Digital Implementation</h3>
                <p className="text-gray-600">
                  We set up your digital presence across platforms and markets, implementing all translated content and
                  optimizing for local search engines and user experience.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[-17px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Launch & Ongoing Support</h3>
                <p className="text-gray-600">
                  After launching your global presence, we provide ongoing support and consultation to help you navigate
                  international markets and continue to grow your business worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="badge badge-secondary mb-2">Pricing</div>
            <h2 className="section-title">Affordable Global Expansion</h2>
            <p className="section-subtitle">Transparent pricing with flexible options to suit your business needs</p>
            <div className="section-divider"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="text-center pb-4">
                <h3 className="text-xl font-bold text-primary">Starter</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-primary">$1,499</span>
                  <span className="text-gray-500"> / one-time</span>
                </div>
                <p className="text-gray-600 mb-6">Perfect for solopreneurs and micro-businesses</p>
                <Link
                  href="/get-started"
                  className="block w-full py-2 px-4 bg-primary/10 text-primary rounded-md text-center font-medium hover:bg-primary/20 transition-colors"
                >
                  Get Started
                </Link>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">2 languages (English + 1 more)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">3-page website content</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">2 blog posts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">10 social media posts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">Basic digital presence setup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">30 days of support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-primary relative transform scale-105">
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center pb-4">
                <h3 className="text-xl font-bold text-primary">Professional</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-primary">$2,999</span>
                  <span className="text-gray-500"> / one-time</span>
                </div>
                <p className="text-gray-600 mb-6">Ideal for small businesses and startups</p>
                <Link
                  href="/get-started"
                  className="block w-full py-2 px-4 bg-primary text-white rounded-md text-center font-medium hover:bg-primary-dark transition-colors"
                >
                  Get Started
                </Link>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">3 languages (English + 2 more)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">5-page website content</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">4 blog posts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">20 social media posts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">Complete digital presence setup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">90 days of support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">Monthly progress reports</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="text-center pb-4">
                <h3 className="text-xl font-bold text-primary">Enterprise</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-primary">$4,999</span>
                  <span className="text-gray-500"> / one-time</span>
                </div>
                <p className="text-gray-600 mb-6">For established businesses expanding globally</p>
                <Link
                  href="/get-started"
                  className="block w-full py-2 px-4 bg-primary/10 text-primary rounded-md text-center font-medium hover:bg-primary/20 transition-colors"
                >
                  Get Started
                </Link>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">5+ languages (custom selection)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">10-page website content</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">8 blog posts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">40 social media posts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">Premium digital presence setup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">12 months of support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">Senior account manager</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">Quarterly strategy sessions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need a custom solution? Contact us for a tailored package.</p>
            <Link href="/get-started" className="btn btn-outline">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="badge bg-secondary text-white mb-2">Limited Time Offer</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">AI-Enhanced Global Launch Package</h2>
              <p className="text-xl text-gray-200 mb-6">
                For a limited time, get our Professional package with additional AI-powered features to accelerate your
                global business launch.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Rocket className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-white">AI Market Analysis</h3>
                    <p className="text-gray-200">
                      Receive an AI-generated market analysis for your top 3 target countries
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Target className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-white">Competitor Intelligence</h3>
                    <p className="text-gray-200">
                      AI-powered analysis of your competitors in each target market to identify opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-white">Multilingual Chatbot</h3>
                    <p className="text-gray-200">
                      Get a basic AI chatbot for your website that can communicate in all your target languages
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-lg mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-gray-200 line-through">$3,999</span>
                    <span className="text-2xl font-bold text-white ml-2">$2,999</span>
                  </div>
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Save $1,000
                  </span>
                </div>
                <p className="text-sm text-gray-200 mb-4">
                  Offer valid until June 30, 2025. Limited to the first 10 clients.
                </p>
              </div>

              <Link
                href="/get-started?package=entrepreneur-special&details=AI-Enhanced%20Global%20Launch%20Package%20with%20AI%20Market%20Analysis%2C%20Competitor%20Intelligence%2C%20and%20Multilingual%20Chatbot"
                className="btn bg-secondary text-white hover:bg-secondary-dark"
              >
                Claim This Offer
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
              <Image
                src="/global-insights-ai.png"
                alt="AI-enhanced global business tools"
                width={600}
                height={500}
                className="rounded-lg shadow-lg border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="badge badge-secondary mb-2">Success Stories</div>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Hear from entrepreneurs who have successfully expanded globally with our help
            </p>
            <div className="section-divider"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Nofonex helped me launch my e-commerce business in three European countries simultaneously. Their
                translation and localization services were exceptional, and the AI-enhanced content really resonated
                with local audiences. Within three months, we had customers from all target markets."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">JM</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Julia Martinez</h4>
                  <p className="text-sm text-gray-500">Founder, EcoStyle Shop</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "As a tech startup founder, I needed to establish a global presence quickly. The Entrepreneur Package
                from Nofonex was exactly what I needed. Their team handled all aspects of our multilingual content
                strategy, allowing me to focus on product development. The ROI has been incredible."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">AK</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Alex Kim</h4>
                  <p className="text-sm text-gray-500">CEO, TechFlow Solutions</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The cultural adaptation aspect of Nofonex's service was a game-changer for us. They didn't just
                translate our content; they made it culturally relevant for each market. This attention to detail helped
                us avoid potential missteps and connect authentically with customers in different countries."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">SJ</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Founder, Wellness Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="badge badge-secondary mb-2">FAQ</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find answers to common questions about our Entrepreneur Package</p>
            <div className="section-divider"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  How long does it take to implement the Entrepreneur Package?
                </h3>
                <p className="text-gray-600">
                  The implementation timeline varies based on the package and complexity of your business, but typically
                  ranges from 2-4 weeks for the Starter package, 3-6 weeks for the Professional package, and 6-8 weeks
                  for the Enterprise package.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Can I choose which languages are included in my package?
                </h3>
                <p className="text-gray-600">
                  Yes, you can select the languages based on your target markets. We support over 40 languages, with
                  specialized expertise in English-Dutch translations. If you're unsure which languages to choose, our
                  team can provide recommendations based on your business goals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  How do you ensure the content is culturally appropriate?
                </h3>
                <p className="text-gray-600">
                  We employ native speakers with cultural expertise in each target market. Additionally, we conduct
                  cultural adaptation consultations to identify potential cultural sensitivities and ensure your content
                  resonates authentically with local audiences.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Can I add additional services to my package?
                </h3>
                <p className="text-gray-600">
                  All packages can be customized with additional services based on your specific needs. Common add-ons
                  include additional languages, more content creation, video subtitling, and extended support periods.
                  Package clients receive a 10% discount on all additional services.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  How does the AI enhancement work in your services?
                </h3>
                <p className="text-gray-600">
                  We leverage advanced AI technologies to accelerate content creation, translation, and market analysis
                  while maintaining quality through human expertise. Our AI tools help identify market trends, optimize
                  content for local search engines, and generate initial content drafts that are then refined by our
                  expert team to ensure accuracy and cultural relevance.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Have more questions? Check out our complete FAQ section.</p>
              <Link href="/faq" className="btn btn-outline">
                View All FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Your Business Global?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Start your international journey today with our comprehensive Entrepreneur Package.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-started" className="btn bg-secondary text-white hover:bg-secondary-dark">
                Get Started
              </Link>
              <Link href="/get-started" className="btn bg-white text-primary hover:bg-gray-100">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
