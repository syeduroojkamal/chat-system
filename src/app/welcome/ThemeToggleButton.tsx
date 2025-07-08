"use client";

import { Button } from "@/components/ui/button";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      variant={"secondary"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <SunMoon />
    </Button>
  );
}
