import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navItems = ["Home", "Services", "Process", "Clients", "About", "Contact"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-background/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <Menu className="h-6 w-6" />
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

          <img src={logo} alt="NextGen HQ Tech" className="h-10 md:h-12 w-auto" />
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold tracking-tight text-foreground">
              NextGen <span className="text-gradient">HQ Tech</span>
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground -mt-0.5">
              Powering Business Growth Worldwide
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
