import { GraduationCap, Clock, Briefcase, Home } from "lucide-react";
import CountryPageLayout from "@/components/CountryPageLayout";
import heroImg from "@/assets/countries/uk-hero.jpg";

const UK = () => (
  <CountryPageLayout
    name="United Kingdom"
    flag="🇬🇧"
    heroImage={heroImg}
    tagline="World-class universities, rich cultural heritage, and excellent post-study work opportunities await you in the UK."
    description="The United Kingdom is home to some of the oldest and most prestigious universities in the world. With a globally recognized education system, diverse student communities, and a 2-year post-study work visa (Graduate Route), the UK remains one of the most sought-after destinations for international students. Over 600,000 international students choose the UK every year for its unmatched academic tradition and vibrant campus life."
    whyStudy={[
      "Globally recognized degrees valued by employers worldwide — a UK degree opens doors in any country.",
      "1-year Master's programs save both time and money compared to 2-year programs in other countries.",
      "The Graduate Route visa allows you to stay and work for 2 years after graduation without a sponsor.",
      "Multicultural environment with students from 200+ countries — build a truly global network.",
      "Access to world-leading research facilities, libraries, and innovation hubs across every discipline.",
      "Strong part-time work rights — work up to 20 hours/week during term and full-time during holidays.",
    ]}
    stats={[
      { icon: GraduationCap, label: "Top Universities", value: "150+" },
      { icon: Clock, label: "Degree Duration", value: "1–3 Years" },
      { icon: Briefcase, label: "Post-Study Work", value: "2 Years" },
      { icon: Home, label: "Avg Living Cost", value: "£1,000/mo" },
    ]}
    universities={[
      { name: "University of Oxford", ranking: "QS Rank: #3", specialty: "Humanities, Sciences, Law, Medicine — one of the oldest universities in the world with 900+ years of history." },
      { name: "University of Cambridge", ranking: "QS Rank: #5", specialty: "Engineering, Natural Sciences, Mathematics — renowned for Nobel Prize-winning research excellence." },
      { name: "Imperial College London", ranking: "QS Rank: #6", specialty: "Engineering, Business, Medicine — London's top choice for STEM with 93% graduate employment." },
      { name: "University College London", ranking: "QS Rank: #9", specialty: "Arts, Social Sciences, Architecture — London's leading multidisciplinary university in Bloomsbury." },
      { name: "University of Edinburgh", ranking: "QS Rank: #22", specialty: "AI, Medicine, Informatics — Scotland's premier research university with a stunning historic campus." },
      { name: "University of Manchester", ranking: "QS Rank: #32", specialty: "Business, Engineering, Life Sciences — strong industry connections and the largest student community in UK." },
    ]}
    visaRequirements={[
      { title: "Student Visa (Tier 4)", desc: "You need a Confirmation of Acceptance for Studies (CAS) from a licensed UK institution, proof of English proficiency (IELTS 6.0+), and financial evidence showing you can support yourself." },
      { title: "Financial Requirements", desc: "Show £1,334/month (London) or £1,023/month (outside London) for living costs, plus full tuition fees for the first year. Funds must be held for 28 consecutive days." },
      { title: "English Language Proof", desc: "IELTS Academic (6.0–7.0), TOEFL iBT, or PTE Academic scores are accepted. Some universities offer pre-sessional English courses if you fall slightly below requirements." },
      { title: "Health Surcharge (IHS)", desc: "Pay the Immigration Health Surcharge (£470/year) to access NHS healthcare during your stay — covering GP visits, hospital treatment, and prescriptions." },
      { title: "Graduate Route Visa", desc: "After completing your degree, apply for the 2-year Graduate Route visa (3 years for PhD) to work in the UK in any role without needing employer sponsorship." },
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
      "1-year Master's programs",
      "2-year Graduate Route visa",
      "Part-time work: 20 hrs/week",
      "Multicultural communities",
      "Chevening Scholarships",
    ]}
    jobInfo={[
      { title: "Part-Time During Studies", desc: "Work up to 20 hours/week during term and full-time during holidays in retail, hospitality, tutoring, and more. Average student earnings are £10–£15/hour." },
      { title: "Graduate Route Visa", desc: "Stay and work for 2 years (3 for PhD) after graduation without needing employer sponsorship. Switch to a Skilled Worker visa to stay longer." },
      { title: "High-Demand Industries", desc: "Finance (London is the world's financial capital), tech, healthcare, engineering, and consulting offer strong career prospects and competitive salaries." },
      { title: "Average Graduate Salary", desc: "UK graduates earn £25,000–£35,000/year on average, with London roles often paying £35,000–£50,000+ in tech and finance." },
    ]}
    applicationSteps={[
      { step: "1", title: "Research & Shortlist Universities", desc: "Explore UK universities based on your field of study, budget, location preference, and career goals. Consider Russell Group universities for research-intensive programs." },
      { step: "2", title: "Prepare for IELTS/English Tests", desc: "Most UK universities require IELTS Academic with a minimum of 6.0–7.0. Start preparation 3–6 months before your intended intake." },
      { step: "3", title: "Submit Applications via UCAS", desc: "For undergraduate programs, apply through UCAS (up to 5 choices). Postgraduate applications are typically submitted directly to the university." },
      { step: "4", title: "Receive Offer & Accept CAS", desc: "Once you receive a conditional or unconditional offer, accept it and receive your Confirmation of Acceptance for Studies (CAS) number." },
      { step: "5", title: "Apply for Student Visa", desc: "Submit your visa application online, pay the IHS surcharge, attend a biometrics appointment, and provide financial documents. Processing takes 3–4 weeks." },
      { step: "6", title: "Pre-Departure & Arrival", desc: "Book accommodation, arrange airport pickup, attend pre-departure orientations, and register with the university upon arrival." },
    ]}
    testimonials={[
      { name: "Priya Sharma", course: "MSc Data Science", university: "University of Edinburgh", text: "The 1-year Master's program was intense but incredibly rewarding. Edinburgh's tech ecosystem helped me land a data analyst role even before graduation." },
      { name: "Ahmed Hassan", course: "MBA", university: "Imperial College London", text: "Imperial's MBA program transformed my career. The London network, industry connections, and career support are world-class. I'm now working at a top consulting firm." },
      { name: "Sneha Patel", course: "LLM International Law", university: "University of Oxford", text: "Studying at Oxford was a dream come true. The tutorial system, centuries of academic tradition, and brilliant peers pushed me to excel beyond my expectations." },
    ]}
    faqs={[
      { q: "How long does it take to get a UK student visa?", a: "The standard processing time is 3–4 weeks from your biometrics appointment. Priority service (5–7 working days) is available for an additional fee. Apply at least 6 weeks before your course starts." },
      { q: "Can I work while studying in the UK?", a: "Yes! International students on a Tier 4 visa can work up to 20 hours per week during term time and full-time during holidays. This helps cover living expenses and build UK work experience." },
      { q: "What is the Graduate Route visa?", a: "The Graduate Route allows you to stay in the UK for 2 years (3 for PhD) after completing your degree to work or look for work. No employer sponsorship is needed, and there are no minimum salary requirements." },
      { q: "How much does it cost to study in the UK?", a: "Tuition fees range from £10,000–£45,000/year depending on the program. Living costs average £12,000–£15,000/year (more in London). Scholarships and part-time work can significantly offset these costs." },
      { q: "Are UK degrees recognized worldwide?", a: "Absolutely! UK degrees are recognized and highly valued by employers and institutions globally. The UK has a long-standing reputation for academic excellence, and many UK universities rank among the world's top 100." },
      { q: "What scholarships are available for international students?", a: "Major scholarships include Chevening (fully funded), Commonwealth Scholarships, GREAT Scholarships, and university-specific awards. Many cover full tuition, living expenses, and flights." },
    ]}
    scholarships={[
      { name: "Chevening Scholarships", desc: "Fully funded by the UK government covering tuition, living expenses, flights, and visa. For Master's students demonstrating leadership potential." },
      { name: "Commonwealth Scholarships", desc: "For students from Commonwealth countries. Covers tuition, living allowance, airfare, and thesis grant for Master's and PhD programs." },
      { name: "GREAT Scholarships", desc: "Joint initiative by the British Council and UK universities offering £10,000 towards tuition for students from select countries." },
      { name: "Gates Cambridge Scholarships", desc: "Full-cost scholarship at the University of Cambridge for outstanding applicants from outside the UK pursuing any subject." },
      { name: "Clarendon Scholarships (Oxford)", desc: "Oxford's prestigious scholarship covering tuition and generous living expenses. Awarded based on academic excellence and potential." },
      { name: "University-Specific Awards", desc: "Most UK universities offer their own merit-based and need-based scholarships ranging from £1,000 to full tuition waivers." },
    ]}
  />
);

export default UK;
