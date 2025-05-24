import { MessageSquare } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

import UserSelector from "@/src/components/UserSelector";
import { Input } from "@/src/components/ui/input";
// import { sampleUsers } from "./sampleData";

// import ClerkComponent from "./ClerkComponent";

export default function Chats() {
  return (
    <>
      <header className="flex justify-end items-center p-4 gap-4 h-16 mb-8">
        <div className="mr-auto flex items-center gap-2">
          <MessageSquare className="text-primary" />
          <span>Chat System</span>
        </div>
        <UserButton />
      </header>
      <div className="mx-4">
        <Input
          placeholder="Search Direct Messages"
          className="px-10 h-12 rounded-full bg-card border border-muted mb-4"

          // value={searchQuery}
          // onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-col space-y-4 mx-4">
        <UserSelector key={1} name={"Basic Group"} id="1" />
        {/* Sample UserSelectors */}
        {/* {sampleUsers.map((user) => (
          <UserSelector key={user.id} name={user.name} id={user.id} />
        ))} */}
      </div>
      {/* <ClerkComponent /> */}
    </>
  );
}
