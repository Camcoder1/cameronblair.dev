"use client";

import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/content";
import GridBackground from "./GridBackground";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <GridBackground />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0a0a0f_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Terminal-style prefix */}
          <p className="font-mono text-cyan text-sm mb-4 tracking-wider">
            <span className="text-muted">~/</span>cameron.blair
            <span className="cursor-blink" />
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">{siteConfig.name}</span>
          </h1>

          <p className="font-mono text-cyan-dim text-base sm:text-lg md:text-xl mb-4">
            {siteConfig.title}
          </p>

          <p className="text-muted text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10">
            {siteConfig.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="group flex items-center gap-2 bg-cyan/10 border border-cyan/30 text-cyan px-6 py-3 rounded-lg font-mono text-sm hover:bg-cyan/20 transition-all glow-cyan"
          >
            See My Work
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="flex items-center gap-2 border border-card-border text-muted px-6 py-3 rounded-lg font-mono text-sm hover:border-cyan/30 hover:text-cyan transition-all"
          >
            Get In Touch
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-5 h-5 text-muted animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
