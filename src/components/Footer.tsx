import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo_transparent.png";

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61572003054958" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/abroad__mantra" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/abroad-mantra-341365402/" },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="Abroad Mantra" className="h-20 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Study, Work, Settle — We Make It Happen. Your trusted partner for international education and career guidance.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300 hover:scale-110"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Countries", path: "/countries" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { label: "Visa Assistance", path: "/services/visa" },
                { label: "Consultation", path: "/services/consultation" },
                { label: "Job Assistance", path: "/services/jobs" },
                { label: "Accommodation", path: "/services/accommodation" },
                { label: "Academic Support", path: "https://www.writeopedia.com/", external: true },
              ].map((s) => (
                <li key={s.label}>
                  {s.external ? (
                    <a href={s.path} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {s.label} ↗
                    </a>
                  ) : (
                    <Link to={s.path} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {s.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 text-primary shrink-0" /> <a href="mailto:support@abroadmantra.com" className="hover:text-primary transition-colors">support@abroadmantra.com</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 text-primary shrink-0" /> +91 92748 61114
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" /> University Rd, Leicester LE1 7RH, United Kingdom
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col items-center gap-4">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2026 Abroad Mantra. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link to="/privacy-policy" className="text-muted-foreground text-sm hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-muted-foreground text-sm hover:text-primary transition-colors">Terms & Conditions</Link>
              <Link to="/refund-policy" className="text-muted-foreground text-sm hover:text-primary transition-colors">Refund Policy</Link>
            </div>
          </div>
          <p className="text-muted-foreground/60 text-xs">Powered by <span className="font-semibold text-muted-foreground/80">Eduteam Pvt LTD</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
