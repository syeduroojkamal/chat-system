"use client";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export default function Ws() {
  const socketRef = useRef<Socket | null>(null);
  const [allMessages, setAllMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:3001");
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Connected to server");

      socket.emit("hello", "Hello from client");
    });

    socket.on("receive-message", (message) => {
      setAllMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (socketRef.current && input.trim()) {
      socketRef.current.emit("send-message", input);
      setAllMessages((prev) => [...prev, `You: ${input}`]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mb-12">
      <h1 className="mb-12">Simple Chat Room</h1>
      <div className="border p-4 w-full mb-12">
        {allMessages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="border p-4 ">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message..."
          autoFocus
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
