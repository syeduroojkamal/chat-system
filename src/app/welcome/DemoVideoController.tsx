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
      } else if ((video as any).webkitRequestFullscreen) {
        (video as any).webkitRequestFullscreen();
      } else if ((video as any).msRequestFullscreen) {
        (video as any).msRequestFullscreen();
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
