import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const countries = [
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", desc: "World-class universities, post-study work visa, multicultural environment.", path: "/countries/uk", color: "from-primary/10 to-primary/5" },
  { code: "AU", name: "Australia", flag: "🇦🇺", desc: "PR pathways, excellent quality of life, part-time work opportunities.", path: "/countries/australia", color: "from-accent/10 to-accent/5" },
  { code: "CA", name: "Canada", flag: "🇨🇦", desc: "Affordable education, immigration-friendly policies, diverse communities.", path: "/countries/canada", color: "from-success/10 to-success/5" },
  { code: "US", name: "USA", flag: "🇺🇸", desc: "Top-ranked universities, OPT/CPT programs, vast career scope.", path: "/countries/usa", color: "from-primary/10 to-accent/5" },
];

const CountriesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {countries.map((country, i) => (
            <ScrollReveal key={country.name} delay={i * 0.1} direction="up">
              <Link
                to={country.path}
                className="group block rounded-2xl border border-border bg-card p-8 text-center hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
              >
                {/* Top dashed accent border */}
                <div className="absolute top-0 left-4 right-4 h-px border-t border-dashed border-primary/30" />

                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-b ${country.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Country code - large text */}
                  <div className="font-heading text-5xl md:text-6xl font-extrabold text-foreground/90 mb-3 group-hover:text-primary transition-colors duration-300">
                    {country.code}
                  </div>

                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                    {country.name}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {country.desc}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-5 w-10 h-0.5 bg-primary mx-auto rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
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
