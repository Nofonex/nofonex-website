"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, HelpCircle, Clock } from "lucide-react"

// ── SoFoWo types & data ───────────────────────────────────────────────────────

interface SoFoWoPlan {
  id: string
  name: string
  price: { monthly: string; annual: string }
  free?: boolean
  features: string[]
  extra?: string[]
  highlight?: boolean
}

const sofowoPlans: SoFoWoPlan[] = [
  {
    id: "free",
    name: "Free",
    price: { monthly: "$0", annual: "$0" },
    free: true,
    features: [],
  },
  {
    id: "starter",
    name: "Starter",
    price: { monthly: "$6.90", annual: "$69" },
    features: [
      "Full ChordPro songbook",
      "Setlist management",
      "Multilingual library",
      "Offline access (PWA)",
      "Song submission",
      "Email support",
    ],
  },
  {
    id: "team",
    name: "Team",
    price: { monthly: "$16.90", annual: "$169" },
    features: [
      "Full ChordPro songbook",
      "Setlist management",
      "Multilingual library",
      "Offline access (PWA)",
      "Song submission",
      "Email support",
    ],
    extra: ["Multi-member access", "Shared setlists", "Role management"],
  },
  {
    id: "church",
    name: "Church",
    price: { monthly: "$39.90", annual: "$399" },
    highlight: true,
    features: [
      "Full ChordPro songbook",
      "Setlist management",
      "Multilingual library",
      "Offline access (PWA)",
      "Song submission",
      "Email support",
    ],
    extra: ["Admin dashboard", "Unlimited members", "Priority support", "CCLI export tools"],
  },
]

// ── BeamFoWo types & data ─────────────────────────────────────────────────────

interface BeamFoWoPlan {
  id: string
  name: string
  price: { monthly: string; annual: string }
  free?: boolean
  highlight?: boolean
  features: string[]
}

const beamfowoPlans: BeamFoWoPlan[] = [
  {
    id: "free",
    name: "Free",
    price: { monthly: "$0", annual: "$0" },
    free: true,
    features: ["1 screen", "5 saved sessions", "Standard themes", "Online only"],
  },
  {
    id: "essential",
    name: "Essential",
    price: { monthly: "$4.90", annual: "$49" },
    features: ["Offline access", "Unlimited sessions", "All built-in themes", "1 Bible translation"],
  },
  {
    id: "pro",
    name: "Pro",
    price: { monthly: "$9.90", annual: "$99" },
    highlight: true,
    features: [
      "All modes",
      "Video backgrounds",
      "Custom uploads",
      "3 Bible translations",
      "1 Design Collection/quarter included",
    ],
  },
]

const beamAddons: { name: string; price: string }[] = [
  { name: "Extra Bible translation", price: "$1.49/mo per translation" },
  { name: "Design Collection (single)", price: "$2.99 one-time" },
  { name: "Design Collection Quarterly Pass", price: "$1.99/mo" },
  { name: "Seasonal decorations pack", price: "$1.49 one-time" },
  { name: "Program templates pack (5)", price: "$1.99 one-time" },
]

const sofowoBundles: { sofowoTier: string; beamDiscount: string }[] = [
  { sofowoTier: "Starter", beamDiscount: "→ Essential for $3.90/mo" },
  { sofowoTier: "Team", beamDiscount: "→ Essential included, Pro for $6.90/mo" },
  { sofowoTier: "Church", beamDiscount: "→ Pro included" },
]

// ── FAQ data ──────────────────────────────────────────────────────────────────

const faqItems: { question: string; answer: string }[] = [
  {
    question: "Can I change plans at any time?",
    answer: "Yes, upgrade or downgrade at any time. Changes take effect at your next billing cycle.",
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer:
      "Contact us at support@nofonex.com. For translation and subtitling services, additional work is quoted separately.",
  },
  {
    question: "Do unused words or minutes roll over?",
    answer: "No, unused allocations do not roll over. Each billing cycle provides a fresh allocation.",
  },
  {
    question: "Can I use BeamFoWo without SoFoWo?",
    answer:
      "Yes. BeamFoWo is a standalone product. The SoFoWo connection is optional and only needed if you want to import songs directly.",
  },
  {
    question: "How does PPP pricing work?",
    answer:
      "We automatically apply regional pricing for customers in Africa and Asia. The discount is shown at checkout based on your location.",
  },
]

// ── Page component ────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const paymentProviderName =
    process.env.NEXT_PUBLIC_PAYMENT_PROVIDER_NAME || "our authorized payment partner"
  const paymentProviderUrl = process.env.NEXT_PUBLIC_PAYMENT_PROVIDER_URL || ""

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Simple, Transparent Pricing</h1>
            <p className="text-lg text-gray-600">
              Straightforward pricing for every product in the Nofonex ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* ── Billing toggle (shared by SoFoWo & BeamFoWo) ── */}
      <section className="py-8">
        <div className="container-custom">
          <div className="flex justify-center items-center space-x-4">
            <span
              className={`text-lg font-medium ${billingCycle === "monthly" ? "text-primary" : "text-gray-500"}`}
            >
              Monthly Billing
            </span>
            <button
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-300"
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              aria-label="Toggle billing cycle"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  billingCycle === "annual" ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <div className="flex items-center">
              <span
                className={`text-lg font-medium ${billingCycle === "annual" ? "text-primary" : "text-gray-500"}`}
              >
                Annual Billing
              </span>
              <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                Save up to 17%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SoFoWo — Songbook For Worshippers
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge badge-primary mb-3">SoFoWo</div>
            <h2 className="section-title">Songbook For Worshippers</h2>
            <p className="section-subtitle">
              The complete digital songbook for worship teams and churches.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Africa &amp; Asia regions receive ~50% discount, applied automatically at checkout.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sofowoPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-lg overflow-hidden flex flex-col ${
                  plan.highlight
                    ? "border-2 border-primary shadow-lg"
                    : "border border-gray-200 shadow-md bg-white"
                } bg-white`}
              >
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary">
                      {billingCycle === "monthly" ? plan.price.monthly : plan.price.annual}
                    </span>
                    {!plan.free && (
                      <span className="text-gray-500 text-sm">
                        {billingCycle === "monthly" ? "/mo" : "/yr"}
                      </span>
                    )}
                  </div>

                  {plan.free ? (
                    <p className="text-gray-500 text-sm mb-6 flex-1">
                      Basic access — no credit card required.
                    </p>
                  ) : (
                    <ul className="space-y-2 mb-4 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                      {plan.extra && plan.extra.length > 0 && (
                        <>
                          <li className="pt-2 text-xs font-semibold text-primary uppercase tracking-wide">
                            Also includes
                          </li>
                          {plan.extra.map((feature, i) => (
                            <li key={`x-${i}`} className="flex items-start text-sm text-gray-600">
                              <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </>
                      )}
                    </ul>
                  )}

                  <Link
                    href={
                      plan.free
                        ? "/get-started"
                        : `/get-started?product=sofowoplan&plan=${plan.id}`
                    }
                    className={`block w-full py-2.5 px-4 rounded-md text-center text-sm font-medium mt-auto ${
                      plan.highlight
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                  >
                    {plan.free ? "Get Started Free" : "Choose Plan"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BeamFoWo — Screen Presentation App
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="badge badge-primary">BeamFoWo</div>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                <Clock className="h-3 w-3" />
                Coming Soon
              </span>
            </div>
            <h2 className="section-title">Screen Presentation App</h2>
            <p className="section-subtitle">
              Display songs, scripture, and announcements on any screen — beautifully.
            </p>
          </div>

          {/* Tier cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {beamfowoPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-lg overflow-hidden flex flex-col bg-white ${
                  plan.highlight
                    ? "border-2 border-primary shadow-lg"
                    : "border border-gray-200 shadow-md"
                }`}
              >
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary">
                      {billingCycle === "monthly" ? plan.price.monthly : plan.price.annual}
                    </span>
                    {!plan.free && (
                      <span className="text-gray-500 text-sm">
                        {billingCycle === "monthly" ? "/mo" : "/yr"}
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`block w-full py-2.5 px-4 rounded-md text-center text-sm font-medium cursor-not-allowed opacity-60 ${
                      plan.highlight ? "bg-primary text-white" : "bg-primary/10 text-primary"
                    }`}
                  >
                    Coming Soon
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-xl font-bold text-primary mb-4">Add-ons</h3>
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {beamAddons.map((addon, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-gray-700">{addon.name}</td>
                      <td className="px-4 py-3 text-right font-medium text-primary">{addon.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SoFoWo bundle discounts */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-2">SoFoWo Bundle Discount</h3>
            <p className="text-gray-600 text-sm mb-4">
              Already on a SoFoWo plan? Get BeamFoWo at a reduced rate.
            </p>
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/5">
                    <th className="px-4 py-3 text-left font-semibold text-primary">SoFoWo Plan</th>
                    <th className="px-4 py-3 text-left font-semibold text-primary">BeamFoWo Discount</th>
                  </tr>
                </thead>
                <tbody>
                  {sofowoBundles.map((bundle, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-700">{bundle.sofowoTier}</td>
                      <td className="px-4 py-3 text-gray-600">{bundle.beamDiscount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          Language Solutions — TraByHum & TraByAge
      ══════════════════════════════════════════════════════════════ */}
      <section id="language-solutions" className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge badge-primary mb-3">Language Solutions</div>
            <h2 className="section-title">Language Solutions — TraByHum &amp; TraByAge</h2>
            <p className="section-subtitle">
              Two paths: professional human expertise or agent-powered speed.
            </p>
            <div className="mt-4 bg-primary/5 rounded-lg p-4 text-sm text-gray-600 text-left max-w-2xl mx-auto">
              Both TraByHum and TraByAge offer subscription plans with capacity bundles. Unused capacity rolls over for
              a maximum of one month, after which it expires. Additional capacity above your bundle is billed
              separately. Subscription pricing will be published when our payment infrastructure goes live.
            </div>
          </div>

          {/* TraByHum subsection */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="badge badge-secondary">TraByHum</div>
              <h3 className="text-2xl font-bold text-primary">Translation By Humans</h3>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Minimum order: $45.{" "}
              <Link href="/contact" className="text-primary underline hover:no-underline">
                Contact us
              </Link>{" "}
              for custom quotes on large projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* a) Written Translation */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Written Translation</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2.5 text-gray-700">General translation</td>
                    <td className="py-2.5 text-right font-medium text-primary">$0.155/word</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-gray-700">Technical / specialized</td>
                    <td className="py-2.5 text-right font-medium text-primary">$0.235/word</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-gray-700">Proofreading / editing</td>
                    <td className="py-2.5 text-right font-medium text-primary">$0.075/word</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-gray-700">Rush (&lt; 48 h)</td>
                    <td className="py-2.5 text-right font-medium text-primary">standard + 50%</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-500 mt-4">
                10,000+ words?{" "}
                <Link href="/contact" className="text-primary underline hover:no-underline">
                  Request a custom quote.
                </Link>
              </p>
            </div>

            {/* b) Subtitling — Creating New Subtitles */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                Subtitling — Creating New Subtitles
              </h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2.5 text-gray-700">Same-language subtitling</td>
                    <td className="py-2.5 text-right font-medium text-primary">$5.50/min</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-gray-700">Same-language, technical audio</td>
                    <td className="py-2.5 text-right font-medium text-primary">$7.50/min</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-gray-700">Direct foreign, common pairs</td>
                    <td className="py-2.5 text-right font-medium text-primary">$10.90/min</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-gray-700">Direct foreign, less common pairs</td>
                    <td className="py-2.5 text-right font-medium text-primary">$14.90/min</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-gray-700">Rush</td>
                    <td className="py-2.5 text-right font-medium text-primary">standard + 50%</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-gray-700">Hard-coding (burn-in)</td>
                    <td className="py-2.5 text-right font-medium text-primary">$1.50/min</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-500 italic mt-4">
                Direct foreign subtitling: audio transcribed and translated in one step. Faster and
                more affordable when no source-language file is needed.
              </p>
            </div>

            {/* c) Subtitle Translation */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                Subtitle Translation — Translating an Existing File
              </h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2.5 text-gray-700">Common language pairs</td>
                    <td className="py-2.5 text-right font-medium text-primary">$7.90/min</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-gray-700">Less common pairs</td>
                    <td className="py-2.5 text-right font-medium text-primary">$11.90/min</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-gray-700">Rush</td>
                    <td className="py-2.5 text-right font-medium text-primary">standard + 50%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* d) Subtitle Review & QC */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                Subtitle Review &amp; Quality Control
              </h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2.5 text-gray-700">Linguistic review</td>
                    <td className="py-2.5 text-right font-medium text-primary">$2.90/min</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-gray-700">Full QC</td>
                    <td className="py-2.5 text-right font-medium text-primary">$4.50/min</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-gray-700">Machine subtitle correction</td>
                    <td className="py-2.5 text-right font-medium text-primary">$5.50/min</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/contact" className="btn btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* TraByAge subsection */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="badge badge-secondary">TraByAge</div>
              <h3 className="text-2xl font-bold text-primary">Translation By Agents</h3>
              <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                Coming Soon
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-6 max-w-2xl">
              Agent-powered language services at significantly lower per-unit rates. Exact pricing will be published at
              launch. The same service types as TraByHum are available via agents: translation, proofreading, editing,
              subtitling, transcription, copywriting, and annotation.
            </p>
            <div className="bg-primary/5 rounded-lg p-6 max-w-2xl">
              <p className="text-sm text-gray-600 italic">
                TraByAge pricing is still being determined. Join the waitlist to be notified when rates are published.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          Payment & Billing
      ══════════════════════════════════════════════════════════════ */}
      <section id="payment" className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="badge badge-secondary mb-3">Payment &amp; Billing</div>
            <h2 className="section-title">How Billing Works</h2>
            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 md:p-8 space-y-4 text-gray-600">
              <p>
                All digital product purchases and subscriptions are processed by our authorized
                Merchant of Record (MoR). Our MoR handles payment processing, invoicing, VAT, and
                sales tax compliance worldwide. The MoR appears as the seller on your invoice.
              </p>
              <p>
                Our current Merchant of Record:{" "}
                {paymentProviderUrl ? (
                  <a
                    href={paymentProviderUrl}
                    className="text-primary underline hover:no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {paymentProviderName}
                  </a>
                ) : (
                  <span className="font-medium text-primary">{paymentProviderName}</span>
                )}
              </p>
              <p>
                For billing support, contact our MoR directly or reach us at{" "}
                <a
                  href="mailto:support@nofonex.com"
                  className="text-primary underline hover:no-underline"
                >
                  support@nofonex.com
                </a>
                .
              </p>
              <p>Accepted payment methods are shown at checkout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge badge-secondary mb-2">Questions</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find answers to common questions about our pricing and plans.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
