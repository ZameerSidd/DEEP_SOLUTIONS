import { motion } from 'motion/react';
import { Target, Lightbulb, Shield, Award } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Expertise',
    description: 'Certified professionals with extensive industry experience',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Transparent processes and ethical business practices',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Cutting-edge technology and modern solutions',
  },
  {
    icon: Award,
    title: 'Reliability',
    description: 'Consistent quality and on-time project delivery',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-[#0A1A33] mb-6">
            About <span className="text-[#C9A24A]">Deep Solutions</span>
          </h2>
          <div className="w-20 h-1 bg-[#C9A24A] mx-auto mb-8" />
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Deep Solutions is a Saudi-based provider of high-quality industrial maintenance, fabrication, machining, and advanced NDT inspection services. Supporting critical industries with precision and reliability.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 bg-gradient-to-br from-[#C9A24A] to-[#B8923D] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <feature.icon className="text-white" size={28} />
              </motion.div>
              <h4 className="text-[#0A1A33] mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}