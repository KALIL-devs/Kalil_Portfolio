"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Soft radial glow center */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[800px] h-[800px] rounded-full opacity-40 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 pt-28 pb-20">
        <div className="flex flex-col items-center text-center space-y-8">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-zinc-700 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Actively seeking full-time opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-zinc-950 max-w-4xl"
          >
            Full Stack Developer. Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              scalable & elegant
            </span>{" "}
            web applications.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed"
          >
            I specialize in React, Next.js, and Python. Passionate about creating seamless user experiences and robust backend architectures for modern products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
          >
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 text-white px-8 py-4 text-sm font-semibold transition-all hover:bg-zinc-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white/50 backdrop-blur-sm text-zinc-900 px-8 py-4 text-sm font-semibold transition-all hover:border-zinc-400 hover:bg-zinc-50 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
            >
              Contact Me
              <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center gap-6 pt-8 text-zinc-500"
          >
            <Link href="https://github.com/KALIL-devs" target="_blank" className="hover:text-zinc-900 transition-colors p-2 hover:bg-zinc-100 rounded-full">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/kalil-rahman/" target="_blank" className="hover:text-zinc-900 transition-colors p-2 hover:bg-zinc-100 rounded-full">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" target="_blank" className="hover:text-zinc-900 transition-colors p-2 hover:bg-zinc-100 rounded-full flex items-center gap-2">
              <Download className="w-5 h-5" />
              <span className="text-sm font-medium">Resume</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}