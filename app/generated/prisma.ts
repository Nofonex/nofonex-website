// Re-export from the single prisma-init module to avoid multiple PrismaClient instances
export { PrismaClient } from "@prisma/client"
export { prisma, prisma as default } from "@/lib/prisma-init"
