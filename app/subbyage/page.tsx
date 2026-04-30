import type { Metadata } from "next"
import Link from "next/link"
import { Film, Globe, FileText } from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"

export const metadata: Metadata = {
  title: "SubByAge — Subtitle By Agents",
  description:
    "Fully automated video subtitling. Upload a video, choose your languages, download professional subtitles in minutes.",
}

const features = [
  {
    icon: Film,
    title: "AI Transcription",
    desc: "Whisper-powered speech recognition for accurate transcription across accents and languages.",
  },
  {
    icon: Globe,
    title: "Instant Translation",
    desc: "Helsinki-NLP and DeepL translation pipelines. Select one or multiple target languages per video.",
  },
  {
    icon: FileText,
    title: "Multiple Formats",
    desc: "Download SRT, VTT, or burned-in MP4 — ready to upload to YouTube, Vimeo, or any platform.",
  },
]

const perVideoRates = [
  { duration: "0–10 minutes", price: "$2.50" },
  { duration: "10–30 minutes", price: "$5.00" },
  { duration: "30–60 minutes", price: "$9.00" },
  { duration: "60–120 minutes", price: "$15.00" },
]

const subscriptionPlans = [
  { name: "Starter", minutes: "60 min", monthly: "$9", annual: "$89" },
  { name: "Creator", minutes: "200 min", monthly: "$24", annual: "$239" },
  { name: "Pro", minutes: "600 min", monthly: "$59", annual: "$589" },
]

export default function SubByAgePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="badge badge-primary">SubByAge</div>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                Launching soon
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              SubByAge — Subtitle By Agents
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Upload a video. Choose your languages. Download professional subtitles in minutes —
              fully automated.
            </p>
            <span className="inline-block py-3 px-8 rounded-md text-sm font-medium cursor-not-allowed opacity-60 bg-primary text-white">
              Coming Soon
            </span>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge badge-secondary mb-3">How it works</div>
            <h2 className="section-title">Automated from start to finish</h2>
            <p className="section-subtitle">
              No human in the loop — just fast, consistent, agent-powered subtitling.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={22} />
                </div>
                <h3 className="text-base font-semibold text-primary mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="badge badge-secondary mb-3">Pricing</div>
            <h2 className="section-title">Pay per video or subscribe</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Per video */}
            <div className="card p-8">
              <h3 className="text-xl font-bold text-primary mb-2">Per Video</h3>
              <p className="text-gray-600 text-sm mb-4">
                Pay only for what you process. First language included; +$1.50 per additional target
                language.
              </p>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {perVideoRates.map(({ duration, price }) => (
                    <tr key={duration}>
                      <td className="py-2.5 text-gray-700">{duration}</td>
                      <td className="py-2.5 text-right font-medium text-primary">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                Monthly or annual minute bundles. Unused minutes do not roll over. Extra minutes
                billed at per-video rates.
              </p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-2 text-left text-gray-600 font-medium">Plan</th>
                    <th className="pb-2 text-right text-gray-600 font-medium">Monthly</th>
                    <th className="pb-2 text-right text-gray-600 font-medium">Annual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {subscriptionPlans.map(({ name, minutes, monthly, annual }) => (
                    <tr key={name}>
                      <td className="py-2.5 text-gray-700">
                        {name}
                        <span className="block text-xs text-gray-500">{minutes}</span>
                      </td>
                      <td className="py-2.5 text-right font-medium text-primary">{monthly}</td>
                      <td className="py-2.5 text-right font-medium text-primary">{annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Full pricing details on the{" "}
            <Link href="/pricing#language-solutions" className="text-primary underline hover:no-underline">
              Pricing page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Waitlist ── */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center">
            <div className="badge badge-secondary mb-3">Stay in the loop</div>
            <h2 className="section-title">Join the waitlist</h2>
            <p className="section-subtitle mb-8">
              SubByAge is in development. Leave your email and we will notify you when it launches.
            </p>
            <WaitlistForm product="subbyage" />
          </div>
        </div>
      </section>
    </>
  )
}
