import { router , publicProcedure } from "../../trpc";
import { prisma } from "@/lib/prisma";

export const postRouter = router({
    getPost: publicProcedure.query(async ({ ctx }) => {
        return ctx.prisma.post.findMany();
    }),
    createPost : publicProcedure.input(async ({ ctx }) => {
        return ctx.prisma.post.create(
            data:{

            }
        )
    })
});