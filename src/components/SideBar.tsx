import { Plus } from "lucide-react";
import { Button } from "./ui/button";

const SideBar = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-10 p-6">
      <div className="flex w-full">
        <Button className="w-full mx-5 rounded-2xl">
          <Plus className="h-4 w-4"></Plus>
          <span className="text-base">New Chat</span>
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
