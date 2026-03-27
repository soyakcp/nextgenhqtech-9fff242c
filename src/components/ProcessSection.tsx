import { Link, BarChart2, FileOutput } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    icon: Link,
    title: "Integrate",
    description: "We seamlessly plug into your existing workflow, understand your leads, campaigns, and business goals.",
  },
  {
    icon: BarChart2,
    title: "Analyze & Execute",
    description: "Our expert team analyzes your data, engages your leads, and applies proven strategies to maximize results.",
  },
  {
    icon: FileOutput,
    title: "Deliver Results & Report",
    description: "Receive transparent daily reports with confirmed sales, verified data, and actionable insights.",
  },
];

export function ProcessSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="process" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(199_89%_48%_/_0.04)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="section-badge">Process & Methodology</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5">
            A Proven 3-Step <span className="text-gradient">Framework for Success</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Our structured approach ensures seamless integration, efficient execution, and measurable outcomes for every project.
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
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px] mx-auto">{step.description}</p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 w-8 text-border/50">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
