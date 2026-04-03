import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, GraduationCap, Users, Globe, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useScrollReveal, useAnimatedCounter } from "@/hooks/useAnimations";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Rahul Patel",
    country: "United Kingdom",
    flag: "🇬🇧",
    university: "University of Manchester",
    text: "Got my UK Visa and job with Abroad Mantra's incredible support. The team was available 24/7 and made every step seamless. Best recommendation for anyone planning to study abroad!",
    image: testimonial1,
    rating: 5,
  },
  {
    name: "Ananya Gupta",
    country: "Australia",
    flag: "🇦🇺",
    university: "University of Melbourne",
    text: "Found the perfect accommodation & job placement. Every step was handled professionally. I couldn't have asked for a better consultancy to guide me through the entire process.",
    image: testimonial2,
    rating: 5,
  },
  {
    name: "Vikram Singh",
    country: "Canada",
    flag: "🇨🇦",
    university: "University of Toronto",
    text: "From university selection to settling in Canada, their guidance was exceptional throughout. The counselors are knowledgeable and truly care about your success abroad.",
    image: testimonial3,
    rating: 5,
  },
];

const stats = [
  { icon: GraduationCap, value: 5000, suffix: "+", label: "Students Placed" },
  { icon: Globe, value: 15, suffix: "+", label: "Countries" },
  { icon: Award, value: 98, suffix: "%", label: "Success Rate" },
  { icon: Users, value: 50, suffix: "+", label: "University Partners" },
];

const StatCard = ({ icon: Icon, value, suffix, label, isVisible }: {
  icon: typeof GraduationCap;
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
}) => {
  const count = useAnimatedCounter(value, 2000, isVisible);
  return (
    <div className="text-center group">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 mb-3 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div className="text-2xl md:text-3xl font-bold text-navy-foreground font-heading">
        {count}{suffix}
      </div>
      <div className="text-navy-foreground/60 text-sm mt-1">{label}</div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.3);

  const goTo = useCallback((idx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActive(idx);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const next = useCallback(() => goTo((active + 1) % testimonials.length), [active, goTo]);
  const prev = useCallback(() => goTo((active - 1 + testimonials.length) % testimonials.length), [active, goTo]);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[active];

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
        {/* Floating dots */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * -1.2}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 tracking-wide">
              ⭐ Student Stories
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-foreground mb-4">
              Trusted by <span className="text-primary">Thousands</span> of Students
            </h2>
            <p className="text-navy-foreground/60 text-lg max-w-2xl mx-auto">
              Real experiences from students who achieved their dreams with Abroad Mantra
            </p>
          </div>
        </ScrollReveal>

        {/* Main testimonial card */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl border border-border shadow-2xl overflow-hidden">
              {/* Quote accent */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <div className="grid md:grid-cols-[280px_1fr] gap-0">
                {/* Image side */}
                <div className="relative overflow-hidden">
                  <div
                    key={active}
                    className="animate-fade-in"
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-64 md:h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />
                    {/* Country badge */}
                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium">
                      <span className="text-lg">{t.flag}</span> {t.country}
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className="p-8 md:p-10 flex flex-col justify-center relative">
                  <Quote className="absolute top-6 right-6 h-16 w-16 text-primary/10" />
                  
                  <div
                    key={`content-${active}`}
                    className="animate-fade-in"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star
                          key={j}
                          className="h-5 w-5 fill-accent text-accent"
                          style={{ animationDelay: `${j * 100}ms` }}
                        />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <blockquote className="text-card-foreground text-lg md:text-xl leading-relaxed mb-6 font-medium italic">
                      "{t.text}"
                    </blockquote>

                    {/* Author */}
                    <div className="border-t border-border pt-4">
                      <p className="font-heading font-bold text-card-foreground text-lg">{t.name}</p>
                      <p className="text-primary text-sm font-medium">{t.university}</p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-4 mt-6">
                    <button
                      onClick={prev}
                      className="p-2.5 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    <div className="flex gap-2">
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => goTo(i)}
                          className={`h-2.5 rounded-full transition-all duration-500 ${
                            i === active
                              ? "w-8 bg-primary"
                              : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                          }`}
                          aria-label={`Go to testimonial ${i + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={next}
                      className="p-2.5 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats row */}
        <div ref={statsRef}>
          <ScrollReveal direction="up" delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} isVisible={statsVisible} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
