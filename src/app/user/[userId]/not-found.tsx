"use client";

import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 text-center">
      <Frown className="size-32 mb-4" />
      <h1 className="text-2xl">User Not Found</h1>
      <p className="mb-4">
        The user you are looking for does not exist <br /> or may have been
        removed.
      </p>
      <Button asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
}
