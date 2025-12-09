import { motion } from 'motion/react';
import {
  Wrench,
  Cog,
  Flame,
  Scissors,
  Zap,
  Scan,
  Radio,
  Waves,
  CircleDot,
  Eye,
  Gauge,
  TestTube,
} from 'lucide-react';

const fabricationServices = [
  { icon: Wrench, title: 'Fabrication', description: 'Custom metal fabrication solutions' },
  { icon: Cog, title: 'Precision Machining', description: 'CNC and conventional machining' },
  { icon: Flame, title: 'Welding Solutions', description: 'Expert welding services' },
  { icon: Scissors, title: 'Cutting', description: 'Precise metal cutting services' },
  { icon: Zap, title: 'EDM Notch Machining', description: 'Electrical discharge machining' },
];

const ndtServices = [
  { icon: Radio, title: 'MT – Magnetic Particle Testing', short: 'MT' },
  { icon: Scan, title: 'PT – Penetrant Testing', short: 'PT' },
  { icon: Waves, title: 'UT – Ultrasonic Testing', short: 'UT' },
  { icon: CircleDot, title: 'ET – Eddy Current (Surface)', short: 'ET' },
  { icon: Radio, title: 'ECT – Eddy Current Testing', short: 'ECT' },
  { icon: Waves, title: 'RFT – Remote Field Testing', short: 'RFT' },
  { icon: Radio, title: 'MFL – Magnetic Flux Leakage', short: 'MFL' },
  { icon: Waves, title: 'PAUT – Phased Array UT', short: 'PAUT' },
  { icon: Waves, title: 'TOFD – Time of Flight Diffraction', short: 'TOFD' },
  { icon: Eye, title: 'Borescope (RVI) Inspection', short: 'RVI' },
  { icon: TestTube, title: 'FT – Ferrite Testing', short: 'FT' },
  { icon: Gauge, title: 'HT – Hardness Testing', short: 'HT' },
  { icon: Scan, title: 'PMI – Positive Material Identification', short: 'PMI' },
];

interface ServicesProps {
  fabricationImage: string;
  ndtImage: string;
}

export function Services({ fabricationImage, ndtImage }: ServicesProps) {
  return (
    <section id="services" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-[#0A1A33] mb-6">
            Our <span className="text-[#C9A24A]">Services</span>
          </h2>
          <div className="w-20 h-1 bg-[#C9A24A] mx-auto mb-8" />
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Comprehensive industrial solutions designed for excellence and reliability
          </p>
        </motion.div>

        {/* Fabrication & Machining Section with Image Banner */}
        <div className="mb-24 lg:mb-32">
          {/* Section Header with Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden mb-12 h-[300px] md:h-[400px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${fabricationImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A33]/90 via-[#0A1A33]/70 to-[#0A1A33]/50" />
            </div>
            <div className="relative h-full flex items-center px-8 md:px-12 lg:px-16">
              <div>
                <h3 className="text-white mb-4">Fabrication & Machining</h3>
                <p className="text-gray-200 text-lg max-w-2xl">
                  Precision engineering solutions for complex industrial applications
                </p>
              </div>
            </div>
          </motion.div>

          {/* Fabrication Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
            {fabricationServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-7 shadow-md hover:shadow-xl hover:border-[#C9A24A] transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#C9A24A] to-[#B8923D] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={28} />
                </div>
                <h4 className="text-[#0A1A33] mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* NDT Services Section with Image */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: NDT Services List */}
              <div className="bg-[#0A1A33] p-8 md:p-12 lg:p-16">
                <h3 className="text-white mb-10">
                  Non-Destructive Testing (NDT)
                </h3>
                <p className="text-gray-300 mb-10 leading-relaxed">
                  Advanced inspection technologies ensuring structural integrity and safety
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
                  {ndtServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.03 }}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-4 text-white/90 hover:text-[#C9A24A] transition-colors duration-300 group cursor-pointer p-3 rounded-xl hover:bg-white/5"
                    >
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#C9A24A] transition-colors duration-300 flex-shrink-0">
                        <service.icon size={18} className="text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm md:text-base">{service.title}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Background Image */}
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="hidden lg:block relative min-h-[900px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${ndtImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0A1A33]/20 to-[#0A1A33]" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
