import type { Metadata } from "next"
import Link from "next/link"
import { FileText, Film, Clock, CheckCircle, Globe, Award, Users } from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"

export const metadata: Metadata = {
  title: "TraByHum — Translation By Humans",
  description:
    "Professional human translation and subtitling services. Documents, websites, and video content. No AI — ever.",
}

const services = [
  {
    icon: FileText,
    title: "Document & Website Translation",
    body: "General and technical translation for documents, websites, and digital content.",
    rate: "from $0.155/word",
  },
  {
    icon: Film,
    title: "Subtitling",
    body: "Same-language subtitling and direct foreign subtitling for video content.",
    rate: "from $5.50/video minute",
  },
  {
    icon: Clock,
    title: "Subtitle Translation",
    body: "Translate an existing subtitle file into any supported language.",
    rate: "from $7.90/video minute",
  },
  {
    icon: CheckCircle,
    title: "Subtitle QC & Review",
    body: "Linguistic review and full quality control of existing subtitles, including machine-generated captions.",
    rate: "from $2.90/video minute",
  },
]

const languages = [
  "English ↔ Dutch",
  "English ↔ French",
  "English ↔ Spanish",
  "English ↔ Sranan Tongo",
  "English ↔ Haitian Creole",
  "English ↔ Sarnami",
  "English ↔ Papiamentu",
  "Other combinations available on request",
]

const humanPoints = [
  {
    icon: Award,
    title: "No AI translation",
    body: "We never use AI to generate translations. Human translators only.",
  },
  {
    icon: Globe,
    title: "Cultural accuracy",
    body: "Native speakers who understand context, not just words.",
  },
  {
    icon: Users,
    title: "Minority languages",
    body: "We specialize in languages that machine translation handles poorly.",
  },
]

const steps = [
  "Register a free account",
  "Select your service type",
  "Upload your source document",
  "Receive your free preview (first 10%, read-only)",
  "Approve and pay — full delivery follows",
]

export default function TraByHumPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="badge badge-primary">TraByHum</div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Translation and subtitling by humans. Always.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Every word translated by a professional. No AI output, no post-editing of machine translation. Just human
              expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/register" className="btn btn-primary">
                Get your free preview
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge badge-secondary mb-3">How it works</div>
            <h2 className="section-title">How it works</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {steps.map((text, i) => (
              <div key={i} className="flex gap-4 items-start bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">{i + 1}</span>
                </div>
                <p className="text-gray-700 pt-0.5">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge badge-secondary mb-3">Services</div>
            <h2 className="section-title">What we offer</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {services.map(({ icon: Icon, title, body, rate }) => (
              <div key={title} className="card p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{body}</p>
                    <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {rate}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Languages ── */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="badge badge-secondary mb-3">Languages</div>
            <h2 className="section-title">Languages we work with</h2>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-3 mt-8">
              {languages.map((lang) => (
                <div key={lang} className="flex items-center gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why human ── */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge badge-secondary mb-3">Why human</div>
            <h2 className="section-title">The human difference</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {humanPoints.map(({ icon: Icon, title, body }) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={26} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="badge badge-secondary mb-3">Pricing</div>
            <h2 className="section-title">Pay per order or subscribe</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Per order */}
            <div className="card p-8">
              <h3 className="text-xl font-bold text-primary mb-2">Per Order</h3>
              <p className="text-gray-600 text-sm mb-4">
                Pay per project based on the per-word or per-minute rate. No commitment required.
              </p>
              <table className="w-full text-sm mb-4">
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2 text-gray-700">General translation</td>
                    <td className="py-2 text-right font-medium text-primary">$0.155/word</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-700">Technical / specialized</td>
                    <td className="py-2 text-right font-medium text-primary">$0.235/word</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-700">Subtitling</td>
                    <td className="py-2 text-right font-medium text-primary">from $5.50/min</td>
                  </tr>
                </tbody>
              </table>
              <Link href="/pricing#language-solutions" className="text-primary text-sm underline hover:no-underline">
                View full rate table →
              </Link>
            </div>

            {/* Subscription */}
            <div className="card p-8 border border-dashed border-gray-300">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-primary">Subscription</h3>
                <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                  Coming Soon
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Monthly or annual capacity bundle with volume discount. Unused capacity rolls over for a maximum of one
                month. Extra capacity billed separately.
              </p>
              <p className="text-sm text-gray-500 italic mb-4">
                Subscription pricing will be published when our payment infrastructure goes live.
              </p>
              <WaitlistForm product="trabyhum-subscription" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to start a project?
            </h2>
            <p className="text-gray-200 mb-8">Minimum order $45. Rush delivery available.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/register" className="btn bg-white text-primary hover:bg-gray-100">
                Get your free preview
              </Link>
              <Link href="/contact" className="btn border border-white text-white hover:bg-white/10">
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
