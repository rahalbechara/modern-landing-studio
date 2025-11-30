import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, TrendingUp, Gauge } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Création clé en main",
    description: "Flotte + assurance + immatriculation + branding",
  },
  {
    icon: Clock,
    title: "Délai rapide",
    description: "Garage prêt en 45-60 jours",
  },
  {
    icon: TrendingUp,
    title: "ROI mesurable",
    description: "Rentabilité atteignable dès 12-18 mois",
  },
  {
    icon: Gauge,
    title: "Gestion flexible",
    description: "Gestion totale ou indépendante",
  },
];

export const WhyMyRentPro = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Pourquoi <span className="gradient-hero bg-clip-text text-transparent">MyRentPro</span> ?
          </h2>
          <p className="text-xl text-muted-foreground">
            Une solution complète pour investir dans la location de voitures au Maroc
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Stats banner */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-md">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="border-r border-border last:border-r-0">
              <div className="text-3xl md:text-4xl font-bold gradient-hero bg-clip-text text-transparent mb-2">
                100+
              </div>
              <div className="text-muted-foreground">voitures livrées</div>
            </div>
            <div className="border-r border-border last:border-r-0">
              <div className="text-3xl md:text-4xl font-bold gradient-hero bg-clip-text text-transparent mb-2">
                90%
              </div>
              <div className="text-muted-foreground">satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-hero bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-muted-foreground">assistance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};