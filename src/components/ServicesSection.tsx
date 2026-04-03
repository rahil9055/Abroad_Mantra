import { Link } from "react-router-dom";
import { FileText, MessageSquare, RotateCcw, Briefcase, Home, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: FileText,
    title: "Visa Assistance",
    desc: "End-to-end student visa support with 95%+ approval rate.",
    highlights: ["Document Checklist", "SOP & LOR Review", "Interview Prep", "Embassy Guidance"],
    path: "/services/visa",
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconGradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: MessageSquare,
    title: "Consultation Services",
    desc: "Personalized career counseling & university shortlisting.",
    highlights: ["Career Mapping", "University Matching", "Country Guidance", "Financial Planning"],
    path: "/services/consultation",
    gradient: "from-amber-500/10 to-orange-500/10",
    iconGradient: "from-amber-500 to-orange-500",
  },
  {
    icon: RotateCcw,
    title: "Remonstration & Appeals",
    desc: "Expert handling of visa refusals & re-application strategy.",
    highlights: ["Refusal Analysis", "Appeal Drafting", "Re-application", "Documentation Fix"],
    path: "/services/remonstration",
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconGradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Briefcase,
    title: "Job Assistance",
    desc: "Part-time & full-time job support in your destination country.",
    highlights: ["CV Building", "Job Search Support", "Interview Coaching", "Work Rights Info"],
    path: "/services/jobs",
    gradient: "from-violet-500/10 to-purple-500/10",
    iconGradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Home,
    title: "Accommodation Support",
    desc: "Find safe, affordable housing near your university.",
    highlights: ["Private Rentals", "Student Halls", "Budget Planning", "Virtual Tours"],
    path: "/services/accommodation",
    gradient: "from-rose-500/10 to-pink-500/10",
    iconGradient: "from-rose-500 to-pink-500",
  },
  {
    icon: BookOpen,
    title: "Tutoring Services",
    desc: "Academic tutoring & test preparation with expert mentors.",
    highlights: ["IELTS/TOEFL Prep", "Subject Tutoring", "Assignment Help", "1-on-1 Sessions"],
    path: "/services/tutoring",
    gradient: "from-cyan-500/10 to-sky-500/10",
    iconGradient: "from-cyan-500 to-sky-600",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
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
              From visa applications to settling in your new country — comprehensive support at every step.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08} direction="up">
              <Link
                to={service.path}
                className="group block bg-card rounded-2xl border border-border p-0 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-full"
              >
                {/* Top gradient banner with icon */}
                <div className={`relative h-28 bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.iconGradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  {/* Step number */}
                  <span className="absolute top-3 right-4 font-heading text-5xl font-extrabold text-foreground/[0.04] select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-1.5 mb-5">
                    {service.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
