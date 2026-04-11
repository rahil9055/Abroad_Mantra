import { GraduationCap, Clock, Briefcase, Home } from "lucide-react";
import CountryPageLayout from "@/components/CountryPageLayout";
import heroImg from "@/assets/countries/china-hero.jpg";

const China = () => (
  <CountryPageLayout
    name="China"
    heroImage={heroImg}
    flag="🇨🇳"
    tagline="World-class STEM programs, generous CSC scholarships, and Asia's largest economy await you."
    description="China has become one of the top study destinations globally, offering generous scholarships through the Chinese Scholarship Council (CSC), world-class STEM and medical programs, and unparalleled exposure to the world's second-largest economy. With 3,000+ universities and rapidly climbing global rankings, China is the future of higher education. All our services are provided 100% remotely & online."
    whyStudy={[
      "CSC Scholarships — fully-funded government scholarships covering tuition, accommodation, stipend, and insurance.",
      "World-class STEM programs with rapidly climbing global university rankings.",
      "Affordable tuition (€2,000–€10,000/year) and low cost of living outside major cities.",
      "Exposure to the world's second-largest economy and booming tech sector.",
      "Chinese language skills are increasingly valuable in the global job market.",
      "Modern campuses with state-of-the-art facilities and research centers.",
    ]}
    stats={[
      { icon: GraduationCap, label: "Universities", value: "3,000+" },
      { icon: Clock, label: "Degree Duration", value: "2–5 Years" },
      { icon: Briefcase, label: "Economy Rank", value: "#2 World" },
      { icon: Home, label: "Avg Living Cost", value: "€400/mo" },
    ]}
    universities={[
      { name: "Tsinghua University", ranking: "QS Rank: #20", specialty: "Engineering, Computer Science, Sciences — China's MIT, consistently Asia's top university." },
      { name: "Peking University", ranking: "QS Rank: #17", specialty: "Humanities, Sciences, Medicine — China's most prestigious university with 125+ years of history." },
      { name: "Fudan University", ranking: "QS Rank: #39", specialty: "Business, Social Sciences, Medicine — Shanghai's leading comprehensive university." },
      { name: "Zhejiang University", ranking: "QS Rank: #44", specialty: "Engineering, Agriculture, Sciences — Hangzhou's top research institution." },
      { name: "Shanghai Jiao Tong University", ranking: "QS Rank: #45", specialty: "Engineering, Medicine, Business — strong industry partnerships." },
      { name: "University of Science & Technology of China", ranking: "QS Rank: #137", specialty: "Physics, Chemistry, Engineering — China's top pure science institution." },
    ]}
    visaRequirements={[
      { title: "X1 Visa (Long-term Study)", desc: "Required for programs over 180 days. Apply with admission notice (JW201/JW202), visa application form, and medical examination record." },
      { title: "X2 Visa (Short-term Study)", desc: "For programs under 180 days. Simpler application process with admission letter and passport." },
      { title: "Medical Examination", desc: "Complete the Physical Examination Record for Foreigners at a designated hospital. Required for X1 visa and university registration." },
      { title: "Residence Permit", desc: "Convert X1 visa to a residence permit within 30 days of arrival. Valid for the duration of your program." },
      { title: "Financial Proof", desc: "Show proof of funds (€5,000–€8,000/year for self-funded students). CSC scholarship holders are exempt." },
    ]}
    costs={[
      { label: "Tuition (Undergraduate)", value: "€2,000 – €5,000/year" },
      { label: "Tuition (Postgraduate)", value: "€3,000 – €10,000/year" },
      { label: "Accommodation", value: "€100 – €400/month" },
      { label: "Food", value: "€100 – €250/month" },
      { label: "Transport", value: "€15 – €40/month" },
      { label: "Health Insurance", value: "€80 – €150/year" },
    ]}
    highlights={[
      "CSC fully-funded scholarships",
      "Top 50 global universities",
      "English-taught MBBS programs",
      "Low cost of living",
      "Mandarin language skills",
      "Tech & innovation hub",
    ]}
    jobInfo={[
      { title: "Part-Time Work", desc: "Part-time work requires employer sponsorship and university approval. Internships at Chinese companies provide valuable experience." },
      { title: "Post-Study Opportunities", desc: "Graduates with Mandarin skills and Chinese market knowledge are highly sought after by multinational companies globally." },
      { title: "Booming Sectors", desc: "Tech (Alibaba, Tencent, ByteDance), manufacturing, healthcare, finance, and green energy offer diverse career paths." },
      { title: "Global Career Advantage", desc: "Understanding China's business culture and language gives graduates a competitive edge in the global job market." },
    ]}
    applicationSteps={[
      { step: "1", title: "Research Programs & Scholarships", desc: "Explore CSC scholarships (deadline: January–April) and university programs. Use the CUCAS platform for direct applications." },
      { step: "2", title: "Prepare Documents", desc: "Academic transcripts, passport, study plan, reference letters, and language certificates (HSK for Chinese-taught, IELTS for English-taught)." },
      { step: "3", title: "Apply for CSC or Direct Admission", desc: "Submit CSC scholarship application online, or apply directly to universities. Include all required supporting documents." },
      { step: "4", title: "Receive Admission Notice", desc: "Successful applicants receive JW201/JW202 form and admission notice. CSC results announced in June–July." },
      { step: "5", title: "Apply for Visa & Medical Exam", desc: "Apply for X1 visa with admission documents. Complete the physical examination at a designated hospital." },
      { step: "6", title: "Arrival & Registration", desc: "Register at university, convert visa to residence permit within 30 days, and attend orientation." },
    ]}
    testimonials={[
      { name: "Aisha Mohammed", course: "MBBS", university: "Fudan University", text: "The CSC scholarship covered everything — I'm getting a world-class medical education completely free. Shanghai is an amazing city to live and study in." },
      { name: "Vikram Reddy", course: "MSc Computer Science", university: "Tsinghua University", text: "Tsinghua's CS program rivals MIT and Stanford. The exposure to China's tech ecosystem — Alibaba, ByteDance — has been invaluable for my career." },
      { name: "Fatima Al-Rashid", course: "MBA", university: "Peking University", text: "Understanding China's business landscape from inside is a career superpower. PKU's global network and industry connections are incredible." },
    ]}
    faqs={[
      { q: "What are CSC Scholarships?", a: "Chinese Scholarship Council offers fully-funded scholarships covering tuition, accommodation, monthly stipend (€400–€500 for Master's), medical insurance, and sometimes flights." },
      { q: "Do I need to learn Chinese?", a: "Not for English-taught programs. However, most CSC scholarships include a 1-year Chinese language prep. Basic Chinese greatly helps with daily life." },
      { q: "Is China safe for international students?", a: "China is one of the safest countries globally with extremely low crime rates. Universities have dedicated international student offices for support." },
      { q: "How is the MBBS program structured?", a: "English-taught MBBS is 6 years (5+1 internship). Programs are WHO-listed and graduates can appear for licensing exams (USMLE, PLAB, NMC) globally." },
      { q: "What's the cost of living in China?", a: "Very affordable! €300–€500/month outside Beijing/Shanghai. University dormitories cost €50–€150/month. Street food is cheap and delicious." },
    ]}
    scholarships={[
      { name: "CSC Scholarships", desc: "China's flagship fully-funded program: tuition, accommodation, stipend (€400–€500/month for Master's), and medical insurance." },
      { name: "Provincial Government Scholarships", desc: "Regional scholarships from provinces like Beijing, Shanghai, and Zhejiang covering partial or full tuition." },
      { name: "University Scholarships", desc: "Tsinghua, Peking, Fudan, and others offer merit-based scholarships with tuition waivers and stipends." },
      { name: "Confucius Institute Scholarships", desc: "For students studying Chinese language and culture. Covers tuition, accommodation, and living allowance." },
      { name: "Belt & Road Scholarships", desc: "Special scholarships for students from Belt & Road Initiative partner countries, with priority for STEM fields." },
    ]}
  />
);

export default China;
