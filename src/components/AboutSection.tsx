import { Award, Users, MessageSquare, PiggyBank } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const values = [
  { icon: Award, title: "Proven Track Record", description: "Consistent results across e-commerce sales closing and campaign data verification projects." },
  { icon: Users, title: "Skillful Workforce", description: "Trained professionals who understand sales psychology and data integrity standards." },
  { icon: MessageSquare, title: "Seamless Communication", description: "Real-time updates, daily reporting, and transparent collaboration with your team." },
  { icon: PiggyBank, title: "Cost Optimization", description: "Eliminate fixed overheads—pay only for performance and verified results." },
];

export function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(199_89%_48%_/_0.04)_0%,_transparent_50%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={isInView ? "animate-fade-up" : "opacity-0"}>
            <span className="section-badge">Why Choose NextGen</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-7">
              Built for Results. <span className="text-gradient">Trusted by Partners.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              NextGen HQ Tech is a leading business solutions provider specializing in helping companies grow through expert sales strategies and robust data verification services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are dedicated to providing transparency, efficiency, and high-performance solutions to our partners. Our unique approach combines revenue-driven sales closing with meticulous data integrity services.
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
