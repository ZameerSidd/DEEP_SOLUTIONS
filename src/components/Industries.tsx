import { motion } from 'motion/react';
import { Factory, Droplet, Zap, Ship, Building2, Flame, Wind, Boxes } from 'lucide-react';

const industries = [
  { icon: Droplet, title: 'Oil & Gas', color: 'from-blue-500 to-blue-600' },
  { icon: Factory, title: 'Petrochemical', color: 'from-purple-500 to-purple-600' },
  { icon: Zap, title: 'Power Generation', color: 'from-yellow-500 to-yellow-600' },
  { icon: Ship, title: 'Marine & Offshore', color: 'from-cyan-500 to-cyan-600' },
  { icon: Building2, title: 'Infrastructure', color: 'from-gray-500 to-gray-600' },
  { icon: Flame, title: 'Manufacturing', color: 'from-orange-500 to-orange-600' },
  { icon: Wind, title: 'Energy & Utilities', color: 'from-green-500 to-green-600' },
  { icon: Boxes, title: 'Industrial Plants', color: 'from-red-500 to-red-600' },
];

interface IndustriesProps {
  industriesImage: string;
}

export function Industries({ industriesImage }: IndustriesProps) {
  return (
    <section className="py-12 md:py-20 lg:py-[100px] bg-[#F5F5F5]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Title - 64px bottom margin */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Title with 16px gap */}
          <h2 className="text-[#0A1A33] mb-4">
            Industry <span className="text-[#C9A24A]">Applications</span>
          </h2>
          {/* Divider with 16px gap */}
          <div className="w-20 h-1 bg-[#C9A24A] mx-auto mb-4 md:mb-6 lg:mb-8" />
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Serving diverse industrial sectors with specialized expertise and precision
          </p>
        </motion.div>

        {/* Industry Image Banner - 40px gap to cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-12 md:mb-16 lg:mb-20 h-[300px] md:h-[400px] shadow-2xl"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${industriesImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A33]/80 via-[#0A1A33]/40 to-transparent" />
          </div>
          {/* Content padding */}
          <div className="relative h-full flex items-end px-6 md:px-10 lg:px-16 pb-8 md:pb-12 lg:pb-16">
            <div>
              {/* Title with 12px gap */}
              <h3 className="text-white mb-3">Trusted Across Critical Industries</h3>
              <p className="text-gray-200 text-lg max-w-2xl">
                Delivering excellence in Saudi Arabia&apos;s most demanding sectors
              </p>
            </div>
          </div>
        </motion.div>

        {/* Industries Grid - 32px gap between tiles, 24px internal padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              {/* Card with 24px internal padding */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center border-2 border-transparent hover:border-[#C9A24A]">
                {/* Icon with 24px gap to title */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg`}
                >
                  <industry.icon className="text-white" size={28} />
                </motion.div>
                <h4 className="text-[#0A1A33] group-hover:text-[#C9A24A] transition-colors duration-300">
                  {industry.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}