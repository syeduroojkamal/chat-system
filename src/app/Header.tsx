"use client";

import { UserButton } from "@clerk/nextjs";
import { MessageSquare } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center gap-2">
      <MessageSquare className="text-accent-foreground" />
      <span className="text-lg">Chat System</span>
      <div className="w-10 h-10 flex items-center justify-center ml-auto">
        <UserButton />
      </div>
    </header>
  );
}
