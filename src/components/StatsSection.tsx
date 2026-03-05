import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

const stats = [
  { value: 250, suffix: "+", label: "Clients Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Available" },
  { value: 15, suffix: "+", label: "Countries Covered" },
];

function AnimatedCounter({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame: number;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  const { ref, isInView } = useInView(0.3);

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card rounded-2xl p-10 md:p-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} start={isInView} />
                <p className="text-muted-foreground text-sm mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
