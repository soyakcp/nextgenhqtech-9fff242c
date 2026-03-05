import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
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
    <section id="contact" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 gradient-mesh" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="section-badge">Contact Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5">
            Let's <span className="text-gradient">Get Started</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Ready to scale your business? Book a free consultation today.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-3 glass-card-static rounded-2xl p-8 md:p-10 space-y-5 ${isInView ? "animate-fade-up" : "opacity-0"}`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder="Your Name"
                required
                className="bg-secondary/40 border-border/50 rounded-xl h-12 focus:border-primary/50 transition-colors"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="bg-secondary/40 border-border/50 rounded-xl h-12 focus:border-primary/50 transition-colors"
              />
            </div>
            <Input
              name="subject"
              placeholder="Subject"
              required
              className="bg-secondary/40 border-border/50 rounded-xl h-12 focus:border-primary/50 transition-colors"
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="bg-secondary/40 border-border/50 rounded-xl resize-none focus:border-primary/50 transition-colors"
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/80 glow-cyan py-7 rounded-xl font-semibold text-base"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>

          {/* Info */}
          <div
            className={`lg:col-span-2 flex flex-col gap-6 justify-center ${isInView ? "animate-fade-up animate-fade-up-delay-2" : "opacity-0"}`}
          >
            {[
              {
                icon: Mail,
                title: "Email Us",
                content: (
                  <a href="mailto:nextgenhqtech@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    nextgenhqtech@gmail.com
                  </a>
                ),
              },
              {
                icon: Phone,
                title: "WhatsApp",
                content: <a href="https://wa.me/8801633048134" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">+880 1633-048134</a>,
              },
              {
                icon: MapPin,
                title: "Global Coverage",
                content: <p className="text-muted-foreground text-sm">USA · Canada · UK · Australia</p>,
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/12 to-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 transition-colors">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="pt-1">
                  <h4 className="font-heading font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                  {item.content}
                </div>
              </div>
            ))}

            <div className="mt-4 p-6 rounded-2xl glass-card-static">
              <p className="text-sm text-foreground font-medium mb-2">Ready to grow?</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Schedule a free strategy call and discover how we can scale your lead generation by 3x.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
