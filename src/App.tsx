import { useState, useEffect } from 'react';
import {allImages} from './assets/img';
import { Menu, X, Factory, Shield, Zap, Award, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
//Change has been made.
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="px-8 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={allImages.logoSrc} alt="Deep Solutions" className="h-12" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-gray-700 hover:text-[#D4A035] transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-[#D4A035] transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-[#D4A035] transition-colors">Services</a>
              <a href="#expertise" className="text-gray-700 hover:text-[#D4A035] transition-colors">Expertise</a>
              <a href="#contact" className="text-gray-700 hover:text-[#D4A035] transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <a href="#home" className="text-gray-700 hover:text-[#D4A035] transition-colors">Home</a>
                <a href="#about" className="text-gray-700 hover:text-[#D4A035] transition-colors">About</a>
                <a href="#services" className="text-gray-700 hover:text-[#D4A035] transition-colors">Services</a>
                <a href="#expertise" className="text-gray-700 hover:text-[#D4A035] transition-colors">Expertise</a>
                <a href="#contact" className="text-gray-700 hover:text-[#D4A035] transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-10 lg:px-20 bg-gradient-to-br from-[#1e3a5f] to-[#0f1e2e] relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src={allImages.new_bg_src}
            alt="Industrial Background" 
            className="w-full h-full object-cover opacity-1"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/90 to-[#0f1e2e]/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-[#D4A035]/20 text-[#D4A035] rounded-full">
              Your Trusted Industrial Partner
            </span>
          </div>
          <h1 className="text-white mb-4 animate-fade-in">
            Depth in Service.<br />Strength in Delivery.
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Leading provider of high-quality maintenance services, supported by advanced inspection, testing, and contracting solutions that ensure asset reliability, safety, and long-term performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="px-8 py-4 bg-[#D4A035] text-white rounded-lg hover:bg-[#c09030] transition-colors">
              Explore Services
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Cards */}
      <section id="about" className="py-20 md:py-32 lg:py-40 px-6 md:px-10 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#D4A035]/10 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-[#D4A035]" />
              </div>
              <h3 className="text-[#1e3a5f] mb-6">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading provider of high-quality maintenance services, supported by advanced inspection, testing, and contracting solutions that ensure asset reliability, safety, and long-term performance.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#D4A035]/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#D4A035]" />
              </div>
              <h3 className="text-[#1e3a5f] mb-6">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional maintenance services and precise inspection and testing solutions with the highest standards of quality. We achieve this by applying deep technical expertise, innovative technologies, and strong commitment to safety, operational excellence, and customer trust.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#D4A035]/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-[#D4A035]" />
              </div>
              <h3 className="text-[#1e3a5f] mb-6">Core Values</h3>
              <ul className="text-gray-600 space-y-3 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <span>Employees come first</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <span>Honesty and integrity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <span>Hard work and continuous development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <span>Quality and efficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <span>Meeting commitments and exceeding expectations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Row */}
      <section id="expertise" className="py-16 md:py-20 px-6 md:px-10 lg:px-20 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            <div className="text-center">
              <div className="w-14 h-14 bg-[#D4A035]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Factory className="w-7 h-7 text-[#D4A035]" />
              </div>
              <h4 className="text-white mb-2">Expertise</h4>
              <p className="text-gray-300">Deep technical knowledge</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#D4A035]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-[#D4A035]" />
              </div>
              <h4 className="text-white mb-2">Integrity</h4>
              <p className="text-gray-300">Ethical and honest</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#D4A035]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-[#D4A035]" />
              </div>
              <h4 className="text-white mb-2">Innovation</h4>
              <p className="text-gray-300">Creative solutions</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#D4A035]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-[#D4A035]" />
              </div>
              <h4 className="text-white mb-2">Reliability</h4>
              <p className="text-gray-300">Consistent performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fabrication & Machining Section */}
      <section id="services" className="py-20 md:py-32 lg:py-40 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-[#1e3a5f] mb-4">Fabrication & Machining</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our state-of-the-art fabrication and machining services deliver precision and quality. From welding to CNC machining, cutting, and EDM machining, we provide comprehensive solutions for all your industrial manufacturing needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced welding techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Precision CNC machining</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">EDM machining capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom fabrication solutions</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src={allImages.new_bg_src}
                alt="Fabrication and Machining" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NDT Section */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-10 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1">
              <ImageWithFallback 
                src={allImages.NonDestructiveTesting_src}
                alt='Non-Destructive-Testing' 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="animate-fade-in order-1 md:order-2">
              <h2 className="text-[#1e3a5f] mb-4">Non-Destructive Testing (NDT)</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our comprehensive NDT services ensure the integrity and safety of your assets without causing damage. We utilize the latest inspection technologies and methodologies.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-8 h-8 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-800">Ultrasonic Testing</p>
                    <p className="text-gray-500">High-frequency sound waves</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-8 h-8 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-800">Eddy Current Inspection</p>
                    <p className="text-gray-500">Electromagnetic detection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-8 h-8 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-800">Magnetic Particle Testing</p>
                    <p className="text-gray-500">Surface defect detection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-8 h-8 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-800">Visual Inspection</p>
                    <p className="text-gray-500">Expert assessment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-8 h-8 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-800">Radiographic Testing</p>
                    <p className="text-gray-500">X-ray imaging</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-8 h-8 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-800">Liquid Penetrant Testing</p>
                    <p className="text-gray-500">Surface crack detection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications Section */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-[#1e3a5f] mb-4">Industry Applications</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We serve diverse industrial sectors with tailored solutions that meet the specific demands of each industry. Our expertise spans across critical infrastructure and industrial operations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Oil & Gas facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Petrochemical plants</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Power generation facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Offshore & onshore operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A035] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Manufacturing & processing</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src={allImages.IndustryApplications_src}
                alt="Industry Applications" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 lg:py-40 px-6 md:px-10 lg:px-20 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Get in Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to discuss your project? Contact us today and let's build something exceptional together.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="tel:+966XXXXXXXXX" className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
              <div className="w-14 h-14 bg-[#D4A035]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-[#D4A035]" />
              </div>
              <h4 className="text-white mb-3">Phone</h4>
              <p className="text-gray-300">+966 XX XXX XXXX</p>
            </a>
            <a href="mailto:info@deepsolutions.com" className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
              <div className="w-14 h-14 bg-[#D4A035]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-[#D4A035]" />
              </div>
              <h4 className="text-white mb-3">Email</h4>
              <p className="text-gray-300">info@deepsolutions.com</p>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
              <div className="w-14 h-14 bg-[#D4A035]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-[#D4A035]" />
              </div>
              <h4 className="text-white mb-3">Location</h4>
              <p className="text-gray-300">Saudi Arabia</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1e2e] pt-16 pb-10 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img src={allImages.logoSrc} alt="Deep Solutions" className="h-12 mb-4" />
              <p className="text-gray-400 leading-relaxed max-w-md">
                Depth in Service. Strength in Delivery. Your trusted partner for industrial maintenance, inspection, and testing solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-[#D4A035] transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-[#D4A035] transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-[#D4A035] transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-[#D4A035] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Services</h4>
              <ul className="space-y-3">
                <li className="text-gray-400">Fabrication & Machining</li>
                <li className="text-gray-400">NDT Inspection</li>
                <li className="text-gray-400">Industrial Maintenance</li>
                <li className="text-gray-400">Quality Assurance</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-center">
              © 2025 Deep Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}