import { Wrench, Search, Radio, Eye, Radiation, Droplets, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import fabricationImg from "@/assets/fabrication.jpg";
import ndtImg from "@/assets/ndt.jpg";
import industryImg from "@/assets/industry.jpg";

const ndtServices = [
  { icon: Radio, label: "Ultrasonic Testing", desc: "High-frequency sound waves" },
  { icon: Search, label: "Eddy Current Inspection", desc: "Electromagnetic detection" },
  { icon: Wrench, label: "Magnetic Particle Testing", desc: "Surface defect detection" },
  { icon: Eye, label: "Visual Inspection", desc: "Expert assessment" },
  { icon: Radiation, label: "Radiographic Testing", desc: "X-ray imaging" },
  { icon: Droplets, label: "Liquid Penetrant Testing", desc: "Surface crack detection" },
];

const industries = [
  "Oil & Gas facilities",
  "Petrochemical plants",
  "Power generation facilities",
  "Offshore & onshore operations",
  "Manufacturing & processing",
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Fabrication */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Fabrication & Machining
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our state-of-the-art fabrication and machining services deliver precision and quality.
              From welding to CNC machining, cutting, and EDM machining, we provide comprehensive
              solutions for all your industrial manufacturing needs.
            </p>
            <ul className="space-y-3">
              {["Advanced welding techniques", "Precision CNC machining", "EDM machining capabilities", "Custom fabrication solutions"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={fabricationImg} alt="Fabrication and Machining" className="w-full h-80 object-cover" />
          </div>
        </div>

        {/* NDT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1 rounded-xl overflow-hidden">
            <img src={ndtImg} alt="Non-Destructive Testing" className="w-full h-80 object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Non-Destructive Testing (NDT)
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our comprehensive NDT services ensure the integrity and safety of your assets without
              causing damage. We utilize the latest inspection technologies and methodologies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ndtServices.map((s) => (
                <div key={s.label} className="flex items-start gap-3 p-3 rounded-lg bg-secondary">
                  <s.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{s.label}</p>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                to="/conventional-ndt"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Conventional NDT services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/advanced-ndt"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Advanced NDT services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div id="expertise" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Industry Applications
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We serve diverse industrial sectors with tailored solutions that meet the specific
              demands of each industry. Our expertise spans across critical infrastructure and
              industrial operations.
            </p>
            <ul className="space-y-3">
              {industries.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={industryImg} alt="Industry Applications" className="w-full h-80 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
