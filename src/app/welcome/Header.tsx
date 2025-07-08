import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Header() {
  return (
    <header className="flex items-center p-4 gap-4 h-16 border-b-2">
      <MessageSquare className="text-primary" />
      <span className="text-lg mr-auto">Chat System</span>

      <SignedOut>
        <ThemeToggleButton />
        <SignInButton>
          <Button asChild variant={"secondary"}>
            <span>Sign in</span>
          </Button>
        </SignInButton>
        <SignUpButton>
          <Button asChild>
            <span>Sign up</span>
          </Button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <ThemeToggleButton />
        <Button>
          <Link href="/">Open App</Link>
        </Button>
        <Button variant={"link"} size={"icon"}>
          <UserButton />
        </Button>
      </SignedIn>
    </header>
  );
}
