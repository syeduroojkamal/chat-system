"use client";

import { SocketProvider } from "@/src/lib/SocketContext";

import Header from "./Header";
import Messages from "./Messages";
import MessageBox from "./MessageBox";

export default function ChatInterface() {
  return (
    <SocketProvider>
      <Header />
      <Messages />
      <MessageBox />
    </SocketProvider>
  );
}
