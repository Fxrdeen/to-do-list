import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs/server";

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
        <div className="flex items-center justify-center w-full text-white">
          {task.Task}
        </div>
      ))}
    </div>
  );
};
export default Todo;
