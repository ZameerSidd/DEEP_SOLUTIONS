import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";

const services = [
  {
    id: "casing-tubing",
    title: "Casing and Tubing Inspection",
    description:
      "Casing and tubing inspections are critical for maintaining the integrity and safety of oil and gas wells. Our inspections use a variety of techniques to detect material defects, corrosion, mechanical damage (such as dents, bends, and deformations), wear, and erosion. These evaluations ensure that your well operations are safe, reliable, and efficient.",
  },
  {
    id: "bha",
    title: "Bottom Hole Assembly (BHA) Inspection",
    description:
      "BHA inspection is essential for maintaining the integrity of the drilling assembly. We thoroughly examine components like drill bits, subs, heavy weight collars, jars, and others for mechanical damage, wear, cracks, and defects. Regular BHA inspections help improve safety and efficiency during drilling operations by preventing costly failures.",
  },
  {
    id: "rig-inspection",
    title: "Rig Inspection",
    description:
      "Our Rig Inspections assess all components of the rig, including the crown, mast, substructure, drilling equipment, and safety systems. We use advanced technology to evaluate the rig's strength and integrity based on standards from the American Petroleum Institute (API) and International Association of Drilling Contractors (IADC). These inspections identify wear, damage, and defects that could lead to equipment failure or safety issues, helping to prevent downtime and ensuring operational safety.",
  },
  {
    id: "rig-handling",
    title: "Rig Handling Tools Inspection",
    description:
      "Rig handling equipment must be regularly inspected to ensure safety and reliability. Using Non-Destructive Testing (NDT) techniques, we detect defects and flaws in handling equipment without causing any damage. Following API standards and manufacturer guidelines, our inspections identify potential issues before they escalate, ensuring the long-term safety and performance of your equipment.",
  },
  {
    id: "bop",
    title: "Blowout Preventer (BOP) Stack Overhauling – NDT Inspection",
    description:
      "The Blowout Preventer (BOP) is a critical component in drilling operations. Our BOP Stack Overhauling Inspections focus on Non-Destructive Testing (NDT), including Magnetic Particle Inspection (MPI), Liquid Penetrant Testing (LPT), Thickness Gauging, and Hardness Testing on overhauled parts. We also witness pressure tests and ensure that the BOP stack is fully compliant with API and client maintenance procedures. This inspection minimizes the risk of blowouts, ensuring safe and effective drilling operations.",
  },
  {
    id: "drill-pipe",
    title: "Drill Pipe Inspection",
    description:
      "Drill pipe inspections are crucial for ensuring the integrity and safety of your drilling equipment. We employ various techniques such as Electromagnetic Inspection, Magnetic Particle Inspection, Ultrasonic Testing (UT), and Visual Inspections to assess the internal and external conditions of drill pipes. These inspections help determine whether pipes are fit for continued use or require repair or replacement.",
  },
  {
    id: "octg-qaqc",
    title: "Third-Party QA/QC for OCTG",
    description:
      "Our Third-Party QA/QC Services for Oil Country Tubular Goods (OCTG) ensure compliance with industry standards and client specifications. These independent inspections cover visual, dimensional, and Non-Destructive Testing (NDT) to guarantee that your OCTG products meet all safety and quality requirements. By choosing our third-party QA/QC services, you enhance product reliability, reduce risk, and ensure full compliance with industry regulations.",
  },
];

const DrillingOCTG = () => {
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
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-4">
            Drilling Equipment Inspection / OCTG Services
          </h1>
          <p className="text-steel max-w-3xl text-lg">
            At Deep Solutions Co., we specialize in Drilling Equipment Inspection and Oil Country Tubular Goods (OCTG) services, providing comprehensive and reliable inspections to ensure the safety, performance, and compliance of drilling operations.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-secondary">
        <div className="container mx-auto">
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            Using advanced technology and experienced professionals, we deliver precise evaluations that help maximize efficiency and reduce operational risks. Our inspection services cover a wide range of drilling equipment and components, ensuring that your operations run smoothly, safely, and efficiently.
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
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-secondary">
        <div className="container mx-auto">
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            At Deep Solutions Co., our comprehensive drilling equipment and OCTG inspection services help safeguard your assets, reduce downtime, and ensure the efficient, safe operation of your drilling operations.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DrillingOCTG;
