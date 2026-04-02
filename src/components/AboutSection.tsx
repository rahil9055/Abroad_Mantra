import { Link } from "react-router-dom";
import { FileText, Briefcase, Home, BookOpen, MessageSquare } from "lucide-react";

const services = [
  { icon: FileText, title: "Visa Assistance", desc: "Documentation & Filing", path: "/services/visa" },
  { icon: Briefcase, title: "Part-Time &\nFull-Time Jobs", desc: "Job Placement Support", path: "/services/jobs" },
  { icon: Home, title: "Accommodation\n& Living Help", desc: "Housing & Settling In", path: "/services/accommodation" },
  { icon: BookOpen, title: "Tutoring\nServices", desc: "Academic Support", path: "/services/tutoring" },
  { icon: MessageSquare, title: "Consultation &\nServices", desc: "Career Counseling", path: "/services/consultation" },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            About AbroadMantra
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Complete Support at first & last lines, in every step of your study abroad journey.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <Link
              to={service.path}
              key={service.title}
              className="group flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground whitespace-pre-line leading-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-xs mt-1">{service.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
