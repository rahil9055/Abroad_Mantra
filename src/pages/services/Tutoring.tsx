import { BookOpen, GraduationCap, ClipboardCheck, Users, Brain, Award } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const Tutoring = () => (
  <ServicePageLayout
    title="Tutoring"
    highlight="Services"
    subtitle="Our Services"
    description="Struggling with coursework or exams? Our qualified tutors provide personalized academic support to help you excel in your studies abroad."
    features={[
      { icon: BookOpen, title: "Subject-Specific Tutoring", desc: "Expert tutors across subjects — from engineering and business to sciences and humanities." },
      { icon: ClipboardCheck, title: "Assignment Help", desc: "Guidance on structuring, researching, and writing assignments that meet university standards." },
      { icon: GraduationCap, title: "Exam Preparation", desc: "Focused revision sessions, past papers, and exam strategies to boost your grades." },
      { icon: Users, title: "1-on-1 Sessions", desc: "Private tutoring sessions tailored to your learning pace, style, and specific areas of difficulty." },
      { icon: Brain, title: "Study Skills Coaching", desc: "Learn effective study techniques, time management, and note-taking strategies for academic success." },
      { icon: Award, title: "Language Support", desc: "English language tutoring including IELTS/TOEFL prep and academic writing improvement." },
    ]}
    process={[
      { step: "1", title: "Identify Your Needs", desc: "Tell us which subjects or topics you need help with and your current academic standing." },
      { step: "2", title: "Tutor Matching", desc: "We pair you with a qualified tutor who specializes in your subject and understands your curriculum." },
      { step: "3", title: "Flexible Scheduling", desc: "Book sessions at times that work for you — evenings, weekends, or during study breaks." },
      { step: "4", title: "Track Progress", desc: "Regular progress reviews and feedback to ensure you're on track to achieve your academic goals." },
    ]}
    highlights={[
      "Qualified tutors with subject expertise",
      "Flexible online and in-person sessions",
      "Support for all major university curricula",
      "Affordable pricing with package discounts",
      "IELTS/TOEFL and language preparation",
      "Progress tracking and regular feedback",
    ]}
    ctaTitle="Need Academic Support?"
    ctaDesc="Connect with expert tutors who can help you achieve the grades you deserve."
  />
);

export default Tutoring;
