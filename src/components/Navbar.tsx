import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import logo from "@/assets/logo_transparent.png";

interface NavChild {
  label: string;
  path: string;
  external?: boolean;
}

interface NavItem {
  label: string;
  path: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Visa Assistance", path: "/services/visa" },
      { label: "Consultation", path: "/services/consultation" },
      { label: "Remonstration", path: "/services/remonstration" },
      { label: "Jobs", path: "/services/jobs" },
      { label: "Accommodation", path: "/services/accommodation" },
      { label: "Academic Support", path: "https://www.writeopedia.com/", external: true },
    ],
  },
  {
    label: "Countries",
    path: "/countries",
    children: [
      { label: "United Kingdom", path: "/countries/uk" },
      { label: "Australia", path: "/countries/australia" },
      { label: "Canada", path: "/countries/canada" },
      { label: "USA", path: "/countries/usa" },
      { label: "Germany", path: "/countries/germany" },
      { label: "Malta", path: "/countries/malta" },
      { label: "Turkey", path: "/countries/turkey" },
      { label: "Russia", path: "/countries/russia" },
      { label: "China", path: "/countries/china" },
      { label: "Singapore", path: "/countries/singapore" },
      { label: "Malaysia", path: "/countries/malaysia" },
    ],
  },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const NavLink = ({ child, onClick }: { child: NavChild; onClick?: () => void }) => {
  if (child.external) {
    return (
      <a
        href={child.path}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="flex items-center gap-1.5 px-3 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-secondary rounded-md transition-colors"
      >
        {child.label}
        <ExternalLink className="h-3 w-3 opacity-50" />
      </a>
    );
  }
  return (
    <Link
      to={child.path}
      onClick={onClick}
      className="block px-3 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-secondary rounded-md transition-colors"
    >
      {child.label}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border" : "bg-background/80 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Abroad Mantra" className="h-12 w-auto brightness-110 contrast-110" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors flex items-center gap-1 rounded-md"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-card rounded-lg shadow-xl border border-border p-1.5 animate-fade-in max-h-80 overflow-y-auto">
                  {item.children.map((child) => (
                    <NavLink key={child.label} child={child} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden lg:inline-flex px-5 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Get Free Consultation
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-foreground">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary rounded-md transition-colors font-medium"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-6 space-y-1">
                    {item.children.map((child) => (
                      <NavLink key={child.label} child={child} onClick={() => setIsOpen(false)} />
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block mx-4 mt-4 px-5 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-semibold text-center">
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
