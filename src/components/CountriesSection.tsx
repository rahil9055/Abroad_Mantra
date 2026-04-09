import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const countries = [
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", desc: "World-class universities, post-study work visa, multicultural environment.", path: "/countries/uk" },
  { code: "AU", name: "Australia", flag: "🇦🇺", desc: "PR pathways, excellent quality of life, part-time work opportunities.", path: "/countries/australia" },
  { code: "CA", name: "Canada", flag: "🇨🇦", desc: "Affordable education, immigration-friendly policies, diverse communities.", path: "/countries/canada" },
  { code: "US", name: "USA", flag: "🇺🇸", desc: "Top-ranked universities, OPT/CPT programs, vast career scope.", path: "/countries/usa" },
  { code: "DE", name: "Germany", flag: "🇩🇪", desc: "Tuition-free public universities, strong economy, engineering hub.", path: "/countries/germany" },
  { code: "MT", name: "Malta", flag: "🇲🇹", desc: "English-speaking EU country, affordable tuition, Mediterranean lifestyle.", path: "/countries/malta" },
  { code: "TR", name: "Turkey", flag: "🇹🇷", desc: "Low cost of living, government scholarships, rich cultural heritage.", path: "/countries/turkey" },
  { code: "RU", name: "Russia", flag: "🇷🇺", desc: "Affordable medical & engineering programs, rich academic tradition.", path: "/countries/russia" },
  { code: "CN", name: "China", flag: "🇨🇳", desc: "CSC scholarships, booming economy, world-class STEM programs.", path: "/countries/china" },
  { code: "SG", name: "Singapore", flag: "🇸🇬", desc: "Asia's education hub, global business center, safe & clean city.", path: "/countries/singapore" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾", desc: "Affordable education, multicultural society, growing tech scene.", path: "/countries/malaysia" },
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
              We provide dedicated support for students heading to these top study destinations across the globe.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {countries.map((country, i) => (
            <ScrollReveal key={country.name} delay={i * 0.06} direction="up">
              <Link
                to={country.path}
                className="group block rounded-2xl border border-border border-dashed bg-card p-6 text-center hover:shadow-2xl hover:border-primary/30 hover:border-solid hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-500">
                  {country.flag}
                </div>
                <div className="font-heading text-3xl font-extrabold text-foreground/90 mb-1 group-hover:text-primary transition-colors duration-300">
                  {country.code}
                </div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2">
                  {country.name}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {country.desc}
                </p>
                <div className="mt-4 w-10 h-0.5 bg-primary mx-auto rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
