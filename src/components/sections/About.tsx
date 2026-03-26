"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "3+ Projects Delivered",
  "React & Next.js Expert",
  "Shopify & WordPress",
  "Supabase & Prisma",
  "Fullstack Development",
  "Clean & Scalable Code",
];

const stack = [
  { label: "React", color: "bg-zinc-100 text-zinc-800 border-zinc-200" },
  { label: "Next.js", color: "bg-zinc-100 text-zinc-800 border-zinc-200" },
  { label: "Shopify", color: "bg-zinc-100 text-zinc-800 border-zinc-200" },
  { label: "WordPress", color: "bg-zinc-100 text-zinc-800 border-zinc-200" },
  { label: "Supabase", color: "bg-zinc-100 text-zinc-800 border-zinc-200" },
  { label: "Prisma", color: "bg-zinc-100 text-zinc-800 border-zinc-200" },
];

const stats = [
  { value: "3+", label: "Projects Done" },
  { value: "1:1", label: "Direct Collab" },
  { value: "100%", label: "Commitment" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">

      {/* Subtle neutral blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-zinc-200/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-zinc-300/30 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-6"
        >
          <span className="text-xs font-semibold text-zinc-600 uppercase tracking-[0.2em] bg-zinc-100 px-4 py-1.5 rounded-full">
            About Me
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-zinc-900 text-center mb-14 max-w-2xl mx-auto leading-tight"
        >
          One developer.{" "}
          <span className="text-zinc-500">Full focus</span> on your project.
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 space-y-5"
          >
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
              Hey, I'm{" "}
              <span className="font-semibold text-zinc-900">Kalil</span> — I handle
              every project personally. No layers, no delays. Just focused execution
              and clean results.
            </p>

            <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
              From design to deployment, everything is built with clarity and speed.
              You work directly with me — no middlemen, no confusion.
            </p>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl p-1"
            >
              <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-zinc-200 shadow-sm">
                <div className="grid grid-cols-3 divide-x divide-zinc-200">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center py-5 px-3">
                      <p className="text-2xl md:text-3xl font-semibold text-zinc-900">
                        {stat.value}
                      </p>
                      <p className="text-xs text-zinc-500 mt-1 tracking-wide">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 space-y-5"
          >
            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:shadow-sm transition-all"
                >
                  <CheckCircle2 className="text-zinc-700 h-5 w-5" />
                  <span className="text-sm font-medium text-zinc-800">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-5 rounded-2xl border border-zinc-200 bg-white"
            >
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
                Tech I work with
              </p>

              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech.label}
                    className={`text-sm font-medium px-3 py-1 rounded-full border transition hover:-translate-y-0.5 hover:shadow-sm ${tech.color}`}
                  >
                    {tech.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}