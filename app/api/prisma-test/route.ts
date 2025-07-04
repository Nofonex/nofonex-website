import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET() {
  try {
    // Simple query to test if Prisma is working
    const userCount = await prisma.user.count()

    return NextResponse.json({
      success: true,
      message: "Prisma is working correctly!",
      userCount,
    })
  } catch (error) {
    console.error("Prisma test failed:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Prisma test failed",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
