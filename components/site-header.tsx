"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-screen-2xl px-4 pt-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="rounded-[1.75rem] border border-border/60 bg-card/82 px-4 py-3 shadow-soft backdrop-blur-xl sm:px-5">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" prefetch className="flex min-w-0 items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-background/80 ring-1 ring-border/60 sm:h-12 sm:w-12">
                <Image src="/logo.webp" alt="Zanuri Technologies logo" fill className="object-contain p-1.5" priority />
              </div>
              <div className="min-w-0">
                <p className="truncate font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
                  {siteConfig.name}
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {siteConfig.nav.map((item) => {
                const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition",
                      active
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-background/80 hover:text-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <ThemeToggle />
              <Link
                href="/contact"
                prefetch
                className="inline-flex items-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
              >
                Let’s talk
              </Link>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-background/80 text-foreground"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {open && (
            <div className="mt-4 rounded-[1.5rem] border border-border/60 bg-background/85 p-3 lg:hidden">
              <nav className="flex flex-col gap-1">
                {siteConfig.nav.map((item) => {
                  const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      prefetch
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-sm font-medium transition",
                        active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-card"
                      )}
                    >
                      {item.title}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  prefetch
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Contact Zanuri
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
