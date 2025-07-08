"use client";

import { Button } from "@/components/ui/button";
import { useUserStore } from "@/lib/userStore";
import { convertToTitleCase } from "@/lib/utils";
import { ArrowLeft, User } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const targetUser = useUserStore((state) => state.targetUser);
  if (!targetUser) return <p>loading targetUser...</p>;
  return (
    <header className="flex items-center gap-4 p-4 -mx-4 border-b-2">
      <div className="bg-muted border p-4 rounded-full">
        <User />
      </div>
      <span className="text-2xl">
        {convertToTitleCase(targetUser.fullName)}
      </span>
      <Button asChild variant={"secondary"} className="ml-auto">
        <Link href="/">
          <ArrowLeft />
        </Link>
      </Button>
    </header>
  );
}
