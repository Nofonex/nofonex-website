import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Laptop, Radio } from "lucide-react"

export const metadata: Metadata = {
  title: "Ministry Solutions — SoFoWo & BeamFoWo",
  description:
    "Digital tools built for worship, presentation, and church ministry. SoFoWo worship songbook and BeamFoWo screen presentation — built to work together.",
}

const products = [
  {
    icon: BookOpen,
    name: "SoFoWo",
    tagline: "Songbook For Worshippers",
    desc: "A worship songbook for churches and teams worldwide. Manage songs, setlists, and multilingual lyrics — online and offline. Free to start.",
    href: "/sofowo",
    comingSoon: false,
    cta: "Explore SoFoWo",
  },
  {
    icon: Laptop,
    name: "BeamFoWo",
    tagline: "Beam For Worshippers",
    desc: "Put Bible verses, song lyrics, and visuals on any screen or projector — offline, without preparation. Connects directly to your SoFoWo library.",
    href: "/beamfowo",
    comingSoon: true,
    cta: "Explore BeamFoWo",
  },
]

const comingSoonItems = [
  {
    icon: BookOpen,
    name: "Bijbelstudie-app",
    desc: "A structured Bible study tool for small groups and individuals.",
  },
  {
    icon: Radio,
    name: "Music Production",
    desc: "Tools for church music teams to arrange, record, and distribute original worship music.",
  },
]

export default function MinistrySolutionsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="badge badge-primary mb-4">Ministry Solutions</div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Digital tools built for worship, presentation, and church ministry.
            </h1>
            <p className="text-lg text-gray-600">
              Nofonex builds software for churches and worship teams — starting with SoFoWo and BeamFoWo,
              designed to work together.
            </p>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge badge-secondary mb-3">Our Products</div>
            <h2 className="section-title">What we offer</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map(({ icon: Icon, name, tagline, desc, href, comingSoon, cta }) => (
              <div
                key={name}
                className={`card p-8 flex flex-col ${
                  comingSoon ? "opacity-80" : "border-2 border-primary/20"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-bold text-primary">{name}</h2>
                      {comingSoon && (
                        <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                          In Development
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{tagline}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-6 flex-1">{desc}</p>
                <Link
                  href={href}
                  className={`${comingSoon ? "btn btn-outline" : "btn btn-primary"} w-full text-center`}
                >
                  {cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integration ── */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="badge badge-secondary mb-3">Integration</div>
              <h2 className="section-title">Built to work together</h2>
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex flex-col items-center gap-2 text-center md:w-1/3">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="text-primary" size={26} />
                  </div>
                  <h3 className="font-semibold text-primary">SoFoWo</h3>
                  <p className="text-xs text-gray-500">Your worship songbook</p>
                </div>
                <div className="flex items-center justify-center md:w-1/3">
                  <span className="text-xs text-gray-500 font-medium px-3 py-1 rounded-full border border-primary/20 bg-white">
                    connects to
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center md:w-1/3">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Laptop className="text-primary" size={26} />
                  </div>
                  <h3 className="font-semibold text-primary">BeamFoWo</h3>
                  <p className="text-xs text-gray-500">Your screen presenter</p>
                </div>
              </div>
              <p className="text-center text-gray-600 text-sm mt-6">
                Pull your SoFoWo songs directly into BeamFoWo and project them on any screen during your
                service — no re-entering lyrics needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coming Soon ── */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge badge-secondary mb-3">Coming Soon</div>
            <h2 className="section-title">More ministry tools on the way</h2>
            <p className="section-subtitle">
              We are expanding the suite. Join the waitlist to be notified when these launch.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {comingSoonItems.map(({ icon: Icon, name, desc }) => (
              <div key={name} className="card p-6 opacity-70">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-gray-500" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">{name}</h3>
                <p className="text-gray-500 text-sm mb-4">{desc}</p>
                <Link href="/register?notify=ministry" className="text-primary text-sm font-medium hover:underline">
                  Notify me →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
