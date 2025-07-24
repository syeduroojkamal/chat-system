import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import Link from "next/link";

export default function AddFriendButton() {
  return (
    <Link href={"/add-friends"}>
      <Button size={"lg"} className="fixed right-8 bottom-8">
        <UserPlus />
        <span>Add Friend</span>
      </Button>
    </Link>
  );
}
