import { Hero } from "@/components/Hero";
import { WhyMyRentPro } from "@/components/WhyMyRentPro";
import { WhyMorocco } from "@/components/WhyMorocco";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyMyRentPro />
      <WhyMorocco />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;