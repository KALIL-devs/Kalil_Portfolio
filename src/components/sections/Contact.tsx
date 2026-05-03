"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Briefcase, Phone } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: -10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-zinc-700 shadow-sm mb-6"
           >
             <Briefcase className="h-4 w-4 text-purple-600" />
             Actively Interviewing
           </motion.div>
           
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-950"
          >
            Let's Build Something Great
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 max-w-2xl mx-auto text-lg"
          >
            I'm currently looking for new opportunities. Whether you have a question, a role to discuss, or just want to say hi, my inbox is always open.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-zinc-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-zinc-950">Connect</h3>
              
              <div className="space-y-6">
                <a href="mailto:kalilrahman055@gmail.com" className="flex items-start gap-4 text-zinc-600 hover:text-zinc-950 transition-colors group">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200 group-hover:bg-zinc-200 transition-colors">
                    <Mail size={22} />
                  </div>
                  <div className="pt-1.5">
                    <p className="font-semibold text-zinc-950 mb-1">Email</p>
                    <p className="text-sm">kalilrahman055@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-zinc-600">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200">
                    <MapPin size={22} />
                  </div>
                  <div className="pt-1.5">
                    <p className="font-semibold text-zinc-950 mb-1">Location</p>
                    <p className="text-sm">Available for Relocation / Remote</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-zinc-600">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200">
                    <Phone size={22} />
                  </div>
                  <div className="pt-1.5">
                    <p className="font-semibold text-zinc-950 mb-1">Call</p>
                    <p className="text-sm">+91 7598407107</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-200">
                  <p className="text-sm font-semibold text-zinc-950 mb-4">Social Profiles</p>
                  <div className="flex gap-4">
                    <Link href="https://github.com/KALIL-devs" target="_blank" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200 transition-all border border-zinc-200">
                      <Github size={20} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/kalil-rahman/" target="_blank" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200 transition-all border border-zinc-200">
                      <Linkedin size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-zinc-200 shadow-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-700 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-3.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-700 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-3.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-zinc-700 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-3.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent transition-all"
                  placeholder="Job Opportunity / Freelance Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-700 ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-3.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about the role or project..."
                />
              </div>

              <button
                type="button"
                className="w-full group flex items-center justify-center gap-2 bg-zinc-950 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-800 hover:shadow-lg transition-all active:scale-[0.98]"
              >
                Send Message
                <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}