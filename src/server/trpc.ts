import { initTRPC } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { prisma } from "./db";

/**
 * Creates context for tRPC requests.
 * You can add anything here that you want to be available in your tRPC procedures.
 * For example, user authentication data, database connection, etc.
 */
export async function createContext(opts: CreateNextContextOptions) {
  // Example: Get user from request headers or session
  const user = { id: "123", name: "Guest" }; // Replace with actual auth logic

  return {
    user,
    prisma
    // Add your database client here if using Prisma, etc.
  };
}

type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<Context>().create();

/**
 * Reusable middleware for logging procedures
 */
const loggerMiddleware = t.middleware(async ({ path, type, next }) => {
  const start = Date.now();
  const result = await next();
  const durationMs = Date.now() - start;
  console.log(`[tRPC] ${type} ${path} - ${durationMs}ms`);
  return result;
});

// Export reusable router and procedure helpers
export const router = t.router;
export const publicProcedure = t.procedure.use(loggerMiddleware); // Apply logging to all public procedures
// export const protectedProcedure = t.procedure.use(isAuthed); // Example of a protected procedure with auth middleware