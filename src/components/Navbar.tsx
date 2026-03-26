"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
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
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full border border-zinc-200 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)]",
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-4 shadow-lg"
          : "bg-white/80 backdrop-blur-md py-5"
      )}
    >
      <div className="px-8 md:px-10">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick("#home")}
            className="text-2xl font-bold tracking-tight text-black"
          >
            Kalil.<span className="bg-black text-white px-1">dev</span>
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
                    "relative text-base font-semibold transition-colors",
                    isActive ? "text-black" : "text-zinc-500 hover:text-black"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="active-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black rounded-full"
                    />
                  )}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick("#contact")}
              className={cn(
                "text-base font-semibold px-6 py-2.5 rounded-full transition-colors",
                activeSection === "contact"
                  ? "bg-zinc-800 text-white"
                  : "bg-black text-white hover:bg-zinc-800"
              )}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="absolute top-full left-0 right-0 mt-4 md:hidden bg-white/95 backdrop-blur-md border border-zinc-200 rounded-3xl overflow-hidden shadow-xl"
          >
            <nav className="flex flex-col px-8 py-8 gap-2">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "text-left text-xl font-semibold px-4 py-3 rounded-xl transition-colors",
                      isActive
                        ? "text-black bg-zinc-100"
                        : "text-zinc-500 hover:text-black hover:bg-zinc-50"
                    )}
                  >
                    {link.name}
                  </button>
                );
              })}
              <button
                onClick={() => handleNavClick("#contact")}
                className="bg-black text-white text-xl font-semibold px-6 py-4 rounded-2xl text-center hover:bg-zinc-800 transition-colors mt-3"
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