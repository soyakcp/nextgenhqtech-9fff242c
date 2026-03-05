import { Phone, Target, TrendingUp, Headphones, Mail, Globe } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: Phone,
    title: "Cold Calling",
    description: "Professional outbound calling teams that connect with decision-makers and generate qualified appointments for your sales pipeline.",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Multi-channel lead generation strategies that identify and nurture high-value prospects aligned with your ideal customer profile.",
  },
  {
    icon: TrendingUp,
    title: "Outbound Sales",
    description: "End-to-end outbound sales campaigns powered by data analytics and proven scripts to maximize conversion rates.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "24/7 professional customer support teams that represent your brand with excellence and drive customer satisfaction.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Strategic email campaigns with personalized messaging, A/B testing, and automated sequences that drive engagement.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Modern, conversion-optimized websites built to capture leads and establish your digital presence with authority.",
  },
];

export function ServicesSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Solutions That <span className="text-gradient">Drive Results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive B2B services designed to accelerate your growth and maximize ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`glass-card rounded-xl p-8 group hover:glow-cyan transition-all duration-500 cursor-default ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
