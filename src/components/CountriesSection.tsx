import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

import ukHero from "@/assets/countries/uk-hero.jpg";
import australiaHero from "@/assets/countries/australia-hero.jpg";
import canadaHero from "@/assets/countries/canada-hero.jpg";
import usaHero from "@/assets/countries/usa-hero.jpg";
import germanyHero from "@/assets/countries/germany-hero.jpg";
import maltaHero from "@/assets/countries/malta-hero.jpg";
import turkeyHero from "@/assets/countries/turkey-hero.jpg";
import russiaHero from "@/assets/countries/russia-hero.jpg";
import chinaHero from "@/assets/countries/china-hero.jpg";
import singaporeHero from "@/assets/countries/singapore-hero.jpg";
import malaysiaHero from "@/assets/countries/malaysia-hero.jpg";

const countries = [
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", desc: "World-class universities, post-study work visa, multicultural environment.", path: "/countries/uk", image: ukHero },
  { code: "AU", name: "Australia", flag: "🇦🇺", desc: "PR pathways, excellent quality of life, part-time work opportunities.", path: "/countries/australia", image: australiaHero },
  { code: "CA", name: "Canada", flag: "🇨🇦", desc: "Affordable education, immigration-friendly policies, diverse communities.", path: "/countries/canada", image: canadaHero },
  { code: "US", name: "USA", flag: "🇺🇸", desc: "Top-ranked universities, OPT/CPT programs, vast career scope.", path: "/countries/usa", image: usaHero },
  { code: "DE", name: "Germany", flag: "🇩🇪", desc: "Tuition-free public universities, strong economy, engineering hub.", path: "/countries/germany", image: germanyHero },
  { code: "MT", name: "Malta", flag: "🇲🇹", desc: "English-speaking EU country, affordable tuition, Mediterranean lifestyle.", path: "/countries/malta", image: maltaHero },
  { code: "TR", name: "Turkey", flag: "🇹🇷", desc: "Low cost of living, government scholarships, rich cultural heritage.", path: "/countries/turkey", image: turkeyHero },
  { code: "RU", name: "Russia", flag: "🇷🇺", desc: "Affordable medical & engineering programs, rich academic tradition.", path: "/countries/russia", image: russiaHero },
  { code: "CN", name: "China", flag: "🇨🇳", desc: "CSC scholarships, booming economy, world-class STEM programs.", path: "/countries/china", image: chinaHero },
  { code: "SG", name: "Singapore", flag: "🇸🇬", desc: "Asia's education hub, global business center, safe & clean city.", path: "/countries/singapore", image: singaporeHero },
  { code: "MY", name: "Malaysia", flag: "🇲🇾", desc: "Affordable education, multicultural society, growing tech scene.", path: "/countries/malaysia", image: malaysiaHero },
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
                className="group block rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative h-56"
              >
                <img
                  src={country.image}
                  alt={`Study in ${country.name}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-black/90 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-5 text-center">
                  <span className="text-3xl mb-1 group-hover:scale-110 transition-transform duration-500">{country.flag}</span>
                  <h3 className="font-heading text-lg font-bold text-white mb-1">{country.name}</h3>
                  <p className="text-white/80 text-xs leading-relaxed line-clamp-2">{country.desc}</p>
                  <div className="mt-3 w-10 h-0.5 bg-primary mx-auto rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
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
