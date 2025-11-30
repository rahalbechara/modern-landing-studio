import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, Phone } from "lucide-react";

export const CTA = () => {
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
            
            <form className="space-y-4">
              <Input 
                placeholder="Nom"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm h-12"
              />
              <Input 
                type="email"
                placeholder="Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm h-12"
              />
              <Input 
                type="tel"
                placeholder="Téléphone"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm h-12"
              />
              <Input 
                placeholder="Budget"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm h-12"
              />
              
              <Button 
                type="submit"
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold text-lg py-6 rounded-xl"
              >
                Recevoir l'offre
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
                    <div className="text-white/80">Marrakech, Maroc</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-white/80">commercial@myrentpro.com</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Téléphone</div>
                    <div className="text-white/80">+212 XXX XXX XXX</div>
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
