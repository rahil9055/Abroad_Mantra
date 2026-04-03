import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LottieAnimation from "@/components/LottieAnimation";

const MentorSection = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollReveal direction="left">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Set Your Goal</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold text-foreground mt-3 leading-tight">
                Get Real Guidance<br />
                From Real Students<br />
                Through <span className="text-primary">Mentor</span>
              </h2>
              <p className="text-muted-foreground text-base mt-5 max-w-md leading-relaxed">
                Talk to students who already have reached your dream university. Get first-hand advice on courses, lifestyle, and career opportunities.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground rounded-full font-semibold text-base hover:scale-105 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300"
                >
                  TALK TO EXPERT
                  <span className="w-7 h-7 rounded-full bg-accent-foreground/15 flex items-center justify-center group-hover:bg-accent-foreground/25 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {["RS", "PP", "AK", "SR"].map((initials, i) => (
                    <div
                      key={initials}
                      className="w-10 h-10 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center text-xs font-bold text-primary"
                      style={{ zIndex: 4 - i }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-accent text-sm">★</span>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">1,000+ Students Guided</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Lottie/3D style illustration */}
          <ScrollReveal direction="right">
            <div className="relative flex justify-center items-center">
              {/* Background decorative elements */}
              <div className="absolute w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute top-10 right-10 w-16 h-16 bg-accent/10 rounded-xl rotate-12 animate-float" />
              <div className="absolute bottom-10 left-10 w-12 h-12 bg-primary/10 rounded-lg -rotate-12 animate-float-reverse" />

              {/* Main Lottie animation */}
              <div className="relative z-10 w-full max-w-[420px]">
                <LottieAnimation
                  url="https://assets3.lottiefiles.com/packages/lf20_swnrn2oy.json"
                  className="w-full h-full"
                />
              </div>

              {/* Floating cards around the animation */}
              <div className="absolute top-5 right-5 glass-card gradient-border rounded-xl px-4 py-3 animate-float z-20" style={{ animationDelay: "-2s" }}>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎓</span>
                  <div>
                    <span className="text-xs font-semibold text-foreground block">Top Universities</span>
                    <span className="text-[10px] text-muted-foreground">150+ Partner Institutions</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-0 glass-card gradient-border rounded-xl px-4 py-3 animate-float-reverse z-20">
                <div className="flex items-center gap-2">
                  <span className="text-lg">✅</span>
                  <div>
                    <span className="text-xs font-semibold text-foreground block">95% Success</span>
                    <span className="text-[10px] text-muted-foreground">Visa Approval Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
