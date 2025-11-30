import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="MyRentPro" className="h-12 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("pourquoi-maroc")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Pourquoi le Maroc
            </button>
            <button
              onClick={() => scrollToSection("packs")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Nos Packs
            </button>
            <button
              onClick={() => scrollToSection("processus")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Comment ça marche
            </button>
            <button
              onClick={() => scrollToSection("realisations")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Réalisations
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
