import type { Metadata } from "next"
import Link from "next/link"
import {
  Home,
  BookOpen,
  Users,
  Laptop,
  Radio,
  Film,
  WifiOff,
  Layers,
  Link as LinkIcon,
  Palette,
} from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"

export const metadata: Metadata = {
  title: "BeamFoWo — Screen Presentation for Churches and Events",
  description:
    "Put Bible verses, song lyrics, and visuals on any screen or projector. Offline-first. Works for worship, Bible study, meetings, and more.",
}

const useCases = [
  {
    icon: Home,
    title: "Worship Services",
    body: "Project lyrics and Bible verses during services.",
  },
  {
    icon: BookOpen,
    title: "Bible Study",
    body: "Display passages and references for group study.",
  },
  {
    icon: Users,
    title: "Meetings & Conferences",
    body: "Show agendas, quotes, and speaker intros.",
  },
  {
    icon: Laptop,
    title: "Schools & Education",
    body: "Visual instruction for any classroom setting.",
  },
  {
    icon: Radio,
    title: "Events & Promos",
    body: "Welcome screens, countdowns, sponsor loops.",
  },
  {
    icon: Film,
    title: "Movie Nights",
    body: "Atmosphere screens and session timers.",
  },
]

const coreFeatures = [
  {
    icon: WifiOff,
    title: "Offline-first",
    body: "Works without internet. Essential for areas with unreliable connectivity.",
  },
  {
    icon: BookOpen,
    title: "Bible Integration",
    body: "Load Bible verses by book, chapter, and verse. Multiple translations.",
  },
  {
    icon: Palette,
    title: "Design Collections",
    body: "Professional themes renewed quarterly. Your screen always looks good.",
  },
  {
    icon: LinkIcon,
    title: "SoFoWo Connect",
    body: "Optional: pull songs directly from your SoFoWo library.",
  },
]

const tiers = [
  {
    name: "Free",
    price: "$0",
    tagline: "1 screen · 5 sessions · online only",
  },
  {
    name: "Essential",
    price: "$4.90",
    tagline: "Offline · unlimited sessions · all themes",
  },
  {
    name: "Pro",
    price: "$9.90",
    tagline: "All modes · video backgrounds · 3 translations",
    highlight: true,
  },
]

export default function BeamFoWoPage() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-custom py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/ministry-solutions" className="hover:text-primary transition-colors">Ministry Solutions</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">BeamFoWo</span>
          </nav>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="badge badge-primary">BeamFoWo</div>
              <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                Coming Soon — join the waitlist
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Your screen. Your message. Instantly.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              BeamFoWo puts Bible verses, lyrics, and visuals on any screen or projector — offline,
              without preparation.
            </p>
            <Link href="/pricing#beamfowo" className="btn btn-primary">
              See pricing
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Already using SoFoWo? BeamFoWo connects to your songbook.
            </p>
          </div>
        </div>
      </section>

      {/* ── Gebruiksscenario's ── */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge badge-secondary mb-3">Use cases</div>
            <h2 className="section-title">Built for every gathering</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card p-6 flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-primary mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kernfunctionaliteit ── */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge badge-secondary mb-3">Features</div>
            <h2 className="section-title">What makes BeamFoWo different</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {coreFeatures.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-lg p-6 flex gap-4 shadow-md border border-gray-100">
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
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="badge badge-secondary mb-3">Plans</div>
            <h2 className="section-title">Simple pricing</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white rounded-lg p-5 text-center ${
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
                <p className="text-xs text-gray-600">{tier.tagline}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/pricing#beamfowo" className="text-primary font-medium hover:underline">
              View full pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SoFoWo cross-sell ── */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-primary text-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-100 max-w-xl">
              <span className="font-semibold text-white">Pair with SoFoWo.</span> Manage your worship songs in SoFoWo and pull them directly into BeamFoWo — no re-entering lyrics needed.
            </p>
            <Link
              href="/sofowo"
              className="btn bg-white text-primary hover:bg-gray-100 whitespace-nowrap flex-shrink-0"
            >
              Learn about SoFoWo →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA + waitlist ── */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Be the first to know when BeamFoWo launches.
            </h2>
            <p className="text-gray-600 mb-6">Join the waitlist and get notified on launch day.</p>
            <div className="flex justify-center">
              <WaitlistForm product="beamfowo" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
