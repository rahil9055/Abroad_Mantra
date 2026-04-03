import { GraduationCap, Clock, Briefcase, Home } from "lucide-react";
import CountryPageLayout from "@/components/CountryPageLayout";

const USA = () => (
  <CountryPageLayout
    name="USA"
    flag="🇺🇸"
    tagline="Home to the world's top-ranked universities, cutting-edge research, and unmatched career opportunities."
    description="The United States hosts the largest number of international students globally, with over 1 million enrolled annually. With unparalleled academic flexibility, world-leading research facilities, and OPT/CPT work programs, the USA offers students a transformative educational experience and a launchpad for global careers."
    stats={[
      { icon: GraduationCap, label: "Top Universities", value: "4,000+" },
      { icon: Clock, label: "Degree Duration", value: "2–4 Years" },
      { icon: Briefcase, label: "OPT Work", value: "1–3 Years" },
      { icon: Home, label: "Avg Living Cost", value: "$1,500/mo" },
    ]}
    universities={[
      { name: "Massachusetts Institute of Technology", ranking: "QS Rank: #1", specialty: "Engineering, CS, AI, Physics — the world's top-ranked university for STEM." },
      { name: "Stanford University", ranking: "QS Rank: #2", specialty: "Business, CS, Engineering — heart of Silicon Valley innovation." },
      { name: "Harvard University", ranking: "QS Rank: #4", specialty: "Law, Business, Medicine, Arts — the most prestigious name in education." },
      { name: "California Institute of Technology", ranking: "QS Rank: #10", specialty: "Physics, Engineering, Space Sciences — small but extraordinarily impactful." },
      { name: "University of Chicago", ranking: "QS Rank: #11", specialty: "Economics, Business, Law — known for rigorous intellectual culture." },
      { name: "University of Pennsylvania", ranking: "QS Rank: #12", specialty: "Business (Wharton), Medicine, Engineering — Ivy League excellence." },
    ]}
    visaRequirements={[
      { title: "F-1 Student Visa", desc: "Requires Form I-20 from a SEVP-certified school, proof of financial support, and a successful visa interview at the US Embassy." },
      { title: "Financial Requirements", desc: "Demonstrate funds covering first-year tuition + living expenses (~$50,000–$80,000) through bank statements, affidavits, or scholarships." },
      { title: "Standardized Tests", desc: "Most universities require GRE/GMAT (graduate) or SAT/ACT (undergraduate), plus TOEFL iBT (80+) or IELTS (6.5+)." },
      { title: "SEVIS Fee", desc: "Pay the I-901 SEVIS fee ($350 for F-1) before your visa interview. This funds the Student and Exchange Visitor Program." },
      { title: "OPT & CPT Programs", desc: "Optional Practical Training (OPT) allows 12 months of work post-graduation, extended to 36 months for STEM fields." },
    ]}
    costs={[
      { label: "Tuition (Public University)", value: "$20,000 – $40,000/year" },
      { label: "Tuition (Private University)", value: "$40,000 – $60,000+/year" },
      { label: "Accommodation", value: "$800 – $2,000/month" },
      { label: "Food & Groceries", value: "$300 – $600/month" },
      { label: "Transport", value: "$50 – $200/month" },
      { label: "Health Insurance", value: "$1,500 – $3,000/year" },
    ]}
    highlights={[
      "Home to 8 of the world's top 10 universities",
      "Flexible major/minor system",
      "OPT: 12 months (36 for STEM graduates)",
      "CPT for internships during studies",
      "On-campus work allowed (20 hrs/week)",
      "Scholarships, fellowships, and assistantships available",
    ]}
    jobInfo={[
      { title: "On-Campus Employment", desc: "F-1 students can work up to 20 hours/week on campus during the academic year and full-time during breaks." },
      { title: "CPT (Curricular Practical Training)", desc: "Paid internships and co-ops related to your field of study, available during or between academic terms." },
      { title: "OPT (Optional Practical Training)", desc: "12 months of post-graduation work authorization, extended to 36 months for STEM degree holders." },
      { title: "Average Graduate Salary", desc: "US graduates earn $55,000–$85,000/year on average, with tech, finance, and healthcare leading the pack." },
    ]}
  />
);

export default USA;
