import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/chat");
  };

  return (
    <div className="flex items-center justify-center w-full h-screen dark:bg-dark ">
      <Button onClick={handleNavigate}>Start the Chat</Button>
    </div>
  );
};

export default HomePage;
