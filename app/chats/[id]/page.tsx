"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { ChevronLeft, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { sampleUsers } from "../sampleData";

export default function ChatInterface() {
  const { id } = useParams();
  const user = sampleUsers.find((user) => user.id === parseInt(id as string));

  return (
    <>
      <header className="flex items-center gap-4 border-b-2 border-muted p-4">
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
    </>
  );
}
