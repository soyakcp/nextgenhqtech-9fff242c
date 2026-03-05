import { Shield, Users, Zap, Globe } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const values = [
  { icon: Shield, title: "Reliability", description: "Consistent, high-quality service you can count on every day." },
  { icon: Users, title: "Partnership", description: "We integrate seamlessly as an extension of your team." },
  { icon: Zap, title: "Performance", description: "Data-driven strategies focused on measurable ROI." },
  { icon: Globe, title: "Global Reach", description: "Serving businesses across USA, Canada, UK & Australia." },
];

export function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(199_89%_48%_/_0.04)_0%,_transparent_50%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={isInView ? "animate-fade-up" : "opacity-0"}>
            <span className="section-badge">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-7">
              Your Growth <span className="text-gradient">Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
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

          <div className="grid grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`glass-card rounded-2xl p-7 ${isInView ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${(i + 2) * 0.12}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-4">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
