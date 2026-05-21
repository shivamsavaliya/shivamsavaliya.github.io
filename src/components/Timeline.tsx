"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

type Experience = {
  date: string;
  role: string;
  company: string;
  description: string;
  type: "work" | "edu";
};

const experiences: Experience[] = [
  {
    date: "DEC 2025 — APR 2026",
    role: "Software Developer Intern",
    company: "Superstars",
    description: "Building scalable app features & optimizing CI-friendly workflows for production mobile apps.",
    type: "work",
  },
  {
    date: "SEP 2024 — JUN 2026",
    role: "MS Computer Science",
    company: "DePaul University, Chicago",
    description: "Advanced algorithms, software architecture, distributed systems, and machine learning.",
    type: "edu",
  },
  {
    date: "JAN 2022 — FEB 2024",
    role: "Mobile App Developer",
    company: "GrabTheSite",
    description: "Maintained production Flutter apps, implemented BLoC state management, integrated REST APIs, Firebase & SQL databases.",
    type: "work",
  },
  {
    date: "AUG 2020 — MAY 2023",
    role: "BS Computer Engineering",
    company: "Silver Oak University, Ahmedabad",
    description: "Graduated with honors. Strong foundations in data structures, algorithms, and systems programming.",
    type: "edu",
  },
];

export function Timeline() {
  const professionalExperience = experiences.filter((exp) => exp.type === "work");
  const collegeEducation = experiences.filter((exp) => exp.type === "edu");

  const renderTimelineSection = (
    sectionTitle: string,
    entries: Experience[],
    sectionType: "work" | "edu",
  ) => (
    <div>
      <h3 className="text-xs font-mono tracking-[0.24em] text-muted/60 uppercase mb-6">{sectionTitle}</h3>

      <div className="relative">
        <div className="absolute left-[18px] top-0 bottom-0 w-px bg-white/[0.06]" />

        <div className="space-y-5">
          {entries.map((exp, idx) => (
            <motion.div
              key={`${sectionType}-${idx}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative flex items-start gap-6"
            >
              <div className="relative z-10 shrink-0 w-9 h-9 rounded-full flex items-center justify-center border border-white/[0.08] bg-black">
                {exp.type === "work"
                  ? <Briefcase size={14} className="text-accent1/70" />
                  : <GraduationCap size={14} className="text-accent2/70" />
                }
              </div>

              <div className="flex-1 pb-5 border-b border-white/[0.05] last:border-0 group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-sm font-bold tracking-tight text-white">{exp.role}</h3>
                    <p className="text-xs text-accent1/80 font-mono mt-0.5">{exp.company}</p>
                  </div>
                  <span className="text-[10px] tracking-wider font-mono text-muted/40 shrink-0 sm:text-right">
                    {exp.date}
                  </span>
                </div>
                <p className="text-xs text-muted/60 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="w-full max-w-3xl mx-auto px-6 py-24">
      <div className="mb-14 text-center">
        <span className="text-[10px] tracking-ultra font-medium text-accent1/60 uppercase block mb-4">JOURNEY</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">EXPERIENCE</h2>
        <div className="w-12 h-px bg-accent1/30 mx-auto" />
      </div>

      <div className="space-y-12">
        {renderTimelineSection("Professional Experience", professionalExperience, "work")}
        {renderTimelineSection("College Education", collegeEducation, "edu")}
      </div>
    </section>
  );
}
