import { exampleRouter } from "./example";
import { router } from "../trpc";

/**
 * This is the primary router for your server.
 *
 * All procedures are added here.
 */
export const appRouter = router({
  example: exampleRouter,
  // Add more routers here if you split your API into multiple files
});

// Export type definition of API
export type AppRouter = typeof appRouter;