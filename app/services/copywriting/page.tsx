import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Pencil } from "lucide-react"

export const metadata: Metadata = {
  title: "Copywriting Services - Persuasive Marketing Content",
  description:
    "Professional copywriting services for websites, ads, email campaigns, and marketing materials. Bilingual English-Dutch copywriting that converts.",
  openGraph: {
    title: "Copywriting Services | Nofonex",
    description: "Persuasive bilingual copywriting for websites, ads, and marketing materials.",
  },
}

export default function CopywritingServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center max-w-3xl mx-auto">
            <h1>Copywriting Services</h1>
            <p className="text-xl text-gray-600">
              Compelling copy that engages your audience and drives action across all marketing channels.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="badge badge-secondary">Professional Copywriting</div>
              <h2>Words That Convert</h2>
              <p className="text-gray-600">
                In today's competitive digital landscape, compelling copy is essential for cutting through the noise and
                connecting with your audience. Our professional copywriters craft persuasive, engaging content that
                captures your brand voice and drives your audience to action.
              </p>
              <p className="text-gray-600">
                Whether you need website copy, blog posts, email campaigns, or social media content, our team combines
                creativity with strategic thinking to deliver copy that achieves your business objectives.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">Brand Voice Development</h3>
                    <p className="text-gray-600">Copy that consistently reflects your unique brand personality</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">SEO Optimization</h3>
                    <p className="text-gray-600">Content strategically crafted to improve search engine visibility</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">Conversion-Focused</h3>
                    <p className="text-gray-600">Copy designed to drive specific actions from your audience</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Copywriting Services"
                className="rounded-lg shadow-lg"
                width={600}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Types */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-secondary">Our Services</div>
            <h2>Comprehensive Copywriting Solutions</h2>
            <p>Expert copywriting for all your marketing and communication needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Pencil className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Website Copy</h3>
              <p className="text-gray-600">
                Engaging, SEO-optimized content for your website that converts visitors into customers and clearly
                communicates your value proposition.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Pencil className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Blog & Article Writing</h3>
              <p className="text-gray-600">
                Informative, engaging blog posts and articles that establish your authority in your industry and drive
                organic traffic to your website.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Pencil className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Campaigns</h3>
              <p className="text-gray-600">
                Persuasive email copy that engages your subscribers, nurtures leads, and drives conversions through
                effective storytelling and calls to action.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Pencil className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media Content</h3>
              <p className="text-gray-600">
                Platform-specific content that engages your audience, builds community, and drives meaningful
                interactions with your brand.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Pencil className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ad Copy</h3>
              <p className="text-gray-600">
                Compelling, concise copy for digital and print advertisements that captures attention and drives action
                in limited space.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Pencil className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Product Descriptions</h3>
              <p className="text-gray-600">
                Persuasive product descriptions that highlight benefits, overcome objections, and motivate purchases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-secondary">Our Process</div>
            <h2>How We Create Compelling Copy</h2>
            <p>Our strategic approach to developing effective copywriting</p>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-secondary">1</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 ml-4">
                  <h3 className="text-xl font-semibold mb-3">Discovery</h3>
                  <p className="text-gray-600">
                    We start by understanding your brand, audience, objectives, and competitive landscape to inform our
                    copywriting strategy.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 -top-4 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-secondary">2</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 ml-4">
                  <h3 className="text-xl font-semibold mb-3">Strategy Development</h3>
                  <p className="text-gray-600">
                    We create a content strategy that aligns with your business goals, including tone of voice, key
                    messages, and SEO considerations.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 -top-4 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-secondary">3</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 ml-4">
                  <h3 className="text-xl font-semibold mb-3">Content Creation</h3>
                  <p className="text-gray-600">
                    Our experienced copywriters craft compelling content that engages your audience and drives them to
                    take action.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 -top-4 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-secondary">4</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 ml-4">
                  <h3 className="text-xl font-semibold mb-3">Review & Refinement</h3>
                  <p className="text-gray-600">
                    We review and refine the copy based on your feedback, ensuring it perfectly aligns with your vision
                    and objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready for Copy That Converts?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Let our expert copywriters help you create compelling content that engages your audience and drives
              results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-started" className="btn bg-secondary text-white hover:bg-secondary-dark">
                Get Started
              </Link>
              <Link href="/#contact" className="btn bg-white text-primary hover:bg-gray-100">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
