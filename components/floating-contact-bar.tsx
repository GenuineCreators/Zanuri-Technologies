import Link from "next/link";
import { Mail, MessageCircle, PhoneCall } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function FloatingContactBar() {
  return (
    <div className="pointer-events-none fixed bottom-4 left-0 right-0 z-40 px-4 sm:bottom-6 sm:px-6 lg:right-6 lg:left-auto lg:w-auto lg:px-0">
      <div className="pointer-events-auto mx-auto flex max-w-md items-center justify-between gap-2 rounded-full border border-border/60 bg-card/85 p-2 shadow-soft backdrop-blur lg:mx-0">
        <Link
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </Link>
        <Link
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40"
        >
          <PhoneCall className="h-4 w-4" />
          Call
        </Link>
        <Link
          href="/contact"
          prefetch
          className="flex items-center justify-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40"
        >
          <Mail className="h-4 w-4" />
          Contact
        </Link>
      </div>
    </div>
  );
}
