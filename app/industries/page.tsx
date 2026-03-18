import { Building2, GraduationCap, HeartPulse, Landmark, ShoppingCart, Truck } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

const industries = [
  {
    title: "Retail and ecommerce",
    description:
      "Retail businesses need digital systems that support visibility, convenience, and efficient customer journeys. Zanuri can help with websites, order flows, integrations, customer apps, and marketing support.",
    icon: ShoppingCart,
    useCases: ["Online sales journeys", "Customer loyalty touchpoints", "Payment integrations"],
  },
  {
    title: "Financial and payment-driven services",
    description:
      "Where trust, reliability, and system connection matter, we can support payment flows, secure interfaces, integrations, dashboards, and operational software.",
    icon: Landmark,
    useCases: ["Payment experiences", "Client dashboards", "Internal financial workflows"],
  },
  {
    title: "Logistics and field operations",
    description:
      "Operations-heavy businesses often need better visibility, faster coordination, and less manual communication. We can support dashboards, tracking flows, mobile tools, and workflow systems.",
    icon: Truck,
    useCases: ["Internal apps", "Ops dashboards", "Service coordination tools"],
  },
  {
    title: "Professional services",
    description:
      "Consultancies, agencies, and service companies need websites, lead systems, portals, and digital tools that look credible and support smoother operations.",
    icon: Building2,
    useCases: ["Professional websites", "Lead capture systems", "Client portals"],
  },
  {
    title: "Education and training",
    description:
      "Digital products in education must feel clear, accessible, and well-structured. Zanuri can support training platforms, portals, admin systems, and communication experiences.",
    icon: GraduationCap,
    useCases: ["Learning portals", "Enrollment workflows", "Admin systems"],
  },
  {
    title: "Health, wellness, and care services",
    description:
      "Where users need confidence, convenience, and secure communication, strong UX and dependable systems become even more important.",
    icon: HeartPulse,
    useCases: ["Booking systems", "Patient or member journeys", "Operational software"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Digital solutions tailored to different business models, workflows, and customer expectations"
        description="No two industries operate the same way. Zanuri Technologies approaches each project with business context in mind so the final product reflects the realities of the sector it is serving."
        imageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Business team discussing solutions"
        panelLabel="Industry-aware delivery"
        panelTitle="Digital products work better when they reflect how the industry actually operates."
        panelText="Customer expectations, workflow risk, compliance needs, and operational complexity vary by sector. Zanuri keeps those realities in view while planning and delivering the solution."
        highlights={["Sector-aware thinking", "Customer and workflow context", "Solutions tailored to real operations"]}
      />

      <section className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8 xl:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Where we can help"
            title="Industry-aware thinking that makes the software, website, or system more relevant"
            description="The value of digital work increases when the solution reflects the customer journey, risk profile, internal process, and level of complexity inside the industry it serves."
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => (
            <AnimatedSection key={industry.title} delay={index * 0.05} className="glass-panel p-7">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <industry.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-semibold text-foreground">{industry.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{industry.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {industry.useCases.map((item) => (
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
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Different businesses, same principle",
                text: "The solution should fit the workflow, not force the workflow to fit bad software.",
              },
              {
                title: "Customer trust matters everywhere",
                text: "Whether your users are shoppers, clients, staff members, or patients, clarity and credibility shape adoption.",
              },
              {
                title: "Systems should support growth",
                text: "A well-built platform should make the next stage of growth easier rather than creating new bottlenecks.",
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

      <CtaBanner title="Need a solution tailored to the realities of your industry and how your business operates?" />
    </>
  );
}
