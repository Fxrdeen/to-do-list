"use client";
import { DeleteAll } from "@/actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const FinishModal = () => {
  const { toast } = useToast();
  const { user } = useUser();
  if (!user) redirect("/sign-in");
  const onDelete = async () => {
    try {
      await DeleteAll(user.id);
      toast({ title: "Tasks has been deleted successfully" });
    } catch (error) {
      toast({
        title: "Some Error Occured while deleting Todo",
        variant: "destructive",
      });
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <Button variant={"outline"} onClick={onDelete}>
        Delete Tasks
      </Button>
    </div>
  );
};

export default FinishModal;
