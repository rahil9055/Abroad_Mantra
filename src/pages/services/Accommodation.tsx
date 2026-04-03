import { Home, MapPin, Wallet, Users, ShieldCheck, Search } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const Accommodation = () => (
  <ServicePageLayout
    title="Accommodation"
    highlight="Support"
    subtitle="Our Services"
    description="Finding a safe, affordable place to live in a new country can be stressful. We take the hassle out by helping you find the perfect accommodation."
    features={[
      { icon: Home, title: "Private Accommodation", desc: "Find private studios and apartments near your university with verified landlords and fair pricing." },
      { icon: Users, title: "Shared Housing", desc: "Budget-friendly shared housing options with compatible roommates from similar backgrounds." },
      { icon: Wallet, title: "Budget Planning", desc: "Detailed cost breakdowns for rent, utilities, groceries, and transport in your destination city." },
      { icon: MapPin, title: "Location Guidance", desc: "Expert advice on the best neighborhoods considering safety, transport links, and proximity to campus." },
      { icon: ShieldCheck, title: "Verified Listings", desc: "All accommodation options are verified to ensure safety, quality, and fair rental terms." },
      { icon: Search, title: "Virtual Tours", desc: "View properties remotely with virtual tours and detailed photo galleries before you arrive." },
    ]}
    process={[
      { step: "1", title: "Share Your Preferences", desc: "Tell us your budget, preferred location, and accommodation type — private, shared, or student halls." },
      { step: "2", title: "Curated Options", desc: "Receive a shortlist of verified accommodation options matching your requirements." },
      { step: "3", title: "Booking Assistance", desc: "We help you with applications, deposits, and lease agreements so everything is secured before you fly." },
      { step: "4", title: "Move-In Support", desc: "Arrival day coordination and settling-in support to make your transition smooth." },
    ]}
    highlights={[
      "Verified and safe accommodation listings",
      "Options for every budget — from shared to private",
      "Pre-arrival booking so you're sorted before landing",
      "City-specific living cost guides",
      "Support with lease agreements and deposits",
      "Emergency re-housing assistance if needed",
    ]}
    ctaTitle="Need a Place to Stay?"
    ctaDesc="Secure your accommodation before you arrive. Let us find the perfect home for your study abroad journey."
  />
);

export default Accommodation;
