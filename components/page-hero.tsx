import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
  imageSrc: string;
  imageAlt: string;
  panelLabel?: string;
  panelTitle?: string;
  panelText?: string;
  highlights?: string[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  ctaHref = "/contact",
  ctaLabel = "Talk to us",
  imageSrc,
  imageAlt,
  panelLabel = "Zanuri page overview",
  panelTitle = "Structured, persuasive, and business-aware digital delivery.",
  panelText = "Every page on this website exists to help you understand how Zanuri thinks, what Zanuri delivers, and where the right conversation can begin.",
  highlights = ["Business-first thinking", "Premium digital execution", "Support beyond launch"],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 bg-hero-grid bg-[size:38px_38px] opacity-55" />
      <div className="absolute inset-0 bg-blue-glow" />
      <div className="relative mx-auto max-w-screen-2xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 xl:px-10">
        <div className="hero-surface grid gap-8 p-6 md:p-8 lg:grid-cols-[1.02fr_0.98fr] xl:p-10">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {eyebrow}
            </span>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:leading-[1.04]">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={ctaHref}
                prefetch
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
              >
                {ctaLabel}
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                prefetch
                className="inline-flex items-center gap-2 rounded-2xl border border-border/70 bg-background/70 px-6 py-3.5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/40"
              >
                Explore services
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item} className="hero-panel px-4 py-4 text-sm leading-7 text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-border/60 shadow-soft">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/78 via-slate-900/18 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-blue-200">{panelLabel}</p>
                <p className="mt-3 text-lg font-semibold text-white">{panelTitle}</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">{panelText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
