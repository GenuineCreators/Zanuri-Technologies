import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { IconMap } from "@/components/icon-map";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      prefetch
      className="group overflow-hidden rounded-[2rem] border border-border/60 bg-card/80 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary/40"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
        <div className="absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white backdrop-blur">
          <IconMap name={service.icon} className="h-6 w-6" />
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold text-foreground">{service.title}</h3>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-primary transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className="text-sm leading-7 text-muted-foreground">{service.short}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {service.bestFor.slice(0, 2).map((item) => (
            <span
              key={item}
              className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
