import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Home", hash: "#home" },
  { label: "About", hash: "#about" },
  { label: "Services", hash: "#services" },
  { label: "Contact", hash: "#contact" },
];

const services = [
  { label: "Fabrication & Machining", hash: "#services" },
  { label: "NDT Inspection", hash: "#services" },
  { label: "Industrial Maintenance", hash: "#expertise" },
  { label: "Quality Assurance", hash: "#expertise" },
];

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const getHref = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <footer className="gradient-navy border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div>
            <Link to="/">
              <img src={logo} alt="Deep Solutions" className="h-14 mb-4" />
            </Link>
            <p className="text-sm text-steel leading-relaxed">
              Depth in Service. Strength in Delivery. Your trusted partner for
              industrial maintenance, inspection, and testing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-light mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={getHref(link.hash)} className="text-sm text-steel hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-bold text-light mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <a href={getHref(link.hash)} className="text-sm text-steel hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <p className="text-center text-sm text-steel">
          © {new Date().getFullYear()} Deep Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
