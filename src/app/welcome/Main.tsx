import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import ArchitectureSection from "./ArchitectureSection";
import DemoSection from "./DemoSection";
import Footer from "./Footer";

export default function Main() {
  return (
    <main className="*:px-4 *:flex *:flex-col *:justify-center *:items-center *:text-center scroll-smooth">
      <HeroSection />
      <FeaturesSection />
      <ArchitectureSection />
      <DemoSection />
      <Footer />
    </main>
  );
}
