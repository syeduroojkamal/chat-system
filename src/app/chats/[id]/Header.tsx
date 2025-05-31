import { Button } from "@/src/components/ui/button";
import { ChevronLeft, User } from "lucide-react";
import Link from "next/link";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";

export default function Header() {
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
          <p className="text-xl leading-none">Basic Group</p>
          <p className="text-sm text-muted-foreground">Online</p>
        </div>
      </header>
    </>
  );
}
