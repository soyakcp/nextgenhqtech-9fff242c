import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

const stats = [
  { value: 100, suffix: "%", label: "Data Accuracy" },
  { value: 0, suffix: "", label: "Fixed Salaries" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Reporting Access" },
];

function AnimatedCounter({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame: number;
    const duration = 2200;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return (
    <span className="text-5xl md:text-6xl font-heading font-bold text-gradient">
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  const { ref, isInView } = useInView(0.3);

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card-static rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-50" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-accent/5 rounded-full blur-[60px]" />

          <div className="relative z-10 text-center mb-12">
            <span className="section-badge">Performance Metrics</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Results That Speak. <span className="text-gradient">Numbers That Prove.</span>
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
              NextGen HQ Tech delivers measurable outcomes across sales closing and data verification with full transparency.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} start={isInView} />
                <p className="text-muted-foreground text-sm font-medium tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
