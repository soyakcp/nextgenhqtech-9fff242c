import { Star, Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Michael Roberts",
    company: "TechBridge Solutions",
    flag: "🇺🇸",
    country: "USA",
    review: "NextGen HQ Tech transformed our outbound strategy. We saw a 3x increase in qualified leads within the first quarter. Their cold calling team is exceptional.",
  },
  {
    name: "Sarah Thompson",
    company: "GrowthPeak Marketing",
    flag: "🇬🇧",
    country: "UK",
    review: "The professionalism and consistency of their lead generation campaigns exceeded our expectations. They became a true extension of our sales team.",
  },
  {
    name: "James Mitchell",
    company: "Pinnacle Enterprises",
    flag: "🇨🇦",
    country: "Canada",
    review: "Outstanding customer support and email marketing services. Our engagement rates doubled, and their team is always responsive and proactive.",
  },
  {
    name: "Emma Wilson",
    company: "Atlas Digital Group",
    flag: "🇦🇺",
    country: "Australia",
    review: "We partnered with NextGen HQ Tech for outbound sales and the ROI has been incredible. Their data-driven approach sets them apart from other agencies.",
  },
  {
    name: "David Chen",
    company: "NovaTech Industries",
    flag: "🇺🇸",
    country: "USA",
    review: "From strategy to execution, their process is seamless. They delivered over 500 qualified appointments in just 6 months. Highly recommended.",
  },
];

export function TestimonialsSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="clients" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(260_60%_55%_/_0.03)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="section-badge">Client Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card rounded-2xl p-8 flex flex-col ${isInView ? "animate-fade-up" : "opacity-0"} ${
                i >= 3 ? "md:col-span-1" : ""
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 flex-1">"{t.review}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-purple-accent/10 flex items-center justify-center text-lg">
                  {t.flag}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.company} · {t.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
