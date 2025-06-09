import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";
import { userToServerMessage } from "@/lib/socketStore";
import { useState } from "react";
import { useUserStore } from "@/lib/userStore";

export default function MessageInput() {
  const userState = useUserStore((state) => state.user);
  const targetUser = useUserStore((state) => state.targetUser);
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!userState || !targetUser) return;
    const trimmed = input.trim();
    userToServerMessage({
      message: trimmed,
      senderId: userState.userId,
      senderName: userState.fullName,
      receiverId: targetUser.userId,
      roomId: null,
      messageId: null,
      timestamp: null,
      delivered: false,
      read: false,
    });
    setInput("");
  }

  return (
    <form className="flex gap-4 py-4 border-t" onSubmit={handleSubmit}>
      <Input
        placeholder="Type message here..."
        className="grow"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="Message input"
      />
      <Button type="submit" disabled={!input.trim()} aria-label="Send message">
        <SendHorizontal />
      </Button>
    </form>
  );
}
