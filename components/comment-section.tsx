"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThumbsUp, MessageSquare, Flag, MoreVertical, Loader2 } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { reportComment, toggleLike } from "@/app/actions/comment-actions"
import { useToast } from "@/hooks/use-toast"

interface CommentSectionProps {
  postSlug: string
  className?: string
}

export default function CommentSection({ postSlug, className = "" }: CommentSectionProps) {
  const { data: session, status: sessionStatus } = useSession()
  const router = useRouter()
  const { toast } = useToast()
  const commentInputRef = useRef<HTMLTextAreaElement>(null)

  const [comments, setComments] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [commentContent, setCommentContent] = useState("")
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [reportDialogOpen, setReportDialogOpen] = useState(false)
  const [reportingCommentId, setReportingCommentId] = useState<string | null>(null)
  const [reportReason, setReportReason] = useState("")

  // Fetch comments
  const fetchComments = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/comments?postSlug=${postSlug}`)

      if (!response.ok) {
        throw new Error("Failed to fetch comments")
      }

      const data = await response.json()

      if (data.success) {
        setComments(data.comments)
      } else {
        console.error("Failed to fetch comments:", data.message)
        toast({
          title: "Error",
          description: "Failed to load comments",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error fetching comments:", error)
      toast({
        title: "Error",
        description: "Failed to load comments",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchComments()
  }, [postSlug])

  // Submit a new comment
  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!session) {
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.href)}`)
      return
    }

    if (!commentContent.trim()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: commentContent,
          postSlug,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setCommentContent("")
        fetchComments()

        toast({
          title: "Comment submitted",
          description:
            session.user.role === "admin"
              ? "Your comment has been posted"
              : "Your comment has been submitted and is awaiting approval",
        })
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to submit comment",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error submitting comment:", error)
      toast({
        title: "Error",
        description: "Failed to submit comment",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Submit a reply to a comment
  const handleSubmitReply = async (commentId: string) => {
    if (!session) {
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.href)}`)
      return
    }

    if (!replyContent.trim()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: replyContent,
          postSlug,
          parentId: commentId,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setReplyContent("")
        setReplyingTo(null)
        fetchComments()

        toast({
          title: "Reply submitted",
          description:
            session.user.role === "admin"
              ? "Your reply has been posted"
              : "Your reply has been submitted and is awaiting approval",
        })
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to submit reply",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error submitting reply:", error)
      toast({
        title: "Error",
        description: "Failed to submit reply",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle like/unlike
  const handleLike = async (commentId: string) => {
    if (!session) {
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.href)}`)
      return
    }

    try {
      // Optimistically update UI
      setComments((prevComments) =>
        prevComments.map((comment) => {
          if (comment.id === commentId) {
            const newLikeCount = comment.userLiked ? comment.likeCount - 1 : comment.likeCount + 1

            return {
              ...comment,
              userLiked: !comment.userLiked,
              likeCount: newLikeCount,
            }
          }
          return comment
        }),
      )

      // Call server action
      const result = await toggleLike(commentId)

      if (!result.success) {
        // Revert optimistic update if failed
        fetchComments()
        toast({
          title: "Error",
          description: result.message || "Failed to like/unlike comment",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error liking comment:", error)
      // Revert optimistic update
      fetchComments()
      toast({
        title: "Error",
        description: "Failed to like/unlike comment",
        variant: "destructive",
      })
    }
  }

  // Handle report submission
  const handleReport = async () => {
    if (!session) {
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.href)}`)
      return
    }

    if (!reportReason.trim() || !reportingCommentId) {
      return
    }

    try {
      const result = await reportComment(reportingCommentId, reportReason)

      if (result.success) {
        setReportDialogOpen(false)
        setReportingCommentId(null)
        setReportReason("")

        toast({
          title: "Report submitted",
          description: "Thank you for helping keep our community safe",
        })
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to submit report",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error reporting comment:", error)
      toast({
        title: "Error",
        description: "Failed to submit report",
        variant: "destructive",
      })
    }
  }

  // Render a comment
  const renderComment = (comment: any, isReply = false) => {
    // Don't render rejected or spam comments
    if (comment.status === "rejected" || comment.status === "spam") {
      return null
    }

    // For pending comments, only show to admins or the comment author
    const isPending = comment.status === "pending"
    const isAdmin = session?.user?.role === "admin"
    const isAuthor = session?.user?.id === comment.userId

    if (isPending && !isAdmin && !isAuthor) {
      return null
    }

    return (
      <div key={comment.id} className={`${isReply ? "ml-8 mt-3" : "mt-6"} ${isPending ? "opacity-70" : ""}`}>
        <div className="flex gap-3">
          <Avatar className="h-8 w-8">
            {comment.user?.image ? (
              <AvatarImage src={comment.user.image || "/placeholder.svg"} alt={comment.user.name || "User"} />
            ) : (
              <AvatarFallback>{comment.user?.name?.charAt(0) || "U"}</AvatarFallback>
            )}
          </Avatar>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium">{comment.user?.name || "Anonymous"}</span>
              <span className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
              </span>

              {isPending && (
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">Pending</span>
              )}
            </div>

            <div className="mt-1 text-gray-700 whitespace-pre-wrap">{comment.content}</div>

            <div className="mt-2 flex items-center gap-4">
              <button
                onClick={() => handleLike(comment.id)}
                className={`flex items-center gap-1 text-xs ${comment.userLiked ? "text-blue-600" : "text-gray-500"}`}
                disabled={isSubmitting}
              >
                <ThumbsUp size={14} />
                <span>{comment.likeCount || 0}</span>
              </button>

              <button
                onClick={() => {
                  if (!session) {
                    router.push(`/login?callbackUrl=${encodeURIComponent(window.location.href)}`)
                    return
                  }

                  setReplyingTo(comment.id)

                  // Focus the reply input after a short delay to allow the UI to update
                  setTimeout(() => {
                    const replyInput = document.getElementById(`reply-${comment.id}`)
                    if (replyInput) {
                      replyInput.focus()
                    }
                  }, 100)
                }}
                className="flex items-center gap-1 text-xs text-gray-500"
                disabled={isSubmitting}
              >
                <MessageSquare size={14} />
                <span>Reply</span>
              </button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-gray-500">
                    <MoreVertical size={14} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => {
                      setReportingCommentId(comment.id)
                      setReportDialogOpen(true)
                    }}
                    className="text-red-600"
                  >
                    <Flag size={14} className="mr-2" />
                    Report
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Reply form */}
            {replyingTo === comment.id && (
              <div className="mt-3">
                <Textarea
                  id={`reply-${comment.id}`}
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="Write your reply..."
                  className="min-h-[80px] text-sm"
                  disabled={isSubmitting}
                />

                <div className="mt-2 flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setReplyingTo(null)
                      setReplyContent("")
                    }}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>

                  <Button
                    size="sm"
                    onClick={() => handleSubmitReply(comment.id)}
                    disabled={!replyContent.trim() || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={14} className="mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Reply"
                    )}
                  </Button>
                </div>
              </div>
            )}

            {/* Render replies */}
            {comment.replies?.length > 0 && (
              <div className="mt-3 space-y-3">{comment.replies.map((reply: any) => renderComment(reply, true))}</div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`mt-12 ${className}`}>
      <h2 className="text-2xl font-bold mb-6">Comments</h2>

      {/* Comment form */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <form onSubmit={handleSubmitComment}>
          <Textarea
            ref={commentInputRef}
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            placeholder={
              sessionStatus === "loading"
                ? "Loading..."
                : session
                  ? "Write your comment..."
                  : "Please sign in to comment"
            }
            className="min-h-[120px]"
            disabled={!session || isSubmitting}
          />

          <div className="mt-3 flex items-center justify-between">
            <p className="text-xs text-gray-500">
              {session
                ? session.user.role === "admin"
                  ? "Your comments will be posted immediately"
                  : "Comments are moderated before appearing"
                : "Please sign in to comment"}
            </p>

            <div>
              {!session ? (
                <Button
                  type="button"
                  onClick={() => router.push(`/login?callbackUrl=${encodeURIComponent(window.location.href)}`)}
                >
                  Sign in to comment
                </Button>
              ) : (
                <Button type="submit" disabled={!commentContent.trim() || isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Post Comment"
                  )}
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* Comments list */}
      <div className="mt-8">
        {isLoading ? (
          <div className="flex justify-center py-8">
            <Loader2 size={24} className="animate-spin text-gray-400" />
          </div>
        ) : comments.length > 0 ? (
          <div className="space-y-6 divide-y divide-gray-100">
            {comments
              .filter((comment) => !comment.parentId) // Only show top-level comments
              .map((comment) => renderComment(comment))}
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          </div>
        )}
      </div>

      {/* Report dialog */}
      <Dialog open={reportDialogOpen} onOpenChange={setReportDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Report Comment</DialogTitle>
            <DialogDescription>
              Please tell us why you're reporting this comment. Our moderators will review it.
            </DialogDescription>
          </DialogHeader>

          <Textarea
            value={reportReason}
            onChange={(e) => setReportReason(e.target.value)}
            placeholder="Why are you reporting this comment?"
            className="min-h-[100px]"
          />

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setReportDialogOpen(false)
                setReportingCommentId(null)
                setReportReason("")
              }}
            >
              Cancel
            </Button>

            <Button onClick={handleReport} disabled={!reportReason.trim()}>
              Submit Report
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
