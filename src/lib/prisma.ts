import { PrismaClient } from "@prisma/client";

// Global type fix for TypeScript
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"], // Is se terminal mein nazar aayega ke database se kya mangwaya
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;