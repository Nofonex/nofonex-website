import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your purchase of a Nofonex product.",
  robots: { index: false, follow: false },
}

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
