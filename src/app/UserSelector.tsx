import Link from "next/link";
import { User } from "@/lib/userStore";
import { User as UserIcon } from "lucide-react";
import { convertToTitleCase } from "@/lib/utils";

export default function UserSelector({ user }: { user: User }) {
  return (
    <Link
      href={"/user/" + user.userId}
      className="bg-card h-24 rounded-2xl flex items-center px-8 gap-4 border shadow"
    >
      <div className="bg-muted p-4 rounded-full">
        <UserIcon />
      </div>
      <p className="text-2xl">{convertToTitleCase(user.fullName)}</p>
    </Link>
  );
}
