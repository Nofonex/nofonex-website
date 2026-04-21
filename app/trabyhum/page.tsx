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

export default function TraByHumPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="badge badge-primary">TraByHum</div>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                SaaS platform in development
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Translation and subtitling by humans. Always.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Every word translated by a professional. No AI output, no post-editing of machine
              translation. Just human expertise.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Request a quote
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Currently accepting projects directly. Platform coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* ── Diensten ── */}
      <section className="py-16 md:py-24">
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

      {/* ── Taalcombinaties ── */}
      <section className="py-16 md:py-24 bg-primary/5">
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

      {/* ── Waarom menselijk ── */}
      <section className="py-16 md:py-24">
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

      {/* ── Coming soon: platform ── */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-primary/5 rounded-xl p-6 md:p-8 max-w-3xl mx-auto">
            <div className="badge badge-primary mb-4">Coming Soon</div>
            <h2 className="text-2xl font-bold text-primary mb-3">TraByHum Platform</h2>
            <p className="text-gray-600 mb-6">
              We&apos;re building a platform that brings the full translation workflow online — project
              management, delivery, invoicing, and communication in one place. Currently in development.
            </p>
            <WaitlistForm product="trabyhum" />
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
            <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
