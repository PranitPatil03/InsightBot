import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/ui/resizable";
import SideBar from "../components/SideBar";
import Chat from "../components/Chat";

const ChatPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <ResizablePanelGroup direction="horizontal" className="w-full">
        <ResizablePanel defaultSize={15} maxSize={15} minSize={15}>
          <SideBar />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="flex items-center justify-center w-full">
          <Chat></Chat>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ChatPage;
