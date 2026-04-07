import { GraduationCap, Clock, Briefcase, Home } from "lucide-react";
import CountryPageLayout from "@/components/CountryPageLayout";
import heroImg from "@/assets/countries/canada-hero.jpg";

const Canada = () => (
  <CountryPageLayout
    name="Canada"
    flag="🇨🇦"
    heroImage={heroImg}
    tagline="Affordable education, immigration-friendly policies, and a welcoming multicultural society make Canada a top choice."
    description="Canada is one of the most popular destinations for international students thanks to its affordable tuition, high-quality education, and generous immigration policies. With a Post-Graduation Work Permit (PGWP) of up to 3 years and clear PR pathways through Express Entry, Canada offers both world-class education and a future. Over 800,000 international students currently study in Canada, drawn by its safety, diversity, and opportunity."
    whyStudy={[
      "Affordable tuition compared to the US and UK — quality education at 30–50% lower cost.",
      "Post-Graduation Work Permit (PGWP) of up to 3 years — one of the most generous globally.",
      "Direct pathway to Permanent Residency through Express Entry, Canadian Experience Class, and Provincial Nominee Programs.",
      "Safe, multicultural, and welcoming society — consistently ranked among the world's most livable countries.",
      "Part-time work rights of 20+ hours/week during term (recently expanded to 24 hrs) and full-time during breaks.",
      "Bilingual advantage — study in English or French and gain a competitive edge in the global job market.",
    ]}
    stats={[
      { icon: GraduationCap, label: "Top Universities", value: "100+" },
      { icon: Clock, label: "Degree Duration", value: "2–4 Years" },
      { icon: Briefcase, label: "Post-Study Work", value: "Up to 3 Years" },
      { icon: Home, label: "Avg Living Cost", value: "C$1,200/mo" },
    ]}
    universities={[
      { name: "University of Toronto", ranking: "QS Rank: #21", specialty: "Engineering, Medicine, AI, Business — Canada's highest-ranked university with 700+ undergraduate programs." },
      { name: "McGill University", ranking: "QS Rank: #30", specialty: "Medicine, Law, Arts — Montreal's prestigious English-language university with 12 Nobel laureates." },
      { name: "University of British Columbia", ranking: "QS Rank: #34", specialty: "Forestry, Environmental Sciences, Business — stunning Vancouver campus overlooking mountains and ocean." },
      { name: "University of Alberta", ranking: "QS Rank: #111", specialty: "Engineering, AI, Energy — strong research funding (C$600M+/year) and industry ties in Western Canada." },
      { name: "University of Waterloo", ranking: "QS Rank: #112", specialty: "Computer Science, Engineering — world's largest co-op program with 7,100+ employer partners including Google, Apple." },
      { name: "University of Montreal", ranking: "QS Rank: #141", specialty: "AI (Mila Lab), Health Sciences, Law — a leading French-language university and global AI research hub." },
    ]}
    visaRequirements={[
      { title: "Study Permit", desc: "Requires a letter of acceptance from a Designated Learning Institution (DLI), proof of financial support (C$20,635/year + tuition), valid passport, and clean background check." },
      { title: "Financial Requirements", desc: "Show C$20,635/year for living costs (C$25,690 for Quebec) plus tuition fees via bank statements, Guaranteed Investment Certificate (GIC), or scholarship letters." },
      { title: "English/French Proof", desc: "IELTS Academic (6.0–6.5), TOEFL iBT (80+), or TEF/TCF for French programs. Some universities also accept Duolingo English Test." },
      { title: "Biometrics & Medical Exam", desc: "Provide biometrics at a Visa Application Centre (VAC) and complete a medical exam with a panel physician if required by your nationality." },
      { title: "Post-Graduation Work Permit", desc: "Eligible graduates from programs of 8 months+ at DLIs can get a PGWP matching their program length (up to 3 years) to work anywhere in Canada." },
    ]}
    costs={[
      { label: "Tuition (Undergraduate)", value: "C$15,000 – C$35,000/year" },
      { label: "Tuition (Postgraduate)", value: "C$17,000 – C$40,000/year" },
      { label: "Accommodation", value: "C$600 – C$1,200/month" },
      { label: "Food & Groceries", value: "C$250 – C$400/month" },
      { label: "Transport", value: "C$80 – C$150/month" },
      { label: "Health Insurance", value: "Varies by province (some free)" },
    ]}
    highlights={[
      "Affordable vs US & UK",
      "PGWP up to 3 years",
      "Express Entry PR pathway",
      "24 hrs/week work rights",
      "Safe & multicultural",
      "Vanier & Pearson Scholarships",
    ]}
    jobInfo={[
      { title: "Part-Time During Studies", desc: "Work up to 24 hours/week during term (recently expanded) and full-time during scheduled breaks. Average student wages are C$15–C$22/hour depending on province." },
      { title: "Post-Graduation Work Permit", desc: "PGWP allows 1–3 years of open work authorization based on your program length. No employer restriction — work for any employer in any field across Canada." },
      { title: "PR Through Express Entry", desc: "Canadian work experience earned during PGWP qualifies you for Permanent Residency through CEC, Federal Skilled Worker, or Provincial Nominee Program streams." },
      { title: "Average Graduate Salary", desc: "Graduates earn C$50,000–C$70,000/year, with tech (C$75K–C$100K), healthcare (C$65K–C$90K), and engineering (C$70K–C$95K) paying significantly more." },
    ]}
    applicationSteps={[
      { step: "1", title: "Research Universities & Programs", desc: "Explore Designated Learning Institutions (DLIs) based on your field, budget, and preferred province. Consider co-op programs for hands-on industry experience." },
      { step: "2", title: "Take IELTS or French Test", desc: "Score IELTS 6.0–6.5 for English programs or TEF/TCF for French programs. Some colleges accept lower scores with conditional admission and pathway programs." },
      { step: "3", title: "Apply to Universities", desc: "Submit applications directly to universities or through centralized systems (OUAC for Ontario, ApplyAlberta, etc.). Include transcripts, SOP, LORs, and test scores." },
      { step: "4", title: "Get Acceptance & Arrange Finances", desc: "Receive your Letter of Acceptance, purchase a GIC (C$20,635), and gather financial documents showing you can cover tuition and living expenses." },
      { step: "5", title: "Apply for Study Permit", desc: "Submit your study permit application online with LOA, financial proof, passport, photographs, and biometrics. Processing takes 4–16 weeks depending on country." },
      { step: "6", title: "Arrive & Begin Your Journey", desc: "Arrange accommodation, attend orientation, get your SIN (Social Insurance Number), open a bank account, and activate your provincial health insurance." },
    ]}
    testimonials={[
      { name: "Ankit Mehta", course: "PG Diploma in Data Analytics", university: "Conestoga College", text: "Canada's co-op programs are a game-changer. I gained real industry experience during my studies and received a full-time offer before even graduating. Now on my PR journey!" },
      { name: "Maria Santos", course: "MSc Computer Science", university: "University of British Columbia", text: "UBC's campus in Vancouver is breathtaking, and the tech ecosystem here is booming. I landed a C$85K/year role at a fintech startup within 2 months of graduating." },
      { name: "David Okonkwo", course: "MBA", university: "University of Toronto", text: "Toronto's diversity and business culture are unmatched. Rotman's MBA program connected me with top employers, and the PGWP gave me time to build my Canadian career." },
    ]}
    faqs={[
      { q: "Can I get PR after studying in Canada?", a: "Yes! Canada actively encourages international graduates to become permanent residents. Through Express Entry (CEC stream), you can apply for PR after gaining 1 year of Canadian work experience. Provincial Nominee Programs also fast-track graduates." },
      { q: "How much can I earn while studying in Canada?", a: "With expanded work rights (24 hrs/week during term), students earn C$15–C$22/hour. Monthly income of C$1,500–C$2,500 is common, covering a significant portion of living expenses." },
      { q: "Is a GIC mandatory for Canadian study permit?", a: "A GIC is not mandatory but strongly recommended as it significantly strengthens your visa application. It requires depositing C$20,635 into a participating Canadian bank, released monthly during your studies." },
      { q: "Which province is best for international students?", a: "Ontario (Toronto) has the most universities and job opportunities. British Columbia (Vancouver) offers tech jobs and natural beauty. Quebec (Montreal) has the lowest tuition. Alberta and Manitoba are affordable with strong job markets." },
      { q: "How long does the study permit take?", a: "Processing times vary by country: 4–8 weeks from India, 6–12 weeks from Africa, 4–6 weeks from the Middle East. Apply through SDS (Student Direct Stream) for faster processing (20 days) if eligible." },
      { q: "What scholarships can I apply for?", a: "Top options include Vanier Canada Graduate Scholarships (C$50,000/year for PhD), Lester B. Pearson Scholarships (full tuition at UofT), and university-specific awards. Provincial awards and external scholarships are also available." },
    ]}
    scholarships={[
      { name: "Vanier Canada Graduate Scholarship", desc: "C$50,000/year for 3 years for doctoral students demonstrating academic excellence, research potential, and leadership at Canadian universities." },
      { name: "Lester B. Pearson Scholarship", desc: "Full tuition, books, incidentals, and residence for 4 years at the University of Toronto. For exceptional international undergraduate students." },
      { name: "Banting Postdoctoral Fellowships", desc: "C$70,000/year for 2 years for postdoctoral researchers. One of Canada's most prestigious research awards open to all nationalities." },
      { name: "Ontario Trillium Scholarship", desc: "C$40,000/year for up to 4 years for international PhD students at Ontario universities. Covers tuition and provides a living stipend." },
      { name: "Schulich Leader Scholarships", desc: "C$80,000–C$100,000 for undergraduate STEM students at 20 Canadian universities. One of the largest STEM scholarship programs in Canada." },
      { name: "University-Specific Awards", desc: "Most Canadian universities offer entrance scholarships of C$2,000–C$20,000 based on academic merit. Apply early as deadlines are typically December–February." },
    ]}
  />
);

export default Canada;
