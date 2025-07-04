"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Dynamically import the client component with SSR disabled
const ProfileEditClient = dynamic(() => import("@/components/profile-edit-client"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-24 w-24 bg-gray-200 rounded-full mb-4"></div>
        <div className="h-6 w-48 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  ),
})

export default function ClientEntry() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-24 w-24 bg-gray-200 rounded-full mb-4"></div>
            <div className="h-6 w-48 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      }
    >
      <ProfileEditClient />
    </Suspense>
  )
}
