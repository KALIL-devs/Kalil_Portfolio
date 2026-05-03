"use client";

import { motion } from "framer-motion";
import { Code2, Database, LayoutTemplate, Settings } from "lucide-react";

type SkillCategory = {
  title: string;
  icon: React.ElementType;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: LayoutTemplate,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: ["Python", "Django", "Supabase", "REST APIs"],
  },
  {
    title: "Tools & Deployment",
    icon: Settings,
    skills: ["Git", "GitHub", "Vercel", "Netlify"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-950"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 max-w-2xl mx-auto text-lg"
          >
            A comprehensive overview of the technologies and tools I use to build robust web applications.
          </motion.p>
        </div>

        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-zinc-50/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-200 hover:border-zinc-300 transition-colors shadow-sm"
            >
              <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center mb-6 text-zinc-900 shadow-sm border border-zinc-100">
                <category.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-6 text-zinc-950">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-zinc-700 border border-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
