import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo_transparent.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="Abroad Mantra" className="h-16 w-auto mb-4 brightness-110 contrast-110" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Study, Work, Settle — We Make It Happen. Your trusted partner for international education and career guidance.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Services", "Countries", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(/\s+/g, "-")}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {["Visa Assistance", "Consultation", "Job Assistance", "Accommodation", "Tutoring"].map((s) => (
                <li key={s}>
                  <Link to={`/services/${s.toLowerCase().split(" ")[0]}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 text-primary" /> info@abroadmantra.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 text-primary" /> +91 XXXXX XXXXX
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" /> Your Office Address
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2026 Abroad Mantra. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-muted-foreground text-sm hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-muted-foreground text-sm hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link to="/refund-policy" className="text-muted-foreground text-sm hover:text-primary transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
