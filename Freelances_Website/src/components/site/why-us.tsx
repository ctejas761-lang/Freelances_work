"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Timer, Layers, MessagesSquare, Award } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { WHY_POINTS } from "@/lib/site-data";

const POINT_ICONS = [Timer, Layers, MessagesSquare, Award];

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="scroll-mt-24 bg-muted/40 py-20 sm:py-24"
      aria-label="Why choose our services"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Work With Us"
          title="Freelance Support You Can Rely On"
          description="We treat every deadline as our duty. Here is what makes clients come back for their next project."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Forestry image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl lg:order-1"
          >
            <Image
              src="/images/forestry.png"
              alt="Aerial drone view of forest canopy with GIS monitoring overlay"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/15 bg-zinc-950/70 p-4 backdrop-blur-sm">
              <p className="flex items-center gap-2 text-sm font-semibold text-white">
                <Timer className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                Milestone-based schedule, on-time completion
              </p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-300">
                Each project runs on a clear timeline with checkpoints — agreed
                with you before work starts, honored until delivery.
              </p>
            </div>
          </motion.div>

          {/* Points */}
          <ul className="order-1 list-none space-y-5 lg:order-2">
            {WHY_POINTS.map((point, i) => {
              const Icon = POINT_ICONS[i] ?? Award;
              return (
                <motion.li
                  key={point.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/40"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
