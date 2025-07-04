"use client"

import { useState, useEffect } from "react"
import { useWeb3 } from "../web3/web3-provider"
import { Copy, Check, Wallet } from "lucide-react"

interface CryptoPaymentProps {
  amount: string
  currency: string
  onPaymentComplete: () => void
}

export default function CryptoPayment({ amount, currency, onPaymentComplete }: CryptoPaymentProps) {
  const { account, connectWallet, isConnecting } = useWeb3()
  const [paymentAddress, setPaymentAddress] = useState("")
  const [paymentStatus, setPaymentStatus] = useState<"pending" | "processing" | "confirmed" | "failed">("pending")
  const [copied, setCopied] = useState(false)

  // Mock function to get payment address - in a real app, this would call your backend
  const getPaymentAddress = async () => {
    // Simulate API call to get a payment address
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        // This would be a real crypto address from your payment processor
        resolve("0x1234567890abcdef1234567890abcdef12345678")
      }, 1000)
    })
  }

  // Initialize payment when component mounts
  useEffect(() => {
    const initializePayment = async () => {
      const address = await getPaymentAddress()
      setPaymentAddress(address)
    }

    initializePayment()
  }, [])

  // Mock function to check payment status - in a real app, this would poll your backend
  useEffect(() => {
    if (!paymentAddress || paymentStatus !== "pending") return

    const checkInterval = setInterval(async () => {
      // Simulate checking payment status
      // In a real app, this would call your backend to check blockchain confirmations
      const random = Math.random()

      if (random < 0.2) {
        setPaymentStatus("processing")

        // Simulate confirmation after some time
        setTimeout(() => {
          setPaymentStatus("confirmed")
          onPaymentComplete()
        }, 5000)

        clearInterval(checkInterval)
      }
    }, 3000)

    return () => clearInterval(checkInterval)
  }, [paymentAddress, paymentStatus, onPaymentComplete])

  // Copy address to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(paymentAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Handle direct wallet payment
  const handleDirectPayment = async () => {
    if (!account) {
      await connectWallet()
      return
    }

    // In a real app, this would trigger a web3 transaction
    setPaymentStatus("processing")

    // Simulate transaction confirmation
    setTimeout(() => {
      setPaymentStatus("confirmed")
      onPaymentComplete()
    }, 3000)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-primary mb-4">Pay with {currency.toUpperCase()}</h3>

      {/* Payment Status */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <div className="text-sm font-medium text-gray-500 mr-2">Status:</div>
          {paymentStatus === "pending" && (
            <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Awaiting Payment</span>
          )}
          {paymentStatus === "processing" && (
            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Processing</span>
          )}
          {paymentStatus === "confirmed" && (
            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Confirmed</span>
          )}
          {paymentStatus === "failed" && (
            <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Failed</span>
          )}
        </div>

        <div className="text-sm text-gray-600">
          {paymentStatus === "pending" && "Please send the exact amount to the address below."}
          {paymentStatus === "processing" && "We've detected your payment. Waiting for blockchain confirmation..."}
          {paymentStatus === "confirmed" && "Payment confirmed! Your subscription is now active."}
          {paymentStatus === "failed" && "There was an issue with your payment. Please try again."}
        </div>
      </div>

      {/* Payment Details */}
      {paymentStatus === "pending" && (
        <>
          <div className="mb-6">
            <div className="text-sm font-medium text-gray-500 mb-1">Amount to Send:</div>
            <div className="text-2xl font-bold text-primary">
              {amount} {currency.toUpperCase()}
            </div>
          </div>

          <div className="mb-6">
            <div className="text-sm font-medium text-gray-500 mb-1">Send to this address:</div>
            <div className="flex items-center">
              <div className="bg-gray-100 p-3 rounded-lg flex-1 font-mono text-sm break-all">{paymentAddress}</div>
              <button
                onClick={copyToClipboard}
                className="ml-2 p-2 rounded-md hover:bg-gray-100"
                aria-label="Copy address"
              >
                {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5 text-gray-500" />}
              </button>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-sm font-medium text-gray-500 mb-2">QR Code:</div>
            <div className="bg-white p-4 rounded-lg inline-block border border-gray-200">
              <img
                src={`/generic-qr-code.png?height=180&width=180&query=QR code for ${paymentAddress}`}
                alt="Payment QR Code"
                className="h-44 w-44"
              />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <div className="text-center mb-4">
              <div className="text-sm font-medium text-gray-800 mb-1">Or pay directly with your wallet</div>
              <div className="text-xs text-gray-500">Connect your Web3 wallet to pay with one click</div>
            </div>

            <button
              onClick={handleDirectPayment}
              disabled={isConnecting}
              className="w-full btn bg-primary text-white hover:bg-primary-dark flex items-center justify-center"
            >
              <Wallet className="h-5 w-5 mr-2" />
              {account ? "Pay Now" : "Connect Wallet"}
            </button>
          </div>
        </>
      )}

      {/* Success Message */}
      {paymentStatus === "confirmed" && (
        <div className="text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
            <Check className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-medium text-green-800 mb-2">Payment Successful!</h3>
          <p className="text-green-700 mb-6">Your payment has been confirmed and your subscription is now active.</p>
          <button onClick={onPaymentComplete} className="btn bg-primary text-white hover:bg-primary-dark">
            Continue to Dashboard
          </button>
        </div>
      )}

      <div className="mt-6 text-xs text-gray-500">
        <p>
          Need help?{" "}
          <a href="/contact" className="text-primary hover:underline">
            Contact our support team
          </a>
          .
        </p>
      </div>
    </div>
  )
}
