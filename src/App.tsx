import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";
import PlaceholderPage from "./components/PlaceholderPage.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

const queryClient = new QueryClient();

const PageWrapper = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <PlaceholderPage title={title} />
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<PageWrapper title="About Us" />} />
          <Route path="/services" element={<PageWrapper title="Our Services" />} />
          <Route path="/services/visa" element={<PageWrapper title="Visa Assistance" />} />
          <Route path="/services/consultation" element={<PageWrapper title="Consultation Services" />} />
          <Route path="/services/remonstration" element={<PageWrapper title="Remonstration / Appeals" />} />
          <Route path="/services/jobs" element={<PageWrapper title="Job Assistance" />} />
          <Route path="/services/accommodation" element={<PageWrapper title="Accommodation Support" />} />
          <Route path="/services/tutoring" element={<PageWrapper title="Tutoring Services" />} />
          <Route path="/countries" element={<PageWrapper title="Study Destinations" />} />
          <Route path="/countries/uk" element={<PageWrapper title="Study in United Kingdom" />} />
          <Route path="/countries/australia" element={<PageWrapper title="Study in Australia" />} />
          <Route path="/countries/canada" element={<PageWrapper title="Study in Canada" />} />
          <Route path="/countries/usa" element={<PageWrapper title="Study in USA" />} />
          <Route path="/testimonials" element={<PageWrapper title="Testimonials" />} />
          <Route path="/blog" element={<PageWrapper title="Blog" />} />
          <Route path="/faqs" element={<PageWrapper title="FAQs" />} />
          <Route path="/contact" element={<PageWrapper title="Contact Us" />} />
          <Route path="/privacy-policy" element={<PageWrapper title="Privacy Policy" />} />
          <Route path="/terms" element={<PageWrapper title="Terms & Conditions" />} />
          <Route path="/refund-policy" element={<PageWrapper title="Refund Policy" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
