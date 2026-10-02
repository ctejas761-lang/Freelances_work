"use client";

import { Satellite } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { TOOLS } from "@/lib/site-data";

export function ToolsMarquee() {
  const doubled = [...TOOLS, ...TOOLS];

  return (
    <section
      id="tools"
      className="scroll-mt-24 border-y border-border bg-muted/40 py-14"
      aria-label="Software and tools we work with"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Toolkit"
          title="Software, Platforms & Satellite Data"
          description="We work daily with industry-standard GIS, remote-sensing, programming and machine-learning tools — plus the full range of free satellite data."
        />
      </div>

      <div
        className="marquee-paused relative overflow-hidden"
        role="region"
        aria-label="Scrolling list of tools and platforms"
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />

        <ul className="animate-marquee flex w-max list-none gap-3 py-1">
          {doubled.map((tool, i) => (
            <li
              key={`${tool}-${i}`}
              aria-hidden={i >= TOOLS.length}
              className="flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground/85 shadow-sm"
            >
              <Satellite
                className="h-3.5 w-3.5 text-primary"
                aria-hidden="true"
              />
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
