import DemoVideo from "./DemoVideo";

export default function DemoSection() {
  return (
    <section className="pt-28">
      <h1 className="text-3xl font-bold mb-4">See it in action</h1>
      <p className="text-current/70 mb-8">
        Watch our demo to see how the chat application works in real-time
        scenarios.
      </p>
      <div className="max-w-2xl shadow border-8 border-card bg-card rounded-xl">
        <DemoVideo id="demo-video" />
      </div>
    </section>
  );
}
