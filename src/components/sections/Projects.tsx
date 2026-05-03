"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Project Management Platform",
    description:
      "A role-based project management system built with Next.js, featuring three distinct interfaces for Admin, Employees, and Clients. The Admin can assign tasks to employees, tag clients, and manage the full team — while employees track their assigned work and clients get real-time visibility into progress relevant to them.",
    image: "/projects/project1.png", // Fallback to existing images
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    liveUrl: "https://project-management-platform-two.vercel.app/",
    githubUrl: "https://github.com/KALIL-devs/project_management_platform",
  },
  {
    title: "DIY SEO Assistant",
    description:
      "Do it your self SEO Assistant. this helps small business owner and non technical persons to do their own small seo task instead of hiring seo analyst. This tool helps to analyse the website and suggest the changes to be done by the user easily and fix content gaps, optimize metadata, and improve crawlability instantly.",
    image: "/projects/project2.png", 
    tags: ["React", "FastAPI", "SQLite"],
    liveUrl: "https://trainanywheregym.vercel.app/",
    githubUrl: "https://github.com/KALIL-devs",
  },
  {
    title: "Gym Membership Tracker",
    description:
      "Track gym memberships details for gym owners with help multiple dynamic dashboards. and help to notify the members to renewal their membership though email or whatsapp. and admin can manage members, plans, payments, etc.",
    image: "/projects/project3.png", // Reusing image 1 as fallback
    tags:  ["React", "Express", "sqlite"],
    liveUrl: "https://kalil-dev.vercel.app/",
    githubUrl: "https://github.com/KALIL-devs",
  },
  {
    title: "Mahizh RO Services",
    description:
      "A high-performance business website for commercial RO plants. SEO optimized, responsive, and focused on lead generation.",
    image: "/projects/project4.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://mahizh-ro-services.vercel.app/",
    githubUrl: "https://github.com/KALIL-devs/Mahizh_Ro_Services",
  },
  {
    title: "Train Anywhere Gym",
    description:
      "A modern fitness Centre Website, This helps them to showcase their facility and services to their customers.",
    image: "/projects/project5.png",
    tags: ["React", "TypeScript", "Supabase", "Tailwind"],
    liveUrl: "https://trainanywheregym.vercel.app/",
    githubUrl: "https://github.com/KALIL-devs/trainanywheregym",
  },
  {
    title: "Kalil Dev Portfolio",
    description:
      "A modern developer portfolio showcasing projects, skills, and professional experience with sleek animations and elegant design.",
    image: "/projects/project6.png", // Reusing image 1 as fallback
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://kalil-dev.vercel.app/",
    githubUrl: "https://github.com/KALIL-devs/Kalil_Portfolio",
  },
];

export default function Projects() {
  const handleCardClick = (project: (typeof projects)[0]) => {
    const url = project.liveUrl !== "#" ? project.liveUrl : project.githubUrl;
    window.open(url, "_blank");
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-zinc-50">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-100 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-950"
            >
              Featured Work
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-600 max-w-xl text-lg"
            >
              A selection of my recent full-stack projects, demonstrating my ability to build scalable, responsive, and beautifully designed web applications.
            </motion.p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              bg-white/80 backdrop-blur-xl border border-zinc-200 
              shadow-md hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] hover:-translate-y-1 
              transition-all duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 border-b border-zinc-200 group">
                
                {/* Image */}
                <Image
                  src={project.image}
                  alt={`${project.title} landing`}
                  fill
                  className="object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center 
                  bg-black/5 group-hover:bg-transparent
                  transition-all duration-300 z-10"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-5">
                <h3 className="text-lg font-bold mb-2 text-zinc-950">
                  {project.title}
                </h3>

                <p className="text-zinc-600 text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-semibold bg-zinc-100 px-2.5 py-1 rounded-full text-zinc-700 border border-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-100">
                  {project.liveUrl !== "#" && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center text-xs font-semibold text-zinc-900 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={14} className="mr-1.5" />
                      Live Demo
                    </Link>
                  )}

                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
                  >
                    <Github size={14} className="mr-1.5" />
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