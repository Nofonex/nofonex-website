import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pricing for Nofonex products. SoFoWo is free during the beta.",
  openGraph: {
    title: "Pricing Plans | Nofonex",
    description: "Pricing for Nofonex products. SoFoWo is free during the beta.",
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
