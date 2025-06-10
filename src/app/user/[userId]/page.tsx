"use client";

import { findUserById, useUserStore } from "@/lib/userStore";
import { useParams, notFound } from "next/navigation";
import { useEffect } from "react";
import Header from "./Header";
import MessageInput from "./MessageInput";
import MessagesArea from "./MessagesArea";
import {
  useFetchAllUsers,
  useInitUser,
  useSocketConnect,
} from "@/lib/socketStore";
import { useMessageStore } from "@/lib/messageStore";

export default function Page() {
  const userId = useParams().userId as string;
  const friends = useUserStore((state) => state.friends);
  const setTargetUser = useUserStore((state) => state.setTargetUser);
  const setMessages = useMessageStore((state) => state.setMessages);

  // useEffect to remove flicker while loading chat
  useEffect(() => {
    return () => {
      setMessages([]);
      setTargetUser(null);
    };
  }, [setMessages, setTargetUser]);

  useSocketConnect();
  useInitUser();
  useFetchAllUsers();

  useEffect(() => {
    if (friends) {
      const foundUser = findUserById(userId);
      if (!foundUser) notFound();
      setTargetUser(foundUser);
    }
  }, [friends, setTargetUser, userId]);

  // useEffect for making main container height smaller when input is clicked
  // useEffect(() => {
  //   const updateHeight = () => {
  //     const height = window.visualViewport?.height;
  //     if (height) {
  //       const mainContainer = document.getElementById("main-container");
  //       if (mainContainer) {
  //         mainContainer.style.height = `${height}px`;
  //       }
  //     }
  //   };

  //   window.visualViewport?.addEventListener("resize", updateHeight);
  //   updateHeight();

  //   return () =>
  //     window.visualViewport?.removeEventListener("resize", updateHeight);
  // }, []);

  if (!friends) return <p>loading friends...</p>;

  return (
    <div className="px-4 flex flex-col h-svh">
      <Header />
      <MessagesArea />
      <MessageInput />
    </div>
  );
}
