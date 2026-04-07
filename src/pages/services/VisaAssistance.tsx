import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  FileText,
  ClipboardCheck,
  BookOpen,
  Users,
  ShieldCheck,
  FileSearch,
  Globe,
  MessageSquare,
  Star,
  Clock,
  Shield,
  Sparkles,
  ChevronDown,
  AlertTriangle,
  Award,
  Plane,
  BadgeCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/visa-hero.jpg";
import docsImg from "@/assets/visa-documents.jpg";
import successImg from "@/assets/visa-success.jpg";
import { useState } from "react";

const stats = [
  { value: "95%+", label: "Visa Approval Rate" },
  { value: "3,000+", label: "Visas Processed" },
  { value: "15+", label: "Countries Covered" },
  { value: "500+", label: "Refusal Reversals" },
];

const services = [
  {
    icon: FileText,
    title: "Student Visa Applications",
    desc: "Complete end-to-end guidance for student visa applications to the UK, Canada, Australia, USA, and more. We handle form filling, fee payment coordination, and submission — so you don't miss a single detail.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: ClipboardCheck,
    title: "Document Checklist & Review",
    desc: "Every country has unique documentation requirements. We create a personalized checklist for your destination, review every document for accuracy, and ensure your file is embassy-ready.",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: BookOpen,
    title: "SOP & LOR Crafting",
    desc: "Your Statement of Purpose is your story — we help you tell it compellingly. Our experts also guide your recommenders to write impactful Letters of Recommendation that admissions officers notice.",
    color: "from-violet-500/20 to-violet-600/5",
  },
  {
    icon: Users,
    title: "Visa Interview Preparation",
    desc: "Facing a visa officer can be nerve-wracking. Our mock interview sessions simulate real scenarios with country-specific questions, body language coaching, and confidence-building techniques.",
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    icon: ShieldCheck,
    title: "Refusal Case Handling",
    desc: "Visa refused? Don't panic. We analyze the refusal reason, identify documentation gaps, build a stronger case, and guide your re-application or appeal with a strategic approach.",
    color: "from-rose-500/20 to-rose-600/5",
  },
  {
    icon: FileSearch,
    title: "Application Tracking & Updates",
    desc: "Once submitted, we track your application status in real-time. You'll receive regular updates via WhatsApp and email so you're never left wondering what's happening with your visa.",
    color: "from-cyan-500/20 to-cyan-600/5",
  },
];

const process = [
  {
    step: "01",
    title: "Free Visa Assessment",
    desc: "We evaluate your profile, academic documents, financial standing, and travel history to determine the best visa category and strategy for your destination country.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Document Collection & Review",
    desc: "Receive a tailored document checklist. Our team reviews every paper — transcripts, bank statements, sponsorship letters, SOPs — ensuring zero errors before submission.",
    icon: ClipboardCheck,
  },
  {
    step: "03",
    title: "Application Filing",
    desc: "We fill your visa application with precision, attach properly formatted documents, pay the visa fee on your behalf if needed, and submit through the correct channel — online or at a VFS center.",
    icon: FileText,
  },
  {
    step: "04",
    title: "Interview Coaching",
    desc: "For countries requiring interviews (like the USA), we conduct multiple mock sessions covering common questions, tricky scenarios, and proper etiquette to maximize your confidence.",
    icon: Users,
  },
  {
    step: "05",
    title: "Biometrics & Submission Support",
    desc: "We guide you through biometric appointments, accompany you to VFS centers when possible, and ensure all physical submissions are complete and correctly formatted.",
    icon: BadgeCheck,
  },
  {
    step: "06",
    title: "Approval & Pre-Departure",
    desc: "Once your visa is approved, we help with travel planning, forex guidance, accommodation arrangements, and a comprehensive pre-departure briefing to start your journey right.",
    icon: Plane,
  },
];

const visaTypes = [
  {
    country: "🇬🇧 United Kingdom",
    visa: "Tier 4 (Student) Visa",
    duration: "Course length + 4 months",
    workRights: "20 hrs/week during term",
    processing: "3–4 weeks",
  },
  {
    country: "🇨🇦 Canada",
    visa: "Study Permit",
    duration: "Course length + 90 days",
    workRights: "20 hrs/week on-campus",
    processing: "4–8 weeks",
  },
  {
    country: "🇦🇺 Australia",
    visa: "Subclass 500 (Student)",
    duration: "Course length + 2 months",
    workRights: "48 hrs/fortnight",
    processing: "4–6 weeks",
  },
  {
    country: "🇺🇸 United States",
    visa: "F-1 Student Visa",
    duration: "Duration of study (D/S)",
    workRights: "20 hrs/week on-campus",
    processing: "2–4 weeks (+ interview)",
  },
];

const testimonials = [
  {
    name: "Rahul Verma",
    university: "University of Birmingham, UK",
    text: "My visa was refused once before I came to AbroadMantra. They analyzed every detail, fixed my SOP, restructured my financials, and I got approved on the second attempt. Lifesavers!",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    university: "University of British Columbia, Canada",
    text: "The mock interview sessions were incredibly realistic. When I walked into the actual interview, I felt like I'd already done it ten times. Got my study permit in 3 weeks!",
    rating: 5,
  },
  {
    name: "Arjun Krishnan",
    university: "University of Sydney, Australia",
    text: "AbroadMantra handled my entire Subclass 500 application. From GTE statement to health insurance — they took care of everything. I just had to show up for biometrics. Absolute professionals.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "What documents do I need for a student visa?",
    a: "Requirements vary by country, but typically you'll need: a valid passport, university offer letter (CAS/CoE/I-20), financial proof (bank statements, sponsor letters), academic transcripts, English proficiency scores (IELTS/TOEFL), SOP, LOR, and health/travel insurance. We provide a country-specific checklist tailored to your case.",
  },
  {
    q: "How long does the visa process take?",
    a: "Processing times vary: UK (3–4 weeks), Canada (4–8 weeks), Australia (4–6 weeks), USA (2–4 weeks + interview scheduling). We recommend starting 3–4 months before your course start date to allow buffer time.",
  },
  {
    q: "What happens if my visa gets refused?",
    a: "Don't worry — we specialize in refusal cases. We'll analyze the refusal letter, identify the exact reasons, address every concern with stronger documentation, and submit a fresh application or appeal. Our refusal reversal success rate is over 85%.",
  },
  {
    q: "Do you help with visa extensions or post-study work visas?",
    a: "Yes! We assist with visa extensions, post-study work permits (UK Graduate Route, Canada PGWP, Australia 485, USA OPT/CPT), and even dependent/spouse visa applications.",
  },
  {
    q: "How much does your visa assistance service cost?",
    a: "Our pricing depends on the destination country and complexity of your case. We offer a free initial assessment so you can understand the scope before committing. We're fully transparent — no hidden fees.",
  },
  {
    q: "Can you guarantee my visa will be approved?",
    a: "No ethical consultant can guarantee visa approval — the final decision rests with the embassy. However, our 95%+ success rate speaks for itself. We maximize your chances through meticulous preparation and strategic presentation of your case.",
  },
];

const commonMistakes = [
  { icon: AlertTriangle, title: "Incomplete Financial Proof", desc: "Not showing sufficient or properly documented funds is the #1 reason for visa refusals." },
  { icon: AlertTriangle, title: "Weak Statement of Purpose", desc: "A generic SOP that doesn't explain your study plans and career goals convincingly." },
  { icon: AlertTriangle, title: "Inconsistent Information", desc: "Mismatches between your application form and supporting documents raise red flags." },
  { icon: AlertTriangle, title: "Missing Deadlines", desc: "Late applications or expired documents can lead to automatic rejection." },
];

const whyUs = [
  { icon: Award, text: "95%+ visa approval success rate across all countries" },
  { icon: Shield, text: "Dedicated visa case manager assigned to every student" },
  { icon: Globe, text: "Deep expertise in UK, Canada, Australia & USA visa regulations" },
  { icon: Clock, text: "Free re-application support if your visa is refused" },
  { icon: Star, text: "500+ visa refusal cases successfully reversed" },
  { icon: Users, text: "Mock interviews with country-specific questions" },
  { icon: FileText, text: "End-to-end documentation — we review every single page" },
  { icon: MessageSquare, text: "Real-time tracking & updates via WhatsApp" },
];

const VisaAssistance = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Visa Assistance Services | Student Visa Experts – AbroadMantra"
        description="Navigate the complex visa process with confidence. 95%+ approval rate, expert documentation review, interview prep, and refusal case handling for UK, Canada, Australia & USA student visas."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="relative h-[340px] md:h-[480px] w-full">
          <img src={heroImg} alt="Visa consultation with AbroadMantra experts" className="w-full h-full object-cover" width={1400} height={800} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 -mt-44 md:-mt-56">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-5">
                <ShieldCheck className="h-4 w-4" /> 95%+ Visa Approval Rate
              </span>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                Your Visa,{" "}
                <span className="text-primary">Our Expertise</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mt-5 leading-relaxed max-w-2xl">
                Don't let paperwork stand between you and your dream university. Our visa specialists handle everything — from documentation to interview prep — ensuring the highest approval rates.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Get Free Visa Assessment <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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

      {/* Intro with Image */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Visa Help Matters</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 leading-tight">
                  One Wrong Document Can Cost You{" "}
                  <span className="text-primary">A Year of Delay</span>
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mt-5">
                  Visa applications are unforgiving. A missing signature, an incorrectly formatted bank statement, or a poorly written SOP can lead to refusal — and that means months of waiting to reapply. At AbroadMantra, we've processed over <strong className="text-foreground">3,000 student visas</strong> and know exactly what embassies look for.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed mt-4">
                  Our team stays updated on the latest visa regulations, processing changes, and embassy preferences for every country we serve. We don't just fill forms — we build bulletproof applications.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {["Embassy-Ready Files", "Zero Error Guarantee", "Refusal Recovery"].map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      <CheckCircle className="h-3.5 w-3.5" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={docsImg} alt="Passport and visa documents preparation" className="w-full h-auto" loading="lazy" width={1400} height={800} />
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
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Visa Services</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Complete Visa Support,{" "}
                <span className="text-primary">Every Step</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                From your first document to your visa stamp — we handle the complexity so you can focus on packing your bags.
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

      {/* Visa Types Comparison */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Visa Quick Guide</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Student Visa{" "}
                <span className="text-primary">At a Glance</span>
              </h2>
              <p className="text-muted-foreground mt-4">Compare student visa types across our top destination countries.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {visaTypes.map((v, i) => (
              <ScrollReveal key={v.country} delay={i * 0.1} direction="up">
                <div className="glass-card gradient-border rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">{v.country}</h3>
                  <p className="text-primary font-semibold text-sm mb-4">{v.visa}</p>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="text-foreground font-medium">{v.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Work Rights</span>
                      <span className="text-foreground font-medium">{v.workRights}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Processing</span>
                      <span className="text-foreground font-medium">{v.processing}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Your Visa in{" "}
                <span className="text-primary">6 Clear Steps</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                A proven, streamlined process that has delivered 3,000+ successful visa outcomes.
              </p>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto relative">
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

      {/* Common Mistakes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Avoid These Pitfalls</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Common Visa{" "}
                <span className="text-primary">Mistakes</span>
              </h2>
              <p className="text-muted-foreground mt-4">These are the top reasons visa applications get refused — and exactly what we help you avoid.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {commonMistakes.map((m, i) => (
              <ScrollReveal key={m.title} delay={i * 0.1} direction="up">
                <div className="glass-card gradient-border rounded-2xl p-6 flex items-start gap-4 group hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                    <m.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-foreground mb-1">{m.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories + Why Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={successImg} alt="Students celebrating successful visa approvals" className="w-full h-auto" loading="lazy" width={1400} height={800} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-heading text-xl font-bold">3,000+ Visas. 95%+ Success.</p>
                  <p className="text-white/80 text-sm mt-1">Students from across India now studying at top universities worldwide</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 leading-tight">
                  The AbroadMantra{" "}
                  <span className="text-primary">Visa Advantage</span>
                </h2>
                <div className="grid sm:grid-cols-1 gap-3 mt-6">
                  {whyUs.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors">
                      <item.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm leading-relaxed">{item.text}</span>
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
                Real Students,{" "}
                <span className="text-primary">Real Results</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1} direction="up">
                <div className="glass-card gradient-border rounded-2xl p-7 h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed italic mb-5">"{t.text}"</p>
                  <div>
                    <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
                    <p className="text-primary text-xs font-medium">{t.university}</p>
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
                Visa Questions?{" "}
                <span className="text-primary">We've Got Answers</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.06} direction="up">
                <div className="glass-card gradient-border rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-heading font-semibold text-foreground text-base pr-4">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-96 pb-6" : "max-h-0"}`}>
                    <p className="px-6 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
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
            <div className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-blob" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Don't Risk Your Visa Application
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                  Get a free visa assessment from our experts. We'll review your profile, identify potential issues, and create a winning strategy — at no cost.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-primary rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    Book Free Assessment <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/20"
                  >
                    <MessageSquare className="h-5 w-5" /> WhatsApp Us
                  </a>
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

export default VisaAssistance;
