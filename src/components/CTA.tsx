import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 gradient-hero" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          
          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-4">
                Opportunité limitée
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
                Prêt à investir dans le marché le plus prometteur d'Afrique ?
              </h2>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Rejoignez les investisseurs qui positionnent leur capital avant 
                le boom de la Coupe du Monde 2030. Places limitées.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-10 py-7 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Commencer mon investissement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white text-primary hover:bg-white/90 border-none font-semibold text-lg px-10 py-7 rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Parler à un expert
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span>Consultation gratuite</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span>Réponse sous 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckIcon = () => (
  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);