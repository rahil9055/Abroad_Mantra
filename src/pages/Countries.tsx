import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
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
  { name: "United Kingdom", flag: "🇬🇧", path: "/countries/uk", image: ukHero, desc: "World-class universities, post-study work visa, multicultural environment." },
  { name: "Australia", flag: "🇦🇺", path: "/countries/australia", image: australiaHero, desc: "PR pathways, excellent quality of life, part-time work opportunities." },
  { name: "Canada", flag: "🇨🇦", path: "/countries/canada", image: canadaHero, desc: "Affordable education, immigration-friendly policies, diverse communities." },
  { name: "USA", flag: "🇺🇸", path: "/countries/usa", image: usaHero, desc: "Top-ranked universities, OPT/CPT programs, vast career scope." },
  { name: "Germany", flag: "🇩🇪", path: "/countries/germany", image: germanyHero, desc: "Tuition-free public universities, strong economy, engineering hub." },
  { name: "Malta", flag: "🇲🇹", path: "/countries/malta", image: maltaHero, desc: "English-speaking EU country, affordable tuition, Mediterranean lifestyle." },
  { name: "Turkey", flag: "🇹🇷", path: "/countries/turkey", image: turkeyHero, desc: "Low cost of living, government scholarships, rich cultural heritage." },
  { name: "Russia", flag: "🇷🇺", path: "/countries/russia", image: russiaHero, desc: "Affordable medical & engineering programs, rich academic tradition." },
  { name: "China", flag: "🇨🇳", path: "/countries/china", image: chinaHero, desc: "CSC scholarships, booming economy, world-class STEM programs." },
  { name: "Singapore", flag: "🇸🇬", path: "/countries/singapore", image: singaporeHero, desc: "Asia's education hub, global business center, safe & clean city." },
  { name: "Malaysia", flag: "🇲🇾", path: "/countries/malaysia", image: malaysiaHero, desc: "Affordable education, multicultural society, growing tech scene." },
];

const Countries = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Study Destinations – Abroad Mantra"
      description="Explore 11+ study destinations worldwide. UK, Australia, Canada, USA, Germany, and more. Get expert guidance for your dream country."
    />
    <Navbar />

    {/* Hero */}
    <section className="pt-24 pb-16 bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Study Destinations</span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mt-3">
              Choose Your <span className="text-primary">Dream Country</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-5 leading-relaxed">
              We provide dedicated support for students heading to these top study destinations across the globe. Explore each country to learn about universities, costs, visas, and career opportunities.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Country Grid */}
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, i) => (
            <ScrollReveal key={country.name} delay={i * 0.06} direction="up">
              <Link
                to={country.path}
                className="group block rounded-2xl overflow-hidden border border-border bg-card hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={country.image}
                    alt={`Study in ${country.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    width={640}
                    height={360}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="text-3xl">{country.flag}</span>
                    <h3 className="font-heading text-xl font-bold text-white">{country.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">{country.desc}</p>
                  <div className="flex items-center gap-1 text-primary font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Countries;
