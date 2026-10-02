"use client";

import { motion } from "framer-motion";
import { PackageCheck } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { DELIVERABLES } from "@/lib/site-data";

export function Deliverables() {
  return (
    <section
      id="deliverables"
      className="scroll-mt-24 bg-background py-20 sm:py-24"
      aria-label="Project deliverables"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Deliverables"
          title="What You Receive — Depending on Your Project"
          description="Every project is scoped upfront, so you know exactly which outputs arrive at the finish line — files, maps, scripts, reports and figures."
        />

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.04 } },
          }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {DELIVERABLES.map((item) => (
            <motion.li
              key={item}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
              }}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3.5 shadow-sm transition-all hover:border-primary/40 hover:shadow-sm"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10"
                aria-hidden="true"
              >
                <PackageCheck className="h-4 w-4 text-primary" />
              </span>
              <span className="text-sm font-medium text-foreground/85">
                {item}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
