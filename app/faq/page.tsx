"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, Search } from "lucide-react"

// FAQ Item Type
interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

// FAQ Categories
const categories = ["All", "Services", "Process", "Pricing", "Technology", "Quality", "Delivery", "Support"]

// Sample FAQ Items
const faqItems: FAQItem[] = [
  {
    id: "languages-supported",
    question: "What languages do you support?",
    answer:
      "We primarily specialize in English-Dutch language pairs, but through our network of professional linguists and AI capabilities, we can support over 40 languages for various services. For specialized or less common languages, please contact us to discuss your specific requirements.",
    category: "Services",
  },
  {
    id: "service-turnaround",
    question: "How quickly can you deliver your services?",
    answer:
      "Our delivery times vary depending on the service, project complexity, and volume. With our AI-enhanced workflow, we can deliver many projects faster than traditional services. Standard translation projects typically take 1-3 business days, while more complex projects like multimedia localization may take longer. We offer expedited services for urgent needs at an additional cost.",
    category: "Delivery",
  },
  {
    id: "pricing-structure",
    question: "How is your pricing structured?",
    answer:
      "Our pricing is based on several factors including the service type, language pair, content complexity, volume, and turnaround time. We offer transparent pricing with no hidden fees. For translation services, we typically charge per word, while other services like subtitling may be charged per minute of content. We provide detailed quotes before starting any project.",
    category: "Pricing",
  },
  {
    id: "quality-assurance",
    question: "How do you ensure quality in your services?",
    answer:
      "We maintain high quality through a comprehensive quality assurance process. This includes using specialized AI tools for initial processing, followed by human review from qualified professionals. For critical projects, we implement additional quality checks including terminology consistency verification, cultural appropriateness review, and final proofreading by a second linguist.",
    category: "Quality",
  },
  {
    id: "file-formats",
    question: "What file formats do you accept?",
    answer:
      "We support a wide range of file formats including Word documents, Excel spreadsheets, PowerPoint presentations, PDF files, HTML, XML, JSON, InDesign files, subtitle formats (SRT, VTT), and various video formats. If you have a specific file format not listed here, please contact us to discuss compatibility.",
    category: "Technology",
  },
  {
    id: "confidentiality",
    question: "How do you handle confidential information?",
    answer:
      "We take data security and confidentiality very seriously. All our team members sign strict confidentiality agreements, and we use secure file transfer protocols and encrypted storage. For highly sensitive projects, we can sign custom NDAs and implement additional security measures as required.",
    category: "Process",
  },
  {
    id: "revision-policy",
    question: "What is your revision policy?",
    answer:
      "We include one round of revisions in our standard service to ensure your complete satisfaction. After delivery, you have 7 days to review the work and request revisions. Additional revision rounds can be arranged at an extra cost. Our goal is to ensure the final deliverable meets your expectations and requirements.",
    category: "Process",
  },
  {
    id: "ai-vs-human",
    question: "Do you use AI or human translators?",
    answer:
      "We utilize a hybrid approach that combines the efficiency of advanced AI with the nuance and cultural understanding of human experts. Depending on your project requirements and sensitivity, we can adjust the balance between AI processing and human involvement. For critical or creative content, we ensure thorough human oversight and refinement.",
    category: "Technology",
  },
  {
    id: "minimum-order",
    question: "Is there a minimum order requirement?",
    answer:
      "We don't have strict minimum order requirements and can accommodate projects of various sizes. However, for very small projects (e.g., under 250 words for translation), a minimum fee may apply to cover administrative costs. We're happy to discuss your specific needs regardless of project size.",
    category: "Pricing",
  },
  {
    id: "specialized-content",
    question: "Can you handle specialized or technical content?",
    answer:
      "Yes, we have experience with a wide range of specialized content including legal, medical, technical, financial, and marketing materials. We assign projects to linguists with relevant subject matter expertise and maintain specialized terminology databases to ensure accuracy and consistency in technical translations.",
    category: "Services",
  },
  {
    id: "payment-methods",
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit cards, PayPal, bank transfers, and cryptocurrency. For larger projects, we typically require a 50% deposit before starting work, with the remaining balance due upon completion. For regular clients, we offer flexible payment terms and monthly invoicing options.",
    category: "Pricing",
  },
  {
    id: "support-availability",
    question: "What kind of support do you provide after delivery?",
    answer:
      "We provide comprehensive post-delivery support including addressing any questions about the delivered work, making minor adjustments, and offering guidance on implementation. Our support team is available during business hours via email, phone, or chat. For enterprise clients, we offer dedicated account managers for ongoing support.",
    category: "Support",
  },
  {
    id: "project-process",
    question: "What is your typical project process?",
    answer:
      "Our standard process includes: 1) Initial consultation and requirements gathering, 2) Quotation and timeline agreement, 3) Project kickoff and content analysis, 4) Service execution (translation, content creation, etc.), 5) Quality assurance and review, 6) Delivery and client feedback, 7) Revisions if needed, and 8) Project completion and follow-up.",
    category: "Process",
  },
  {
    id: "content-types",
    question: "What types of content can you work with?",
    answer:
      "We work with virtually all types of content including websites, marketing materials, technical documentation, e-learning courses, software interfaces, legal documents, multimedia content, social media posts, product descriptions, and more. Each content type receives specialized handling appropriate to its purpose and audience.",
    category: "Services",
  },
  {
    id: "rush-services",
    question: "Do you offer rush or expedited services?",
    answer:
      "Yes, we offer expedited services for urgent projects at an additional cost, typically 25-50% above our standard rates depending on the urgency and resource requirements. Our AI-enhanced workflow allows us to handle many rush projects efficiently. Please contact us as soon as possible when you have urgent needs so we can check availability.",
    category: "Delivery",
  },
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])

  // Filter FAQ items based on category and search query
  const filteredFAQs = faqItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Toggle FAQ item open/closed
  const toggleItem = (id: string) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id))
    } else {
      setOpenItems([...openItems, id])
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services, processes, and policies.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for questions..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
                  >
                    <button
                      className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
                      onClick={() => toggleItem(item.id)}
                    >
                      <h3 className="text-lg font-semibold text-primary">{item.question}</h3>
                      {openItems.includes(item.id) ? (
                        <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                    </button>
                    {openItems.includes(item.id) && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No results found for your search.</p>
                <p className="text-gray-500 mt-2">Try adjusting your search terms or category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find the answer you're looking for? Please contact our friendly support team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link href="/get-started" className="btn btn-outline">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
