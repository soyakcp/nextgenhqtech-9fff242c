import { useState, useEffect, useCallback } from "react";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navItems = ["Home", "Services", "Process", "Clients", "About", "Contact"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-background/60 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Left: Menu + Logo + Text */}
        <div className="flex items-center gap-3">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-foreground/70 hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-card/95 backdrop-blur-2xl border-border/50 w-80">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-1">
                <div className="mb-8 px-3">
                  <div className="flex items-center gap-3 mb-2">
                    <img src={logo} alt="NextGen HQ Tech" className="h-10 w-auto" />
                    <div>
                      <h3 className="text-lg font-heading font-bold text-foreground">NextGen HQ Tech</h3>
                      <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Powering Business Growth</p>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent mt-4" />
                </div>
                {navItems.map((item, i) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item)}
                    className="text-left px-4 py-3.5 rounded-xl text-foreground/70 hover:bg-primary/8 hover:text-primary transition-all duration-300 text-sm font-medium tracking-wide group flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(199_89%_48%/0.5)] transition-all duration-300" />
                    {item}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <div className="h-7 w-px bg-border/30 hidden sm:block" />

          <img src={logo} alt="NextGen HQ Tech" className="h-9 md:h-11 w-auto" />
          <div className="flex flex-col leading-none">
            <span className="text-base md:text-lg font-heading font-bold tracking-tight text-foreground">
              NextGen <span className="text-gradient">HQ Tech</span>
            </span>
            <span className="text-[9px] md:text-[10px] text-muted-foreground/70 tracking-[0.2em] uppercase mt-0.5">
              Powering Business Growth
            </span>
          </div>
        </div>

        {/* Right: Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-secondary/50 transition-all duration-300 font-medium"
            >
              {item}
            </button>
          ))}
          <Button
            size="sm"
            onClick={() => scrollTo("Contact")}
            className="ml-2 bg-primary text-primary-foreground hover:bg-primary/80 glow-cyan rounded-xl font-semibold"
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}
