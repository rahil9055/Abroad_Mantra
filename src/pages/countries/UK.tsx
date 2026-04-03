import { GraduationCap, Clock, Briefcase, Home } from "lucide-react";
import CountryPageLayout from "@/components/CountryPageLayout";

const UK = () => (
  <CountryPageLayout
    name="United Kingdom"
    flag="🇬🇧"
    tagline="World-class universities, rich cultural heritage, and excellent post-study work opportunities await you in the UK."
    description="The United Kingdom is home to some of the oldest and most prestigious universities in the world. With a globally recognized education system, diverse student communities, and a 2-year post-study work visa (Graduate Route), the UK remains one of the most sought-after destinations for international students."
    stats={[
      { icon: GraduationCap, label: "Top Universities", value: "150+" },
      { icon: Clock, label: "Degree Duration", value: "1–3 Years" },
      { icon: Briefcase, label: "Post-Study Work", value: "2 Years" },
      { icon: Home, label: "Avg Living Cost", value: "£1,000/mo" },
    ]}
    universities={[
      { name: "University of Oxford", ranking: "QS Rank: #3", specialty: "Humanities, Sciences, Law, Medicine — one of the oldest universities in the world." },
      { name: "University of Cambridge", ranking: "QS Rank: #5", specialty: "Engineering, Natural Sciences, Mathematics — renowned for research excellence." },
      { name: "Imperial College London", ranking: "QS Rank: #6", specialty: "Engineering, Business, Medicine — top choice for STEM students." },
      { name: "University College London", ranking: "QS Rank: #9", specialty: "Arts, Social Sciences, Architecture — London's leading multidisciplinary university." },
      { name: "University of Edinburgh", ranking: "QS Rank: #22", specialty: "AI, Medicine, Informatics — Scotland's premier research university." },
      { name: "University of Manchester", ranking: "QS Rank: #32", specialty: "Business, Engineering, Life Sciences — strong industry connections." },
    ]}
    visaRequirements={[
      { title: "Student Visa (Tier 4)", desc: "You need a Confirmation of Acceptance for Studies (CAS) from a licensed UK institution, proof of English proficiency (IELTS 6.0+), and financial evidence." },
      { title: "Financial Requirements", desc: "Show £1,334/month (London) or £1,023/month (outside London) for living costs, plus full tuition fees for the first year." },
      { title: "English Language Proof", desc: "IELTS Academic (6.0–7.0), TOEFL iBT, or PTE Academic scores are accepted. Some universities offer pre-sessional courses." },
      { title: "Health Surcharge (IHS)", desc: "Pay the Immigration Health Surcharge (£470/year) to access NHS healthcare during your stay." },
      { title: "Graduate Route Visa", desc: "After completing your degree, apply for the 2-year Graduate Route visa to work in the UK without a sponsor." },
    ]}
    costs={[
      { label: "Tuition (Undergraduate)", value: "£10,000 – £38,000/year" },
      { label: "Tuition (Postgraduate)", value: "£11,000 – £45,000/year" },
      { label: "Accommodation", value: "£500 – £1,200/month" },
      { label: "Food & Groceries", value: "£150 – £300/month" },
      { label: "Transport", value: "£50 – £150/month" },
      { label: "Health Surcharge", value: "£470/year" },
    ]}
    highlights={[
      "Globally recognized degrees",
      "1-year Master's programs save time & money",
      "2-year post-study work visa (Graduate Route)",
      "Multicultural student communities",
      "Part-time work allowed (20 hrs/week)",
      "Scholarships available (Chevening, Commonwealth)",
    ]}
    jobInfo={[
      { title: "Part-Time During Studies", desc: "Work up to 20 hours/week during term and full-time during holidays in retail, hospitality, tutoring, and more." },
      { title: "Graduate Route Visa", desc: "Stay and work for 2 years (3 for PhD) after graduation without needing employer sponsorship." },
      { title: "High-Demand Industries", desc: "Finance, tech, healthcare, engineering, and consulting offer strong career prospects for graduates." },
      { title: "Average Graduate Salary", desc: "UK graduates earn £25,000–£35,000/year on average, with London roles often paying significantly more." },
    ]}
  />
);

export default UK;
