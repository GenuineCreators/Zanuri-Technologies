import Image from "next/image";
import { BadgeCheck, Layers3, ShieldCheck, Sparkles, Workflow } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { HomeHero } from "@/components/home-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/services";

const capabilityCards = [
  {
    title: "Built around business value",
    description:
      "We do not just deliver screens and code. We focus on solutions that support growth, operational efficiency, customer trust, and measurable business progress.",
    icon: Layers3,
  },
  {
    title: "Design plus technical depth",
    description:
      "Zanuri combines strong visual execution with backend thinking, system planning, and practical delivery support.",
    icon: Sparkles,
  },
  {
    title: "Clear process and communication",
    description:
      "From discovery to launch, we keep projects structured, transparent, and aligned with the goals that matter most.",
    icon: Workflow,
  },
  {
    title: "Long-term digital partner",
    description:
      "We can support strategy, implementation, integration, optimization, and ongoing maintenance after the first release.",
    icon: ShieldCheck,
  },
];

const businessStages = [
  {
    title: "For startups and founders",
    description:
      "Turn your idea into a more structured digital product with smart feature priorities, good user experience, and a launch path that makes sense.",
    bullets: ["MVP planning", "Product design", "Launch-ready development"],
  },
  {
    title: "For growing businesses",
    description:
      "Replace manual workflows, modernize your web presence, improve payments, and create stronger digital systems around your operations.",
    bullets: ["Workflow digitization", "Website and portal upgrades", "Integrations and automation"],
  },
  {
    title: "For established organizations",
    description:
      "Build enterprise-grade internal systems, improve reporting visibility, and support complex teams with software that fits real business structure.",
    bullets: ["Enterprise apps", "Role-based systems", "Scalable architecture"],
  },
];

const faqs = [
  {
    question: "What kind of companies does Zanuri Technologies work with?",
    answer:
      "We work with startups, service businesses, SMEs, and established organizations that want better digital systems, stronger customer experiences, or more efficient operations.",
  },
  {
    question: "Can Zanuri handle both design and development?",
    answer:
      "Yes. Zanuri can support business analysis, product planning, UI/UX design, software development, integrations, testing, and post-launch support in one connected workflow.",
  },
  {
    question: "Do you offer fixed pricing on the website?",
    answer:
      "No. Every project has different goals, scope, and complexity. The best next step is to contact us so we can recommend the right approach for your needs.",
  },
  {
    question: "Can you support us after launch?",
    answer:
      "Yes. Maintenance and support are part of our offering, so we can continue helping as your platform grows and your business needs change.",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilityCards.map((card, index) => (
            <AnimatedSection key={card.title} delay={index * 0.05} className="glass-panel p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <card.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-semibold text-foreground">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8 xl:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Core solutions"
            title="A full digital services stack for businesses that want to build well and grow well"
            description="Zanuri Technologies brings together product thinking, design, development, technical structure, and growth support so you can work with one capable partner across multiple digital priorities."
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={service.slug} delay={index * 0.04}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-y border-border/60 bg-card/40 py-20">
        <div className="mx-auto grid max-w-screen-2xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 xl:px-10">
          <AnimatedSection className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-border/60 shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              alt="Business strategy session"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.25em] text-blue-200">Zanuri advantage</p>
              <p className="mt-3 text-lg font-semibold text-white">
                Strategy, product thinking, implementation, and support in one connected team.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08} className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="Why businesses choose us"
              title="We help you make better digital decisions before, during, and after development"
              description="The strongest digital projects do not come from code alone. They come from understanding the business, structuring the right solution, designing with purpose, building carefully, and staying involved long enough to make the product useful in the real world. That is the standard Zanuri aims to deliver."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Clear thinking before development begins",
                "Premium design that improves trust and usability",
                "Modern technical delivery with scale in mind",
                "Hands-on support for launch, testing, and improvement",
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <BadgeCheck className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8 xl:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="How we work"
            title="A delivery process designed to reduce confusion and keep the work aligned with real outcomes"
            description="Every project is shaped around your goals, but the core approach remains disciplined: understand the business, define the right direction, design carefully, build with clarity, test thoroughly, and support the product after launch."
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "1. Discovery",
              text: "We learn about your business, challenges, users, systems, and what success should look like before proposing the right build path.",
            },
            {
              title: "2. Scope and solution design",
              text: "We shape requirements, user journeys, structure, and priorities so the work is grounded and commercially relevant.",
            },
            {
              title: "3. UI/UX and system planning",
              text: "We create product flows, interface direction, and technical thinking that make implementation smoother and more intentional.",
            },
            {
              title: "4. Development",
              text: "We build the core experience, the backend logic, and the key integrations needed to support real usage.",
            },
            {
              title: "5. Testing and refinement",
              text: "We review usability, functionality, edge cases, and release readiness so quality is stronger before launch.",
            },
            {
              title: "6. Launch and support",
              text: "We help the product go live properly and continue supporting improvements, fixes, and future scale.",
            },
          ].map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 0.05} className="glass-panel p-6">
              <h3 className="font-display text-2xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.text}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/40 py-20">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Built for different stages"
              title="Whether you are launching, upgrading, or restructuring systems, Zanuri can meet you where you are"
              description="Different businesses need different levels of support. We tailor the approach to your stage, your urgency, and the level of digital maturity already inside your organization."
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {businessStages.map((stage, index) => (
              <AnimatedSection key={stage.title} delay={index * 0.06} className="glass-panel p-7">
                <h3 className="font-display text-2xl font-semibold text-foreground">{stage.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{stage.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-foreground">
                  {stage.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8 xl:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Frequently asked"
            title="Answers to common questions businesses ask before starting a project"
            description="A digital project often begins with uncertainty around scope, cost, systems, or where to start. These answers help clarify the way Zanuri approaches that early stage."
            align="center"
          />
        </AnimatedSection>
        <div className="mx-auto mt-12 grid max-w-5xl gap-5">
          {faqs.map((faq, index) => (
            <AnimatedSection key={faq.question} delay={index * 0.05} className="glass-panel p-6">
              <h3 className="font-display text-xl font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
