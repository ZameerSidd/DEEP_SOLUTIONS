import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";

const monitoringServices = [
  { id: "drawings-review", text: "Review of Drawings and Documentation – Ensuring that design specifications align with project requirements" },
  { id: "independent-analysis", text: "Independent Analysis – In-depth assessment of all design-related issues" },
  { id: "consultancy-review", text: "Consultancy and Specification Review – Expertise in reviewing and refining project specifications" },
  { id: "qa-participation", text: "Quality Assurance Participation – Active involvement in quality audits and process oversight" },
  { id: "sub-contractor-audits", text: "Audits of Sub-Contractors – Evaluating engineering and fabrication practices for compliance" },
  { id: "construction-reviews", text: "Construction and Installation Reviews – Monitoring activities to ensure adherence to standards and regulations" },
];

const ThirdPartyMonitoring = () => {
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
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-4">Third-Party Monitoring Services</h1>
          <p className="text-steel max-w-3xl text-lg">
            Comprehensive third-party monitoring to ensure the highest standards of accuracy and quality throughout the inspection process.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-8">
          <p className="text-muted-foreground leading-relaxed">
            At Deep Solutions Co., we provide comprehensive third-party monitoring services to ensure the highest standards of accuracy and quality throughout the inspection process. We believe that the most reliable way to ensure proper inspections is by having our experienced personnel on-site during the process.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We take a holistic approach to monitoring and inspection services, aligning with your specific business applications to enhance efficiency and effectiveness. By overseeing your procedures from start to finish, we ensure compliance with your requirements, validating your processes, and ultimately creating a safer work environment while minimizing downtime and reducing costs associated with equipment failure.
          </p>

          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Our Services Include</h2>
            <ul className="space-y-4">
              {monitoringServices.map((service) => (
                <li key={service.id} id={service.id} className="scroll-mt-24 flex items-start gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{service.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            At Deep Solutions Co., our third-party monitoring services help ensure that your projects meet the highest quality standards while enhancing safety, minimizing risks, and supporting your overall operational efficiency.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThirdPartyMonitoring;
