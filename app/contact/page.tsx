import Link from "next/link";
import { Instagram, Mail, MessageCircle, PhoneCall, Rocket, Globe } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

const contactMethods = [
  {
    title: "Email",
    description: "For project inquiries, partnerships, and detailed briefs.",
    href: `mailto:${siteConfig.email}`,
    label: siteConfig.email,
    icon: Mail,
  },
  {
    title: "Call",
    description: "For direct conversation about your project or business need.",
    href: `tel:${siteConfig.phoneRaw}`,
    label: siteConfig.phoneDisplay,
    icon: PhoneCall,
  },
  {
    title: "WhatsApp",
    description: "For quick project discussions and easier follow-up.",
    href: siteConfig.whatsappUrl,
    label: "+254113426475",
    icon: MessageCircle,
  },
  {
    title: "Instagram",
    description: "Reach Zanuri Technologies on Instagram.",
    href: siteConfig.instagramUrl,
    label: "@zanuritechnologies",
    icon: Instagram,
  },
  {
    title: "TikTok",
    description: "Reach Zanuri Technologies on TikTok.",
    href: siteConfig.tiktokUrl,
    label: "@zanuritechnologies",
    icon: Rocket,
  },
  {
    title: "X",
    description: "Reach Zanuri Technologies on X.",
    href: siteConfig.xUrl,
    label: "@zanuritechnologies",
    icon: Globe,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to build, improve, or connect"
        description="Whether you already know exactly what you need or you want help thinking through the best digital path forward, Zanuri Technologies is ready to hear from you. Share your project details and we will respond with the best next step."
        imageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Business communication workspace"
        panelLabel="Reach Zanuri"
        panelTitle="Direct conversation, project inquiry, or quick follow-up — choose what works best."
        panelText="You can email, call, use WhatsApp, or fill in the website form. The site is also set up so contact form inquiries can be routed to zanuritechnologies@gmail.com once SMTP details are configured."
        highlights={["Email, call, and WhatsApp available", "Social reach on Instagram, TikTok, and X", "Project form ready for inquiries"]}
      />

      <section className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8 xl:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Direct channels"
            title="Choose the contact method that feels easiest for you"
            description="You can send a detailed brief by email, call directly, reach out on WhatsApp, or connect through Zanuri Technologies social platforms."
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {contactMethods.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.05}>
              <Link
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="glass-panel block p-7 transition hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold text-foreground">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                <p className="mt-5 text-sm font-semibold text-foreground">{item.label}</p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/40 py-20">
        <div className="mx-auto grid max-w-screen-2xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 xl:px-10">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Project inquiry form"
              title="Send your project details directly to Zanuri Technologies"
              description="The website form is set up to send inquiries to zanuritechnologies@gmail.com once SMTP details are configured in the project environment. You can use this form for new builds, redesigns, integrations, marketing support, or general business inquiries."
            />
            <div className="mt-8 rounded-[2rem] border border-border/60 bg-card/80 p-7 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-foreground">What to include in your message</h3>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
                <li>What your business does and the digital outcome you want</li>
                <li>Whether this is a new project, a redesign, or an existing system improvement</li>
                <li>Any must-have features, integrations, or workflow challenges</li>
                <li>Your timeline, urgency, or current project stage</li>
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
