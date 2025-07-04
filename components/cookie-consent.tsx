"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "all")
    setShowBanner(false)
  }

  const savePreferences = () => {
    const preferences = {
      essential: true, // Always true
      preference: (document.getElementById("preference-cookies") as HTMLInputElement)?.checked,
      analytics: (document.getElementById("analytics-cookies") as HTMLInputElement)?.checked,
      marketing: (document.getElementById("marketing-cookies") as HTMLInputElement)?.checked,
    }

    localStorage.setItem("cookieConsent", JSON.stringify(preferences))
    setShowModal(false)
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 animate-slide-up">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
          <p className="flex-1 min-w-[300px]">
            We use cookies to enhance your experience on our website. By continuing to browse, you agree to our{" "}
            <Link href="/privacy#cookies" className="text-primary underline">
              Cookie Policy
            </Link>
            .
          </p>
          <div className="flex gap-2">
            <button onClick={acceptAll} className="btn btn-primary">
              Accept All
            </button>
            <button onClick={() => setShowModal(true)} className="btn btn-ghost border border-primary text-primary">
              Cookie Settings
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in"
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className="bg-white rounded-lg max-w-2xl w-11/12 max-h-[80vh] overflow-y-auto p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Cookie Settings</h2>
            <p className="mb-6">
              Customize your cookie preferences below. Some cookies are necessary for the website to function properly
              and cannot be disabled.
            </p>

            <div className="space-y-6">
              <div className="pb-4 border-b border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Essential Cookies</h3>
                  <label className="relative inline-flex items-center cursor-not-allowed">
                    <input type="checkbox" checked disabled className="sr-only peer" />
                    <div className="w-11 h-6 bg-primary rounded-full peer"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600">
                  These cookies are necessary for the website to function properly and cannot be disabled.
                </p>
              </div>

              <div className="pb-4 border-b border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Preference Cookies</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="preference-cookies" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600">
                  These cookies allow the website to remember choices you make and provide enhanced, personalized
                  features.
                </p>
              </div>

              <div className="pb-4 border-b border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Analytics Cookies</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="analytics-cookies" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600">
                  These cookies help us understand how visitors interact with our website, helping us improve our
                  website and services.
                </p>
              </div>

              <div className="pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Marketing Cookies</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="marketing-cookies" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600">
                  These cookies are used to track visitors across websites to display relevant advertisements.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button onClick={() => setShowModal(false)} className="btn btn-ghost">
                Cancel
              </button>
              <button onClick={savePreferences} className="btn btn-primary">
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
