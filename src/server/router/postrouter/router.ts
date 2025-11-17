import { router , publicProcedure } from "../../trpc";
import { z } from "zod";

export const postRouter = router({
    getPost: publicProcedure.query(async ({ ctx }) => {
        return ctx.prisma.post.findMany();
    }),
    createPost : publicProcedure
        .input(
            z.object({
                title: z.string(),
                content: z.string(),
                slug: z.string(),
                Status: z.enum(["DRAFT", "PUBLISHED"]),
            })
        )
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.post.create({
                data: input,
            });
        }),
});