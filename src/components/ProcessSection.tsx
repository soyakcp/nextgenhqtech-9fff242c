import { DollarSign, FileSpreadsheet, ShieldCheck } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    icon: DollarSign,
    title: "No Sale, No Pay Guaranteed",
    description: "You only pay a commission on successful, delivered sales.",
  },
  {
    icon: FileSpreadsheet,
    title: "Daily Performance Dashboards",
    description: "Track every call and conversion on our live Google Sheet reports.",
  },
  {
    icon: ShieldCheck,
    title: "100% Call Transparency",
    description: "Full access to all call recordings for quality assurance and absolute trust.",
  },
];

export function ProcessSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="trust" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(199_89%_48%_/_0.04)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="section-badge">Zero Risk Transparency</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5">
            A Sales Operation Built on <span className="text-gradient">Trust, Proof, and Performance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            No vague agency reporting. No hidden process. Just visible activity, trackable results, and a risk-reversed model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`relative text-center group ${isInView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-24 h-24 rounded-3xl glass-card-static flex items-center justify-center mx-auto mb-7 relative group-hover:border-primary/30 transition-all duration-500">
                <step.icon className="h-10 w-10 text-primary" />
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-xl bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg shadow-primary/30">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[240px] mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
