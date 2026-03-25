import { BadgeCheck, PhoneCall, ShoppingBag, UserCheck } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: BadgeCheck,
    title: "Order Confirmation & RTO Reduction",
    description: "Specialized for BD E-commerce. We verify every order, confirm addresses, and drastically reduce Return-To-Origin (RTO) costs.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: UserCheck,
    title: "Pending Lead Conversion",
    description: "Turning your Facebook/WhatsApp pending inquiries into confirmed orders through expert persuasion.",
    gradient: "from-cyan-soft/20 to-cyan-soft/5",
  },
  {
    icon: PhoneCall,
    title: "Cold Calling & Appointment Setting",
    description: "Proactively reaching out to prospects to spark interest and booking high-value meetings for any industry (Real Estate, IT, Finance, etc.).",
    gradient: "from-purple-accent/20 to-purple-accent/5",
  },
  {
    icon: ShoppingBag,
    title: "Professional Sales Closers On Demand",
    description: "A premium closing desk for brands that need fast follow-ups, disciplined communication, and serious revenue recovery without fixed overhead.",
    gradient: "from-primary/20 to-primary/5",
  },
];

export function ServicesSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 gradient-mesh" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="section-badge">Core Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5">
            The Money-Makers Behind <span className="text-gradient">Every Campaign</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We build sales operations around one goal: recovering missed revenue and converting intent into confirmed business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
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
