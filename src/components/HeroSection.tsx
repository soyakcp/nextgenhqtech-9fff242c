import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ShieldCheck, TrendingUp, Zap } from "lucide-react";

const whatsappUrl = "https://wa.me/8801633048134";

const proofPoints = [
  "No Sale, No Pay",
  "Bangladesh E-commerce Specialists",
  "Elite Closers & Appointment Setters",
];


export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb w-[560px] h-[560px] bg-primary/10 top-[4%] -left-[12%]" />
        <div className="floating-orb w-[420px] h-[420px] bg-purple-accent/10 bottom-[0%] -right-[8%]" style={{ animationDelay: "-7s" }} />
        <div className="floating-orb w-[280px] h-[280px] bg-primary/8 top-[52%] left-[48%]" style={{ animationDelay: "-14s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(199_89%_48%_/_0.15)_0%,_transparent_35%)]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-28 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-up mb-6">
            <span className="section-badge">Your Professional Sales Force</span>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-end">
            <div>
              <div className="animate-fade-up animate-fade-up-delay-1 flex flex-wrap gap-3 mb-6">
                {proofPoints.map((point) => (
                  <span key={point} className="rounded-full border border-border/40 bg-secondary/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80">
                    {point}
                  </span>
                ))}
              </div>

              <h1 className="animate-fade-up animate-fade-up-delay-1 text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-heading font-bold leading-[0.95] tracking-tight mb-8 max-w-5xl">
                We Don&apos;t Just Call.
                <br />
                <span className="text-gradient">We Close.</span>
              </h1>

              <p className="animate-fade-up animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed">
                Stop losing revenue to pending leads. Our professional team of sales experts handles your Cold Calling, Lead Nurturing, and Sales Closing—Risk-Free with our unique &apos;No Sale, No Pay&apos; performance model.
              </p>

              <div className="animate-fade-up animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => window.open(whatsappUrl, "_blank", "noopener,noreferrer")}
                  className="bg-primary text-primary-foreground hover:bg-primary/80 glow-cyan text-base px-10 py-7 rounded-xl font-semibold tracking-wide"
                >
                  Scale My Sales Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollTo("services")}
                  className="border-border/60 text-foreground hover:bg-secondary/80 hover:border-primary/30 text-base px-10 py-7 rounded-xl font-semibold"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Explore Services
                </Button>
              </div>
            </div>

            <div className="animate-fade-up animate-fade-up-delay-4">
              <div className="glass-card-static rounded-[2rem] p-7 md:p-8 border border-border/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,_hsl(199_89%_48%_/_0.08),_transparent_45%,_hsl(260_60%_55%_/_0.08))]" />
                <div className="relative z-10 space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">The Closing Engine</p>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold leading-tight text-foreground">
                      Elite sales closers dedicated to growing your business through high-impact communication.
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        icon: ShieldCheck,
                        title: "Risk Reversed",
                        text: "You pay on delivered results—not on empty promises, salaries, or idle hours.",
                      },
                      {
                        icon: TrendingUp,
                        title: "Revenue First",
                        text: "We chase pending leads, revive silent prospects, and close sales with urgency.",
                      },
                      {
                        icon: Zap,
                        title: "Operator Mindset",
                        text: "Scripts, follow-ups, recordings, and daily reporting built for speed and accountability.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4 rounded-2xl border border-border/30 bg-secondary/30 p-4">
                        <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/12 border border-primary/15">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading text-base font-bold text-foreground mb-1">{item.title}</h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-up animate-fade-up-delay-5 mt-16 pt-8 border-t border-border/20">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Cold Calling that creates urgency and authority",
                "Lead Nurturing that recovers stalled conversations",
                "Sales Closing built around a No Sale, No Pay model",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-border/30 bg-secondary/20 px-5 py-4 text-sm text-foreground/80">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
