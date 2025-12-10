import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 md:py-20 lg:py-[120px] bg-gradient-to-br from-[#0A1A33] via-[#1A2F4D] to-[#0A1A33] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#C9A24A] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C9A24A] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title with 16px gap */}
          <h2 className="text-white mb-4 md:mb-6 lg:mb-8">
            Ready for Reliable, High-Precision <br />
            <span className="text-[#C9A24A]">Inspection & Fabrication?</span>
          </h2>
          {/* Description with 32px gap to button */}
          <p className="text-gray-300 text-lg lg:text-xl mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with Deep Solutions for world-class industrial services that ensure safety, reliability, and excellence.
          </p>

          {/* CTA Button with proper padding */}
          <motion.button
            onClick={handleContactClick}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(201, 162, 74, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#C9A24A] text-white px-10 py-5 rounded-xl inline-flex items-center gap-3 shadow-2xl hover:bg-[#B8923D] transition-all duration-300 cursor-pointer"
          >
            Contact Our Experts
            <ArrowRight size={22} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}