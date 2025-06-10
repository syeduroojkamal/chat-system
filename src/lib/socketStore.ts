import { io, Socket } from "socket.io-client";
import { create } from "zustand";
import { Message, parseMessage, useMessageStore } from "./messageStore";
import { parseUser, User, useUserStore } from "./userStore";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

// const webSocketServer = "http://localhost:3001";
const webSocketServer = "https://ws.chat-system.space";

type SocketStore = {
  socket: Socket | null;
  setSocket: (socket: Socket) => void;
  disconnect: () => void;
};

export const useSocketStore = create<SocketStore>((set, get) => ({
  socket: null,
  setSocket: (socket: Socket) => set({ socket }),
  disconnect: () => {
    const socket = get().socket;
    if (socket) {
      try {
        socket.removeAllListeners();
        socket.disconnect();
      } catch (error) {
        console.error("Socket disconnection error:", error);
      }
      set({ socket: null });
    }
  },
}));

export const useSocketConnect = () => {
  const socketState = useSocketStore((state) => state.socket);
  const setSocket = useSocketStore((state) => state.setSocket);

  useEffect(() => {
    if (socketState) return;
    try {
      const socket = io(webSocketServer, { transports: ["websocket"] });
      setSocket(socket);
    } catch (error) {
      console.error("Socket connection error:", error);
    }
  }, [socketState, setSocket]);
};

export const useInitUser = () => {
  const socket = useSocketStore.getState().socket;
  const { user: clerkUser } = useUser();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (socket && clerkUser) {
      const user = {
        userId: clerkUser.id,
        fullName: clerkUser.fullName ?? "",
        email: clerkUser.primaryEmailAddress?.emailAddress ?? "",
        accountCreated: clerkUser.createdAt
          ? new Date(clerkUser.createdAt).toISOString()
          : null,
        lastSignIn: clerkUser.lastSignInAt
          ? new Date(clerkUser.lastSignInAt).toISOString()
          : null,
      };
      const responseHandler = (response: {
        success: boolean;
        message: string;
        data?: User;
      }) => {
        if (response.success && response.data) {
          setUser(parseUser(response.data));
        } else {
          console.error("Server : ", response);
        }
      };
      socket.emit("initUser", user, responseHandler);
    }
  }, [socket, clerkUser, setUser]);
};

export const useFetchAllUsers = () => {
  const socket = useSocketStore((state) => state.socket);
  const userState = useUserStore((state) => state.user);
  const setFriends = useUserStore((state) => state.setFriends);

  useEffect(() => {
    if (!socket || !userState) return;

    const responseHandler = (response: {
      success: boolean;
      message: string;
      data?: User[];
    }) => {
      if (response.success && response.data) {
        setFriends(response.data.map(parseUser));
      } else {
        console.error("Server : ", response);
      }
    };
    socket.emit("fetchAllUsers", userState, responseHandler);
  }, [socket, userState, setFriends]);
};

export const useFetchMessages = () => {
  const socket = useSocketStore((state) => state.socket);
  const userState = useUserStore((state) => state.user);
  const targetUser = useUserStore((state) => state.targetUser);
  const setMessages = useMessageStore((state) => state.setMessages);

  useEffect(() => {
    if (!socket || !userState || !targetUser) return;

    const responseHandler = (response: {
      success: boolean;
      message: string;
      data?: Message[]; // todo this should be unknown
    }) => {
      if (response.success && response.data) {
        setMessages(
          Array.isArray(response.data) ? response.data.map(parseMessage) : []
        );
      } else {
        console.error("Server : ", response);
      }
    };

    socket.emit("fetchMessages", userState, targetUser, responseHandler);
  }, [socket, userState, targetUser, setMessages]);
};

export function userToServerMessage(message: Message) {
  const socket = useSocketStore.getState().socket;
  const addMessage = useMessageStore.getState().addMessage;
  if (!socket) return;

  const responseHandler = (response: {
    success: boolean;
    message: string;
    data?: Message; // todo this should be unknown
  }) => {
    if (response.success && response.data) {
      addMessage(parseMessage(response.data));
    } else {
      console.error("Server : ", response);
    }
  };

  socket.emit("userToServerMessage", message, responseHandler);
}

export const useServerToUserMessage = () => {
  const socket = useSocketStore.getState().socket;
  const addMessage = useMessageStore((state) => state.addMessage);

  useEffect(() => {
    if (!socket) return;

    const responseHandler = (response: {
      success: boolean;
      message: string;
      data?: Message; // todo this should be unknown
    }) => {
      if (response.success && response.data) {
        addMessage(parseMessage(response.data));
      } else {
        console.error("Server : ", response);
      }
    };

    socket
      .off("serverToUserMessage")
      .on("serverToUserMessage", responseHandler);
    return () => {
      socket.off("serverToUserMessage", responseHandler);
    };
  }, [socket, addMessage]);
};
