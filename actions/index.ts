"use server";

import { FormSchema } from "@/components/TodoInput";
import prismadb from "@/lib/prismadb";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function UploadTodo(dat: z.infer<typeof FormSchema>) {
  const post = await prismadb.todo.create({
    data: {
      Task: dat.todo,
      userId: dat.userId,
      Completed: false,
    },
  });
  revalidatePath("/");
}

export async function DeleteDo(task: string, userId: string) {
  await prismadb.todo.deleteMany({
    where: {
      Task: task,
      userId: userId,
    },
  });
  revalidatePath("/");
}

export async function markAsComp(task: string, userId: string) {
  await prismadb.todo.updateMany({
    where: {
      Task: task,
      userId: userId,
    },
    data: {
      Completed: true,
    },
  });
  revalidatePath("/");
}
