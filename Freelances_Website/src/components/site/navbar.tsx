"use client";

import { useEffect, useState } from "react";
import { Globe2, Menu, Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Workflow", href: "#workflow" },
  { label: "Tools", href: "#tools" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 shadow-sm backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Brand */}
        <a
          href="#home"
          className={cn(
            "flex items-center gap-2 font-semibold transition-colors",
            scrolled ? "text-foreground" : "text-white"
          )}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <Globe2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight">
              {BRAND.name}
            </span>
            <span
              className={cn(
                "hidden text-[10px] font-medium uppercase tracking-widest sm:block",
                scrolled ? "text-muted-foreground" : "text-white/70"
              )}
            >
              GIS &amp; Remote Sensing
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  scrolled
                    ? "text-foreground/80"
                    : "text-white/85 hover:text-white"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <span
            className={cn(
              "hidden items-center gap-1.5 text-xs font-medium xl:flex",
              scrolled ? "text-muted-foreground" : "text-white/75"
            )}
          >
            <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            On-time delivery, guaranteed
          </span>
          <Button asChild size="sm" className="font-semibold">
            <a href="#contact">Get a Free Quote</a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-md transition-colors lg:hidden",
            scrolled
              ? "text-foreground hover:bg-muted"
              : "text-white hover:bg-white/10"
          )}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-border bg-background/95 backdrop-blur-md lg:hidden">
          <ul className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/85 transition-colors hover:bg-muted hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full font-semibold">
                <a href="#contact" onClick={() => setOpen(false)}>
                  Get a Free Quote
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
