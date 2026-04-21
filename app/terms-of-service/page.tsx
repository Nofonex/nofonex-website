import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Nofonex digital products and services — SoFoWo, BeamFoWo, TraByHum, and Magaxines.",
}

export default function TermsOfServicePage() {
  const termsDate = process.env.NEXT_PUBLIC_TERMS_DATE ?? "April 2026"
  const paymentProvider =
    process.env.NEXT_PUBLIC_PAYMENT_PROVIDER_NAME ?? "our payment provider"

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center max-w-3xl mx-auto">
            <h1>Terms of Service</h1>
            <p className="text-xl text-gray-600">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container">
          <div className="legal-container">
            <p className="legal-date">Last updated: {termsDate}</p>

            {/* 1 */}
            <div className="legal-section">
              <h2>1. Parties and Scope</h2>
              <p>
                These Terms of Service ("Terms") govern your use of the digital products and services offered
                by Nofonex, operated by Xenofon Martokarijo, Paramaribo, Suriname ("Nofonex", "we", "us").
              </p>
              <p className="mt-3">
                <strong>Products covered:</strong> SoFoWo, BeamFoWo, TraByHum, Magaxines, and any other
                Nofonex service linking to these Terms.
              </p>
              <blockquote className="mt-4 border-l-4 border-primary pl-4 italic text-gray-700">
                By creating an account or placing an order, you agree to these Terms.
              </blockquote>
            </div>

            {/* 2 */}
            <div className="legal-section">
              <h2>2. Merchant of Record</h2>
              <p>
                Purchases of digital subscriptions and products are processed by our authorized Merchant of
                Record ("MoR"), identified on our{" "}
                <Link href="/pricing#payment" className="text-primary hover:underline">
                  Pricing page
                </Link>
                . The MoR is the seller of record: it handles payment processing and is responsible for
                collecting and remitting VAT and sales taxes worldwide.
              </p>
              <p className="mt-3">
                By purchasing, you also agree to the MoR's terms of service and privacy policy, linked on
                the checkout page and on our Pricing page.
              </p>
              <p className="mt-3">
                For billing disputes or chargebacks, you may contact the MoR directly. Their contact details
                are in your purchase receipt and on our Pricing page.
              </p>
            </div>

            {/* 3 */}
            <div className="legal-section">
              <h2>3. Accounts</h2>
              <p>
                Accurate registration information is required. You are responsible for securing your
                credentials. Notify{" "}
                <a href="mailto:support@nofonex.com" className="text-primary hover:underline">
                  support@nofonex.com
                </a>{" "}
                immediately of any suspected unauthorized access.
              </p>
              <p className="mt-3">
                <strong>Account sharing:</strong> one person per account unless the subscription tier
                explicitly permits it.
              </p>
            </div>

            {/* 4 */}
            <div className="legal-section">
              <h2>4. Subscriptions and Billing</h2>
              <ul>
                <li>
                  <strong>Billing:</strong> monthly or annual in advance, as selected at checkout.
                </li>
                <li>
                  <strong>Renewal:</strong> automatic unless cancelled before the next renewal date.
                  Cancellation takes effect at the end of the current paid period.
                </li>
                <li>
                  <strong>Price changes:</strong> 30 days&apos; notice before any increase on active
                  subscriptions. Continued use after the effective date constitutes acceptance.
                </li>
                <li>
                  <strong>Failed payments:</strong> {paymentProvider} retries automatically. After repeated
                  failures, the subscription may be suspended. An email notification will be sent.
                </li>
              </ul>
            </div>

            {/* 5 */}
            <div className="legal-section">
              <h2>5. Acceptable Use</h2>
              <p>The following are prohibited:</p>
              <ul>
                <li>Unlawful use of our services</li>
                <li>Reverse-engineering or decompiling any part of the platform</li>
                <li>Uploading content without the necessary rights</li>
                <li>Automated access that disrupts normal operation</li>
                <li>
                  Sharing credentials with third parties (unless permitted by your subscription tier)
                </li>
                <li>Infringing the copyright or intellectual property rights of others</li>
              </ul>
              <blockquote className="mt-4 border-l-4 border-primary pl-4 italic text-gray-700">
                <strong>SoFoWo CCLI notice:</strong> SoFoWo is not a CCLI licensing service. You are solely
                responsible for ensuring compliance with applicable song copyright licenses in your
                jurisdiction.
              </blockquote>
            </div>

            {/* 6 */}
            <div className="legal-section">
              <h2>6. Content and Intellectual Property</h2>
              <p>
                <strong>Your content:</strong> you retain ownership. Submitting content grants Nofonex a
                non-exclusive, worldwide, royalty-free license to store and display it for service delivery
                only. This license ends when the content is deleted or the account is closed.
              </p>
              <blockquote className="mt-4 border-l-4 border-primary pl-4 italic text-gray-700">
                Song submitters retain perpetual access to their own submitted songs — this right is
                non-negotiable and does not expire.
              </blockquote>
              <p className="mt-4">
                <strong>Our content:</strong> the platform, branding, code, and design are Nofonex property.
                No reproduction or derivative works without written permission.
              </p>
            </div>

            {/* 7 */}
            <div className="legal-section">
              <h2>7. Translation Services (TraByHum)</h2>
              <ul>
                <li>
                  All translations are performed by human translators. AI is never used to generate
                  translations.
                </li>
                <li>Delivery times are estimates.</li>
                <li>Ownership of translated content transfers to you upon full payment.</li>
                <li>You warrant that you have the right to have the source material translated.</li>
              </ul>
            </div>

            {/* 8 */}
            <div className="legal-section">
              <h2>8. Availability and Support</h2>
              <p>
                We aim for high availability but do not guarantee uninterrupted access. Where possible,
                maintenance is scheduled with prior notice. For support, contact{" "}
                <a href="mailto:support@nofonex.com" className="text-primary hover:underline">
                  support@nofonex.com
                </a>
                . Response times depend on your subscription tier.
              </p>
            </div>

            {/* 9 */}
            <div className="legal-section">
              <h2>9. Limitation of Liability</h2>
              <ul>
                <li>Nofonex is not liable for indirect, incidental, consequential, or punitive damages.</li>
                <li>
                  Total liability is capped at the amounts paid in the 12 months preceding the claim.
                </li>
                <li>
                  The service is provided &quot;as is&quot; without warranty of uninterrupted
                  availability.
                </li>
                <li>
                  Nothing in these Terms limits liability for fraud, death, or personal injury caused by
                  negligence.
                </li>
              </ul>
            </div>

            {/* 10 */}
            <div className="legal-section">
              <h2>10. Governing Law and Disputes</h2>
              <p>
                These Terms are governed by the laws of Suriname. EU consumers: mandatory consumer
                protection laws of your country of residence continue to apply.
              </p>
              <p className="mt-3">
                Please contact{" "}
                <a href="mailto:support@nofonex.com" className="text-primary hover:underline">
                  support@nofonex.com
                </a>{" "}
                first for informal resolution. If unresolved, disputes will be handled by the competent
                court in Paramaribo, Suriname, unless applicable law requires otherwise.
              </p>
            </div>

            {/* 11 */}
            <div className="legal-section">
              <h2>11. Changes to These Terms</h2>
              <p>
                We will give 30 days&apos; notice before making material changes. Continued use of our
                services after the effective date constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* 12 */}
            <div className="legal-contact">
              <h3>12. Contact</h3>
              <p>Nofonex — Xenofon Martokarijo · Paramaribo, Suriname</p>
              <p>
                Email:{" "}
                <a href="mailto:legal@nofonex.com" className="text-primary hover:underline">
                  legal@nofonex.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
