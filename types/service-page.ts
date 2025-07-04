import type { LucideIcon } from "lucide-react"

export interface ServiceFeature {
  title: string
  description: string
}

export interface ServiceProcess {
  step: number
  title: string
  description: string
}

export interface ServiceType {
  icon: LucideIcon
  title: string
  description: string
}

export interface RelatedService {
  title: string
  description: string
  link: string
}

export interface ServicePageProps {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  imageSrc: string
  imageAlt: string
  features: ServiceFeature[]
  process: ServiceProcess[]
  serviceTypes: ServiceType[]
  ctaTitle: string
  ctaDescription: string
  relatedServices?: RelatedService[]
}
