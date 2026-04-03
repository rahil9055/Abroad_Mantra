import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
import PlaceholderPage from "./components/PlaceholderPage.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import VisaAssistance from "./pages/services/VisaAssistance.tsx";
import Consultation from "./pages/services/Consultation.tsx";
import Remonstration from "./pages/services/Remonstration.tsx";
import Jobs from "./pages/services/Jobs.tsx";
import Accommodation from "./pages/services/Accommodation.tsx";
import Tutoring from "./pages/services/Tutoring.tsx";
import UK from "./pages/countries/UK.tsx";
import Australia from "./pages/countries/Australia.tsx";
import Canada from "./pages/countries/Canada.tsx";
import USA from "./pages/countries/USA.tsx";


import Blog from "./pages/Blog.tsx";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy.tsx";
import Terms from "./pages/legal/Terms.tsx";
import RefundPolicy from "./pages/legal/RefundPolicy.tsx";
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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<PageWrapper title="Our Services" />} />
          <Route path="/services/visa" element={<VisaAssistance />} />
          <Route path="/services/consultation" element={<Consultation />} />
          <Route path="/services/remonstration" element={<Remonstration />} />
          <Route path="/services/jobs" element={<Jobs />} />
          <Route path="/services/accommodation" element={<Accommodation />} />
          <Route path="/services/tutoring" element={<Tutoring />} />
          <Route path="/countries" element={<PageWrapper title="Study Destinations" />} />
          <Route path="/countries/uk" element={<UK />} />
          <Route path="/countries/australia" element={<Australia />} />
          <Route path="/countries/canada" element={<Canada />} />
          <Route path="/countries/usa" element={<USA />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
