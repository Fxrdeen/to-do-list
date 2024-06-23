import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs/server";
import TaskCard from "./TaskCard";
import CompletedTask from "./CompletedTask";
import ConfettiPage from "./ConfettiPage";
import EmptyPage from "./EmptyPage";
import FinishModal from "./FinishModal";
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
      {res.length === comp.length && res.length !== 0 && (
        <div className="flex flex-col items-center justify-end mt-5">
          <ConfettiPage />
          <h1 className="flex items-center justify-center text-xl mb-1 text-center font-bold p-2">
            Congrats on Completing All the Tasks!
          </h1>
          <h1 className="flex items-center justify-center text-xl mb-5 text-center font-bold p-2">
            You can now go ahead and delete them
          </h1>
          <FinishModal />
        </div>
      )}
    </section>
  );
};
export default Todo;
