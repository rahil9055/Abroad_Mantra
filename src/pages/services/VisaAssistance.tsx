import { FileText, ClipboardCheck, BookOpen, Users, ShieldCheck, FileSearch } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const VisaAssistance = () => (
  <ServicePageLayout
    title="Visa"
    highlight="Assistance"
    subtitle="Our Services"
    description="Navigate the complex visa process with confidence. Our experts handle everything from documentation to interview prep, ensuring the highest approval rates."
    features={[
      { icon: FileText, title: "Student Visa Applications", desc: "Complete guidance for student visa applications to UK, Canada, Australia, USA, and more — from form filling to submission." },
      { icon: ClipboardCheck, title: "Document Checklist", desc: "Personalized document checklists tailored to your destination country, ensuring nothing is missed." },
      { icon: BookOpen, title: "SOP & LOR Guidance", desc: "Professional help crafting compelling Statements of Purpose and Letters of Recommendation that stand out." },
      { icon: Users, title: "Visa Interview Preparation", desc: "Mock interviews and coaching to help you confidently answer any question at your visa appointment." },
      { icon: ShieldCheck, title: "Refusal Case Handling", desc: "Expert analysis of visa refusals with strategic re-application planning and documentation correction." },
      { icon: FileSearch, title: "Application Tracking", desc: "Real-time updates and tracking of your visa application status so you're never left in the dark." },
    ]}
    process={[
      { step: "1", title: "Free Consultation", desc: "We assess your profile, understand your goals, and recommend the best visa pathway for you." },
      { step: "2", title: "Document Preparation", desc: "We provide a tailored checklist and help you gather, review, and organize all required documents." },
      { step: "3", title: "Application Filing", desc: "Our experts fill and submit your visa application with precision, minimizing errors and delays." },
      { step: "4", title: "Interview Coaching", desc: "Practice sessions with real questions to build your confidence before the visa interview." },
      { step: "5", title: "Approval & Next Steps", desc: "Once approved, we guide you on travel, accommodation, and settling into your new country." },
    ]}
    highlights={[
      "95%+ visa approval success rate",
      "Handled 1000+ student visa cases",
      "Expert knowledge of 15+ country regulations",
      "Dedicated case manager for every student",
      "Free re-application support if refused",
      "End-to-end documentation assistance",
    ]}
    ctaTitle="Need Help With Your Visa?"
    ctaDesc="Don't risk your application. Let our visa experts guide you to a successful outcome."
  />
);

export default VisaAssistance;
