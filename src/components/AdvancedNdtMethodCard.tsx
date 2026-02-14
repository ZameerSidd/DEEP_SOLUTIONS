import { CheckCircle, BookOpen, Settings, ClipboardCheck } from "lucide-react";
import type { AdvancedNdtMethod } from "@/data/advancedNdtMethods";

interface Props {
  method: AdvancedNdtMethod;
  index: number;
}

const AdvancedNdtMethodCard = ({ method, index }: Props) => {
  const isReversed = index % 2 === 1;

  return (
    <article className="space-y-10">
      {/* Main method */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className={`rounded-xl overflow-hidden shadow-lg ${isReversed ? "lg:order-2" : ""}`}>
          <img
            src={method.image}
            alt={method.title}
            className="w-full h-80 object-cover"
            loading="lazy"
          />
        </div>

        <div className={isReversed ? "lg:order-1" : ""}>
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            {method.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{method.description}</p>
          {method.details && (
            <p className="text-muted-foreground leading-relaxed mb-6">{method.details}</p>
          )}

          {method.applications && (
            <div className="mb-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">Applications</h3>
              <ul className="space-y-2">
                {method.applications.map((app) => (
                  <li key={app} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {method.keyFeatures && (
            <div className="mb-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">Key Features</h3>
              <ul className="space-y-2">
                {method.keyFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {method.advantages && !method.subMethods && (
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">Advantages</h3>
              <ul className="space-y-2">
                {method.advantages.map((adv) => (
                  <li key={adv} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Sub-methods */}
      {method.subMethods && (
        <div className="space-y-8 pl-0 lg:pl-8">
          {method.subMethods.map((sub) => (
            <div
              key={sub.title}
              className="bg-secondary/50 rounded-xl p-6 md:p-8 border border-border"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{sub.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">{sub.description}</p>
              {sub.details && (
                <p className="text-muted-foreground leading-relaxed mb-4">{sub.details}</p>
              )}

              {sub.codes && (
                <div className="mb-4">
                  <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
                    <BookOpen className="w-4 h-4 text-primary" /> Codes & Standards
                  </h4>
                  <ul className="space-y-1">
                    {sub.codes.map((c) => (
                      <li key={c} className="text-sm text-muted-foreground ml-6">• {c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {sub.prerequisites && (
                <div className="mb-4">
                  <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
                    <Settings className="w-4 h-4 text-primary" /> Pre-requisites
                  </h4>
                  <p className="text-sm text-muted-foreground ml-6">{sub.prerequisites}</p>
                </div>
              )}

              {sub.equipment && (
                <div className="mb-4">
                  <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
                    <Settings className="w-4 h-4 text-primary" /> Equipment
                  </h4>
                  <p className="text-sm text-muted-foreground ml-6">{sub.equipment}</p>
                </div>
              )}

              {sub.evaluation && (
                <div className="mb-4">
                  <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
                    <ClipboardCheck className="w-4 h-4 text-primary" /> Evaluation
                  </h4>
                  <p className="text-sm text-muted-foreground ml-6">{sub.evaluation}</p>
                </div>
              )}

              {sub.keyBenefits && (
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Benefits</h4>
                  <ul className="space-y-2">
                    {sub.keyBenefits.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {sub.applications && (
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Applications</h4>
                  <ul className="space-y-2">
                    {sub.applications.map((a) => (
                      <li key={a} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {sub.advantages && (
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Advantages</h4>
                  <ul className="space-y-2">
                    {sub.advantages.map((a) => (
                      <li key={a} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Show main advantages after sub-methods if present */}
          {method.advantages && (
            <div className="bg-primary/5 rounded-xl p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                Why Choose {method.title.split("–")[0].trim()} with Deep Solutions Co.
              </h3>
              <ul className="space-y-2">
                {method.advantages.map((adv) => (
                  <li key={adv} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </article>
  );
};

export default AdvancedNdtMethodCard;
