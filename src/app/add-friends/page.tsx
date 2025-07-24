"use client";

import {
  useFetchAllUsers,
  useInitUser,
  useSocketConnect,
  useSocketStore,
} from "@/lib/socketStore";
import Header from "./Header";
import { useUserStore } from "@/lib/userStore";
import UserSelectors from "./UserSelectors";

export default function Page() {
  const socket = useSocketStore((state) => state.socket);
  const userState = useUserStore((state) => state.user);

  useSocketConnect();
  useInitUser();
  useFetchAllUsers();

  if (!socket) return <p>loading socket...</p>;
  if (!userState) return <p>loading userState...</p>;

  return (
    <div className="px-4 flex flex-col h-svh">
      <Header />
      <UserSelectors />
    </div>
  );
}
