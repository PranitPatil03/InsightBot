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
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={18} maxSize={18} minSize={18}>
          <SideBar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <Chat></Chat>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ChatPage;
