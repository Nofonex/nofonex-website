"use client"

import Link from "next/link"

// ── SoFoWo ────────────────────────────────────────────────────────────────────
// SoFoWo is in a free, invitation-only beta. No plans are sold on nofonex.com:
// the plan model (BL-018) goes live only after payment round B3, and checkout happens in the app.

const SOFOWO_APP_URL = "https://sofowo.app"

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

          <div className="max-w-xl mx-auto rounded-lg border-2 border-primary shadow-lg bg-white p-6 md:p-8 text-center">
            <h3 className="text-xl font-bold text-primary mb-2">Free during the beta</h3>
            <p className="text-gray-600 text-sm mb-6">
              The beta is by invitation and costs nothing. There are no paid plans yet.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={SOFOWO_APP_URL}
                className="py-2.5 px-5 rounded-md text-sm font-medium bg-primary text-white hover:bg-primary-dark"
              >
                Request beta access
              </a>
            </div>
            <p className="mt-4 text-sm">
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
