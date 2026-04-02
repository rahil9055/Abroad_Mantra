import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const countries = [
  { name: "United Kingdom", flag: "🇬🇧", desc: "World-class universities, post-study work visa, multicultural environment.", path: "/countries/uk", accent: "group-hover:shadow-primary/20" },
  { name: "Australia", flag: "🇦🇺", desc: "PR pathways, excellent quality of life, part-time work opportunities.", path: "/countries/australia", accent: "group-hover:shadow-accent/20" },
  { name: "Canada", flag: "🇨🇦", desc: "Affordable education, immigration-friendly policies, diverse communities.", path: "/countries/canada", accent: "group-hover:shadow-destructive/20" },
  { name: "USA", flag: "🇺🇸", desc: "Top-ranked universities, OPT/CPT programs, vast career scope.", path: "/countries/usa", accent: "group-hover:shadow-primary/20" },
];

const CountriesSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Destinations</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Choose Your <span className="text-primary">Dream Country</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We provide dedicated support for students heading to these top study destinations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, i) => (
            <ScrollReveal key={country.name} delay={i * 0.12} direction="up">
              <Link
                to={country.path}
                className={`group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/30 text-center hover:shadow-2xl ${country.accent} hover:-translate-y-3 transition-all duration-500 overflow-hidden block`}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <span className="text-5xl mb-4 block group-hover:scale-125 group-hover:-rotate-6 transition-all duration-500 inline-block">{country.flag}</span>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{country.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{country.desc}</p>
                  <div className="mt-4 w-8 h-0.5 bg-primary mx-auto rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
