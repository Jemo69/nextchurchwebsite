// src/server/db.ts
import { PrismaClient } from "../../some/generated/prisma";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
let url = process.env.TURSO_DATABASE_URL;
let authToken = process.env.TURSO_AUTH_TOKEN;
if (!url || !authToken) {
  url = "";
  authToken = "";
}
const adapter = new PrismaLibSQL({
  url: url,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
    adapter,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

