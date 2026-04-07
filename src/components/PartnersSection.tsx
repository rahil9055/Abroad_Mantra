import ScrollReveal from "./ScrollReveal";

const partners = [
  { name: "University of Oxford", short: "Oxford" },
  { name: "University of Melbourne", short: "Melbourne" },
  { name: "University of Toronto", short: "Toronto" },
  { name: "MIT", short: "MIT" },
  { name: "Imperial College London", short: "Imperial" },
  { name: "University of Sydney", short: "Sydney" },
  { name: "McGill University", short: "McGill" },
  { name: "Stanford University", short: "Stanford" },
  { name: "University of Cambridge", short: "Cambridge" },
  { name: "University of British Columbia", short: "UBC" },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-secondary/50 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Trusted Partners
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
              Our University <span className="text-primary">Network</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
              We partner with top-ranked universities worldwide to bring you the best opportunities.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Infinite scroll marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary/50 to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner.short}-${i}`}
              className="flex-shrink-0 mx-4 px-8 py-4 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {partner.short.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground whitespace-nowrap group-hover:text-primary transition-colors">
                    {partner.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
