import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import heroStudent from "@/assets/hero-student.png";

const countries = [
  { flag: "🇬🇧", name: "Germany" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇳🇿", name: "New Zealand" },
];

const HeroSection = () => {
  return (
    <section className="relative hero-gradient pt-28 pb-0 overflow-hidden min-h-[85vh]">
      {/* Subtle decorative blob */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-end min-h-[calc(85vh-7rem)]">
          {/* Left Content */}
          <div className="flex flex-col justify-center pb-16">
            <span className="text-primary font-semibold text-sm mb-3">📝 Book Your Consultation</span>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground leading-[1.15] mb-5">
              Your Journey Abroad
              <br />
              Starts Here 🚀
            </h1>

            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-lg leading-relaxed">
              From Visa to Jobs, Accommodation to Academic Support –
              We Help International Students Succeed Globally ✔️
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
              >
                Get Free Consultation
              </Link>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-card text-foreground border border-border rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-success" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Country flags row */}
            <div className="flex items-center gap-5 bg-card/80 backdrop-blur-sm rounded-xl px-5 py-3 w-fit border border-border shadow-sm">
              {countries.map((c) => (
                <div key={c.name} className="flex items-center gap-1.5">
                  <span className="text-xl">{c.flag}</span>
                  <span className="text-xs font-medium text-muted-foreground hidden sm:inline">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex justify-end items-end self-end">
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
    </section>
  );
};

export default HeroSection;
