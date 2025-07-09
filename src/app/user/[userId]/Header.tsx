"use client";

import { Button } from "@/components/ui/button";
import { useUserStore } from "@/lib/userStore";
import { convertToTitleCase } from "@/lib/utils";
import { ArrowLeft, User } from "lucide-react";
import Link from "next/link";
import SideMenu from "./SideMenu";
import { formatTimestamp } from "@/lib/utils";

export default function Header() {
  const targetUser = useUserStore((state) => state.targetUser);
  if (!targetUser) return <p>loading targetUser...</p>;
  return (
    <header className="flex items-center gap-4 p-4 -mx-4 shadow">
      <Button asChild variant={"secondary"}>
        <Link href="/">
          <ArrowLeft />
        </Link>
      </Button>
      <div className="bg-secondary/80 p-4 rounded-full">
        <User />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl">
          {convertToTitleCase(targetUser.fullName)}
        </span>
        <span className="text-sm text-muted-foreground">
          Last login {formatTimestamp(targetUser.lastSignIn)}
        </span>
      </div>
      <div className="ml-auto"></div>
      <SideMenu />
    </header>
  );
}
