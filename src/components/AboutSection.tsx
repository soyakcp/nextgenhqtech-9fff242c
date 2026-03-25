import { BriefcaseBusiness, CircleDollarSign, Users, Waves } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const values = [
  { icon: Users, title: "Dedicated Team", description: "An expert team of trained sales agents ready to represent your brand with authority." },
  { icon: CircleDollarSign, title: "No Overheads", description: "No fixed salaries, no office overheads—just pure, measurable results tied to performance." },
  { icon: BriefcaseBusiness, title: "Brand Ownership", description: "We learn your product, offers, objections, and tone so every call feels native to your business." },
  { icon: Waves, title: "Conversion Pressure", description: "We hunt for conversions, handle follow-ups, and secure the cash with relentless consistency." },
];

export function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(199_89%_48%_/_0.04)_0%,_transparent_50%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={isInView ? "animate-fade-up" : "opacity-0"}>
            <span className="section-badge">Agency Advantage</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-7">
              A Dedicated Sales Force Ready to <span className="text-gradient">Scale Your Brand</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              I manage a specialized team of 3-5+ trained sales agents. We represent your brand, hunt for conversions, and secure the cash. No fixed salaries, no office overheads—just pure, measurable results.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nextgen HQ Tech operates like a remote revenue unit—built for founders and operators who need sharper follow-up, stronger communication, and more closed deals without building an in-house call floor.
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
