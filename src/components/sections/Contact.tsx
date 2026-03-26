"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
          relative rounded-[2.5rem] p-8 md:p-12
          bg-white/60 backdrop-blur-2xl
          border border-white/40
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          overflow-hidden
          "
        >

          {/* Background subtle glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-[-100px] left-[10%] w-[300px] h-[300px] bg-black/5 blur-3xl rounded-full" />
            <div className="absolute bottom-[-100px] right-[10%] w-[300px] h-[300px] bg-black/5 blur-3xl rounded-full" />
          </div>

          {/* Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT — FORM */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                  Let’s work together
                </h2>
                <p className="text-zinc-600">
                  Have a project in mind? Fill out the form and I’ll get back to you.
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Name"
                    className="w-full px-5 py-4 rounded-xl bg-white/70 border border-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-400 transition"
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email"
                    className="w-full px-5 py-4 rounded-xl bg-white/70 border border-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-400 transition"
                  />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone Number"
                    className="w-full sm:col-span-2 px-5 py-4 rounded-xl bg-white/70 border border-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-400 transition"
                  />
                </div>

                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 rounded-xl bg-white/70 border border-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-400 transition resize-none"
                />

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full flex items-center justify-center py-4 rounded-xl bg-black text-white font-medium hover:-translate-y-0.5 transition disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {status === "idle" && (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                  {status === "loading" && "Sending..."}
                  {status === "success" && (
                    <>
                      Sent Successfully
                      <CheckCircle2 className="ml-2 h-4 w-4 text-green-400" />
                    </>
                  )}
                  {status === "error" && (
                    <>
                      Error Sending
                      <AlertCircle className="ml-2 h-4 w-4 text-red-400" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* RIGHT — IMAGE PLACEHOLDER */}
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden flex items-center justify-center">
              
              <motion.div 
                animate={{ y: [-15, 10, -15] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src="/guy_waving.png"
                  alt="A friendly developer waving hi"
                  fill
                  className="object-contain p-4"
                />
              </motion.div>

              {/* Optional overlay for glass feel */}
              <div className="absolute inset-0 rounded-3xl border border-white/40 pointer-events-none" />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}