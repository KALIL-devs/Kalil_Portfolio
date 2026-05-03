"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-white rounded-3xl transform -rotate-6 scale-105 opacity-50 blur-lg" />
              <div className="absolute inset-0 bg-white rounded-3xl transform rotate-3 transition-transform hover:rotate-0 duration-500 border border-zinc-200 shadow-xl overflow-hidden flex items-center justify-center">
                {/* Fallback avatar if no image */}
                
                <div className="w-full h-full bg-zinc-100 flex items-center justify-center text-zinc-400">
                  <Image src="/guy_waving.png" alt="Me" width={500} height={500} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-zinc-950">
              About Me
            </h2>
            
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
              <p>
                I am a passionate <strong className="text-zinc-950 font-medium">Full Stack Developer</strong> dedicated to building robust, scalable, and visually compelling web applications. My journey in software engineering is driven by a deep curiosity to solve complex problems and create seamless digital experiences.
              </p>
              <p>
                With a strong foundation in modern web technologies like React, Next.js, TypeScript, and Python, I excel at bridging the gap between elegant frontend interfaces and efficient backend architectures. I take pride in writing clean, maintainable code and continuously exploring new tools to stay ahead of the curve.
              </p>
              <p>
                Currently, I am actively seeking full-time opportunities where I can collaborate with talented teams, contribute to impactful products, and continue to grow as an engineer.
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-zinc-950">6+ months</span>
                <span className="text-sm text-zinc-500 font-medium">experience</span>
              </div>
              <div className="w-px bg-zinc-200" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-zinc-950">6+</span>
                <span className="text-sm text-zinc-500 font-medium">Projects Built</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}