import { MessageSquare, GraduationCap, Globe, Wallet, Target, TrendingUp } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const Consultation = () => (
  <ServicePageLayout
    title="Consultation"
    highlight="Services"
    subtitle="Our Services"
    description="Get personalized guidance from experienced counselors who understand your aspirations and help you make informed decisions about your study abroad journey."
    features={[
      { icon: Target, title: "Career Counseling", desc: "Identify the best career paths based on your interests, skills, and global job market trends." },
      { icon: GraduationCap, title: "Course Selection", desc: "Find the perfect course that aligns with your career goals and academic background." },
      { icon: Globe, title: "University Selection", desc: "Shortlist the best universities based on ranking, fees, location, and your profile strength." },
      { icon: MessageSquare, title: "Country Guidance", desc: "Compare study destinations to find the country that best fits your budget, lifestyle, and career plans." },
      { icon: Wallet, title: "Financial Planning", desc: "Understand tuition fees, living costs, scholarships, and education loan options for your chosen destination." },
      { icon: TrendingUp, title: "Profile Evaluation", desc: "Honest assessment of your academic and professional profile with actionable improvement suggestions." },
    ]}
    process={[
      { step: "1", title: "Profile Assessment", desc: "Share your academic background, test scores, and career goals for a thorough evaluation." },
      { step: "2", title: "Personalized Roadmap", desc: "Receive a tailored study abroad plan with university shortlists, timelines, and budget estimates." },
      { step: "3", title: "Application Strategy", desc: "We help you create a strong application package with optimized SOPs, LORs, and essays." },
      { step: "4", title: "Ongoing Support", desc: "Continuous guidance through every stage — from application to admission to departure." },
    ]}
    highlights={[
      "One-on-one sessions with expert counselors",
      "Data-driven university recommendations",
      "Scholarship and funding guidance",
      "Support for all major study destinations",
      "Post-admission pre-departure briefing",
      "Transparent and honest advice — always",
    ]}
    ctaTitle="Need Expert Guidance?"
    ctaDesc="Book a free consultation and get a personalized study abroad roadmap from our experienced counselors."
  />
);

export default Consultation;
