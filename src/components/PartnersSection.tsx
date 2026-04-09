import { GraduationCap, Globe, Award, TrendingUp, Users, Star, Plane, BookOpen } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useAnimatedCounter, useScrollReveal } from "@/hooks/useAnimations";

const milestones = [
  { icon: Users, value: 5000, suffix: "+", label: "Students Guided", color: "from-blue-500 to-blue-600" },
  { icon: Globe, value: 11, suffix: "", label: "Countries Covered", color: "from-emerald-500 to-emerald-600" },
  { icon: Award, value: 95, suffix: "%", label: "Visa Success Rate", color: "from-amber-500 to-amber-600" },
  { icon: GraduationCap, value: 500, suffix: "+", label: "University Admits", color: "from-violet-500 to-violet-600" },
];

const journeySteps = [
  { icon: BookOpen, title: "Profile Assessment", desc: "We analyze your academic & career goals" },
  { icon: Globe, title: "Country & University Match", desc: "Data-driven shortlisting from 200+ universities" },
  { icon: Plane, title: "Application to Visa", desc: "End-to-end support until you land abroad" },
  { icon: TrendingUp, title: "Career & Settling In", desc: "Job support, accommodation & life abroad" },
];

const trustBadges = [
  "100% Remote & Online",
  "No Hidden Fees",
  "Personalized Mentorship",
  "Post-Landing Support",
  "Visa Refusal? We Fix It",
  "Free Initial Consultation",
];

const PartnersSection = () => {
  const { ref: statsRef, isVisible } = useScrollReveal(0.3);
  const counter1 = useAnimatedCounter(milestones[0].value, 2000, isVisible);
  const counter2 = useAnimatedCounter(milestones[1].value, 1500, isVisible);
  const counter3 = useAnimatedCounter(milestones[2].value, 2000, isVisible);
  const counter4 = useAnimatedCounter(milestones[3].value, 2000, isVisible);
  const counters = [counter1, counter2, counter3, counter4];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Students Trust Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Your Journey, <span className="text-primary">Our Commitment</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We don't just consult — we walk with you from your first question to your first day abroad and beyond.
            </p>
          </div>
        </ScrollReveal>

        {/* Animated Counters */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {milestones.map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 0.1} direction="up">
              <div className="relative group text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <m.icon className="h-7 w-7 text-white" />
                </div>
                <div className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
                  {counters[i].toLocaleString()}{m.suffix}
                </div>
                <p className="text-muted-foreground text-sm font-medium mt-1">{m.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Journey Timeline */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              How We Get You <span className="text-primary">There</span>
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {journeySteps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.12} direction="up">
              <div className="relative text-center group">
                {/* Connector line */}
                {i < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/40 to-primary/10" />
                )}
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <step.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Step {i + 1}
                </span>
                <h4 className="font-heading text-base font-bold text-foreground mt-3 mb-1">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust Badges Marquee */}
        <div className="relative overflow-hidden py-6">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee">
            {[...trustBadges, ...trustBadges, ...trustBadges].map((badge, i) => (
              <div
                key={`${badge}-${i}`}
                className="flex-shrink-0 mx-3 px-5 py-2.5 bg-primary/5 border border-primary/15 rounded-full flex items-center gap-2 hover:bg-primary/10 transition-colors"
              >
                <Star className="h-3.5 w-3.5 text-primary fill-primary" />
                <span className="text-sm font-medium text-foreground whitespace-nowrap">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;