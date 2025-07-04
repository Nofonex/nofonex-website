import { Globe, FileText, Globe2, MonitorSmartphone, Scale, FileCheck } from "lucide-react"
import ServicePageTemplate from "@/components/service-page-template"

export default function TranslationServicePage() {
  return (
    <ServicePageTemplate
      title="Translation Services"
      subtitle="Professional translation in over 40 languages by native speakers with industry expertise."
      description={`At Nofonex, we understand that translation is more than just converting words from one language to another. It's about conveying meaning, context, and cultural nuances accurately. Our team of native translators specializes in delivering high-quality translations that resonate with your target audience.

Whether you need to translate marketing materials, legal documents, technical manuals, or website content, our expert translators have the linguistic skills and industry knowledge to ensure your message is conveyed accurately and effectively.`}
      icon={Globe}
      imageSrc="/placeholder.svg?height=500&width=600"
      imageAlt="Translation Services"
      features={[
        {
          title: "Native Translators",
          description: "All translations are performed by native speakers of the target language",
        },
        {
          title: "Industry Expertise",
          description: "Specialized translators for legal, medical, technical, and marketing content",
        },
        {
          title: "Quality Assurance",
          description: "Rigorous review process to ensure accuracy and consistency",
        },
      ]}
      process={[
        {
          step: 1,
          title: "Submit Your Content",
          description:
            "Upload your documents or content through our secure platform and specify your target languages and requirements.",
        },
        {
          step: 2,
          title: "Expert Translation",
          description:
            "Our native translators with industry expertise translate your content, ensuring accuracy and cultural relevance.",
        },
        {
          step: 3,
          title: "Quality Review",
          description:
            "Each translation undergoes a thorough review process before delivery to ensure the highest quality.",
        },
      ]}
      serviceTypes={[
        {
          icon: FileText,
          title: "Document Translation",
          description:
            "Professional translation of business documents, contracts, reports, and official papers with attention to terminology and format.",
        },
        {
          icon: Globe2,
          title: "Website Localization",
          description:
            "Complete translation and cultural adaptation of websites to effectively reach international audiences.",
        },
        {
          icon: MonitorSmartphone,
          title: "Marketing Content",
          description:
            "Creative translation of marketing materials that preserves your message while adapting it for different cultural contexts.",
        },
        {
          icon: FileText,
          title: "Technical Translation",
          description:
            "Precise translation of technical documents, manuals, and specifications by subject matter experts.",
        },
        {
          icon: Scale,
          title: "Legal Translation",
          description:
            "Accurate translation of legal documents by translators with legal expertise and understanding of terminology.",
        },
        {
          icon: FileCheck,
          title: "Certified Translation",
          description:
            "Official certified translations for immigration, academic, and legal purposes that meet institutional requirements.",
        },
      ]}
      ctaTitle="Ready to Translate Your Content?"
      ctaDescription="Get started with our professional translation services today and reach your global audience effectively."
    />
  )
}
