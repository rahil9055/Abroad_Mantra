import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", country: "UK", text: "Abroad Mantra made my dream of studying in the UK a reality. Their visa guidance was exceptional!", rating: 5 },
  { name: "Rahul Patel", country: "Canada", text: "From university selection to accommodation, they handled everything. Highly recommended!", rating: 5 },
  { name: "Ananya Gupta", country: "Australia", text: "The team helped me with my visa refusal case and I got approved on the second attempt. Amazing support!", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            What Our Students Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="p-6 bg-card rounded-xl border border-border shadow-sm animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <div className="font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-muted-foreground text-xs">Student – {t.country}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
