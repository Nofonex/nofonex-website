"use client"

import { useState, useEffect } from "react"
import CommentSection from "@/components/comment-section"

interface ClientCommentWrapperProps {
  postSlug: string
}

export default function ClientCommentWrapper({ postSlug }: ClientCommentWrapperProps) {
  // Using useState and useEffect to ensure this only runs on the client
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Comments</h2>
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <p className="text-gray-500">Loading comments...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <CommentSection postSlug={postSlug} />
        </div>
      </div>
    </section>
  )
}
