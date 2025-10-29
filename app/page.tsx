import { TopBar } from "@/components/TopBar";
import { HeroSection } from "@/components/HeroSection";
import { PricingSection } from "@/components/PricingSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
