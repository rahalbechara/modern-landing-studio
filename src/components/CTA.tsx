import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Validation schema with proper limits
const leadSchema = z.object({
  nom: z.string()
    .trim()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z.string()
    .trim()
    .email("Veuillez entrer une adresse email valide")
    .max(255, "L'email ne peut pas dépasser 255 caractères"),
  telephone: z.string()
    .trim()
    .max(20, "Le téléphone ne peut pas dépasser 20 caractères")
    .optional()
    .or(z.literal("")),
  budget: z.string()
    .trim()
    .max(50, "Le budget ne peut pas dépasser 50 caractères")
    .optional()
    .or(z.literal("")),
});

export const CTA = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [honeypot, setHoneypot] = useState(""); // Anti-spam honeypot field
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    budget: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      toast({
        title: "Succès",
        description: "Votre demande a été envoyée avec succès!",
      });
      return;
    }

    // Validate input using zod schema
    const validationResult = leadSchema.safeParse(formData);
    
    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      toast({
        title: "Erreur de validation",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    const validatedData = validationResult.data;

    setIsLoading(true);
    
    const { error } = await supabase.from("rent_leads").insert({
      nom: validatedData.nom,
      email: validatedData.email,
      telephone: validatedData.telephone || null,
      budget: validatedData.budget || null,
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
              {/* Honeypot field - hidden from users, bots will fill it */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ position: 'absolute', left: '-9999px' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <Input 
                placeholder="Nom *" 
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm h-12"
                maxLength={100}
              />
              <Input 
                type="email" 
                placeholder="Email *" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm h-12"
                maxLength={255}
              />
              <Input 
                type="tel" 
                placeholder="Téléphone" 
                value={formData.telephone}
                onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm h-12"
                maxLength={20}
              />
              <Input 
                placeholder="Budget" 
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm h-12"
                maxLength={50}
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
