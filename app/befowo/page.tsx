import type { Metadata } from "next"
import Link from "next/link"
import { MonitorPlay } from "lucide-react"

// BeFoWo is not a concrete product yet (owner, 2026-11-15). Keep this page short:
// no features, prices, release dates or integrations until they are confirmed.

export const metadata: Metadata = {
  title: { absolute: "BeFoWo: coming soon" },
  description: "BeFoWo is a presentation tool for worship that Nofonex is preparing. Coming soon.",
  alternates: { canonical: "/befowo" },
}

export default function BeFoWoPage() {
  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32 bg-gradient-to-br from-primary/5 via-white to-primary/5">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MonitorPlay className="text-primary" size={28} />
          </div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="badge badge-primary">BeFoWo</span>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
              Coming soon
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">BeFoWo</h1>
          <p className="text-lg text-gray-600 mb-8">
            A presentation tool for worship: song lyrics on the screen during the service. We are preparing it and will
            share more when it is ready.
          </p>
          <Link href="/ministry-solutions" className="btn btn-outline">
            Back to Ministry Solutions
          </Link>
        </div>
      </div>
    </section>
  )
}
