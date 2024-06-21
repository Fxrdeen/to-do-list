"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { UploadTodo } from "@/actions";

export const FormSchema = z.object({
  todo: z.string().min(2, {
    message: "ToDo must be at least 2 characters.",
  }),
  userId: z.string().nonempty({
    message: "UserId not possible",
  }),
});

export function TodoInput() {
  const { user } = useUser();
  if (!user) redirect("/sign-in");
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      todo: "",
      userId: user.id,
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await UploadTodo(data);
      toast({ title: "Todo Has been added successfully" });
    } catch (error) {
      toast({
        title: "Some Error Occured",
        variant: "destructive",
      });
      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="todo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ToDo Input</FormLabel>
              <FormControl>
                <Input placeholder="Type your Todo here..." {...field} />
              </FormControl>
              <FormDescription>Please enter the required Todo</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add ToDo</Button>
      </form>
    </Form>
  );
}
