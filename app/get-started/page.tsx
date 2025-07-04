"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function GetStartedPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan")

  useEffect(() => {
    // Redirect to checkout with the selected plan
    router.push(`/checkout?plan=${plan || "starter"}`)
  }, [router, plan])

  return (
    <div className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-primary/20 rounded mx-auto mb-4"></div>
            <div className="h-4 w-64 bg-primary/10 rounded mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
