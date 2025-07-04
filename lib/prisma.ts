import { PrismaClient } from "@prisma/client"

// This is to prevent multiple instances of Prisma Client in development
const globalForPrisma = global as unknown as { prisma: PrismaClient }

// Check if we need to initialize Prisma
const initPrisma = () => {
  try {
    console.log("Initializing Prisma client...")
    return new PrismaClient()
  } catch (error) {
    console.error("Failed to initialize Prisma client:", error)
    throw error
  }
}

// Initialize Prisma client
export const prisma = globalForPrisma.prisma || initPrisma()

// Attach Prisma to the global object in development
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}

export default prisma
