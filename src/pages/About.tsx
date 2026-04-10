import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  Users,
  GraduationCap,
  Globe,
  Award,
  Heart,
  CheckCircle,
  MessageSquare,
  Star,
  Shield,
  Lightbulb,
  Handshake,
  Clock,
  TrendingUp,
  BookOpen,
  Briefcase,
  Home,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/about-hero.jpg";
import studentsImg from "@/assets/about-students.jpg";

const stats = [
  { value: "5,000+", label: "Students Guided", icon: GraduationCap },
  { value: "95%", label: "Visa Success Rate", icon: Shield },
  { value: "200+", label: "Partner Universities", icon: BookOpen },
  { value: "15+", label: "Countries Covered", icon: Globe },
  { value: "500+", label: "Employer Partners", icon: Briefcase },
  { value: "4,000+", label: "Students Housed", icon: Home },
];

const values = [
  {
    icon: Heart,
    title: "Student First, Always",
    desc: "Every recommendation we make is driven by what's best for you — not commissions, not partnerships, not profit margins. Your success is our only metric.",
    color: "from-rose-500/20 to-rose-600/5",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    desc: "No hidden fees, no fake success stories, no inflated numbers. We share real data, honest assessments, and clear pricing — even when the truth is uncomfortable.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: Lightbulb,
    title: "Personalized Intelligence",
    desc: "No two students are the same. We use data-driven analysis of your profile, goals, and circumstances to create strategies as unique as you are.",
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    icon: Handshake,
    title: "End-to-End Commitment",
    desc: "We don't disappear after your visa is approved. From your first call to your first day abroad — and beyond — we're with you every step of the way.",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
];

const milestones = [
  { year: "2018", title: "The Beginning", desc: "AbroadMantra was founded with a simple belief: every student deserves honest, accessible guidance to study abroad. We started with 3 team members and a lot of passion." },
  { year: "2019", title: "First 500 Students", desc: "Within a year, word-of-mouth and genuine results drove 500 students to our doors. Our visa success rate hit 90% — and we were just getting started." },
  { year: "2020", title: "Going Digital", desc: "When the world went remote, so did we. We built a fully digital consultation system — video calls, digital document management, and virtual campus tours." },
  { year: "2021", title: "15+ Countries", desc: "Expanded our expertise beyond UK and Canada to cover Australia, USA, Germany, Ireland, and 10+ more destinations. Added country-specific specialists to our team." },
  { year: "2023", title: "Full-Service Platform", desc: "Launched accommodation support, career placement, tutoring, and remonstration services. Became a true one-stop platform for international students." },
  { year: "2024", title: "5,000+ Success Stories", desc: "Crossed the milestone of 5,000 students successfully guided. Grew our team to 20+ specialists and partnered with 200+ universities worldwide." },
];

const services = [
  { icon: BookOpen, title: "Free Consultation", path: "/services/consultation" },
  { icon: Shield, title: "Visa Assistance", path: "/services/visa" },
  { icon: Briefcase, title: "Job Support", path: "/services/jobs" },
  { icon: Home, title: "Accommodation", path: "/services/accommodation" },
  { icon: GraduationCap, title: "Tutoring", path: "/services/tutoring" },
  { icon: TrendingUp, title: "Remonstration", path: "/services/remonstration" },
];

const team = [
  { name: "Rahul Sharma", role: "Founder & CEO", desc: "10+ years in international education. Studied in the UK himself. Passionate about making study abroad accessible to every Indian student.", initials: "RS" },
  { name: "Priya Patel", role: "Head of Visa Services", desc: "Former embassy consultant. Expert in UK, Canada & Australia visa processes. Has personally handled 1,500+ visa applications.", initials: "PP" },
  { name: "Amit Kumar", role: "Senior Career Counselor", desc: "MBA from University of Toronto. Helps students find the perfect course, university, and career path based on data-driven analysis.", initials: "AK" },
  { name: "Sneha Reddy", role: "Student Experience Lead", desc: "Ensures every student has seamless accommodation, settling-in support, and ongoing assistance throughout their time abroad.", initials: "SR" },
];

const testimonials = [
  {
    name: "Ananya Sharma",
    university: "University of Oxford, UK",
    text: "AbroadMantra didn't just help me apply — they helped me believe I belonged at Oxford. Their SOP guidance was incredible. I got in with a full scholarship!",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    university: "University of Toronto, Canada",
    text: "I was confused between 6 countries. My counselor patiently compared every option with actual data. Best decision I ever made was booking that free call.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    university: "University of Melbourne, Australia",
    text: "The financial planning they did saved me ₹4 lakhs in unnecessary costs. They found scholarships I didn't even know existed. Truly life-changing.",
    rating: 5,
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About AbroadMantra – 5,000+ Students Guided | Trusted Study Abroad Experts"
        description="Learn about AbroadMantra's mission, team, and journey helping 5,000+ students study abroad in UK, Canada, Australia & USA with a 95% visa success rate."
      />
      <Navbar />

      {/* Hero with Image */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="relative h-[340px] md:h-[480px] w-full">
          <img src={heroImg} alt="AbroadMantra team collaborating in office" className="w-full h-full object-cover" width={1400} height={800} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 -mt-44 md:-mt-56">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-5">
                <Heart className="h-4 w-4" /> Since 2018
              </span>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                We Don't Just Send Students Abroad —{" "}
                <span className="text-primary">We Transform Futures</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mt-5 leading-relaxed max-w-2xl">
                AbroadMantra was built on a simple belief: every student deserves honest, personalized, and affordable guidance to achieve their dream of studying abroad. No commissions. No bias. Just your success.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08}>
                <div className="text-center p-5 rounded-2xl bg-secondary/50 border border-border">
                  <s.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <div className="font-heading text-2xl md:text-3xl font-extrabold text-primary">{s.value}</div>
                  <p className="text-muted-foreground text-xs mt-1 font-medium">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story with Image */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 leading-tight">
                  Born From a Student's{" "}
                  <span className="text-primary">Frustration</span>
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mt-5">
                  In 2018, our founder Rahul Sharma watched a close friend's study abroad dream shatter — not because she wasn't qualified, but because her consultant gave her generic, commission-driven advice that led to a visa refusal. The right guidance could have changed everything.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed mt-4">
                  That frustration became AbroadMantra's founding principle: <strong className="text-foreground">every student deserves honest, personalized guidance — regardless of their budget</strong>. We started with 3 people in a small office. Today, we're a team of 20+ specialists who've guided over 5,000 students to universities in 15+ countries.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed mt-4">
                  We've never taken commissions from universities. We've never pushed a student toward a destination that wasn't right for them. And we never will. That's the AbroadMantra promise.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={studentsImg} alt="Students celebrating graduation abroad" className="w-full h-auto" loading="lazy" width={1400} height={800} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-heading text-xl font-bold">5,000+ Dreams Realized</p>
                  <p className="text-white/80 text-sm mt-1">And counting. Every number is a real student with a real story.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal direction="left">
              <div className="glass-card gradient-border rounded-2xl p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 flex items-center justify-center mb-5">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  To democratize international education by providing transparent, affordable, and personalized consulting that puts students' interests above everything else. We believe geography should never limit potential.
                </p>
                <ul className="space-y-3">
                  {[
                    "Transparent & honest guidance — no commission-driven advice",
                    "Affordable for every student — flexible pricing, free first consultation",
                    "End-to-end support — from university selection to settling abroad",
                    "Data-driven decisions — not gut feelings or generic templates",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="glass-card gradient-border rounded-2xl p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 flex items-center justify-center mb-5">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  To become India's most trusted study abroad platform — recognized not for the number of students we process, but for the quality of outcomes we deliver and the lives we transform.
                </p>
                <ul className="space-y-3">
                  {[
                    "Be the most recommended consultancy by students themselves",
                    "Expand to 25+ destination countries by 2026",
                    "Build a 10,000+ strong global alumni network",
                    "Set the industry standard for ethical, student-first consulting",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Values That{" "}
                <span className="text-primary">Define Us</span>
              </h2>
              <p className="text-muted-foreground mt-4">These aren't wall posters — they're the principles behind every decision we make.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1} direction="up">
                <div className="glass-card gradient-border rounded-2xl p-7 h-full group hover:-translate-y-2 transition-all duration-500">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                    <v.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3 tracking-tight">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Journey</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                From 3 People to{" "}
                <span className="text-primary">5,000+ Stories</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <ScrollReveal key={m.year} delay={i * 0.1} direction="left">
                  <div className="flex items-start gap-5 md:gap-7 group">
                    <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                      <span className="text-primary-foreground font-heading font-bold text-sm md:text-base">{m.year}</span>
                    </div>
                    <div className="glass-card gradient-border rounded-2xl p-6 flex-1 group-hover:-translate-y-1 transition-all duration-300">
                      <h3 className="font-heading text-lg font-bold text-foreground tracking-tight mb-2">{m.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Team</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Real People Who{" "}
                <span className="text-primary">Genuinely Care</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                We're not a faceless corporation. We're a team of education enthusiasts who've either studied abroad ourselves or spent years helping students do so.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1} direction="up">
                <div className="glass-card gradient-border rounded-2xl p-7 text-center group hover:-translate-y-2 transition-all duration-500">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-5 text-primary font-heading font-bold text-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    {member.initials}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{member.name}</h3>
                  <span className="text-primary text-sm font-semibold">{member.role}</span>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{member.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do — Services Overview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                A Complete Support{" "}
                <span className="text-primary">Ecosystem</span>
              </h2>
              <p className="text-muted-foreground mt-4">We don't just help you get admitted — we support your entire journey from dream to destination.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08} direction="up">
                <Link to={s.path} className="glass-card gradient-border rounded-2xl p-5 text-center group hover:-translate-y-2 transition-all duration-500 block h-full">
                  <s.icon className="h-7 w-7 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground text-sm font-semibold">{s.title}</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Student Voices</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Don't Take Our Word —{" "}
                <span className="text-primary">Take Theirs</span>
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

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="scale">
            <div className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-blob" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                  Join 5,000+ students who trusted AbroadMantra with their study abroad journey. Your free consultation is just one click away.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-primary rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    Book Free Consultation <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="https://wa.me/19274861114"
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

export default About;
