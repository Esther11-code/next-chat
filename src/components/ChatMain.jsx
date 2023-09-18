import ChatInput from "@/components/ChatInput";
import ChatTitleBar from "./ChatTitleBar";
import ChatsLayout from "./ChatsLayout";

export default function ChatMain() {
  return (
    <section className="h-[100vh] flex flex-col">
      <ChatTitleBar />
      <ChatsLayout />
      <ChatInput />
    </section>
  );
}
