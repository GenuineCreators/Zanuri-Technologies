import { ClipboardList, PenTool, Gauge, Rocket, Search, Users } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

const phases = [
  {
    title: "Discovery and business understanding",
    description:
      "We start by understanding your business goals, user needs, operational challenges, current systems, and project constraints. This phase helps us avoid rushing into features before the real opportunity is clear.",
    outputs: ["Goal clarity", "Stakeholder alignment", "Problem framing"],
    icon: Search,
  },
  {
    title: "Requirements and solution definition",
    description:
      "Once the context is clear, we shape requirements, priorities, workflows, and the most sensible scope for the first release or next project phase. This reduces uncertainty before design and development begin.",
    outputs: ["Scope structure", "Feature priorities", "Solution direction"],
    icon: ClipboardList,
  },
  {
    title: "UI/UX and technical planning",
    description:
      "We translate the project into user flows, interface direction, system logic, and implementation thinking. This helps create better user experience and a smoother build process.",
    outputs: ["User journeys", "Interface plans", "Architecture thinking"],
    icon: PenTool,
  },
  {
    title: "Development and integrations",
    description:
      "We build the web app, mobile app, backend, or enterprise workflows required for the project, including the integrations and business logic needed to support real-world use.",
    outputs: ["Functional software", "Connected systems", "Core business logic"],
    icon: Users,
  },
  {
    title: "Testing and optimization",
    description:
      "Before launch, we review major user flows, edge cases, stability, and release readiness. This is where quality assurance protects both user trust and your team’s momentum.",
    outputs: ["Bug clarity", "Release confidence", "Refinement insights"],
    icon: Gauge,
  },
  {
    title: "Launch, support, and iteration",
    description:
      "After release, we continue supporting the product where needed so your business can respond to feedback, fix issues, and plan the next wave of improvements with more clarity.",
    outputs: ["Go-live support", "Ongoing care", "Improvement roadmap"],
    icon: Rocket,
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title="A clear, professional workflow for turning digital ideas into dependable business solutions"
        description="Zanuri Technologies uses a practical delivery process that keeps the work structured and aligned with your real goals. We believe better outcomes come from clear discovery, better requirements, thoughtful design, disciplined development, strong quality checks, and meaningful post-launch support."
        imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Project planning session"
        panelLabel="Delivery workflow"
        panelTitle="A process designed to reduce confusion before it becomes expensive."
        panelText="We bring structure to discovery, solution design, implementation, QA, launch, and support so your project has a stronger foundation from the beginning."
        highlights={["Clear discovery before development", "Professional handoff from design to build", "Post-launch support with continuity"]}
      />

      <section className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8 xl:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Why the process matters"
            title="Projects move better when there is clarity before complexity"
            description="A rushed project often becomes more expensive later through avoidable rework, unclear priorities, inconsistent design, or unstable delivery. Our process is designed to create stronger decisions early so the project is more stable as it grows."
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {phases.map((phase, index) => (
            <AnimatedSection key={phase.title} delay={index * 0.05} className="glass-panel p-7">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <phase.icon className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.28em] text-primary">Phase {index + 1}</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-foreground">{phase.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{phase.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {phase.outputs.map((item) => (
                  <span key={item} className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-foreground">
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
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Transparent communication",
                text: "We aim to keep priorities, decisions, and progress easy to understand so the project does not drift into confusion.",
              },
              {
                title: "Business-led prioritization",
                text: "We help identify what matters most to launch, adoption, operations, and future growth instead of trying to build everything at once.",
              },
              {
                title: "Scalable thinking",
                text: "Even when we start lean, we think about how the product, system, or workflow can evolve without forcing costly rebuilds too early.",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.05} className="glass-panel p-7">
                <h2 className="font-display text-2xl font-semibold text-foreground">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Need a structured team to guide the process from idea to launch and beyond?" />
    </>
  );
}
