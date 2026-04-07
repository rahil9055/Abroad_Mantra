import LegalPageLayout from "@/components/LegalPageLayout";

const RefundPolicy = () => (
  <LegalPageLayout
    title="Refund Policy"
    seoTitle="Refund Policy – AbroadMantra"
    seoDesc="Understand AbroadMantra's refund policy for study abroad consultancy services including eligibility, process, and timelines."
    lastUpdated="April 1, 2026"
    sections={[
      { heading: "1. Overview", content: [
        "At AbroadMantra, we are committed to delivering high-quality consultancy services. This Refund Policy outlines the circumstances under which refunds may be issued and the process to request one.",
      ]},
      { heading: "2. Eligibility for Refund", content: [
        "Full Refund: If you cancel within 48 hours of payment and no services have been rendered (e.g., no consultation conducted, no documents reviewed), you are eligible for a full refund.",
        "Partial Refund: If services have been partially delivered (e.g., initial consultation completed but visa application not filed), a partial refund may be issued based on the work completed.",
        "No Refund: Refunds are not applicable after visa applications have been submitted, university applications have been filed, or if the service package has been fully utilized.",
      ]},
      { heading: "3. Non-Refundable Fees", content: [
        "The following fees are non-refundable under any circumstances: third-party fees (visa application fees, university application fees, courier charges, IELTS/TOEFL registration), consultation fees for sessions already conducted, and document processing fees for completed work.",
      ]},
      { heading: "4. Visa Refusal", content: [
        "In the event of a visa refusal, AbroadMantra does not provide a refund for services rendered, as we fulfill our obligation by preparing and submitting a complete application. However, we offer free re-application guidance for eligible cases.",
      ]},
      { heading: "5. How to Request a Refund", content: [
        "To request a refund, email refunds@abroadmantra.com with your full name, service agreement reference number, reason for the refund request, and any supporting documentation. We will review your request within 5 business days.",
      ]},
      { heading: "6. Refund Processing", content: [
        "Approved refunds are processed within 7–10 business days. Refunds are issued to the original payment method. Bank processing times may add 3–5 additional business days.",
      ]},
      { heading: "7. Disputes", content: [
        "If you disagree with a refund decision, you may escalate the matter by writing to grievance@abroadmantra.com. We aim to resolve all disputes within 15 business days.",
      ]},
      { heading: "8. Policy Changes", content: [
        "AbroadMantra reserves the right to modify this Refund Policy at any time. Changes will be posted on this page with an updated date. Continued use of our services constitutes acceptance of the revised policy.",
      ]},
      { heading: "9. Contact", content: [
        "For refund-related queries, contact us at refunds@abroadmantra.com or call +91 98765 43210.",
      ]},
    ]}
  />
);

export default RefundPolicy;
