"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [...navLinks.map((l) => l.href.replace("#", "")), "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full border transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-zinc-200 shadow-sm py-4"
          : "bg-white/50 backdrop-blur-sm border-zinc-200/50 py-5"
      )}
    >
      <div className="px-8 md:px-10">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick("#home")}
            className="text-2xl font-bold tracking-tight text-zinc-950"
          >
            Kalil.<span className="bg-zinc-950 text-white px-1 rounded-sm ml-0.5">dev</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative text-sm font-medium transition-colors",
                    isActive ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-900"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="active-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-zinc-950 rounded-full"
                    />
                  )}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick("#contact")}
              className={cn(
                "text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300",
                activeSection === "contact"
                  ? "bg-zinc-950 text-white"
                  : "bg-zinc-100 text-zinc-950 hover:bg-zinc-200 border border-zinc-200"
              )}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-zinc-950"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-4 md:hidden bg-white/95 backdrop-blur-xl border border-zinc-200 rounded-3xl overflow-hidden shadow-xl"
          >
            <nav className="flex flex-col px-6 py-6 gap-2">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "text-left text-lg font-medium px-4 py-3 rounded-xl transition-colors",
                      isActive
                        ? "text-zinc-950 bg-zinc-100"
                        : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50"
                    )}
                  >
                    {link.name}
                  </button>
                );
              })}
              <button
                onClick={() => handleNavClick("#contact")}
                className="bg-zinc-950 text-white text-lg font-semibold px-6 py-3.5 rounded-2xl text-center hover:bg-zinc-800 transition-colors mt-4"
              >
                Contact
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}