import { router, publicProcedure } from "../../trpc";
import { db } from "@/lib/drizzle";
import { Post } from "@/lib/schema";
import { z } from "zod";

export const postRouter = router({
    getPost: publicProcedure.query(async () => {
        return await db.select().from(Post);
    }),
    createPost: publicProcedure.input(z.object({
        title: z.string(),
        content: z.string(),
        Status: z.enum(["DRAFT", "PUBLISHED"]),
    })).mutation(async ({ input }) => {
        const slug = input.title.toLowerCase().replace(/\s/g, "-");
        return await db.insert(Post).values({
            slug,
            ...input,
        });
    })
});
