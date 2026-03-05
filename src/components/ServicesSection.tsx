import { Phone, Target, TrendingUp, Headphones, Mail, Globe } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: Phone,
    title: "Cold Calling",
    description: "Professional outbound calling teams that connect with decision-makers and generate qualified appointments for your sales pipeline.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Multi-channel lead generation strategies that identify and nurture high-value prospects aligned with your ideal customer profile.",
    gradient: "from-cyan-soft/20 to-cyan-soft/5",
  },
  {
    icon: TrendingUp,
    title: "Outbound Sales",
    description: "End-to-end outbound sales campaigns powered by data analytics and proven scripts to maximize conversion rates.",
    gradient: "from-purple-accent/20 to-purple-accent/5",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "24/7 professional customer support teams that represent your brand with excellence and drive customer satisfaction.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Strategic email campaigns with personalized messaging, A/B testing, and automated sequences that drive engagement.",
    gradient: "from-cyan-soft/20 to-cyan-soft/5",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Modern, conversion-optimized websites built to capture leads and establish your digital presence with authority.",
    gradient: "from-purple-accent/20 to-purple-accent/5",
  },
];

export function ServicesSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 gradient-mesh" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="section-badge">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5">
            Solutions That <span className="text-gradient">Drive Results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive B2B services designed to accelerate your growth and maximize ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`glass-card rounded-2xl p-8 lg:p-10 group cursor-default ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
