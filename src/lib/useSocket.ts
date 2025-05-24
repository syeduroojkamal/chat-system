import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

// TODO: better way to get the socket server URL
const SOCKET_SERVER_URL = "http://localhost:3001";

export const useSocket = () => {
  const socketRef = useRef<Socket | null>(null);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(SOCKET_SERVER_URL);
      setSocket(socketRef.current);
    }

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  return socket;
};
