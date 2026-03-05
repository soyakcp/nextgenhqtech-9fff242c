import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(199_89%_48%_/_0.05)_0%,_transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
              B2B Growth Solutions
            </span>
          </div>

          <h1 className="animate-fade-up animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6">
            High-Performance{" "}
            <span className="text-gradient">Lead Generation</span> &{" "}
            Professional Call Center Solutions
          </h1>

          <p className="animate-fade-up animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We help businesses scale with data-driven outbound campaigns, expert cold calling, 
            and end-to-end lead management — delivering qualified prospects ready to convert.
          </p>

          <div className="animate-fade-up animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/80 glow-cyan text-base px-8 py-6"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("services")}
              className="border-border text-foreground hover:bg-secondary text-base px-8 py-6"
            >
              <Play className="mr-2 h-4 w-4" />
              View Services
            </Button>
          </div>

          {/* Trust bar */}
          <div className="animate-fade-up animate-fade-up-delay-4 mt-16 pt-8 border-t border-border/30">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
              Trusted by businesses across
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-medium">
              {["🇺🇸 USA", "🇨🇦 Canada", "🇬🇧 United Kingdom", "🇦🇺 Australia"].map((country) => (
                <span key={country} className="flex items-center gap-1">{country}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
