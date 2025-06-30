"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

interface Comment {
  id: string
  content: string
  createdAt: string
  user: {
    name: string
    image: string
  }
  replies?: Comment[]
}

interface CommentSectionProps {
  postSlug: string
}

export default function CommentSection({ postSlug }: CommentSectionProps) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  // Fetch comments for this post
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/comments?postSlug=${postSlug}`)
        const data = await response.json()
        
        if (response.ok) {
          setComments(data)
        } else {
          console.error("Failed to fetch comments:", data.message)
        }
      } catch (error) {
        console.error("Error fetching comments:", error)
      }
    }

    fetchComments()
  }, [postSlug])

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!session) {
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.href)}`)
      return
    }

    if (!newComment.trim()) return

    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: newComment,
          postSlug,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setNewComment("")
        // Add the new comment to the list
        setComments((prev) => [
          {
            id: data.id,
            content: data.content,
            createdAt: data.createdAt,
            user: {
              name: session.user?.name || "Anonymous",
              image: session.user?.image || "",
            },
            replies: [],
          },
          ...prev,
        ])
      } else {
        setError(data.message || "Failed to post comment")
      }
    } catch (error) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mt-10 bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>

      {/* Comment form */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
            Leave a comment
          </label>
          <textarea
            id="comment"
            rows={4}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder={session ? "Write your comment here..." : "Please sign in to comment"}
            disabled={!session || isSubmitting}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          />
        </div>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <button
          type="submit"
          disabled={!session || isSubmitting || !newComment.trim()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isSubmitting ? "Posting..." : "Post Comment"}
        </button>
        
        {!session && (
          <p className="mt-2 text-sm text-gray-600">
            Please{" "}
            <button
              type="button"
              onClick={() => router.push(`/login?callbackUrl=${encodeURIComponent(window.location.href)}`)}
              className="text-blue-600 hover:text-blue-500"
            >
              sign in
            </button>{" "}
            to leave a comment.
          </p>
        )}
      </form>

      {/* Comments list */}
      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-0">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  {comment.user.image ? (
                    <img
                      src={comment.user.image || "/placeholder.svg"}
                      alt={comment.user.name}
                      className="h-10 w-10 rounded-full"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 font-medium">
                        {comment.user.name?.charAt(0) || "?"}
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-medium">{comment.user.name || "Anonymous"}</h4>
                    <span className="ml-2 text-sm text-gray-500">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="mt-1 text-gray-800">{comment.content}</div>
                </div>
              </div>

              {/* Comment replies would go here */}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  )
}