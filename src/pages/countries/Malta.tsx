import { GraduationCap, Clock, Briefcase, Home } from "lucide-react";
import CountryPageLayout from "@/components/CountryPageLayout";
import heroImg from "@/assets/countries/malta-hero.jpg";

const Malta = () => (
  <CountryPageLayout
    name="Malta"
    heroImage={heroImg}
    flag="🇲🇹"
    tagline="Study in an English-speaking EU island nation with affordable tuition and a Mediterranean lifestyle."
    description="Malta is an emerging study destination offering English-medium education, EU recognition, affordable living, and a vibrant multicultural environment. With its strategic location, strong gaming and fintech industries, and welcoming culture, Malta attracts students from over 90 countries. All our services are provided 100% remotely & online."
    whyStudy={[
      "English is an official language — all programs taught in English, no language barrier.",
      "EU-recognized degrees accepted worldwide with Bologna Process compliance.",
      "Affordable tuition (€5,000–€12,000/year) and low cost of living compared to Western Europe.",
      "Safe, sunny Mediterranean island with 300+ days of sunshine per year.",
      "Growing industries in gaming, fintech, AI, and tourism create strong job prospects.",
      "Schengen visa allows travel across 27 European countries during your studies.",
    ]}
    stats={[
      { icon: GraduationCap, label: "Universities", value: "10+" },
      { icon: Clock, label: "Degree Duration", value: "1–3 Years" },
      { icon: Briefcase, label: "Post-Study Work", value: "1 Year" },
      { icon: Home, label: "Avg Living Cost", value: "€700/mo" },
    ]}
    universities={[
      { name: "University of Malta", ranking: "Est. 1769", specialty: "Arts, Sciences, Engineering, Medicine — Malta's oldest and largest university." },
      { name: "MCAST", ranking: "Top Vocational", specialty: "Applied Sciences, IT, Creative Arts — Malta's leading vocational institution." },
      { name: "St Martin's Institute", ranking: "UK Partnership", specialty: "Business, IT, Education — programs validated by University of London." },
      { name: "Global College Malta", ranking: "International Focus", specialty: "Business, Hospitality — international student-focused programs." },
      { name: "AUM (American University of Malta)", ranking: "US-style", specialty: "Engineering, Business, Sciences — American-style education in Europe." },
      { name: "London School of Commerce Malta", ranking: "UK Partner", specialty: "MBA, Business Management — UK-accredited programs in Malta." },
    ]}
    visaRequirements={[
      { title: "Student Visa", desc: "Non-EU students need a student visa. Apply with acceptance letter, proof of funds (€6,000–€8,000/year), health insurance, and accommodation proof." },
      { title: "Financial Requirements", desc: "Show €500–€700/month for living expenses plus full tuition. Bank statements from the last 6 months are required." },
      { title: "Health Insurance", desc: "Comprehensive health insurance is mandatory. EU students can use EHIC card; non-EU students need private insurance." },
      { title: "Language Requirements", desc: "IELTS 6.0+ or equivalent for most programs. Some universities offer their own English proficiency tests." },
      { title: "Post-Study Options", desc: "Graduates can apply for a 1-year job search visa. Malta's growing economy offers opportunities in gaming, fintech, and tourism." },
    ]}
    costs={[
      { label: "Tuition (Undergraduate)", value: "€5,000 – €10,000/year" },
      { label: "Tuition (Postgraduate)", value: "€7,000 – €15,000/year" },
      { label: "Accommodation", value: "€300 – €600/month" },
      { label: "Food & Groceries", value: "€200 – €300/month" },
      { label: "Transport", value: "€25 – €50/month" },
      { label: "Health Insurance", value: "€150 – €300/year" },
    ]}
    highlights={[
      "English-medium education",
      "EU-recognized degrees",
      "Affordable living costs",
      "300+ days of sunshine",
      "Growing tech & gaming hub",
      "Schengen travel access",
    ]}
    jobInfo={[
      { title: "Part-Time During Studies", desc: "International students can work up to 20 hours/week during term time. Jobs in hospitality, retail, and tourism are readily available." },
      { title: "Post-Study Work", desc: "Graduates can stay for 1 year to find employment. Malta's booming iGaming and fintech sectors actively recruit international talent." },
      { title: "Key Industries", desc: "iGaming, fintech, tourism, maritime, aviation, and pharmaceutical industries drive Malta's economy and offer diverse career paths." },
      { title: "Average Graduate Salary", desc: "Graduates earn €20,000–€35,000/year, with tech and gaming roles often paying €30,000–€50,000+." },
    ]}
    applicationSteps={[
      { step: "1", title: "Choose University & Program", desc: "Research Malta's universities and English-taught programs. Consider your budget, career goals, and preferred lifestyle." },
      { step: "2", title: "Prepare Documents", desc: "Gather academic transcripts, IELTS scores, CV, personal statement, and passport copies." },
      { step: "3", title: "Submit Application", desc: "Apply directly to your chosen university. Most have rolling admissions with deadlines in June–August for September intake." },
      { step: "4", title: "Receive Offer & Pay Deposit", desc: "Accept your offer and pay the required tuition deposit to secure your place." },
      { step: "5", title: "Apply for Visa", desc: "Submit visa application with acceptance letter, proof of funds, insurance, and accommodation. Processing takes 4–8 weeks." },
      { step: "6", title: "Arrive & Register", desc: "Book accommodation, attend orientation, and register with Malta's Identity Agency upon arrival." },
    ]}
    testimonials={[
      { name: "Sarah Patel", course: "MSc Blockchain & DLT", university: "University of Malta", text: "Malta's blockchain ecosystem is incredible. Studying here gave me direct access to the industry leaders and I landed a role at a leading fintech company." },
      { name: "David Okonkwo", course: "BSc Computer Science", university: "AUM", text: "The affordable tuition and English-medium education made Malta perfect. The island lifestyle is a bonus — beach after lectures!" },
      { name: "Priya Nair", course: "MBA", university: "London School of Commerce Malta", text: "Getting a UK-accredited degree while living in sunny Malta was the best decision. The networking opportunities in the gaming industry are unmatched." },
    ]}
    faqs={[
      { q: "Is Malta a good place to study?", a: "Absolutely! Malta offers English-medium EU-recognized education, affordable costs, a safe environment, and growing job opportunities in tech and gaming sectors." },
      { q: "What language is used in Malta?", a: "English and Maltese are both official languages. All university programs are taught in English, so there's no language barrier for international students." },
      { q: "How much does it cost to study in Malta?", a: "Tuition ranges from €5,000–€15,000/year. Living costs average €700/month. Total annual budget of €13,000–€25,000 makes it one of Europe's most affordable destinations." },
      { q: "Can I work while studying?", a: "Yes! Non-EU students can work up to 20 hours/week with a valid work permit. EU students have no restrictions on working hours." },
      { q: "What are the job prospects after graduation?", a: "Malta's iGaming, fintech, and tech sectors are booming. The 1-year post-study visa gives graduates time to find employment in these growing industries." },
    ]}
    scholarships={[
      { name: "Malta Government Scholarships", desc: "Merit-based scholarships for international students covering partial tuition at public institutions." },
      { name: "Endeavour Scholarships (Malta)", desc: "Government-funded scheme supporting Master's and PhD research in priority areas." },
      { name: "University of Malta Awards", desc: "Academic excellence awards and bursaries for undergraduate and postgraduate international students." },
      { name: "Commonwealth Scholarships", desc: "Available to students from Commonwealth countries, covering tuition and living costs." },
      { name: "Erasmus+ Funding", desc: "EU-funded mobility grants for students choosing Malta as part of European exchange programs." },
    ]}
  />
);

export default Malta;
