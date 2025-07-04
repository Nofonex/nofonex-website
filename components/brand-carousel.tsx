"use client"

import React, { useEffect, useState } from 'react'

// Replace these with your actual brand logos
// Put your logo files in the public folder and update the paths
const brands = [
  { name: "Tomedes", logo: "/brands/Tomedes.png", alt: "Tomedes Logo" },
  { name: "Global Voices", logo: "/brands/Global-Voices.png", alt: "Global Voices Logo" },
  { name: "Pactera", logo: "/brands/Pactera.png", alt: "Pactera Logo" },
  { name: "GienTech", logo: "/brands/GienTech.png", alt: "GienTech Logo" },
  { name: "Mars Translation", logo: "/brands/Mars-Translation.png", alt: "Mars Translation Logo" },
  { name: "Glodomtec", logo: "/brands/Glodomtec.png", alt: "Glodomtec Logo" },
  { name: "BestEasy", logo: "/brands/BestEasy.png", alt: "BestEasy Logo" },
  { name: "Lionbridge", logo: "/brands/Lionbridge.png", alt: "Lionbridge Logo" },
  { name: "Future Trans", logo: "/brands/Future-Trans.png", alt: "Future Trans Logo" },
  { name: "Eurabic", logo: "/brands/Eurabic.png", alt: "Eurabic Logo" },
  { name: "RWS", logo: "/brands/RWS.png", alt: "RWS Logo" },
  { name: "Walabamba", logo: "/brands/Walabamba.png", alt: "Walabamba Logo" },
]

const BrandCarousel = () => {
  const [translateX, setTranslateX] = useState(0)

  // Continuous scrolling animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        // Calculate the width of one brand (assuming each brand takes up ~200px + gap)
        const brandWidth = 220 // Adjust this based on your brand width + gap
        const totalWidth = brandWidth * brands.length
        
        // Reset to 0 when we've scrolled through all brands
        if (prev <= -totalWidth) {
          return 0
        }
        
        // Move 1 pixel at a time for smooth scrolling
        return prev - 1
      })
    }, 30) // Update every 30ms for smooth animation (about 33fps)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies worldwide who trust our services
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
          
          <div 
            className="flex items-center gap-8 md:gap-12"
            style={{
              transform: `translateX(${translateX}px)`,
              width: 'max-content'
            }}
          >
            {/* Duplicate brands multiple times for seamless infinite scroll */}
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-48 h-16 md:h-20 flex items-center justify-center"
              >
                <div className="relative w-full h-full group cursor-pointer">
                  <img
                    src={brand.logo}
                    alt={brand.alt}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110 mx-auto"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" viewBox="0 0 120 60"><rect width="120" height="60" fill="%23f3f4f6"/><text x="60" y="35" text-anchor="middle" fill="%236b7280" font-family="Arial" font-size="12">${brand.name}</text></svg>`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandCarousel