require("dotenv").config();
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/schema.ts',
  out: './prisma/migrations',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTHTOKEN!,
  },
} satisfies Config;
