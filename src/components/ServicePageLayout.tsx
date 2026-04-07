import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, LucideIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServicePageProps {
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  features: ServiceFeature[];
  process: ProcessStep[];
  highlights: string[];
  ctaTitle?: string;
  ctaDesc?: string;
}

const ServicePageLayout = ({
  title,
  highlight,
  subtitle,
  description,
  features,
  process,
  highlights,
  ctaTitle = "Ready to Get Started?",
  ctaDesc = "Book a free consultation with our experts and take the first step today.",
}: ServicePageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative hero-gradient pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-primary/8 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-accent/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">{subtitle}</span>
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mt-3 leading-tight">
                {title} <span className="text-primary">{highlight}</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-5 leading-relaxed">{description}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                What We <span className="text-primary">Offer</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.08} direction="up">
                <div className="glass-card gradient-border rounded-2xl p-7 h-full group hover:-translate-y-2 transition-all duration-500">
                  <div className="w-13 h-13 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <f.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                How It <span className="text-primary">Works</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-6">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="glass-card gradient-border rounded-2xl p-6 flex items-start gap-5 group hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg shrink-0 group-hover:scale-110 transition-transform">
                    {p.step}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Why Choose <span className="text-primary">Us</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
            </div>
          </ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <ScrollReveal direction="up">
              <div className="glass-card gradient-border rounded-2xl p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  {highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="scale">
            <div className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-blob" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{ctaTitle}</h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">{ctaDesc}</p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-primary rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Book Free Consultation <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageLayout;
