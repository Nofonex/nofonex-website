"use client"

import { useEffect, useRef } from "react"

interface AdBannerProps {
  size: "sidebar" | "inline" | "top" | "bottom" | "medium" | "large"
  position?: string
  backgroundColor?: string
  id?: string
  className?: string
}

export default function AdBanner({ size, id, className = "" }: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null)

  const sizeMap = {
    sidebar: { width: 300, height: 600 },
    inline: { width: 728, height: 90 },
    top: { width: 970, height: 250 },
    bottom: { width: 728, height: 90 },
    medium: { width: 728, height: 90 },
    large: { width: 970, height: 250 },
  }

  const adSize = sizeMap[size] || { width: 300, height: 250 }

  useEffect(() => {
    if (!adRef.current) return

    // Adsterra native banner integration
    const script = document.createElement("script")
    script.async = true
    script.setAttribute("data-cfasync", "false")
    script.src = "//pl28825063.effectivegatecpm.com/f6/89/2e/f6892ec944b67119568ccfe2605a6421.js"

    // Only add popunder script once per page
    if (!document.querySelector('script[src*="f6892ec944b67119568ccfe2605a6421"]')) {
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div
      id={id}
      className={`ad-container relative ${className}`}
      ref={adRef}
      style={{
        width: size === "sidebar" ? "300px" : "100%",
        maxWidth: adSize.width,
        minHeight: adSize.height / 4,
        margin: "1.5rem auto",
      }}
    >
      <div className="absolute top-0 right-0 bg-gray-200 text-xs px-1 z-10 opacity-70">Ad</div>
      <a
        href="https://www.effectivegatecpm.com/wampbzh4y?key=5be0998546ee06c1a83bd0bf28dda1a5"
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="block w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center rounded-lg border border-gray-200 hover:border-secondary/30 transition-colors"
        style={{ minHeight: adSize.height / 4, maxWidth: adSize.width }}
      >
        <div className="text-center p-4">
          <p className="text-sm font-medium text-primary">Discover More</p>
          <p className="text-xs text-gray-500 mt-1">Sponsored Content</p>
        </div>
      </a>
    </div>
  )
}
