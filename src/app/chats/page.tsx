"use client";

import { useEffect } from "react";

import { MessageSquare } from "lucide-react";

import { UserButton, useUser } from "@clerk/nextjs";

import { Input } from "@/src/components/ui/input";

import UserSelector from "@/src/components/UserSelector";

import ClerkToken from "./ClerkToken";

export default function Chats() {
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user) return;
    const createUser = async () => {
      try {
        await fetch("https://ws.chat-system.space/user/create-user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user.id,
            fullName: user.fullName,
            email: user.emailAddresses[0].emailAddress,
            accountCreated: user.createdAt,
            lastSignIn: user.lastSignInAt,
          }),
        });
      } catch (err) {
        console.error("Failed to create user:", err);
      }
    };
    createUser();
  }, [isLoaded, isSignedIn, user]);

  return (
    <>
      <header className="flex justify-end items-center p-4 gap-4 h-16 mb-8">
        <div className="mr-auto flex items-center gap-2">
          <MessageSquare className="text-primary" />
          <span>Chat System</span>
        </div>
        <ClerkToken />
        <UserButton />
      </header>
      <div className="mx-4">
        <Input
          placeholder="Search Direct Messages"
          className="px-10 h-12 rounded-full bg-card border border-muted mb-4"
        />
      </div>
      <div className="flex flex-col space-y-4 mx-4">
        <UserSelector key={1} name={"Basic Group"} id="1" />
      </div>
    </>
  );
}
