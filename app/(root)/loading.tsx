import { Loader } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="h-screen flex items-center justify-center w-full bg-primary/10">
      <Loader className="animate-spin" width={150} height={150} />
    </div>
  );
};

export default LoadingPage;
