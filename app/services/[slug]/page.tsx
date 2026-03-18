import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { IconMap } from "@/components/icon-map";
import { SectionHeading } from "@/components/section-heading";
import { getServiceBySlug, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type PageParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service not found",
    };
  }

  return {
    title: service.title,
    description: service.short,
  };
}

export default async function ServiceDetailPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 pt-32">
        <div className="absolute inset-0 bg-blue-glow" />
        <div className="absolute inset-0 bg-hero-grid bg-[size:40px_40px] opacity-60" />
        <div className="relative mx-auto grid max-w-screen-2xl gap-10 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8 xl:px-10">
          <AnimatedSection className="flex flex-col justify-center">
            <Link href="/services" className="text-sm font-medium text-primary hover:underline">
              ← Back to all services
            </Link>
            <div className="mt-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <IconMap name={service.icon} className="h-6 w-6" />
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{service.headline}</p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
              >
                Contact us about this service
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center gap-2 rounded-2xl border border-border/70 bg-card/80 px-6 py-3.5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/40"
              >
                View our process
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08} className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-border/60 shadow-soft">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/15 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.24em] text-blue-200">Why this matters</p>
              <p className="mt-3 text-lg font-semibold text-white">{service.short}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <AnimatedSection>
            <SectionHeading
              eyebrow="What this service covers"
              title={`How ${service.title.toLowerCase()} supports your business`}
              description={service.description}
            />
            <div className="mt-8 rounded-[2rem] border border-border/60 bg-card/80 p-7 shadow-soft">
              <h2 className="font-display text-2xl font-semibold text-foreground">Ideal for</h2>
              <ul className="mt-5 space-y-4">
                {service.bestFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08} className="glass-panel p-7">
            <h2 className="font-display text-2xl font-semibold text-foreground">Typical deliverables</h2>
            <ul className="mt-6 space-y-4">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/40 py-20">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Expected impact"
              title="What this service is designed to improve"
              description="The strongest digital investment is one that changes how the business performs, how users experience the product, or how teams operate internally."
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {service.outcomes.map((outcome, index) => (
              <AnimatedSection key={outcome} delay={index * 0.05} className="glass-panel p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">{outcome}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8 xl:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Our approach"
            title={`How Zanuri typically delivers ${service.title.toLowerCase()}`}
            description="Every engagement is tailored, but the structure below reflects the type of thinking we usually apply to create better outcomes and cleaner project execution."
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {service.process.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 0.05} className="glass-panel p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-primary">Step {index + 1}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/40 py-20">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Frequently asked"
              title={`Questions about ${service.title.toLowerCase()}`}
              description="These short answers cover some of the most common questions people ask before deciding on this type of work."
              align="center"
            />
          </AnimatedSection>
          <div className="mx-auto mt-12 grid max-w-4xl gap-5">
            {service.faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 0.05} className="glass-panel p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title={`Need ${service.title.toLowerCase()} support tailored to your business?`} />
    </>
  );
}
