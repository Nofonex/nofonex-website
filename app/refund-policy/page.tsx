import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund policy for Nofonex digital subscriptions and services — SoFoWo, BeamFoWo, TraByHum, and Magaxines.",
}

export default function RefundPolicyPage() {
  const refundDate = process.env.NEXT_PUBLIC_REFUND_POLICY_DATE ?? "April 2026"

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center max-w-3xl mx-auto">
            <h1>Refund Policy</h1>
            <p className="text-xl text-gray-600">
              We want you to be satisfied with every Nofonex product. Here is how refunds work.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="legal-container">
            <p className="legal-date">Last updated: {refundDate}</p>

            {/* 1 */}
            <div className="legal-section">
              <h2>1. Merchant of Record</h2>
              <p>
                All refund requests for digital subscriptions and products are handled by our authorized
                Merchant of Record (MoR), identified on our{" "}
                <Link href="/pricing#payment" className="text-primary hover:underline">
                  Pricing page
                </Link>
                . The MoR is the seller of record and is responsible for processing refunds on our behalf.
              </p>
              <p className="mt-3">
                For direct MoR support, see the contact details on your purchase receipt or our{" "}
                <Link href="/pricing#payment" className="text-primary hover:underline">
                  Pricing page
                </Link>
                .
              </p>
            </div>

            {/* 2 */}
            <div className="legal-section">
              <h2>2. Subscriptions (SoFoWo, BeamFoWo, Magaxines)</h2>

              {/* 30-day guarantee highlight */}
              <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-green-800 text-lg leading-snug">
                    30-day money-back guarantee
                  </p>
                  <p className="text-green-700 text-sm mt-1">New subscribers only.</p>
                </div>
              </div>

              <p>
                If you are unsatisfied for any reason, contact us within 30 days of your initial
                subscription payment for a full refund, no questions asked. Applies to your first payment
                on a given product — both monthly and annual plans.
              </p>

              <h3 className="mt-6">Renewals and subsequent payments</h3>
              <p>We do not issue refunds for renewal payments except:</p>
              <ul>
                <li>Where required by law (e.g. EU right of withdrawal)</li>
                <li>When charged after cancellation due to a technical error on our part</li>
              </ul>

              <h3 className="mt-4">Annual plans</h3>
              <p>
                No pro-rated refunds for unused months after 30 days. Access continues until the end of
                the paid annual period.
              </p>

              <p className="mt-4 text-sm text-gray-600 italic">
                Refunds are issued in the original amount paid.
              </p>
            </div>

            {/* 3 */}
            <div className="legal-section">
              <h2>3. Translation Services (TraByHum)</h2>

              <div className="overflow-x-auto mt-4 rounded-lg border border-gray-200">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900 whitespace-nowrap">
                        Situation
                      </th>
                      <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                        Outcome
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-gray-200 px-4 py-3 whitespace-nowrap align-top">
                        Project not yet started
                      </td>
                      <td className="border-b border-gray-200 px-4 py-3 align-top">Full refund</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border-b border-gray-200 px-4 py-3 whitespace-nowrap align-top">
                        Project in progress
                      </td>
                      <td className="border-b border-gray-200 px-4 py-3 align-top">
                        Refund for uncompleted portion
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 px-4 py-3 whitespace-nowrap align-top">
                        Project delivered and accepted
                      </td>
                      <td className="border-b border-gray-200 px-4 py-3 align-top">No refund</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 align-top">
                        Quality dispute
                        <span className="block text-xs text-gray-500 mt-0.5">
                          (translation does not meet agreed specifications)
                        </span>
                      </td>
                      <td className="px-4 py-3 align-top">
                        Free revision or partial refund, at our discretion after review
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                To request a refund or raise a quality dispute, email{" "}
                <a href="mailto:support@nofonex.com" className="text-primary hover:underline">
                  support@nofonex.com
                </a>{" "}
                within 14 days of delivery.
              </p>
            </div>

            {/* 4 */}
            <div className="legal-section">
              <h2>4. Digital Publications (Magaxines, Tov Ro&apos;eh e-books)</h2>
              <p>
                <strong>EU/EEA consumers:</strong> right to withdraw within 14 days, unless you have
                started downloading or streaming and explicitly waived this right at checkout.
              </p>
              <p className="mt-3">
                <strong>All other customers:</strong> no refunds on individual digital publications once
                access has been granted, except in cases of technical failure on our part.
              </p>
            </div>

            {/* 5 */}
            <div className="legal-section">
              <h2>5. How to Request a Refund</h2>
              <ol className="list-none space-y-4 mt-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                    1
                  </span>
                  <span>
                    Email{" "}
                    <a href="mailto:support@nofonex.com" className="text-primary hover:underline">
                      support@nofonex.com
                    </a>{" "}
                    with subject line:{" "}
                    <strong>&quot;Refund Request — [Product Name]&quot;</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                    2
                  </span>
                  <span>
                    Include your order ID (found in your purchase receipt) and a brief description of your
                    request.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                    3
                  </span>
                  <span>
                    Eligible refunds are processed within 5–10 business days to your original payment
                    method.
                  </span>
                </li>
              </ol>
              <p className="mt-4">
                To escalate, contact our Merchant of Record directly — details on your receipt and on our{" "}
                <Link href="/pricing#payment" className="text-primary hover:underline">
                  Pricing page
                </Link>
                .
              </p>
            </div>

            {/* 6 */}
            <div className="legal-section">
              <h2>6. Exceptions</h2>
              <p>Refunds will not be issued for:</p>
              <ul>
                <li>Accounts terminated for Terms of Service violations</li>
                <li>Requests submitted outside applicable time windows</li>
                <li>Dissatisfaction with product direction or roadmap</li>
              </ul>
            </div>

            <div className="legal-contact">
              <h3>Contact</h3>
              <p>
                Email:{" "}
                <a href="mailto:support@nofonex.com" className="text-primary hover:underline">
                  support@nofonex.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
