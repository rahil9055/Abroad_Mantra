import { Link } from "react-router-dom";
import { Star, ArrowRight, Phone } from "lucide-react";
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
    <section className="py-20 hero-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left CTA */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-foreground mb-4">
              What Our Students Say
            </h2>
            <p className="text-navy-foreground/70 text-lg mb-8 max-w-md leading-relaxed">
              Got my UK Visa and job with Abroad Mantra's incredible support. Best recommendation for international students.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-destructive text-destructive-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity mb-6"
            >
              Get a Free Consultation
            </Link>

            <div className="space-y-3 mt-6">
              <a href="tel:+91" className="flex items-center gap-2 text-navy-foreground/80 text-sm">
                <Phone className="h-4 w-4 text-success" /> +91 XXXXX XXXXX
              </a>
              <a href="https://wa.me/" className="flex items-center gap-2 text-navy-foreground/80 text-sm">
                <span className="text-success text-lg">💬</span> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Testimonial Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                  width={512}
                  height={512}
                />
                <div className="p-4">
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground/80 text-xs leading-relaxed mb-3">{t.text}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs">📍 {t.country}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
