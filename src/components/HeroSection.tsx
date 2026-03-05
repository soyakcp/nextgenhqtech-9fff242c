import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb w-[500px] h-[500px] bg-primary/8 top-[10%] -left-[10%]" />
        <div className="floating-orb w-[400px] h-[400px] bg-purple-accent/6 bottom-[10%] -right-[5%]" style={{ animationDelay: "-7s" }} />
        <div className="floating-orb w-[300px] h-[300px] bg-primary/5 top-[50%] left-[50%]" style={{ animationDelay: "-14s" }} />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-28 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="section-badge">
              🚀 B2B Growth Solutions
            </span>
          </div>

          <h1 className="animate-fade-up animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] tracking-tight mb-8">
            High-Performance{" "}
            <span className="text-gradient">Lead Generation</span>
            <br className="hidden md:block" />
            <span className="text-foreground/90">&</span> Professional{" "}
            <span className="text-gradient">Call Center</span> Solutions
          </h1>

          <p className="animate-fade-up animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            We help businesses scale with data-driven outbound campaigns, expert cold calling,
            and end-to-end lead management — delivering qualified prospects that convert into revenue.
          </p>

          <div className="animate-fade-up animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/80 glow-cyan text-base px-10 py-7 rounded-xl font-semibold tracking-wide"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("services")}
              className="border-border/60 text-foreground hover:bg-secondary/80 hover:border-primary/30 text-base px-10 py-7 rounded-xl font-semibold"
            >
              <Play className="mr-2 h-4 w-4" />
              View Services
            </Button>
          </div>

          {/* Trust bar */}
          <div className="animate-fade-up animate-fade-up-delay-4 mt-20 pt-10 border-t border-border/20">
            <p className="text-[11px] text-muted-foreground/60 uppercase tracking-[0.25em] mb-5 font-medium">
              Trusted by businesses across
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground font-medium">
              {[
                { flag: "🇺🇸", name: "USA" },
                { flag: "🇨🇦", name: "Canada" },
                { flag: "🇬🇧", name: "United Kingdom" },
                { flag: "🇦🇺", name: "Australia" },
              ].map((country) => (
                <span
                  key={country.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-border/30 text-foreground/70"
                >
                  <span className="text-lg">{country.flag}</span>
                  {country.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
