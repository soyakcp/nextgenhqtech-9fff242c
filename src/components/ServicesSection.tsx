import { TrendingUp, ShieldCheck, DollarSign, Eye, FileCheck, Search, BarChart3, CheckCircle, CalendarCheck, Handshake, Target } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const serviceA = {
  title: "E-commerce Sales Closing",
  icon: TrendingUp,
  description: "We handle your pending leads with professional, result-oriented strategies, converting them into confirmed orders with a 'No Sale, No Pay' performance model.",
  keyPoints: [
    { icon: DollarSign, text: "No Fixed Salary" },
    { icon: Eye, text: "Zero Operational Cost" },
    { icon: BarChart3, text: "100% Real-time Transparency" },
  ],
  gradient: "from-primary/20 to-cyan-soft/5",
};

const serviceB = {
  title: "Data Verification & Integrity",
  icon: ShieldCheck,
  description: "We ensure 100% accuracy in your marketing campaigns. Our experts clean and verify collected data (perfect for FMCG brands, activation agencies, and market research firms) to remove fake or duplicate entries.",
  keyPoints: [
    { icon: FileCheck, text: "Perfect for Field Activation Agencies" },
    { icon: Search, text: "Detailed Data Analysis & Reporting" },
    { icon: CheckCircle, text: "100% Verified Entries" },
  ],
  gradient: "from-purple-accent/20 to-purple-accent/5",
};

const serviceC = {
  title: "B2B Appointment Setting",
  icon: CalendarCheck,
  description: "We connect your business with high-value clients by scheduling professional meetings and appointments with key decision-makers.",
  keyPoints: [
    { icon: Handshake, text: "Connect with Decision-Makers" },
    { icon: Target, text: "Qualified Lead Meetings" },
    { icon: BarChart3, text: "Pipeline Growth & Tracking" },
  ],
  gradient: "from-primary/20 to-purple-accent/5",
};

export function ServicesSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 gradient-mesh" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="section-badge">Core Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5">
            Three Powerful Solutions to <span className="text-gradient">Drive Your Growth</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We specialize in revenue recovery through expert sales closing and data integrity services that protect your campaign investments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[serviceA, serviceB, serviceC].map((service, i) => (
            <div
              key={service.title}
              className={`glass-card rounded-2xl p-8 lg:p-10 group cursor-default ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">{service.description}</p>
              
              <div className="space-y-3 pt-6 border-t border-border/30">
                {service.keyPoints.map((point) => (
                  <div key={point.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
