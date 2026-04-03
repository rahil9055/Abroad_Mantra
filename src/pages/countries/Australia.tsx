import { GraduationCap, Clock, Briefcase, Home } from "lucide-react";
import CountryPageLayout from "@/components/CountryPageLayout";

const Australia = () => (
  <CountryPageLayout
    name="Australia"
    flag="🇦🇺"
    tagline="Top-ranked universities, PR pathways, stunning lifestyle, and generous work rights make Australia a dream destination."
    description="Australia offers a perfect blend of world-class education and quality of life. With universities consistently ranked in the global top 100, generous post-study work rights (2–4 years), and clear pathways to permanent residency, Australia attracts over 750,000 international students annually."
    stats={[
      { icon: GraduationCap, label: "Top Universities", value: "43+" },
      { icon: Clock, label: "Degree Duration", value: "2–4 Years" },
      { icon: Briefcase, label: "Post-Study Work", value: "2–4 Years" },
      { icon: Home, label: "Avg Living Cost", value: "A$1,800/mo" },
    ]}
    universities={[
      { name: "University of Melbourne", ranking: "QS Rank: #14", specialty: "Business, Law, Medicine, Engineering — Australia's top-ranked university." },
      { name: "University of Sydney", ranking: "QS Rank: #19", specialty: "Arts, Health Sciences, Engineering — strong global alumni network." },
      { name: "UNSW Sydney", ranking: "QS Rank: #19", specialty: "Engineering, Business, Data Science — known for industry partnerships." },
      { name: "Australian National University", ranking: "QS Rank: #30", specialty: "Political Science, Astronomy, Law — located in the capital Canberra." },
      { name: "Monash University", ranking: "QS Rank: #37", specialty: "Pharmacy, Engineering, IT — Australia's largest university." },
      { name: "University of Queensland", ranking: "QS Rank: #40", specialty: "Biotech, Environmental Science, Business — beautiful campus in Brisbane." },
    ]}
    visaRequirements={[
      { title: "Student Visa (Subclass 500)", desc: "Requires a CoE from a CRICOS-registered institution, Genuine Temporary Entrant (GTE) statement, and financial capacity proof." },
      { title: "Financial Requirements", desc: "Demonstrate A$24,505/year for living costs plus tuition fees and travel costs. Bank statements or loan approval letters accepted." },
      { title: "English Language Proof", desc: "IELTS Academic (6.0–6.5), TOEFL iBT (64–79), or PTE Academic (50–58) depending on the course." },
      { title: "Health Insurance (OSHC)", desc: "Mandatory Overseas Student Health Cover for the duration of your visa. Costs around A$500–$600/year." },
      { title: "Post-Study Work Visa (485)", desc: "Graduates can apply for a Temporary Graduate visa — 2 years for Bachelor's, 3 for Master's, 4 for PhD." },
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
      "7 of the world's top 100 universities",
      "Post-study work visa up to 4 years",
      "Clear pathways to permanent residency",
      "Part-time work: 48 hrs/fortnight during term",
      "High quality of life and safety",
      "Scholarships: Australia Awards, Destination Australia",
    ]}
    jobInfo={[
      { title: "Part-Time During Studies", desc: "Work up to 48 hours per fortnight during term and unlimited hours during scheduled breaks." },
      { title: "Post-Study Work Visa", desc: "Temporary Graduate Visa (485) allows 2–4 years of full-time work after graduation based on qualification level." },
      { title: "PR Pathways", desc: "Skilled occupation lists, regional migration schemes, and employer sponsorship offer multiple routes to permanent residency." },
      { title: "Average Graduate Salary", desc: "Graduates earn A$55,000–A$75,000/year, with STEM and healthcare roles commanding higher salaries." },
    ]}
  />
);

export default Australia;
