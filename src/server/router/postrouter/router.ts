import { router, publicProcedure } from "../../trpc";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { prisma } from "@/server/db";
import { z } from "zod";

export const postRouter = router({
    getPost: publicProcedure.query(async ({ ctx }) => {
        return ctx.prisma.post.findMany();
    }),
    createPost: publicProcedure.input(z.object({
        title: z.string(),
        content: z.string(),
        Status: z.enum(["DRAFT", "PUBLISHED"]),
    })).mutation(async ({ ctx, input }) => {
        const slug = input.title.toLowerCase().replace(/\s/g, "-");
        return ctx.prisma.post.create({
            data: {
                slug,
                ...input,
            }
        });
    })
});