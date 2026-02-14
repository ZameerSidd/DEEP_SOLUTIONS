export interface SubMethod {
  title: string;
  description: string;
  details?: string;
  applications?: string[];
  advantages?: string[];
  codes?: string[];
  prerequisites?: string;
  equipment?: string;
  evaluation?: string;
  keyBenefits?: string[];
}

export interface AdvancedNdtMethod {
  id: string;
  title: string;
  image: string;
  description: string;
  details?: string;
  applications?: string[];
  advantages?: string[];
  keyFeatures?: string[];
  subMethods?: SubMethod[];
}

export const advancedNdtMethods: AdvancedNdtMethod[] = [
  {
    id: "tube-inspection",
    title: "Tube Inspection",
    image: "/images/tube-inspection.jpg",
    description:
      "Deep Solutions Co. specializes in a range of advanced non-destructive testing (NDT) services, including Eddy Current Testing (ECT), Remote Field Eddy Current (RFET), Magnetic Flux Leakage (MFL), and Saturated Eddy Current Testing (SECT) for tubular products. We utilize internal diameter probe coils (bobbin) for testing both non-ferrous and ferrous materials (with magnetic saturation).",
    details:
      "In power plants, heat exchangers and steam generators contain thousands of tubes that must be safeguarded against leaks. Our diverse range of inspection techniques, combined with remote field testing methods, offers fast, efficient assessments to identify corrosion, erosion, cracking, and other forms of degradation in the tubing.",
    subMethods: [
      {
        title: "Eddy Current Testing (ECT)",
        description:
          "ECT is a fast and precise method used to identify discontinuities in a variety of materials, including tubing, heat exchangers, condensers, steam generators, air coolers, feed water heaters, wires, and plates. We apply electromagnetic induction to detect flaws in conductive materials. ECT is highly effective for locating even the smallest cracks near the surface of materials. This technique requires minimal surface preparation and can be used to inspect geometrically complex structures.",
        details:
          "In addition to flaw detection, Eddy Current Testing is also employed for purposes such as alloy separation, determining treatment conditions, measuring electrical conductivity, and assessing coating thickness. It can also locate repair welds, girth welds, and seam welds on ground-machined surfaces. We have a skilled in-house team of Eddy Current Testing professionals, specializing in the inspection of tubing in heat exchangers. Our testing equipment is portable, non-contact, and provides real-time feedback. The Eddy Current instruments we use can operate at test frequencies of up to 8 kHz, with inspection speeds reaching up to 2 meters per second.",
        codes: [
          "ANSI/ASNT CP-189: Standard for Qualification and Certification of Non-destructive Testing Personnel",
          "ASME Boiler and Pressure Vessel Code Section V, Article 8",
        ],
        prerequisites:
          "Before testing, all tubes must undergo cleaning. This is typically done using hydro jetting, with cleaning pressures ranging from 280 kg/m² to 560 kg/cm². The adequacy of cleaning is confirmed by inserting a suitable dummy probe or rod.",
        equipment:
          "Our electronic equipment is designed to energize the test coil with alternating currents of appropriate frequencies (e.g., 1 to 125 kHz) and to detect changes in the electromagnetic response of the coils. The instruments are calibrated with the probe in a defect-free position on the calibration tube.",
        evaluation:
          "Our expert Eddy Current technicians analyse the signals generated from the tubes under inspection, comparing them with those from a calibration standard to accurately detect and assess any flaws.",
      },
      {
        title: "Remote Field Eddy Current Testing (RFET)",
        description:
          "Remote Field Eddy Current Testing (RFET) is an advanced non-destructive testing technique used for the inspection of ferromagnetic tubes, particularly in heat exchangers, boilers, and similar equipment. RFET is employed to accurately detect internal and external corrosion, wall thinning, erosion, and cracking in steel and iron tubing.",
        details:
          "Unlike conventional Eddy Current Testing, RFET allows inspection of the full tube wall thickness. The technique operates by transmitting a low-frequency electromagnetic signal that travels through the tube wall and returns to a remote receiving coil. Any variation in wall thickness or material condition alters the signal, enabling precise identification of defects on both the inner and outer surfaces of the tube. RFET is especially effective for inspecting carbon steel tubes where conventional ECT may be limited. It provides uniform sensitivity around the tube circumference and along its entire length, ensuring reliable and repeatable inspection results.",
        applications: [
          "Heat exchangers",
          "Boilers and economizers",
          "Condensers",
          "Air coolers",
          "Ferromagnetic tubing systems",
        ],
        advantages: [
          "Detects both internal and external defects",
          "Suitable for ferromagnetic materials",
          "Inspects entire tube wall thickness",
          "Minimal surface preparation required",
          "High inspection speed with reliable accuracy",
          "Ideal for large-scale tube bundle inspections",
        ],
      },
      {
        title: "Magnetic Flux Leakage (MFL) – Tube Testing",
        description:
          "Magnetic Flux Leakage (MFL) Tube Testing is an effective non-destructive testing method used to detect corrosion, pitting, and wall-thickness loss in ferromagnetic tubes. MFL tube testing is widely applied for the inspection of heat exchangers, boilers, condensers, and other tubular components used in oil & gas, petrochemical, and power generation industries.",
        details:
          "The method works by magnetizing the tube using powerful permanent magnets or electromagnets. When the tube wall is sound, the magnetic field remains contained within the material. However, areas affected by corrosion or metal loss cause the magnetic field to leak from the surface. This magnetic leakage is detected by sensitive sensors and analyzed to identify the location, size, and severity of defects on both the internal and external surfaces of the tube. MFL tube testing allows rapid inspection of large tube bundles with consistent sensitivity and minimal preparation, making it a cost-effective solution for integrity assessment and preventive maintenance programs.",
        applications: [
          "Heat exchanger tubes",
          "Boiler and economizer tubes",
          "Condenser tubes",
          "Ferromagnetic tubular systems",
        ],
        advantages: [
          "Detects internal and external corrosion",
          "Effective for ferromagnetic materials",
          "High inspection speed for large tube bundles",
          "Minimal surface preparation required",
          "Reliable detection of pitting and wall loss",
          "Supports condition monitoring and life-extension planning",
        ],
      },
      {
        title: "Saturated Eddy Current Testing (SECT)",
        description:
          "Saturated Eddy Current Testing (SECT) is an advanced non-destructive testing technique used for the inspection of ferromagnetic tubes. SECT is performed to accurately inspect carbon steel and other ferromagnetic tubing commonly found in heat exchangers, boilers, and condensers.",
        details:
          "In this method, the tube is magnetically saturated using a strong magnetic field. Magnetic saturation minimizes the effect of material permeability, allowing eddy current signals to respond primarily to variations in wall thickness and defects. This enables reliable detection of internal and external corrosion, pitting, erosion, and general wall loss. SECT provides high-speed inspection with consistent sensitivity, making it ideal for large tube bundles where fast, accurate, and repeatable results are required.",
        applications: [
          "Heat exchanger tubes",
          "Boiler and economizer tubes",
          "Condenser tubes",
          "Carbon steel and ferromagnetic tubing",
        ],
        advantages: [
          "Detects internal and external defects",
          "Suitable for ferromagnetic materials",
          "Accurate identification of wall loss and pitting",
          "High inspection speed for large tube bundles",
          "Consistent and repeatable inspection results",
          "Minimal tube preparation required",
        ],
      },
    ],
  },
  {
    id: "mfl-tank-pipe",
    title: "Magnetic Flux Leakage (MFL) – Tank Floor Mapping / Pipe Scanning",
    image: "/images/mfl-tank-pipe.jpg",
    description:
      "Magnetic Flux Leakage (MFL) is a reliable non-destructive testing technique used to detect corrosion, pitting, and wall-thickness loss in steel structures. At Deep Solutions Co., MFL is widely applied for the inspection of tank floors and pipelines across the oil & gas, petrochemical, and industrial sectors.",
    subMethods: [
      {
        title: "MFL on Tank Floors",
        description:
          "MFL is extensively used for tank floor inspections, where corrosion can lead to product leakage, safety risks, and environmental damage. Regular inspection of tank floors is essential to maintain asset integrity and prevent costly failures.",
        details:
          "The method involves magnetizing the tank floor using permanent magnets. Any discontinuity caused by corrosion, pitting, or metal loss results in a leakage of the magnetic field. These magnetic field variations are detected, recorded, and analyzed to determine the exact location and severity of defects on both the near and far surfaces of the tank floor. MFL tank floor inspection provides a detailed corrosion map of the floor plates. This data can be stored and compared over time, supporting effective maintenance planning, repair prioritization, and long-term integrity management.",
      },
      {
        title: "MFL on Pipelines",
        description:
          "Magnetic Flux Leakage (MFL) is also an effective technique for inspecting pipelines, enabling the detection of corrosion, pitting, and wall loss in steel pipes. MFL pipe scanning systems are portable and cost-effective, allowing rapid screening of pipe runs and small-diameter vessels.",
        details:
          "MFL inspection is not affected by the presence or flow of product inside the pipe. Surveys can be performed both online and offline, even at surface temperatures up to 90°C. When combined with Ultrasonic Testing (UT) for confirmation and sizing of indications, MFL provides a reliable and economical solution for evaluating plant and pipeline integrity.",
      },
    ],
    keyFeatures: [
      "Flexible sensor heads suitable for a wide range of pipe and vessel sizes",
      "Rapid screening of complete piping systems with a higher probability of detection than UT spot measurements",
      "Seamless integration with UT for accurate defect quantification",
      "User-friendly operation with minimal training requirements",
      "Lightweight, battery-operated control modules for field use",
      "Proven MFL technology delivering consistent and accurate results",
      "Field-proven durability and reliability in demanding environments",
    ],
  },
  {
    id: "paut",
    title: "Phased Array Ultrasonic Testing (PAUT) Inspection",
    image: "/images/paut-testing.jpg",
    description:
      "Phased Array Ultrasonic Testing (PAUT) is an advanced non-destructive testing technique used for the detection and sizing of defects in welded joints and base materials. PAUT is applied to deliver accurate, reliable inspection results for critical components across oil & gas, petrochemical, power generation, and industrial sectors.",
    details:
      "PAUT utilizes multiple ultrasonic elements that are individually pulsed with precise time delays to electronically steer, focus, and sweep the ultrasonic beam through the material. This enables full coverage of the inspection area and allows defects to be detected at varying depths and orientations with a high degree of accuracy. Deep Solutions Co. is specialized in small bore pipe inspections using PAUT for a wide range of materials, including Stainless Steel (SS), Super Duplex Stainless Steel (SDSS), Carbon Steel (CS), and dissimilar material joints. Our expertise and tailored inspection techniques allow reliable detection and accurate sizing of flaws in small-diameter piping, where access limitations and complex weld geometries often challenge conventional inspection methods.",
    applications: [
      "Weld inspection (butt welds, fillet welds, and complex geometries)",
      "Pressure vessels",
      "Pipelines and piping systems",
      "Storage tanks",
      "Structural components",
      "Small bore piping systems",
    ],
    advantages: [
      "High probability of detection with precise defect sizing",
      "Effective inspection of complex weld geometries and thick sections",
      "Electronic beam steering and focusing for comprehensive coverage",
      "Real-time imaging with permanent digital data storage",
      "Reduced inspection time compared to conventional UT",
      "Ideal for small bore and critical piping applications",
    ],
  },
  {
    id: "tofd",
    title: "Time of Flight Diffraction (TOFD) Inspection",
    image: "/images/tofd-testing.jpg",
    description:
      "Time of Flight Diffraction (TOFD) is a highly accurate non-destructive testing method used for detecting, sizing, and evaluating defects in butt-welded joints. TOFD is employed to provide reliable, repeatable inspection results for critical components across oil & gas, petrochemical, power generation, and industrial sectors.",
    details:
      "TOFD works by generating ultrasonic waves from a pair of probes—one transmitting and one receiving—placed on either side of a butt weld. The technique detects sound diffracted by defect tips, allowing precise measurement of defect size, depth, and location. TOFD provides a full cross-sectional view of the weld, making it highly effective for volumetric inspection of butt welds.",
    applications: [
      "Butt weld inspection in pipelines and piping systems",
      "Pressure vessels",
      "Storage tanks",
      "Structural components",
    ],
    advantages: [
      "Highly accurate detection and sizing of defects in butt welds",
      "Effective for volumetric inspection and defect characterization",
      "Provides permanent digital records for analysis and reporting",
      "Minimal inspection time for full weld coverage",
      "Complements Phased Array Ultrasonic Testing (PAUT) for advanced weld evaluation",
      "Ideal for critical piping and structural systems",
    ],
  },
  {
    id: "tfm-pci",
    title: "Total Focusing Method (TFM) & Phase Coherence Imaging (PCI)",
    image: "/images/tfm-pci-testing.jpg",
    description:
      "Deep Solutions Co. offers advanced ultrasonic inspection services using Total Focusing Method (TFM) and Phase Coherence Imaging (PCI) to detect and size flaws in critical components with high precision. These techniques are ideal for welds, pressure vessels, pipelines, and structural parts in oil & gas, petrochemical, and industrial sectors.",
    subMethods: [
      {
        title: "Total Focusing Method (TFM)",
        description:
          "TFM is a cutting-edge ultrasonic imaging technique that provides high-resolution, full-area inspections of materials and welds. Using Full Matrix Capture (FMC) acquisition, TFM reconstructs detailed images of internal defects, making flaw interpretation easier than conventional phased array inspection.",
        keyBenefits: [
          "High-resolution imaging for precise defect detection",
          "Full-area coverage of welds and components",
          "Ideal for thick or complex geometries",
          "Compatible with portable ultrasonic devices for on-site inspections",
        ],
        details:
          "However, TFM images can sometimes suffer from low signal-to-noise ratios in thick or highly attenuative materials, which can limit sensitivity to certain defects.",
      },
      {
        title: "Phase Coherence Imaging (PCI)",
        description:
          "PCI is an advanced variant of TFM that addresses TFM limitations by using phase-only information from ultrasonic signals instead of amplitude. PCI enhances defect detection in challenging materials, providing consistent representation of crack-like and diffractive geometries.",
        keyBenefits: [
          "Amplitude-independent imaging: eliminates the need for amplitude calibration",
          "High sensitivity to narrow or pointed defects: enables accurate sizing of notch-like flaws",
          "Robust performance in thick or attenuative materials",
          "Live, real-time imaging: results are displayed immediately during inspection",
          "Improved detection of coherent defect zones despite higher background noise",
        ],
        details:
          "PCI works by quantizing ultrasonic signals into coherent (defect) and non-coherent (noise) zones, providing a quasi-binary visualization of potential defects. This makes it easier to identify and size flaws without being influenced by signal attenuation or calibration errors.",
      },
    ],
    advantages: [
      "Detect and size flaws with unmatched precision",
      "Inspect challenging materials and geometries",
      "Non-destructive and fully portable inspection methods",
      "Real-time imaging for faster decision-making",
      "Experienced technicians and certified NDT specialists",
    ],
  },
  {
    id: "acoustic-eye",
    title: "Acoustic Eye Inspection",
    image: "/images/acoustic-eye.jpg",
    description:
      "Deep Solutions Co. provides Acoustic Eye Inspection, a fast, reliable, and non-destructive method for detecting tube defects in heat exchangers, condensers, boilers, and other industrial equipment.",
    details:
      "The inspection uses Acoustic Pulse Reflectometry (APR) to identify changes in tube cross-sections and signal loss caused by leaks. An acoustic pulse is sent through the tube, and the reflected echoes are analyzed to detect irregularities. The results are compiled into a detailed inspection report showing the location and size of each defect.",
    advantages: [
      "Fast Inspection: Just 10 seconds per tube, minimizing downtime",
      "Versatile: Works on tubes up to 4 inches in diameter, including U-bends, twisted, and spiral-wound configurations",
      "Material Compatibility: Suitable for all tube materials",
      "User-Friendly: Minimal operator training required; compact, handheld device",
      "Cloud-Based Reporting: Easy data access and efficient reporting for maintenance planning",
      "Preventive Maintenance: Helps extend equipment lifespan and optimize operational reliability",
    ],
  },
  {
    id: "srut",
    title: "Short Range Ultrasonic Testing (SRUT)",
    image: "/images/srut-testing.jpg",
    description:
      "Short-Range Guided Wave Ultrasonic Testing (SRUT) is a non-destructive screening technique that uses low-frequency sound waves to flood thin-walled materials. The waves reflect back from interfaces such as cracks, corrosion, or pitting, allowing precise measurement of reflection distances. While SRUT cannot provide remaining wall thickness measurements, it is highly effective as a screening tool for early defect detection.",
    applications: [
      "Tank floor inspection – annular rings from the chime area",
      "Vessel inspection – detecting corrosion underneath saddle supports or other obstructions",
      "Piping and vessel inspections – in areas where probe scanning is possible",
      "Corrosion under pipe supports and other limited-access areas",
    ],
    advantages: [
      "Probes use multiple frequencies, enabling detection of all indications",
      "Capable of mapping and quantifying corrosion or defects",
      "Rapid scanning of annular rings, under supports, and cement walls",
      "Can scan 100% of the surface area up to 1m in length in a single inspection",
      "Suitable for material thicknesses from 4mm to 24mm",
      "Fully automated data collection with complete recording of results",
      "Applicable at elevated temperatures using specially modified probes",
      "Ideal for limited-access areas – minimal insulation removal, elevated locations, road crossings, and buried pipes without extensive scaffolding or lifting",
    ],
    details:
      "By combining Magnetic Flux Leakage (MFL) with SRUT, Deep Solutions Co. can provide a comprehensive integrity assessment of tank bottoms and annular plates, giving clients a complete picture of asset condition.",
  },
];
