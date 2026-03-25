import { MessageCircle } from "lucide-react";

const whatsappUrl = "https://wa.me/8801633048134";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 group">
      <div className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-border/50 bg-card/95 px-4 py-2 text-xs font-medium text-foreground shadow-2xl shadow-background/40 backdrop-blur-xl md:block md:opacity-0 md:translate-x-2 md:group-hover:translate-x-0 md:group-hover:opacity-100 transition-all duration-300">
        Chat with our Head of Sales
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with our Head of Sales on WhatsApp"
        title="Chat with our Head of Sales"
        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary text-primary-foreground shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.85)] transition-all duration-300 hover:scale-105 hover:shadow-[0_25px_60px_-20px_hsl(var(--primary)/0.95)]"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}