import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "E-Book Production - Writing, Design & Publishing",
  description:
    "End-to-end e-book production services including writing, editing, formatting, cover design, and publishing. Create professional e-books in English and Dutch.",
  openGraph: {
    title: "E-Book Production Services | Nofonex",
    description: "Complete e-book creation from writing to publishing, in English and Dutch.",
  },
}

export default function EbookProductionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center max-w-3xl mx-auto">
            <h1>E-Book Production</h1>
            <p className="text-xl text-gray-600">
              End-to-end e-book creation including writing, editing, formatting, and publishing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="E-Book Production"
                className="rounded-lg shadow-lg"
                width={600}
                height={500}
              />
            </div>
            <div className="space-y-6">
              <div className="badge badge-secondary">Professional E-Book Production</div>
              <h2>Turn Your Expertise Into a Polished E-Book</h2>
              <p className="text-gray-600">
                E-books are powerful tools for establishing authority, generating leads, and creating additional revenue
                streams. Our comprehensive e-book production services help you transform your knowledge and ideas into
                professionally crafted digital publications.
              </p>
              <p className="text-gray-600">
                From concept development to final publication, we handle every aspect of the e-book creation process,
                ensuring a high-quality product that reflects your brand and engages your audience.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">Complete Production</h3>
                    <p className="text-gray-600">End-to-end service from concept to publication</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">Professional Design</h3>
                    <p className="text-gray-600">Visually appealing layouts that enhance readability and engagement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">Multiple Formats</h3>
                    <p className="text-gray-600">Delivery in various formats compatible with all major e-readers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Types */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-secondary">Our Services</div>
            <h2>Comprehensive E-Book Production Services</h2>
            <p>Everything you need to create a professional, engaging e-book</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Development</h3>
              <p className="text-gray-600">
                Expert writing and content development services to transform your ideas into engaging, well-structured
                e-book content.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Editing</h3>
              <p className="text-gray-600">
                Comprehensive editing services to ensure your e-book is clear, concise, error-free, and aligned with
                your objectives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Design & Layout</h3>
              <p className="text-gray-600">
                Professional design services to create visually appealing layouts, custom graphics, and cover designs
                that enhance your content.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Formatting & Conversion</h3>
              <p className="text-gray-600">
                Technical formatting and conversion services to ensure your e-book is compatible with all major
                e-readers and platforms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Publishing Assistance</h3>
              <p className="text-gray-600">
                Guidance and support for publishing your e-book on major platforms like Amazon Kindle, Apple Books, and
                more.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Marketing Support</h3>
              <p className="text-gray-600">
                Strategic advice and content for promoting your e-book, including landing pages, email campaigns, and
                social media content.
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
            <h2>The E-Book Production Process</h2>
            <p>Our systematic approach to creating professional e-books</p>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative pl-8 border-l-2 border-primary space-y-12">
              <div className="relative">
                <div className="absolute left-[-17px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Strategy & Planning</h3>
                <p className="text-gray-600">
                  We begin by understanding your goals, target audience, and key messages to develop a comprehensive
                  e-book strategy.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[-17px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Content Development</h3>
                <p className="text-gray-600">
                  Our writers create engaging, well-structured content based on your expertise, research, and the agreed
                  strategy.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[-17px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Editing & Refinement</h3>
                <p className="text-gray-600">
                  The content undergoes thorough editing for clarity, coherence, and accuracy, with revisions based on
                  your feedback.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[-17px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Design & Layout</h3>
                <p className="text-gray-600">
                  Our designers create an appealing visual layout, including cover design, typography, and graphics that
                  enhance your content.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[-17px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Formatting & Conversion</h3>
                <p className="text-gray-600">
                  We format your e-book for various platforms and convert it to multiple file formats for maximum
                  compatibility.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[-17px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">6</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Publication & Distribution</h3>
                <p className="text-gray-600">
                  We assist with publishing your e-book on your chosen platforms and provide guidance on distribution
                  strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Create Your E-Book?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Transform your knowledge into a professional e-book that establishes your authority and engages your
              audience.
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
