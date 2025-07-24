import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center gap-4 p-4 -mx-4 shadow">
      <Button asChild variant={"secondary"}>
        <Link href="/">
          <span>Cancel</span>
        </Link>
      </Button>
      <div className="flex flex-col">
        <span className="text-2xl">Add Friends</span>
      </div>
      <div className="ml-auto"></div>
    </header>
  );
}
