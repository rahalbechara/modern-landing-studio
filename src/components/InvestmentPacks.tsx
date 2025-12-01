import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packs = [
  {
    investment: "500 000 MAD",
    fleet: "7 voitures",
    roi: "~18 mois",
    delay: "45 jours",
  },
  {
    investment: "1 000 000 MAD",
    fleet: "14 voitures",
    roi: "~12-14 mois",
    delay: "60 jours",
    featured: true,
  },
];

const includes = [
  "Achat + carte grise",
  "Assurance + entretien",
  "Branding + lancement digital",
  "Possibilité de gestion complète",
];

export const InvestmentPacks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Packs d'<span className="text-primary">investissement</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            6 étapes pour lancer votre activité de location
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {packs.map((pack, index) => (
            <Card 
              key={index}
              className={`p-8 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom duration-700 ${
                pack.featured ? 'border-2 border-primary shadow-lg scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {pack.featured && (
                <div className="inline-block px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-4">
                  Plus populaire
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Investissement</div>
                  <div className="text-2xl font-bold text-primary">
                    {pack.investment}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Flotte estimée</div>
                  <div className="text-2xl font-bold">{pack.fleet}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8 pb-6 border-b border-border">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">ROI estimé</div>
                  <div className="text-xl font-bold text-accent">{pack.roi}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Délai</div>
                  <div className="text-xl font-bold">{pack.delay}</div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Je veux mon pack
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full font-semibold"
                >
                  Parler avec un conseiller
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Includes */}
        <Card className="p-8 max-w-4xl mx-auto">
          <h3 className="font-bold text-xl mb-6 text-center">Inclus dans les packs :</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {includes.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 animate-in fade-in slide-in-from-left duration-700"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
