import { GraduationCap, Clock, Briefcase, Home } from "lucide-react";
import CountryPageLayout from "@/components/CountryPageLayout";
import heroImg from "@/assets/countries/germany-hero.jpg";

const Germany = () => (
  <CountryPageLayout
    name="Germany"
    flag="🇩🇪"
    tagline="Study in Europe's economic powerhouse with tuition-free public universities and world-class engineering programs."
    description="Germany is one of the most popular study destinations for international students, offering tuition-free education at public universities, a strong job market, and an 18-month post-study work visa. With over 400,000 international students, Germany's research-driven education system and thriving economy make it ideal for STEM, business, and medical studies. All our services are provided 100% remotely & online."
    whyStudy={[
      "Tuition-free education at most public universities — only a small semester fee of €150–€350.",
      "18-month post-study work visa to find employment in Germany after graduation.",
      "Europe's largest economy with strong demand for skilled professionals in engineering, IT, and healthcare.",
      "Over 1,800 English-taught programs available across German universities.",
      "Excellent quality of life with affordable cost of living compared to UK/USA.",
      "Schengen visa allows easy travel across 27 European countries during studies.",
    ]}
    stats={[
      { icon: GraduationCap, label: "Universities", value: "400+" },
      { icon: Clock, label: "Degree Duration", value: "2–4 Years" },
      { icon: Briefcase, label: "Post-Study Work", value: "18 Months" },
      { icon: Home, label: "Avg Living Cost", value: "€850/mo" },
    ]}
    universities={[
      { name: "Technical University of Munich", ranking: "QS Rank: #37", specialty: "Engineering, Computer Science, Natural Sciences — Germany's top technical university." },
      { name: "Ludwig Maximilian University", ranking: "QS Rank: #54", specialty: "Medicine, Law, Humanities — Munich's prestigious research university." },
      { name: "Heidelberg University", ranking: "QS Rank: #65", specialty: "Medicine, Sciences, Philosophy — Germany's oldest university (est. 1386)." },
      { name: "Humboldt University Berlin", ranking: "QS Rank: #120", specialty: "Arts, Social Sciences, Natural Sciences — Berlin's historic research university." },
      { name: "RWTH Aachen University", ranking: "QS Rank: #106", specialty: "Engineering, Technology — Europe's leading technical university." },
      { name: "Free University of Berlin", ranking: "QS Rank: #118", specialty: "Political Science, Social Sciences, Humanities — strong international focus." },
    ]}
    visaRequirements={[
      { title: "Student Visa (National Visa)", desc: "Apply for a German student visa at the German embassy. You need a university admission letter, proof of financial resources (€11,208/year in a blocked account), and health insurance." },
      { title: "Blocked Account", desc: "Open a blocked account (Sperrkonto) with €11,208 to prove you can support yourself. You can withdraw ~€934/month for living expenses." },
      { title: "Health Insurance", desc: "Mandatory health insurance is required. Public insurance costs ~€110/month for students under 30. Private options are also available." },
      { title: "Language Requirements", desc: "German-taught programs require TestDaF or DSH certification. English-taught programs accept IELTS (6.0–6.5) or TOEFL." },
      { title: "Post-Study Work Visa", desc: "After graduation, stay for 18 months to find a job related to your field of study. Convert to an EU Blue Card for long-term residence." },
    ]}
    costs={[
      { label: "Tuition (Public)", value: "€0 – €300/semester" },
      { label: "Tuition (Private)", value: "€5,000 – €20,000/year" },
      { label: "Accommodation", value: "€300 – €700/month" },
      { label: "Food & Groceries", value: "€200 – €300/month" },
      { label: "Transport (Semester Ticket)", value: "Included in fees" },
      { label: "Health Insurance", value: "€110/month" },
    ]}
    highlights={[
      "Tuition-free public universities",
      "18-month post-study work visa",
      "1,800+ English-taught programs",
      "Part-time work: 20 hrs/week",
      "Schengen travel access",
      "DAAD Scholarships",
    ]}
    jobInfo={[
      { title: "Part-Time During Studies", desc: "Work up to 20 hours/week or 120 full days/year. Student jobs pay €12–€15/hour minimum wage." },
      { title: "Post-Study Work Visa", desc: "18-month job search visa after graduation. Germany's strong economy means high demand in engineering, IT, and manufacturing." },
      { title: "EU Blue Card", desc: "Qualify for the EU Blue Card with a job offer of €45,300+/year (€39,682 for STEM). Pathway to permanent residency." },
      { title: "Average Graduate Salary", desc: "German graduates earn €40,000–€55,000/year, with engineering and IT roles often paying €50,000–€70,000+." },
    ]}
    applicationSteps={[
      { step: "1", title: "Research Universities & Programs", desc: "Use DAAD and uni-assist to find programs matching your profile. Check if programs are in English or German." },
      { step: "2", title: "Prepare Language Certificates", desc: "Take TestDaF/DSH for German programs or IELTS/TOEFL for English-taught courses. Start 6 months early." },
      { step: "3", title: "Submit Applications via uni-assist", desc: "Most universities require applications through uni-assist. Some accept direct applications. Deadlines: July 15 (winter) / January 15 (summer)." },
      { step: "4", title: "Receive Admission & Open Blocked Account", desc: "Accept your offer, open a Sperrkonto with €11,208, and arrange health insurance." },
      { step: "5", title: "Apply for Student Visa", desc: "Submit visa application at the German embassy with admission letter, blocked account proof, and health insurance. Processing: 6–12 weeks." },
      { step: "6", title: "Pre-Departure & Arrival", desc: "Book accommodation (Studentenwerk or private), attend orientation, and register at the city's Bürgeramt upon arrival." },
    ]}
    testimonials={[
      { name: "Rahul Verma", course: "MSc Mechanical Engineering", university: "TU Munich", text: "Studying in Germany tuition-free was a game-changer. The quality of education at TUM is world-class, and I landed a job at BMW before graduating." },
      { name: "Ananya Krishnan", course: "MSc Data Science", university: "RWTH Aachen", text: "Germany's tech scene is incredible. The 18-month post-study visa gave me time to find the perfect role at a leading AI startup in Berlin." },
      { name: "Mohammed Ali", course: "MBA", university: "Mannheim Business School", text: "The combination of affordable education and Europe's strongest economy made Germany the obvious choice. My MBA cost a fraction of what it would in the US." },
    ]}
    faqs={[
      { q: "Is education really free in Germany?", a: "Yes! Most public universities charge only a small semester fee (€150–€350) covering admin costs and a public transport pass. Private universities do charge tuition (€5,000–€20,000/year)." },
      { q: "Do I need to know German?", a: "Not necessarily. There are 1,800+ English-taught programs. However, basic German (A1–B1) helps with daily life and significantly improves job prospects." },
      { q: "How much money do I need for the blocked account?", a: "You need €11,208 in a blocked account (Sperrkonto). This proves you can support yourself for one year. You can withdraw ~€934/month." },
      { q: "Can I work while studying?", a: "Yes! International students can work 20 hours/week during term or 120 full days/year. Student jobs typically pay €12–€15/hour." },
      { q: "What are my chances of staying after graduation?", a: "Germany offers an 18-month post-study work visa. With the EU Blue Card program and Germany's skilled worker shortage, staying permanently is very achievable." },
      { q: "What scholarships are available?", a: "DAAD (German Academic Exchange Service) offers numerous scholarships. Erasmus+, Heinrich Böll Foundation, and university-specific awards are also available." },
    ]}
    scholarships={[
      { name: "DAAD Scholarships", desc: "Germany's largest scholarship organization offering full funding for Master's and PhD students from developing countries." },
      { name: "Erasmus+ Scholarships", desc: "EU-funded mobility program covering tuition and living costs for students studying in Germany as part of European exchange." },
      { name: "Heinrich Böll Foundation", desc: "Scholarships for students committed to ecology, sustainability, and social justice. Covers living costs and tuition." },
      { name: "Deutschlandstipendium", desc: "Merit-based scholarship of €300/month available at all German universities, funded jointly by government and private donors." },
      { name: "Konrad Adenauer Foundation", desc: "Full scholarships for international students with excellent academic records and social engagement." },
      { name: "University-Specific Awards", desc: "TU Munich, LMU, Heidelberg, and others offer their own merit-based scholarships for international students." },
    ]}
  />
);

export default Germany;
