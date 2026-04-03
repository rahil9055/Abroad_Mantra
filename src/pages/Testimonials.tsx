import { Link } from "react-router-dom";
import { Star, ArrowRight, GraduationCap, Globe, CheckCircle, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import { useAnimatedCounter, useScrollReveal } from "@/hooks/useAnimations";

const testimonials = [
  { name: "Priya Sharma", country: "UK", flag: "🇬🇧", university: "University of Manchester", rating: 5, text: "AbroadMantra made my UK dream come true! From SOP guidance to visa interview prep, every step was handled professionally. I got my visa approved in just 3 weeks!", course: "MSc Data Science" },
  { name: "Rahul Verma", country: "Canada", flag: "🇨🇦", university: "University of Toronto", rating: 5, text: "I was confused about choosing between Canada and Australia. The counselors helped me understand the PR pathways and I'm now pursuing my Master's in Toronto!", course: "MEng Mechanical" },
  { name: "Ananya Reddy", country: "Australia", flag: "🇦🇺", university: "University of Melbourne", rating: 5, text: "The accommodation support was a lifesaver. They found me a great shared apartment near campus before I even arrived. Truly end-to-end support!", course: "MBA" },
  { name: "Karthik Nair", country: "USA", flag: "🇺🇸", university: "University of Illinois", rating: 5, text: "After my visa was refused once, I was devastated. AbroadMantra's remonstration team analyzed my case and got my visa approved on the second attempt!", course: "MS Computer Science" },
  { name: "Sneha Patel", country: "UK", flag: "🇬🇧", university: "Imperial College London", rating: 5, text: "The tutoring services helped me with my assignments in the first semester. The tutors understood the UK grading system perfectly.", course: "MSc Finance" },
  { name: "Amit Singh", country: "Canada", flag: "🇨🇦", university: "University of British Columbia", rating: 4, text: "Great job assistance! They helped me build a professional CV and I landed a part-time job within my first month in Vancouver.", course: "BBA" },
  { name: "Deepa Menon", country: "Australia", flag: "🇦🇺", university: "UNSW Sydney", rating: 5, text: "Transparent pricing, no hidden charges, and genuine guidance. AbroadMantra is the real deal. Highly recommended for anyone planning to study abroad!", course: "MSc Engineering" },
  { name: "Vikram Joshi", country: "USA", flag: "🇺🇸", university: "Arizona State University", rating: 5, text: "The financial planning advice saved me thousands. They helped me find scholarships I didn't even know existed!", course: "MS Information Systems" },
];

const stats = [
  { value: 1000, suffix: "+", label: "Students Placed" },
  { value: 15, suffix: "+", label: "Countries Covered" },
  { value: 95, suffix: "%", label: "Visa Success Rate" },
  { value: 500, suffix: "+", label: "5-Star Reviews" },
];

const Testimonials = () => {
  const { ref: statsRef, isVisible } = useScrollReveal(0.3);
  const counters = stats.map((s) => useAnimatedCounter(s.value, 2000, isVisible));

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Student Testimonials – AbroadMantra | Real Success Stories"
        description="Read real reviews from 1000+ students who successfully studied abroad with AbroadMantra. 95% visa success rate across UK, Canada, Australia, and USA."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative hero-gradient pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-primary/8 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-accent/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mt-3 leading-tight">
                What Our <span className="text-primary">Students Say</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-5 leading-relaxed">
                Real stories from real students who achieved their study abroad dreams with AbroadMantra.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="bg-card border-y border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-primary font-heading">{counters[i]}{s.suffix}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.06} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="glass-card gradient-border rounded-2xl p-7 h-full relative group hover:-translate-y-1 transition-all duration-300">
                  <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/10" />
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} className={`h-4 w-4 ${si < t.rating ? "text-accent fill-accent" : "text-border"}`} />
                    ))}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed mb-5">"{t.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{t.name}</h3>
                      <p className="text-xs text-muted-foreground">{t.course} · {t.university}</p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-full">
                      <span className="text-lg">{t.flag}</span>
                      <span className="text-xs font-medium text-foreground">{t.country}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="scale">
            <div className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-blob" />
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Be Our Next Success Story</h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">Join 1000+ students who've achieved their study abroad dreams with AbroadMantra.</p>
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-primary rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                  Start Your Journey <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
