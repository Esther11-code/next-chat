import UserCard from "./UserCard";

export default function ChatsSidebar() {
  return (
    <div className="w-72 flex-shrink-0 h-full p-2">
      <h1 className="font-bold text-lg mb-3">Chats</h1>
      <UserCard active />
      <UserCard />
    </div>
  );
}
