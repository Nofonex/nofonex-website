import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Nofonex collects, uses, and protects your personal data.",
}

export default function PrivacyPolicyPage() {
  const lastUpdated = process.env.NEXT_PUBLIC_PRIVACY_POLICY_DATE || "April 2026"

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center max-w-3xl mx-auto">
            <h1>Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              How we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="legal-container">
            <p className="legal-date">Last updated: {lastUpdated}</p>

            {/* 1. Who We Are */}
            <div className="legal-section">
              <h2>1. Who We Are</h2>
              <p>
                Nofonex (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a digital production house
                operated by <strong>Xenofon Martokarijo</strong>, based in Paramaribo, Suriname. We build digital
                products and services for global audiences.
              </p>
              <p className="mt-2">
                Contact:{" "}
                <a href="mailto:privacy@nofonex.com" className="text-primary hover:underline">
                  privacy@nofonex.com
                </a>{" "}
                &middot;{" "}
                <span className="text-primary">nofonex.com</span>
              </p>
              <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-gray-700">
                <strong>For SoFoWo and BeamFoWo users:</strong> Payment data is processed independently by our
                Merchant of Record (named on our{" "}
                <Link href="/pricing#payment" className="text-primary hover:underline font-medium">
                  Pricing page
                </Link>
                ) under their own privacy policy.
              </div>
            </div>

            {/* 2. What Data We Collect */}
            <div className="legal-section">
              <h2>2. What Data We Collect</h2>
              <p className="text-gray-600 mb-5">We collect only what is necessary to operate our services.</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <h3 className="text-base font-semibold text-primary mb-2">Account data</h3>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li>Email address</li>
                    <li>Display name (optional)</li>
                    <li>Hashed password</li>
                    <li>Organization name (Church tier only)</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <h3 className="text-base font-semibold text-primary mb-2">Usage data</h3>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li>Features used</li>
                    <li>App logs and error reports</li>
                    <li>Device and browser type (anonymized)</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <h3 className="text-base font-semibold text-primary mb-2">Payment data</h3>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li>
                      We do <strong>not</strong> store card details
                    </li>
                    <li>Transaction confirmation (from our Merchant of Record)</li>
                    <li>Subscription status</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <h3 className="text-base font-semibold text-primary mb-2">Communication data</h3>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li>Support emails and quote requests</li>
                    <li>Translation project data (source &amp; translated texts)</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">
                    Translation data retained 12 months for QA, then deleted.
                  </p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="text-base font-semibold text-primary mb-2">Cookies</h3>
                <p className="text-sm text-gray-700">
                  Session cookies only — required for authentication. We do <strong>not</strong> use advertising or
                  tracking cookies.
                </p>
              </div>
            </div>

            {/* 3. How We Use Your Data */}
            <div className="legal-section">
              <h2>3. How We Use Your Data</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border-b border-gray-200 p-3 text-left font-semibold text-gray-800 whitespace-nowrap">
                        Purpose
                      </th>
                      <th className="border-b border-gray-200 p-3 text-left font-semibold text-gray-800 whitespace-nowrap">
                        Legal basis
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["Provide and operate the service", "Contract performance"],
                      ["Account authentication and security", "Contract performance / legitimate interest"],
                      ["Process payments (via our MoR)", "Contract performance"],
                      ["Send transactional emails", "Contract performance"],
                      ["Service announcements (downtime, major updates)", "Legitimate interest"],
                      ["Respond to support requests", "Legitimate interest"],
                      ["Improve service using aggregated usage data", "Legitimate interest"],
                      ["Comply with legal obligations", "Legal obligation"],
                    ].map(([purpose, basis]) => (
                      <tr key={purpose} className="hover:bg-gray-50">
                        <td className="p-3 text-gray-700">{purpose}</td>
                        <td className="p-3 text-gray-600">{basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm font-medium text-gray-700">
                We do not sell your personal data. We do not use your data for advertising.
              </p>
            </div>

            {/* 4. Who We Share Data With */}
            <div className="legal-section">
              <h2>4. Who We Share Data With</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border-b border-gray-200 p-3 text-left font-semibold text-gray-800 whitespace-nowrap">
                        Recipient
                      </th>
                      <th className="border-b border-gray-200 p-3 text-left font-semibold text-gray-800 whitespace-nowrap">
                        Purpose
                      </th>
                      <th className="border-b border-gray-200 p-3 text-left font-semibold text-gray-800 whitespace-nowrap">
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 text-gray-700">
                        Our Merchant of Record
                        <span className="block text-xs text-gray-500">
                          (named on{" "}
                          <Link href="/pricing#payment" className="text-primary hover:underline">
                            Pricing page
                          </Link>
                          )
                        </span>
                      </td>
                      <td className="p-3 text-gray-700">Payment processing, VAT/sales tax, subscriptions</td>
                      <td className="p-3 text-gray-600">See MoR privacy policy</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 text-gray-700">Supabase Inc.</td>
                      <td className="p-3 text-gray-700">Database hosting, authentication</td>
                      <td className="p-3 text-gray-600">US (EU data regions available)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 text-gray-700">Vercel Inc.</td>
                      <td className="p-3 text-gray-700">Application hosting</td>
                      <td className="p-3 text-gray-600">US / edge</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 text-gray-700">Google LLC</td>
                      <td className="p-3 text-gray-700">OAuth authentication (if signing in with Google)</td>
                      <td className="p-3 text-gray-600">US</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 text-gray-700">Sentry (Functional Software Inc.)</td>
                      <td className="p-3 text-gray-700">Error monitoring</td>
                      <td className="p-3 text-gray-600">US</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>
                  All third-party processors are bound by data processing agreements. Transfers outside the EEA are
                  covered by Standard Contractual Clauses or equivalent safeguards.
                </p>
                <p>
                  Our Merchant of Record processes payment data independently under their own privacy policy, linked on
                  our{" "}
                  <Link href="/pricing#payment" className="text-primary hover:underline">
                    Pricing page
                  </Link>{" "}
                  and in your purchase confirmation email.
                </p>
              </div>
            </div>

            {/* 5. Data Retention */}
            <div className="legal-section">
              <h2>5. Data Retention</h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  ["Account data", "Duration of account + 30 days after deletion"],
                  ["Translation project data", "12 months from project completion"],
                  ["Support communications", "3 years"],
                  ["Backup and audit logs", "Up to 12 months"],
                ].map(([label, period]) => (
                  <li key={label} className="flex flex-wrap gap-x-2 gap-y-0.5">
                    <span className="font-medium text-primary">{label}</span>
                    <span className="text-gray-400">&mdash;</span>
                    <span>{period}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. Your Rights */}
            <div className="legal-section">
              <h2>6. Your Rights (GDPR / International)</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Access",
                  "Correct",
                  "Delete (right to be forgotten)",
                  "Export (data portability)",
                  "Restrict or object",
                  "Withdraw consent",
                ].map((right) => (
                  <span
                    key={right}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium"
                  >
                    {right}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-2">
                To exercise any right, email{" "}
                <a href="mailto:privacy@nofonex.com" className="text-primary hover:underline">
                  privacy@nofonex.com
                </a>
                . We respond within 30 days.
              </p>
              <p className="text-gray-700">
                EU/EEA residents may lodge a complaint with their local supervisory authority.
              </p>
            </div>

            {/* 7. Children */}
            <div className="legal-section">
              <h2>7. Children</h2>
              <p>
                Our services are not directed at children under 13. We do not knowingly collect personal data from
                children. Contact{" "}
                <a href="mailto:privacy@nofonex.com" className="text-primary hover:underline">
                  privacy@nofonex.com
                </a>{" "}
                if you believe a child has provided us with data.
              </p>
            </div>

            {/* 8. Changes to This Policy */}
            <div className="legal-section">
              <h2>8. Changes to This Policy</h2>
              <p>
                We will notify registered users by email at least 30 days before material changes. The updated policy
                is always available at{" "}
                <span className="text-primary font-medium">nofonex.com/privacy-policy</span>.
              </p>
            </div>

            <div className="legal-contact">
              <h3>Privacy Contact</h3>
              <p>
                For privacy-related questions or to exercise your rights, email{" "}
                <a href="mailto:privacy@nofonex.com" className="text-primary hover:underline">
                  privacy@nofonex.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
