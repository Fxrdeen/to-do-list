import Navbar from "@/components/Navbar";
import Todo from "@/components/Todo";
import { TodoInput } from "@/components/TodoInput";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Separator />
      <div className="flex flex-1 flex-col items-center justify-between h-[500px] w-[800px] rounded-xl dark:bg-primary/15 bg-primary/10 mx-auto mt-5">
        <Todo />
      </div>
      <div className="flex flex-col items-center justify-center mx-auto w-[700px] mt-5">
        <TodoInput />
      </div>
    </div>
  );
}
