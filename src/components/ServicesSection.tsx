import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import fabricationImg from "@/assets/fabrication.jpg";
import industryImg from "@/assets/industry.jpg";

const serviceTabs = [
  {
    id: "conventional",
    label: "Conventional NDT",
    link: "/conventional-ndt",
    cards: [
      { title: "Ultrasonic Testing (UT)", desc: "High-frequency sound waves to detect internal flaws and measure thickness", hash: "ut" },
      { title: "Penetrant Testing (PT)", desc: "Surface-breaking defect detection using liquid penetrant", hash: "pt" },
      { title: "Magnetic Particle Testing (MPT)", desc: "Surface and near-surface defect detection in ferromagnetic materials", hash: "mpt" },
      { title: "Visual Inspection (VI)", desc: "Fundamental inspection for surface defects and visible irregularities", hash: "vi" },
      { title: "Oxide Scale Measurement", desc: "Ultrasonic internal oxide scale thickness measurement", hash: "oxide" },
      { title: "Positive Material Identification", desc: "Alloy composition verification using XRF technology", hash: "pmi" },
      { title: "Portable Hardness Testing", desc: "On-site hardness measurement using UCI & Leeb methods", hash: "hardness" },
      { title: "Ferrite Measurement", desc: "Ferrite content testing in stainless steels and weld metal", hash: "ferrite" },
      { title: "DFT Measurement", desc: "Dry film thickness verification for coatings", hash: "dft" },
      { title: "Holiday Testing", desc: "Coating discontinuity and pinhole detection", hash: "holiday" },
    ],
  },
  {
    id: "advanced",
    label: "Advanced NDT",
    link: "/advanced-ndt",
    cards: [
      { title: "Tube Inspection", desc: "ECT, RFET, MFL & SECT for heat exchangers and tubular products", hash: "tube-inspection" },
      { title: "MFL – Tank Floor / Pipe Scanning", desc: "Corrosion mapping for tank floors and pipeline integrity", hash: "mfl-tank-pipe" },
      { title: "Phased Array UT (PAUT)", desc: "Multi-element ultrasonic beam steering for weld and base material inspection", hash: "paut" },
      { title: "TOFD Inspection", desc: "Time of Flight Diffraction for precise butt weld evaluation", hash: "tofd" },
      { title: "TFM & PCI", desc: "Total Focusing Method and Phase Coherence Imaging for high-resolution flaw detection", hash: "tfm-pci" },
      { title: "Acoustic Eye Inspection", desc: "Rapid tube defect detection using acoustic pulse reflectometry", hash: "acoustic-eye" },
      { title: "SRUT", desc: "Short Range Guided Wave testing for corrosion screening", hash: "srut" },
    ],
  },
  {
    id: "drilling",
    label: "Drilling / OCTG",
    link: "/drilling-octg",
    cards: [
      { title: "Casing & Tubing Inspection", desc: "Integrity assessment of oil and gas well casing and tubing", hash: "casing-tubing" },
      { title: "BHA Inspection", desc: "Bottom Hole Assembly component examination for wear and defects", hash: "bha" },
      { title: "Rig Inspection", desc: "Complete rig assessment per API and IADC standards", hash: "rig-inspection" },
      { title: "Rig Handling Tools", desc: "NDT inspection of handling equipment for safety compliance", hash: "rig-handling" },
      { title: "BOP Stack Overhauling", desc: "Blowout Preventer NDT inspection and pressure test witnessing", hash: "bop" },
      { title: "Drill Pipe Inspection", desc: "Electromagnetic, MPI, UT and visual assessment of drill pipes", hash: "drill-pipe" },
      { title: "Third-Party QA/QC for OCTG", desc: "Independent quality assurance for tubular goods", hash: "octg-qaqc" },
    ],
  },
  {
    id: "plant",
    label: "Plant Inspection",
    link: "/plant-inspection",
    cards: [
      { title: "API In-Service Inspection", desc: "Pressure vessels, storage tanks & piping integrity assessment", hash: "api-inspection" },
      { title: "QA/QC & Welding Inspection", desc: "Comprehensive quality assurance during fabrication and construction", hash: "qaqc-welding" },
      { title: "Test Witnessing", desc: "Mechanical, FAT, hydrostatic & performance test witnessing", hash: "witnessing" },
      { title: "NDT & Visual Inspection", desc: "Third-party witnessing of NDT activities", hash: "ndt-visual" },
      { title: "Vendor & Project Inspection", desc: "Third-party inspection at manufacturing facilities and on-site", hash: "vendor-inspection" },
      { title: "Shutdown Inspection", desc: "Pre-shutdown surveys and detailed shutdown inspection services", hash: "shutdown" },
      { title: "Coating & Painting Inspection", desc: "Surface preparation, DFT, and holiday testing for coatings", hash: "coating" },
      { title: "Asset Integrity Management", desc: "RBI, NDT Level III, FFS assessment and plant integrity studies", hash: "aim" },
    ],
  },
  {
    id: "monitoring",
    label: "Third-Party Monitoring",
    link: "/third-party-monitoring",
    cards: [
      { title: "Drawings & Documentation Review", desc: "Design specifications alignment with project requirements", hash: "drawings-review" },
      { title: "Independent Analysis", desc: "In-depth assessment of all design-related issues", hash: "independent-analysis" },
      { title: "Consultancy & Specification Review", desc: "Expert review and refinement of project specifications", hash: "consultancy-review" },
      { title: "Quality Assurance Participation", desc: "Active involvement in quality audits and process oversight", hash: "qa-participation" },
      { title: "Sub-Contractor Audits", desc: "Evaluating engineering and fabrication practices for compliance", hash: "sub-contractor-audits" },
      { title: "Construction & Installation Reviews", desc: "Monitoring adherence to standards and regulations", hash: "construction-reviews" },
    ],
  },
];

const industries = [
  "Oil & Gas facilities",
  "Petrochemical plants",
  "Power generation facilities",
  "Offshore & onshore operations",
  "Manufacturing & processing",
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("conventional");
  const activeService = serviceTabs.find((t) => t.id === activeTab)!;

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

        {/* NDT Services Tabs */}
        <div className="mb-24">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Our Inspection Services
          </h2>

          {/* Tab Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {serviceTabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {tab.label}
                {i < serviceTabs.length - 1 && activeTab !== tab.id && (
                  <ArrowRight className="w-3 h-3 text-primary opacity-50 hidden sm:block" />
                )}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
            {activeService.cards.map((card) => (
              <Link
                key={card.title}
                to={`${activeService.link}#${card.hash}`}
                className="group rounded-xl border border-border bg-card p-5 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                <h3 className="font-display text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {card.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to={activeService.link}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View all {activeService.label} services <ArrowRight className="w-4 h-4" />
            </Link>
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
