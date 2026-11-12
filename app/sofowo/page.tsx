import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, ListMusic, Library, WifiOff, Mail, ShieldCheck } from "lucide-react"

// Facts on this page follow projects/sofowo/website-marketing.md in Nofonex/nofonex-ecosystem.
// Do not add features, prices or user numbers that are not confirmed there.

const APP_URL = "https://sofowo.app"
const CONTACT_EMAIL = "sofowo@nofonex.com"
const BETA_REQUEST_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("SoFoWo beta access")}`

const LEGAL_LINKS = {
  privacyEn: `${APP_URL}/en/privacy`,
  privacyNl: `${APP_URL}/privacy`,
  termsEn: `${APP_URL}/en/terms`,
  termsNl: `${APP_URL}/voorwaarden`,
}

const TITLE = "SoFoWo: songbook and setlists for worship teams"
const DESCRIPTION =
  "SoFoWo is a songbook and setlist tool for worship teams: ChordPro songs, transposing, setlists with medleys and line-ups, and it works offline. Free during the beta."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/sofowo" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/sofowo",
    siteName: "Nofonex",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
}

const features = [
  {
    icon: BookOpen,
    title: "Songbook with ChordPro",
    body: "Keep your songs in ChordPro and transpose them to any key.",
  },
  {
    icon: ListMusic,
    title: "Setlists, medleys and line-ups",
    body: "Plan each service: the setlist, medleys, and who plays what.",
  },
  {
    icon: Library,
    title: "Team, personal and church-wide songbooks",
    body: "A shared songbook for your team, a personal one for yourself, and one for the whole church.",
  },
  {
    icon: WifiOff,
    title: "Works offline, no app store",
    body: "A web app you install on phone, tablet or computer. Your songs stay available without internet.",
  },
]

const steps = [
  {
    title: "Request beta access",
    body: `The beta is by invitation. Send us an email and we will get back to you.`,
  },
  {
    title: "Set up your team and songs",
    body: "Create your team, invite your musicians and add the songs you sing.",
  },
  {
    title: "Plan your service",
    body: "Build the setlist, choose keys and line-up, and open it on any device on Sunday.",
  },
]

export default function SoFoWoPage() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-custom py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/ministry-solutions" className="hover:text-primary transition-colors">
              Ministry Solutions
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">SoFoWo</span>
          </nav>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <span className="badge badge-primary">SoFoWo</span>
              <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                Beta
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Songbook and setlists for worship teams
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Songs, keys, setlists and line-ups in one place, for churches, bands and music schools.
            </p>
            <p className="text-lg font-semibold text-primary mb-8">Free during the beta.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={BETA_REQUEST_HREF} className="btn btn-primary">
                Request beta access
              </a>
              <a href="#how-it-works" className="btn btn-outline">
                How it works
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Already invited?{" "}
              <a href={APP_URL} className="text-primary font-medium hover:underline">
                Open SoFoWo
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Wat er is ── */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge badge-secondary mb-3">What it does</div>
            <h2 className="section-title">Built for the way worship teams prepare</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card p-6 flex gap-4">
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
          <p className="text-center text-sm text-gray-500 max-w-2xl mx-auto mt-8">
            The app is available in Dutch and English. It comes with a set of public-domain hymns; teams add their own
            songs and remain responsible for the licences of those songs (for example CCLI).
          </p>
        </div>
      </section>

      {/* ── Voor wie ── */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <div className="badge badge-secondary mb-3">Who it is for</div>
            <h2 className="section-title">Church worship teams, bands and music schools</h2>
            <p className="section-subtitle">
              SoFoWo adapts its wording to the kind of group you run, so it fits a Sunday service as well as a band
              rehearsal or a music lesson.
            </p>
          </div>
        </div>
      </section>

      {/* ── Hoe het werkt ── */}
      <section id="how-it-works" className="py-16 md:py-24 scroll-mt-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge badge-secondary mb-3">How it works</div>
            <h2 className="section-title">Three steps to your first setlist</h2>
          </div>
          <ol className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <li key={step.title} className="card p-6">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold mb-3">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Prijs ── */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <div className="badge badge-secondary mb-3">Pricing</div>
            <h2 className="section-title">Free during the beta</h2>
            <p className="section-subtitle">
              There are no paid plans yet. During the beta, SoFoWo costs nothing.
            </p>
          </div>
        </div>
      </section>

      {/* ── Privacy ── */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="card p-6 md:p-8 max-w-3xl mx-auto flex flex-col md:flex-row gap-6">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="text-primary" size={20} />
            </div>
            <div className="text-gray-600 text-sm space-y-3">
              <h2 className="text-xl font-semibold text-primary">Privacy in short</h2>
              <p>
                No advertising and no selling of your data. You can export your data and delete your account
                yourself in the app.
              </p>
              <p>
                For SoFoWo, the app&apos;s own privacy policy and terms of use apply:{" "}
                <a href={LEGAL_LINKS.privacyEn} className="text-primary underline hover:no-underline">
                  privacy policy
                </a>{" "}
                (
                <a href={LEGAL_LINKS.privacyNl} className="text-primary underline hover:no-underline" hrefLang="nl">
                  Nederlands
                </a>
                ) and{" "}
                <a href={LEGAL_LINKS.termsEn} className="text-primary underline hover:no-underline">
                  terms of use
                </a>{" "}
                (
                <a href={LEGAL_LINKS.termsNl} className="text-primary underline hover:no-underline" hrefLang="nl">
                  Nederlands
                </a>
                ). The policies on nofonex.com cover this website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Want to try SoFoWo with your team?</h2>
            <p className="text-gray-600 mb-8">The beta is free and by invitation.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={BETA_REQUEST_HREF} className="btn btn-primary">
                Request beta access
              </a>
              <a href={APP_URL} className="btn btn-outline">
                Open SoFoWo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Voettekst van de pagina ── */}
      <section className="py-8 border-t border-gray-100">
        <div className="container-custom text-center text-sm text-gray-500 space-y-2">
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-1 hover:text-primary">
              <Mail size={14} /> {CONTACT_EMAIL}
            </a>
            <a href={LEGAL_LINKS.privacyEn} className="hover:text-primary">
              Privacy (app)
            </a>
            <a href={LEGAL_LINKS.termsEn} className="hover:text-primary">
              Terms (app)
            </a>
            <Link href="/" className="hover:text-primary">
              Nofonex
            </Link>
          </p>
          <p>
            SoFoWo is provided by Nofonex PST, registered with the KKF Suriname under file number 62527, owner Xenofon
            Martokarijo, Paramaribo, Suriname.
          </p>
        </div>
      </section>
    </>
  )
}
