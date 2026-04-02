import { Link } from "react-router-dom";
import { Star, ArrowRight, Phone, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Rahul Patel",
    country: "UK",
    text: "Got my UK Visa and job with Abroad Mantra's incredible support. Best recommendation!",
    image: testimonial1,
  },
  {
    name: "Ananya Gupta",
    country: "Australia",
    text: "Found the perfect accommodation & job placement. Every step was handled professionally.",
    image: testimonial2,
  },
  {
    name: "Vikram Singh",
    country: "Canada",
    text: "From university selection to settling in Canada, their guidance was exceptional throughout.",
    image: testimonial3,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-navy dark:bg-card relative overflow-hidden">
      {/* Animated background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 left-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-accent/30 rounded-full animate-float" />
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float-reverse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left CTA */}
          <ScrollReveal direction="left">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-foreground mb-4">
                What Our Students Say
              </h2>
              <p className="text-navy-foreground/70 text-lg mb-8 max-w-md leading-relaxed">
                Join thousands of students who trusted Abroad Mantra for their international education journey.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-destructive text-destructive-foreground rounded-lg font-semibold hover:scale-105 hover:shadow-xl hover:shadow-destructive/30 transition-all duration-300 mb-6"
              >
                Get a Free Consultation
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              <div className="space-y-3 mt-6">
                <a href="tel:+91" className="flex items-center gap-2 text-navy-foreground/80 text-sm hover:text-navy-foreground transition-colors group">
                  <Phone className="h-4 w-4 text-success group-hover:animate-bounce-subtle" /> +91 XXXXX XXXXX
                </a>
                <a href="https://wa.me/" className="flex items-center gap-2 text-navy-foreground/80 text-sm hover:text-navy-foreground transition-colors group">
                  <MessageCircle className="h-4 w-4 text-success group-hover:animate-bounce-subtle" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Testimonial Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.15} direction="up">
                <div className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                  <div className="overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      width={512}
                      height={512}
                    />
                  </div>
                  <div className="p-3">
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-3 w-3 fill-accent text-accent" style={{ animationDelay: `${j * 0.1}s` }} />
                      ))}
                    </div>
                    <p className="text-card-foreground/80 text-xs leading-relaxed mb-2 line-clamp-3">{t.text}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground text-xs">📍 {t.country}</span>
                      <ArrowRight className="h-3 w-3 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
