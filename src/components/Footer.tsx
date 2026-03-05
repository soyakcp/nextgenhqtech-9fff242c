import { Facebook, Mail, Phone } from "lucide-react";
import logoImg from "@/assets/logo.png";

const quickLinks = ["Home", "Services", "Process", "Clients", "About", "Contact"];

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/30 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company */}
          <div>
            <img src={logoImg} alt="NextGen HQ Tech" className="h-12 w-auto mb-2" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              A premier B2B growth agency delivering high-performance lead generation, cold calling, 
              and outbound sales solutions to businesses worldwide.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com/nextgenhqtech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="mailto:nextgenhqtech@gmail.com"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:nextgenhqtech@gmail.com" className="hover:text-primary transition-colors">
                  nextgenhqtech@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NextGen HQ Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
