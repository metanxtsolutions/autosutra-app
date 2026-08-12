// This project keeps secrets in .env.local (the existing convention, see
// .env.example), not the default .env Prisma's CLI loads on its own, so
// that's loaded explicitly here for `prisma` CLI commands (migrate, studio,
// etc). Next.js itself already loads .env.local automatically at runtime.
import { config } from "dotenv";
config({ path: ".env.local" });

import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
