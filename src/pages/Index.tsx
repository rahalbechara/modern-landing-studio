import { Hero } from "@/components/Hero";
import { WhyMyRentPro } from "@/components/WhyMyRentPro";
import { WhyMorocco } from "@/components/WhyMorocco";
import { InvestmentPacks } from "@/components/InvestmentPacks";
import { HowItWorks } from "@/components/HowItWorks";
import { Realizations } from "@/components/Realizations";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyMyRentPro />
      <WhyMorocco />
      <InvestmentPacks />
      <HowItWorks />
      <Realizations />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;