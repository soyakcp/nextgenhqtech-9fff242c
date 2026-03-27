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
        className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-[0_20px_50px_-20px_rgba(37,211,102,0.85)] transition-all duration-300 hover:scale-105 hover:shadow-[0_25px_60px_-20px_rgba(37,211,102,0.95)]"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.004 2.667A13.28 13.28 0 0 0 2.72 15.95a13.2 13.2 0 0 0 1.79 6.63L2.667 29.333l6.96-1.82A13.29 13.29 0 0 0 16.004 29.3 13.32 13.32 0 1 0 16.004 2.667Zm0 24.32a11 11 0 0 1-5.6-1.53l-.4-.24-4.14 1.08 1.1-4.04-.26-.42a10.96 10.96 0 1 1 9.3 5.15Zm6.02-8.2c-.33-.17-1.95-.96-2.26-1.07-.3-.11-.52-.17-.74.17-.22.33-.86 1.07-1.05 1.29-.19.22-.39.24-.72.08a9.1 9.1 0 0 1-2.68-1.66 10.1 10.1 0 0 1-1.86-2.31c-.19-.33 0-.5.15-.67.14-.15.33-.39.49-.58.17-.19.22-.33.33-.55.11-.22.06-.42-.03-.58-.08-.17-.74-1.78-1.01-2.43-.27-.64-.54-.55-.74-.56h-.63a1.21 1.21 0 0 0-.88.41 3.7 3.7 0 0 0-1.15 2.74c0 1.62 1.18 3.18 1.34 3.4.17.22 2.32 3.54 5.62 4.97.79.34 1.4.54 1.88.69.79.25 1.51.22 2.08.13.63-.1 1.95-.8 2.23-1.57.27-.77.27-1.43.19-1.57-.08-.14-.3-.22-.63-.39Z"/>
        </svg>
      </a>
    </div>
  );
}
