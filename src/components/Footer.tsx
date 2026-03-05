import { Facebook, Mail, Phone, Linkedin, Twitter } from "lucide-react";
import logoImg from "@/assets/logo.png";

const quickLinks = ["Home", "Services", "Process", "Clients", "About", "Contact"];
const services = ["Cold Calling", "Lead Generation", "Outbound Sales", "Customer Support", "Email Marketing", "Web Development"];

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/20 pt-20 pb-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(222_47%_3%)_0%,_transparent_70%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="NextGen HQ Tech" className="h-10 w-auto" />
              <span className="font-heading font-bold text-foreground text-lg">NextGen HQ Tech</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A premier B2B growth agency delivering high-performance lead generation, cold calling,
              and outbound sales solutions to businesses worldwide.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Facebook, href: "https://www.facebook.com/nextgenhqtech", label: "Facebook" },
                { icon: Mail, href: "mailto:nextgenhqtech@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center hover:bg-primary/15 hover:text-primary hover:border-primary/20 border border-transparent transition-all duration-300 text-muted-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-5 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-5 text-sm tracking-wide">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-5 text-sm tracking-wide">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:nextgenhqtech@gmail.com" className="hover:text-primary transition-colors">
                  nextgenhqtech@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="https://wa.me/8801633048134" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  +880 1633-048134
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} NextGen HQ Tech. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40">
            Powering Business Growth Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
