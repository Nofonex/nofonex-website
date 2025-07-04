"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Dynamically import the client component with SSR disabled
const LoginClient = dynamic(() => import("./client-wrapper"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-pulse">
        <div className="h-8 w-48 bg-gray-200 rounded mb-4 mx-auto"></div>
        <div className="h-32 w-80 bg-gray-200 rounded mb-4"></div>
        <div className="h-10 w-40 bg-gray-200 rounded mx-auto"></div>
      </div>
    </div>
  ),
})

export default function DynamicWrapper() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-gray-200 rounded mb-4 mx-auto"></div>
            <div className="h-32 w-80 bg-gray-200 rounded mb-4"></div>
            <div className="h-10 w-40 bg-gray-200 rounded mx-auto"></div>
          </div>
        </div>
      }
    >
      <LoginClient />
    </Suspense>
  )
}
