import { RotateCcw, FileSearch, FileText, ShieldCheck, AlertTriangle, Scale } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const Remonstration = () => (
  <ServicePageLayout
    title="Remonstration &"
    highlight="Appeals"
    subtitle="Our Services"
    description="Visa refused? Don't give up. Our specialists analyze refusal reasons and build a strong case for your appeal or re-application."
    features={[
      { icon: FileSearch, title: "Visa Refusal Analysis", desc: "Thorough review of your refusal letter to identify exact reasons and weaknesses in your previous application." },
      { icon: Scale, title: "Appeal Drafting", desc: "Professionally written remonstration letters and appeal documents that address every concern raised." },
      { icon: RotateCcw, title: "Re-Application Strategy", desc: "A revised application plan with strengthened documentation and improved presentation." },
      { icon: FileText, title: "Documentation Correction", desc: "Identification and correction of errors, gaps, or inconsistencies in your original documents." },
      { icon: ShieldCheck, title: "Case-Specific Guidance", desc: "Tailored advice based on your unique situation, destination country, and type of visa refusal." },
      { icon: AlertTriangle, title: "Risk Assessment", desc: "Honest evaluation of your chances before re-applying, so you can make informed decisions." },
    ]}
    process={[
      { step: "1", title: "Refusal Review", desc: "Send us your refusal letter and application documents for a detailed analysis." },
      { step: "2", title: "Strategy Development", desc: "We identify weaknesses and create a tailored strategy — appeal, remonstration, or fresh application." },
      { step: "3", title: "Document Strengthening", desc: "Revised and enhanced documentation addressing every refusal point with supporting evidence." },
      { step: "4", title: "Submission & Follow-Up", desc: "We submit your appeal or re-application and track the case until resolution." },
    ]}
    highlights={[
      "Handled hundreds of refusal cases successfully",
      "Expert knowledge of embassy decision criteria",
      "Country-specific appeal procedures",
      "Honest assessment before you invest more",
      "Quick turnaround on urgent cases",
      "No hidden fees — transparent pricing",
    ]}
    ctaTitle="Visa Refused? We Can Help."
    ctaDesc="Our remonstration experts have successfully overturned hundreds of visa refusals. Let us fight for yours."
  />
);

export default Remonstration;
