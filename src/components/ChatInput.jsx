"use client";
import { FaImage, FaPaperPlane } from "react-icons/fa";

export default function ChatInput() {
  return (
    <section className="p-3 bg-[#00000011] h-fit flex-shrink-0">
      <div className="flex gap-3 items-center">
        <form className="flex-shrink-0 w-fit">
          <label htmlFor="image-select">
            <span className="bg-white rounded-full h-12 w-12 aspect-square hover:scale-90 flex justify-center items-center">
              <FaImage />
            </span>
          </label>
          <input type="file" name="image" id="image-select" hidden />
        </form>
        <form className="flex gap-2 items-center w-full">
          <textarea
            name="message"
            rows={1}
            className="w-full rounded-md px-4 py-2 h-fit max-h-[200px] resize-y outline-primary"
            placeholder="Enter message here..."
          />
          <button className="bg-primary rounded-full h-12 w-12 aspect-square hover:scale-90 flex justify-center items-center">
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}
