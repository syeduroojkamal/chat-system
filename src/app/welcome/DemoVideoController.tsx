"use client";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function DemoVideoController() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const video = document.getElementById(
      "demo-video"
    ) as HTMLVideoElement | null;
    if (video) {
      video.scrollIntoView({ behavior: "smooth", block: "center" });
      video.play();
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if ("webkitRequestFullscreen" in video) {
        (
          video as HTMLVideoElement & {
            webkitRequestFullscreen: () => Promise<void> | void;
          }
        ).webkitRequestFullscreen();
      } else if ("msRequestFullscreen" in video) {
        (
          video as HTMLVideoElement & {
            msRequestFullscreen: () => Promise<void> | void;
          }
        ).msRequestFullscreen();
      }
    }
  };

  return (
    <Button size="lg" onClick={handleClick}>
      <Play />
      Watch Demo
    </Button>
  );
}
