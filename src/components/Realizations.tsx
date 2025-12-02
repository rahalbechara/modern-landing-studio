import { Card } from "@/components/ui/card";
import realization1 from "@/assets/realization-1.jpg";
import realization2 from "@/assets/realization-2.jpg";
import realization3 from "@/assets/realization-3.jpg";
import realization4 from "@/assets/realization-4.jpg";
import realization5 from "@/assets/realization-5.jpg";
import realization6 from "@/assets/realization-6.jpg";
import realization7 from "@/assets/realization-7.jpg";
import realization8 from "@/assets/realization-8.jpg";

const realizationImages = [
  realization1,
  realization2,
  realization3,
  realization4,
  realization5,
  realization6,
  realization7,
  realization8,
];

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
          {realizationImages.map((image, index) => (
            <Card
              key={index}
              className="aspect-square overflow-hidden group animate-in fade-in scale-in duration-700"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={image}
                alt={`Réalisation ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
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
              style={{ animationDelay: `${(index + 8) * 100}ms` }}
              className="p-6 animate-in fade-in slide-in-from-bottom duration-700 bg-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
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
