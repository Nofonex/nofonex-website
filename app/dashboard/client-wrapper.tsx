"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Dynamically import the client component with SSR disabled
const DashboardClient = dynamic(() => import("./client-entry"), {
  ssr: false,
  loading: () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-500">Loading...</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="animate-pulse">
              <div className="h-6 w-24 bg-gray-200 rounded mb-4"></div>
              <div className="h-8 w-16 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
})

export default function DashboardClientWrapper() {
  return (
    <Suspense
      fallback={
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-gray-500">Loading...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="animate-pulse">
                  <div className="h-6 w-24 bg-gray-200 rounded mb-4"></div>
                  <div className="h-8 w-16 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    >
      <DashboardClient />
    </Suspense>
  )
}
