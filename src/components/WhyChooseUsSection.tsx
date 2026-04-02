import { Users, TrendingUp, DollarSign, LifeBuoy, Heart } from "lucide-react";

const reasons = [
  { icon: Users, title: "Personalized Guidance", desc: "Tailored advice for your unique situation" },
  { icon: TrendingUp, title: "High Success Rates", desc: "95%+ visa approval track record" },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Transparent and budget-friendly fees" },
  { icon: LifeBuoy, title: "End-To-End Support", desc: "From application to arrival" },
  { icon: Heart, title: "Student-Centric Approach", desc: "Your success is our priority" },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Top platform guiding international students to success.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <r.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground leading-tight">{r.title}</h3>
              <p className="text-muted-foreground text-xs mt-1">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
