import { GraduationCap, Clock, Briefcase, Home } from "lucide-react";
import CountryPageLayout from "@/components/CountryPageLayout";
import heroImg from "@/assets/countries/australia-hero.jpg";

const Australia = () => (
  <CountryPageLayout
    name="Australia"
    flag="🇦🇺"
    heroImage={heroImg}
    tagline="Top-ranked universities, PR pathways, stunning lifestyle, and generous work rights make Australia a dream destination."
    description="Australia offers a perfect blend of world-class education and quality of life. With universities consistently ranked in the global top 100, generous post-study work rights (2–4 years), and clear pathways to permanent residency, Australia attracts over 750,000 international students annually. The country's warm climate, multicultural cities, and high safety standards make it one of the most livable places on Earth."
    whyStudy={[
      "7 of the world's top 100 universities with cutting-edge research facilities and industry partnerships.",
      "Post-study work visa of up to 4 years — one of the most generous globally for international graduates.",
      "Clear and structured pathways to Permanent Residency (PR) through skilled migration and state nominations.",
      "Part-time work rights of 48 hours per fortnight during term, with unlimited hours during breaks.",
      "High quality of life — ranked among the safest, most livable countries with stunning natural beauty.",
      "Multicultural society with one of the highest proportions of international students in the world.",
    ]}
    stats={[
      { icon: GraduationCap, label: "Top Universities", value: "43+" },
      { icon: Clock, label: "Degree Duration", value: "2–4 Years" },
      { icon: Briefcase, label: "Post-Study Work", value: "2–4 Years" },
      { icon: Home, label: "Avg Living Cost", value: "A$1,800/mo" },
    ]}
    universities={[
      { name: "University of Melbourne", ranking: "QS Rank: #14", specialty: "Business, Law, Medicine, Engineering — Australia's top-ranked university with a stunning Parkville campus." },
      { name: "University of Sydney", ranking: "QS Rank: #19", specialty: "Arts, Health Sciences, Engineering — iconic campus and strong global alumni network spanning 130+ countries." },
      { name: "UNSW Sydney", ranking: "QS Rank: #19", specialty: "Engineering, Business, Data Science — known for industry partnerships and entrepreneurship programs." },
      { name: "Australian National University", ranking: "QS Rank: #30", specialty: "Political Science, Astronomy, Law — located in the capital Canberra with close ties to government." },
      { name: "Monash University", ranking: "QS Rank: #37", specialty: "Pharmacy (#1 globally), Engineering, IT — Australia's largest university with campuses worldwide." },
      { name: "University of Queensland", ranking: "QS Rank: #40", specialty: "Biotech, Environmental Science, Business — beautiful riverside campus in Brisbane with world-class labs." },
    ]}
    visaRequirements={[
      { title: "Student Visa (Subclass 500)", desc: "Requires a CoE from a CRICOS-registered institution, Genuine Temporary Entrant (GTE) statement, financial capacity proof, and OSHC health insurance." },
      { title: "Financial Requirements", desc: "Demonstrate A$24,505/year for living costs plus tuition fees and travel costs. Bank statements, loan approval letters, or government-sponsored evidence accepted." },
      { title: "English Language Proof", desc: "IELTS Academic (6.0–6.5), TOEFL iBT (64–79), or PTE Academic (50–58) depending on the course. Some universities accept Duolingo English Test." },
      { title: "Health Insurance (OSHC)", desc: "Mandatory Overseas Student Health Cover for the entire visa duration. Costs around A$500–$600/year and covers doctor visits, hospital, and prescriptions." },
      { title: "Post-Study Work Visa (485)", desc: "Graduates can apply for a Temporary Graduate visa — 2 years for Bachelor's, 3 for Master's by coursework, 4 for Master's by research/PhD." },
    ]}
    costs={[
      { label: "Tuition (Undergraduate)", value: "A$20,000 – A$45,000/year" },
      { label: "Tuition (Postgraduate)", value: "A$22,000 – A$50,000/year" },
      { label: "Accommodation", value: "A$800 – A$1,500/month" },
      { label: "Food & Groceries", value: "A$300 – A$500/month" },
      { label: "Transport", value: "A$50 – A$100/month" },
      { label: "Health Insurance (OSHC)", value: "A$500 – A$600/year" },
    ]}
    highlights={[
      "7 of world's top 100 universities",
      "Post-study work up to 4 years",
      "PR pathways available",
      "48 hrs/fortnight work rights",
      "High safety & quality of life",
      "Australia Awards Scholarships",
    ]}
    jobInfo={[
      { title: "Part-Time During Studies", desc: "Work up to 48 hours per fortnight during term and unlimited hours during scheduled breaks. Average student wages are A$25–A$35/hour — among the highest globally." },
      { title: "Post-Study Work Visa (485)", desc: "Temporary Graduate Visa allows 2–4 years of full-time work after graduation based on qualification level. Regional graduates may get additional years." },
      { title: "PR Pathways", desc: "Skilled occupation lists, regional migration schemes, employer sponsorship, and state nomination programs offer multiple routes to permanent residency." },
      { title: "Average Graduate Salary", desc: "Graduates earn A$55,000–A$75,000/year, with STEM, healthcare, and mining roles commanding A$80,000–A$120,000+ in regional areas." },
    ]}
    applicationSteps={[
      { step: "1", title: "Choose Your Course & University", desc: "Research CRICOS-registered institutions and courses. Consider location, specialization, campus facilities, and PR-eligible courses for your long-term goals." },
      { step: "2", title: "Meet English Requirements", desc: "Take IELTS, TOEFL, or PTE Academic. Most courses require IELTS 6.0–6.5. Many universities offer pathway programs if you need to improve your English." },
      { step: "3", title: "Apply & Get Your CoE", desc: "Submit your application directly to the university or through an education agent. Once accepted, pay the initial tuition deposit to receive your Confirmation of Enrolment (CoE)." },
      { step: "4", title: "Arrange OSHC & Finances", desc: "Purchase Overseas Student Health Cover and prepare financial documents showing A$24,505/year for living costs plus tuition and travel expenses." },
      { step: "5", title: "Apply for Student Visa (500)", desc: "Lodge your visa application online via ImmiAccount with your CoE, GTE statement, financial proof, OSHC, and health examination results." },
      { step: "6", title: "Arrive & Settle In", desc: "Arrange accommodation, attend orientation week, open a local bank account, get your Tax File Number (TFN), and explore your new city." },
    ]}
    testimonials={[
      { name: "Rahul Verma", course: "Master of IT", university: "University of Melbourne", text: "Melbourne's tech scene is incredible. I got a part-time dev role within weeks of arriving, earning A$35/hour. The post-study visa gave me time to find my dream full-time role." },
      { name: "Li Wei", course: "Bachelor of Engineering", university: "UNSW Sydney", text: "UNSW's industry connections helped me secure multiple internships. The campus culture, beach lifestyle, and career support made my 4 years unforgettable." },
      { name: "Fatima Al-Rashid", course: "Master of Public Health", university: "University of Queensland", text: "Brisbane is affordable and beautiful. UQ's research facilities are world-class, and I published two papers during my Master's. Now applying for PR through the 485 visa." },
    ]}
    faqs={[
      { q: "Can I get PR after studying in Australia?", a: "Yes! Australia offers several PR pathways for graduates including the Skilled Independent visa (189), Skilled Nominated visa (190), and Regional visa (491). Your post-study work visa gives you time to gain Australian work experience and improve your points score." },
      { q: "How much can I earn while studying?", a: "International students can work 48 hours per fortnight. With Australia's high minimum wage (A$23.23/hr), most students earn A$500–A$900 per week part-time, covering a significant portion of living costs." },
      { q: "Is Australia expensive for international students?", a: "While tuition is an investment, Australia's high earning potential offsets costs. Students can earn A$25–35/hour part-time. Many universities offer scholarships of A$5,000–A$30,000. Regional universities are more affordable." },
      { q: "What is the best city to study in Australia?", a: "Melbourne and Sydney are most popular for career opportunities. Brisbane and Adelaide offer lower living costs. Perth is great for mining/engineering. Each city has unique advantages depending on your goals." },
      { q: "How long does the visa process take?", a: "Student visa (Subclass 500) processing typically takes 4–6 weeks. Apply at least 8 weeks before your course start date. Ensure all documents are complete to avoid delays." },
      { q: "Do Australian universities offer scholarships?", a: "Yes! Options include Australia Awards (fully funded by government), Destination Australia, Research Training Program, and university-specific merit scholarships ranging from A$5,000 to full tuition." },
    ]}
    scholarships={[
      { name: "Australia Awards", desc: "Fully funded scholarships by the Australian Government covering tuition, living expenses, return airfare, and health insurance for students from developing countries." },
      { name: "Destination Australia", desc: "Up to A$15,000/year for students studying at regional campus locations. Available for both domestic and international students." },
      { name: "Research Training Program (RTP)", desc: "Covers tuition fees and provides a living stipend (A$32,000+/year) for research Master's and PhD students at Australian universities." },
      { name: "Melbourne Graduate Scholarship", desc: "A$28,000 fee remission for high-achieving international students admitted to graduate coursework programs at University of Melbourne." },
      { name: "UNSW Scientia Scholarship", desc: "Full tuition fee scholarship plus A$10,000/year living allowance and mentoring for exceptional undergraduate and postgraduate students." },
      { name: "University-Specific Awards", desc: "Most Group of Eight universities offer merit scholarships of A$5,000–A$20,000. Apply early as these are competitive and limited in number." },
    ]}
  />
);

export default Australia;
