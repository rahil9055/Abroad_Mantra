import { Link } from "react-router-dom";
import { FileText, MessageSquare, RotateCcw, Briefcase, Home, BookOpen, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { icon: FileText, title: "Visa Assistance", desc: "Student visa applications, document checklists, SOP & LOR guidance, and interview preparation.", path: "/services/visa", accent: "primary" },
  { icon: MessageSquare, title: "Consultation Services", desc: "Career counseling, course & university selection, country guidance, and financial planning.", path: "/services/consultation", accent: "accent" },
  { icon: RotateCcw, title: "Remonstration / Appeals", desc: "Visa refusal analysis, appeal drafting, re-application strategy, and documentation correction.", path: "/services/remonstration", accent: "success" },
  { icon: Briefcase, title: "Job Assistance", desc: "Part-time & full-time job support, CV building, and interview preparation.", path: "/services/jobs", accent: "primary" },
  { icon: Home, title: "Accommodation Support", desc: "Private & shared housing options, budget planning, and location guidance.", path: "/services/accommodation", accent: "accent" },
  { icon: BookOpen, title: "Tutoring Services", desc: "Subject-specific tutoring, assignment help, exam prep, and 1-on-1 sessions.", path: "/services/tutoring", accent: "success" },
];

const accentStyles: Record<string, { iconBg: string; iconColor: string; ctaBorder: string; ctaHover: string; numberColor: string }> = {
  primary: { iconBg: "bg-primary/10", iconColor: "text-primary", ctaBorder: "border-primary/30 text-primary", ctaHover: "hover:bg-primary hover:text-primary-foreground", numberColor: "text-primary/15" },
  accent: { iconBg: "bg-accent/15", iconColor: "text-accent", ctaBorder: "border-accent/30 text-accent", ctaHover: "hover:bg-accent hover:text-accent-foreground", numberColor: "text-accent/15" },
  success: { iconBg: "bg-success/10", iconColor: "text-success", ctaBorder: "border-success/30 text-success", ctaHover: "hover:bg-success hover:text-success-foreground", numberColor: "text-success/15" },
};

const ServicesSection = () => {
  return (
    <section className="py-24 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Everything You Need to <span className="text-primary">Study Abroad</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From visa applications to settling in your new country, we provide comprehensive support at every step.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => {
            const style = accentStyles[service.accent];
            return (
              <ScrollReveal key={service.title} delay={i * 0.08} direction="up">
                <Link
                  to={service.path}
                  className="group block bg-card rounded-2xl border border-border p-7 hover:shadow-xl hover:border-primary/15 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-full"
                >
                  {/* Large step number watermark */}
                  <span className={`absolute top-3 right-5 font-heading text-6xl font-extrabold ${style.numberColor} select-none pointer-events-none`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className={`w-14 h-14 rounded-xl ${style.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <service.icon className={`h-7 w-7 ${style.iconColor}`} />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 ${style.ctaBorder} ${style.ctaHover}`}>
                    Learn More <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
