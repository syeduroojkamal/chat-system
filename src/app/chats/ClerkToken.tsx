"use client";
import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export default function ClerkToken() {
  const { getToken, isSignedIn } = useAuth();
  const { user } = useUser();
  const [token, setToken] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);

  useEffect(() => {
    const fetchTokenAndPost = async () => {
      if (isSignedIn && user) {
        const jwt = await getToken();
        setToken(jwt);
        if (jwt && user.id) {
          try {
            const res = await fetch(
              "https://ws.chat-system.space/user/auth-user",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: jwt, userId: user.id }),
              }
            );
            const data = await res.json();
            setResponse(JSON.stringify(data));
          } catch (err) {
            setResponse(
              "Error: " + (err instanceof Error ? err.message : String(err))
            );
          }
        }
      }
    };
    fetchTokenAndPost();
  }, [isSignedIn, user, getToken]);
  // todo the whole return
  return (
    <div className="*:border">
      <p>Token ready for WebSocket: {token ? "Yes" : "No"}</p>
      <p>{user?.id}</p>
      <p>{token}</p>
      <p>Backend response: {response}</p>
    </div>
  );
}
