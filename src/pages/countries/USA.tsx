import { GraduationCap, Clock, Briefcase, Home } from "lucide-react";
import CountryPageLayout from "@/components/CountryPageLayout";
import heroImg from "@/assets/countries/usa-hero.jpg";

const USA = () => (
  <CountryPageLayout
    name="USA"
    flag="🇺🇸"
    heroImage={heroImg}
    tagline="Home to the world's top-ranked universities, cutting-edge research, and unmatched career opportunities."
    description="The United States hosts the largest number of international students globally, with over 1 million enrolled annually. With unparalleled academic flexibility, world-leading research facilities, and OPT/CPT work programs, the USA offers students a transformative educational experience and a launchpad for global careers. From Silicon Valley to Wall Street, a US degree opens doors that no other education can."
    whyStudy={[
      "Home to 8 of the world's top 10 universities — unmatched academic prestige and research output.",
      "Flexible major/minor system lets you explore multiple fields before committing to a specialization.",
      "OPT program offers 12 months of post-study work (36 months for STEM) — the longest among top destinations.",
      "CPT allows paid internships during studies — gain real US work experience while still enrolled.",
      "Over 4,000 accredited institutions offering diverse programs at every budget level and location.",
      "World's largest economy with unparalleled career opportunities in tech, finance, healthcare, and more.",
    ]}
    stats={[
      { icon: GraduationCap, label: "Top Universities", value: "4,000+" },
      { icon: Clock, label: "Degree Duration", value: "2–4 Years" },
      { icon: Briefcase, label: "OPT Work", value: "1–3 Years" },
      { icon: Home, label: "Avg Living Cost", value: "$1,500/mo" },
    ]}
    universities={[
      { name: "Massachusetts Institute of Technology", ranking: "QS Rank: #1", specialty: "Engineering, CS, AI, Physics — the world's #1 university for STEM with groundbreaking research labs." },
      { name: "Stanford University", ranking: "QS Rank: #2", specialty: "Business, CS, Engineering — heart of Silicon Valley. Alumni founded Google, HP, Nike, Netflix, and more." },
      { name: "Harvard University", ranking: "QS Rank: #4", specialty: "Law, Business, Medicine, Arts — the most prestigious name in global education with a $50B+ endowment." },
      { name: "California Institute of Technology", ranking: "QS Rank: #10", specialty: "Physics, Engineering, Space Sciences — small (2,200 students) but extraordinarily impactful with NASA's JPL." },
      { name: "University of Chicago", ranking: "QS Rank: #11", specialty: "Economics (97 Nobel laureates), Business, Law — known for rigorous intellectual culture and the Chicago School." },
      { name: "University of Pennsylvania", ranking: "QS Rank: #12", specialty: "Business (Wharton — #1 MBA globally), Medicine, Engineering — Ivy League excellence in Philadelphia." },
    ]}
    visaRequirements={[
      { title: "F-1 Student Visa", desc: "Requires Form I-20 from a SEVP-certified school, proof of financial support, a successful visa interview at the US Embassy, and a valid passport with 6+ months validity." },
      { title: "Financial Requirements", desc: "Demonstrate funds covering first-year tuition + living expenses (~$50,000–$80,000) through bank statements, sponsor affidavits, scholarships, or education loans." },
      { title: "Standardized Tests", desc: "Most universities require GRE/GMAT (graduate) or SAT/ACT (undergraduate), plus TOEFL iBT (80–100+) or IELTS Academic (6.5–7.0). Test-optional policies expanding." },
      { title: "SEVIS Fee", desc: "Pay the I-901 SEVIS fee ($350 for F-1) before your visa interview. This funds the Student and Exchange Visitor Program that tracks international students." },
      { title: "OPT & CPT Programs", desc: "Optional Practical Training (OPT) allows 12 months of work post-graduation, extended to 36 months for STEM fields. CPT permits paid internships during studies." },
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
      "8 of world's top 10 universities",
      "Flexible major/minor system",
      "OPT: 12–36 months work",
      "On-campus jobs: 20 hrs/week",
      "4,000+ institutions",
      "Fellowships & assistantships",
    ]}
    jobInfo={[
      { title: "On-Campus Employment", desc: "F-1 students can work up to 20 hours/week on campus during the academic year and full-time during breaks. Roles include research assistant, library aide, and teaching assistant." },
      { title: "CPT (Curricular Practical Training)", desc: "Paid internships and co-ops directly related to your field of study. Available during or between academic terms. Many STEM students earn $25–$50/hour through CPT." },
      { title: "OPT (Optional Practical Training)", desc: "12 months of post-graduation work authorization for all fields, extended to 36 months for STEM degrees. Work for any US employer in your field of study." },
      { title: "Average Graduate Salary", desc: "US graduates earn $55,000–$85,000/year on average. Tech ($100K–$200K+ in Silicon Valley), finance ($80K–$150K), and healthcare ($70K–$120K) lead the pack." },
    ]}
    applicationSteps={[
      { step: "1", title: "Research & Shortlist Universities", desc: "Use QS Rankings, US News, and program-specific rankings to create a balanced list of reach, match, and safety schools. Consider location, cost, research opportunities, and OPT eligibility." },
      { step: "2", title: "Prepare for Tests (GRE/TOEFL/IELTS)", desc: "Score GRE 310+ for competitive programs, TOEFL 90–100+ or IELTS 6.5–7.0. Start preparation 6 months in advance. Many programs are now test-optional — check individual requirements." },
      { step: "3", title: "Craft Your Application", desc: "Write a compelling Statement of Purpose (SOP), gather 2–3 Letters of Recommendation (LOR), prepare your resume/CV, and write supplemental essays. Quality applications take 2–3 months." },
      { step: "4", title: "Apply & Receive I-20", desc: "Submit applications through university portals or Common App. Deadlines vary: Fall intake (Dec–Feb), Spring (Sep–Oct). Once admitted, accept the offer and receive your Form I-20." },
      { step: "5", title: "Visa Interview & SEVIS", desc: "Pay the SEVIS fee ($350), complete DS-160, schedule your visa interview at the US Embassy. Bring I-20, financial documents, admission letter, and test scores. Prepare for common interview questions." },
      { step: "6", title: "Pre-Departure & Arrival", desc: "Book flights, arrange campus housing or off-campus apartment, attend pre-departure orientations. Upon arrival, complete university check-in, attend orientation, and activate your SEVIS record." },
    ]}
    testimonials={[
      { name: "Vikram Reddy", course: "MS Computer Science", university: "Stanford University", text: "Stanford changed my life. The proximity to Silicon Valley meant I had internship offers from 3 top tech companies. After OPT, I'm now a software engineer earning $180K/year." },
      { name: "Sarah Kim", course: "MBA", university: "Wharton (UPenn)", text: "Wharton's MBA network is unmatched. The alumni connections, case competitions, and recruiting opportunities landed me a VP role at a major investment bank in New York." },
      { name: "Arjun Nair", course: "MS Data Science", university: "MIT", text: "MIT's research culture is intense and rewarding. I worked on cutting-edge AI projects, published 3 papers, and my STEM OPT gave me 3 full years to build my career in the US." },
    ]}
    faqs={[
      { q: "How difficult is it to get a US student visa?", a: "The F-1 visa approval rate varies by country but is generally high (70–85%) if you have strong academics, genuine study intent, proof of financial support, and clear plans to return home after studies. Proper preparation for the visa interview is key." },
      { q: "Can I work in the US after graduation?", a: "Yes! Through OPT, you get 12 months of work authorization (36 months for STEM degrees). After OPT, employers can sponsor you for an H-1B work visa. Many students transition to full-time employment at companies where they interned." },
      { q: "How much does it really cost to study in the USA?", a: "Total cost ranges from $35,000–$80,000/year depending on the university type and location. Public universities are more affordable ($20K–$40K tuition). Scholarships, assistantships, and on-campus work can reduce costs by 30–60%." },
      { q: "Are there affordable options in the USA?", a: "Yes! Community colleges offer 2-year programs at $8,000–$15,000/year with transfer pathways to top universities. Public universities in states like Texas, Florida, and Ohio offer quality education at lower costs." },
      { q: "What is the STEM OPT extension?", a: "STEM graduates get 24 additional months of OPT (total 36 months) to work in the US. This applies to degrees in science, technology, engineering, and mathematics. It's a huge advantage for building a US career." },
      { q: "When should I start applying?", a: "Start 12–18 months before your intended start date. For Fall intake (Sep): begin research in Jan–Mar, take tests by Jun–Aug, submit applications by Dec–Feb. Early preparation is crucial for competitive programs." },
    ]}
    scholarships={[
      { name: "Fulbright Foreign Student Program", desc: "Fully funded scholarship by the US Government covering tuition, living expenses, airfare, and health insurance for graduate students from 160+ countries." },
      { name: "Hubert Humphrey Fellowship", desc: "Non-degree program for mid-career professionals providing 10 months of academic and professional development at a US university with full funding." },
      { name: "Graduate Assistantships (TA/RA)", desc: "Most US universities offer Teaching or Research Assistantships covering full tuition + monthly stipend ($1,500–$3,000/month) for Master's and PhD students." },
      { name: "Stanford Knight-Hennessy Scholars", desc: "Full funding for graduate studies at Stanford covering tuition, stipend, and travel. One of the world's most prestigious graduate scholarships." },
      { name: "MIT International Scholarships", desc: "Need-based financial aid covering up to full cost of attendance. MIT meets 100% of demonstrated financial need for all admitted students." },
      { name: "University Merit Scholarships", desc: "Many US universities offer merit-based scholarships of $5,000–$30,000/year for international students with strong academic profiles and test scores." },
    ]}
  />
);

export default USA;
