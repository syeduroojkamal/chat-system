"use client";

import { useState, useEffect } from "react";
import { io } from "socket.io-client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { ChevronLeft, SendHorizonal, User } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";

import ChatBubble from "@/src/components/ChatBubble";

import { sampleUsers } from "../sampleData";
// import { sampleMessages } from "./sampleData";

const socket = io("https://ws.chat-system.space");

export default function ChatInterface() {
  const { id } = useParams();
  const user = sampleUsers.find((user) => user.id === id);

  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addMessage = (message: string) => {
    setMessages((prev) => [...prev, message]);
  };

  const addAlertMessage = (clientId: string) => {
    setMessages((prev) => [...prev, `👋 ${clientId} user has joined`]);
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    socket.emit("client-server-message", input);
    setInput("");
  };

  useEffect(() => {
    socket.on("alert", (clientId) => {
      addAlertMessage(clientId);
    });

    socket.on("server-client-message", (message) => {
      addMessage(message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 bg-background z-1 flex items-center gap-4 border-b-2 border-muted p-4">
        <Link href="/chats">
          <Button variant={"secondary"} size={"icon"}>
            <ChevronLeft />
          </Button>
        </Link>
        <Avatar className="h-12 w-12">
          <AvatarImage src="" alt="@shadcn" />
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col space-y-1">
          <p className="text-xl leading-none">{user?.name}</p>
          <p className="text-sm text-muted-foreground">Online</p>
        </div>
      </header>
      <main className="m-4 pb-20">
        {/* {sampleMessages.map((message, index) => (
          <ChatBubble
            key={index}
            id={message.id}
            content={message.content}
            sender={message.sender}
            timestamp={message.timestamp}
            read={message.read}
            avatar={message.avatar}
            name={message.name}
          />
        ))} */}
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
      </main>
      <div>
        <form
          className="fixed bottom-0 left-0 right-0 flex items-center gap-2 p-4 bg-background border-t-2 border-muted"
          onSubmit={sendMessage}
        >
          <Input
            className="border border-muted rounded-md p-5"
            value={input}
            type="text"
            placeholder="Type a message..."
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="default" size="icon">
            <SendHorizonal />
          </Button>
        </form>
      </div>
    </>
  );
}
