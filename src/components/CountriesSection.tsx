import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import LottieAnimation from "@/components/LottieAnimation";

const countries = [
  {
    code: "GB",
    name: "United Kingdom",
    desc: "World-class universities, post-study work visa, multicultural environment.",
    path: "/countries/uk",
    flag: "🇬🇧",
  },
  {
    code: "AU",
    name: "Australia",
    desc: "PR pathways, excellent quality of life, part-time work opportunities.",
    path: "/countries/australia",
    flag: "🇦🇺",
  },
  {
    code: "CA",
    name: "Canada",
    desc: "Affordable education, immigration-friendly policies, diverse communities.",
    path: "/countries/canada",
    flag: "🇨🇦",
  },
  {
    code: "US",
    name: "USA",
    desc: "Top-ranked universities, OPT/CPT programs, vast career scope.",
    path: "/countries/usa",
    flag: "🇺🇸",
  },
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
                className="group block rounded-2xl border border-border border-dashed bg-card p-8 text-center hover:shadow-2xl hover:border-primary/30 hover:border-solid hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
              >
                {/* Animated flag */}
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <LottieAnimation url={country.lottie} className="w-full h-full" />
                  {/* Fallback flag emoji overlay if Lottie fails to load */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-0">
                    <span className="text-4xl">{country.flag}</span>
                  </div>
                </div>

                {/* Country code */}
                <div className="font-heading text-4xl md:text-5xl font-extrabold text-foreground/90 mb-2 group-hover:text-primary transition-colors duration-300">
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
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
