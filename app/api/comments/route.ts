import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { authOptions } from "@/lib/auth"

const prisma = new PrismaClient()

// GET /api/comments?postSlug=your-post-slug
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const postSlug = searchParams.get("postSlug")

  if (!postSlug) {
    return NextResponse.json(
      { message: "Post slug is required" },
      { status: 400 }
    )
  }

  try {
    const comments = await prisma.comment.findMany({
      where: {
        postSlug,
        parentId: null, // Only get top-level comments
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: {
          select: {
            name: true,
            image: true,
          },
        },
        replies: {
          include: {
            user: {
              select: {
                name: true,
                image: true,
              },
            },
          },
        },
      },
    })

    return NextResponse.json(comments)
  } catch (error) {
    console.error("Error fetching comments:", error)
    return NextResponse.json(
      { message: "Error fetching comments" },
      { status: 500 }
    )
  }
}

// POST /api/comments
export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return NextResponse.json(
      { message: "You must be logged in to comment" },
      { status: 401 }
    )
  }

  try {
    const { content, postSlug, parentId } = await request.json()

    if (!content || !postSlug) {
      return NextResponse.json(
        { message: "Content and postSlug are required" },
        { status: 400 }
      )
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        postSlug,
        parentId: parentId || null,
        userId: session.user.id as string,
      },
    })

    return NextResponse.json(comment, { status: 201 })
  } catch (error) {
    console.error("Error creating comment:", error)
    return NextResponse.json(
      { message: "Error creating comment" },
      { status: 500 }
    )
  }
}