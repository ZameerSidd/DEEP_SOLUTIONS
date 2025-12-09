import { motion } from 'motion/react';
import { Eye, Target, Heart } from 'lucide-react';

const cards = [
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the leading provider of integrated industrial solutions in Saudi Arabia, driving excellence and innovation across all sectors.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    description: 'Delivering world-class industrial maintenance, fabrication, and advanced NDT inspection services that ensure safety, reliability, and operational efficiency.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Integrity, Excellence, Safety, Innovation, and Customer Commitment form the foundation of everything we do.',
  },
];

export function VisionMissionValues() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#F5F5F5]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 bg-gradient-to-br from-[#C9A24A] to-[#B8923D] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
              >
                <card.icon className="text-white" size={28} />
              </motion.div>
              <h3 className="text-[#0A1A33] mb-6">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}