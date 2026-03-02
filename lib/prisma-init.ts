import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient() {
  if (!process.env.DATABASE_URL) {
    // During build time, DATABASE_URL may not be set.
    // Return a proxy that will throw a clear error if actually used.
    return new Proxy({} as PrismaClient, {
      get(_target, prop) {
        if (prop === "then" || prop === "catch") return undefined
        throw new Error(
          `Prisma client not available: DATABASE_URL is not set. This is expected during build time.`
        )
      },
    })
  }
  return new PrismaClient()
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export default prisma
