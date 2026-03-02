import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import CommentModerationList from "./comment-moderation-list"
import { getCommentsForModeration } from "@/app/actions/comment-actions"

export default async function CommentModerationPage() {
  const session = await getServerSession(authOptions)

  // Check if user is authenticated and has admin role
  if (!session?.user || session.user.role !== "admin") {
    redirect("/login?callbackUrl=/dashboard/comments")
  }

  // Fetch comments with pagination (default to first page)
  const commentsData = await getCommentsForModeration()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Comment Moderation</h1>

      <CommentModerationList initialComments={commentsData} />
    </div>
  )
}
