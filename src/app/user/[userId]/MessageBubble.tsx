import { Message } from "@/lib/messageStore";
import { useUserStore } from "@/lib/userStore";
import { formatTimestamp } from "@/lib/utils";
import { Check, CheckCheck } from "lucide-react";

export default function MessageBubble({ message }: { message: Message }) {
  const userState = useUserStore((state) => state.user);
  if (!userState) return null;

  if (message.senderId === userState.userId) {
    return (
      <div className="self-end bg-primary text-primary-foreground px-4 py-2 rounded-md max-w-2/3 flex flex-col items-end border shadow">
        <p>{message.message}</p>
        <div className="flex justify-end items-center text-xs gap-1">
          <p className="text-xs text-primary-foreground/70">
            {formatTimestamp(message.timestamp)}
          </p>
          {message.read ? (
            <CheckCheck className="size-4" />
          ) : (
            <Check className="size-4" />
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="self-start bg-muted px-4 py-2 rounded-md max-w-2/3 flex flex-col items-start border shadow">
      <p>{message.message}</p>
      <p className="text-xs text-muted-foreground/60">
        {formatTimestamp(message.timestamp)}
      </p>
    </div>
  );
}
