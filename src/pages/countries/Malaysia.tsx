import { GraduationCap, Clock, Briefcase, Home } from "lucide-react";
import CountryPageLayout from "@/components/CountryPageLayout";
import heroImg from "@/assets/countries/malaysia-hero.jpg";

const Malaysia = () => (
  <CountryPageLayout
    name="Malaysia"
    flag="🇲🇾"
    tagline="Affordable world-class education in a multicultural paradise with growing tech opportunities."
    description="Malaysia is rapidly emerging as a top study destination in Asia, offering affordable tuition, English-medium education, and a rich multicultural experience. With campuses of top UK and Australian universities, world-class facilities, and a cost of living that's a fraction of Western countries, Malaysia gives you international quality at local prices. All our services are provided 100% remotely & online."
    whyStudy={[
      "Affordable tuition (€2,000–€8,000/year) with one of the lowest costs of living in Asia.",
      "Branch campuses of top international universities — Monash, Nottingham, Southampton, and more.",
      "English is widely spoken and used as the medium of instruction in most programs.",
      "Multicultural society with Malay, Chinese, Indian, and international communities.",
      "Growing tech and digital economy with strong startup ecosystem.",
      "Excellent food scene — Malaysia is often called the food capital of Asia.",
    ]}
    stats={[
      { icon: GraduationCap, label: "Universities", value: "100+" },
      { icon: Clock, label: "Degree Duration", value: "1–4 Years" },
      { icon: Briefcase, label: "Post-Study Work", value: "1 Year" },
      { icon: Home, label: "Avg Living Cost", value: "RM 1,500/mo" },
    ]}
    universities={[
      { name: "Universiti Malaya", ranking: "QS Rank: #60", specialty: "Engineering, Sciences, Arts — Malaysia's oldest and highest-ranked university." },
      { name: "Universiti Putra Malaysia", ranking: "QS Rank: #158", specialty: "Agriculture, Engineering, Sciences — strong research focus." },
      { name: "Monash University Malaysia", ranking: "QS Rank: #37 (Parent)", specialty: "Business, Engineering, Sciences — Australian degree on Malaysian campus." },
      { name: "University of Nottingham Malaysia", ranking: "QS Rank: #100 (Parent)", specialty: "Engineering, Sciences, Business — UK degree in Malaysia." },
      { name: "Taylor's University", ranking: "QS Rank: #284", specialty: "Hospitality, Business, Design — Malaysia's top private university." },
      { name: "UCSI University", ranking: "QS Rank: #300", specialty: "Music, Engineering, Medicine — diverse international programs." },
    ]}
    visaRequirements={[
      { title: "Student Pass", desc: "Apply through EMGS (Education Malaysia Global Services). Your university submits the application after admission. Processing takes 2–4 weeks." },
      { title: "Financial Requirements", desc: "Show proof of ability to cover tuition and living costs. Sponsorship letters from parents/guardians are accepted." },
      { title: "Medical Screening", desc: "Complete medical screening at an EMGS-approved panel clinic within 30 days of arrival." },
      { title: "Student Pass Validity", desc: "Valid for the duration of your program. Renewable annually upon confirmation from your university." },
      { title: "Single Entry Visa", desc: "For some nationalities, a Single Entry Visa (SEV) is needed to enter Malaysia before the Student Pass is issued." },
    ]}
    costs={[
      { label: "Tuition (Public)", value: "RM 8,000 – 25,000/year" },
      { label: "Tuition (Private/Branch)", value: "RM 20,000 – 50,000/year" },
      { label: "Accommodation", value: "RM 400 – 1,200/month" },
      { label: "Food", value: "RM 500 – 800/month" },
      { label: "Transport", value: "RM 50 – 150/month" },
      { label: "Health Insurance", value: "RM 500 – 1,000/year" },
    ]}
    highlights={[
      "International branch campuses",
      "English-medium education",
      "Very affordable living",
      "Multicultural experience",
      "Growing tech sector",
      "Amazing food culture",
    ]}
    jobInfo={[
      { title: "Part-Time During Studies", desc: "International students can work up to 20 hours/week during semester breaks with permission from immigration." },
      { title: "Post-Study Work", desc: "Graduates can apply for a 1-year work permit to seek employment. Growing demand in digital economy and tech." },
      { title: "Key Industries", desc: "Electronics manufacturing, palm oil, tourism, fintech, and digital economy. Malaysia is Southeast Asia's manufacturing hub." },
      { title: "Average Graduate Salary", desc: "Graduates earn RM 2,500–4,500/month (€500–€900). Tech and engineering roles command higher salaries." },
    ]}
    applicationSteps={[
      { step: "1", title: "Research Programs", desc: "Explore Malaysian universities including international branch campuses. Consider your budget and career goals." },
      { step: "2", title: "Prepare Documents", desc: "Academic transcripts, passport, IELTS/TOEFL scores, personal statement, and reference letters." },
      { step: "3", title: "Submit Application", desc: "Apply directly to universities. Most have rolling admissions with intakes in January, May, and September." },
      { step: "4", title: "Receive Offer & Pay Deposit", desc: "Accept your offer, pay the required tuition deposit, and receive your offer letter." },
      { step: "5", title: "Student Pass Application", desc: "University submits your Student Pass application through EMGS. Processing: 2–4 weeks." },
      { step: "6", title: "Arrival & Medical Screening", desc: "Arrive in Malaysia, complete medical screening at an approved clinic, and collect your Student Pass." },
    ]}
    testimonials={[
      { name: "Ravi Shankar", course: "BSc Computer Science", university: "Monash University Malaysia", text: "Getting an Australian degree at Malaysian prices was incredible. KL is an amazing city and the tech community here is thriving." },
      { name: "Zara Hussain", course: "MBA", university: "Taylor's University", text: "Taylor's business program gave me incredible exposure to the ASEAN market. The multicultural environment prepared me for a global career." },
      { name: "John Osei", course: "BEng Mechanical Engineering", university: "University of Nottingham Malaysia", text: "A UK degree at a fraction of the UK cost, plus Malaysian hospitality. The engineering labs and faculty are world-class." },
    ]}
    faqs={[
      { q: "Can I get a UK/Australian degree in Malaysia?", a: "Yes! Monash, Nottingham, Southampton, and other top universities have branch campuses in Malaysia. You get the same degree at 30–50% lower cost." },
      { q: "Is English widely spoken?", a: "Yes! English is widely used in business and education. Most programs are taught in English, and you can easily navigate daily life in English." },
      { q: "How affordable is Malaysia?", a: "Very affordable! Monthly living costs are RM 1,200–2,000 (€250–€400). Street food starts at RM 5 (€1), and rent is RM 400–800 (€80–€170) for shared accommodation." },
      { q: "Can I work part-time?", a: "Yes, during semester breaks with immigration permission, up to 20 hours/week. Working during term time is generally not permitted." },
      { q: "What's the weather like?", a: "Tropical climate with temperatures of 25–35°C year-round. Expect occasional rain showers. No winter — perfect if you prefer warm weather!" },
    ]}
    scholarships={[
      { name: "Malaysian International Scholarship (MIS)", desc: "Fully-funded government scholarship for postgraduate studies at Malaysian public universities." },
      { name: "Monash Malaysia Merit Scholarships", desc: "25–50% tuition waivers for high-achieving students at Monash University Malaysia campus." },
      { name: "Taylor's University Scholarships", desc: "Merit-based scholarships covering up to 100% tuition for outstanding academic performance." },
      { name: "UCSI Trust Scholarships", desc: "Need and merit-based scholarships for international students across various programs." },
      { name: "Commonwealth Scholarships", desc: "For students from Commonwealth countries, covering tuition and living costs at Malaysian universities." },
    ]}
  />
);

export default Malaysia;
