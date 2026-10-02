"use client";

import { motion } from "framer-motion";
import { Database, Cpu, CloudCog, Wrench } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { PLATFORMS } from "@/lib/site-data";

const CATEGORY_ICONS: Record<string, typeof Database> = {
  GIS: Wrench,
  "Remote Sensing": CloudCog,
  Programming: Cpu,
  "Cloud Processing": CloudCog,
  "ML / AI": Cpu,
  "Spatial Python": Cpu,
  Visualization: Database,
  "Web GIS": Database,
  "Satellite Data": Database,
};

export function Platforms() {
  return (
    <section
      id="platforms"
      className="scroll-mt-24 bg-muted/40 py-20 sm:py-24"
      aria-label="Software and platforms table"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Software & Platforms"
          title="The Stack Behind Every Deliverable"
          description="Battle-tested, industry-standard tooling for spatial analysis, cloud processing, machine learning and web mapping."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORMS.map((platform, i) => {
            const Icon = CATEGORY_ICONS[platform.category] ?? Database;
            return (
              <motion.dl
                key={platform.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/40"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-sm font-semibold text-foreground">
                    {platform.category}
                  </dt>
                  <dd className="mt-0.5 text-sm text-muted-foreground">
                    {platform.tools}
                  </dd>
                </div>
              </motion.dl>
            );
          })}
        </div>
      </div>
    </section>
  );
}
