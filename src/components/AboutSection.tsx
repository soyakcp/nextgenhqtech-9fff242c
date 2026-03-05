import { Shield, Users, Zap, Globe } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const values = [
  { icon: Shield, title: "Reliability", description: "Consistent, high-quality service you can count on." },
  { icon: Users, title: "Partnership", description: "We integrate as an extension of your team." },
  { icon: Zap, title: "Performance", description: "Data-driven strategies focused on measurable ROI." },
  { icon: Globe, title: "Global Reach", description: "Serving businesses across USA, Canada, UK & Australia." },
];

export function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(199_89%_48%_/_0.03)_0%,_transparent_50%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={isInView ? "animate-fade-up" : "opacity-0"}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Growth <span className="text-gradient">Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              NextGen HQ Tech is a premier B2B growth agency specializing in lead generation, 
              cold calling, and outbound sales. We combine cutting-edge technology with expert 
              human talent to deliver campaigns that convert.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a global team serving clients across the USA, Canada, United Kingdom, and 
              Australia, we understand diverse markets and bring tailored strategies to every 
              engagement. Our mission is simple: accelerate your revenue growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`glass-card rounded-xl p-6 ${isInView ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${(i + 2) * 0.1}s` }}
              >
                <v.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold text-foreground mb-1">{v.title}</h3>
                <p className="text-xs text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
