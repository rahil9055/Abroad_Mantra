import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Home,
  MapPin,
  Wallet,
  Users,
  ShieldCheck,
  Search,
  Globe,
  MessageSquare,
  Star,
  Clock,
  Sparkles,
  ChevronDown,
  Building,
  Bed,
  Wifi,
  DollarSign,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/accommodation-hero.jpg";
import livingImg from "@/assets/accommodation-living.jpg";
import { useState } from "react";

const stats = [
  { value: "4,000+", label: "Students Housed" },
  { value: "100%", label: "Verified Listings" },
  { value: "50+", label: "Cities Covered" },
  { value: "48hr", label: "Avg. Booking Time" },
];

const services = [
  {
    icon: Building,
    title: "University Halls",
    desc: "We help you secure university-managed accommodation — the safest and most social option for first-year students. We handle applications, deadlines, and room preference selection on your behalf.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: Home,
    title: "Private Apartments & Studios",
    desc: "For students who prefer independence, we source verified private rentals near campus. Every listing is checked for safety, fair pricing, and proximity to public transport and amenities.",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: Users,
    title: "Shared Housing & Flatmates",
    desc: "Save on rent by sharing with compatible roommates. We match you based on lifestyle, study habits, dietary preferences, and nationality — so you find people you actually get along with.",
    color: "from-violet-500/20 to-violet-600/5",
  },
  {
    icon: MapPin,
    title: "Neighborhood Guidance",
    desc: "Not all areas are equal. We provide detailed neighborhood reports covering safety ratings, transport links, supermarket proximity, nightlife, and average rental prices to help you choose wisely.",
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    icon: Wallet,
    title: "Budget & Cost Planning",
    desc: "Know exactly what you'll spend before you land. We provide city-specific cost breakdowns — rent, utilities, internet, groceries, transport — so there are no financial surprises.",
    color: "from-rose-500/20 to-rose-600/5",
  },
  {
    icon: Search,
    title: "Virtual Tours & Remote Booking",
    desc: "Can't visit in person? We arrange virtual property tours, share detailed photo galleries, and handle the entire booking process remotely — so your home is ready before you land.",
    color: "from-cyan-500/20 to-cyan-600/5",
  },
];

const process = [
  {
    step: "01",
    title: "Tell Us Your Preferences",
    desc: "Share your budget, preferred city area, accommodation type (halls, private, shared), move-in date, and any special requirements like pet-friendly or vegetarian kitchen.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Curated Shortlist",
    desc: "Within 48 hours, receive a handpicked list of 5–8 verified options matching your criteria. Each listing includes photos, floor plans, neighborhood details, and honest pros/cons.",
    icon: Search,
  },
  {
    step: "03",
    title: "Virtual Tour & Selection",
    desc: "Take virtual tours of your top picks. Our team answers every question — from lease terms to deposit amounts — and helps you make a confident decision without stepping foot in the country.",
    icon: Home,
  },
  {
    step: "04",
    title: "Booking & Lease Support",
    desc: "We assist with deposit payments, lease agreement review, and all administrative paperwork. You receive confirmation and move-in instructions well before your arrival.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Move-In & Settling Support",
    desc: "On arrival, we coordinate your move-in, provide local orientation (nearest grocery store, transport, SIM cards), and remain available for any housing issues during your first month.",
    icon: MapPin,
  },
];

const costGuide = [
  {
    city: "🇬🇧 London",
    halls: "£180–£300/week",
    private: "£800–£1,500/month",
    shared: "£500–£900/month",
    utilities: "£80–£120/month",
  },
  {
    city: "🇨🇦 Toronto",
    halls: "CAD $900–$1,400/month",
    private: "CAD $1,200–$2,000/month",
    shared: "CAD $600–$1,000/month",
    utilities: "CAD $100–$150/month",
  },
  {
    city: "🇦🇺 Sydney",
    halls: "AUD $250–$450/week",
    private: "AUD $1,400–$2,500/month",
    shared: "AUD $700–$1,200/month",
    utilities: "AUD $80–$130/month",
  },
  {
    city: "🇺🇸 New York",
    halls: "USD $1,000–$1,800/month",
    private: "USD $1,500–$3,000/month",
    shared: "USD $800–$1,400/month",
    utilities: "USD $100–$180/month",
  },
];

const testimonials = [
  {
    name: "Nisha Gupta",
    location: "Studying in London, UK",
    text: "I was so stressed about finding a place in London from India. AbroadMantra found me a lovely studio 10 minutes from my university, handled all the paperwork, and even coordinated my move-in. I landed and walked straight into my new home!",
    rating: 5,
  },
  {
    name: "Karthik Rajan",
    location: "Studying in Melbourne, Australia",
    text: "The shared housing matching was perfect — they paired me with two flatmates who had similar schedules and food preferences. The neighborhood guide they gave me was incredibly detailed. Best accommodation experience possible.",
    rating: 5,
  },
  {
    name: "Anjali Desai",
    location: "Studying in Toronto, Canada",
    text: "I saved over CAD $3,000 by following their budget plan and choosing the neighborhood they recommended. The virtual tour saved me from a scam listing I'd almost booked independently. Worth every penny!",
    rating: 5,
  },
];

const faqs = [
  {
    q: "How far in advance should I book accommodation?",
    a: "We recommend starting 3–4 months before your course begins. University halls fill up fast — some as early as 6 months prior. Private rentals typically have more flexibility, but popular areas near campus get booked quickly during peak intake months (September/January).",
  },
  {
    q: "Are all your listings verified?",
    a: "100%. Every listing we recommend is verified by our team or trusted local partners. We check landlord credentials, property condition, safety features, lease terms, and fair market pricing. We've helped 4,000+ students — not a single scam incident.",
  },
  {
    q: "Can you help if I need to change accommodation later?",
    a: "Absolutely. If your initial accommodation isn't working out — whether it's a noisy area, unfriendly flatmates, or a long commute — we provide emergency re-housing assistance at no extra cost within the first month.",
  },
  {
    q: "Do you help with lease agreements?",
    a: "Yes. International lease agreements can be confusing, especially with different tenancy laws in each country. We review every clause, explain your rights and obligations, and ensure you're not signing anything unfair.",
  },
  {
    q: "What if I arrive and the accommodation isn't as described?",
    a: "This is exactly why we verify every listing. In the rare case something isn't as expected, our local contacts will arrange temporary accommodation immediately while we resolve the issue or find you an alternative.",
  },
  {
    q: "How much does your accommodation service cost?",
    a: "Our basic accommodation guidance is included in our standard consultation package. Premium services (dedicated shortlisting, virtual tours, lease review, move-in coordination) are available as an add-on. Contact us for transparent pricing.",
  },
];

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Bed, label: "Furnished Rooms" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: MapPin, label: "Near Campus" },
  { icon: DollarSign, label: "Bills Included" },
  { icon: Users, label: "Community Spaces" },
];

const Accommodation = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Student Accommodation Abroad | Verified Housing – AbroadMantra"
        description="Find safe, verified student accommodation in UK, Canada, Australia & USA. University halls, private apartments, shared housing — all pre-verified with virtual tours and move-in support."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="relative h-[340px] md:h-[480px] w-full">
          <img src={heroImg} alt="Modern student apartment" className="w-full h-full object-cover" width={1400} height={800} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 -mt-44 md:-mt-56">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-5">
                <ShieldCheck className="h-4 w-4" /> 100% Verified Listings
              </span>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                Your Home Away{" "}
                <span className="text-primary">From Home</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mt-5 leading-relaxed max-w-2xl">
                Don't leave your housing to chance. We find safe, affordable, and verified accommodation near your university — so you can walk into a ready-made home the day you land.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:scale-105 hover:shadow-xl transition-all duration-300">
                  Find Your Accommodation <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-foreground rounded-xl font-semibold text-base hover:bg-secondary/80 transition-all">
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

      {/* Amenities Strip */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {amenities.map((a, i) => (
              <ScrollReveal key={a.label} delay={i * 0.06} direction="up">
                <div className="text-center p-4 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <a.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <span className="text-foreground text-xs font-medium">{a.label}</span>
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
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Housing Help Matters</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 leading-tight">
                  Finding a Home Abroad{" "}
                  <span className="text-primary">Shouldn't Be Stressful</span>
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mt-5">
                  Every year, thousands of students fall victim to rental scams, overpriced sublets, and misleading property listings. Booking accommodation from another country is risky without local knowledge — and one bad experience can ruin your entire first semester.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed mt-4">
                  AbroadMantra has helped <strong className="text-foreground">4,000+ students</strong> find verified, safe, and affordable housing in 50+ cities worldwide. We do the research, verify the landlords, review the leases, and coordinate your move-in — so you can focus on your studies.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {["Zero Scam Record", "Virtual Tours", "Move-In Coordination"].map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      <CheckCircle className="h-3.5 w-3.5" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={livingImg} alt="Students socializing in shared accommodation" className="w-full h-auto" loading="lazy" width={1400} height={800} />
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
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Housing Options</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Every Type of Home,{" "}
                <span className="text-primary">Every Budget</span>
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

      {/* Cost Guide */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Cost Guide</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Accommodation Costs{" "}
                <span className="text-primary">By City</span>
              </h2>
              <p className="text-muted-foreground mt-4">Real pricing data so you can budget accurately before you leave.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {costGuide.map((c, i) => (
              <ScrollReveal key={c.city} delay={i * 0.1} direction="up">
                <div className="glass-card gradient-border rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">{c.city}</h3>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">University Halls</span><span className="text-foreground font-medium">{c.halls}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Private Rental</span><span className="text-foreground font-medium">{c.private}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Shared Housing</span><span className="text-foreground font-medium">{c.shared}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Utilities</span><span className="text-foreground font-medium">{c.utilities}</span></div>
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
                From Search to{" "}
                <span className="text-primary">Move-In</span>
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

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Student Stories</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Happy Students,{" "}
                <span className="text-primary">Happy Homes</span>
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
                    <p className="text-primary text-xs font-medium">{t.location}</p>
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
                Housing Questions?{" "}
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="scale">
            <div className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-blob" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Secure Your Home Before You Fly</h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                  Don't arrive homeless. Let us find, verify, and book your perfect accommodation — so you walk off the plane and straight into your new home.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-primary rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                    Find Accommodation <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/20">
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

export default Accommodation;
