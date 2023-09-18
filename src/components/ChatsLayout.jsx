"use client";
import ChatBubble from "@/components/ChatBubble";
import { useCallback, useEffect, useRef } from "react";

export default function ChatsLayout() {
  const sectionRef = useRef(null);
  const scrollToBottom = useCallback((force = true) => {
    if (force) {
      sectionRef.current.scrollTop = sectionRef.current.scrollHeight;
    } else {
      // check if the gap between the scroll bottom is up to 20px
      // if so, scroll to the bottom
      if (
        sectionRef.current.scrollHeight -
          sectionRef.current.scrollTop -
          sectionRef.current.clientHeight <
        20
      )
        sectionRef.current.scrollTop = sectionRef.current.scrollHeight;
    }
  }, []);

  useEffect(
    () => {
      scrollToBottom();
    },
    [scrollToBottom]
  );

  return (
    <section ref={sectionRef} className="h-full overflow-y-auto">
      <ChatBubble type="image" data="/images/test.jpg" />
      <ChatBubble type="image" data="/images/test.jpg" isMine />
      <ChatBubble type="image" data="/images/test.jpg" />
      <ChatBubble
        isMine
        type="text"
        data="hello world Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Velit quibusdam repudiandae quia, rerum ducimus rem
        reiciendis! Veniam aspernatur error quia."
      />
    </section>
  );
}
