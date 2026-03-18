import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function CtaBanner({
  title = "Let’s design the right digital solution for your business.",
  description = "Whether you need a website, app, internal platform, or a clear strategy for your next digital move, Zanuri is ready to help you think, build, and grow with confidence.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 xl:px-10">
      <div className="overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/15 via-card to-accent/20 p-8 shadow-soft backdrop-blur md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-primary/20 bg-background/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Start the conversation
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <Link
              href="/contact"
              prefetch
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
            >
              Contact Zanuri
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border/70 bg-background/70 px-6 py-3.5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/40"
            >
              WhatsApp us
              <MessageCircle className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
