import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Globe, WifiOff, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "SoFoWo — Songbook For Worshippers",
  description:
    "A worship songbook for churches and teams worldwide. Manage songs, setlists, and multilingual lyrics — online and offline. Free to start.",
}

const features = [
  {
    icon: BookOpen,
    title: "ChordPro Songbook",
    body: "Full ChordPro support. Import, organize, and transpose songs in any key.",
  },
  {
    icon: Users,
    title: "Setlist Management",
    body: "Build and share setlists with your team. Changes sync instantly.",
  },
  {
    icon: Globe,
    title: "Multilingual Library",
    body: "Songs in any language. Built for churches that sing in more than one tongue.",
  },
  {
    icon: WifiOff,
    title: "Offline-first PWA",
    body: "Works without internet. Install it like an app — no app store needed.",
  },
]

const tiers = [
  {
    name: "Free",
    price: "$0",
    tagline: "For individual worshippers getting started.",
  },
  {
    name: "Starter",
    price: "$6.90",
    tagline: "For small worship groups.",
    highlight: false,
  },
  {
    name: "Team",
    price: "$16.90",
    tagline: "Multi-member access with shared setlists.",
    highlight: false,
  },
  {
    name: "Church",
    price: "$39.90",
    tagline: "Admin dashboard, unlimited members, CCLI export.",
    highlight: true,
  },
]

export default function SoFoWoPage() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-custom py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/ministry-solutions" className="hover:text-primary transition-colors">Ministry Solutions</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">SoFoWo</span>
          </nav>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="badge badge-primary mb-4">SoFoWo</div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              The worship songbook built for the global church.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Songs, setlists, and multilingual lyrics — online and offline. Built for churches everywhere,
              not just the West.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/pricing#sofowo" className="btn btn-primary">
                Start for free
              </Link>
              <Link href="/pricing#sofowo" className="btn btn-outline">
                See all plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Kernfunctionaliteit ── */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge badge-secondary mb-3">Features</div>
            <h2 className="section-title">Everything your worship team needs</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card p-6 flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Abonnementstiers ── */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="badge badge-secondary mb-3">Plans</div>
            <h2 className="section-title">Choose your plan</h2>
            <p className="section-subtitle">Start free. Upgrade when your team grows.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white rounded-lg p-5 text-center flex flex-col ${
                  tier.highlight
                    ? "border-2 border-primary shadow-lg"
                    : "border border-gray-200 shadow-md"
                }`}
              >
                <h3 className="text-lg font-bold text-primary mb-1">{tier.name}</h3>
                <div className="text-2xl font-bold text-primary mb-1">
                  {tier.price}
                  {tier.price !== "$0" && (
                    <span className="text-sm font-normal text-gray-500">/mo</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 flex-1">{tier.tagline}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/pricing#sofowo" className="text-primary font-medium hover:underline">
              Compare all features →
            </Link>
          </div>
        </div>
      </section>

      {/* ── BeamFoWo koppeling ── */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-primary text-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-100 max-w-xl">
              <span className="font-semibold text-white">Using SoFoWo?</span> Connect BeamFoWo to project
              lyrics and Bible verses on any screen during your service.
            </p>
            <Link
              href="/beamfowo"
              className="btn bg-white text-primary hover:bg-gray-100 whitespace-nowrap flex-shrink-0"
            >
              Learn about BeamFoWo →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to get started?</h2>
            <p className="text-gray-600 mb-8">No credit card required for the free plan.</p>
            <Link href="/pricing#sofowo" className="btn btn-primary">
              Try SoFoWo free
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
