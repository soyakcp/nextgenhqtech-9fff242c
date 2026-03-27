import { ShoppingCart, Factory, FlaskConical, BarChart3, Megaphone } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const industries = [
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    description: "Order confirmation, COD verification, pending lead conversion, and RTO reduction for online sellers.",
  },
  {
    icon: Factory,
    title: "FMCG Brands",
    description: "Campaign data verification, field activation data cleaning, and duplicate entry removal at scale.",
  },
  {
    icon: FlaskConical,
    title: "Market Research",
    description: "Data integrity services ensuring 100% verified entries for accurate research outcomes and reporting.",
  },
  {
    icon: Megaphone,
    title: "Field Activation Agencies",
    description: "End-to-end data verification for field campaigns—clean, accurate, and audit-ready data delivery.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Lead qualification, follow-up management, and sales closing support for digital campaign leads.",
  },
];

export function IndustriesSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="industries" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(199_89%_48%_/_0.05)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="section-badge">Industries We Serve</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5">
            Trusted Across <span className="text-gradient">Multiple Industries</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            From e-commerce sales closing to FMCG campaign verification, we deliver precision and performance wherever data and revenue matter.
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
