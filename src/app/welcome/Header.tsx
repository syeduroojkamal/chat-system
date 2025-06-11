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

export default function Header() {
  return (
    <header className="flex items-center p-4 gap-4 h-16 border-b-2">
      <MessageSquare className="text-accent-foreground" />
      <span className="text-lg mr-auto">Chat System</span>
      <SignedOut>
        <SignInButton>
          <Button asChild variant={"ghost"}>
            <span>Sign in</span>
          </Button>
        </SignInButton>
        <SignUpButton>
          <Button asChild variant={"secondary"}>
            <span>Sign up</span>
          </Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <Link href="/">Open App</Link>
        <div className="w-10 h-10 flex items-center justify-center">
          <UserButton />
        </div>
      </SignedIn>
    </header>
  );
}
