"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const GithubIcon = ({
  size = 20,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-4 5 5 0 0 0-.2-4s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5 5 0 0 0-.2 4A5.5 5.5 0 0 0 3.3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const projects = [
  {
    title: "Fixy Ads",
    description:
      "A digital marketing platform focused on helping businesses scale through targeted advertising, SEO optimization, and performance-driven campaign strategies.",
    image: "/project-1.png",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "Neon"],
    liveUrl: "https://fixyads.com",
    githubUrl: "#",
  },
  {
    title: "Mahizh RO Innovation",
    description:
      "Business website for commercial RO plants. SEO optimized, highly responsive, and focused on generating qualified leads.",
    image: "/project-2.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://mahizh-ro.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Tahrshop eCommerce Store",
    description:
      "A fully responsive Shopify-based eCommerce platform with optimized product pages, and performance-focused design to boost conversions.",
    image: "/project-3.png",
    tags: ["Shopify", "Liquid", "JavaScript", "SEO"],
    liveUrl: "https://tahrshop.com/",
    githubUrl: "#",
  },
];

export default function Projects() {
  const handleCardClick = (project: (typeof projects)[0]) => {
    const url =
      project.liveUrl !== "#" ? project.liveUrl : project.githubUrl;
    window.open(url, "_blank");
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

      {/* Glass Container */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[90%] max-w-6xl h-full rounded-[40px] backdrop-blur-2xl bg-white/40 border border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.08)]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            >
              Featured Projects
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-700 max-w-xl"
            >
              Here are some of the recent real-world projects I've worked on,
              showcasing my frontend expertise.
            </motion.p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => handleCardClick(project)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCardClick(project);
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col rounded-3xl overflow-hidden 
              bg-white/70 backdrop-blur-xl border border-white/40 
              shadow-lg hover:shadow-2xl hover:-translate-y-2 
              transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 border-b border-white/30 group">
                
                {/* Top bar */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-white/40 flex items-center px-3 z-20 backdrop-blur-md">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                </div>

                {/* Image */}
                <Image
                  src={project.image}
                  alt={`${project.title} landing`}
                  fill
                  className="object-cover object-top pt-6 transition-transform duration-700 group-hover:scale-[1.05]"
                />

                {/* 🔥 Overlay */}
                <div className="absolute inset-0 flex items-center justify-center 
                  bg-black/0 group-hover:bg-black/20 
                  transition-all duration-300 z-10"
                >
                  <div className="opacity-0 group-hover:opacity-100 
                    transform scale-90 group-hover:scale-100 
                    transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-8">
                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-zinc-600 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-white/60 px-2 py-1 rounded-md text-zinc-700 border border-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/40">
                  {project.liveUrl !== "#" && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center text-sm font-semibold hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </Link>
                  )}

                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center text-sm font-semibold text-zinc-500 hover:text-black transition-colors"
                  >
                    <GithubIcon size={16} className="mr-1" />
                    Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}