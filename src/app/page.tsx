"use client";

import Header from "./Header";
import UserSelectors from "./UserSelectors";
import { useUserStore } from "@/lib/userStore";
import {
  useInitUser,
  useSocketConnect,
  useSocketStore,
  useFetchAllUsers,
} from "@/lib/socketStore";

export default function Page() {
  const socket = useSocketStore((state) => state.socket);
  const userState = useUserStore((state) => state.user);

  useSocketConnect();
  useInitUser();
  useFetchAllUsers();

  if (!socket) return <p>loading socket...</p>;
  if (!userState) return <p>loading userState...</p>;
  return (
    <div className="mx-4 mt-4">
      <Header />
      <UserSelectors />
    </div>
  );
}
