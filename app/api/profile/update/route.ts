import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { name, bio } = body

    // Update user in database
    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        name,
        // We'll add bio field later when we update the schema
      },
    })

    // Remove sensitive data
    const { hashedPassword, ...userWithoutPassword } = updatedUser

    return NextResponse.json({
      message: "Profile updated successfully",
      user: userWithoutPassword,
    })
  } catch (error) {
    console.error("Profile update error:", error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}
