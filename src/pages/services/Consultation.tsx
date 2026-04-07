import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Globe,
  Wallet,
  Target,
  TrendingUp,
  MessageSquare,
  Users,
  Star,
  Clock,
  Shield,
  Heart,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/consultation-hero.jpg";
import successImg from "@/assets/consultation-success.jpg";
import planningImg from "@/assets/consultation-planning.jpg";
import { useState } from "react";

const stats = [
  { value: "5,000+", label: "Students Guided" },
  { value: "95%", label: "Visa Success Rate" },
  { value: "200+", label: "Partner Universities" },
  { value: "15+", label: "Countries Covered" },
];

const services = [
  {
    icon: Target,
    title: "Career Counseling",
    desc: "We help you discover the right career path by analyzing your interests, skills, aptitude, and global industry trends. Our counselors map your aspirations to real-world opportunities across countries.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: GraduationCap,
    title: "Course & Program Selection",
    desc: "From undergraduate to PhD — we research and recommend programs that match your academic profile, career ambitions, and budget. No generic advice — every recommendation is tailored to you.",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: Globe,
    title: "University Shortlisting",
    desc: "We don't just look at rankings. We evaluate acceptance rates, scholarship availability, location, campus culture, and alumni networks to build your personalized university shortlist.",
    color: "from-violet-500/20 to-violet-600/5",
  },
  {
    icon: MessageSquare,
    title: "Country Comparison",
    desc: "UK vs Canada vs Australia vs USA — we break down tuition costs, living expenses, work rights, PR pathways, and quality of life so you can choose your ideal destination with confidence.",
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    icon: Wallet,
    title: "Financial Planning",
    desc: "Get a complete financial picture — tuition fees, living costs, scholarship opportunities, education loans, part-time earning potential, and ROI analysis for your chosen program.",
    color: "from-rose-500/20 to-rose-600/5",
  },
  {
    icon: TrendingUp,
    title: "Profile Evaluation",
    desc: "An honest, data-driven assessment of your academic and professional profile. We identify strengths, flag weaknesses, and give you a clear action plan to maximize your admission chances.",
    color: "from-cyan-500/20 to-cyan-600/5",
  },
];

const process = [
  {
    step: "01",
    title: "Free Discovery Call",
    desc: "Share your dreams, academic background, and budget. We listen first, advise later. This 30-minute call is completely free with no obligations.",
    icon: Heart,
  },
  {
    step: "02",
    title: "Profile Assessment & Strategy",
    desc: "Our experts evaluate your profile against university requirements. You receive a detailed report with a personalized roadmap, university shortlist, and timeline.",
    icon: Target,
  },
  {
    step: "03",
    title: "Application & Document Preparation",
    desc: "We help craft compelling SOPs, edit LORs, prepare resumes, and build a standout application package — reviewed by consultants who know what admissions committees look for.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Submission & Follow-Up",
    desc: "We manage application submissions, track statuses, handle university communications, and negotiate scholarships on your behalf — keeping you stress-free.",
    icon: Shield,
  },
  {
    step: "05",
    title: "Pre-Departure Support",
    desc: "From visa guidance to accommodation tips, forex advice, and packing checklists — we prepare you for a smooth transition to your new life abroad.",
    icon: Globe,
  },
];

const testimonials = [
  {
    name: "Ananya Sharma",
    university: "University of Oxford, UK",
    text: "AbroadMantra didn't just help me apply — they helped me believe I belonged at Oxford. Their SOP guidance was incredible. I got in with a scholarship!",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    university: "University of Toronto, Canada",
    text: "I was confused between 6 countries. My counselor patiently compared every option with actual data. Best decision I made was booking that free call.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    university: "University of Melbourne, Australia",
    text: "The financial planning they did saved me ₹4 lakhs in unnecessary costs. They found scholarships I didn't even know existed. Truly life-changing service.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Is the first consultation really free?",
    a: "Absolutely. Your initial 30-minute discovery call is completely free with no strings attached. We believe you should experience our expertise before making any commitment.",
  },
  {
    q: "How is AbroadMantra different from other consultancies?",
    a: "We don't do cookie-cutter advice. Every student gets a personalized roadmap based on data-driven analysis. We're transparent about costs, honest about chances, and we never push universities that pay us commissions over what's right for you.",
  },
  {
    q: "What countries do you cover?",
    a: "We specialize in the UK, Canada, Australia, and the USA — the four most popular destinations for international students. Our counselors have in-depth, country-specific expertise.",
  },
  {
    q: "How long does the entire process take?",
    a: "Typically 3–6 months from your first consultation to receiving admission offers. We recommend starting at least 8–12 months before your intended intake for the best results.",
  },
  {
    q: "Do you help with scholarships?",
    a: "Yes! Scholarship research and application support is a core part of our service. We've helped students collectively save over ₹10 crores in scholarships and financial aid.",
  },
  {
    q: "Can I consult online or do I need to visit your office?",
    a: "We offer both! Most of our consultations happen over video call for your convenience. You're welcome to visit our office too — whatever works best for you.",
  },
];

const whyUs = [
  { icon: Users, text: "One-on-one sessions with expert counselors — never group advice" },
  { icon: Target, text: "Data-driven university recommendations based on your unique profile" },
  { icon: Wallet, text: "Scholarship and funding guidance included in every package" },
  { icon: Globe, text: "Deep expertise across UK, Canada, Australia & USA" },
  { icon: Shield, text: "Transparent pricing — no hidden fees, no commission-driven advice" },
  { icon: Clock, text: "Dedicated counselor available on WhatsApp for quick queries" },
  { icon: Star, text: "95% visa success rate with 5,000+ students guided" },
  { icon: Heart, text: "Post-admission support including pre-departure briefing" },
];

const Consultation = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Free Study Abroad Consultation | Expert Counseling – AbroadMantra"
        description="Get personalized study abroad guidance from experienced counselors. Free initial consultation, data-driven university recommendations, and end-to-end support for UK, Canada, Australia & USA."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="relative h-[340px] md:h-[480px] w-full">
          <img src={heroImg} alt="Consultation session at AbroadMantra" className="w-full h-full object-cover" width={1400} height={800} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 -mt-44 md:-mt-56">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-5">
                <Sparkles className="h-4 w-4" /> Free First Consultation
              </span>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                Your Study Abroad Journey{" "}
                <span className="text-primary">Starts Here</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mt-5 leading-relaxed max-w-2xl">
                Expert counselors who genuinely care about your future. Personalized guidance, honest advice, and end-to-end support — from choosing a country to landing on campus.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Book Free Consultation <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-foreground rounded-xl font-semibold text-base hover:bg-secondary/80 transition-all"
                >
                  <MessageSquare className="h-5 w-5" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <div className="text-center p-5 rounded-2xl bg-secondary/50 border border-border">
                  <div className="font-heading text-3xl md:text-4xl font-extrabold text-primary">{s.value}</div>
                  <p className="text-muted-foreground text-sm mt-1 font-medium">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do — Intro with Image */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 leading-tight">
                  More Than Just Advice —{" "}
                  <span className="text-primary">We're Your Partners</span>
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mt-5">
                  Studying abroad is a life-changing decision. You deserve a consultant who treats it that way. At AbroadMantra, we don't just process applications — we invest in understanding your dreams, your fears, and your unique circumstances.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed mt-4">
                  Our counselors have collectively helped <strong className="text-foreground">5,000+ students</strong> reach universities across 15 countries. We combine industry expertise with genuine empathy to deliver results that matter.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {["Personalized Approach", "Transparent Pricing", "Proven Results"].map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      <CheckCircle className="h-3.5 w-3.5" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={planningImg} alt="Counselor helping student plan study abroad journey" className="w-full h-auto" loading="lazy" width={1400} height={800} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Everything You Need,{" "}
                <span className="text-primary">Under One Roof</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                From the first "where should I study?" question to the day you board your flight — we've got you covered.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08} direction="up">
                <div className="glass-card gradient-border rounded-2xl p-7 h-full group hover:-translate-y-2 transition-all duration-500">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                    <s.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3 tracking-tight">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Your Journey in{" "}
                <span className="text-primary">5 Simple Steps</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                We've streamlined the study abroad process so you can focus on what matters — your future.
              </p>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            <div className="space-y-8">
              {process.map((p, i) => (
                <ScrollReveal key={p.step} delay={i * 0.12} direction="left">
                  <div className="flex items-start gap-5 md:gap-7 group">
                    <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                      <p.icon className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground" />
                    </div>
                    <div className="glass-card gradient-border rounded-2xl p-6 flex-1 group-hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">Step {p.step}</span>
                        <h3 className="font-heading text-lg font-bold text-foreground tracking-tight">{p.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Image + Why Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={successImg} alt="Happy students celebrating university admissions" className="w-full h-auto" loading="lazy" width={1400} height={800} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-heading text-xl font-bold">5,000+ Dreams Turned Into Reality</p>
                  <p className="text-white/80 text-sm mt-1">Students from across India now studying at top universities worldwide</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why AbroadMantra</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 leading-tight">
                  The <span className="text-primary">AbroadMantra</span> Difference
                </h2>
                <div className="mt-6 space-y-4">
                  {whyUs.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                        <item.icon className="h-4.5 w-4.5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <p className="text-foreground text-sm leading-relaxed pt-1.5">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Student Stories</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Hear From Students{" "}
                <span className="text-primary">We've Helped</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1} direction="up">
                <div className="glass-card gradient-border rounded-2xl p-7 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic">"{t.text}"</p>
                  <div className="mt-5 pt-4 border-t border-border">
                    <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
                    <p className="text-primary text-xs font-medium mt-0.5">{t.university}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQs</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Got <span className="text-primary">Questions?</span>
              </h2>
              <p className="text-muted-foreground mt-4">Everything you need to know about our consultation services.</p>
            </div>
          </ScrollReveal>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="glass-card gradient-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-heading font-semibold text-foreground text-sm">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-60 pb-5" : "max-h-0"}`}>
                    <p className="text-muted-foreground text-sm leading-relaxed px-5">{faq.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="scale">
            <div className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-blob" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Ready to Take the First Step?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                  Book your free 30-minute consultation today. No pressure, no obligations — just honest, expert guidance to help you make the right decision.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-primary rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    Book Free Consultation <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultation;
