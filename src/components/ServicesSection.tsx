import { Link } from "react-router-dom";
import { FileText, MessageSquare, RotateCcw, Briefcase, Home, BookOpen, ArrowRight, CheckCircle2, ExternalLink, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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

const ServicesSection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Everything You Need to <span className="text-primary">Study Abroad</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From visa applications to settling in your new country — comprehensive support at every step. All services delivered <strong className="text-foreground">100% remotely & online</strong>.
            </p>
          </div>
        </ScrollReveal>

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
  );
};

export default ServicesSection;
