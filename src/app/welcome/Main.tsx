import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Github from "@/svg/Github";
import { Building2, MessageCircle, Shield, Users, Zap } from "lucide-react";
import Image from "next/image";
import DemoVideo from "./DemoVideo";
import DemoVideoController from "./DemoVideoController";

export default function Main() {
  return (
    <main className="*:px-4 *:flex *:flex-col *:justify-center *:items-center *:text-center scroll-smooth">
      <section className="py-28">
        <h1 className="text-5xl mb-2">Next-Generation</h1>
        <h2 className="text-5xl font-bold text-accent-foreground mb-8">
          Chat System
        </h2>
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

      <section className="py-28 bg-accent/40">
        <h1 className="text-3xl font-bold mb-4">Powerful Features</h1>
        <p className="text-current/70 mb-8">
          Built with cutting-edge technology to deliver the best chat experience
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center mx-auto">
                <Zap className="text-blue-600 inline-block mr-2" />
                Real-time Messaging
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Instant message delivery with WebSocket connections for seamless
                communication.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center mx-auto">
                <Users className="text-green-600 inline-block mr-2" />
                Group Chats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Create and manage group conversations with advanced moderation
                tools.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center mx-auto">
                <Shield className="text-purple-600 inline-block mr-2" />
                End-to-End Encryption
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Your messages are secured with industry-standard encryption
                protocols.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center mx-auto">
                <MessageCircle className="text-orange-600 inline-block mr-2" />
                Rich Media Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Share images, files, and multimedia content with ease and speed.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-28">
        <h1 className="flex items-center text-3xl font-bold mb-4">
          <Building2 className="size-8 text-blue-600 inline-block mr-2" />
          <span>Application Architecture</span>
        </h1>
        <p className="text-current/70 mb-8">
          Explore the robust architecture powering our chat application,
          designed for scalability and performance.
        </p>
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-4xl aspect-[3/2]">
            <Image
              src="/architecture.jpg"
              fill
              className="object-contain rounded-lg shadow-lg"
              alt="Application Architecture Diagram"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-28 bg-accent/40">
        <h1 className="text-3xl font-bold mb-4">See it in action</h1>
        <p className="text-current/70 mb-8">
          Watch our demo to see how the chat application works in real-time
          scenarios.
        </p>
        <div className="flex justify-center items-center w-full max-w-2xl rounded-md overflow-hidden bg-background border">
          <DemoVideo id="demo-video" />
        </div>
      </section>
    </main>
  );
}
