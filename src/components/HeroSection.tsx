import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-20 animate-fade-up">
        <span className="inline-block px-6 py-2 rounded-full border border-primary/50 text-primary text-sm font-medium mb-8">
          Your Trusted Industrial Partner
        </span>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-light mb-6 leading-tight">
          Depth in Service.{" "}
          <span className="block">Strength in Delivery.</span>
        </h1>

        <p className="text-steel text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Leading provider of high-quality maintenance services, supported by advanced inspection,
          testing, and contracting solutions that ensure asset reliability, safety, and long-term performance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="px-8 py-3 rounded-lg gradient-gold font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-light/30 font-semibold text-light hover:bg-light/10 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
