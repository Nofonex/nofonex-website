"use server"

import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { revalidatePath } from "next/cache"

/**
 * Approve a comment
 */
export async function approveComment(commentId: string) {
  const session = await getServerSession(authOptions)

  if (!session?.user || session.user.role !== "admin") {
    return { success: false, message: "Unauthorized" }
  }

  try {
    await prisma.comment.update({
      where: { id: commentId },
      data: { status: "approved" },
    })

    revalidatePath("/dashboard/comments")
    return { success: true }
  } catch (error) {
    console.error("Error approving comment:", error)
    return { success: false, message: "Failed to approve comment" }
  }
}

/**
 * Reject a comment
 */
export async function rejectComment(commentId: string) {
  const session = await getServerSession(authOptions)

  if (!session?.user || session.user.role !== "admin") {
    return { success: false, message: "Unauthorized" }
  }

  try {
    await prisma.comment.update({
      where: { id: commentId },
      data: { status: "rejected" },
    })

    revalidatePath("/dashboard/comments")
    return { success: true }
  } catch (error) {
    console.error("Error rejecting comment:", error)
    return { success: false, message: "Failed to reject comment" }
  }
}

/**
 * Mark a comment as spam
 */
export async function markAsSpam(commentId: string) {
  const session = await getServerSession(authOptions)

  if (!session?.user || session.user.role !== "admin") {
    return { success: false, message: "Unauthorized" }
  }

  try {
    await prisma.comment.update({
      where: { id: commentId },
      data: { status: "spam" },
    })

    revalidatePath("/dashboard/comments")
    return { success: true }
  } catch (error) {
    console.error("Error marking comment as spam:", error)
    return { success: false, message: "Failed to mark comment as spam" }
  }
}

/**
 * Delete a comment
 */
export async function deleteComment(commentId: string) {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return { success: false, message: "Unauthorized" }
  }

  try {
    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
      select: { userId: true },
    })

    // Only allow admins or the comment author to delete
    if (!comment || (comment.userId !== session.user.id && session.user.role !== "admin")) {
      return { success: false, message: "Unauthorized" }
    }

    await prisma.comment.delete({
      where: { id: commentId },
    })

    revalidatePath("/dashboard/comments")
    return { success: true }
  } catch (error) {
    console.error("Error deleting comment:", error)
    return { success: false, message: "Failed to delete comment" }
  }
}

/**
 * Report a comment
 */
export async function reportComment(commentId: string, reason: string) {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return { success: false, message: "Unauthorized" }
  }

  try {
    // Check if user has already reported this comment
    const existingReport = await prisma.report.findFirst({
      where: {
        commentId,
        userId: session.user.id,
      },
    })

    if (existingReport) {
      return { success: false, message: "You have already reported this comment" }
    }

    // Create the report
    await prisma.report.create({
      data: {
        id: crypto.randomUUID(),
        reason,
        commentId,
        userId: session.user.id,
      },
    })

    // If a comment gets 3 or more reports, automatically mark it for review
    const reportCount = await prisma.report.count({
      where: { commentId },
    })

    if (reportCount >= 3) {
      await prisma.comment.update({
        where: { id: commentId },
        data: { status: "pending" },
      })
    }

    return { success: true }
  } catch (error) {
    console.error("Error reporting comment:", error)
    return { success: false, message: "Failed to report comment" }
  }
}

/**
 * Toggle like on a comment
 */
export async function toggleLike(commentId: string) {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return { success: false, message: "Unauthorized" }
  }

  try {
    // Check if user has already liked this comment
    const existingLike = await prisma.like.findFirst({
      where: {
        commentId,
        userId: session.user.id,
      },
    })

    if (existingLike) {
      // Unlike
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      })
    } else {
      // Like
      await prisma.like.create({
        data: {
          id: crypto.randomUUID(),
          commentId,
          userId: session.user.id,
        },
      })
    }

    return { success: true }
  } catch (error) {
    console.error("Error toggling like:", error)
    return { success: false, message: "Failed to like/unlike comment" }
  }
}

/**
 * Get comments for moderation
 */
export async function getCommentsForModeration(status = "pending", page = 1, limit = 10) {
  const session = await getServerSession(authOptions)

  if (!session?.user || session.user.role !== "admin") {
    return { success: false, message: "Unauthorized" }
  }

  try {
    const skip = (page - 1) * limit

    const [comments, total] = await Promise.all([
      prisma.comment.findMany({
        where: { status },
        include: {
          User: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
          Report: true,
          _count: {
            select: {
              Report: true,
              Like: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.comment.count({
        where: { status },
      }),
    ])

    return {
      success: true,
      comments: comments.map((comment) => ({
        ...comment,
        reportCount: comment._count.Report,
        likeCount: comment._count.Like,
      })),
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        page,
        limit,
      },
    }
  } catch (error) {
    console.error("Error fetching comments for moderation:", error)
    return { success: false, message: "Failed to fetch comments" }
  }
}
