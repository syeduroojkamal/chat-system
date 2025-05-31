import { useState, useEffect } from "react";
import { useSocket } from "@/src/lib/SocketContext";

import ChatBubble from "@/src/components/ChatBubble";

export default function Messages() {
  const socket = useSocket();
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    if (!socket) return;

    // todo useCallback
    const addAlertMessage = (clientId: string) => {
      setMessages((prev) => [...prev, `👋 ${clientId} user has joined`]);
    };
    socket.on("alert", addAlertMessage);

    // todo useCallback
    const addMessage = (message: string) => {
      setMessages((prev) => [...prev, message]);
    };
    socket.on("server-client-message", addMessage);

    return () => {
      socket.off("alert", addAlertMessage);
      socket.off("server-client-message", addMessage);
    };
  }, [socket]);

  return (
    <div className="m-4 pb-20">
      {messages.map((value, index) => {
        return (
          <ChatBubble
            key={index}
            id={1}
            sender="other"
            timestamp={new Date().toString()}
            content={value}
            read={false}
          />
        );
      })}
    </div>
  );
}
