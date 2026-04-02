import { Link } from "react-router-dom";
import { GraduationCap, Plane, Briefcase, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary-foreground/90 text-sm font-medium mb-6 animate-fade-in-up">
            <GraduationCap className="h-4 w-4" />
            Trusted by 1000+ Students Worldwide
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Complete Support for International Students –{" "}
            <span className="text-accent">From Visa to Jobs</span>
          </h1>

          <p className="text-lg md:text-xl text-navy-foreground/70 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Study, Work, Settle — We Make It Happen. Expert guidance for your journey to the UK, Australia, Canada, and USA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
              Book Free Consultation <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-foreground/10 text-navy-foreground border border-navy-foreground/20 rounded-xl font-semibold text-lg hover:bg-navy-foreground/20 transition-colors backdrop-blur-sm">
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: GraduationCap, stat: "1000+", label: "Students Placed" },
              { icon: Plane, stat: "15+", label: "Countries Covered" },
              { icon: Briefcase, stat: "95%", label: "Visa Success Rate" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-navy-foreground">{item.stat}</div>
                <div className="text-sm text-navy-foreground/60">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
