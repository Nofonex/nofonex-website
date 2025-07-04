"use client"

import dynamic from "next/dynamic"

const Header = dynamic(() => import("./header"), {
  ssr: false,
  loading: () => (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
            <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-16 bg-gray-200 rounded animate-pulse" />
            <div className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </header>
  ),
})

export default function HeaderWrapper() {
  return <Header />
}
