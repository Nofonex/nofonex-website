import type { Metadata } from "next"
import Link from "next/link"
import { FileText, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Language Solutions — TraByAge & SubByAge",
  description:
    "Two agent-powered Language Solutions: text translation and video subtitling. Both with a free preview before you commit.",
}

const trabyageServices = [
  "Translation",
  "Proofreading",
  "Editing",
  "Subtitling",
  "Transcription",
  "Copywriting",
  "Annotation",
]

const subbyageFeatures = [
  "AI Transcription (Whisper)",
  "Instant Translation",
  "Multiple Formats — SRT, VTT, MP4",
]

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
            <p className="text-lg text-gray-600">
              Two agent-powered paths: text translation or video subtitling.
            </p>
          </div>
        </div>
      </section>

      {/* ── Two products ── */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* TraByAge */}
            <div className="card p-8 border-2 border-primary/30 flex flex-col">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-gray-700 px-3 py-1 text-xs font-semibold text-white">
                  AI Agent
                </span>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-1">TraByAge</h2>
              <p className="text-sm text-gray-500 mb-2">Translation By Agents</p>
              <p className="font-semibold text-gray-700 mb-3">AI-powered speed. Upload text, get translations.</p>
              <p className="text-gray-600 text-sm mb-6">
                Fast, cost-efficient document and text translation across language pairs. Upload your file, select your
                target language, and receive output in minutes.
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                {trabyageServices.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <Link href="/trabyage" className="btn btn-primary w-full text-center">
                Start with TraByAge
              </Link>
            </div>

            {/* SubByAge */}
            <div className="card p-8 border-2 border-gray-200 flex flex-col opacity-80">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-600">
                  Agents
                </span>
                <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                  Coming Soon
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-1">SubByAge</h2>
              <p className="text-sm text-gray-500 mb-2">Subtitle By Agents</p>
              <p className="font-semibold text-gray-700 mb-3">Upload a video. Get subtitles in minutes.</p>
              <p className="text-gray-600 text-sm mb-6">
                Fully automated subtitle generation and translation for video content. Whisper-powered transcription,
                instant translation, multiple export formats.
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                {subbyageFeatures.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <span className="block w-full py-2.5 px-4 rounded-md text-center text-sm font-medium cursor-not-allowed opacity-60 bg-primary/10 text-primary">
                Coming soon
              </span>
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
