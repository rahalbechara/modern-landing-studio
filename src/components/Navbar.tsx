import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img alt="MyRentPro" className="h-12 w-auto" src="/lovable-uploads/e6d8a540-b9f7-4b73-ae2f-5030ae7246af.png" />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("accueil")} className="text-foreground hover:text-primary transition-colors font-medium">
              Accueil
            </button>
            <button onClick={() => scrollToSection("pourquoi-myrentpro")} className="text-foreground hover:text-primary transition-colors font-medium">
              Pourquoi MyRentPro
            </button>
            <button onClick={() => scrollToSection("pourquoi-maroc")} className="text-foreground hover:text-primary transition-colors font-medium">
              Pourquoi le Maroc
            </button>
            <button onClick={() => scrollToSection("packs")} className="text-foreground hover:text-primary transition-colors font-medium">
              Nos Packs
            </button>
            <button onClick={() => scrollToSection("processus")} className="text-foreground hover:text-primary transition-colors font-medium">
              Comment ça marche
            </button>
            <button onClick={() => scrollToSection("realisations")} className="text-foreground hover:text-primary transition-colors font-medium">
              Réalisations
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};