import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Briefcase,
  FileText,
  Users,
  Search,
  TrendingUp,
  Award,
  Globe,
  MessageSquare,
  Star,
  Clock,
  Sparkles,
  ChevronDown,
  Laptop,
  Building2,
  GraduationCap,
  DollarSign,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/jobs-hero.jpg";
import interviewImg from "@/assets/jobs-interview.jpg";
import InquiryForm from "@/components/InquiryForm";
import { useState } from "react";

const stats = [
  { value: "2,000+", label: "Students Placed" },
  { value: "85%", label: "Placement Rate" },
  { value: "500+", label: "Employer Partners" },
  { value: "12+", label: "Countries" },
];

const services = [
  {
    icon: Search,
    title: "Part-Time Job Search",
    desc: "We help you find on-campus and off-campus part-time roles that fit your class schedule. From retail and hospitality to campus admin and library jobs — we match you with verified opportunities.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: Briefcase,
    title: "Post-Graduation Placement",
    desc: "Leverage your degree with our career placement support. We connect you with employers actively hiring international graduates through our network of 500+ partner companies across industries.",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: FileText,
    title: "CV & Resume Building",
    desc: "Your Indian CV won't work abroad. We create country-specific, ATS-optimized resumes with the right format, keywords, and structure that international recruiters expect to see.",
    color: "from-violet-500/20 to-violet-600/5",
  },
  {
    icon: Users,
    title: "Interview Preparation",
    desc: "From behavioral questions to technical rounds — our mock interviews simulate real hiring processes. We cover STAR method responses, salary negotiation, and cultural communication differences.",
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    icon: Laptop,
    title: "LinkedIn & Online Presence",
    desc: "We optimize your LinkedIn profile with the right headline, summary, and skills. We teach you networking strategies that actually work — cold outreach, recruiter engagement, and content posting.",
    color: "from-rose-500/20 to-rose-600/5",
  },
  {
    icon: TrendingUp,
    title: "Career Path Strategy",
    desc: "Not sure which career to pursue? We analyze job market trends, salary data, and growth projections in your destination country to help you choose a career path with strong ROI.",
    color: "from-cyan-500/20 to-cyan-600/5",
  },
];

const process = [
  {
    step: "01",
    title: "Career Discovery Session",
    desc: "A deep dive into your skills, interests, academic background, and career aspirations. We identify the types of roles and industries that are the best fit for your profile.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "CV & Profile Makeover",
    desc: "We rebuild your CV from scratch using international standards, optimize your LinkedIn, and create a portfolio if needed. Every document is tailored to your target country's job market.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Job Matching & Applications",
    desc: "Using our employer network and job boards, we shortlist relevant openings and help you apply with personalized cover letters. We track every application and follow up on your behalf.",
    icon: Search,
  },
  {
    step: "04",
    title: "Interview Coaching & Placement",
    desc: "Intensive mock interviews, feedback sessions, and negotiation coaching. Once you receive an offer, we help you evaluate it, negotiate terms, and handle work permit requirements.",
    icon: Award,
  },
];

const jobTypes = [
  {
    country: "🇬🇧 United Kingdom",
    partTime: "20 hrs/week during term",
    avgWage: "£10–£12/hr",
    postStudy: "Graduate Route (2 years)",
    topSectors: "Finance, Healthcare, Tech",
  },
  {
    country: "🇨🇦 Canada",
    partTime: "20 hrs/week off-campus",
    avgWage: "CAD $15–$18/hr",
    postStudy: "PGWP (up to 3 years)",
    topSectors: "IT, Engineering, Healthcare",
  },
  {
    country: "🇦🇺 Australia",
    partTime: "48 hrs/fortnight",
    avgWage: "AUD $23–$28/hr",
    postStudy: "Subclass 485 (2–4 years)",
    topSectors: "Mining, Healthcare, Tech",
  },
  {
    country: "🇺🇸 United States",
    partTime: "20 hrs/week on-campus",
    avgWage: "USD $12–$18/hr",
    postStudy: "OPT (1–3 years)",
    topSectors: "Tech, Finance, Consulting",
  },
];

const testimonials = [
  {
    name: "Vikram Joshi",
    role: "Software Engineer at Deloitte, UK",
    text: "AbroadMantra rebuilt my CV, coached me through 4 mock interviews, and connected me with their employer network. I landed a graduate role at Deloitte within 2 months of completing my MSc.",
    rating: 5,
  },
  {
    name: "Meera Iyer",
    role: "Marketing Analyst at Shopify, Canada",
    text: "I was struggling to get callbacks with my Indian-format CV. After their LinkedIn optimization and resume makeover, I started getting interview calls within 2 weeks. The career coaching was invaluable.",
    rating: 5,
  },
  {
    name: "Aditya Singh",
    role: "Data Analyst, Melbourne",
    text: "The part-time job support was amazing — they helped me find a campus job that paid well and fit my schedule. After graduation, they helped me transition to a full-time analytics role.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Can international students work while studying?",
    a: "Yes! Most countries allow international students to work part-time during term (typically 20 hours/week) and full-time during breaks. Work rights vary by country — UK allows 20 hrs/week, Australia allows 48 hrs/fortnight, Canada allows 20 hrs/week off-campus, and the US restricts to on-campus work only during the first year.",
  },
  {
    q: "Do you guarantee job placement?",
    a: "While we can't guarantee specific outcomes (no ethical service can), our 85% placement rate speaks for itself. We provide the tools, connections, and coaching — your effort combined with our expertise creates the results.",
  },
  {
    q: "How soon should I start preparing for jobs?",
    a: "Ideally, start 6 months before graduation. Building your CV, LinkedIn, and networking takes time. For part-time jobs, we recommend starting your search 2–3 weeks after arriving, once you've settled into your class schedule.",
  },
  {
    q: "Do you help with work visa and permit regulations?",
    a: "Absolutely. We guide you through post-study work visa applications (UK Graduate Route, Canada PGWP, Australia 485, USA OPT) and help you understand employer sponsorship requirements for long-term work visas.",
  },
  {
    q: "What industries do you have employer connections in?",
    a: "Our 500+ employer partners span tech, finance, healthcare, consulting, engineering, marketing, hospitality, and retail. We continuously expand our network based on where our students are studying and what they're studying.",
  },
  {
    q: "Is this service free?",
    a: "Our basic career guidance is included with our consultation packages. Dedicated placement support with CV building, mock interviews, and employer matching is available as a premium add-on. Contact us for pricing details.",
  },
];

const whyUs = [
  { icon: Building2, text: "500+ employer partners across 12 countries" },
  { icon: Award, text: "85% placement rate for post-graduation careers" },
  { icon: FileText, text: "ATS-optimized, country-specific CV building" },
  { icon: Globe, text: "Work permit & visa guidance included" },
  { icon: DollarSign, text: "Salary negotiation coaching" },
  { icon: Users, text: "Real mock interviews with industry-relevant scenarios" },
  { icon: GraduationCap, text: "Part-time job support from day one abroad" },
  { icon: Clock, text: "Ongoing career support even after placement" },
];

const Jobs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Job Assistance for International Students | Career Support – AbroadMantra"
        description="Part-time jobs, post-graduation placements, CV building, and interview coaching for international students in UK, Canada, Australia & USA. 85% placement rate with 500+ employer partners."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="relative h-[340px] md:h-[480px] w-full">
          <img src={heroImg} alt="International student working in modern office" className="w-full h-full object-cover" width={1400} height={800} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 -mt-44 md:-mt-56">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-5">
                <Briefcase className="h-4 w-4" /> 500+ Employer Partners
              </span>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                Launch Your Career{" "}
                <span className="text-primary">Abroad</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mt-5 leading-relaxed max-w-2xl">
                From part-time campus gigs to full-time dream jobs — we connect international students with real opportunities, build killer CVs, and coach you through interviews that land offers.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Get Career Support <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/919274861114"
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
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Career Support Matters</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 leading-tight">
                  A Degree Alone Won't Get You{" "}
                  <span className="text-primary">Hired Abroad</span>
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mt-5">
                  The international job market works differently. Your Indian CV format, your interviewing style, your networking approach — they all need to be adapted. Employers in the UK, Canada, and Australia expect ATS-friendly resumes, LinkedIn-first outreach, and a completely different interview dynamic.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed mt-4">
                  At AbroadMantra, we've helped <strong className="text-foreground">2,000+ students</strong> successfully navigate international job markets. We don't just give advice — we rebuild your professional identity for global competitiveness.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {["ATS-Optimized CVs", "Mock Interviews", "Employer Network"].map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      <CheckCircle className="h-3.5 w-3.5" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={interviewImg} alt="Professional job interview" className="w-full h-auto" loading="lazy" width={1400} height={800} />
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
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Job Services</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Everything You Need to{" "}
                <span className="text-primary">Get Hired</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                From your first part-time shift to your dream graduate role — we've got every step covered.
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

      {/* Work Rights by Country */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Country Comparison</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Work Rights{" "}
                <span className="text-primary">At a Glance</span>
              </h2>
              <p className="text-muted-foreground mt-4">Know what you can earn and how long you can work in each country.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {jobTypes.map((j, i) => (
              <ScrollReveal key={j.country} delay={i * 0.1} direction="up">
                <div className="glass-card gradient-border rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">{j.country}</h3>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Part-Time</span><span className="text-foreground font-medium">{j.partTime}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Avg. Wage</span><span className="text-foreground font-medium">{j.avgWage}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Post-Study Work</span><span className="text-foreground font-medium">{j.postStudy}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Top Sectors</span><span className="text-foreground font-medium">{j.topSectors}</span></div>
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
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                From Student to{" "}
                <span className="text-primary">Professional</span>
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

      {/* Why Us + Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why AbroadMantra</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                The Career{" "}
                <span className="text-primary">Advantage</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
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
                <span className="text-primary">Got Hired</span>
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
                    <p className="text-primary text-xs font-medium">{t.role}</p>
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
                Job Questions?{" "}
                <span className="text-primary">Answered</span>
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

      {/* Inquiry Form */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <InquiryForm serviceType="jobs" title="Get Job Support" />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;
