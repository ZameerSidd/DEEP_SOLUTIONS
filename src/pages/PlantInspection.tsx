import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";

const services = [
  {
    id: "api-inspection",
    title: "API In-Service Inspection of Pressure Vessels, Storage Tanks & Piping",
    description: "Our team performs API in-service inspections in accordance with recognized standards to assess the structural integrity of pressure vessels, storage tanks, and process piping systems.",
    details: "We identify corrosion, material degradation, cracks, and mechanical damage to ensure continued safe operation and regulatory compliance.",
    items: ["Pressure vessels", "Storage tanks", "Process piping systems"],
  },
  {
    id: "qaqc-welding",
    title: "QA/QC & Welding Inspection Services",
    description: "Deep Solutions Co. delivers comprehensive Quality Assurance (QA) and Quality Control (QC) services during fabrication, construction, and installation phases.",
    details: "We ensure all welding activities meet industry standards and client requirements.",
    items: ["Welding Procedure Specification (WPS) verification", "Welder qualification review", "Fit-up and welding monitoring", "Inspection of welded joints", "Compliance with project specifications and international codes"],
  },
  {
    id: "witnessing",
    title: "Witnessing Mechanical, FAT, Hydrostatic & Performance Tests",
    description: "We provide independent third-party witnessing for mechanical testing, Factory Acceptance Tests (FAT), hydrostatic pressure testing, and performance and functional testing.",
    details: "Our inspection services verify that equipment and systems meet contractual, technical, and safety requirements prior to commissioning or delivery.",
    items: ["Mechanical testing", "Factory Acceptance Tests (FAT)", "Hydrostatic pressure testing", "Performance and functional testing"],
  },
  {
    id: "ndt-visual",
    title: "Non-Destructive Testing (NDT) & Visual Inspection",
    description: "Deep Solutions Co. offers third-party witnessing of NDT activities, ensuring all testing is performed correctly and results are accurately recorded and reported.",
  },
  {
    id: "vendor-inspection",
    title: "Third-Party Vendor & Project Inspection",
    description: "Our third-party inspection services ensure materials, fabricated components, and equipment meet approved specifications before shipment or installation.",
    details: "We provide vendor inspections at manufacturing facilities and on-site project inspections to safeguard your investment and maintain quality control.",
  },
  {
    id: "shutdown",
    title: "Pre-Shutdown Surveys & Shutdown Inspection Services",
    description: "We support plant shutdowns with comprehensive pre-shutdown assessments and detailed inspection services.",
    items: ["Identify maintenance priorities", "Evaluate equipment condition", "Minimize downtime", "Ensure safe and efficient plant restart"],
  },
  {
    id: "coating",
    title: "Coating & Painting Inspection Services",
    description: "We provide professional coating and painting inspection to ensure corrosion protection and long-term asset reliability.",
    items: ["Surface preparation inspection", "Environmental condition monitoring", "Dry Film Thickness (DFT) measurement", "Holiday testing", "Coating compliance verification"],
  },
];

const aimServices = [
  {
    id: "rbi",
    title: "Risk-Based Inspection (RBI)",
    description: "We perform Risk-Based Inspection (RBI) studies in accordance with API 580/581 and customized risk-based methodologies.",
    items: ["Prioritize high-risk equipment", "Optimize inspection intervals", "Reduce downtime", "Improve safety and reliability"],
  },
  {
    id: "ndt-level3",
    title: "NDT Level III Services",
    description: "Our certified NDT Level III specialists provide expert technical oversight and compliance verification.",
    items: ["NDT procedure development and approval", "Technical oversight and audits", "Personnel qualification support", "Advanced interpretation and compliance verification"],
  },
  {
    id: "ffs",
    title: "Fitness For Service (FFS) Assessment",
    description: "We conduct Fitness For Service (FFS) assessments in line with recognized standards to evaluate equipment with corrosion, cracks, or other damage.",
    items: ["Structural integrity", "Remaining service life", "Repair or replacement requirements"],
  },
  {
    id: "plant-study",
    title: "Plant Asset Integrity Study",
    description: "We perform comprehensive Plant Asset Integrity Studies to evaluate mechanical integrity, inspection effectiveness, and overall asset health — providing a clear roadmap to improve reliability and minimize operational risk.",
  },
];

const PlantInspection = () => {
  useScrollToHash();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="gradient-navy pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-steel hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-4">Plant Inspection Services</h1>
          <p className="text-steel max-w-3xl text-lg">Reliable Industrial Inspection & QA/QC Solutions</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-secondary">
        <div className="container mx-auto">
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            Deep Solutions Co. provides professional Plant Inspection Services to ensure the safety, integrity, and compliance of industrial facilities. Our certified inspectors deliver independent, standards-compliant inspection solutions for oil & gas, petrochemical, power, manufacturing, and infrastructure projects.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto space-y-16">
          {services.map((service, index) => (
            <article key={service.id} id={service.id} className="scroll-mt-24 max-w-4xl">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              {service.details && <p className="text-muted-foreground leading-relaxed mb-4">{service.details}</p>}
              {service.items && (
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="aim" className="scroll-mt-24 py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Asset Integrity Management</h2>
          <p className="text-muted-foreground leading-relaxed max-w-4xl mb-12">
            Deep Solutions Co. provides professional Asset Integrity Management (AIM) services to ensure the safety, reliability, and performance of critical industrial assets.
          </p>
          <div className="space-y-16">
            {aimServices.map((service) => (
              <article key={service.id} id={service.id} className="scroll-mt-24 max-w-4xl">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                {service.items && (
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlantInspection;
