import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="hero-gradient rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-foreground mb-4">
              Ready to Start Your Journey Abroad?
            </h2>
            <p className="text-navy-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Book a free consultation with our experts today and take the first step towards your dream career.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
            >
              Book Free Consultation <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
