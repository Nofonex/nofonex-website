import { Globe, CheckCircle, FileText, Bot } from "lucide-react"
import ServicePageTemplate from "@/components/service-page-template"

export default function LanguageServicesPage() {
  return (
    <ServicePageTemplate
      title="Language Services"
      subtitle="AI-powered translation, editing, proofreading, and quality assurance solutions."
      description={`At Nofonex, we deliver efficient language solutions by combining advanced AI technology with expert human oversight. We specialize in English-Dutch language pairs, providing high-quality translations that maintain linguistic accuracy and cultural relevance.

Our English-Dutch translation services are handled by native speakers with specialized expertise, while additional language pairs are supported through our AI-enhanced processing systems with careful human review.`}
      icon={Globe}
      imageSrc="/placeholder.svg?height=500&width=600"
      imageAlt="Language Services"
      features={[
        {
          title: "English-Dutch Expertise",
          description: "Specialized native-level translation between English and Dutch",
        },
        {
          title: "AI-Enhanced Capabilities",
          description: "Advanced AI systems supporting additional language requirements",
        },
        {
          title: "Quality Assurance",
          description: "Comprehensive quality control for consistent, accurate results",
        },
      ]}
      process={[
        {
          step: 1,
          title: "Content Submission",
          description: "Submit content and specify requirements through our secure platform",
        },
        {
          step: 2,
          title: "AI Processing",
          description: "Advanced AI systems process your content with precision",
        },
        {
          step: 3,
          title: "Quality Verification",
          description: "Thorough quality checks ensure accuracy and consistency",
        },
        {
          step: 4,
          title: "Delivery",
          description: "Receive your completed project in your preferred format",
        },
      ]}
      serviceTypes={[
        {
          icon: Globe,
          title: "Translation",
          description: "Accurate content conversion between languages with cultural adaptation",
        },
        {
          icon: FileText,
          title: "Editing & Proofreading",
          description: "Refinement of content for clarity, accuracy, and style",
        },
        {
          icon: CheckCircle,
          title: "Linguistic Quality Assurance",
          description: "Comprehensive assessment ensuring linguistic excellence",
        },
        {
          icon: Bot,
          title: "Machine Translation Post-Editing",
          description: "Expert refinement of AI-translated content",
        },
        {
          icon: Globe,
          title: "Localization",
          description: "Cultural adaptation for authentic local market engagement",
        },
        {
          icon: FileText,
          title: "Terminology Management",
          description: "Consistent terminology across all communications",
        },
      ]}
      ctaTitle="Expand Your Global Reach"
      ctaDescription="Connect with international audiences through professional language solutions."
      relatedServices={[
        {
          title: "Audio/Video Services",
          description: "Transcription, subtitling, and multimedia accessibility solutions",
          link: "/services/audio-video-services",
        },
        {
          title: "Content Writing",
          description: "Professional copywriting and content creation services",
          link: "/services/content-writing",
        },
        {
          title: "Interactive Media",
          description: "Engaging interactive content and multimedia production",
          link: "/services/interactive-media",
        },
      ]}
    />
  )
}
