import { Link } from "react-router-dom";
import { FileText, MessageSquare, RotateCcw, Briefcase, Home, BookOpen, ArrowRight, CheckCircle2, ExternalLink, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const services = [
  {
    icon: FileText,
    title: "Visa Assistance",
    desc: "End-to-end student visa support with 95%+ approval rate. 100% remote & online.",
    highlights: ["Document Checklist", "SOP & LOR Review", "Interview Prep", "Embassy Guidance"],
    path: "/services/visa",
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconGradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: MessageSquare,
    title: "Consultation Services",
    desc: "Personalized career counseling & university shortlisting. Fully online.",
    highlights: ["Career Mapping", "University Matching", "Country Guidance", "Financial Planning"],
    path: "/services/consultation",
    gradient: "from-amber-500/10 to-orange-500/10",
    iconGradient: "from-amber-500 to-orange-500",
  },
  {
    icon: RotateCcw,
    title: "Remonstration & Appeals",
    desc: "Expert handling of visa refusals & re-application strategy. Remote support.",
    highlights: ["Refusal Analysis", "Appeal Drafting", "Re-application", "Documentation Fix"],
    path: "/services/remonstration",
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconGradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Briefcase,
    title: "Job Assistance",
    desc: "Part-time & full-time job support in your destination country. Online guidance.",
    highlights: ["CV Building", "Job Search Support", "Interview Coaching", "Work Rights Info"],
    path: "/services/jobs",
    gradient: "from-violet-500/10 to-purple-500/10",
    iconGradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Home,
    title: "Accommodation Support",
    desc: "Find safe, affordable housing near your university. Remote assistance.",
    highlights: ["Private Rentals", "Student Halls", "Budget Planning", "Virtual Tours"],
    path: "/services/accommodation",
    gradient: "from-rose-500/10 to-pink-500/10",
    iconGradient: "from-rose-500 to-pink-500",
  },
  {
    icon: BookOpen,
    title: "Academic Support",
    desc: "Expert academic assistance powered by Writeopedia. Fully online.",
    highlights: ["IELTS/TOEFL Prep", "Subject Support", "Exam Coaching", "1-on-1 Sessions"],
    path: "https://www.writeopedia.com/",
    gradient: "from-cyan-500/10 to-sky-500/10",
    iconGradient: "from-cyan-500 to-sky-600",
    external: true,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Our Services – AbroadMantra | Study Abroad Support"
        description="Explore AbroadMantra's comprehensive study abroad services: visa assistance, consultation, job support, accommodation, remonstration & academic help."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative hero-gradient pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-primary/8 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-accent/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mt-3 leading-tight">
                Everything You Need to <span className="text-primary">Study Abroad</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-5 leading-relaxed">
                From visa applications to settling in your new country — comprehensive support at every step. All services delivered <strong className="text-foreground">100% remotely & online</strong>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, i) => {
              const CardContent = (
                <>
                  <div className={`relative h-28 bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.iconGradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <span className="absolute top-3 right-4 font-heading text-5xl font-extrabold text-foreground/[0.04] select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {service.external && (
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-0.5 bg-primary/20 rounded-full text-[10px] font-semibold text-primary">
                        <Globe className="h-3 w-3" /> Writeopedia
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                      {service.title}
                      {service.external && <ExternalLink className="h-3.5 w-3.5 opacity-50" />}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                    <div className="grid grid-cols-2 gap-1.5 mb-5">
                      {service.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </>
              );

              return (
                <ScrollReveal key={service.title} delay={i * 0.08} direction="up">
                  {service.external ? (
                    <a
                      href={service.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block bg-card rounded-2xl border border-border p-0 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-full"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    <Link
                      to={service.path}
                      className="group block bg-card rounded-2xl border border-border p-0 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-full"
                    >
                      {CardContent}
                    </Link>
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="scale">
            <div className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Not Sure Which Service You Need?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                  Book a free consultation and our experts will create a personalised plan for your study abroad journey.
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-primary rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Get Free Consultation <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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

export default Services;
