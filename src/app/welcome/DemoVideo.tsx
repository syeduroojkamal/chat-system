export default function DemoVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full max-w-md rounded-xl shadow"
    >
      <source src="/demo.webm" type="video/webm" />
      <source src="/demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
