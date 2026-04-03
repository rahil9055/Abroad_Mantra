import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  { q: "What is your visa success rate?", a: "We maintain a 95%+ visa approval rate across all countries. Our experienced team ensures thorough documentation and preparation to maximize your chances of approval." },
  { q: "How long does the visa process take?", a: "Processing times vary by country: UK (3–6 weeks), Canada (4–12 weeks), Australia (4–8 weeks), USA (2–4 weeks after interview). We recommend applying at least 3 months before your intended travel date." },
  { q: "Do you offer free consultations?", a: "Yes, your first consultation is completely free. We assess your profile, understand your goals, and recommend the best pathway — all at no cost or obligation." },
  { q: "Which countries do you support?", a: "We primarily support UK, Australia, Canada, and USA. We also assist with applications to Germany, New Zealand, Ireland, and other European countries." },
  { q: "Can I work while studying abroad?", a: "Yes! Most countries allow part-time work: UK (20 hrs/week), Canada (20–24 hrs/week), Australia (48 hrs/fortnight), USA (20 hrs/week on-campus)." },
  { q: "Can you help if my visa was refused?", a: "Yes! Our remonstration and appeals team specializes in visa refusal cases. We analyze the refusal reasons, strengthen your documentation, and prepare a fresh application." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQs</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/20">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-foreground pr-4 text-sm md:text-base">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}>
                    <p className="px-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
