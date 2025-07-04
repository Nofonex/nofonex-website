import { Film, Headphones, FileText, Subtitles, Video, Mic } from "lucide-react"
import ServicePageTemplate from "@/components/service-page-template"

export default function AudioVideoServicesPage() {
  return (
    <ServicePageTemplate
      title="Audio/Video Services"
      subtitle="AI-powered transcription, subtitling, and multimedia accessibility solutions."
      description={`We transform audio and video content into accessible, engaging formats using advanced AI technology. Our solutions enhance content reach while ensuring compliance with accessibility standards.

Our AI-driven approach delivers rapid results without compromising quality. For English-Dutch content, we offer specialized expertise to capture nuanced cultural context.`}
      icon={Film}
      imageSrc="/placeholder.svg?height=500&width=600"
      imageAlt="Audio/Video Services"
      features={[
        {
          title: "AI-Powered Processing",
          description: "Rapid turnaround through advanced speech recognition technology",
        },
        {
          title: "Accessibility Compliance",
          description: "Solutions that meet international accessibility standards",
        },
        {
          title: "Format Versatility",
          description: "Support for all major media formats and delivery platforms",
        },
      ]}
      process={[
        {
          step: 1,
          title: "Media Upload",
          description: "Securely upload your audio or video files",
        },
        {
          step: 2,
          title: "AI Processing",
          description: "Advanced algorithms process and analyze your content",
        },
        {
          step: 3,
          title: "Quality Verification",
          description: "Thorough review ensures accuracy and compliance",
        },
        {
          step: 4,
          title: "Delivery",
          description: "Receive your completed files in your preferred format",
        },
      ]}
      serviceTypes={[
        {
          icon: Headphones,
          title: "Transcription",
          description: "Precise speech-to-text conversion for all audio content",
        },
        {
          icon: Subtitles,
          title: "Subtitling",
          description: "Professional subtitles optimized for viewer engagement",
        },
        {
          icon: FileText,
          title: "Closed Captioning",
          description: "ADA-compliant captions for maximum accessibility",
        },
        {
          icon: Video,
          title: "Time-Coding",
          description: "Precise synchronization of text with audio/video content",
        },
        {
          icon: Mic,
          title: "Audio Description",
          description: "Descriptive narration for visually impaired audiences",
        },
        {
          icon: Film,
          title: "Multilingual Solutions",
          description: "Cross-language media services for global reach",
        },
      ]}
      ctaTitle="Maximize Your Content's Reach"
      ctaDescription="Make your media accessible to wider audiences with our professional solutions."
      relatedServices={[
        {
          title: "Language Services",
          description: "Translation, editing, proofreading, and quality assurance solutions",
          link: "/services/language-services",
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
