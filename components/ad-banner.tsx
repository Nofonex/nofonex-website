"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

// Update the AdBannerProps interface to use a more strict type for size
interface AdBannerProps {
  size: "sidebar" | "inline" | "top" | "bottom" | "medium" | "large"
  position?: string
  backgroundColor?: string
  id?: string
  className?: string
}

export default function AdBanner({ size, id, className = "" }: AdBannerProps) {
  const [adData, setAdData] = useState<{
    imageUrl: string
    linkUrl: string
    altText: string
    width: number
    height: number
  } | null>(null)

  // This would normally fetch from an ad network API
  // Update the useEffect hook to handle all possible size values
  useEffect(() => {
    // Simulate ad loading
    const timeout = setTimeout(() => {
      // Placeholder ad data - in a real implementation, this would come from your ad network
      const sizeMap = {
        sidebar: { width: 300, height: 600 },
        inline: { width: 728, height: 90 },
        top: { width: 970, height: 250 },
        bottom: { width: 728, height: 90 },
        medium: { width: 728, height: 90 },
        large: { width: 970, height: 250 },
      }

      // Default size as fallback
      const adSize = sizeMap[size] || { width: 300, height: 250 }

      setAdData({
        imageUrl: `/placeholder.svg?height=${adSize.height}&width=${adSize.width}&query=Your ad here - ${size} banner`,
        linkUrl: "/advertise",
        altText: "Advertisement",
        width: adSize.width,
        height: adSize.height,
      })
    }, 300)

    return () => clearTimeout(timeout)
  }, [size])

  // Update the loading state to use the same fallback logic
  if (!adData) {
    // Default dimensions based on size with fallback
    let width = "100%"
    let height = "90px"
    let maxWidth = "728px"

    if (size === "sidebar") {
      width = "300px"
      height = "600px"
      maxWidth = "300px"
    } else if (size === "top" || size === "large") {
      height = "250px"
      maxWidth = "970px"
    }

    return (
      <div
        id={id}
        className={`bg-gray-100 flex items-center justify-center ${className}`}
        style={{
          width,
          height,
          maxWidth,
          margin: "1.5rem auto",
        }}
      >
        <div className="text-gray-400">Loading advertisement...</div>
      </div>
    )
  }

  return (
    <div
      id={id}
      className={`ad-container relative ${className}`}
      style={{
        width: size === "sidebar" ? "300px" : "100%",
        maxWidth: adData.width,
        height: adData.height,
        margin: "1.5rem auto",
      }}
    >
      <div className="absolute top-0 right-0 bg-gray-200 text-xs px-1 z-10 opacity-70">Ad</div>
      <Link href={adData.linkUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
        <Image
          src={adData.imageUrl || "/placeholder.svg"}
          alt={adData.altText}
          width={adData.width}
          height={adData.height}
          className="w-full h-full object-cover"
        />
      </Link>
    </div>
  )
}
