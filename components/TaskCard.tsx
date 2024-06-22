"use client";
import { MoreVertical, Trash } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useToast } from "./ui/use-toast";
import { DeleteDo } from "@/actions";

type Props = {
  task: {
    id: string;
    userId: string;
    Task: string;
  };
};

const TaskCard = ({ task }: Props) => {
  const { toast } = useToast();
  const onDelete = async () => {
    try {
      await DeleteDo(task.Task);
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
    <div className="flex w-full h-12 rounded-lg bg-primary/30 m-2 items-center justify-around">
      <div className="flex flex-col">Task: {task.Task}</div>
      <Button size={"default"} variant={"outline"}>
        Mark As Complete
      </Button>
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

export default TaskCard;
