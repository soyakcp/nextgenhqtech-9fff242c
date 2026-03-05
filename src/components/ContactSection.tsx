import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "@/hooks/useInView";

export function ContactSection() {
  const { toast } = useToast();
  const { ref, isInView } = useInView();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Get Started</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to scale your business? Book a free consultation today.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-3 glass-card rounded-xl p-8 space-y-5 ${isInView ? "animate-fade-up" : "opacity-0"}`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="name" placeholder="Your Name" required className="bg-secondary/50 border-border" />
              <Input name="email" type="email" placeholder="Email Address" required className="bg-secondary/50 border-border" />
            </div>
            <Input name="subject" placeholder="Subject" required className="bg-secondary/50 border-border" />
            <Textarea name="message" placeholder="Your Message" rows={5} required className="bg-secondary/50 border-border resize-none" />
            <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/80 glow-cyan py-6">
              {loading ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>

          {/* Info */}
          <div
            className={`lg:col-span-2 flex flex-col gap-6 justify-center ${isInView ? "animate-fade-up animate-fade-up-delay-2" : "opacity-0"}`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Email Us</h4>
                <a href="mailto:nextgenhqtech@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  nextgenhqtech@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Call Us</h4>
                <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Global Coverage</h4>
                <p className="text-muted-foreground text-sm">USA · Canada · UK · Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
