import { Link } from "react-router-dom";
import { FileText, Briefcase, Home, BookOpen, MessageSquare, GraduationCap, ArrowRight, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LottieAnimation from "@/components/LottieAnimation";

const services = [
  {
    icon: GraduationCap,
    title: "Shortlist Universities",
    desc: "Find your dream university with our advanced course finder and expert recommendations.",
    cta: "Find my dream university",
    path: "/services/consultation",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    lottie: "https://assets9.lottiefiles.com/packages/lf20_inti4oxf.json",
  },
  {
    icon: BookOpen,
    title: "Prepare for IELTS",
    desc: "Take the personalized assistance of our academic experts and ace your exam. Powered by Writeopedia.",
    cta: "Start prep",
    path: "/services/consultation",
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
    lottie: "https://assets4.lottiefiles.com/packages/lf20_svy4ivvy.json",
  },
  {
    icon: FileText,
    title: "Get Education Loan",
    desc: "Finance your study abroad dreams with our trusted financial planning guidance.",
    cta: "Talk to loan expert",
    path: "/services/consultation",
    iconBg: "bg-success/10",
    iconColor: "text-success",
    lottie: "https://assets2.lottiefiles.com/packages/lf20_5ngs2ksb.json",
  },
  {
    icon: MessageSquare,
    title: "Apply for Scholarship",
    desc: "Find the best scholarships available for your profile and maximize your funding.",
    cta: "Find scholarship",
    path: "/services/consultation",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    lottie: "https://assets2.lottiefiles.com/packages/lf20_UJNc2t.json",
  },
  {
    icon: Briefcase,
    title: "Apply for Visa",
    desc: "Get world-class visa assistance from our experts with a 95%+ success rate.",
    cta: "Apply for visa",
    path: "/services/visa",
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
    lottie: null,
  },
  {
    icon: Home,
    title: "Student Accommodation",
    desc: "Book your accommodation near top universities across the globe before you arrive.",
    cta: "Find accommodation",
    path: "/services/accommodation",
    iconBg: "bg-success/10",
    iconColor: "text-success",
    lottie: null,
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Best Features</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Ensuring You Get The <span className="text-primary">Best In</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="group relative bg-card rounded-2xl border border-border p-7 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden`}>
                    {service.lottie ? (
                      <LottieAnimation url={service.lottie} className="w-10 h-10" />
                    ) : (
                      <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                    )}
                  </div>
                </div>

                <h3 className={`font-heading text-lg font-bold ${service.iconColor} mb-2`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>

                <Link
                  to={service.path}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 group-hover:shadow-md ${
                    i % 3 === 0
                      ? "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                      : i % 3 === 1
                      ? "border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground"
                      : "border-success/30 text-success hover:bg-success hover:text-success-foreground"
                  }`}
                >
                  {service.cta} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/3 via-transparent to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
