import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Accueil", id: "accueil" },
  { label: "Pourquoi MyRentPro", id: "pourquoi-myrentpro" },
  { label: "Pourquoi le Maroc", id: "pourquoi-maroc" },
  { label: "Nos Packs", id: "packs" },
  { label: "Comment ça marche", id: "processus" },
  { label: "Réalisations", id: "realisations" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border/30 bg-background/80">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              alt="MyRentPro"
              className="h-12 w-auto"
              src="/lovable-uploads/e6d8a540-b9f7-4b73-ae2f-5030ae7246af.png"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-6 border-b border-border">
                    <img
                      alt="MyRentPro"
                      className="h-10 w-auto"
                      src="/lovable-uploads/e6d8a540-b9f7-4b73-ae2f-5030ae7246af.png"
                    />
                  </div>
                  <nav className="flex flex-col p-6 gap-2">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left py-3 px-4 rounded-lg text-foreground hover:bg-muted hover:text-primary transition-colors font-medium"
                      >
                        {item.label}
                      </button>
                    ))}
                    <Button
                      onClick={() => scrollToSection("contact")}
                      className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    >
                      Contact
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
