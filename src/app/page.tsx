import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CodeSandbox } from "@/components/CodeSandbox";
import { BentoBox } from "@/components/BentoBox";
import { Timeline } from "@/components/Timeline";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden">
      {/* Header with Navigation */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Selected Work - Bento Grid */}
      <BentoBox />

      {/* Interactive Playground */}
      <CodeSandbox />

      {/* Experience Timeline */}
      <Timeline />

      {/* Tech Stack */}
      <TechStack />

      {/* Contact */}
      <Contact />

      {/* macOS Dock Footer */}
      <Footer />
      
      {/* Spacer for dock */}
      <div className="h-28 w-full"></div>
    </main>
  );
}
