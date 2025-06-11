"use client";

export default function DemoVideo({ id }: { id?: string }) {
  return (
    <video id={id} controls className="w-full max-w-md rounded-xl shadow">
      <source src="/demo.webm" type="video/webm" />
      <source src="/demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
