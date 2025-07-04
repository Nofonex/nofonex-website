import { BookOpen, FileText, Film, Globe, Laptop, Pencil } from "lucide-react"
import ServicePageTemplate from "@/components/service-page-template"

export default function ExampleServicePage() {
  return (
    <ServicePageTemplate
      title="Example Service"
      subtitle="This is an example service page using our reusable template."
      description={`This is where you would put a detailed description of your service. You can include multiple paragraphs by separating them with double line breaks.

This is a second paragraph that provides more information about the service. Explain the benefits, features, and why clients should choose your service.`}
      icon={Globe}
      imageSrc="/placeholder.svg?height=500&width=600"
      imageAlt="Example Service"
      features={[
        {
          title: "Feature One",
          description: "Description of the first key feature of this service",
        },
        {
          title: "Feature Two",
          description: "Description of the second key feature of this service",
        },
        {
          title: "Feature Three",
          description: "Description of the third key feature of this service",
        },
      ]}
      process={[
        {
          step: 1,
          title: "Initial Consultation",
          description: "We begin by understanding your needs and objectives through a detailed consultation.",
        },
        {
          step: 2,
          title: "Strategy Development",
          description: "Our team develops a customized strategy tailored to your specific requirements.",
        },
        {
          step: 3,
          title: "Implementation",
          description: "We execute the strategy with attention to detail and quality.",
        },
        {
          step: 4,
          title: "Review & Refinement",
          description: "We review the results and make any necessary refinements to ensure optimal outcomes.",
        },
      ]}
      serviceTypes={[
        {
          icon: Globe,
          title: "Service Type One",
          description: "Detailed description of the first type of service we offer in this category.",
        },
        {
          icon: FileText,
          title: "Service Type Two",
          description: "Detailed description of the second type of service we offer in this category.",
        },
        {
          icon: Pencil,
          title: "Service Type Three",
          description: "Detailed description of the third type of service we offer in this category.",
        },
        {
          icon: Film,
          title: "Service Type Four",
          description: "Detailed description of the fourth type of service we offer in this category.",
        },
        {
          icon: BookOpen,
          title: "Service Type Five",
          description: "Detailed description of the fifth type of service we offer in this category.",
        },
        {
          icon: Laptop,
          title: "Service Type Six",
          description: "Detailed description of the sixth type of service we offer in this category.",
        },
      ]}
      ctaTitle="Ready to Get Started?"
      ctaDescription="Contact us today to learn how our services can help you achieve your goals."
    />
  )
}
