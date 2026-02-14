import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdvancedNdtMethodCard from "@/components/AdvancedNdtMethodCard";
import { advancedNdtMethods } from "@/data/advancedNdtMethods";

const AdvancedNDT = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="gradient-navy pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-steel hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-4">
            Advanced NDT
          </h1>
          <p className="text-steel max-w-2xl text-lg">
            Cutting-edge non-destructive testing techniques for comprehensive
            defect detection, precise sizing, and advanced integrity assessment
            of critical industrial assets.
          </p>
        </div>
      </section>

      {/* NDT Methods */}
      <section className="py-16 px-4">
        <div className="container mx-auto space-y-20">
          {advancedNdtMethods.map((method, index) => (
            <AdvancedNdtMethodCard key={method.id} method={method} index={index} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdvancedNDT;
