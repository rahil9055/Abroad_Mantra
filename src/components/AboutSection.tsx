import { Link } from "react-router-dom";
import { FileText, Briefcase, Home, BookOpen, MessageSquare } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { icon: FileText, title: "Visa Assistance", desc: "Documentation & Filing", path: "/services/visa", color: "bg-primary/10 text-primary" },
  { icon: Briefcase, title: "Part-Time &\nFull-Time Jobs", desc: "Job Placement Support", path: "/services/jobs", color: "bg-accent/15 text-accent" },
  { icon: Home, title: "Accommodation\n& Living Help", desc: "Housing & Settling In", path: "/services/accommodation", color: "bg-success/10 text-success" },
  { icon: BookOpen, title: "Tutoring\nServices", desc: "Academic Support", path: "/services/tutoring", color: "bg-primary/10 text-primary" },
  { icon: MessageSquare, title: "Consultation &\nServices", desc: "Career Counseling", path: "/services/consultation", color: "bg-accent/15 text-accent" },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float-slow" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              About <span className="text-primary">AbroadMantra</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Complete Support at every step of your study abroad journey.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1} direction="scale">
              <Link
                to={service.path}
                className="group flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`w-16 h-16 rounded-xl ${service.color.split(" ")[0]} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <service.icon className={`h-7 w-7 ${service.color.split(" ")[1]}`} />
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground whitespace-pre-line leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs mt-1">{service.desc}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
