import { Briefcase, FileText, Users, Search, TrendingUp, Award } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const Jobs = () => (
  <ServicePageLayout
    title="Job"
    highlight="Assistance"
    subtitle="Our Services"
    description="From part-time campus jobs to full-time career placements, we help international students find the right opportunities abroad."
    features={[
      { icon: Search, title: "Part-Time Job Support", desc: "Find part-time jobs near your university that fit your schedule and help cover living expenses." },
      { icon: Briefcase, title: "Full-Time Job Placement", desc: "Post-graduation career placement support with connections to employers seeking international talent." },
      { icon: FileText, title: "CV & Resume Building", desc: "Professionally formatted CVs tailored to international job markets and employer expectations." },
      { icon: Users, title: "Interview Preparation", desc: "Mock interviews, common question banks, and presentation coaching for job interviews." },
      { icon: TrendingUp, title: "Career Path Guidance", desc: "Strategic advice on industries, roles, and career progressions in your destination country." },
      { icon: Award, title: "LinkedIn Optimization", desc: "Profile optimization and networking strategies to increase your visibility to recruiters." },
    ]}
    process={[
      { step: "1", title: "Career Assessment", desc: "We understand your skills, experience, and career goals to match you with the right opportunities." },
      { step: "2", title: "CV & Profile Optimization", desc: "Create a standout CV and LinkedIn profile that appeals to international employers." },
      { step: "3", title: "Job Matching", desc: "We connect you with relevant part-time or full-time opportunities based on your profile." },
      { step: "4", title: "Interview & Placement", desc: "Coaching and support through the interview process until you land your desired role." },
    ]}
    highlights={[
      "Partnerships with employers across multiple countries",
      "Support for both part-time and full-time roles",
      "Industry-specific CV templates",
      "Mock interviews with real-world scenarios",
      "Post-placement follow-up and support",
      "Guidance on work visa and permit regulations",
    ]}
    ctaTitle="Looking for a Job Abroad?"
    ctaDesc="Let us help you find the right opportunity — from your first part-time role to your dream career."
  />
);

export default Jobs;
