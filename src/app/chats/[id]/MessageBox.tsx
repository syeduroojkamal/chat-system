import { useState } from "react";
import { SendHorizonal } from "lucide-react";

import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { useSocket } from "@/src/lib/SocketContext";

export default function MessageBox() {
  const socket = useSocket();
  const [input, setInput] = useState("");

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (socket && input.trim()) {
      socket.emit("client-server-message", input.trim());
      setInput("");
    }
  };

  return (
    <div>
      <form
        className="fixed bottom-0 left-0 right-0 flex items-center gap-2 p-4 bg-background border-t-2 border-muted"
        onSubmit={sendMessage}
      >
        <Input
          className="border border-muted rounded-md p-5"
          value={input}
          type="text"
          id="message-box"
          name="message-box"
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          variant="default"
          size="icon"
          type="submit"
          disabled={!input.trim()}
        >
          <SendHorizonal />
        </Button>
      </form>
    </div>
  );
}
