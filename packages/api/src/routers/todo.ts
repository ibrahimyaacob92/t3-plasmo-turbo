import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { z } from "zod";

export const todoRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string().optional() }).optional())
    .query(({ input, ctx }) => {
      return `Hi ${
        input?.text || "Random Persom"
      }, welcome to T3 Plasmo Turbo App`;
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.todo.findMany();
  }),
  createTodo: protectedProcedure
    .input(
      z.object({
        todo: z.string().nonempty(),
        createdBy: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.todo.create({
        data: {
          todo: input.todo,
          createdBy: ctx.auth.userId || "Anon",
        },
      });
    }),
});
