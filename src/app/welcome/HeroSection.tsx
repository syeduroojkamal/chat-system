import { Button } from "@/components/ui/button";
import DemoVideoController from "./DemoVideoController";
import Github from "@/svg/Github";

export default function HeroSection() {
  return (
    <section className="pt-28 min-h-11/12">
      <h1 className="text-5xl mb-2">Next-Generation</h1>
      <h2 className="text-5xl font-bold text-primary mb-8">Chat System</h2>
      <p className="text-lg max-w-xl text-current/70 mb-8">
        Experience seamless real-time messaging with advanced features, robust
        architecture, and intuitive design. Built for modern teams and
        communities.
      </p>
      <div className="flex justify-center items-center gap-4">
        <DemoVideoController />
        <Button asChild variant={"outline"} size={"lg"}>
          <a
            href="https://github.com/syeduroojkamal/chat-system"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5 text-current" />
            View Source
          </a>
        </Button>
      </div>
    </section>
  );
}
