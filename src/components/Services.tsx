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
    <section id="services" className="py-12 md:py-20 lg:py-[120px] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Title - 64px bottom margin */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Title with 16px gap */}
          <h2 className="text-[#0A1A33] mb-4">
            Our <span className="text-[#C9A24A]">Services</span>
          </h2>
          {/* Divider with 16px gap */}
          <div className="w-20 h-1 bg-[#C9A24A] mx-auto mb-4" />
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Comprehensive industrial solutions designed for excellence and reliability
          </p>
        </motion.div>

        {/* Fabrication & Machining Section - 64px gap to next section */}
        <div className="mb-16">
          {/* Section Header with Image - 40px gap to cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden mb-10 h-[300px] md:h-[400px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${fabricationImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A33]/90 via-[#0A1A33]/70 to-[#0A1A33]/50" />
            </div>
            {/* Content padding */}
            <div className="relative h-full flex items-center px-8 md:px-12 lg:px-16">
              <div>
                {/* Title with 12px gap */}
                <h3 className="text-white mb-3">Fabrication & Machining</h3>
                <p className="text-gray-200 text-lg max-w-2xl">
                  Precision engineering solutions for complex industrial applications
                </p>
              </div>
            </div>
          </motion.div>

          {/* Fabrication Services Grid - 24px gap inside cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
            {fabricationServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl hover:border-[#C9A24A] transition-all duration-300 group"
              >
                {/* Icon with 16px gap to title */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#C9A24A] to-[#B8923D] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={28} />
                </div>
                {/* Title with 16px gap to description */}
                <h4 className="text-[#0A1A33] mb-4">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* NDT Services Section - 80px padding top/bottom, 80px margin above */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: NDT Services List - 80px padding */}
              <div className="bg-[#0A1A33] p-10 md:p-12 lg:p-16">
                {/* Title with 24px gap */}
                <h3 className="text-white mb-6 md:mb-8 lg:mb-10">
                  Non-Destructive Testing (NDT)
                </h3>
                {/* Description with 24px gap */}
                <p className="text-gray-300 mb-6 md:mb-8 lg:mb-10 leading-relaxed">
                  Advanced inspection technologies ensuring structural integrity and safety
                </p>

                {/* NDT List - 16px gap between items, 2-column with 24px gutter */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
                  {ndtServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.03 }}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-3 text-white/90 hover:text-[#C9A24A] transition-colors duration-300 group cursor-pointer p-3 rounded-xl hover:bg-white/5"
                    >
                      {/* Icon */}
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