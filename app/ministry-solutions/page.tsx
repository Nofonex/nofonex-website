import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Laptop, Radio } from "lucide-react"

export const metadata: Metadata = {
  title: "Ministry Solutions — SoFoWo",
  description:
    "Digital tools for worship teams and church ministry, starting with SoFoWo: songbook and setlists for worship teams.",
}

const products = [
  {
    icon: BookOpen,
    name: "SoFoWo",
    tagline: "Songbook For Worshippers",
    desc: "Songbook and setlists for worship teams: ChordPro songs, transposing, setlists and line-ups, online and offline. Free during the beta.",
    href: "/sofowo",
    comingSoon: false,
    cta: "Explore SoFoWo",
  },
  {
    icon: Laptop,
    name: "BeFoWo",
    tagline: "Beamerpresentatie For Worshippers",
    desc: "A presentation tool for worship: song lyrics on the screen during the service.",
    href: "/befowo",
    comingSoon: true,
    cta: "More about BeFoWo",
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
              Nofonex builds software for churches and worship teams, starting with SoFoWo.
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
