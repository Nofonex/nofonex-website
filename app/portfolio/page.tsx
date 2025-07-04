import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, Film, Pencil, Laptop } from "lucide-react"

// Case Study Type
interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  services: string[]
  description: string
  challenge: string
  solution: string
  results: string[]
  image: string
}

// Sample Case Studies
const caseStudies: CaseStudy[] = [
  {
    id: "global-ecommerce-expansion",
    title: "Global E-commerce Expansion",
    client: "TechGear",
    industry: "E-commerce",
    services: ["Translation", "Localization", "Content Writing"],
    description:
      "Helping a growing e-commerce company expand into 5 new international markets with localized content and product descriptions.",
    challenge:
      "TechGear needed to expand their online store into multiple European markets but faced challenges with language barriers, cultural nuances, and maintaining consistent brand voice across different languages.",
    solution:
      "We developed a comprehensive localization strategy, translating and adapting their website, product descriptions, and marketing materials for 5 different languages while maintaining brand consistency and cultural relevance.",
    results: [
      "43% increase in conversion rates across new markets",
      "Expanded customer base in 5 new countries",
      "Reduced customer support inquiries related to language barriers by 67%",
      "Consistent brand voice maintained across all markets",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "educational-video-series",
    title: "Educational Video Series Localization",
    client: "LearnSmart Academy",
    industry: "Education",
    services: ["Subtitling", "Voice-over", "Transcription"],
    description:
      "Localizing a comprehensive educational video series for international students with subtitles and voice-overs.",
    challenge:
      "LearnSmart Academy created a series of 50+ educational videos but needed to make them accessible to non-English speaking students while maintaining the educational integrity of the content.",
    solution:
      "We provided professional transcription, translation, subtitling, and voice-over services in 3 languages, ensuring that complex educational concepts were accurately conveyed while being culturally appropriate.",
    results: [
      "Expanded reach to 3 new language markets",
      "35% increase in international student enrollment",
      "Positive feedback on translation accuracy from educators",
      "Improved accessibility for hearing-impaired students",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "startup-global-launch",
    title: "Startup Global Launch Campaign",
    client: "HealthTech Innovations",
    industry: "Healthcare Technology",
    services: ["Content Strategy", "Copywriting", "Translation"],
    description:
      "Developing a multilingual launch campaign for a healthcare technology startup entering global markets.",
    challenge:
      "HealthTech Innovations was launching an innovative healthcare app and needed to create compelling marketing materials for a simultaneous launch in multiple countries, dealing with different healthcare regulations and cultural attitudes.",
    solution:
      "We created a comprehensive content strategy and developed marketing materials that were both compelling and compliant with local regulations, then adapted them for different markets while maintaining consistent messaging.",
    results: [
      "Successful simultaneous launch in 4 countries",
      "Over 50,000 app downloads in the first month",
      "Featured in major healthcare publications across target markets",
      "Established brand presence in competitive international markets",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "interactive-training-program",
    title: "Interactive Corporate Training Program",
    client: "Global Finance Corp",
    industry: "Financial Services",
    services: ["Interactive Media Production", "Content Writing", "Translation"],
    description:
      "Creating an interactive, multilingual training program for a global financial services company's employees.",
    challenge:
      "Global Finance Corp needed to train employees across 12 countries on new compliance procedures, ensuring consistent understanding despite language differences and varying levels of technical knowledge.",
    solution:
      "We developed an interactive training program with engaging multimedia content, scenario-based learning, and knowledge checks, then localized it for 8 different languages with cultural adaptations.",
    results: [
      "98% completion rate across all regions",
      "92% average assessment score, indicating strong knowledge retention",
      "Reduced training time by 40% compared to previous methods",
      "Compliance violations decreased by 64% in the year following implementation",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "multimedia-marketing-campaign",
    title: "Multimedia Marketing Campaign",
    client: "TravelEase",
    industry: "Travel & Tourism",
    services: ["Video Production", "Copywriting", "Translation"],
    description:
      "Developing a multilingual, multimedia marketing campaign for a travel company targeting diverse international audiences.",
    challenge:
      "TravelEase wanted to attract tourists from multiple countries but struggled to create marketing materials that resonated with different cultural perspectives on travel and leisure.",
    solution:
      "We created a comprehensive marketing campaign including videos, social media content, and website copy that was culturally adapted for each target market, highlighting aspects of destinations that would appeal to each audience.",
    results: [
      "189% increase in website traffic from target countries",
      "47% growth in bookings from new international markets",
      "Engagement rates 3x higher than previous campaigns",
      "Award-winning campaign recognized for cultural sensitivity",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "technical-documentation-localization",
    title: "Technical Documentation Localization",
    client: "IndustrialTech Solutions",
    industry: "Manufacturing",
    services: ["Technical Translation", "Document Design", "Terminology Management"],
    description:
      "Localizing complex technical documentation for industrial equipment to be used in multiple countries.",
    challenge:
      "IndustrialTech Solutions needed to translate highly technical manuals and safety documentation for specialized equipment, ensuring both linguistic accuracy and technical precision to meet international safety standards.",
    solution:
      "We assembled a team of technical translators with industry expertise, created a comprehensive terminology database, and implemented a rigorous quality control process to ensure accuracy and consistency across all documents.",
    results: [
      "Successfully met documentation requirements for 7 different countries",
      "Passed all safety certification reviews in target markets",
      "Reduced product support calls related to documentation issues by 58%",
      "Created reusable terminology database for future projects, reducing costs",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Portfolio</h1>
            <p className="text-lg text-gray-600">
              Explore our case studies to see how we've helped businesses overcome language barriers and create
              compelling digital content for global audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Featured Case Study"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="badge badge-secondary">Featured Case Study</div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Global E-commerce Expansion</h2>
              <p className="text-gray-600">
                We helped TechGear, a growing e-commerce company, expand into 5 new international markets with localized
                content and product descriptions, resulting in a 43% increase in conversion rates across new markets.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">E-commerce</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Translation</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Localization</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Content Writing</span>
              </div>
              <Link href="/portfolio/global-ecommerce-expansion" className="btn btn-primary">
                View Case Study
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge badge-secondary mb-2">Success Stories</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Case Studies</h2>
            <p className="text-gray-600">
              Discover how we've helped businesses across various industries overcome language barriers and create
              compelling digital content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{study.title}</h3>
                    {study.services[0] === "Translation" && <Globe className="text-secondary" size={20} />}
                    {study.services[0] === "Subtitling" && <Film className="text-secondary" size={20} />}
                    {study.services[0] === "Content Strategy" && <Pencil className="text-secondary" size={20} />}
                    {study.services[0] === "Interactive Media Production" && (
                      <Laptop className="text-secondary" size={20} />
                    )}
                    {study.services[0] === "Video Production" && <Film className="text-secondary" size={20} />}
                    {study.services[0] === "Technical Translation" && <Globe className="text-secondary" size={20} />}
                  </div>
                  <p className="text-sm text-gray-500 mb-3">
                    {study.client} | {study.industry}
                  </p>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <Link
                    href={`/portfolio/${study.id}`}
                    className="flex items-center text-secondary font-medium hover:underline"
                  >
                    Read Case Study <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge badge-secondary mb-2">Industries</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Industries We Serve</h2>
            <p className="text-gray-600">
              We provide specialized language and digital content solutions for businesses across a wide range of
              industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-3">E-commerce & Retail</h3>
              <p className="text-gray-600">
                Helping online retailers expand globally with localized product descriptions, marketing content, and
                customer support materials.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-3">Healthcare & Medical</h3>
              <p className="text-gray-600">
                Providing accurate translation and content creation for medical documentation, patient materials, and
                healthcare technology.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-3">Education & E-Learning</h3>
              <p className="text-gray-600">
                Supporting educational institutions and e-learning platforms with content localization, subtitling, and
                interactive media production.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-3">Technology & Software</h3>
              <p className="text-gray-600">
                Assisting tech companies with software localization, technical documentation, and user interface
                translation for global markets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-3">Finance & Banking</h3>
              <p className="text-gray-600">
                Delivering precise translation and content creation for financial documents, compliance materials, and
                customer communications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-3">Travel & Tourism</h3>
              <p className="text-gray-600">
                Creating engaging multilingual content for travel companies, including website copy, brochures, and
                marketing materials.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-3">Manufacturing & Industrial</h3>
              <p className="text-gray-600">
                Providing technical translation and documentation services for manufacturing companies with
                international operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-3">Legal Services</h3>
              <p className="text-gray-600">
                Offering specialized legal translation and content services for law firms and legal departments
                operating across borders.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-3">Entertainment & Media</h3>
              <p className="text-gray-600">
                Supporting media companies with subtitling, localization, and content adaptation for international
                audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Expand Your Global Reach?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss how our language and digital content solutions can help your business connect with
              international audiences.
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
