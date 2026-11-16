"use client"

import Link from "next/link"

// ── SoFoWo ────────────────────────────────────────────────────────────────────
// SoFoWo is in a free, invitation-only beta. Prices below follow BL-018 and
// projects/sofowo/plannen-en-prijzen.md (Nofonex/nofonex-ecosystem); they apply once paid plans start.
// Nothing is sold on nofonex.com: every button goes to the app, where checkout happens (decision 2026-11-11).
// Check the amounts against BL-018 before each change. Not shown yet: module Note and music school (not built).

const SOFOWO_APP_URL = "https://sofowo.app"

const sofowoPlans: { name: string; audience: string; price: string; priceNote: string; points: string[]; highlight: boolean }[] = [
  {
    name: "Free",
    audience: "For everyone",
    price: "€0",
    priceNote: "forever",
    points: ["Basic songbook", "Works offline", "Your own setlists"],
    highlight: false,
  },
  {
    name: "Creator",
    audience: "For individual songwriters",
    price: "€4",
    priceNote: "per month, or €36 per year",
    points: ["Per person"],
    highlight: false,
  },
  {
    name: "Team",
    audience: "For worship teams and bands",
    price: "€9",
    priceNote: "per month, including the first 5 members",
    points: [
      "+ €2.50 per month for each extra block of 5 members",
      "The team owner pays; members do not",
      "Example: a team of 10 pays €11.50 per month",
    ],
    highlight: true,
  },
]

// ── Page component ────────────────────────────────────────────────────────────

export default function PricingPage() {
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

      {/* ══════════════════════════════════════════════════════════════
          SoFoWo — Songbook For Worshippers (free beta)
      ══════════════════════════════════════════════════════════════ */}
      <section id="sofowo" className="py-16 md:py-24 scroll-mt-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="badge badge-primary">SoFoWo</div>
              <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                Beta
              </span>
            </div>
            <h2 className="section-title">Songbook For Worshippers</h2>
            <p className="section-subtitle">Songbook and setlists for worship teams.</p>
          </div>

          <div className="max-w-3xl mx-auto mb-10 rounded-lg bg-amber-50 border border-amber-200 p-4 text-center text-sm text-amber-900">
            <strong>SoFoWo is free during the beta.</strong> The prices below apply once paid plans start. The beta is by
            invitation.
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sofowoPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg bg-white p-6 flex flex-col ${
                  plan.highlight ? "border-2 border-primary shadow-lg" : "border border-gray-200 shadow-md"
                }`}
              >
                <h3 className="text-xl font-bold text-primary">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.audience}</p>
                <p className="mb-1">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                </p>
                <p className="text-sm text-gray-500 mb-4">{plan.priceNote}</p>
                <ul className="space-y-2 text-sm text-gray-600 flex-1">
                  {plan.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-primary" aria-hidden="true">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-8 text-center space-y-4">
            <p className="text-sm text-gray-500">
              Prices in euros. They are adjusted to purchasing power per country, based on your billing country. You
              pay in the app, never on this website.
            </p>
            <a
              href={SOFOWO_APP_URL}
              className="inline-block py-2.5 px-5 rounded-md text-sm font-medium bg-primary text-white hover:bg-primary-dark"
            >
              Request beta access
            </a>
            <p className="text-sm">
              <Link href="/sofowo" className="text-primary hover:underline">
                What SoFoWo does →
              </Link>
            </p>
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
    </>
  )
}
