import type { Metadata } from "next"
import Link from "next/link"
import { Globe, CheckCircle, Pencil, Film, FileText, Award, Layers, Users } from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"

export const metadata: Metadata = {
  title: "TraByAge — Translation By Agents",
  description:
    "Agent-powered language services. Fast, cost-efficient translation, proofreading, subtitling, and more. Human review available.",
}

const steps = [
  { n: "1", text: "Register a free account" },
  { n: "2", text: "Select your agent type (translation, proofreading, editing, subtitling, transcription, copywriting, annotation)" },
  { n: "3", text: "Upload your source document" },
  { n: "4", text: "Agent generates your free preview (first 10%, read-only, no download)" },
  { n: "5", text: "Approve and convert — or add human review via TraByHum" },
]

const agents = [
  {
    icon: Globe,
    name: "Translation agent",
    desc: "Fast, cost-efficient translation across language pairs",
    type: "translation",
  },
  {
    icon: CheckCircle,
    name: "Proofreading agent",
    desc: "Automated error detection and correction",
    type: "proofreading",
  },
  {
    icon: Pencil,
    name: "Editing agent",
    desc: "Style, clarity, and flow improvement",
    type: "editing",
  },
  {
    icon: Film,
    name: "Subtitling agent",
    desc: "Automatic subtitle generation and translation",
    type: "subtitling",
  },
  {
    icon: FileText,
    name: "Transcription agent",
    desc: "Audio and video to text",
    type: "transcription",
  },
  {
    icon: Award,
    name: "Copywriting agent",
    desc: "AI-generated marketing and content copy",
    type: "copywriting",
  },
  {
    icon: Layers,
    name: "Annotation agent",
    desc: "Data labelling and text annotation",
    type: "annotation",
  },
]

export default function TraByAgePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="badge badge-primary">TraByAge</div>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                Launching soon
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              TraByAge — Translation By Agents
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Agent-powered language services. Human review available.
            </p>
            <Link href="/register" className="btn btn-primary">
              Get your free preview
            </Link>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge badge-secondary mb-3">How it works</div>
            <h2 className="section-title">Five steps to your first delivery</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {steps.map(({ n, text }) => (
              <div key={n} className="flex gap-4 items-start bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">{n}</span>
                </div>
                <p className="text-gray-700 pt-0.5">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agent selection ── */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge badge-secondary mb-3">Agents</div>
            <h2 className="section-title">Select your agent</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {agents.map(({ icon: Icon, name, desc, type }) => (
              <Link
                key={type}
                href={`/register?agent=${type}`}
                className="bg-white rounded-lg p-6 flex gap-4 shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-primary mb-1">{name}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Agent functionality is in development. Clicking an agent registers your interest.
          </p>
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
                Pay only for what you use. Agent rates are significantly lower than human rates — exact pricing published at launch.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  No commitment required
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  Free 10% preview on every order
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  Pay only after preview approval
                </li>
              </ul>
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
                Monthly or annual capacity bundle with volume discount. Unused capacity rolls over for a maximum of one month. Extra capacity billed separately.
              </p>
              <p className="text-sm text-gray-500 italic mb-4">
                Subscription pricing will be published when our payment infrastructure goes live.
              </p>
              <WaitlistForm product="trabyage-subscription" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Add human review ── */}
      <section className="py-12 bg-primary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-gray-100">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="text-primary" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-primary mb-2">Need human quality assurance?</h2>
                <p className="text-gray-600 text-sm">
                  After receiving your agent output, you can add a human review step via TraByHum. Reviewed by a
                  professional, delivered with confidence.
                </p>
              </div>
            </div>
            <Link href="/trabyhum" className="btn btn-outline whitespace-nowrap flex-shrink-0">
              Learn about TraByHum →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to try agent-powered translation?
            </h2>
            <p className="text-gray-200 mb-8">
              Create a free account and get your first 10% preview at no cost.
            </p>
            <Link href="/register" className="btn bg-white text-primary hover:bg-gray-100">
              Get your free preview
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
