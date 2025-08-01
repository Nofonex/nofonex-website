import { PrismaClient } from "@prisma/client"

// Re-export PrismaClient to maintain compatibility with existing code
export { PrismaClient } from "@prisma/client"

// Create a singleton instance of PrismaClient
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export default prisma
