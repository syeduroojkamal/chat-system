import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToTitleCase(s: string) {
  return s
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatTimestamp(timestampString: string | null): string {
  if (!timestampString) return "";
  const timestamp = new Date(timestampString);
  const currentTime = new Date();

  const isToday =
    timestamp.getDate() === currentTime.getDate() &&
    timestamp.getMonth() === currentTime.getMonth() &&
    timestamp.getFullYear() === currentTime.getFullYear();

  const time = timestamp.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const day = timestamp.getDate();
  const month = timestamp.toLocaleString("en-IN", { month: "long" });

  if (isToday) {
    return `${time}`;
  }
  return `${time}, ${day} ${month}`;
}
