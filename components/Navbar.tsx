import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ModeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="h-14 flex items-center w-screen justify-between p-10 bg-primary/10">
      <div className="flex items-center m-2 p-4">
        <Link href={"/"} className="text-2xl font-bold m-2 p-2">
          <h1 className="font-serif">Fxr To-do</h1>
        </Link>
        <div className="ml-6 py-2 relative">
          <ModeToggle />
        </div>
      </div>
      <div className="flex items-center m-2 p-4">
        <Link href={"/about"} className="text-lg font-bold m-2 p-2 mr-10">
          <h1 className="font-serif">About</h1>
        </Link>
        <div className="ml-2 px-2">
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
