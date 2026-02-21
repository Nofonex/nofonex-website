import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description:
    "Find answers to common questions about Nofonex language services, pricing, delivery times, quality assurance, and supported languages.",
  openGraph: {
    title: "Frequently Asked Questions | Nofonex",
    description: "Answers to common questions about our language services, pricing, and delivery.",
  },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
