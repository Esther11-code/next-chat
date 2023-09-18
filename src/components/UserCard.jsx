import { memo } from "react";

export default memo(function UserCard({ active, title, message, img }) {
  return (
    <div
      className={`p-2 flex gap-2 rounded cursor-pointer mb-1 ${active
        ? "bg-primary bg-opacity-30"
        : "hover:bg-[#00000011] "}`}
    >
      <div className="rounded-full h-10 w-10 bg-black relative flex-shrink-0">
        Img
      </div>
      <div>
        <h2 className="font-semibold text-sm leading-tight">John Doe</h2>
        <p className="opacity-80 text-xs leading-tight overflow-ellipsis max-h-16 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          voluptatem!
        </p>
      </div>
    </div>
  );
});
