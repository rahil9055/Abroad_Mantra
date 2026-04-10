import LegalPageLayout from "@/components/LegalPageLayout";

const PrivacyPolicy = () => (
  <LegalPageLayout
    title="Privacy Policy"
    seoTitle="Privacy Policy – AbroadMantra"
    seoDesc="Learn how AbroadMantra collects, uses, and protects your personal information. Read our complete privacy policy."
    lastUpdated="April 1, 2026"
    sections={[
      { heading: "1. Information We Collect", content: [
        "We collect personal information that you provide directly to us, including your name, email address, phone number, academic details, passport information, and any other information you choose to provide when using our services.",
        "We also automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, and browsing patterns through cookies and similar technologies.",
      ]},
      { heading: "2. How We Use Your Information", content: [
        "We use the information we collect to: provide and improve our consultancy services, process visa applications and university admissions, communicate with you about your applications and services, send relevant updates and educational content, and comply with legal obligations.",
        "We will never sell your personal information to third parties. Your data is only shared with universities, embassies, and accommodation providers as necessary to deliver our services, and only with your explicit consent.",
      ]},
      { heading: "3. Data Security", content: [
        "We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and access controls. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
      ]},
      { heading: "4. Cookies", content: [
        "Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings. Essential cookies are required for the website to function properly.",
      ]},
      { heading: "5. Third-Party Services", content: [
        "We may use third-party services for analytics (Google Analytics), payment processing, and communication. These services have their own privacy policies and we encourage you to review them.",
      ]},
      { heading: "6. Your Rights", content: [
        "You have the right to: access the personal data we hold about you, request correction of inaccurate data, request deletion of your data (subject to legal obligations), opt out of marketing communications at any time, and lodge a complaint with a data protection authority.",
      ]},
      { heading: "7. Data Retention", content: [
        "We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Application-related data is kept for a minimum of 3 years for record-keeping purposes.",
      ]},
      { heading: "8. Contact Us", content: [
        "If you have any questions about this Privacy Policy or our data practices, please contact us at support@abroadmantra.com or call us at +91 92748 61114.",
      ]},
    ]}
  />
);

export default PrivacyPolicy;
