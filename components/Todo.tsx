import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs/server";
import TaskCard from "./TaskCard";
import CompletedTask from "./CompletedTask";
import ConfettiPage from "./ConfettiPage";
import EmptyPage from "./EmptyPage";
const Todo = async () => {
  const user = await currentUser();
  const res = await prismadb.todo.findMany({
    where: {
      userId: user?.id,
    },
  });
  const comp = res.filter((task) => task.Completed === true);
  return (
    <section className="flex items-center justify-start flex-col mt-10 p-3 rounded-lg bg-primary/30 w-11/12 h-5/6 overflow-auto">
      {res.length === comp.length && res.length !== 0 && (
        <div>
          <ConfettiPage />
        </div>
      )}
      {res.length === 0 && <EmptyPage />}
      {res.map((task) => (
        <div key={task.id} className="w-full flex">
          {task.Completed ? (
            <div className="w-full flex">
              <CompletedTask key={task.id} task={task} />
            </div>
          ) : (
            <TaskCard key={task.id} task={task} />
          )}
        </div>
      ))}
    </section>
  );
};
export default Todo;
