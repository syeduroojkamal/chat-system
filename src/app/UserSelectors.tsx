"use client";

import { useUserStore } from "@/lib/userStore";
import UserSelector from "./UserSelector";

export default function UserSelectors() {
  const friends = useUserStore((state) => state.friends);

  if (!friends) return <p>loading friends...</p>;

  return (
    <div className="flex flex-col gap-4 mt-8">
      {friends.map((user) => (
        <UserSelector key={user.userId} user={user} />
      ))}
    </div>
  );
}
