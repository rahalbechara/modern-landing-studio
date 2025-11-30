import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroCars from "@/assets/hero-cars.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background car image */}
      <div className="absolute inset-0">
        <img 
          src={heroCars} 
          alt="Luxury cars background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-3xl">
          {/* Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-sm font-medium border border-primary/30 text-primary">
              🚗 Investissement Rentable au Maroc
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight text-balance text-foreground">
              Votre agence de location de voitures{" "}
              <span className="text-primary">clé en main</span> au Maroc
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Vous investissez — nous créons la flotte, immatriculons les voitures, 
              livrons votre garage prêt à louer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Je veux investir
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-border/50 hover:bg-card font-semibold text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Demander un rendez-vous
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-foreground">100+</div>
                <div className="text-muted-foreground text-sm">Voitures livrées</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">90%</div>
                <div className="text-muted-foreground text-sm">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-muted-foreground text-sm">Assistance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};