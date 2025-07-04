"use client"

import { useRef } from "react"

export default function BrandBanner() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Create an array of brand placeholders
  const brands = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    name: `Brand ${i + 1}`,
    letter: String.fromCharCode(65 + (i % 26)), // A-Z letters
  }))

  // Duplicate brands to create seamless loop
  const allBrands = [...brands, ...brands]

  return (
    <div className="w-full overflow-hidden bg-[#480E4D] rounded-lg relative">
      {/* Gradient overlays for smooth fade effect on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#480E4D] to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#480E4D] to-transparent"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF8FD9] via-[#BD4B9A] to-[#FF8FD9] opacity-60"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BD4B9A] via-[#FF8FD9] to-[#BD4B9A] opacity-60"></div>

      {/* Scrolling container */}
      <div
        ref={containerRef}
        className="py-12 flex items-center animate-scroll"
        style={{
          animationDuration: "60s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {allBrands.map((brand, index) => (
          <div key={`${brand.id}-${index}`} className="flex-shrink-0 mx-8 flex flex-col items-center">
            <div className="w-32 h-32 rounded-lg bg-[#6A1372] bg-opacity-70 flex items-center justify-center shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#BD4B9A] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="text-4xl font-bold text-white">{brand.letter}</span>
            </div>
            <span className="mt-3 text-white text-sm font-medium">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
