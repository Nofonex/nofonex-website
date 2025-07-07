"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, HelpCircle } from "lucide-react"

// Pricing Plan Type
interface PricingPlan {
  id: string
  name: string
  description: string
  price: {
    monthly: string
    annual: string
  }
  features: string[]
  popular?: boolean
}

// Sample Pricing Plans
const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small businesses and entrepreneurs just starting their global journey.",
    price: {
      monthly: "$349",
      annual: "$299",
    },
    features: [
      "Up to 5,000 words of translation per month",
      "2 languages supported",
      "Basic content creation (1 blog post/month)",
      "Email support",
      "Standard delivery times",
      "Monthly usage reports",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    description: "Ideal for growing businesses with regular content and translation needs.",
    price: {
      monthly: "$939",
      annual: "$799",
    },
    features: [
      "Up to 15,000 words of translation per month",
      "5 languages supported",
      "Enhanced content creation (3 blog posts/month)",
      "Basic video subtitling (up to 30 minutes/month)",
      "Priority email and chat support",
      "Faster delivery times",
      "Comprehensive analytics dashboard" 
    ],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Comprehensive solution for businesses with extensive global communication needs.",
    price: {
      monthly: "$2,449",
      annual: "$2,099",
    },
    features: [
      "Up to 50,000 words of translation per month",
      "10+ languages supported",
      "Premium content creation (8 blog posts/month)",
      "Advanced video subtitling (up to 120 minutes/month)",
      "Interactive media production",
      "Realtime analytics",
    ],
  },
]

// FAQ Items
const faqItems = [
  {
    question: "Can I change plans at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "What happens if I exceed my monthly word limit?",
    answer:
      "If you exceed your monthly word limit, additional words will be billed at our standard per-word rate depending on the service you require. We'll always notify you before charging for overages.",
  },
  {
    question: "Do unused words roll over to the next month?",
    answer:
      "No, unused translation words and services do not roll over to the next month. Each billing cycle provides a fresh allocation.",
  },
  {
    question: "Can I customize a plan for my specific needs?",
    answer:
      "We offer custom plans for businesses with specific requirements. Contact our sales team to discuss your needs.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, bank transfers, and cryptocurrency payments. For annual plans, we can also arrange invoicing.",
  },
]

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Simple, Transparent Pricing</h1>
            <p className="text-lg text-gray-600">
              Choose the plan that fits your business needs and scale as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-8">
        <div className="container-custom">
          <div className="flex justify-center items-center space-x-4">
            <span className={`text-lg font-medium ${billingCycle === "monthly" ? "text-primary" : "text-gray-500"}`}>
              Monthly Billing
            </span>
            <button
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-300"
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  billingCycle === "annual" ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <div className="flex items-center">
              <span className={`text-lg font-medium ${billingCycle === "annual" ? "text-primary" : "text-gray-500"}`}>
                Annual Billing
              </span>
              <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                Save at least 14%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-lg shadow-lg overflow-hidden ${
                  plan.popular ? "border-2 border-primary" : "border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6 h-12">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">
                      {billingCycle === "monthly" ? plan.price.monthly : plan.price.annual}
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/get-started?plan=${plan.id}`}
                    className={`block w-full py-3 px-4 rounded-md text-center font-medium ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Plans */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge badge-secondary mb-2">Enterprise Solutions</div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Need a Custom Plan?</h2>
              <p className="text-gray-600 mb-6">
                We understand that every business has unique needs. Our team can create a tailored solution specifically for your organization.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Customized Service Packages</h3>
                    <p className="text-gray-600">Tailored combination of services based on your specific needs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Volume Discounts</h3>
                    <p className="text-gray-600">Special pricing for large-scale or ongoing projects</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Dedicated Support Team</h3>
                    <p className="text-gray-600">Assigned specialists who understand your business</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Custom Integration Options</h3>
                    <p className="text-gray-600">Connect our services with your existing workflows and systems</p>
                  </div>
                </li>
              </ul>
              <Link href="/contact-sales" className="btn btn-primary">
                Contact Sales
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Request a Custom Quote</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Your Company"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Requirements
                  </label>
                  <textarea
                    id="requirements"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Tell us about your specific needs and requirements..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn btn-primary">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge badge-secondary mb-2">À La Carte</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Additional Services</h2>
            <p className="text-gray-600">
              Need specific services outside of our standard plans? We offer individual services that can be purchased
              separately.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-3">Translation Services</h3>
              <p className="text-gray-600 mb-4">Professional translation by native speakers with subject expertise.</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-primary">$0.12 - $0.25</span>
                <span className="text-gray-500">per word</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-3">Content Creation</h3>
              <p className="text-gray-600 mb-4">
                Original content writing by experienced copywriters and content strategists.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-primary">$150 - $300</span>
                <span className="text-gray-500">per article</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-3">Video Subtitling</h3>
              <p className="text-gray-600 mb-4">
                Professional subtitling services for videos, including translation and synchronization.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-primary">$7 - $15</span>
                <span className="text-gray-500">per minute</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-3">Website Localization</h3>
              <p className="text-gray-600 mb-4">
                Complete website translation and cultural adaptation for international markets.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-primary">$500 - $2,000</span>
                <span className="text-gray-500">per language</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-3">Interactive Media Production</h3>
              <p className="text-gray-600 mb-4">
                Creation of interactive content experiences for engaging digital presentations.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-primary">$1,500 - $5,000</span>
                <span className="text-gray-500">per project</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-3">Expedited Services</h3>
              <p className="text-gray-600 mb-4">Rush delivery options for urgent projects with tight deadlines.</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-primary">+25% - 50%</span>
                <span className="text-gray-500">surcharge</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need more information about our additional services? Contact our sales team for detailed pricing.
            </p>
            <Link href="/contact-sales" className="btn btn-outline">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge badge-secondary mb-2">Questions</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about our pricing and plans.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
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

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Have more questions? Check out our complete FAQ section.</p>
              <Link href="/faq" className="btn btn-outline">
                View All FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Choose the plan that's right for your business and start connecting with global audiences today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-started" className="btn bg-secondary text-white hover:bg-secondary-dark">
                Get Started
              </Link>
              <Link href="/#contact" className="btn bg-white text-primary hover:bg-gray-100">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
