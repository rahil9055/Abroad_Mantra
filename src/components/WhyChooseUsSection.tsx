import { Users, TrendingUp, DollarSign, LifeBuoy, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LottieAnimation from "@/components/LottieAnimation";

const reasons = [
  { icon: Users, title: "Personalized Guidance", desc: "Tailored advice for your unique situation", gradient: "from-primary/20 to-primary/5" },
  { icon: TrendingUp, title: "High Success Rates", desc: "95%+ visa approval track record", gradient: "from-success/20 to-success/5" },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Transparent and budget-friendly fees", gradient: "from-accent/20 to-accent/5" },
  { icon: LifeBuoy, title: "End-To-End Support", desc: "From application to arrival", gradient: "from-primary/20 to-primary/5" },
  { icon: Heart, title: "Student-Centric Approach", desc: "Your success is our priority", gradient: "from-destructive/15 to-destructive/5" },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      {/* Background deco */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-blob" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Why Choose <span className="text-primary">Us?</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Top platform guiding international students to success.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 0.12} direction="up">
              <div className="group flex flex-col items-center text-center p-6 rounded-2xl glass-card gradient-border hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${r.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <r.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-foreground leading-tight">{r.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{r.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
