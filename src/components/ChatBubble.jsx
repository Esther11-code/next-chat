"use client";

import Image from "next/image";

export default function ChatBubble({ isMine, data, dateTime, type }) {
  return (
    <div
      className={`
  flex  p-2 ${isMine ? "flex-row-reverse" : ""}
  `}
    >
      <div
        className={` p-2 rounded-2xl  max-w-[300px]
    ${isMine
      ? "flex-row-reverse bg-primary bg-opacity-30 rounded-br-none"
      : "bg-[#00000011] rounded-bl-none"}
    `}
      >
        {loadMessage(type, data)}
        <div className="flex justify-end gap-2 mt-1">
          <span className="leading-none opacity-60 text-[12px]">seen</span>
          <span className="leading-none opacity-60 text-[12px]">3d ago</span>
        </div>
      </div>
    </div>
  );
}

function loadMessage(type, data) {
  if (type === "image") {
    return (
      <Image
        height={300}
        width={300}
        alt=""
        src={data}
        className="w-full rounded-md"
      />
    );
  } else {
    return (
      <p className="opacity-80 text-sm leading-tight">
        {data}
      </p>
    );
  }
}
