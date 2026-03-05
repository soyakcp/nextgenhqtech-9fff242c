import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-background/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-6">
        {/* Left: Menu + Logo + Text */}
        <div className="flex items-center gap-2 md:gap-3">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-md">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-card border-border w-72">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-2">
                <div className="mb-6 px-2">
                  <h3 className="text-lg font-bold text-foreground">NextGen HQ Tech</h3>
                  <p className="text-xs text-muted-foreground">Powering Business Growth</p>
                </div>
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item)}
                    className="text-left px-4 py-3 rounded-lg text-foreground/80 hover:bg-secondary hover:text-primary transition-colors text-sm font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <div className="h-6 w-px bg-border/40 hidden sm:block" />

          <img src={logo} alt="NextGen HQ Tech" className="h-9 md:h-11 w-auto" />
          <div className="flex flex-col leading-none">
            <span className="text-base md:text-lg font-bold tracking-tight text-foreground">
              NextGen <span className="text-gradient">HQ Tech</span>
            </span>
            <span className="text-[9px] md:text-[11px] text-muted-foreground/80 tracking-wide uppercase mt-0.5">
              Powering Business Growth
            </span>
          </div>
        </div>

        {/* Right: Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {item}
            </button>
          ))}
          <Button
            size="sm"
            onClick={() => scrollTo("Contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/80 glow-cyan"
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}
