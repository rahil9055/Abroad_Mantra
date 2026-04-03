import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MentorSection from "@/components/MentorSection";
import ServicesSection from "@/components/ServicesSection";
import CountriesSection from "@/components/CountriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const indexJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "AbroadMantra",
  description: "Complete support for international students – from visa to jobs.",
  url: "https://abroadmantra.com",
  sameAs: ["https://instagram.com/abroadmantra", "https://facebook.com/abroadmantra", "https://linkedin.com/company/abroadmantra"],
  contactPoint: { "@type": "ContactPoint", telephone: "+91-98765-43210", contactType: "customer service" },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="AbroadMantra – Study Abroad Consultancy | Visa, Jobs & Support"
        description="Complete support for international students – from visa applications to jobs. Study in UK, Australia, Canada, USA with 95% visa success rate. Free consultation."
        jsonLd={indexJsonLd}
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MentorSection />
      <ServicesSection />
      <CountriesSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
