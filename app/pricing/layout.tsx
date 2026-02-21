import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing - Transparent Plans for Every Business",
  description:
    "Simple, transparent pricing for translation, content writing, subtitling, and digital content services. Starter, Professional, and Enterprise plans available.",
  openGraph: {
    title: "Pricing Plans | Nofonex",
    description: "Transparent pricing for translation, content writing, and digital content services.",
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
