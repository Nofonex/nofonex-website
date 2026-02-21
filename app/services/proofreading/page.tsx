import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Proofreading Services - Quality Assurance for Your Content",
  description:
    "Professional proofreading services for documents, manuscripts, and digital content. Ensure error-free, polished writing in English and Dutch.",
  openGraph: {
    title: "Proofreading Services | Nofonex",
    description: "Professional proofreading for error-free, polished content in English and Dutch.",
  },
}

export default function ProofreadingServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center max-w-3xl mx-auto">
            <h1>Proofreading & Editing</h1>
            <p className="text-xl text-gray-600">
              Meticulous review and refinement of your content to ensure clarity, accuracy, and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="badge badge-secondary">Professional Editing</div>
              <h2>Perfect Your Content</h2>
              <p className="text-gray-600">
                Even the best writers need a second pair of eyes. Our professional proofreading and editing services
                help you refine your content, ensuring it's clear, concise, and error-free. Whether you're preparing an
                important business document, academic paper, or marketing material, our expert editors will help you
                make the best impression.
              </p>
              <p className="text-gray-600">
                We go beyond just correcting grammar and spelling errors. Our editors focus on improving clarity,
                coherence, and overall readability while maintaining your unique voice and style.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">Grammar & Spelling</h3>
                    <p className="text-gray-600">Correction of all grammatical errors, typos, and spelling mistakes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">Style & Clarity</h3>
                    <p className="text-gray-600">Improvements to sentence structure, word choice, and overall flow</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">Consistency Check</h3>
                    <p className="text-gray-600">Ensuring consistent terminology, formatting, and style throughout</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Proofreading Services"
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
            <h2>Proofreading & Editing Services</h2>
            <p>Tailored editing solutions for various content types and industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Documents</h3>
              <p className="text-gray-600">
                Professional editing for business plans, reports, presentations, and corporate communications to ensure
                they convey your message effectively and professionally.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Academic Papers</h3>
              <p className="text-gray-600">
                Thorough editing for dissertations, theses, research papers, and journal articles with attention to
                academic style guides and citation formats.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Marketing Content</h3>
              <p className="text-gray-600">
                Polishing of website copy, brochures, advertisements, and social media content to maximize impact and
                engagement with your target audience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Books & Publications</h3>
              <p className="text-gray-600">
                Comprehensive editing for books, e-books, magazines, and other publications to ensure professional
                quality and readability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Documents</h3>
              <p className="text-gray-600">
                Specialized editing for technical manuals, guides, and documentation with attention to industry-specific
                terminology and standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">ESL Editing</h3>
              <p className="text-gray-600">
                Specialized editing for non-native English speakers to ensure your content reads naturally and
                professionally.
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
            <h2>How Our Editing Process Works</h2>
            <p>A comprehensive approach to refining your content</p>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative pl-8 border-l-2 border-primary space-y-12">
              <div className="relative">
                <div className="absolute left-[-17px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Initial Assessment</h3>
                <p className="text-gray-600">
                  We review your document to understand its purpose, audience, and specific requirements to determine
                  the appropriate level of editing needed.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[-17px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">First Editing Pass</h3>
                <p className="text-gray-600">
                  Our editors conduct a thorough review, focusing on grammar, spelling, punctuation, and basic sentence
                  structure.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[-17px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Substantive Editing</h3>
                <p className="text-gray-600">
                  We refine the content for clarity, coherence, and flow, improving sentence structure and word choice
                  while maintaining your voice.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[-17px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Final Review</h3>
                <p className="text-gray-600">
                  A final quality check ensures all issues have been addressed and the document meets our high standards
                  before delivery.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Perfect Your Content?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Let our expert editors help you refine your content and make the best impression.
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
