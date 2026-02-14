import { Eye, Target, Zap, CheckCircle, Award, Lightbulb, Shield } from "lucide-react";
import vision2030 from "@/assets/vision2030.png";

const values = [
  "Employees come first",
  "Honesty and integrity",
  "Hard work and continuous development",
  "Quality and efficiency",
  "Meeting commitments and exceeding expectations",
];

const pillars = [
  { icon: Award, label: "Expertise", desc: "Deep technical knowledge" },
  { icon: Shield, label: "Integrity", desc: "Ethical and honest" },
  { icon: Lightbulb, label: "Innovation", desc: "Creative solutions" },
  { icon: Target, label: "Reliability", desc: "Consistent performance" },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto section-padding">
        {/* Vision - full width: text left, logo right */}
        <div className="bg-primary/10 rounded-xl p-8 md:p-12 border border-primary/30 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading provider of high-quality maintenance services, supported by advanced
                inspection, testing, and contracting solutions that ensure asset reliability, safety,
                and long-term performance.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src={vision2030} alt="Saudi Vision 2030" className="h-32 md:h-40 object-contain" />
            </div>
          </div>
        </div>

        {/* Mission & Core Values side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-primary/10 rounded-xl p-8 border border-primary/30">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver exceptional maintenance services and precise inspection and testing
              solutions with the highest standards of quality, applying deep technical expertise,
              innovative technologies, and strong commitment to safety.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-primary/10 rounded-xl p-8 border border-primary/30">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Core Values</h3>
            <ul className="space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Pillars - full width edge to edge */}
      <div className="gradient-navy py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div key={p.label} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <p.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-light mb-1">{p.label}</h4>
                <p className="text-sm text-steel">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
