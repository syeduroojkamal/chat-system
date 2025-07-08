import { Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ArchitectureSection() {
  return (
    <section className="pt-28">
      <h1 className="flex items-center text-3xl font-bold mb-4">
        <Building2 className="size-8 text-blue-600 inline-block mr-2" />
        <span>Application Architecture</span>
      </h1>
      <p className="text-current/70 mb-8">
        Explore the robust architecture powering our chat application, designed
        for scalability and performance.
      </p>
      <Link
        href={
          "https://github.com/syeduroojkamal/chat-system/blob/main/public/architecture.jpg"
        }
        target="_blank"
        className="relative w-full max-w-4xl aspect-[3/2] border-8 border-card bg-card rounded-xl"
      >
        <Image
          src="/architecture.jpg"
          fill
          className="rounded-xl shadow"
          alt="Application Architecture Diagram"
          loading="lazy"
        />
      </Link>
    </section>
  );
}
