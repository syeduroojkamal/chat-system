import { Message } from "@/lib/messageStore";
import { useUserStore } from "@/lib/userStore";

function formatTimestamp(timestamp: string | null): string {
  if (!timestamp) return "";
  return new Date(timestamp).toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    month: "short",
    day: "numeric",
  });
}

export default function MessageBubble({ message }: { message: Message }) {
  const userState = useUserStore((state) => state.user);
  if (!userState) return null;

  if (message.senderId === userState.userId) {
    return (
      <div className="self-end bg-primary text-primary-foreground px-4 py-2 rounded-md max-w-2/3 flex flex-col items-end">
        <p>{message.message}</p>
        <p className="text-xs text-primary-foreground/70">
          {formatTimestamp(message.timestamp)}
        </p>
      </div>
    );
  }
  return (
    <div className="self-start bg-muted px-4 py-2 rounded-md max-w-2/3 flex flex-col items-start">
      <p>{message.message}</p>
      {message.timestamp && (
        <p className="text-xs text-muted-foreground/50">
          {formatTimestamp(message.timestamp)}
        </p>
      )}
    </div>
  );
}
