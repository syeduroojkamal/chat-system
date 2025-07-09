import { create } from "zustand";

export type Message = {
  messageId: string | null;
  message: string;
  senderId: string;
  senderName: string;
  receiverId: string | null;
  roomId: string | null;
  timestamp: string | null;
  read: boolean;
};

type MessageStore = {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  addMessage: (message: Message) => void;
  updateMessage: (id: string, update: Partial<Message>) => void;
  setMarkMessagesReceived: () => void;
};

export const useMessageStore = create<MessageStore>((set) => ({
  messages: [],
  setMessages: (messages: Message[]) => set({ messages }),
  addMessage: (message: Message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  updateMessage: (id, update) =>
    set((state) => ({
      messages: state.messages.map((message) =>
        message.messageId === id ? { ...message, ...update } : message
      ),
    })),
  setMarkMessagesReceived: () =>
    set((state) => ({
      messages: state.messages.map((message) => ({ ...message, read: true })),
    })),
}));

export const parseMessage = (data: Partial<Message>): Message => {
  return {
    messageId: data.messageId ?? null,
    message: data.message ?? "",
    senderId: data.senderId ?? "",
    senderName: data.senderName ?? "",
    receiverId: data.receiverId ?? null,
    roomId: data.roomId ?? null,
    timestamp: data.timestamp ? String(data.timestamp) : null,
    read: !!data.read,
  };
};
