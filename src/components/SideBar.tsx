import { Plus } from "lucide-react";
import { Button } from "./ui/button";

const SideBar = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-10 p-6">
      <div className="flex w-full">
        <Button className="w-full mx-5">
          <Plus></Plus>
          New chat
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
