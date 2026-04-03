import { GraduationCap, Clock, Briefcase, Home } from "lucide-react";
import CountryPageLayout from "@/components/CountryPageLayout";

const Canada = () => (
  <CountryPageLayout
    name="Canada"
    flag="🇨🇦"
    tagline="Affordable education, immigration-friendly policies, and a welcoming multicultural society make Canada a top choice."
    description="Canada is one of the most popular destinations for international students thanks to its affordable tuition, high-quality education, and generous immigration policies. With a Post-Graduation Work Permit (PGWP) of up to 3 years and clear PR pathways through Express Entry, Canada offers both education and a future."
    stats={[
      { icon: GraduationCap, label: "Top Universities", value: "100+" },
      { icon: Clock, label: "Degree Duration", value: "2–4 Years" },
      { icon: Briefcase, label: "Post-Study Work", value: "Up to 3 Years" },
      { icon: Home, label: "Avg Living Cost", value: "C$1,200/mo" },
    ]}
    universities={[
      { name: "University of Toronto", ranking: "QS Rank: #21", specialty: "Engineering, Medicine, AI, Business — Canada's highest-ranked university." },
      { name: "McGill University", ranking: "QS Rank: #30", specialty: "Medicine, Law, Arts — Montreal's prestigious English-language university." },
      { name: "University of British Columbia", ranking: "QS Rank: #34", specialty: "Forestry, Environmental Sciences, Business — stunning Vancouver campus." },
      { name: "University of Alberta", ranking: "QS Rank: #111", specialty: "Engineering, AI, Energy — strong research funding and industry ties." },
      { name: "University of Waterloo", ranking: "QS Rank: #112", specialty: "Computer Science, Engineering, Co-op programs — largest co-op program globally." },
      { name: "University of Montreal", ranking: "QS Rank: #141", specialty: "AI, Health Sciences, Law — a leading French-language university with global impact." },
    ]}
    visaRequirements={[
      { title: "Study Permit", desc: "Requires a letter of acceptance from a DLI, proof of financial support (C$20,635/year + tuition), and a clean background check." },
      { title: "Financial Requirements", desc: "Show C$20,635/year for living costs (C$25,690 for Quebec) plus tuition fees via bank statements, GIC, or scholarship letters." },
      { title: "English/French Proof", desc: "IELTS (6.0–6.5), TOEFL iBT, or TEF/TCF for French programs. Some universities accept Duolingo." },
      { title: "Biometrics & Medical Exam", desc: "Provide biometrics at a VAC and complete a medical exam with a panel physician if required." },
      { title: "Post-Graduation Work Permit", desc: "Eligible graduates can get a PGWP for up to 3 years, matching their program length, to work anywhere in Canada." },
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
      "Affordable tuition compared to US & UK",
      "PGWP up to 3 years after graduation",
      "Express Entry PR pathway for graduates",
      "Part-time work: 20 hrs/week during term",
      "Safe, multicultural, and welcoming society",
      "Scholarships: Vanier, Lester B. Pearson, provincial awards",
    ]}
    jobInfo={[
      { title: "Part-Time During Studies", desc: "Work up to 20 hours/week during term (recently expanded to 24 hrs) and full-time during scheduled breaks." },
      { title: "Post-Graduation Work Permit", desc: "PGWP allows 1–3 years of open work authorization based on your program length. No employer restriction." },
      { title: "PR Through Express Entry", desc: "Canadian work experience earned during PGWP qualifies you for Permanent Residency through CEC or PNP streams." },
      { title: "Average Graduate Salary", desc: "Graduates earn C$50,000–C$70,000/year, with tech, healthcare, and engineering paying significantly more." },
    ]}
  />
);

export default Canada;
