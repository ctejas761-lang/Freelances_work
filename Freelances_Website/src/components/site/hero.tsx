"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Satellite,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HERO_STATS } from "@/lib/site-data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-zinc-950 text-white"
      aria-label="Introduction"
    >
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-satellite.png"
          alt="Satellite view of agricultural fields with GIS data overlay"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />
        <div className="absolute inset-0 grid-texture" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <Badge
              variant="outline"
              className="mb-6 gap-2 border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-emerald-300 backdrop-blur-sm"
            >
              <Satellite className="h-3.5 w-3.5" aria-hidden="true" />
              Freelance GIS &amp; Remote Sensing Services
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Professional Geospatial &amp;{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Research Support
            </span>{" "}
            Services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg"
          >
            End-to-end <strong className="font-semibold text-white">GIS, Remote Sensing,
            Geoinformatics, Agricultural and Forestry</strong> services for
            students, researchers, universities, organizations, consultants and
            research projects — powered by Google Earth Engine, Python and
            modern GIS tooling.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg" className="h-12 px-7 text-base font-semibold shadow-lg shadow-emerald-900/40">
              <a href="#services">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-white/25 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
            >
              <a href="#contact">Get a Free Quote</a>
            </Button>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-300"
          >
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              On-time delivery — our duty
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              Remote / online work worldwide
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              Publication-quality outputs
            </li>
          </motion.ul>
        </div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 grid grid-cols-2 gap-4 sm:mt-16 lg:grid-cols-4"
        >
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-emerald-400/40"
            >
              <dt className="order-2 mt-1 text-xs font-medium uppercase tracking-wide text-zinc-400">
                {stat.label}
              </dt>
              <dd className="order-1 text-3xl font-bold text-emerald-400">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
