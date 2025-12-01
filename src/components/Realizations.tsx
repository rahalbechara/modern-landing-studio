import { Card } from "@/components/ui/card";

export const Realizations = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Nos <span className="text-primary">réalisations</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ils ont investi, nous avons livré.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <Card 
              key={index}
              className="aspect-square overflow-hidden group animate-in fade-in scale-in duration-700"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="text-4xl opacity-20">🚗</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Ahmed S.",
              role: "Investisseur Europe de l'est",
              rating: 5,
              comment: "Flotte & visibilité",
            },
            {
              name: "Fatima Z.",
              role: "Entrepreneuse de remittances",
              rating: 4,
              comment: "Business process driven",
            },
            {
              name: "Karim Z.",
              role: "Investisseur",
              rating: 5,
              comment: "Modernisation & clients",
            },
          ].map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${(index + 8) * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
              
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i}
                    className={i < testimonial.rating ? "text-accent" : "text-muted"}
                  >
                    ★
                  </span>
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground">{testimonial.comment}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
