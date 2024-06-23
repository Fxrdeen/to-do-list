import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs/server";
import TaskCard from "./TaskCard";
import CompletedTask from "./CompletedTask";

const Todo = async () => {
  const user = await currentUser();
  const res = await prismadb.todo.findMany({
    where: {
      userId: user?.id,
    },
  });

  return (
    <section className="flex items-center justify-start flex-col mt-10 p-3 rounded-lg bg-primary/30 w-11/12 h-5/6">
      {res.map((task) => (
        <div key={task.id} className="w-full flex ">
          {task.Completed ? (
            <CompletedTask key={task.id} task={task} />
          ) : (
            <TaskCard key={task.id} task={task} />
          )}
        </div>
      ))}
    </section>
  );
};
export default Todo;
