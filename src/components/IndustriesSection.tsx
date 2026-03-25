import { Building2, Landmark, PackageCheck, Route, ServerCog } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const industries = [
  {
    icon: PackageCheck,
    title: "E-commerce & Retail",
    description: "Order confirmation, COD verification, repeat order recovery, and RTO reduction built for Bangladesh sellers.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Lead qualification, follow-ups, and appointment setting that moves prospects from interest to site visits.",
  },
  {
    icon: ServerCog,
    title: "IT & SaaS",
    description: "Cold outreach and demo booking for software companies that need consistent, high-value conversations.",
  },
  {
    icon: Route,
    title: "Logistics",
    description: "Outbound calling and account activation support to open revenue pipelines for delivery and supply brands.",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Trust-led lead nurturing for high-consideration services that demand clarity, consistency, and compliance.",
  },
];

export function IndustriesSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="industries" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(199_89%_48%_/_0.05)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="section-badge">Industries We Scale</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5">
            Elite Closers for <span className="text-gradient">High-Intent Markets</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            From Bangladesh e-commerce to global B2B pipelines, we install the same aggressive sales discipline wherever revenue is being left on the table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className={`glass-card rounded-3xl p-6 md:p-7 ${isInView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/80 border border-border/40">
                <industry.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">{industry.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}