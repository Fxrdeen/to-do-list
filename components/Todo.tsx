import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs/server";
import TaskCard from "./TaskCard";

const Todo = async () => {
  const user = await currentUser();
  const res = await prismadb.todo.findMany({
    where: {
      userId: user?.id,
    },
  });

  return (
    <div className="flex items-center justify-start flex-col mt-10 p-3 rounded-lg bg-primary/30 w-11/12 h-5/6">
      {res.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
export default Todo;
