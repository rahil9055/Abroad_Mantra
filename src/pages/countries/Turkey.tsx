import { GraduationCap, Clock, Briefcase, Home } from "lucide-react";
import CountryPageLayout from "@/components/CountryPageLayout";
import heroImg from "@/assets/countries/turkey-hero.jpg";

const Turkey = () => (
  <CountryPageLayout
    name="Turkey"
    flag="🇹🇷"
    tagline="Affordable education at the crossroads of Europe and Asia with generous government scholarships."
    description="Turkey offers a unique blend of Eastern and Western cultures, affordable world-class education, and generous scholarship programs through Türkiye Scholarships. With over 200 universities and a rapidly growing economy, Turkey attracts students from 190+ countries. All our services are provided 100% remotely & online."
    whyStudy={[
      "Türkiye Scholarships — one of the world's most comprehensive government scholarship programs covering everything.",
      "Affordable tuition (€500–€4,000/year at public universities) and low cost of living.",
      "200+ universities including world-ranked institutions with English-taught programs.",
      "Strategic location bridging Europe and Asia with rich cultural heritage.",
      "Modern campuses with state-of-the-art research facilities and laboratories.",
      "1-year post-study work permit and growing economy with diverse opportunities.",
    ]}
    stats={[
      { icon: GraduationCap, label: "Universities", value: "200+" },
      { icon: Clock, label: "Degree Duration", value: "2–4 Years" },
      { icon: Briefcase, label: "Post-Study Work", value: "1 Year" },
      { icon: Home, label: "Avg Living Cost", value: "€400/mo" },
    ]}
    universities={[
      { name: "Boğaziçi University", ranking: "QS Rank: #451-500", specialty: "Engineering, Sciences, Business — Turkey's most prestigious university, fully English-medium." },
      { name: "Middle East Technical University", ranking: "QS Rank: #336", specialty: "Engineering, Architecture, Sciences — Ankara's top research university." },
      { name: "Koç University", ranking: "QS Rank: #431", specialty: "Business, Engineering, Medicine — leading private university in Istanbul." },
      { name: "Sabancı University", ranking: "QS Rank: #481-490", specialty: "Engineering, Management, Sciences — innovative private university." },
      { name: "Istanbul Technical University", ranking: "QS Rank: #501-510", specialty: "Engineering, Architecture, Sciences — one of the world's oldest technical universities." },
      { name: "Bilkent University", ranking: "QS Rank: #521-530", specialty: "Music, Business, Engineering — Turkey's first private non-profit university." },
    ]}
    visaRequirements={[
      { title: "Student Visa", desc: "Apply at the Turkish embassy with acceptance letter, passport, financial proof, and health insurance. Processing takes 2–8 weeks." },
      { title: "Residence Permit", desc: "After arrival, apply for a student residence permit at the local immigration office within 30 days." },
      { title: "Financial Requirements", desc: "Show proof of €3,000–€5,000/year for living costs. Scholarship holders are exempt from financial proof requirements." },
      { title: "Health Insurance", desc: "International students must have health insurance. SGK (Turkish social security) coverage costs ~€50/year for scholarship holders." },
      { title: "Language Requirements", desc: "Turkish-taught programs require TÖMER B2 certificate. English programs accept IELTS 5.5–6.5 or TOEFL." },
    ]}
    costs={[
      { label: "Tuition (Public)", value: "€500 – €4,000/year" },
      { label: "Tuition (Private)", value: "€5,000 – €20,000/year" },
      { label: "Accommodation", value: "€100 – €300/month" },
      { label: "Food", value: "€100 – €200/month" },
      { label: "Transport", value: "€15 – €30/month" },
      { label: "Health Insurance", value: "€50 – €200/year" },
    ]}
    highlights={[
      "Türkiye Scholarships (fully funded)",
      "Very low cost of living",
      "English-taught programs",
      "Part-time work permitted",
      "Rich cultural experience",
      "Modern research facilities",
    ]}
    jobInfo={[
      { title: "Part-Time During Studies", desc: "Students can work part-time after the first year. Pay rates are €5–€10/hour in cities like Istanbul and Ankara." },
      { title: "Post-Study Work", desc: "Graduates can apply for a 1-year work permit. Turkey's growing economy offers opportunities in tech, tourism, and manufacturing." },
      { title: "Growing Sectors", desc: "Tech startups, automotive manufacturing, tourism, healthcare, and construction are key growth sectors hiring international talent." },
      { title: "Average Graduate Salary", desc: "Graduates earn €8,000–€15,000/year, with tech and engineering roles paying €12,000–€25,000+ in major cities." },
    ]}
    applicationSteps={[
      { step: "1", title: "Research Programs & Scholarships", desc: "Explore Türkiye Scholarships (applications open January–February) and direct university applications." },
      { step: "2", title: "Prepare Documents", desc: "Academic transcripts, passport, reference letters, personal statement, and language certificates." },
      { step: "3", title: "Apply Online", desc: "Submit through Türkiye Scholarships portal or directly to universities. Meet posted deadlines." },
      { step: "4", title: "Interview (Scholarship)", desc: "Shortlisted scholarship candidates attend interviews. Prepare to discuss academic goals and why Turkey." },
      { step: "5", title: "Apply for Visa", desc: "After acceptance, apply for student visa at the Turkish embassy. Processing: 2–8 weeks." },
      { step: "6", title: "Arrival & Registration", desc: "Attend orientation, apply for residence permit, and register for courses." },
    ]}
    testimonials={[
      { name: "Hassan Ahmed", course: "BSc Civil Engineering", university: "METU", text: "The Türkiye Scholarship covered everything — tuition, housing, stipend, and even flights. METU's engineering program is rigorous and internationally respected." },
      { name: "Maria Santos", course: "MBA", university: "Koç University", text: "Istanbul is an incredible city for business studies. Koç's connections to Turkey's corporate world opened doors I never expected." },
      { name: "James Otieno", course: "MSc Computer Science", university: "Sabancı University", text: "Turkey's tech scene is booming. The affordable living and high-quality education made this the perfect choice for my career." },
    ]}
    faqs={[
      { q: "What are Türkiye Scholarships?", a: "A fully-funded government program covering tuition, accommodation, monthly stipend (€250–€400), health insurance, Turkish language course, and round-trip flights." },
      { q: "How much does it cost to live in Turkey?", a: "Istanbul costs €400–€600/month; smaller cities like Ankara or Izmir cost €250–€400/month. Turkey is one of the most affordable study destinations." },
      { q: "Do I need to know Turkish?", a: "Not for English-taught programs. However, scholarship recipients get a free 1-year Turkish language course. Basic Turkish helps with daily life." },
      { q: "Is Turkey safe for international students?", a: "Yes! Major university cities like Istanbul, Ankara, and Izmir are safe with active international student communities." },
      { q: "Can I travel to Europe from Turkey?", a: "Turkey borders Europe and is well-connected by budget flights. However, you'll need a Schengen visa for EU travel as Turkey is not in the Schengen area." },
    ]}
    scholarships={[
      { name: "Türkiye Scholarships", desc: "Turkey's flagship fully-funded program covering tuition, housing, monthly stipend, insurance, language course, and flights." },
      { name: "YTB Scholarships", desc: "Presidency for Turks Abroad scholarships for students from specific regions, covering full study costs." },
      { name: "University-Specific Scholarships", desc: "Koç, Sabancı, and Bilkent offer merit-based scholarships covering 25%–100% of tuition." },
      { name: "OIC/SESRIC Scholarships", desc: "Available to students from OIC member states for studies at Turkish universities." },
      { name: "TÜBITAK Research Scholarships", desc: "For graduate students conducting research in STEM fields at Turkish institutions." },
    ]}
  />
);

export default Turkey;
