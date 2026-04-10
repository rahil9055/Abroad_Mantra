import LegalPageLayout from "@/components/LegalPageLayout";

const Terms = () => (
  <LegalPageLayout
    title="Terms & Conditions"
    seoTitle="Terms & Conditions – AbroadMantra"
    seoDesc="Read the terms and conditions governing the use of AbroadMantra's study abroad consultancy services."
    lastUpdated="April 1, 2026"
    sections={[
      { heading: "1. Acceptance of Terms", content: [
        "By accessing and using AbroadMantra's website and services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.",
      ]},
      { heading: "2. Services Description", content: [
        "AbroadMantra provides study abroad consultancy services including but not limited to: career counseling, university selection, visa assistance, SOP/LOR guidance, accommodation support, job assistance, and tutoring services.",
        "We act as consultants and advisors. Final decisions on visa approvals, university admissions, and job placements are made by the respective institutions and are beyond our control.",
      ]},
      { heading: "3. Client Responsibilities", content: [
        "You agree to provide accurate and complete information for all applications and consultations. Any false or misleading information may result in application rejection, visa refusal, or termination of our services without refund.",
        "You are responsible for meeting all deadlines communicated by us or by universities/embassies. Delays caused by incomplete documentation or late responses are not our responsibility.",
      ]},
      { heading: "4. Fees & Payment", content: [
        "Service fees are communicated upfront before engagement. Payment terms, installment options, and accepted payment methods are outlined in your service agreement.",
        "All fees are in Indian Rupees (INR) unless otherwise specified. Third-party fees such as visa application fee, university application fees, and courier charges are borne by the client separately.",
      ]},
      { heading: "5. No Guarantee of Outcome", content: [
        "While we maintain a high success rate, AbroadMantra does not guarantee visa approval, university admission, or job placement. We provide expert guidance and support to maximize your chances, but final outcomes depend on multiple factors beyond our control.",
      ]},
      { heading: "6. Intellectual Property", content: [
        "All content on this website including text, graphics, logos, and images is the property of AbroadMantra and is protected by copyright laws. You may not reproduce, distribute, or use any content without our prior written consent.",
      ]},
      { heading: "7. Limitation of Liability", content: [
        "AbroadMantra shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the fees paid for the specific service in question.",
      ]},
      { heading: "8. Termination", content: [
        "Either party may terminate the service agreement with written notice. Refund terms upon termination are governed by our Refund Policy. We reserve the right to terminate services if the client provides false information or violates these terms.",
      ]},
      { heading: "9. Governing Law", content: [
        "These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.",
      ]},
      { heading: "10. Contact", content: [
        "For questions about these terms, contact us at support@abroadmantra.com or call +91 92748 61114.",
      ]},
    ]}
  />
);

export default Terms;
