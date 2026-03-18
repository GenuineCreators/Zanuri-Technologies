import Link from "next/link";
import { ArrowRight, Blocks, Cable, Laptop, Megaphone } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/services";

const grouped = [
  {
    title: "Strategy and planning",
    description: "Start with clearer product direction, requirements, and solution thinking before expensive assumptions create avoidable waste.",
    icon: Blocks,
    items: ["Business Analysis", "UI/UX Design"],
  },
  {
    title: "Build and implementation",
    description: "Launch digital products and business systems with the design, development, backend, and integration support needed for real use.",
    icon: Laptop,
    items: ["Mobile App Development", "Web Development", "Backend & Databases", "Enterprise Apps"],
  },
  {
    title: "Connection and quality",
    description: "Improve system flow, reduce manual work, and strengthen release confidence through better integrations and QA practices.",
    icon: Cable,
    items: ["Payments & Integrations", "Testing & QA"],
  },
  {
    title: "Growth and continuity",
    description: "Keep the product useful after launch through support, optimization, and digital growth activities that keep momentum going.",
    icon: Megaphone,
    items: ["Maintenance & Support", "Digital Marketing"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Detailed digital services built to solve real business challenges"
        description="Zanuri Technologies offers a connected range of services so businesses can move from idea to execution without losing clarity. Explore the full service set below, then open any service page for deeper detail on what it covers and how it helps."
        imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Software development workspace"
        panelLabel="Service overview"
        panelTitle="A connected service stack for planning, building, refining, and growing."
        panelText="Some businesses need a single service. Others need a partner across strategy, design, engineering, integration, QA, support, and digital growth. Zanuri is built for both."
        highlights={["Multiple services under one partner", "Detailed pages for each offering", "No generic pricing on the website"]}
      />

      <section className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8 xl:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Service map"
            title="A flexible service mix that supports planning, building, improving, and growing"
            description="Some businesses need a single focused service. Others need a partner that can support several connected priorities. Zanuri is set up to do both."
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {grouped.map((group, index) => (
            <AnimatedSection key={group.title} delay={index * 0.05} className="glass-panel p-7">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <group.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-3xl font-semibold text-foreground">{group.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm text-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/40 py-20">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <AnimatedSection>
            <SectionHeading
              eyebrow="All services"
              title="Open each service to see what it includes, who it is for, and how Zanuri approaches it"
              description="Every service page is designed to help you understand the scope more clearly, so you can decide where the best next conversation should begin."
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedSection key={service.slug} delay={index * 0.04}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8 xl:px-10">
        <div className="glass-panel grid gap-8 p-8 md:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-[0.28em] text-primary">Need guidance?</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Not sure which service is the right starting point for your business?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
              That is normal. Some projects begin as a website request and later need business analysis, UX refinement,
              integrations, or long-term maintenance. Zanuri can help you identify the most sensible starting point.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.08} className="flex flex-col gap-4 lg:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
            >
              Contact us for guidance
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="rounded-[1.5rem] border border-border/70 bg-background/70 p-5 text-sm leading-7 text-muted-foreground">
              We can recommend the right mix based on your goals, current systems, budget stage, and timeline.
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CtaBanner title="Ready to discuss a specific service or a broader digital transformation need?" />
    </>
  );
}
