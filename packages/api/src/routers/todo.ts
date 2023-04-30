import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const todoRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string().optional() }).optional())
    .query(({ input, ctx }) => {
      return `Hi ${
        input?.text || "Random Person"
      }, welcome to T3 Plasmo Turbo App`;
    }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    // try {
    const todos = await ctx.prisma.todo.findMany();
    return todos;
    // } catch (error: any) {
    //   throw new TRPCError({
    //     code: error.code || "INTERNAL_SERVER_ERROR",
    //     message: error.message,
    //   });
    // }
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
