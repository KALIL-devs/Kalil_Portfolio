"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Soft radial glow center */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 pt-28 pb-20">
        <div className="flex flex-col items-center text-center space-y-7">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-zinc-700 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Available for new projects
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-950 max-w-4xl"
          >
            We build modern websites that{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-zinc-900 text-white px-2 ">
                grow your business
              </span>

              {/* Underline */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                className="absolute left-1 right-1 -bottom-1 h-[4px] bg-zinc-900 rounded-full origin-left"
              />
            </span>{" "}
            online.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base sm:text-lg md:text-xl text-zinc-500 max-w-xl leading-relaxed"
          >
            Fast, scalable, and beautifully designed fullstack web applications —
            from seamless frontends to robust backend architectures.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto"
          >
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 text-white px-8 py-4 text-sm font-semibold transition-all hover:bg-zinc-800 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white text-zinc-900 px-8 py-4 text-sm font-semibold transition-all hover:border-zinc-400 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
            >
              Contact Me
              <Mail className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Social proof strip */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 pt-6 text-sm text-zinc-400"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["bg-blue-400", "bg-emerald-400", "bg-violet-400", "bg-amber-400"].map((color, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 rounded-full ${color} border-2 border-white`}
                  />
                ))}
              </div>
              <span>20+ happy clients</span>
            </div>
            <span className="hidden sm:block text-zinc-200">|</span>
            <span>⚡ Fast delivery</span>
            <span className="hidden sm:block text-zinc-200">|</span>
            <span>🔒 Clean, maintainable code</span>
          </motion.div> */}

        </div>
      </div>
    </section>
  );
}