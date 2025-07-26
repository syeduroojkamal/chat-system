"use client";

import { UserButton } from "@clerk/nextjs";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

import ThemeToggleButton from "./welcome/ThemeToggleButton";
import SideMenu from "./SideMenu";

export default function Header() {
  return (
    <header className="flex items-center gap-4">
      <MessageSquare className="text-primary shrink" />
      <span className="text-lg mr-auto whitespace-nowrap shrink">
        Chat System
      </span>
      <div className="ml-auto"></div>
      <ThemeToggleButton />
      <Button variant={"link"} size={"icon"}>
        <UserButton />
      </Button>
      <SideMenu />
    </header>
  );
}
