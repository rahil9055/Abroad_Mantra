import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Wallet, Clock, Briefcase, FileText, Home, CheckCircle, LucideIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export interface University {
  name: string;
  ranking: string;
  specialty: string;
}

export interface VisaRequirement {
  title: string;
  desc: string;
}

export interface CostItem {
  label: string;
  value: string;
}

export interface CountryStat {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface CountryPageProps {
  name: string;
  flag: string;
  tagline: string;
  description: string;
  stats: CountryStat[];
  universities: University[];
  visaRequirements: VisaRequirement[];
  costs: CostItem[];
  highlights: string[];
  jobInfo: { title: string; desc: string }[];
}

const CountryPageLayout = ({
  name,
  flag,
  tagline,
  description,
  stats,
  universities,
  visaRequirements,
  costs,
  highlights,
  jobInfo,
}: CountryPageProps) => {
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
              <span className="text-6xl mb-4 block">{flag}</span>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Study Destination</span>
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mt-3 leading-tight">
                Study in <span className="text-primary">{name}</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-5 leading-relaxed">{tagline}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground font-heading">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Overview</span>
                <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">
                  Why Study in <span className="text-primary">{name}?</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="glass-card gradient-border rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-primary" /> Cost of Studying
                </h3>
                <div className="space-y-4">
                  {costs.map((c) => (
                    <div key={c.label} className="flex justify-between items-center border-b border-border pb-3 last:border-0 last:pb-0">
                      <span className="text-sm text-muted-foreground">{c.label}</span>
                      <span className="text-sm font-semibold text-foreground">{c.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Universities</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
                Top Universities in <span className="text-primary">{name}</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((u, i) => (
              <ScrollReveal key={u.name} delay={i * 0.08} direction="up">
                <div className="glass-card gradient-border rounded-2xl p-6 group hover:-translate-y-2 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-500">
                    <GraduationCap className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{u.name}</h3>
                  <span className="text-primary text-xs font-medium">{u.ranking}</span>
                  <p className="text-muted-foreground text-sm mt-2">{u.specialty}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Requirements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Visa Guide</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
                Visa <span className="text-primary">Requirements</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-5">
            {visaRequirements.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="glass-card gradient-border rounded-2xl p-6 flex items-start gap-5 group hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Job Opportunities */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Career Scope</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
                Work & <span className="text-primary">Career Opportunities</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {jobInfo.map((j, i) => (
              <ScrollReveal key={j.title} delay={i * 0.1} direction="up">
                <div className="glass-card gradient-border rounded-2xl p-6 h-full group hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg bg-accent/15 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Briefcase className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{j.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{j.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="scale">
            <div className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-blob" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Start Your {name} Journey Today
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                  Get expert guidance on universities, visas, and life in {name}. Book your free consultation now.
                </p>
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

export default CountryPageLayout;
