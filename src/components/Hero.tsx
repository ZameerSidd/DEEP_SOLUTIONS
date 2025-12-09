import { motion } from 'motion/react';
import { Download, ArrowRight } from 'lucide-react';

interface HeroProps {
  backgroundImage: string;
}

export function Hero({ backgroundImage }: HeroProps) {
  const handleQuoteClick = () => {
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

  const handleDownloadClick = () => {
    alert('Company profile download will be available soon. Please contact us for more information.');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A33]/95 via-[#0A1A33]/85 to-[#0A1A33]/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-32 lg:py-40 text-center lg:text-left">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-white mb-6">
              Depth in Service. <br />
              <span className="text-[#C9A24A]">Strength in Delivery.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-200 text-lg lg:text-xl mb-10 max-w-2xl leading-relaxed"
          >
            High-quality fabrication, machining, welding, and advanced NDT inspection services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
          >
            <motion.button
              onClick={handleQuoteClick}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(201, 162, 74, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#C9A24A] text-white px-10 py-5 rounded-xl flex items-center justify-center gap-3 shadow-xl hover:bg-[#B8923D] transition-all duration-300 cursor-pointer"
            >
              Request a Quote
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              onClick={handleDownloadClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <Download size={20} />
              Download Profile
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}