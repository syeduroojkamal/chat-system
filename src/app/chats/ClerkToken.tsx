"use client";
import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export default function ClerkToken() {
  const { getToken, isSignedIn } = useAuth();
  const { user } = useUser();
  const [authSuccess, setAuthSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchTokenAndPost = async () => {
      if (isSignedIn && user) {
        const jwt = await getToken();
        if (jwt && user.id) {
          try {
            const res = await fetch("http://localhost:3001/user/auth-user", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ token: jwt, userId: user.id }),
            });
            const data = await res.json();
            setAuthSuccess(res.ok && data?.success === true);
          } catch {
            setAuthSuccess(false);
          }
        }
      }
    };
    fetchTokenAndPost();
  }, [isSignedIn, user, getToken]);

  return <p>{authSuccess === null ? "..." : authSuccess ? "✅" : "❌"}</p>;
}
