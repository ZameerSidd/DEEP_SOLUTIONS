import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

interface FooterProps {
  logo: string;
}

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'NDT Solutions', href: '#services' },
  { name: 'Fabrication', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  { name: 'Fabrication', href: '#services' },
  { name: 'Precision Machining', href: '#services' },
  { name: 'Welding Solutions', href: '#services' },
  { name: 'NDT Inspection', href: '#services' },
  { name: 'EDM Notch Machining', href: '#services' },
  { name: 'Industrial Maintenance', href: '#services' },
];

export function Footer({ logo }: FooterProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer id="contact" className="bg-[#0A1A33] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Company Info */}
          <div>
            <img src={'./src/assets/logo.png'} alt="Deep Solutions" className="h-14 mb-8 brightness-0 invert" />
            <p className="text-gray-400 mb-8 leading-relaxed">
              Delivering world-class industrial maintenance, fabrication, and advanced NDT inspection services.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="#"
                className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#C9A24A] transition-colors duration-300"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="#"
                className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#C9A24A] transition-colors duration-300"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="#"
                className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#C9A24A] transition-colors duration-300"
              >
                <Facebook size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-8 text-[#C9A24A]">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-[#C9A24A] transition-colors duration-300 inline-block cursor-pointer"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-8 text-[#C9A24A]">Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={service.href}
                    onClick={(e) => handleLinkClick(e, service.href)}
                    className="text-gray-400 hover:text-[#C9A24A] transition-colors duration-300 inline-block cursor-pointer"
                  >
                    {service.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="mb-8 text-[#C9A24A]">Contact Information</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#C9A24A] flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-400 leading-relaxed">Kingdom of Saudi Arabia</p>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-[#C9A24A] flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-400">+966 XX XXX XXXX</p>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-[#C9A24A] flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-400">info@deepsolutions.sa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="h-12 px-8 bg-white/10 rounded-xl flex items-center justify-center">
                <span className="text-[#C9A24A]">Saudi Vision 2030</span>
              </div>
            </div>

            <p className="text-gray-400 text-center md:text-right">
              © {new Date().getFullYear()} Deep Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}