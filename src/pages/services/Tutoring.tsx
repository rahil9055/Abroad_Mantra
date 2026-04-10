import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  BookOpen,
  GraduationCap,
  ClipboardCheck,
  Users,
  Brain,
  Award,
  Globe,
  MessageSquare,
  Star,
  Clock,
  Sparkles,
  ChevronDown,
  Laptop,
  Languages,
  BarChart3,
  Target,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/tutoring-hero.png";
import onlineImg from "@/assets/tutoring-online.jpg";
import { useState } from "react";

const stats = [
  { value: "1,500+", label: "Students Tutored" },
  { value: "92%", label: "Grade Improvement" },
  { value: "200+", label: "Expert Tutors" },
  { value: "30+", label: "Subjects Covered" },
];

const services = [
  {
    icon: BookOpen,
    title: "Subject-Specific Tutoring",
    desc: "Struggling with a specific module? Our tutors are subject specialists — from engineering mathematics and organic chemistry to corporate finance and constitutional law. We match you with someone who's mastered your exact curriculum.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: ClipboardCheck,
    title: "Assignment & Essay Help",
    desc: "University assignments abroad follow different standards than back home. We teach you proper academic structure, referencing styles (Harvard, APA, MLA), critical analysis techniques, and how to avoid unintentional plagiarism.",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: GraduationCap,
    title: "Exam Preparation",
    desc: "Our exam prep goes beyond revision notes. We provide past paper analysis, timed practice tests, exam technique coaching, and strategic topic prioritization — maximizing your marks in minimum study time.",
    color: "from-violet-500/20 to-violet-600/5",
  },
  {
    icon: Languages,
    title: "IELTS / TOEFL / PTE Prep",
    desc: "Score higher on English proficiency tests with our specialized test prep. Full-length mock tests, speaking practice with real-time feedback, writing corrections, and proven strategies for each section.",
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    icon: Brain,
    title: "Study Skills & Time Management",
    desc: "University abroad is fast-paced. We teach you effective study techniques — spaced repetition, active recall, the Pomodoro method — along with time management frameworks to balance academics, work, and social life.",
    color: "from-rose-500/20 to-rose-600/5",
  },
  {
    icon: Laptop,
    title: "Online & Flexible Sessions",
    desc: "All tutoring sessions are available online via Zoom or Google Meet. Schedule at your convenience — early mornings, late evenings, or weekends. Record sessions to review later. Learn from anywhere.",
    color: "from-cyan-500/20 to-cyan-600/5",
  },
];

const process = [
  {
    step: "01",
    title: "Share Your Academic Needs",
    desc: "Tell us your course, university, specific modules you're struggling with, upcoming exam dates, and your target grades. The more detail, the better we can help.",
    icon: Target,
  },
  {
    step: "02",
    title: "Perfect Tutor Match",
    desc: "We pair you with a tutor who specializes in your exact subject and understands your university's curriculum. Every tutor is vetted with verified qualifications and teaching experience.",
    icon: Users,
  },
  {
    step: "03",
    title: "Personalized Study Plan",
    desc: "Your tutor creates a customized study plan based on your syllabus, weak areas, and exam timeline. No generic templates — every plan is built around your specific needs.",
    icon: ClipboardCheck,
  },
  {
    step: "04",
    title: "Regular Sessions & Practice",
    desc: "Weekly or bi-weekly sessions with homework, practice problems, and mock tests between sessions. Your tutor adjusts the pace and difficulty based on your progress.",
    icon: BookOpen,
  },
  {
    step: "05",
    title: "Progress Tracking & Results",
    desc: "Regular progress reports showing improvement areas. We celebrate your wins and adjust strategy for challenging topics. 92% of our students see measurable grade improvement.",
    icon: BarChart3,
  },
];

const subjects = [
  { category: "Business & Management", items: ["Accounting", "Marketing", "Finance", "Operations", "HRM", "Strategy"] },
  { category: "Engineering & Tech", items: ["Mathematics", "Programming", "Data Science", "Civil Eng.", "Electrical", "Mechanical"] },
  { category: "Sciences", items: ["Physics", "Chemistry", "Biology", "Statistics", "Environmental", "Psychology"] },
  { category: "Humanities & Social", items: ["Economics", "Law", "Sociology", "Political Science", "History", "Literature"] },
];

const testimonials = [
  {
    name: "Shreya Malhotra",
    university: "King's College London, UK",
    text: "I was failing Advanced Statistics in my first semester. My AbroadMantra tutor broke down every concept so simply that I went from a failing grade to a First Class in that module. She literally saved my degree.",
    rating: 5,
  },
  {
    name: "Deepak Sharma",
    university: "University of Waterloo, Canada",
    text: "The IELTS prep was outstanding — I went from 6.0 to 7.5 in just 6 weeks. The mock speaking tests with real-time feedback were the game changer. Highly recommend for anyone who needs a quick score boost.",
    rating: 5,
  },
  {
    name: "Pooja Reddy",
    university: "Monash University, Australia",
    text: "Assignment writing standards in Australia are completely different from India. My tutor taught me proper Harvard referencing, critical analysis, and academic tone. My assignment marks jumped from 55% to 78%.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "How are tutors selected and vetted?",
    a: "Every tutor goes through a rigorous selection process. We verify academic qualifications (minimum Master's degree), check teaching experience (2+ years), conduct sample lesson evaluations, and collect feedback from previous students. Only 15% of applicants make it through.",
  },
  {
    q: "Can I try a session before committing?",
    a: "Yes! Your first 30-minute introductory session is free. This lets you meet your tutor, discuss your needs, and experience our teaching style before making any commitment.",
  },
  {
    q: "What if I don't click with my tutor?",
    a: "No problem at all. We'll match you with a different tutor within 24 hours. Chemistry between student and tutor matters — we want you to feel comfortable asking questions and making mistakes.",
  },
  {
    q: "Do you help with dissertation and thesis work?",
    a: "Yes, we provide dissertation guidance including topic selection, research methodology advice, literature review structure, data analysis support, and writing feedback. Note: we guide and teach — we don't write it for you.",
  },
  {
    q: "How much do tutoring sessions cost?",
    a: "Pricing depends on the subject complexity and tutor's expertise level. We offer individual sessions, weekly packages (10% discount), and semester packages (20% discount). Contact us for a personalized quote.",
  },
  {
    q: "Can I get help with group assignments?",
    a: "Absolutely. We can tutor your entire project group together, helping with task allocation, research strategy, presentation preparation, and ensuring consistent quality across all contributions.",
  },
];

const whyUs = [
  { icon: Award, text: "200+ vetted tutors with verified qualifications" },
  { icon: Target, text: "92% of students show measurable grade improvement" },
  { icon: Globe, text: "Curriculum-specific support for UK, CA, AU & US universities" },
  { icon: Laptop, text: "100% online — learn from anywhere, anytime" },
  { icon: Clock, text: "Flexible scheduling — evenings, weekends, study breaks" },
  { icon: BarChart3, text: "Regular progress tracking and adjustment" },
  { icon: Star, text: "Free first session — try before you commit" },
  { icon: Users, text: "1-on-1 attention, never group-based" },
];

const Tutoring = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Online Tutoring for International Students | Academic Support – AbroadMantra"
        description="Expert 1-on-1 tutoring for international students. Subject help, exam prep, IELTS coaching, assignment guidance. 200+ vetted tutors, 92% grade improvement rate."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="relative h-[340px] md:h-[480px] w-full">
          <img src={heroImg} alt="Tutor helping students in university library" className="w-full h-full object-cover" width={1400} height={800} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 -mt-44 md:-mt-56">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-5">
                <GraduationCap className="h-4 w-4" /> 92% Grade Improvement
              </span>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                Ace Your Studies{" "}
                <span className="text-primary">Abroad</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mt-5 leading-relaxed max-w-2xl">
                Struggling with coursework? Worried about exams? Our expert tutors provide personalized 1-on-1 academic support — from IELTS prep to dissertation guidance — so you don't just survive, you thrive.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:scale-105 hover:shadow-xl transition-all duration-300">
                  Get a Free Trial Session <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="https://wa.me/919274861114" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-foreground rounded-xl font-semibold text-base hover:bg-secondary/80 transition-all">
                  <MessageSquare className="h-5 w-5" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
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
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Students Struggle</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 leading-tight">
                  University Abroad Is{" "}
                  <span className="text-primary">A Different Beast</span>
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mt-5">
                  The academic culture abroad is fundamentally different. Critical thinking over rote learning, independent research over spoon-fed notes, strict plagiarism policies, unfamiliar referencing styles — many brilliant students struggle in their first semester simply because the system is different.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed mt-4">
                  At AbroadMantra, we've tutored <strong className="text-foreground">1,500+ international students</strong> and helped 92% of them achieve measurable grade improvements. Our tutors don't just teach subjects — they teach you how to learn in a Western academic environment.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {["1-on-1 Sessions", "Curriculum Specific", "Flexible Timing"].map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      <CheckCircle className="h-3.5 w-3.5" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={onlineImg} alt="Student learning online with tutor" className="w-full h-auto" loading="lazy" width={1400} height={800} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Tutoring Services</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Academic Support{" "}
                <span className="text-primary">That Works</span>
              </h2>
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

      {/* Subjects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Subject Coverage</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                30+ Subjects{" "}
                <span className="text-primary">Covered</span>
              </h2>
              <p className="text-muted-foreground mt-4">Whatever you're studying, we have a specialist tutor ready to help.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {subjects.map((s, i) => (
              <ScrollReveal key={s.category} delay={i * 0.1} direction="up">
                <div className="glass-card gradient-border rounded-2xl p-6 h-full">
                  <h3 className="font-heading text-base font-bold text-primary mb-4">{s.category}</h3>
                  <div className="space-y-2">
                    {s.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                From Struggling to{" "}
                <span className="text-primary">Excelling</span>
              </h2>
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

      {/* Why Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why AbroadMantra</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                The Tutoring{" "}
                <span className="text-primary">Difference</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {whyUs.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.06} direction="up">
                <div className="glass-card gradient-border rounded-2xl p-5 h-full text-center hover:-translate-y-1 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                  <span className="text-foreground text-sm leading-relaxed">{item.text}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Success Stories</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Students Who{" "}
                <span className="text-primary">Turned It Around</span>
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQs</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Tutoring Questions?{" "}
                <span className="text-primary">We've Got Answers</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.06} direction="up">
                <div className="glass-card gradient-border rounded-2xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
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
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="scale">
            <div className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-blob" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Boost Your Grades?</h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                  Book a free 30-minute trial session. Meet your tutor, discuss your challenges, and experience personalized academic support — no commitment required.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-primary rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                    Book Free Trial <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="https://wa.me/919274861114" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/20">
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

export default Tutoring;
