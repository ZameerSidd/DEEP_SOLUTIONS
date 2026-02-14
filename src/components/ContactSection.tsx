import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding gradient-navy">
      <div className="container mx-auto text-center">
         <h2 className="font-display text-3xl md:text-4xl font-bold text-light mb-4">
          Get in Touch
        </h2>
        <p className="text-steel mb-12 max-w-xl mx-auto">
          Ready to discuss your project? Contact us today and let's build something exceptional together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <a
            href="tel:+966133766283"
            className="flex flex-col items-center gap-3 p-8 rounded-xl bg-white/10 border border-white/20 hover:border-primary/50 transition-colors"
          >
            <Phone className="w-8 h-8 text-primary" />
            <span className="font-semibold text-light">Phone</span>
            <span className="text-sm text-steel">+966 13 3766 2813</span>
          </a>

          <a
            href="mailto:info@deepsecc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-8 rounded-xl bg-white/10 border border-white/20 hover:border-primary/50 transition-colors"
          >
            <Mail className="w-8 h-8 text-primary" />
            <span className="font-semibold text-light">Email</span>
            <span className="text-sm text-steel">info@deepsecc.com</span>
          </a>

          <a
            href="https://maps.google.com/?q=26.3927,49.9777"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-8 rounded-xl bg-white/10 border border-white/20 hover:border-primary/50 transition-colors"
          >
            <MapPin className="w-8 h-8 text-primary" />
            <span className="font-semibold text-light">Location</span>
            <span className="text-sm text-steel">Dammam, Saudi Arabia</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
