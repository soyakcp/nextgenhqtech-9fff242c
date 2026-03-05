import { Lightbulb, Settings, Rocket, BarChart3 } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    icon: Lightbulb,
    title: "Strategy",
    description: "We analyze your market, define your ICP, and craft a tailored outreach strategy.",
  },
  {
    icon: Settings,
    title: "Setup",
    description: "Build calling scripts, email sequences, and configure all tools for launch.",
  },
  {
    icon: Rocket,
    title: "Execution",
    description: "Our expert teams execute campaigns with precision across all channels.",
  },
  {
    icon: BarChart3,
    title: "Optimization",
    description: "Continuous data analysis and A/B testing to maximize your results over time.",
  },
];

export function ProcessSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="process" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(199_89%_48%_/_0.04)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="section-badge">Our Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5">
            How We <span className="text-gradient">Deliver</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A proven 4-step framework that transforms your outreach into a revenue-generating machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`relative text-center group ${isInView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-primary/30 via-primary/15 to-transparent" />
                </div>
              )}

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
