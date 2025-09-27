import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HabitPreview } from "@/components/HabitPreview";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HabitPreview />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
