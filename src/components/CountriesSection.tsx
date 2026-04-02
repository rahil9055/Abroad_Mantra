import { Link } from "react-router-dom";

const countries = [
  { name: "United Kingdom", flag: "🇬🇧", desc: "World-class universities, post-study work visa, multicultural environment.", path: "/countries/uk" },
  { name: "Australia", flag: "🇦🇺", desc: "PR pathways, excellent quality of life, part-time work opportunities.", path: "/countries/australia" },
  { name: "Canada", flag: "🇨🇦", desc: "Affordable education, immigration-friendly policies, diverse communities.", path: "/countries/canada" },
  { name: "USA", flag: "🇺🇸", desc: "Top-ranked universities, OPT/CPT programs, vast career scope.", path: "/countries/usa" },
];

const CountriesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Destinations</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Choose Your Dream Country
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We provide dedicated support for students heading to these top study destinations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, i) => (
            <Link
              to={country.path}
              key={country.name}
              className="group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/30 text-center hover:shadow-xl transition-all duration-300 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <span className="text-5xl mb-4 block">{country.flag}</span>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{country.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{country.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
