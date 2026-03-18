import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CirclePlay,
  Layers3,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";

const proofItems = [
  "Apps, websites, and internal systems built with clarity",
  "Integrations, backend structure, and testing handled carefully",
  "Support that continues after launch as your business grows",
];

const capabilityItems = [
  {
    title: "Business-first planning",
    text: "Clear product direction, smarter priorities, and delivery built around actual business goals.",
    icon: Workflow,
  },
  {
    title: "Premium execution",
    text: "Careful design, solid engineering, and QA that helps every release feel dependable.",
    icon: Sparkles,
  },
  {
    title: "Scalable foundations",
    text: "Systems, integrations, and support prepared for growth instead of constant rework.",
    icon: ShieldCheck,
  },
];

const deliveryPillars = ["Strategy", "Design", "Development", "Integrations", "QA", "Support"];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 bg-hero-grid bg-[size:40px_40px] opacity-45" />
      <div className="absolute inset-0 bg-blue-glow" />

      <div className="relative mx-auto max-w-screen-2xl px-4 pb-14 pt-8 sm:px-6 lg:px-8 xl:px-10">
        <div className="hero-surface px-6 py-8 md:px-8 md:py-10 xl:px-10 xl:py-12">
          <div className="grid items-center gap-8 xl:grid-cols-[1fr_1.02fr] xl:gap-12">
            <AnimatedSection className="max-w-3xl">
              <span className="inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Custom technology that moves business forward
              </span>

              <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[3.95rem] xl:leading-[1.03]">
                Build the right digital product, sharpen your online presence, and scale with more confidence.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Zanuri Technologies helps businesses design, build, improve, and support modern digital solutions — from
                websites and mobile apps to internal systems, integrations, and growth-focused digital execution.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  prefetch
                  className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
                >
                  Start your project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  prefetch
                  className="inline-flex items-center gap-2 rounded-2xl border border-border/70 bg-background/70 px-6 py-3.5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/40"
                >
                  Explore our services
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {proofItems.map((item) => (
                  <div key={item} className="hero-panel px-4 py-4 text-sm leading-7 text-muted-foreground">
                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <BadgeCheck className="h-4 w-4" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08} className="xl:h-full xl:min-h-[640px] xl:w-full">
              <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-soft xl:min-h-[640px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_28%),linear-gradient(180deg,hsl(var(--card))_0%,hsl(var(--background))_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_30%),linear-gradient(180deg,rgba(11,18,38,0.98)_0%,rgba(8,13,28,1)_100%)]" />
                <div className="absolute -right-24 top-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl dark:bg-primary/18" />
                <div className="absolute -left-16 bottom-12 h-48 w-48 rounded-full bg-fuchsia-400/10 blur-3xl dark:bg-fuchsia-500/12" />
                <div className="absolute inset-y-0 left-[18%] w-px bg-border/50" />
                <div className="absolute inset-x-0 top-[52%] h-px bg-border/40" />

                <div className="relative flex h-full flex-col justify-between p-5 sm:p-6 lg:p-7">
                  <div className="space-y-5">
                    <div className="inline-flex w-fit rounded-full border border-border/70 bg-background/65 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/80 backdrop-blur-md dark:bg-white/5 dark:text-white/88">
                      Zanuri Technologies
                    </div>

                    <div className="max-w-[36rem] rounded-[1.75rem] border border-border/70 bg-background/70 p-5 shadow-[0_30px_80px_-48px_rgba(15,23,42,0.35)] backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:shadow-[0_30px_80px_-48px_rgba(15,23,42,0.8)] sm:p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/90 dark:text-white/70">
                        Product strategy • UX • Development
                      </p>
                      <h2 className="mt-3 max-w-xl text-2xl font-semibold leading-tight text-foreground sm:text-[1.95rem] dark:text-white">
                        Technology delivery that feels sharp, structured, and ready for real business growth.
                      </h2>
                      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-[15px] dark:text-white/78">
                        We combine business analysis, design, engineering, integrations, testing, and support into one
                        practical delivery flow that helps your business move with more clarity.
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2.5">
                        {deliveryPillars.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border/70 bg-background/75 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/75 dark:border-white/12 dark:bg-white/8 dark:text-white/78"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid gap-3 sm:grid-cols-3">
                      {capabilityItems.map(({ title, text, icon: Icon }) => (
                        <div
                          key={title}
                          className="rounded-[1.35rem] border border-border/70 bg-background/72 p-4 shadow-[0_30px_75px_-50px_rgba(15,23,42,0.25)] backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:shadow-[0_30px_75px_-50px_rgba(15,23,42,0.75)]"
                        >
                          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/12 text-primary dark:bg-white/10 dark:text-white">
                            <Icon className="h-4 w-4" />
                          </div>
                          <p className="text-base font-semibold text-foreground dark:text-white">{title}</p>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground dark:text-white/74">{text}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 rounded-[1.5rem] border border-border/70 bg-background/72 px-4 py-4 shadow-[0_30px_75px_-50px_rgba(15,23,42,0.25)] backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:shadow-[0_30px_75px_-50px_rgba(15,23,42,0.75)] sm:px-5">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                        <CirclePlay className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-foreground dark:text-white">
                          Built for serious businesses that want clarity and momentum.
                        </p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground dark:text-white/74">
                          Strong websites, polished apps, cleaner workflows, and dependable support after launch.
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/75 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80 dark:border-white/12 dark:bg-white/8 dark:text-white/88">
                        <Layers3 className="h-3.5 w-3.5" />
                        Premium execution
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
