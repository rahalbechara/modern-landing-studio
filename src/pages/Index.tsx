import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyMyRentPro } from "@/components/WhyMyRentPro";
import { WhyMorocco } from "@/components/WhyMorocco";
import { InvestmentPacks } from "@/components/InvestmentPacks";
import { HowItWorks } from "@/components/HowItWorks";
import { Realizations } from "@/components/Realizations";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
const Index = () => {
  return <main className="min-h-screen">
      <Navbar />
      <div id="accueil">
        <Hero />
      </div>
      <div id="pourquoi-myrentpro">
        <WhyMyRentPro />
      </div>
      <div id="pourquoi-maroc" className="bg-transparent">
        <WhyMorocco />
      </div>
      <div id="packs">
        <InvestmentPacks />
      </div>
      <div id="processus">
        <HowItWorks />
      </div>
      <div id="realisations">
        <Realizations />
      </div>
      <div id="contact">
        <CTA />
      </div>
      <Footer />
    </main>;
};
export default Index;