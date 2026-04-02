import { Link } from "react-router-dom";
import { FileText, MessageSquare, RotateCcw, Briefcase, Home, BookOpen, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { icon: FileText, title: "Visa Assistance", desc: "Student visa applications, document checklists, SOP & LOR guidance, and interview preparation.", path: "/services/visa" },
  { icon: MessageSquare, title: "Consultation Services", desc: "Career counseling, course & university selection, country guidance, and financial planning.", path: "/services/consultation" },
  { icon: RotateCcw, title: "Remonstration / Appeals", desc: "Visa refusal analysis, appeal drafting, re-application strategy, and documentation correction.", path: "/services/remonstration" },
  { icon: Briefcase, title: "Job Assistance", desc: "Part-time & full-time job support, CV building, and interview preparation.", path: "/services/jobs" },
  { icon: Home, title: "Accommodation Support", desc: "Private & shared housing options, budget planning, and location guidance.", path: "/services/accommodation" },
  { icon: BookOpen, title: "Tutoring Services", desc: "Subject-specific tutoring, assignment help, exam prep, and 1-on-1 sessions.", path: "/services/tutoring" },
];

const ServicesSection = () => {
  return (
    <section className="py-20 section-gradient relative overflow-hidden">
      <div className="absolute top-20 right-0 w-32 h-32 border border-primary/10 rounded-full animate-spin-slow" />
      <div className="absolute bottom-20 left-10 w-20 h-20 border border-accent/10 rounded-lg rotate-45 animate-float-slow" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
              <Link
                to={service.path}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 block"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
