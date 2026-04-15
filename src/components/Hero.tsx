"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] flex flex-col items-center justify-center px-6 overflow-hidden pt-24 pb-16">
      {/* Subtle background — no circles */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 grid-bg" />

      {/* Single soft glow — behind text, not geometric */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-accent1/[0.05] rounded-full blur-[180px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-[10px] tracking-ultra font-medium text-muted/50 uppercase">
            SOFTWARE ENGINEER  ●  MOBILE AND WEB
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[1.02] tracking-tight mb-6"
        >
          <span className="block text-white">I BUILD APPS</span>
          <span className="block bg-gradient-to-r from-accent1 via-accent2 to-white bg-clip-text text-transparent">
            THAT PERFORM.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-sm md:text-base text-muted max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Engineering high-performance mobile and web apps with{" "}
          <span className="text-accent1">BLoC architecture</span>,{" "}
          <span className="text-accent1">real-time systems</span>, and{" "}
          <span className="text-accent2">measurably faster performance</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-full text-xs font-semibold tracking-widest uppercase bg-accent1/10 text-accent1 border border-accent1/20 hover:bg-accent1/20 hover:border-accent1/40 hover:shadow-[0_0_30px_-5px_rgba(102,178,255,0.3)] transition-all duration-500"
          >
            VIEW WORK <ArrowDown size={14} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-full text-xs font-semibold tracking-widest uppercase text-muted border border-white/[0.08] hover:border-white/20 hover:text-white transition-all duration-500"
          >
            GET IN TOUCH
          </a>
        </motion.div>

        {/* Stats row */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-14 pt-8 border-t border-white/[0.05] flex items-center justify-center gap-10 sm:gap-16"
        >
          {[
            { value: "1.5+", label: "YEARS XP" },
            { value: "10+", label: "APPS SHIPPED" },
            { value: "30%", label: "PERF GAINS" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-[9px] tracking-widest text-muted/50 uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}
      </div>

      {/* Scroll hint */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-px h-6 bg-gradient-to-b from-accent1/30 to-transparent" />
        </motion.div>
      </motion.div> */}
    </section>
  );
}
