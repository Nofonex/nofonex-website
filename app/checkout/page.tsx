"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowRight, Check, CreditCard, Landmark, Wallet } from "lucide-react"
import Link from "next/link"

// Define payment method types
type PaymentMethod = "crypto" | "bank" | "invoice" | null

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const planId = searchParams.get("plan")

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>(null)
  const [cryptoCurrency, setCryptoCurrency] = useState("bitcoin")
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle")

  // Get plan details based on planId
  const plan = getPlanDetails(planId)

  // Handle payment method selection
  const handlePaymentMethodSelect = (method: PaymentMethod) => {
    setSelectedPaymentMethod(method)
    setPaymentStatus("idle")
  }

  // Handle payment submission
  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setPaymentStatus("processing")

    if (selectedPaymentMethod === "crypto") {
      // In a real implementation, this would generate a payment address or connect to wallet
      setTimeout(() => {
        setPaymentStatus("success")
      }, 2000)
    } else {
      // For bank transfers and invoices, we'll just show success immediately
      // In a real implementation, this would generate an invoice or bank details
      setPaymentStatus("success")
    }
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Complete Your Purchase</h1>

          {/* Plan Summary */}
          {plan && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
              <h2 className="text-xl font-semibold text-primary mb-4">Order Summary</h2>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-medium text-gray-800">{plan.name} Plan</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-primary">{plan.price}</div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between font-medium">
                  <span>Total Due Today</span>
                  <span className="text-primary">{plan.price}</span>
                </div>
              </div>
            </div>
          )}

          {/* Payment Method Selection */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
            <h2 className="text-xl font-semibold text-primary mb-4">Select Payment Method</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Crypto Payment Option */}
              <button
                className={`p-4 border rounded-lg flex flex-col items-center justify-center text-center h-32 transition-all ${
                  selectedPaymentMethod === "crypto"
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-primary/50"
                }`}
                onClick={() => handlePaymentMethodSelect("crypto")}
              >
                <Wallet
                  className={`h-8 w-8 mb-2 ${selectedPaymentMethod === "crypto" ? "text-primary" : "text-gray-500"}`}
                />
                <div className={`font-medium ${selectedPaymentMethod === "crypto" ? "text-primary" : "text-gray-700"}`}>
                  Cryptocurrency
                </div>
                <div className="text-xs text-gray-500 mt-1">Pay with Bitcoin, Ethereum, etc.</div>
              </button>

              {/* Bank Transfer Option */}
              <button
                className={`p-4 border rounded-lg flex flex-col items-center justify-center text-center h-32 transition-all ${
                  selectedPaymentMethod === "bank"
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-primary/50"
                }`}
                onClick={() => handlePaymentMethodSelect("bank")}
              >
                <Landmark
                  className={`h-8 w-8 mb-2 ${selectedPaymentMethod === "bank" ? "text-primary" : "text-gray-500"}`}
                />
                <div className={`font-medium ${selectedPaymentMethod === "bank" ? "text-primary" : "text-gray-700"}`}>
                  Bank Transfer
                </div>
                <div className="text-xs text-gray-500 mt-1">Manual bank transfer</div>
              </button>

              {/* Invoice Option */}
              <button
                className={`p-4 border rounded-lg flex flex-col items-center justify-center text-center h-32 transition-all ${
                  selectedPaymentMethod === "invoice"
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-primary/50"
                }`}
                onClick={() => handlePaymentMethodSelect("invoice")}
              >
                <CreditCard
                  className={`h-8 w-8 mb-2 ${selectedPaymentMethod === "invoice" ? "text-primary" : "text-gray-500"}`}
                />
                <div
                  className={`font-medium ${selectedPaymentMethod === "invoice" ? "text-primary" : "text-gray-700"}`}
                >
                  Request Invoice
                </div>
                <div className="text-xs text-gray-500 mt-1">Pay via PayPal or credit card</div>
              </button>
            </div>

            {/* Crypto Payment Form */}
            {selectedPaymentMethod === "crypto" && (
              <div className="border-t border-gray-200 pt-6 mt-2">
                <h3 className="font-medium text-gray-800 mb-4">Select Cryptocurrency</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {["bitcoin", "ethereum", "usdc", "usdt"].map((crypto) => (
                    <button
                      key={crypto}
                      className={`p-3 border rounded-md flex items-center justify-center transition-all ${
                        cryptoCurrency === crypto
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-primary/50"
                      }`}
                      onClick={() => setCryptoCurrency(crypto)}
                    >
                      <img
                        src={`/abstract-geometric-shapes.png?height=24&width=24&query=${crypto} logo`}
                        alt={crypto}
                        className="h-6 w-6 mr-2"
                      />
                      <span className="capitalize">{crypto}</span>
                    </button>
                  ))}
                </div>

                {paymentStatus === "idle" && (
                  <div className="text-center p-6 border border-dashed border-gray-300 rounded-lg">
                    <p className="text-gray-600 mb-4">
                      Click "Continue to Payment" to generate a payment address or connect your Web3 wallet.
                    </p>
                    <button onClick={handlePaymentSubmit} className="btn btn-primary">
                      Continue to Payment
                    </button>
                  </div>
                )}

                {paymentStatus === "processing" && (
                  <div className="text-center p-6 border border-dashed border-gray-300 rounded-lg">
                    <div className="animate-pulse flex flex-col items-center">
                      <div className="h-12 w-12 bg-primary/20 rounded-full mb-4"></div>
                      <div className="h-4 w-48 bg-primary/20 rounded mb-2"></div>
                      <div className="h-3 w-32 bg-primary/10 rounded"></div>
                    </div>
                  </div>
                )}

                {paymentStatus === "success" && (
                  <div className="text-center p-6 border border-dashed border-green-300 rounded-lg bg-green-50">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
                      <Check className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-green-800 mb-2">Payment Instructions Sent!</h3>
                    <p className="text-green-700 mb-4">
                      We've sent detailed payment instructions to your email. Please follow them to complete your
                      purchase.
                    </p>
                    <Link href="/dashboard" className="btn bg-green-600 hover:bg-green-700 text-white">
                      Go to Dashboard
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Bank Transfer Form */}
            {selectedPaymentMethod === "bank" && (
              <div className="border-t border-gray-200 pt-6 mt-2">
                <div className="text-center p-6 border border-dashed border-gray-300 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Bank Transfer Details</h3>
                  <p className="text-gray-600 mb-4">
                    Click below to receive our bank details. Please include your name and plan in the transfer
                    description.
                  </p>
                  <button onClick={handlePaymentSubmit} className="btn btn-primary">
                    Send Bank Details
                  </button>
                </div>

                {paymentStatus === "success" && (
                  <div className="text-center p-6 border border-dashed border-green-300 rounded-lg bg-green-50 mt-4">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
                      <Check className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-green-800 mb-2">Bank Details Sent!</h3>
                    <p className="text-green-700 mb-4">
                      We've sent our bank details to your email. Please complete the transfer to activate your
                      subscription.
                    </p>
                    <Link href="/dashboard" className="btn bg-green-600 hover:bg-green-700 text-white">
                      Go to Dashboard
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Invoice Form */}
            {selectedPaymentMethod === "invoice" && (
              <div className="border-t border-gray-200 pt-6 mt-2">
                <div className="text-center p-6 border border-dashed border-gray-300 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Request an Invoice</h3>
                  <p className="text-gray-600 mb-4">
                    We'll send you an invoice that you can pay via PayPal or credit card.
                  </p>
                  <button onClick={handlePaymentSubmit} className="btn btn-primary">
                    Request Invoice
                  </button>
                </div>

                {paymentStatus === "success" && (
                  <div className="text-center p-6 border border-dashed border-green-300 rounded-lg bg-green-50 mt-4">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
                      <Check className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-green-800 mb-2">Invoice Sent!</h3>
                    <p className="text-green-700 mb-4">
                      We've sent an invoice to your email. Please follow the payment instructions to activate your
                      subscription.
                    </p>
                    <Link href="/dashboard" className="btn bg-green-600 hover:bg-green-700 text-white">
                      Go to Dashboard
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Help Section */}
          <div className="bg-primary/5 rounded-lg p-6">
            <h3 className="font-medium text-primary mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about payment methods or need assistance, our team is here to help.
            </p>
            <Link href="/contact" className="text-primary hover:text-primary-dark font-medium flex items-center">
              Contact Support <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to get plan details
function getPlanDetails(planId: string | null) {
  const plans = {
    starter: {
      name: "Starter",
      description: "Perfect for small businesses and entrepreneurs",
      price: "$299",
    },
    professional: {
      name: "Professional",
      description: "Ideal for growing businesses with regular content needs",
      price: "$599",
    },
    enterprise: {
      name: "Enterprise",
      description: "Comprehensive solution for businesses with extensive needs",
      price: "$1,299",
    },
  }

  if (!planId || !plans[planId as keyof typeof plans]) {
    return plans.starter
  }

  return plans[planId as keyof typeof plans]
}
