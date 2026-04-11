import { GraduationCap, Clock, Briefcase, Home } from "lucide-react";
import CountryPageLayout from "@/components/CountryPageLayout";
import heroImg from "@/assets/countries/singapore-hero.jpg";

const Singapore = () => (
  <CountryPageLayout
    name="Singapore"
    heroImage={heroImg}
    flag="🇸🇬"
    tagline="Asia's education hub with world-ranked universities, a global business center, and unmatched safety."
    description="Singapore combines world-class education with a vibrant multicultural society and one of the strongest economies in Asia. Home to two universities in the global top 15, Singapore offers exceptional academic quality, strong industry connections, and excellent career prospects. All our services are provided 100% remotely & online."
    whyStudy={[
      "Two universities ranked in the global top 15 — NUS (#8) and NTU (#15) worldwide.",
      "English-medium education in a multicultural, safe, and clean city-state.",
      "Strong industry connections — global companies have their Asia-Pacific headquarters in Singapore.",
      "Excellent post-study work opportunities with Singapore's pro-business environment.",
      "Strategic location in Southeast Asia — gateway to ASEAN markets.",
      "High quality of life with world-class infrastructure and healthcare.",
    ]}
    stats={[
      { icon: GraduationCap, label: "Top Universities", value: "6 Major" },
      { icon: Clock, label: "Degree Duration", value: "1–4 Years" },
      { icon: Briefcase, label: "Post-Study Work", value: "1 Year" },
      { icon: Home, label: "Avg Living Cost", value: "S$1,500/mo" },
    ]}
    universities={[
      { name: "National University of Singapore", ranking: "QS Rank: #8", specialty: "Engineering, Business, Computing, Medicine — Asia's #1 university." },
      { name: "Nanyang Technological University", ranking: "QS Rank: #15", specialty: "Engineering, Business, Sciences — Asia's most innovative university." },
      { name: "Singapore Management University", ranking: "QS Rank: #545", specialty: "Business, Finance, Law, IT — Asia's top business school." },
      { name: "Singapore University of Technology & Design", ranking: "Emerging Top", specialty: "Engineering, Architecture, Design — MIT-affiliated unique model." },
      { name: "Singapore Institute of Technology", ranking: "Applied Focus", specialty: "Applied Engineering, Health Sciences, IT — industry-focused education." },
      { name: "James Cook University Singapore", ranking: "Australian Partner", specialty: "Business, IT, Psychology — Australian degrees in Singapore." },
    ]}
    visaRequirements={[
      { title: "Student Pass", desc: "Apply through ICA's SOLAR system after receiving your offer letter. Submit within 2 months of your course start date." },
      { title: "Financial Requirements", desc: "Show proof of ability to cover tuition (S$15,000–S$50,000/year) and living costs (S$10,000–S$15,000/year)." },
      { title: "Medical Examination", desc: "Complete a medical examination at an approved clinic in Singapore within 2 weeks of arrival." },
      { title: "Student Pass Card", desc: "Collect your Student Pass card from ICA after completing enrollment and medical examination." },
      { title: "Work Rights", desc: "Student Pass holders can work up to 16 hours/week during term at approved institutions. Full-time during vacations." },
    ]}
    costs={[
      { label: "Tuition (Undergraduate)", value: "S$15,000 – S$40,000/year" },
      { label: "Tuition (Postgraduate)", value: "S$20,000 – S$60,000/year" },
      { label: "Accommodation", value: "S$500 – S$1,500/month" },
      { label: "Food", value: "S$300 – S$500/month" },
      { label: "Transport", value: "S$50 – S$120/month" },
      { label: "Health Insurance", value: "S$200 – S$500/year" },
    ]}
    highlights={[
      "Top 15 global universities",
      "English-medium education",
      "Asia-Pacific business hub",
      "Safest country globally",
      "Multicultural environment",
      "Strong career prospects",
    ]}
    jobInfo={[
      { title: "Part-Time During Studies", desc: "Work up to 16 hours/week at approved institutions during term. Full-time during official vacation periods." },
      { title: "Post-Study Work", desc: "Graduates can apply for a 1-year Long Term Visit Pass (LTVP) to seek employment. High employability with Singapore degrees." },
      { title: "Key Industries", desc: "Finance, tech, biomedical sciences, logistics, and engineering. Global companies like Google, Facebook, and Goldman Sachs have offices here." },
      { title: "Average Graduate Salary", desc: "NUS/NTU graduates earn S$3,500–S$5,000/month starting salary. Tech roles command S$4,500–S$8,000+/month." },
    ]}
    applicationSteps={[
      { step: "1", title: "Research Programs", desc: "Explore NUS, NTU, SMU, and other institutions. Check program requirements and scholarship opportunities." },
      { step: "2", title: "Prepare Documents", desc: "Academic transcripts, IELTS/TOEFL scores, CV, personal statement, and reference letters. GRE/GMAT for some programs." },
      { step: "3", title: "Submit Application", desc: "Apply directly through university portals. Deadlines vary: typically November–March for August intake." },
      { step: "4", title: "Accept Offer & Apply Student Pass", desc: "Accept your offer and apply for Student Pass through ICA's SOLAR system. Processing takes 2–4 weeks." },
      { step: "5", title: "Arrange Accommodation", desc: "Apply for on-campus housing (limited spots) or find off-campus accommodation. Book early." },
      { step: "6", title: "Arrival & Registration", desc: "Complete In-Principle Approval, attend medical exam, collect Student Pass card, and begin orientation." },
    ]}
    testimonials={[
      { name: "Deepa Menon", course: "MSc Business Analytics", university: "NUS", text: "NUS's analytics program is outstanding. The Singapore ecosystem — with its tech companies and startups — provided amazing internship opportunities." },
      { name: "Li Wei", course: "MBA", university: "NTU", text: "Singapore is the gateway to Asia's business world. NTU's MBA network spans the entire ASEAN region and beyond." },
      { name: "Arjun Patel", course: "BSc Computer Science", university: "SMU", text: "SMU's city campus in the heart of Singapore's financial district gave me unparalleled access to industry mentors and networking events." },
    ]}
    faqs={[
      { q: "Is Singapore expensive?", a: "Tuition is moderate by global standards but living costs can be high (S$1,200–S$1,800/month). Hawker centers offer affordable food (S$3–5/meal), and public transport is efficient and cheap." },
      { q: "Can I work while studying?", a: "Yes, up to 16 hours/week during term at approved institutions. Full-time work is permitted during vacations." },
      { q: "What language is used?", a: "English is the medium of instruction and business language. Singapore is multilingual with Mandarin, Malay, and Tamil also widely spoken." },
      { q: "How safe is Singapore?", a: "Singapore is one of the safest countries in the world with extremely low crime rates. It's consistently ranked #1 or #2 globally for safety." },
      { q: "What are my career prospects?", a: "Excellent! NUS and NTU graduates have 90%+ employment rates within 6 months. Singapore's global business hub status means strong demand for skilled professionals." },
    ]}
    scholarships={[
      { name: "MOE Tuition Grant", desc: "Singapore government subsidy covering up to 50% of tuition for international students. Requires 3-year post-graduation work commitment." },
      { name: "NUS/NTU Scholarships", desc: "Full or partial scholarships for outstanding students based on academic merit and leadership potential." },
      { name: "ASEAN Scholarships", desc: "For students from ASEAN countries, covering tuition and living allowance at Singapore universities." },
      { name: "A*STAR Graduate Scholarships", desc: "Fully-funded PhD scholarships for research in biomedical sciences, engineering, and physical sciences." },
      { name: "Singapore International Graduate Award", desc: "Full PhD funding including tuition, monthly stipend, and conference travel allowances." },
    ]}
  />
);

export default Singapore;
