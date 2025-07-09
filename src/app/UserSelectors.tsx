"use client";

import { useUserStore } from "@/lib/userStore";
import UserSelector from "./UserSelector";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function UserSelectors() {
  const friends = useUserStore((state) => state.friends);
  const [search, setSearch] = useState("");

  if (!friends) return <p>loading friends...</p>;

  return (
    <>
      <Input
        className="mt-8 py-6 text-center placeholder:text-center"
        placeholder="Friend Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-col gap-4 mt-8">
        {friends
          .filter((user) =>
            user.fullName.toLowerCase().includes(search.toLowerCase())
          )
          .map((user) => (
            <UserSelector key={user.userId} user={user} />
          ))}
      </div>
    </>
  );
}
