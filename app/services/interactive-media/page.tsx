import { Laptop, Bot, Music, Video, Palette } from "lucide-react"
import ServicePageTemplate from "@/components/service-page-template"

export default function InteractiveMediaProductionPage() {
  return (
    <ServicePageTemplate
      title="Interactive Media Production"
      subtitle="AI-powered interactive experiences, animation, audio, and video production."
      description={`We create immersive digital experiences by integrating advanced AI capabilities with creative expertise. Our solutions deliver engaging content that drives meaningful audience interaction and measurable results.

Our AI-enhanced production workflow accelerates development while maintaining creative excellence. Available in English and Dutch, all projects receive strategic direction to ensure alignment with business objectives.`}
      icon={Laptop}
      imageSrc="/placeholder.svg?height=500&width=600"
      imageAlt="Interactive Media Production"
      features={[
        {
          title: "AI-Enhanced Creation",
          description: "Accelerated production through advanced generative technologies",
        },
        {
          title: "Engagement Optimization",
          description: "Interactive elements designed for maximum audience participation",
        },
        {
          title: "Cross-Platform Performance",
          description: "Seamless experiences across all devices and platforms",
        },
      ]}
      process={[
        {
          step: 1,
          title: "Strategic Planning",
          description: "Define objectives, audience, and key performance metrics",
        },
        {
          step: 2,
          title: "Creative Development",
          description: "AI-assisted concept creation and design",
        },
        {
          step: 3,
          title: "Production",
          description: "Efficient execution using advanced production tools",
        },
        {
          step: 4,
          title: "Optimization",
          description: "Testing and refinement for optimal performance",
        },
      ]}
      serviceTypes={[
        {
          icon: Laptop,
          title: "Interactive Experiences",
          description: "Engaging digital interactions that drive meaningful engagement",
        },
        {
          icon: Palette,
          title: "Animation",
          description: "Dynamic visual storytelling for complex concepts",
        },
        {
          icon: Music,
          title: "Audio Production",
          description: "Professional sound design and audio content creation",
        },
        {
          icon: Video,
          title: "Video Production",
          description: "High-impact video content optimized for digital platforms",
        },
        {
          icon: Music,
          title: "Music Production",
          description: "Custom audio compositions for multimedia applications",
        },
        {
          icon: Bot,
          title: "AI-Generated Content",
          description: "Cutting-edge solutions leveraging generative AI technologies",
        },
      ]}
      ctaTitle="Create Memorable Digital Experiences"
      ctaDescription="Engage your audience with interactive content that drives measurable results."
    />
  )
}
