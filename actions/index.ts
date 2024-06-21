"use server";

import { FormSchema } from "@/components/TodoInput";
import prismadb from "@/lib/prismadb";
import { z } from "zod";

export async function UploadTodo(dat: z.infer<typeof FormSchema>) {
  const post = await prismadb.todo.create({
    data: {
      Task: dat.todo,
      userId: dat.userId,
    },
  });
  console.log(post);
}
