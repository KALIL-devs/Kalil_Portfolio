"use client";

import { motion } from "framer-motion";

const tools = [
  "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", 
  "Framer Motion", "GitHub", "SEO", "ChatGPT", "Midjourney"
];

// Duplicate the array to create a seamless infinite scroll
const duplicatedTools = [...tools, ...tools, ...tools];

export default function Marquee() {
  return (
    <section className="py-10 border-y border-zinc-100 dark:border-zinc-900 overflow-hidden bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="relative flex w-full flex-col items-center justify-center">
        {/* Left and right gradient masks for smooth fade edges */}
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex flex-shrink-0 gap-10 whitespace-nowrap pl-10"
            animate={{
              x: ["0%", "-33.33%"],
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {duplicatedTools.map((tool, index) => (
              <div 
                key={index}
                className="flex items-center justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <span className="text-xl font-bold font-sans tracking-tight text-zinc-800 dark:text-zinc-200">
                  {tool}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
