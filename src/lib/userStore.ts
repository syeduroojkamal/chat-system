import { create } from "zustand";

export type User = {
  userId: string;
  fullName: string;
  email: string;
  accountCreated: string | null;
  lastSignIn: string | null;
};

type UserStore = {
  user: User | null;
  friends: User[] | null;
  targetUser: User | null;
  setUser: (user: User) => void;
  setFriends: (friends: User[]) => void;
  setTargetUser: (targetUser: User | null) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  friends: null,
  targetUser: null,
  setUser: (user: User) => set({ user }),
  setFriends: (friends: User[]) => set({ friends }),
  setTargetUser: (targetUser: User | null) => set({ targetUser }),
}));

export const parseUser = (data: Partial<User>): User => {
  return {
    userId: data.userId ?? "",
    fullName: data.fullName ?? "",
    email: data.email ?? "",
    accountCreated: data.accountCreated ? String(data.accountCreated) : null,
    lastSignIn: data.lastSignIn ? String(data.lastSignIn) : null,
  };
};

export const findUserById = (userId: string): User | undefined => {
  const friends = useUserStore.getState().friends;
  return friends?.find((user) => user.userId === userId);
};
