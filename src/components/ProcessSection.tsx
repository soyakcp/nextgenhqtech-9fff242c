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
    <section id="process" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(199_89%_48%_/_0.03)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How We <span className="text-gradient">Deliver</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A proven 4-step framework that transforms your outreach into a revenue-generating machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`relative text-center ${isInView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 relative">
                <step.icon className="h-9 w-9 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
