import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="scale">
          <div className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Animated decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
            <div className="absolute top-10 left-10 w-4 h-4 bg-accent/30 rounded-full animate-float" />
            <div className="absolute bottom-10 right-20 w-3 h-3 bg-primary/30 rounded-full animate-float-reverse" />
            <div className="absolute top-1/2 right-10 w-20 h-20 border border-primary/10 rounded-full animate-spin-slow" />

            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-foreground mb-4">
                Ready to Start Your Journey Abroad?
              </h2>
              <p className="text-navy-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                Book a free consultation with our experts today and take the first step towards your dream career.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 animate-pulse-glow"
              >
                Book Free Consultation <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
