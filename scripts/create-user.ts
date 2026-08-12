// One-off script to create an AutoSutra Leads account. There is no
// self-serve signup by design, since this tool is internal only: whoever
// administers it runs this once per team member.
//
// Usage:
//   npx tsx scripts/create-user.ts "Full Name" "email@autosutra.in" "password"
//
// Requires DATABASE_URL to be set in .env.local first.

import { config } from "dotenv";
config({ path: ".env.local" });

import { hash } from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

async function main() {
  const [name, email, password] = process.argv.slice(2);

  if (!name || !email || !password) {
    console.error(
      'Usage: npx tsx scripts/create-user.ts "Full Name" "email@autosutra.in" "password"',
    );
    process.exit(1);
  }

  if (password.length < 8) {
    console.error("Password must be at least 8 characters.");
    process.exit(1);
  }

  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set. Add it to .env.local first.");
    process.exit(1);
  }

  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
  const prisma = new PrismaClient({ adapter });

  const passwordHash = await hash(password, 12);

  const user = await prisma.user.upsert({
    where: { email },
    update: { name, passwordHash },
    create: { name, email, passwordHash },
  });

  console.log(`Created (or updated) user: ${user.name} <${user.email}>`);
  await prisma.$disconnect();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
