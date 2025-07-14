import { router, publicProcedure } from "../../trpc";
import { z } from "zod";

export const postRouter = router({
  getPost: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.post.findMany();
  }),
  createPost: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
        published: z.boolean(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { title, content, published } = input;
      return await ctx.prisma.post.create({
        data: {
          title,
          content,
          published,
        },
      });
    }),
});