"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Workflow as WorkflowIcon } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { WORKFLOW_STEPS } from "@/lib/site-data";

export function Workflow() {
  return (
    <section
      id="workflow"
      className="relative scroll-mt-24 overflow-hidden bg-zinc-950 py-20 text-white sm:py-24"
      aria-label="Our complete research workflow"
    >
      <div className="absolute inset-0 grid-texture" aria-hidden="true" />
      <div
        className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Left: heading + image */}
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="How We Work"
              title="Complete Research Project Package"
              description="Hand us your research problem — we handle the entire pipeline from raw satellite data to the final report or paper, with regular checkpoints so you are never in the dark."
              dark
              align="left"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 shadow-2xl"
            >
              <Image
                src="/images/workspace.png"
                alt="Geospatial analysis workstation with satellite maps and machine-learning dashboards"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-sm font-medium text-white/90">
                <WorkflowIcon className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                Data → Analysis → Validation → Publication-ready results
              </p>
            </motion.div>
          </div>

          {/* Right: step flow */}
          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            className="lg:col-span-3"
          >
            {WORKFLOW_STEPS.map((step, i) => (
              <motion.li
                key={step}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                }}
                className="relative flex items-center gap-4"
                aria-label={`Step ${i + 1}: ${step}`}
              >
                {/* Connector */}
                {i < WORKFLOW_STEPS.length - 1 && (
                  <>
                    <span
                      className="absolute left-[22px] top-11 h-[calc(100%-24px)] w-px bg-gradient-to-b from-emerald-400/50 to-emerald-400/10"
                      aria-hidden="true"
                    />
                    <ArrowDown
                      className="absolute left-[17px] top-11 hidden"
                      aria-hidden="true"
                    />
                  </>
                )}

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-sm font-bold text-emerald-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-100 backdrop-blur-sm transition-colors hover:border-emerald-400/40 sm:text-base">
                  {step}
                </span>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
