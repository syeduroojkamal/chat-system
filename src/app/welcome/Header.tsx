import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      <SignedOut>
        <SignInButton>
          <Button asChild>
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
        <Link href="/">Open App</Link>
        <div className="w-10 h-10 flex items-center justify-center">
          <UserButton />
        </div>
      </SignedIn>
    </header>
  );
}
