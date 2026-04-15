"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, FileText, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative w-full max-w-4xl mx-auto px-6 py-40 text-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent1/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <span className="text-[10px] tracking-ultra font-medium text-accent1/60 uppercase block mb-6">GET IN TOUCH</span>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          <span className="text-white">LET&apos;S BUILD</span><br />
          <span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">SOMETHING REMARKABLE.</span>
        </h2>

        <p className="text-sm text-muted max-w-md mx-auto mb-12 leading-relaxed">
          Looking for a developer who ships fast, optimizes obsessively, and loves beautiful interfaces.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:savaliyashivam2002@gmail.com"
            className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-full text-xs font-semibold tracking-widest uppercase bg-accent1/10 text-accent1 border border-accent1/20 hover:bg-accent1/20 hover:border-accent1/40 hover:shadow-[0_0_30px_-5px_rgba(102,178,255,0.3)] transition-all duration-500"
          >
            <Mail size={14} /> EMAIL ME <ArrowUpRight size={12} />
          </a>
          <a
            href="https://linkedin.com/in/shivam-savaliya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-full text-xs font-semibold tracking-widest uppercase text-muted border border-white/[0.08] hover:border-white/20 hover:text-white transition-all duration-500"
          >
            <Linkedin size={14} /> LINKEDIN
          </a>
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-full text-xs font-semibold tracking-widest uppercase text-muted border border-white/[0.08] hover:border-white/20 hover:text-white transition-all duration-500"
          >
            <FileText size={14} /> RESUME
          </a>
        </div>
      </motion.div>
    </section>
  );
}
