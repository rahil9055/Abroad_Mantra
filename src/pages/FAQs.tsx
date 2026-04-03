import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const faqCategories = [
  {
    category: "Visa & Applications",
    questions: [
      { q: "What is your visa success rate?", a: "We maintain a 95%+ visa approval rate across all countries. Our experienced team ensures thorough documentation and preparation to maximize your chances of approval." },
      { q: "How long does the visa process take?", a: "Processing times vary by country: UK (3–6 weeks), Canada (4–12 weeks), Australia (4–8 weeks), USA (2–4 weeks after interview). We recommend applying at least 3 months before your intended travel date." },
      { q: "What documents do I need for a student visa?", a: "Typically you need: valid passport, university acceptance letter, financial proof, English proficiency scores (IELTS/TOEFL), SOP, LORs, academic transcripts, and photographs. We provide a country-specific checklist." },
      { q: "Can you help if my visa was refused?", a: "Yes! Our remonstration and appeals team specializes in visa refusal cases. We analyze the refusal reasons, strengthen your documentation, and either file an appeal or prepare a fresh application." },
      { q: "Do you provide visa interview preparation?", a: "Absolutely. We conduct mock visa interviews with real questions commonly asked at embassies, coach you on body language and responses, and provide country-specific interview tips." },
    ],
  },
  {
    category: "Services & Pricing",
    questions: [
      { q: "What are your service charges?", a: "Our pricing is transparent and affordable. We offer free initial consultations. Service packages vary based on the destination and services required. Contact us for a personalized quote — no hidden fees, ever." },
      { q: "Do you offer free consultations?", a: "Yes, your first consultation is completely free. We assess your profile, understand your goals, and recommend the best pathway — all at no cost or obligation." },
      { q: "What services are included in the package?", a: "Our comprehensive package includes: career counseling, university shortlisting, SOP/LOR guidance, application filing, visa assistance, interview prep, and pre-departure briefing. Additional services like accommodation and job support are also available." },
      { q: "Can I choose individual services instead of a full package?", a: "Yes, we offer à la carte services. Whether you need just visa assistance, only SOP writing, or just accommodation support — you can pick what you need." },
    ],
  },
  {
    category: "Countries & Universities",
    questions: [
      { q: "Which countries do you support?", a: "We primarily support UK, Australia, Canada, and USA. We also assist with applications to Germany, New Zealand, Ireland, and other European countries. Contact us for specific destination queries." },
      { q: "How do you select universities for students?", a: "We consider your academic profile, budget, career goals, preferred location, and ranking preferences. Our data-driven approach shortlists 5–8 universities across ambitious, moderate, and safe categories." },
      { q: "Can I work while studying abroad?", a: "Yes! Most countries allow part-time work: UK (20 hrs/week), Canada (20–24 hrs/week), Australia (48 hrs/fortnight), USA (20 hrs/week on-campus). We guide you on work rights for each destination." },
      { q: "What are the post-study work options?", a: "UK offers a 2-year Graduate Route, Canada offers PGWP up to 3 years, Australia offers 2–4 years on a 485 visa, and USA offers OPT (1–3 years for STEM). We help you plan for post-study career opportunities." },
    ],
  },
  {
    category: "Accommodation & Support",
    questions: [
      { q: "Do you help with accommodation?", a: "Yes, we provide accommodation support including private rentals, shared housing, and student halls. We help with shortlisting, virtual tours, lease agreements, and move-in coordination." },
      { q: "Do you offer tutoring services?", a: "Yes, we offer subject-specific tutoring, assignment help, exam preparation, and language support (IELTS/TOEFL prep). Both online and in-person sessions are available." },
      { q: "What support do you provide after arrival?", a: "Our support doesn't stop at the airport. We assist with bank account setup, SIM cards, local orientation, transport guidance, and ongoing academic and career support throughout your stay." },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.questions.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    }))
  ),
};

const FAQs = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");

  const toggle = (key: string) => setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));

  const filteredCategories = faqCategories.map((cat) => ({
    ...cat,
    questions: cat.questions.filter(
      (faq) =>
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((cat) => cat.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="FAQs – AbroadMantra | Study Abroad Questions Answered"
        description="Find answers to frequently asked questions about studying abroad, visa applications, service charges, university selection, and post-study work options."
        jsonLd={faqJsonLd}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative hero-gradient pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-primary/8 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-accent/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQs</span>
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mt-3 leading-tight">
                Frequently Asked <span className="text-primary">Questions</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-5 leading-relaxed">
                Everything you need to know about studying abroad with AbroadMantra.
              </p>
              {/* Search */}
              <div className="mt-8 max-w-md mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Accordions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          {filteredCategories.length === 0 && (
            <p className="text-center text-muted-foreground text-lg">No questions match your search. Try different keywords.</p>
          )}
          {filteredCategories.map((cat, ci) => (
            <ScrollReveal key={cat.category} delay={ci * 0.1}>
              <div className="mb-10">
                <h2 className="font-heading text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-primary rounded-full" />
                  {cat.category}
                </h2>
                <div className="space-y-3">
                  {cat.questions.map((faq, fi) => {
                    const key = `${ci}-${fi}`;
                    const isOpen = openItems[key];
                    return (
                      <div
                        key={key}
                        className="glass-card gradient-border rounded-xl overflow-hidden transition-all duration-300"
                      >
                        <button
                          onClick={() => toggle(key)}
                          className="w-full flex items-center justify-between p-5 text-left group"
                          aria-expanded={isOpen}
                        >
                          <span className="font-medium text-foreground pr-4 text-sm md:text-base">{faq.q}</span>
                          <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}>
                          <p className="px-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="scale">
            <div className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-blob" />
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Still Have Questions?</h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">Our experts are ready to answer all your queries. Get in touch today.</p>
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-primary rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                  Contact Us <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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

export default FAQs;
