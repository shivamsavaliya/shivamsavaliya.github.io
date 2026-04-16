"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "WORK", href: "#work" },
  { label: "PLAY", href: "#playground" },
  { label: "EXP", href: "#experience" },
  { label: "STACK", href: "#tech" },
  { label: "CONTACT", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-4 z-[60] flex justify-center px-4 pointer-events-none">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full max-w-4xl pointer-events-auto transition-all duration-700 ${scrolled
            ? "py-2.5 px-5 rounded-full backdrop-blur-xl bg-black/70 border border-white/[0.08] shadow-[0_8px_40px_-12px_rgba(102,178,255,0.1)]"
            : "py-3 px-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/[0.04]"
            }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 items-center w-full">

          <div className="flex justify-start z-10">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent1/20 to-accent1/5 border border-accent1/20 flex items-center justify-center text-accent1 font-bold text-sm group-hover:border-accent1/40 group-hover:shadow-[0_0_20px_-5px_rgba(102,178,255,0.4)] transition-all duration-500">
                S
              </div>
              <span className="text-xs font-medium tracking-ultra text-muted uppercase hidden sm:block">SHIVAM</span>
            </a>
          </div>

          {/* 2. CENTER COLUMN: Nav (Hidden on mobile. On desktop, it is perfectly centered inside the exact middle third of the screen) */}
          <div className="hidden md:flex justify-center items-center w-full relative z-20">
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-[11px] font-medium tracking-widest text-muted/60 hover:text-accent2 transition-all duration-300 group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-accent1 group-hover:w-6 transition-all duration-500" />
                </a>
              ))}
            </nav>
          </div>

          <div className="flex justify-end items-center gap-3 z-10">
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-muted hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          </div>
        </motion.header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-x-0 top-16 z-[55] flex justify-center px-4 pointer-events-none md:hidden">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full max-w-4xl rounded-2xl py-5 px-6 backdrop-blur-xl bg-black/90 border border-white/[0.06] shadow-2xl pointer-events-auto"
            >
              <nav className="flex flex-col gap-1">
                {[
                  { label: "WORK", href: "#work" },
                  { label: "PLAYGROUND", href: "#playground" },
                  { label: "EXPERIENCE", href: "#experience" },
                  { label: "STACK", href: "#tech" },
                  { label: "CONTACT", href: "#contact" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-3 text-[10px] font-medium tracking-[0.18em] text-[#8892B0] hover:text-[#66B2FF] rounded-lg hover:bg-white/[0.03] transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
