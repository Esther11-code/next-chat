export default function ChatTitleBar() {
  return (
    <div className="py-2 px-4 flex gap-2">
      <div className="rounded-full h-10 w-10 bg-black relative flex-shrink-0">
        Img
      </div>
      <div>
        <h2 className="font-semibold text-lg leading-tight">John Doe</h2>
        <p className="text-green-700 text-xs leading-tight overflow-ellipsis max-h-16 line-clamp-2">
          online
        </p>
      </div>
    </div>
  );
}
