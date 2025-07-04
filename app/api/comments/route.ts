import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma-init" // Use the new initialization module
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

// GET /api/comments?postSlug=your-post-slug
export async function GET(request: NextRequest) {
  console.log("GET /api/comments - Starting request")

  const searchParams = request.nextUrl.searchParams
  const postSlug = searchParams.get("postSlug")

  if (!postSlug) {
    console.log("GET /api/comments - Missing post slug")
    return NextResponse.json({ success: false, message: "Post slug is required" }, { status: 400 })
  }

  try {
    console.log("GET /api/comments - Getting session")
    const session = await getServerSession(authOptions)
    const userId = session?.user?.id
    const isAdmin = session?.user?.role === "admin"

    console.log("GET /api/comments - Fetching comments with Prisma")

    // Get all comments for the post
    const comments = await prisma.comment.findMany({
      where: {
        postSlug,
        // If user is not admin, only show approved comments and their own pending comments
        OR: [
          { status: "approved" },
          ...(userId ? [{ userId, status: "pending" }] : []),
          ...(isAdmin ? [{ status: "pending" }, { status: "rejected" }, { status: "spam" }] : []),
        ],
      },
      include: {
        User: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        other_Comment: {
          where: {
            // If user is not admin, only show approved replies and their own pending replies
            OR: [
              { status: "approved" },
              ...(userId ? [{ userId, status: "pending" }] : []),
              ...(isAdmin ? [{ status: "pending" }, { status: "rejected" }, { status: "spam" }] : []),
            ],
          },
          include: {
            User: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
            _count: {
              select: {
                Like: true,
              },
            },
          },
          orderBy: {
            createdAt: "asc",
          },
        },
        _count: {
          select: {
            Like: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    console.log(`GET /api/comments - Found ${comments.length} comments`)

    // If user is logged in, check which comments they've liked
    let commentsWithLikeStatus = comments.map((comment) => ({
      ...comment,
      replies: comment.other_Comment,
      likeCount: comment._count.Like,
      userLiked: false,
    }))

    if (userId) {
      console.log("GET /api/comments - Checking user likes")
      const userLikes = await prisma.like.findMany({
        where: {
          userId,
          commentId: {
            in: [
              ...comments.map((comment) => comment.id),
              ...comments.flatMap((comment) => comment.other_Comment.map((reply) => reply.id)),
            ],
          },
        },
      })

      const likedCommentIds = new Set(userLikes.map((like) => like.commentId))

      commentsWithLikeStatus = commentsWithLikeStatus.map((comment) => ({
        ...comment,
        userLiked: likedCommentIds.has(comment.id),
        replies: comment.replies.map((reply) => ({
          ...reply,
          userLiked: likedCommentIds.has(reply.id),
          likeCount: reply._count.Like,
        })),
      }))
    }

    console.log("GET /api/comments - Returning response")
    return NextResponse.json({ success: true, comments: commentsWithLikeStatus })
  } catch (error) {
    console.error("Error fetching comments:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch comments",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

// POST /api/comments
export async function POST(request: NextRequest) {
  console.log("POST /api/comments - Starting request")

  try {
    console.log("POST /api/comments - Getting session")
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      console.log("POST /api/comments - Unauthorized")
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    console.log("POST /api/comments - Parsing request body")
    const { content, postSlug, parentId } = await request.json()

    if (!content || !postSlug) {
      console.log("POST /api/comments - Missing required fields")
      return NextResponse.json({ success: false, message: "Content and post slug are required" }, { status: 400 })
    }

    console.log("POST /api/comments - Creating comment with Prisma")
    // Create the comment
    const comment = await prisma.comment.create({
      data: {
        id: crypto.randomUUID(),
        content,
        postSlug,
        userId: session.user.id,
        parentId,
        // If user is admin, auto-approve the comment
        status: session.user.role === "admin" ? "approved" : "pending",
        updatedAt: new Date(),
      },
    })

    console.log("POST /api/comments - Comment created successfully")
    return NextResponse.json({ success: true, comment })
  } catch (error) {
    console.error("Error creating comment:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create comment",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
