import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroCars from "@/assets/hero-cars.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              🚗 Investissement Rentable au Maroc
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight text-balance">
              Votre agence de location de voitures{" "}
              <span className="text-accent">clé en main</span> au Maroc
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Vous investissez — nous créons la flotte, immatriculons les voitures, 
              livrons votre garage prêt à louer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                variant="default"
                className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Je veux investir
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Demander un rendez-vous
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold">100+</div>
                <div className="text-white/80 text-sm">Voitures livrées</div>
              </div>
              <div>
                <div className="text-3xl font-bold">90%</div>
                <div className="text-white/80 text-sm">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-white/80 text-sm">Assistance</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-150">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroCars} 
                alt="Flotte de voitures de location MyRentPro" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <div>
                  <div className="font-bold text-foreground">ROI Rapide</div>
                  <div className="text-sm text-muted-foreground">12-18 mois</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};