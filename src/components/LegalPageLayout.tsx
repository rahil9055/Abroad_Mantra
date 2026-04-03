import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

interface LegalPageProps {
  title: string;
  seoTitle: string;
  seoDesc: string;
  lastUpdated: string;
  sections: { heading: string; content: string[] }[];
}

const LegalPageLayout = ({ title, seoTitle, seoDesc, lastUpdated, sections }: LegalPageProps) => (
  <div className="min-h-screen bg-background">
    <SEOHead title={seoTitle} description={seoDesc} />
    <Navbar />

    <section className="relative hero-gradient pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground leading-tight">{title}</h1>
            <p className="text-muted-foreground mt-4">Last updated: {lastUpdated}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <div className="glass-card gradient-border rounded-2xl p-8 md:p-10">
            {sections.map((s, i) => (
              <div key={i} className={i > 0 ? "mt-8" : ""}>
                <h2 className="font-heading text-xl font-bold text-foreground mb-3">{s.heading}</h2>
                {s.content.map((p, pi) => (
                  <p key={pi} className="text-muted-foreground text-sm leading-relaxed mb-3 last:mb-0">{p}</p>
                ))}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default LegalPageLayout;
