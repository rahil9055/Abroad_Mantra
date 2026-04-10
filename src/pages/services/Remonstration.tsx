import InquiryForm from "@/components/InquiryForm";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  RotateCcw,
  FileSearch,
  FileText,
  ShieldCheck,
  AlertTriangle,
  Scale,
  Globe,
  MessageSquare,
  Star,
  Clock,
  Sparkles,
  ChevronDown,
  XCircle,
  Eye,
  Gavel,
  Target,
  Award,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/remonstration-hero.png";
import successImg from "@/assets/remonstration-success.jpg";
import { useState } from "react";

const stats = [
  { value: "85%+", label: "Reversal Success Rate" },
  { value: "500+", label: "Refusals Overturned" },
  { value: "15+", label: "Countries Handled" },
  { value: "72hr", label: "Avg. Response Time" },
];

const services = [
  {
    icon: FileSearch,
    title: "Refusal Letter Analysis",
    desc: "We dissect your refusal letter word by word. Embassy decisions follow specific legal frameworks — we identify exactly which criteria weren't met, what evidence was missing, and whether the decision was justified or challengeable.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: Scale,
    title: "Remonstration Letter Drafting",
    desc: "A remonstration is your formal objection to a visa refusal. We draft legally sound, evidence-backed remonstration letters that directly address every refusal ground — structured to maximize your chances of reversal.",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: Gavel,
    title: "Formal Appeal Filing",
    desc: "When remonstration isn't enough, we escalate to formal appeals. We understand the appeal procedures, deadlines, and legal requirements for each country's immigration tribunal or review board.",
    color: "from-violet-500/20 to-violet-600/5",
  },
  {
    icon: RotateCcw,
    title: "Re-Application Strategy",
    desc: "Sometimes a fresh application is smarter than an appeal. We rebuild your entire case from scratch — new SOP, stronger financials, better document presentation — addressing every weakness the embassy flagged.",
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    icon: FileText,
    title: "Document Reconstruction",
    desc: "Incorrect bank statements, poorly written SOPs, missing affidavits — we fix everything. Every document is reviewed, reformatted, and strengthened to meet the specific standards of your destination embassy.",
    color: "from-rose-500/20 to-rose-600/5",
  },
  {
    icon: Eye,
    title: "Risk Assessment & Honest Evaluation",
    desc: "Not every refusal can be overturned. Before you invest more time and money, we give you an honest, data-driven assessment of your chances — along with alternative pathways if the odds aren't in your favor.",
    color: "from-cyan-500/20 to-cyan-600/5",
  },
];

const process = [
  {
    step: "01",
    title: "Send Us Your Refusal",
    desc: "Share your complete refusal letter, original application, supporting documents, and any correspondence with the embassy. The more information, the sharper our analysis.",
    icon: FileSearch,
  },
  {
    step: "02",
    title: "Deep-Dive Analysis",
    desc: "Our specialists analyze every refusal ground against the embassy's published decision criteria. We identify whether the refusal was procedural, evidential, or discretionary — each requires a different response strategy.",
    icon: Eye,
  },
  {
    step: "03",
    title: "Strategy Recommendation",
    desc: "Based on our analysis, we recommend the best path forward: remonstration, formal appeal, fresh application, or alternative destination. You'll receive a detailed report with success probability and timeline.",
    icon: Target,
  },
  {
    step: "04",
    title: "Case Building & Documentation",
    desc: "We draft your remonstration/appeal letter, collect new supporting evidence, fix documentation errors, and build the strongest possible case — leaving no room for a second refusal.",
    icon: Scale,
  },
  {
    step: "05",
    title: "Submission & Follow-Up",
    desc: "We submit your case through the correct channel, track its progress, respond to any embassy queries on your behalf, and keep you updated until we get a final decision.",
    icon: ShieldCheck,
  },
];

const refusalReasons = [
  {
    reason: "Insufficient Financial Proof",
    percentage: "35%",
    desc: "The most common refusal ground. Embassies require clear evidence that you can fund tuition and living costs without working illegally.",
    fix: "We restructure your financial documents — proper bank statements, sponsor letters with affidavits, loan sanction letters, and CA-certified net worth certificates.",
  },
  {
    reason: "Weak Statement of Purpose",
    percentage: "25%",
    desc: "A generic or unconvincing SOP that doesn't explain why this specific course, university, and country — and your plans to return home.",
    fix: "We rewrite your SOP with a compelling narrative: clear academic motivation, logical course selection, career roadmap, and strong ties to your home country.",
  },
  {
    reason: "Immigration Intent Concerns",
    percentage: "20%",
    desc: "The embassy suspects you plan to overstay or work illegally. This is especially common for applicants with weak home country ties.",
    fix: "We build a strong 'return intent' case — family assets, property documents, business interests, and a detailed post-study career plan in your home country.",
  },
  {
    reason: "Document Inconsistencies",
    percentage: "15%",
    desc: "Mismatched dates, unverified documents, formatting errors, or missing attestations that raise credibility concerns.",
    fix: "We audit every document for consistency, get proper attestations, and ensure all dates, names, and figures align perfectly across your entire application.",
  },
];

const countryAppeals = [
  {
    country: "🇬🇧 United Kingdom",
    method: "Administrative Review",
    deadline: "28 days from refusal",
    cost: "£80",
    timeline: "28 working days",
  },
  {
    country: "🇩🇪 Germany",
    method: "Remonstration (Remonstrance)",
    deadline: "1 month from refusal",
    cost: "No fee",
    timeline: "4–12 weeks",
  },
  {
    country: "🇨🇦 Canada",
    method: "Judicial Review / Re-application",
    deadline: "15 days (judicial) / Anytime",
    cost: "CAD $50 (filing)",
    timeline: "Varies",
  },
  {
    country: "🇦🇺 Australia",
    method: "AAT Review / Re-application",
    deadline: "21 days (AAT)",
    cost: "AUD $1,826",
    timeline: "6–12 months (AAT)",
  },
];

const testimonials = [
  {
    name: "Sanjay Kapoor",
    result: "Germany visa reversed after remonstration",
    text: "My German student visa was refused for 'insufficient motivation.' AbroadMantra's remonstration letter was so thorough and well-argued that the embassy reversed the decision in just 5 weeks. I'm now studying in Munich!",
    rating: 5,
  },
  {
    name: "Fatima Khan",
    result: "UK Tier 4 approved on second attempt",
    text: "My UK visa was refused for financial reasons — I had the funds but presented them incorrectly. AbroadMantra restructured my entire financial profile with proper CA certificates and sponsor documentation. Approved in 3 weeks!",
    rating: 5,
  },
  {
    name: "Rohit Menon",
    result: "Canada study permit after initial refusal",
    text: "Canada refused my study permit citing weak ties to India. AbroadMantra helped me rebuild my case with property documents, family business proof, and a completely rewritten SOP. The fresh application was approved without issues.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "What is a remonstration?",
    a: "A remonstration (also called 'Remonstrance' in German immigration law) is a formal written objection to a visa refusal. It's submitted directly to the embassy that refused your visa, presenting new evidence or arguments to challenge their decision. It's different from a formal appeal, which goes to a higher authority or tribunal.",
  },
  {
    q: "How long do I have to file a remonstration or appeal?",
    a: "Deadlines vary by country: Germany allows 1 month, UK gives 28 days for administrative review, Canada's judicial review must be filed within 15 days, and Australia's AAT review has a 21-day deadline. Time is critical — contact us immediately after receiving a refusal.",
  },
  {
    q: "What's the difference between remonstration and re-application?",
    a: "A remonstration challenges the original decision with the same embassy. A re-application is a completely fresh submission. Remonstration is best when the refusal was based on misunderstanding or missing evidence. Re-application is better when your case fundamentally needs strengthening.",
  },
  {
    q: "Can every visa refusal be overturned?",
    a: "No, and any consultant who guarantees 100% reversal is being dishonest. Our 85%+ success rate is strong, but some refusals are based on legitimate concerns that need time to address. We always give you an honest assessment before you invest further.",
  },
  {
    q: "Will a previous visa refusal affect future applications?",
    a: "Yes, most visa applications ask about prior refusals. However, a well-handled refusal can actually strengthen your case — it shows you addressed the concerns and improved your application. We help you turn a refusal into a narrative of resilience.",
  },
  {
    q: "How much does your remonstration service cost?",
    a: "Pricing depends on the complexity of your case, destination country, and whether we're doing a remonstration, appeal, or fresh application. We offer a free initial case evaluation so you understand your options before committing financially.",
  },
];

const whyUs = [
  { icon: Award, text: "85%+ refusal reversal success rate" },
  { icon: Scale, text: "Legally structured remonstration letters" },
  { icon: Globe, text: "Country-specific appeal procedures expertise" },
  { icon: Clock, text: "72-hour initial analysis turnaround" },
  { icon: Eye, text: "Honest assessment — we tell you the truth" },
  { icon: Users, text: "Dedicated case manager for your appeal" },
  { icon: FileText, text: "Complete document reconstruction" },
  { icon: ShieldCheck, text: "No charge if we assess low success chances" },
];

const Remonstration = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Visa Refusal & Remonstration Services | Appeal Experts – AbroadMantra"
        description="Visa refused? Our remonstration specialists have overturned 500+ visa refusals with an 85%+ success rate. Expert refusal analysis, appeal drafting, and re-application strategy for UK, Canada, Australia, Germany & more."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="relative h-[340px] md:h-[480px] w-full">
          <img src={heroImg} alt="Immigration specialist analyzing visa refusal documents" className="w-full h-full object-cover" width={1400} height={800} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 -mt-44 md:-mt-56">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-destructive/10 text-destructive text-sm font-semibold rounded-full mb-5">
                <AlertTriangle className="h-4 w-4" /> Visa Refused? Don't Panic.
              </span>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                We Turn Visa Refusals Into{" "}
                <span className="text-primary">Approvals</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mt-5 leading-relaxed max-w-2xl">
                A visa refusal isn't the end — it's a problem that can be solved. Our remonstration specialists have successfully overturned 500+ refusals across 15 countries with an 85%+ success rate.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Get Free Case Evaluation <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/919274861114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-foreground rounded-xl font-semibold text-base hover:bg-secondary/80 transition-all"
                >
                  <MessageSquare className="h-5 w-5" /> Urgent? WhatsApp Us
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

      {/* Inquiry Form */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <InquiryForm serviceType="remonstration" title="Get Remonstration Support" />
          </ScrollReveal>
        </div>
      </section>

      {/* Intro with Image */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Understanding Visa Refusals</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 leading-tight">
                  A Refusal Doesn't Mean{" "}
                  <span className="text-primary">Your Dream Is Over</span>
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mt-5">
                  Most visa refusals aren't because you're unqualified — they're because your application didn't present your case effectively. Insufficient financial documentation, a weak SOP, inconsistent information, or simply not understanding what the embassy wants to see.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed mt-4">
                  Our team has analyzed over <strong className="text-foreground">500 refusal cases</strong> and we've identified clear patterns in why applications fail. More importantly, we know exactly how to fix them. Whether through remonstration, formal appeal, or strategic re-application — we find the path that works.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {["85%+ Reversal Rate", "15+ Countries", "72hr Analysis"].map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      <CheckCircle className="h-3.5 w-3.5" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={successImg} alt="Visa approval after successful remonstration" className="w-full h-auto" loading="lazy" width={1400} height={800} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Top Refusal Reasons */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Know Your Enemy</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Top Visa Refusal{" "}
                <span className="text-primary">Reasons & Fixes</span>
              </h2>
              <p className="text-muted-foreground mt-4">Understanding why visas get refused is the first step to getting yours approved.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {refusalReasons.map((r, i) => (
              <ScrollReveal key={r.reason} delay={i * 0.1} direction="up">
                <div className="glass-card gradient-border rounded-2xl p-7 h-full group hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <XCircle className="h-5 w-5 text-destructive" />
                      <h3 className="font-heading text-lg font-bold text-foreground">{r.reason}</h3>
                    </div>
                    <span className="text-xs font-bold text-destructive bg-destructive/10 px-2.5 py-1 rounded-full">{r.percentage} of cases</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{r.desc}</p>
                  <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-xl">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm leading-relaxed"><strong>Our fix:</strong> {r.fix}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Complete Refusal{" "}
                <span className="text-primary">Recovery Support</span>
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

      {/* Appeal Procedures by Country */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Country Guide</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Appeal Procedures{" "}
                <span className="text-primary">By Country</span>
              </h2>
              <p className="text-muted-foreground mt-4">Each country has unique appeal mechanisms, deadlines, and costs. Here's what you need to know.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {countryAppeals.map((c, i) => (
              <ScrollReveal key={c.country} delay={i * 0.1} direction="up">
                <div className="glass-card gradient-border rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">{c.country}</h3>
                  <p className="text-primary font-semibold text-sm mb-4">{c.method}</p>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Deadline</span><span className="text-foreground font-medium">{c.deadline}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Filing Cost</span><span className="text-foreground font-medium">{c.cost}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Processing Time</span><span className="text-foreground font-medium">{c.timeline}</span></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                From Refusal to{" "}
                <span className="text-primary">Reversal</span>
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
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 leading-tight">
                  The Remonstration{" "}
                  <span className="text-primary">Specialists</span>
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
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Success Stories</span>
                {testimonials.map((t, i) => (
                  <div key={t.name} className="glass-card gradient-border rounded-2xl p-6">
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed italic mb-4">"{t.text}"</p>
                    <div>
                      <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
                      <p className="text-primary text-xs font-medium">{t.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
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
                Refusal Questions?{" "}
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
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Visa Refused? Let Us Fight For You.</h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                  Send us your refusal letter for a free analysis. Within 72 hours, you'll know exactly where things went wrong and what we can do to fix it.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-primary rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                    Get Free Case Analysis <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="https://wa.me/919274861114" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/20">
                    <MessageSquare className="h-5 w-5" /> WhatsApp Us Now
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

export default Remonstration;
