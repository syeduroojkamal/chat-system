"use client";

import { useEffect, useRef } from "react";
import { useMessageStore } from "@/lib/messageStore";
import MessageBubble from "./MessageBubble";
import { useFetchMessages, useServerToUserMessage } from "@/lib/socketStore";

export default function MessagesArea() {
  const messages = useMessageStore((state) => state.messages);
  const latestMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useFetchMessages();
  useServerToUserMessage();

  if (!messages) return <p>Loading messages...</p>;
  return (
    <div className="grow flex flex-col gap-2 overflow-y-auto p-4">
      {messages.map((message) => (
        <MessageBubble key={message.messageId} message={message} />
      ))}
      <div ref={latestMessageRef} />
    </div>
  );
}
