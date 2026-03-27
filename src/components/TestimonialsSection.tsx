import { Star, Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Kamrul Hasan",
    company: "Dhaka Style Mart",
    flag: "🇧🇩",
    country: "Bangladesh",
    review: "NextGen HQ Tech transformed our pending leads into confirmed orders. Their sales closing team is professional, fast, and truly result-driven.",
  },
  {
    name: "Sifat Ahmed",
    company: "Urban Cart BD",
    flag: "🇧🇩",
    country: "Bangladesh",
    review: "We were losing revenue on unconfirmed orders. Their team recovered a significant portion of our pending pipeline within the first week.",
  },
  {
    name: "Nusrat Jahan",
    company: "Nexa Cosmetics",
    flag: "🇧🇩",
    country: "Bangladesh",
    review: "Their data verification service cleaned our entire field campaign database. Zero fake entries, detailed reports, and fast turnaround.",
  },
  {
    name: "Tanvir Hossain",
    company: "Prime Activation Agency",
    flag: "🇧🇩",
    country: "Bangladesh",
    review: "As a field activation agency, data accuracy is everything. NextGen verified thousands of entries for our FMCG activation campaign flawlessly.",
  },
  {
    name: "Farzana Akter",
    company: "Royal Home Essentials",
    flag: "🇧🇩",
    country: "Bangladesh",
    review: "The No Sale, No Pay model gave us confidence. Their transparency with daily reports and call recordings sets them apart from others.",
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
            Partners Trust Our <span className="text-gradient">Results & Integrity</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Real feedback from businesses that rely on our sales closing and data verification expertise.
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
