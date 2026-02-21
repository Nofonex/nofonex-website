import type { Metadata } from "next"
import { Pencil, FileText, BookOpen, ShoppingBag, GraduationCap, FileEdit } from "lucide-react"
import ServicePageTemplate from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Content Writing Services - Articles, Blogs & Copywriting",
  description:
    "Professional content writing services including blog posts, articles, product descriptions, educational materials, and e-books. Bilingual English-Dutch expertise.",
  openGraph: {
    title: "Content Writing Services | Nofonex",
    description: "Professional bilingual content writing for blogs, articles, product descriptions, and more.",
  },
}

export default function ContentWritingServicesPage() {
  return (
    <ServicePageTemplate
      title="Content Writing Services"
      subtitle="AI-enhanced copywriting, articles, product content, and digital publications."
      description={`We create strategic content that drives engagement and conversions by combining AI efficiency with creative expertise. Our solutions deliver compelling narratives optimized for both audience engagement and search visibility.

Available in English and Dutch, our AI-enhanced writing maintains brand consistency while accelerating content production. Human expertise ensures strategic alignment with your business objectives.`}
      icon={Pencil}
      imageSrc="/placeholder.svg?height=500&width=600"
      imageAlt="Content Writing Services"
      features={[
        {
          title: "Strategic Optimization",
          description: "Content engineered for both audience engagement and search visibility",
        },
        {
          title: "Brand Voice Consistency",
          description: "Authentic communication that reinforces brand identity",
        },
        {
          title: "Conversion Focus",
          description: "Content designed to drive specific business outcomes",
        },
      ]}
      process={[
        {
          step: 1,
          title: "Strategy Alignment",
          description: "Define objectives, audience, and key performance indicators",
        },
        {
          step: 2,
          title: "AI-Enhanced Creation",
          description: "Efficient content generation with strategic direction",
        },
        {
          step: 3,
          title: "Expert Refinement",
          description: "Professional editing ensures quality and alignment",
        },
        {
          step: 4,
          title: "Performance Optimization",
          description: "Content finalized for maximum impact and results",
        },
      ]}
      serviceTypes={[
        {
          icon: Pencil,
          title: "Conversion Copywriting",
          description: "Persuasive content that drives measurable business results",
        },
        {
          icon: FileText,
          title: "SEO Content",
          description: "Strategically optimized articles and pages for organic visibility",
        },
        {
          icon: ShoppingBag,
          title: "Product Content",
          description: "Compelling descriptions that highlight value and drive sales",
        },
        {
          icon: GraduationCap,
          title: "Educational Content",
          description: "Structured learning materials that simplify complex concepts",
        },
        {
          icon: BookOpen,
          title: "Digital Publications",
          description: "Comprehensive e-books and guides that establish authority",
        },
        {
          icon: FileEdit,
          title: "Content Optimization",
          description: "Performance enhancement for existing content assets",
        },
      ]}
      ctaTitle="Elevate Your Content Strategy"
      ctaDescription="Transform your communication with content that engages, converts, and builds authority."
    />
  )
}
