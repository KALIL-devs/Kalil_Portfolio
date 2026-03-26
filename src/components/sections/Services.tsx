"use client";

import { motion } from "framer-motion";
import { Globe, BarChart, Rocket } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description:
      "Custom, responsive, and high-performance websites built with React and Next.js. Engineered for speed and scalability.",
    icon: Globe,
  },
  {
    title: "Fullstack Web Applications",
    description:
      "End-to-end development of custom web apps, from robust backend architectures to intuitive, dynamic frontend user interfaces.",
    icon: Rocket,
  },
  {
    title: "Web Optimization & SEO",
    description:
      "Improving Core Web Vitals, reducing load times, and ensuring your web application provides a smooth user experience.",
    icon: BarChart,
  },
];

export default function Services() {
  return (
<section className="from-zinc-100 via-white to-zinc-200 py-20">
  <div
    id="services"
    className="
    relative max-w-6xl mx-auto px-6 py-24
    rounded-[2.5rem]
    bg-white/40
    backdrop-blur-2xl
    border border-white/30
    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
    overflow-hidden
    "
  >
{/* Background glow inside glass */}
<div className="absolute inset-0 -z-10">
  <div className="absolute top-[-120px] left-[20%] w-[400px] h-[400px] bg-black/5 blur-3xl rounded-full" />
  <div className="absolute bottom-[-120px] right-[20%] w-[400px] h-[400px] bg-black/5 blur-3xl rounded-full" />
</div>

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-13">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            My Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600  max-w-2xl mx-auto"
          >
            I offer specialized services to help businesses establish a strong
            online presence and convert visitors into customers.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl p-8 backdrop-blur-xl 
              bg-white/60 
              border border-white/20 
              shadow-sm hover:shadow-lg 
              transition-all duration-300"
            >
              {/* Icon */}
              <div className="h-14 w-14 rounded-2xl bg-white/70  backdrop-blur flex items-center justify-center mb-6 border border-white/30  group-hover:bg-black transition-colors duration-300">
                <service.icon
                  size={26}
                  className="text-zinc-700  group-hover:text-white transition-colors duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-zinc-600  leading-relaxed">
                {service.description}
              </p>

              {/* Subtle hover border glow */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-black transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
      </div>     
    </section>
  );
}