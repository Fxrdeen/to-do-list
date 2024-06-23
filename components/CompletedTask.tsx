"use client";
import { CircleCheckBig, MoreVertical, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { DeleteDo } from "@/actions";
import { useToast } from "./ui/use-toast";

type Props = {
  task: {
    id: string;
    userId: string;
    Task: string;
    Completed: boolean;
  };
};

const CompletedTask = ({ task }: Props) => {
  const { toast } = useToast();
  const onDelete = async () => {
    try {
      await DeleteDo(task.Task, task.userId);
      toast({ title: "ToDo has been deleted successfully" });
    } catch (error) {
      toast({
        title: "Some Error Occured while deleting Todo",
        variant: "destructive",
      });
      console.log(error);
    }
  };
  return (
    <div className="flex w-full h-12 rounded-lg bg-green-600 m-2 items-center justify-around">
      <s>Task: {task.Task}</s>
      <div className="bg-green-800 rounded-lg m-2 h-10 p-2 flex">
        <h1 className="font-bold text-md">Task is completed</h1>
        <CircleCheckBig className="ml-3" size={25} />
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"secondary"} size={"icon"}>
              <MoreVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={onDelete}>
              <Trash className="w-4 h-4 mr-2" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default CompletedTask;
