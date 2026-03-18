import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Mail, MessageCircle, Phone, Rocket, Globe } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40 pb-28 pt-16 lg:pb-10">
      <div className="mx-auto grid max-w-screen-2xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr] lg:px-8 xl:px-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-background ring-1 ring-border/60">
              <Image src="/logo.webp" alt="Zanuri Technologies logo" fill className="object-contain p-1.5" />
            </div>
            <div>
              <p className="font-display text-xl font-bold text-foreground">{siteConfig.name}</p>
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Technology Solutions</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
            We help businesses design, build, connect, and grow digital solutions that look professional, work reliably,
            and support real business progress.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/40"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Link>
            <Link
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/40"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">Navigate</h3>
          <div className="mt-4 flex flex-col gap-3">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} prefetch className="text-sm text-muted-foreground transition hover:text-foreground">
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">Popular services</h3>
          <div className="mt-4 flex flex-col gap-3">
            {services.slice(0, 5).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                prefetch
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
              >
                <ArrowUpRight className="h-4 w-4 text-primary" />
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">Reach us</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <Link href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 transition hover:text-foreground">
              <Mail className="h-4 w-4 text-primary" />
              {siteConfig.email}
            </Link>
            <Link href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-foreground">
              <Instagram className="h-4 w-4 text-primary" />
              @zanuritechnologies
            </Link>
            <Link href={siteConfig.tiktokUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-foreground">
              <Rocket className="h-4 w-4 text-primary" />
              TikTok @zanuritechnologies
            </Link>
            <Link href={siteConfig.xUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-foreground">
              <Globe className="h-4 w-4 text-primary" />
              X @zanuritechnologies
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-screen-2xl border-t border-border/60 px-4 pt-6 text-sm text-muted-foreground sm:px-6 lg:px-8 xl:px-10">
        © {new Date().getFullYear()} {siteConfig.name}. Built for a modern, professional digital presence.
      </div>
    </footer>
  );
}
