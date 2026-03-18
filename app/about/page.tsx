import Image from "next/image";
import { Compass, Handshake, Lightbulb, Scale, ShieldCheck, Target } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

const values = [
  {
    title: "Strategic thinking",
    description: "We aim to understand the business need behind the request so the final solution solves the right problem.",
    icon: Compass,
  },
  {
    title: "Professional execution",
    description: "Design quality, technical structure, communication, and polish all matter because they shape trust.",
    icon: ShieldCheck,
  },
  {
    title: "Partnership mindset",
    description: "We prefer long-term, honest, practical collaboration instead of transactional delivery without context.",
    icon: Handshake,
  },
  {
    title: "Clarity over noise",
    description: "We keep scope, priorities, and recommendations as clear as possible so decisions are easier to make.",
    icon: Lightbulb,
  },
  {
    title: "Business relevance",
    description: "Every solution should support revenue, operations, growth, or user experience in a meaningful way.",
    icon: Target,
  },
  {
    title: "Sustainable progress",
    description: "We build with long-term maintainability in mind so your digital systems remain useful beyond launch day.",
    icon: Scale,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Zanuri"
        title="A technology partner focused on helping businesses move with more clarity, confidence, and digital strength"
        description="Zanuri Technologies exists to help businesses turn ideas, pain points, and growth opportunities into well-designed digital solutions. We believe technology should be practical, visually strong, aligned with business goals, and dependable enough to support real progress over time."
        imageSrc="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Team collaboration in a modern office"
        panelLabel="About the company"
        panelTitle="A team built around clarity, quality, and practical digital problem-solving."
        panelText="Zanuri aims to be the kind of technology partner that understands the business problem first, then designs and builds in a way that creates lasting value."
        highlights={["Product thinking with business context", "Professional delivery standards", "Long-term partnership mindset"]}
      />

      <section className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Who we are"
              title="We combine product thinking, design, engineering, and growth support under one roof"
              description="Zanuri Technologies serves businesses that want more than a quick build. We work with organizations that want better digital systems, sharper online presence, cleaner workflows, or stronger software products. Our role is to bring structure to the process, quality to the work, and practical advice to the decisions that shape your digital future."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Software solutions aligned with business value",
                "Professional websites and product experiences",
                "Technical systems designed to support scale",
                "Digital support that continues beyond launch",
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-border/60 bg-card/80 p-5 shadow-soft">
                  <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08} className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-border/60 shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Team collaboration"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/15 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.24em] text-blue-200">What drives us</p>
              <p className="mt-3 text-lg font-semibold text-white">
                To help businesses use technology in a way that feels intentional, competitive, and genuinely useful.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/40 py-20">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Our values"
              title="How we think about the work and the standards we want every project to reflect"
              description="Good digital delivery is not only about output. It is also about the way decisions are made, how communication is handled, and how deeply the solution reflects the needs of the business it serves."
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.05} className="glass-panel p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <AnimatedSection className="glass-panel p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-primary">Our mission</p>
            <h3 className="mt-4 font-display text-3xl font-semibold text-foreground">
              Build useful technology that helps businesses operate better and present themselves better.
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              We want businesses to have access to modern, thoughtful digital solutions that do not just look impressive,
              but support real customer and operational outcomes.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.06} className="glass-panel p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-primary">Our promise</p>
            <h3 className="mt-4 font-display text-3xl font-semibold text-foreground">
              Clarity, quality, and practical thinking from the start of the project to the next phase of growth.
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              We aim to keep the work grounded in business context, visually professional, technically responsible, and
              structured enough to make future progress easier.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.12} className="glass-panel p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-primary">Our approach</p>
            <h3 className="mt-4 font-display text-3xl font-semibold text-foreground">
              Understand first, design carefully, build deliberately, and support continuously.
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              That is how we reduce unnecessary rework, create better user experiences, and help digital projects stay aligned with what the business actually needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CtaBanner title="Need a partner that can think through the business and deliver the technology?" />
    </>
  );
}
