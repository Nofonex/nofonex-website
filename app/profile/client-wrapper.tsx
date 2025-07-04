"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Dynamically import the client component with SSR disabled
const ProfileClient = dynamic(() => import("../../components/profile-content"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse">
      <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
      <div className="h-32 w-full bg-gray-200 rounded mb-4"></div>
      <div className="h-4 w-32 bg-gray-200 rounded"></div>
    </div>
  ),
})

export default function ProfileClientWrapper() {
  return (
    <Suspense
      fallback={
        <div className="animate-pulse">
          <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
          <div className="h-32 w-full bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      }
    >
      <ProfileClient />
    </Suspense>
  )
}
