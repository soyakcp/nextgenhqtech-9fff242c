import { Star, Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Kamrul Hasan",
    company: "Dhaka Style Mart",
    flag: "🇧🇩",
    country: "Bangladesh",
    review: "Nextgen HQ Tech helped us confirm more COD orders and cut down fake bookings fast. Their agents speak with confidence and close with discipline.",
  },
  {
    name: "Sifat Ahmed",
    company: "Urban Cart BD",
    flag: "🇧🇩",
    country: "Bangladesh",
    review: "Our pending Facebook and WhatsApp leads were sitting cold. Their team followed up properly and turned that pipeline into confirmed orders within days.",
  },
  {
    name: "Nusrat Jahan",
    company: "Nexa Cosmetics",
    flag: "🇧🇩",
    country: "Bangladesh",
    review: "What impressed me most was the transparency. We received daily sheet updates, clear call records, and genuine sales performance—not agency talk.",
  },
  {
    name: "Tanvir Hossain",
    company: "Prime Property Link",
    flag: "🇧🇩",
    country: "Bangladesh",
    review: "For appointment setting, they brought serious energy. The conversations were sharper, follow-ups were faster, and my calendar stayed full with quality prospects.",
  },
  {
    name: "Farzana Akter",
    company: "Royal Home Essentials",
    flag: "🇧🇩",
    country: "Bangladesh",
    review: "Their no sale, no pay model gave us confidence to start. They reduced returns, improved confirmation quality, and treated our brand like their own sales desk.",
  },
];

export function TestimonialsSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="testimonials" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(260_60%_55%_/_0.03)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="section-badge">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5">
            Bangladesh Brands Trust Our <span className="text-gradient">Closing Discipline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Real praise from businesses that needed faster follow-up, cleaner confirmations, and more revenue from the same lead flow.
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
