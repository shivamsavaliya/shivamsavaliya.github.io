"use client";

import React from "react";
import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, Github, X } from "lucide-react";

import charnet1 from "@/assets/Charnet/1.png";
import charnet2 from "@/assets/Charnet/2.png";
import charnet3 from "@/assets/Charnet/3.png";
import charnet4 from "@/assets/Charnet/4.png";
import charnet5 from "@/assets/Charnet/5.png";
import gemini1 from "@/assets/Gemini App/g1.png";
import gemini2 from "@/assets/Gemini App/g2.png";
import wattvitaAddSituation from "@/assets/Wattvita/Add Situation.png";
import wattvitaEnvironment from "@/assets/Wattvita/Environment (1).png";
import wattvitaHomepage from "@/assets/Wattvita/Homepage 2.png";
import wattvitaLogin from "@/assets/Wattvita/Login.png";
import wattvitaProfile1 from "@/assets/Wattvita/Profile (1).png";
import wattvitaProfile2 from "@/assets/Wattvita/Profile (2).png";
import wattvitaSmartCamera from "@/assets/Wattvita/SMART camera.png";
import wattvitaTapToRun from "@/assets/Wattvita/Tap to run.png";
import wattvitaWifiPair from "@/assets/Wattvita/Wifi pair.png";

type Project = {
  title: string;
  description: string;
  className: string;
  image: string;
  tech: string[];
  featured: boolean;
  isPrivateRepo: boolean;
  githubUrl?: string;
  screenshots: StaticImageData[];
};

const projects: Project[] = [
  {
    title: "ChatNet",
    description: "Real-time Flutter EV charging station locator with WebSockets, REST APIs, and BLoC state management.",
    className: "col-span-1 md:col-span-2 row-span-2 min-h-[420px]",
    image: charnet1.src,
    tech: ["FLUTTER", "DART", "WEBSOCKETS", "REST APIs", "BLoC"],
    featured: true,
    isPrivateRepo: true,
    screenshots: [charnet1, charnet2, charnet3, charnet4, charnet5],
  },
  {
    title: "WattVita",
    description: "Smart home iOS/Android app controlling IoT devices via Bluetooth & Wi-Fi.",
    className: "col-span-1 row-span-1 min-h-[250px]",
    image: wattvitaHomepage.src,
    tech: ["FLUTTER", "IoT", "BLE"],
    featured: false,
    isPrivateRepo: true,
    screenshots: [
      wattvitaAddSituation,
      wattvitaEnvironment,
      wattvitaHomepage,
      wattvitaLogin,
      wattvitaProfile1,
      wattvitaProfile2,
      wattvitaSmartCamera,
      wattvitaTapToRun,
      wattvitaWifiPair,
    ],
  },
  {
    title: "Gemini App",
    description: "AI-powered assistant app with conversational UI, prompt history, and real-time response streaming.",
    className: "col-span-1 row-span-1 min-h-[250px]",
    image: gemini1.src,
    tech: ["FLUTTER", "GEMINI API", "AI"],
    featured: false,
    isPrivateRepo: false,
    githubUrl: "https://github.com/shivamsavaliya/gemini_app",
    screenshots: [gemini1, gemini2],
  },
];

export function BentoBox() {
  const [activeProjectIndex, setActiveProjectIndex] = React.useState<number | null>(null);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = React.useState(0);

  const activeProject = activeProjectIndex !== null ? projects[activeProjectIndex] : null;

  const closeGallery = () => {
    setActiveProjectIndex(null);
    setActiveScreenshotIndex(0);
  };

  const openGallery = (projectIndex: number) => {
    setActiveProjectIndex(projectIndex);
    setActiveScreenshotIndex(0);
  };

  const showNextScreenshot = () => {
    if (!activeProject || activeProject.screenshots.length === 0) return;

    setActiveScreenshotIndex((current) => (current + 1) % activeProject.screenshots.length);
  };

  const showPreviousScreenshot = () => {
    if (!activeProject || activeProject.screenshots.length === 0) return;

    setActiveScreenshotIndex((current) => (current - 1 + activeProject.screenshots.length) % activeProject.screenshots.length);
  };

  React.useEffect(() => {
    if (!activeProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowRight") showNextScreenshot();
      if (event.key === "ArrowLeft") showPreviousScreenshot();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeProject]);

  return (
    <section id="work" className="w-full max-w-6xl mx-auto px-6 py-32 relative">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <span className="text-[10px] tracking-ultra font-medium text-accent1/60 uppercase block mb-4">SELECTED PROJECTS</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">WORK</h2>
        <div className="w-12 h-px bg-accent1/30 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(250px,auto)]">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            onClick={() => openGallery(idx)}
            className={`group relative rounded-2xl overflow-hidden flex flex-col justify-end ${project.className} border border-white/[0.06] bg-card hover:border-accent1/20 transition-all duration-700 cursor-pointer`}
          >
            {/* Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
            </div>

            {/* Edge Light Effect on Hover */}
            <div className="absolute inset-0 z-20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ boxShadow: "inset 0 1px 0 0 rgba(102,178,255,0.15), 0 0 40px -10px rgba(102,178,255,0.1)" }}
            />

            {/* Content */}
            <div className="relative z-20 p-6 md:p-8 mt-auto">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[9px] px-2.5 py-1 rounded-full font-mono tracking-wider text-accent1/70 border border-accent1/15 bg-accent1/[0.05]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">{project.title}</h3>
              <p className="text-xs md:text-sm text-muted max-w-md leading-relaxed mb-5">{project.description}</p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="w-9 h-9 rounded-full flex items-center justify-center border border-white/[0.08] text-muted hover:text-accent1 hover:border-accent1/30 transition-all duration-300">
                  <ExternalLink size={14} />
                </button>
                {!project.isPrivateRepo && project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    onClick={(event) => event.stopPropagation()}
                    className="w-9 h-9 rounded-full flex items-center justify-center border border-white/[0.08] text-muted hover:text-accent1 hover:border-accent1/30 transition-all duration-300"
                  >
                    <Github size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm p-4 md:p-10"
          onClick={closeGallery}
        >
          <div
            className="relative w-full h-full max-w-6xl mx-auto border border-white/10 rounded-2xl bg-card/90 flex flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div>
                <h3 className="text-lg md:text-xl font-semibold tracking-tight">{activeProject.title}</h3>
                <p className="text-xs text-muted mt-1">
                  Screenshot {activeScreenshotIndex + 1} of {activeProject.screenshots.length}
                </p>
              </div>

              <button
                aria-label="Close gallery"
                onClick={closeGallery}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/[0.12] text-muted hover:text-accent1 hover:border-accent1/40 transition-all duration-300"
              >
                <X size={16} />
              </button>
            </div>

            <div className="relative flex-1 min-h-0 p-4 md:p-6">
              <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 bg-black/40">
                <Image
                  src={activeProject.screenshots[activeScreenshotIndex]}
                  alt={`${activeProject.title} screenshot ${activeScreenshotIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-contain"
                  priority
                />
              </div>

              {activeProject.screenshots.length > 1 && (
                <>
                  <button
                    aria-label="Previous screenshot"
                    onClick={showPreviousScreenshot}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-black/45 text-white/90 hover:border-accent1/50 hover:text-accent1 transition-all duration-300"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    aria-label="Next screenshot"
                    onClick={showNextScreenshot}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-black/45 text-white/90 hover:border-accent1/50 hover:text-accent1 transition-all duration-300"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
