import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageCircle, Shield, Users, Zap } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="pt-28">
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
  );
}
