import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

// Prisma 7 requires an explicit driver adapter rather than reading
// DATABASE_URL implicitly, so that's wired up here once.
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// Next.js dev mode reloads modules on every request, which would otherwise
// open a new database connection each time. Caching the client on the
// global object survives those reloads in development; production gets a
// single fresh instance per server process either way.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
