import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import heroStudent from "@/assets/hero-student.png";
import { useTypewriter, useAnimatedCounter, useScrollReveal } from "@/hooks/useAnimations";

const countries = [
  { flag: "🇬🇧", name: "Germany" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇳🇿", name: "New Zealand" },
];

const HeroSection = () => {
  const typedText = useTypewriter(
    ["From Visa to Jobs", "Accommodation to Support", "Consultation to Career"],
    70, 40, 2500
  );
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.3);
  const studentsCount = useAnimatedCounter(1000, 2000, statsVisible);
  const countriesCount = useAnimatedCounter(15, 1500, statsVisible);
  const successRate = useAnimatedCounter(95, 1800, statsVisible);

  return (
    <section className="relative hero-gradient pt-28 pb-0 overflow-hidden min-h-[85vh]">
      {/* Animated blobs */}
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-40 left-10 w-[300px] h-[300px] bg-accent/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
      <div className="absolute top-1/2 right-10 w-[200px] h-[200px] bg-success/6 rounded-full blur-2xl animate-float-slow" />

      {/* Floating geometric shapes */}
      <div className="absolute top-32 right-[15%] w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "-1s" }} />
      <div className="absolute top-48 right-[25%] w-3 h-3 bg-accent/30 rotate-45 animate-float-slow" style={{ animationDelay: "-3s" }} />
      <div className="absolute bottom-32 left-[20%] w-5 h-5 border-2 border-primary/20 rounded-full animate-float-reverse" />
      <div className="absolute top-40 left-[5%] w-3 h-3 bg-accent/20 rounded-sm rotate-12 animate-bounce-subtle" style={{ animationDelay: "-2s" }} />
      <div className="absolute bottom-48 right-[40%] w-2 h-8 bg-primary/10 rounded-full rotate-45 animate-float" style={{ animationDelay: "-5s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-end min-h-[calc(85vh-7rem)]">
          {/* Left Content */}
          <div className="flex flex-col justify-center pb-16">
            <span
              className="text-primary font-semibold text-sm mb-3 inline-flex items-center gap-2 opacity-0"
              style={{ animation: "slide-in-left 0.6s ease-out 0.2s forwards" }}
            >
              📝 Book Your Consultation
            </span>

            <h1
              className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground leading-[1.15] mb-3 opacity-0"
              style={{ animation: "slide-in-left 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s forwards" }}
            >
              Your Journey Abroad
              <br />
              Starts Here 🚀
            </h1>

            {/* Typewriter subtitle */}
            <div
              className="h-8 mb-5 opacity-0"
              style={{ animation: "slide-in-left 0.6s ease-out 0.5s forwards" }}
            >
              <span className="text-primary font-semibold text-lg">
                {typedText}
              </span>
              <span className="inline-block w-0.5 h-5 bg-primary ml-1 align-middle animate-cursor-blink" />
            </div>

            <p
              className="text-muted-foreground text-base md:text-lg mb-8 max-w-lg leading-relaxed opacity-0"
              style={{ animation: "slide-in-left 0.6s ease-out 0.6s forwards" }}
            >
              We Help International Students Succeed Globally ✔️
            </p>

            <div
              className="flex flex-wrap gap-4 mb-10 opacity-0"
              style={{ animation: "slide-in-left 0.6s ease-out 0.7s forwards" }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 animate-pulse-glow"
              >
                Get Free Consultation
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-card text-foreground border border-border rounded-lg font-semibold hover:border-success hover:shadow-lg hover:shadow-success/10 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5 text-success animate-bounce-subtle" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Country flags row with stagger */}
            <div
              className="flex items-center gap-5 bg-card/80 backdrop-blur-sm rounded-xl px-5 py-3 w-fit border border-border shadow-sm opacity-0"
              style={{ animation: "slide-in-left 0.6s ease-out 0.9s forwards" }}
            >
              {countries.map((c, i) => (
                <div
                  key={c.name}
                  className="flex items-center gap-1.5 hover:scale-110 transition-transform cursor-default"
                  style={{ animationDelay: `${1 + i * 0.1}s` }}
                >
                  <span className="text-xl">{c.flag}</span>
                  <span className="text-xs font-medium text-muted-foreground hidden sm:inline">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image with float animation */}
          <div className="hidden lg:flex justify-end items-end self-end">
            <div className="animate-float" style={{ animationDuration: "5s" }}>
              <img
                src={heroStudent}
                alt="Student ready to study abroad"
                className="w-full max-w-[480px] object-contain drop-shadow-2xl"
                width={800}
                height={900}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animated stats bar */}
      <div ref={statsRef} className="relative z-10 bg-card/90 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto px-4 py-5">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: studentsCount, suffix: "+", label: "Students Placed" },
              { value: countriesCount, suffix: "+", label: "Countries Covered" },
              { value: successRate, suffix: "%", label: "Visa Success Rate" },
            ].map((stat) => (
              <div key={stat.label} className="group cursor-default">
                <div className="text-2xl md:text-3xl font-bold text-primary font-heading group-hover:scale-110 transition-transform">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
