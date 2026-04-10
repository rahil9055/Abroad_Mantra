import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Wallet, Briefcase, FileText, CheckCircle, ChevronDown, MapPin, Users, Star, Globe, BookOpen, Shield, LucideIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

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

export interface Testimonial {
  name: string;
  course: string;
  university: string;
  text: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ApplicationStep {
  step: string;
  title: string;
  desc: string;
}

export interface CountryPageProps {
  name: string;
  flag: string;
  heroImage?: string;
  tagline: string;
  description: string;
  whyStudy: string[];
  stats: CountryStat[];
  universities: University[];
  visaRequirements: VisaRequirement[];
  costs: CostItem[];
  highlights: string[];
  jobInfo: { title: string; desc: string }[];
  applicationSteps: ApplicationStep[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  scholarships: { name: string; desc: string }[];
}

const CountryPageLayout = ({
  name,
  flag,
  heroImage,
  tagline,
  description,
  whyStudy,
  stats,
  universities,
  visaRequirements,
  costs,
  highlights,
  jobInfo,
  applicationSteps,
  testimonials,
  faqs,
  scholarships,
}: CountryPageProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Study in ${name} — Abroad Mantra`}
        description={`Complete guide to studying in ${name}. Top universities, visa requirements, costs, scholarships, and career opportunities.`}
      />
      <Navbar />

      {/* Hero with Background Image */}
      <section className="relative pt-20 min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImage ? (
            <img src={heroImage} alt={`Study in ${name}`} className="w-full h-full object-cover" width={1920} height={800} />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))]/60" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/90 via-[hsl(var(--primary))]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))]/50 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <ScrollReveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-background/15 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-primary-foreground/20">
                <span className="text-3xl">{flag}</span>
                <span className="text-primary-foreground font-medium text-sm">Study Destination</span>
              </div>
              <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight">
                Study in <br /><span className="text-accent">{name}</span>
              </h1>
              <p className="text-primary-foreground/90 text-lg md:text-xl mt-6 leading-relaxed max-w-xl">
                {tagline}
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Get Free Counselling <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/919274861114"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/15 backdrop-blur-md text-primary-foreground rounded-xl font-semibold text-lg border border-primary-foreground/25 hover:bg-primary-foreground/25 transition-all duration-300"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-8 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <s.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground font-heading">{s.value}</div>
                    <div className="text-sm text-muted-foreground">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Study Here */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                  Why {name}?
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-5">
                  Why Students Choose <span className="text-primary">{name}</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">{description}</p>
                <div className="space-y-4">
                  {whyStudy.map((reason, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary transition-all">
                        <CheckCircle className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <span className="text-foreground leading-relaxed">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="space-y-5">
                <div className="glass-card gradient-border rounded-2xl p-8">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Wallet className="h-5 w-5 text-primary" /> Cost Breakdown
                  </h3>
                  <div className="space-y-4">
                    {costs.map((c) => (
                      <div key={c.label} className="flex justify-between items-center border-b border-border pb-3 last:border-0 last:pb-0">
                        <span className="text-sm text-muted-foreground">{c.label}</span>
                        <span className="text-sm font-bold text-primary">{c.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {highlights.slice(0, 4).map((h) => (
                    <div key={h} className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-center">
                      <span className="text-sm font-medium text-foreground">{h}</span>
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
              <span className="inline-block bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                Universities
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Top Universities in <span className="text-primary">{name}</span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                Explore world-class institutions offering quality education, cutting-edge research, and global career opportunities.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((u, i) => (
              <ScrollReveal key={u.name} delay={i * 0.08} direction="up">
                <div className="bg-card rounded-2xl p-6 border border-border group hover:-translate-y-2 hover:shadow-xl transition-all duration-500 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                      <GraduationCap className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground leading-tight">{u.name}</h3>
                      <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full mt-1">{u.ranking}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{u.specialty}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                Application Process
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Your Journey to <span className="text-primary">{name}</span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                Follow these steps to make your dream of studying in {name} a reality.
              </p>
            </div>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto">
            {applicationSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg shrink-0 shadow-lg">
                      {step.step}
                    </div>
                    {i < applicationSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/20 mt-2" />
                    )}
                  </div>
                  <div className="bg-card rounded-2xl border border-border p-6 flex-1 hover:shadow-lg transition-all duration-300 mb-2">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Requirements */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                Visa Guide
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Visa <span className="text-primary">Requirements</span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                Everything you need to know about the student visa process for {name}.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {visaRequirements.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08} direction="up">
                <div className="bg-card rounded-2xl border border-border p-6 h-full group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shrink-0">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                Financial Aid
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Scholarships & <span className="text-primary">Funding</span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                Explore scholarship opportunities to fund your education in {name}.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {scholarships.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.08} direction="up">
                <div className="bg-card rounded-2xl border border-border p-6 h-full group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-all">
                    <Star className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{s.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
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
              <span className="inline-block bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                Career Scope
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Work & <span className="text-primary">Career Opportunities</span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                Discover earning potential and career pathways during and after your studies.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {jobInfo.map((j, i) => (
              <ScrollReveal key={j.title} delay={i * 0.1} direction="up">
                <div className="bg-card rounded-2xl border border-border p-6 h-full group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{j.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{j.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                Student Stories
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                What Our Students Say About <span className="text-primary">{name}</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1} direction="up">
                <div className="bg-card rounded-2xl border border-border p-6 h-full relative">
                  <div className="text-4xl text-primary/20 font-heading font-bold absolute top-4 right-6">"</div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-primary font-medium">{t.course}</p>
                    <p className="text-xs text-muted-foreground">{t.university}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                FAQs
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Common Questions About <span className="text-primary">{name}</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-card rounded-2xl border border-border overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-heading font-semibold text-foreground pr-4">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-96" : "max-h-0"}`}>
                    <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </div>
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
                <span className="text-5xl mb-4 block">{flag}</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Start Your {name} Journey Today
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                  Get expert guidance on universities, visas, scholarships, and life in {name}. Book your free consultation now.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-primary rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    Book Free Consultation <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="https://wa.me/919274861114"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/15 text-primary-foreground rounded-xl font-semibold text-lg border border-primary-foreground/25 hover:bg-primary-foreground/25 transition-all duration-300"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
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
