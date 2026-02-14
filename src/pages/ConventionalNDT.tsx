import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ndtMethods = [
  {
    id: "ut",
    title: "Ultrasonic Testing (UT)",
    image: "/images/ut-testing.jpg",
    description:
      "Ultrasonic Testing (UT) is a non-destructive method used to detect internal flaws, measure material thickness, and evaluate the integrity of metals and welded components. It works by sending high-frequency sound waves into a material and analysing the reflections from defects such as cracks, voids, or corrosion.",
    details:
      "UT is widely used for weld inspections, corrosion mapping, thickness measurements, and assessing pressure vessels, pipelines, and structural components. The technique provides accurate, reliable results and allows for immediate evaluation without affecting the material.",
    advantages: [
      "Detects internal flaws with high accuracy",
      "Measures material thickness precisely",
      "Immediate evaluation without material damage",
      "Applicable to pressure vessels, pipelines, and structural components",
      "Reliable for weld inspections and corrosion mapping",
    ],
  },
  {
    id: "pt",
    title: "Penetrant Testing (PT)",
    image: "/images/pt-testing.jpg",
    description:
      "Penetrant Testing (PT) is a non-destructive testing method used to detect surface-breaking defects in metals, plastics, and ceramics. The technique involves applying a liquid penetrant to the surface of a component, allowing it to seep into cracks, pores, or other discontinuities. Excess penetrant is removed, and a developer is applied to draw out the penetrant from defects, making them visible under appropriate lighting.",
    details:
      "PT is widely used for inspecting welds, castings, forgings, and machined components. It is highly effective for detecting surface cracks, porosity, laps, and other flaws that are open to the surface. Penetrant Testing is carried out by certified technicians to ensure accurate detection of surface defects, helping maintain component integrity and safe operation.",
    advantages: [
      "Detects surface-breaking defects with high sensitivity",
      "Applicable to a variety of materials including metals and plastics",
      "Simple and cost-effective inspection method",
      "Provides immediate visual results",
      "Non-destructive with minimal impact on the component",
    ],
  },
  {
    id: "mpt",
    title: "Magnetic Particle Testing (MPT)",
    image: "/images/mpt-testing.jpg",
    description:
      "Magnetic Particle Testing (MPT) is a non-destructive testing method used to detect surface and near-surface defects in ferromagnetic materials. The component is magnetized, and fine magnetic particles are applied to the surface. Discontinuities such as cracks or voids create a leakage in the magnetic field, causing the particles to gather and form a visible indication of the defect.",
    details:
      "MPT is commonly used for inspecting welds, shafts, gears, and structural components, providing high sensitivity for detecting cracks, laps, seams, and other discontinuities. MPT inspections are performed by certified technicians to ensure accurate detection and maintain component safety and reliability.",
    advantages: [
      "Detects surface and slightly subsurface defects in ferromagnetic materials",
      "Quick and reliable method for welds and structural components",
      "Provides immediate visual results",
      "Non-destructive and cost-effective",
    ],
  },
  {
    id: "vi",
    title: "Visual Inspection (VI)",
    image: "/images/vi-testing.jpg",
    description:
      "Visual Inspection (VI) is the most fundamental non-destructive testing method, used to detect surface defects, corrosion, misalignment, and other visible irregularities. VI can be performed directly or with tools such as borescopes, cameras, or magnifying devices to inspect hard-to-reach areas.",
    details:
      "VI is widely applied for welds, piping, tanks, structural components, and machinery, serving as an essential first step in any inspection program. Visual Inspections are carried out by experienced personnel to identify visible defects, assess asset condition, and support maintenance and integrity management programs.",
    advantages: [
      "Simple, fast, and cost-effective",
      "Detects surface defects and general condition issues",
      "Can be performed on-site with minimal preparation",
      "Supports planning of further detailed NDT methods",
    ],
  },
  {
    id: "oxide",
    title: "Ultrasonic Internal Oxide Scale Thickness Measurement",
    image: "/images/oxide-testing.jpg",
    description:
      "Ultrasonic Internal Oxide Scale Thickness Measurement is a specialized non-destructive testing technique used to assess the thickness of oxide layers and corrosion products on the internal surfaces of boilers, heat exchangers, and process equipment.",
    details:
      "The technique uses ultrasonic waves to measure the thickness of oxide layers without removing the component from service. High-frequency ultrasonic pulses are transmitted through the material, and reflections from interfaces within the oxide scale and base metal are analyzed. This provides accurate measurements of oxide layer thickness, enabling early detection of excessive scaling or corrosion.",
    applications: [
      "Boilers and superheaters",
      "Heat exchanger tubes",
      "Condensers",
      "Steam generators",
      "Process piping and vessels",
    ],
    advantages: [
      "Accurate measurement of internal oxide scale thickness",
      "Non-destructive and does not require component disassembly",
      "Supports condition monitoring and predictive maintenance",
      "Helps prevent tube failure, reduced efficiency, and unplanned downtime",
      "Provides reliable data for long-term asset integrity planning",
    ],
  },
  {
    id: "pmi",
    title: "Positive Material Identification (PMI)",
    image: "/images/pmi-testing.jpg",
    description:
      "Positive Material Identification (PMI) is a non-destructive testing technique used to determine the composition of metallic alloys by analyzing the quantities of their constituent elements. This ensures the material meets the required specifications and is suitable for its intended application.",
    details:
      "One of the most common methods for PMI is X-Ray Fluorescence (XRF). This technique involves bombarding the material with high-energy X-rays or gamma rays, causing the atoms to emit secondary (fluorescent) X-rays. The emitted energy, which is characteristic of the material's atoms, is then measured to determine the exact composition of the material. PMI using XRF is performed by trained technicians to provide reliable and accurate material verification.",
    advantages: [
      "Provides quick, non-destructive material analysis",
      "Accurately identifies the elemental composition of alloys",
      "Ideal for ensuring compliance with material specifications in real time",
      "Can be used in the field or on-site for fast results",
    ],
  },
  {
    id: "hardness",
    title: "Portable Hardness Testing (UCI & Leeb Method)",
    image: "/images/hardness-testing.jpg",
    description:
      "Portable Hardness Testing services using advanced UCI (Ultrasonic Contact Impedance) and Leeb rebound testing methods allow on-site measurement of metallic materials without cutting or damaging components, making them ideal for in-service inspection and field applications.",
    details:
      "The UCI method is suitable for small and thin components, heat-affected zones (HAZ), weld inspection, and finished or precision-machined parts — delivering high accuracy on fine-grain materials. The Leeb method is ideal for large, heavy components, forgings and castings, pressure vessels, structural parts, and rough surface applications — providing fast and reliable hardness measurements directly on-site.",
    applications: [
      "Small and thin components (UCI)",
      "Heat-affected zones & weld inspection (UCI)",
      "Forgings, castings & pressure vessels (Leeb)",
      "Structural parts & rough surfaces (Leeb)",
    ],
    advantages: [
      "On-site measurement without cutting or damaging components",
      "High accuracy on fine-grain materials with UCI method",
      "Fast and reliable results with Leeb method",
      "Performed in accordance with relevant standards",
      "Verifies material properties and heat treatment quality",
    ],
  },
  {
    id: "ferrite",
    title: "Ferrite Measurement Testing",
    image: "/images/ferrite-testing.jpg",
    description:
      "Ferrite Measurement Testing determines ferrite content in austenitic and duplex stainless steels, weld metal, and cladding materials. Ferrite measurement is critical for ensuring the correct balance between strength, ductility, and corrosion resistance — especially in pressure vessels, piping systems, and critical process equipment.",
    details:
      "Calibrated ferrite meters deliver precise, non-destructive measurements in Ferrite Number (FN), ensuring reliable and repeatable results. Ferrite testing helps prevent hot cracking, reduce corrosion risks, and ensure material performance meets design and operational requirements.",
    applications: [
      "On-site and laboratory ferrite measurement",
      "Weld metal ferrite verification",
      "Duplex stainless steel phase balance assessment",
      "Cladding and overlay inspection",
      "Compliance verification with international standards",
    ],
    advantages: [
      "Precise non-destructive ferrite content measurement",
      "Prevents hot cracking and corrosion risks",
      "Reliable and repeatable results in Ferrite Number (FN)",
      "Ensures material performance meets design requirements",
    ],
  },
  {
    id: "dft",
    title: "Dry Film Thickness (DFT) Measurement",
    image: "/images/dft-testing.jpg",
    description:
      "Dry Film Thickness (DFT) measurement services verify that applied coatings meet specified thickness requirements. DFT measurement is essential to ensure proper corrosion protection, coating performance, and long-term durability of industrial assets.",
    details:
      "Calibrated digital thickness gauges perform non-destructive measurements on coated ferrous and non-ferrous substrates in accordance with project specifications and international standards. This ensures the coating provides the intended level of protection for pipelines, storage tanks, structural steel, and pressure vessels.",
    advantages: [
      "Accurate verification of coating thickness",
      "Non-destructive measurement on ferrous and non-ferrous substrates",
      "Ensures proper corrosion protection",
      "Compliant with international standards",
      "Supports long-term asset durability",
    ],
  },
  {
    id: "holiday",
    title: "Holiday Testing",
    image: "/images/holiday-testing.jpg",
    description:
      "Holiday Testing detects discontinuities, pinholes, cracks, and defects in protective coatings and linings. It is essential for ensuring the integrity of coatings applied to pipelines, storage tanks, pressure vessels, and other critical assets.",
    details:
      "Non-destructive holiday detection is performed using calibrated low-voltage and high-voltage holiday detectors, in accordance with project specifications and international standards. Even minor coating defects can lead to corrosion, leakage, and costly failures if left undetected.",
    advantages: [
      "Detects pinholes, cracks, and coating discontinuities",
      "Uses both low-voltage and high-voltage detection methods",
      "Prevents corrosion, leakage, and costly failures",
      "Non-destructive and standards-compliant",
      "Essential for pipeline, tank, and vessel coating integrity",
    ],
  },
];

const ConventionalNDT = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="gradient-navy pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-steel hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-4">
            Conventional NDT
          </h1>
          <p className="text-steel max-w-2xl text-lg">
            Comprehensive non-destructive testing services to ensure the
            integrity, safety, and reliability of your critical assets.
          </p>
        </div>
      </section>

      {/* NDT Methods */}
      <section className="py-16 px-4">
        <div className="container mx-auto space-y-20">
          {ndtMethods.map((method, index) => (
            <article
              key={method.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              {/* Image - alternating sides */}
              <div
                className={`rounded-xl overflow-hidden shadow-lg ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={method.image}
                  alt={method.title}
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {method.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {method.description}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {method.details}
                </p>

                {method.applications && (
                  <div className="mb-6">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                      Applications
                    </h3>
                    <ul className="space-y-2">
                      {method.applications.map((app) => (
                        <li
                          key={app}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  Advantages
                </h3>
                <ul className="space-y-2">
                  {method.advantages.map((adv) => (
                    <li
                      key={adv}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConventionalNDT;
