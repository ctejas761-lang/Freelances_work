"use client";

import { Globe2, Mail, MessageCircle, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/site-data";

const QUICK_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Workflow", href: "#workflow" },
  { label: "Tools", href: "#tools" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Globe2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-base font-bold">{BRAND.name}</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Professional geospatial analysis and research support for
              academic, agricultural, environmental, forestry and GIS projects.
              Remote / online work available worldwide.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-4 list-none space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services summary */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Core Services
            </h3>
            <ul className="mt-4 list-none space-y-2.5 text-sm text-zinc-400">
              <li>GIS &amp; Geospatial Analysis</li>
              <li>Remote Sensing &amp; GEE</li>
              <li>Agriculture &amp; Crop Monitoring</li>
              <li>Forestry &amp; Wildlife GIS</li>
              <li>Machine Learning &amp; AI</li>
              <li>Research &amp; Thesis Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Get in Touch
            </h3>
            <ul className="mt-4 list-none space-y-2.5 text-sm text-zinc-400">
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-emerald-400"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="truncate">{BRAND.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                {BRAND.whatsapp}
              </li>
              <li className="pt-2 text-xs leading-relaxed text-zinc-500">
                GIS • Remote Sensing • Agriculture • Forestry • Geoinformatics
                • Machine Learning
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © {year} {BRAND.name}. Freelance GIS &amp; Remote Sensing Services.
            All rights reserved.
          </p>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-zinc-400 hover:bg-white/10 hover:text-white"
          >
            <a href="#home">
              <ArrowUp className="mr-1 h-4 w-4" aria-hidden="true" />
              Back to top
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
