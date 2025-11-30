import { Card } from "@/components/ui/card";
import { MessageSquare, FileCheck, Car, Key } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation gratuite",
    description: "Échangez avec nos experts sur votre projet d'investissement et vos objectifs",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Validation du projet",
    description: "Nous étudions votre budget et définissons ensemble la composition de votre flotte",
  },
  {
    number: "03",
    icon: Car,
    title: "Création de la flotte",
    description: "Nous achetons, immatriculons et assurons vos véhicules selon vos spécifications",
  },
  {
    number: "04",
    icon: Key,
    title: "Livraison & lancement",
    description: "Votre garage est opérationnel en 45-60 jours, prêt à générer des revenus",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Comment ça <span className="gradient-hero bg-clip-text text-transparent">fonctionne</span> ?
          </h2>
          <p className="text-xl text-muted-foreground">
            Un processus simple et rapide pour lancer votre activité de location
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" 
               style={{ width: 'calc(100% - 8rem)', left: '4rem' }} />
          
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Step number badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-accent flex items-center justify-center text-white font-bold shadow-lg">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-6 mt-4">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>

        {/* Timeline note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-semibold">Durée totale: 45-60 jours du début à la livraison</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Clock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
  </svg>
);