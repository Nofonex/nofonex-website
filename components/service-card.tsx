import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  link: string
}

export default function ServiceCard({ title, description, icon: Icon, link }: ServiceCardProps) {
  return (
    <Link href={link} className="group">
      <div className="card card-hover p-6 h-full">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="text-primary" size={24} />
        </div>
        <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary-dark transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <div className="mt-4 text-secondary font-medium group-hover:text-secondary-dark transition-colors">
          Learn more →
        </div>
      </div>
    </Link>
  )
}
