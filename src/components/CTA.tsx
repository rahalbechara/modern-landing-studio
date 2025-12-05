import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const CTA = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    budget: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nom.trim() || !formData.email.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir les champs obligatoires (Nom et Email)",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    const { error } = await supabase.from("rent_leads").insert({
      nom: formData.nom.trim(),
      email: formData.email.trim(),
      telephone: formData.telephone.trim() || null,
      budget: formData.budget.trim() || null,
    });

    setIsLoading(false);

    if (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Succès",
      description: "Votre demande a été envoyée avec succès!",
    });

    setFormData({ nom: "", email: "", telephone: "", budget: "" });
  };

  return (
    <section className="py-24 bg-gradient-hero text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Form Section */}
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Votre business <span className="text-accent">commence ici</span>
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Investissez dans un garage rentable — nous livrons, vous encaissez.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                placeholder="Nom *" 
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm h-12" 
              />
              <Input 
                type="email" 
                placeholder="Email *" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm h-12" 
              />
              <Input 
                type="tel" 
                placeholder="Téléphone" 
                value={formData.telephone}
                onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm h-12" 
              />
              <Input 
                placeholder="Budget" 
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm h-12" 
              />
              
              <Button 
                type="submit" 
                size="lg" 
                disabled={isLoading}
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold text-lg py-6 rounded-xl"
              >
                {isLoading ? "Envoi en cours..." : "Recevoir l'offre"}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="animate-in fade-in slide-in-from-right duration-700 delay-150">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="font-bold text-2xl mb-6">Informations contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Adresse</div>
                    <div className="text-white/80">Allal lfassi

Marrakech, Morocco</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-white/80">contact@monrentpro.com</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Téléphone</div>
                    <div className="text-white/80">+212 786 251 167</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
