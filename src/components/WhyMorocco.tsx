import { Card } from "@/components/ui/card";
import { TrendingUp, Users, MapPin, Trophy } from "lucide-react";
const stats = [{
  icon: Users,
  value: "+14M touristes par an",
  explanation: "Marrakech + Casablanca = demande continue",
  sublabel: "Hôtels, excursions, business, saison haute"
}, {
  icon: TrendingUp,
  value: "70% de taux de location moyen",
  explanation: "Hôtels, excursions, business, saison haute",
  sublabel: "Demande continue toute l'année"
}, {
  icon: TrendingUp,
  value: "Croissance +18%/an",
  explanation: "Demande supérieure à l'offre",
  sublabel: "Marché en pleine expansion"
}, {
  icon: MapPin,
  value: "Villes les plus rentables",
  explanation: "Marrakech – Casablanca – Agadir – Rabat",
  sublabel: "Taux d'occupation parmi les plus élevés"
}];
const worldCupFeatures = [{
  icon: Users,
  title: "Arrivées touristiques multipliées",
  description: "Explosion de la demande en location de voitures"
}, {
  icon: MapPin,
  title: "Investissements infrastructurels",
  description: "Nouvelles routes, hubs aéroportuaires, hôtels"
}, {
  icon: TrendingUp,
  title: "Exposition internationale",
  description: "Hausse des flux d'affaires & expatriés"
}];
export const WhyMorocco = () => {
  return <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
            <Trophy className="h-5 w-5" />
            Le Maroc est l'un des marchés les plus profitables pour la location auto
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Pourquoi investir au <span className="text-primary">Maroc</span> ?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            Le Maroc n'est pas seulement une destination touristique, c'est un marché en pleine 
            accélération économique.
          </p>
          <p className="text-2xl font-semibold text-foreground">
            Là où d'autres pays stagnent, le Maroc explose.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            Avec des villes comme Marrakech, Casablanca, Agadir et Tanger classées parmi les plus dynamiques d'Afrique, 
            le pays attire chaque année des millions de visiteurs — et demain encore plus.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => <Card key={index} style={{
          animationDelay: `${index * 100}ms`
        }} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom duration-700 bg-gray-900">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <div className="font-bold text-lg leading-tight">{stat.value}</div>
              </div>
              <div className="text-muted-foreground mb-2">{stat.explanation}</div>
              <div className="text-sm text-muted-foreground/80">{stat.sublabel}</div>
            </Card>)}
        </div>

        {/* World Cup 2030 */}
        <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 md:p-12 mb-12 border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-display text-3xl md:text-4xl">Coupe du Monde 2030</h3>
              <p className="text-muted-foreground">Le tournant historique</p>
            </div>
          </div>
          
          <p className="text-lg text-foreground/90 mb-8 max-w-3xl">
            Le Maroc co-organise la Coupe du Monde 2030 avec l'Espagne et le Portugal. 
            Un événement mondial qui va générer une opportunité sans précédent.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {worldCupFeatures.map((feature, index) => <div key={index} className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/30 animate-in fade-in slide-in-from-bottom duration-700" style={{
            animationDelay: `${(index + 3) * 100}ms`
          }}>
                <feature.icon className="h-8 w-8 text-accent mb-4" />
                <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>)}
          </div>

          <div className="mt-8 p-6 bg-background rounded-xl border-l-4 border-accent">
            <p className="text-foreground font-medium">
              💡 Plus de voyageurs = plus de déplacements = plus de voitures louées. 
              <span className="font-bold"> Ceux qui investissent maintenant seront positionnés avant l'afflux mondial.</span>
            </p>
          </div>
        </div>

        {/* Market opportunity */}
        <Card className="p-8 md:p-12 text-center shadow-lg bg-gray-950">
          <h3 className="font-display text-3xl mb-4">Un marché encore largement sous-exploité</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Alors que l'Europe est saturée, le Maroc reste une terre d'expansion. 
            Peu d'acteurs structurés, beaucoup de demande, rentabilité rapide. 
            <span className="font-semibold text-foreground"> MyRentPro permet d'entrer sur ce marché au moment le plus stratégique.</span>
          </p>
        </Card>
      </div>
    </section>;
};