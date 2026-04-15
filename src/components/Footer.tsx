"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { icon: <Github size={18} />, label: "GITHUB", href: "https://github.com/shivamsavaliya" },
  { icon: <Linkedin size={18} />, label: "LINKEDIN", href: "https://linkedin.com/in/shivam-savaliya" },
  { icon: <Mail size={18} />, label: "EMAIL", href: "mailto:savaliyashivam2002@gmail.com" },                    
];

export function Footer() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0, ease: "linear" }}
        className="flex items-end gap-2 px-4 py-3 rounded-full backdrop-blur-xl bg-black/60 border border-white/[0.06] shadow-[0_8px_40px_-12px_rgba(102,178,255,0.08)]"
      >
        {links.map((link, idx) => (
          <DockIcon key={idx} icon={link.icon} label={link.label} href={link.href} />
        ))}
      </motion.div>
    </div>
  );
}

function DockIcon({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-12 h-12 flex items-center justify-center rounded-xl text-muted/60 border border-white/[0.06] bg-white/[0.02] hover:text-accent1 hover:border-accent1/20 hover:bg-accent1/[0.03] hover:-translate-y-0.5 transition-all duration-200"
    >
      {icon}
      <span
        className="absolute -top-10 px-2.5 py-1 rounded-md text-[9px] font-medium tracking-wider uppercase whitespace-nowrap bg-black/80 border border-white/[0.08] text-muted pointer-events-none backdrop-blur-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
      >
        {label}
      </span>
    </a>
  );
}
