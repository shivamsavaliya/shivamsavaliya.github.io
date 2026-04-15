"use client";

import React from "react";
import { motion } from "framer-motion";
import { Blocks, Cable, Database, Link2 } from "lucide-react";

type TechItem = {
  name: string;
  logo?: string;
  icon?: React.ComponentType<{ className?: string }>;
};

const techs: TechItem[] = [
  { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter" },
  { name: "Dart", logo: "https://cdn.simpleicons.org/dart" },
  { name: "React", logo: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase" },
  { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase" },
  { name: "SQL", icon: Database },
  { name: "Git", logo: "https://cdn.simpleicons.org/git" },
  { name: "BLoC", icon: Blocks },
  { name: "REST APIs", icon: Link2 },
  { name: "WebSockets", icon: Cable },
  { name: "Kotlin", logo: "https://cdn.simpleicons.org/kotlin" },
  { name: "JetCompose", logo: "https://cdn.simpleicons.org/jetpackcompose" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript" },
];

export function TechStack() {
  return (
    <section id="tech" className="w-full max-w-6xl mx-auto px-6 py-32">
      <div className="text-center mb-16">
        <span className="text-[10px] tracking-ultra font-medium text-accent1/60 uppercase block mb-4">TECHNOLOGIES</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">STACK</h2>
        <div className="w-12 h-px bg-accent1/30 mx-auto" />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {techs.map((tech, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.04 }}
            className="group relative p-5 text-center rounded-2xl border border-white/[0.06] bg-card/50 cursor-default
              hover:border-accent1/20 hover:bg-accent1/[0.03] hover:shadow-[0_0_40px_-10px_rgba(102,178,255,0.1)]
              transition-all duration-500"
          >
            <div className="h-8 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {tech.logo ? (
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="w-6 h-6 object-contain opacity-90"
                  loading="lazy"
                />
              ) : tech.icon ? (
                <tech.icon className="w-5 h-5 text-accent1/80" />
              ) : null}
            </div>
            <div className="text-[10px] font-semibold tracking-wider uppercase text-muted group-hover:text-accent2 transition-colors duration-300">{tech.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
