import type { Metadata } from "next"
import Link from "next/link"
import { Users, Laptop, FileText, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Language Solutions — TraByHum & TraByAge",
  description:
    "Choose your level of human involvement. Professional human translation or agent-powered speed — both with a free 10% preview before you commit.",
}

const services = ["Translation", "Proofreading", "Editing", "Subtitling", "Transcription", "Copywriting", "Annotation"]

export default function LanguageSolutionsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="badge badge-primary mb-4">Language Solutions</div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              Language Solutions
            </h1>
            <p className="text-xl font-medium text-gray-700 mb-4">
              Choose your level of human involvement.
            </p>
            <p className="text-lg text-gray-600">
              Nofonex offers two distinct paths — agent-powered speed or human-guaranteed quality. Both start with a
              free preview so you know what you&apos;re getting before you commit.
            </p>
          </div>
        </div>
      </section>

      {/* ── Two products ── */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          {/* Visual element */}
          <div className="flex items-center justify-center gap-6 mb-14">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="text-primary" size={30} />
              </div>
              <span className="text-sm font-medium text-gray-600">Human expertise</span>
            </div>
            <div className="flex flex-1 max-w-sm items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 font-medium px-2 py-1 rounded-full border border-gray-200 whitespace-nowrap">
                or
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <Laptop className="text-gray-600" size={30} />
              </div>
              <span className="text-sm font-medium text-gray-600">Agent speed</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* TraByHum */}
            <div className="card p-8 border-2 border-primary/30 flex flex-col">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                  Human
                </span>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-1">TraByHum</h2>
              <p className="text-sm text-gray-500 mb-2">Translation By Humans</p>
              <p className="font-semibold text-gray-700 mb-3">Every word reviewed by a professional.</p>
              <p className="text-gray-600 text-sm mb-6">
                For clients who require certified quality, cultural nuance, or accountability. A human expert handles
                your project from start to finish.
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <Link href="/trabyhum" className="btn btn-primary w-full text-center">
                Start with TraByHum
              </Link>
            </div>

            {/* TraByAge */}
            <div className="card p-8 border-2 border-gray-200 flex flex-col">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-gray-700 px-3 py-1 text-xs font-semibold text-white">
                  AI Agent
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-1">TraByAge</h2>
              <p className="text-sm text-gray-500 mb-2">Translation By Agents</p>
              <p className="font-semibold text-gray-700 mb-3">AI-powered speed. Human review optional.</p>
              <p className="text-gray-600 text-sm mb-6">
                For clients prioritising turnaround and cost efficiency. Select an agent, upload your document, and
                receive output fast. Add human review when it matters.
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <Link href="/trabyage" className="btn btn-outline w-full text-center">
                Start with TraByAge
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Free preview ── */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge badge-secondary mb-3">Free Preview</div>
            <h2 className="section-title">Free preview before you commit</h2>
            <p className="text-gray-600 mb-12">
              Upload your document and receive a free preview of the first 10% — read-only, no download. Up to 5 free
              previews per registered account. You only pay when you convert to a full order.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { icon: FileText, label: "Upload document", step: "1" },
                { icon: Clock, label: "Receive 10% preview", step: "2" },
                { icon: CheckCircle, label: "Convert when satisfied", step: "3" },
              ].map(({ icon: Icon, label, step }) => (
                <div key={step} className="flex flex-col items-center gap-3">
                  <div className="relative w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center">
                    <Icon className="text-primary" size={24} />
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                      {step}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
