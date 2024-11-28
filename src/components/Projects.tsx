"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/content";
import AnimatedSection from "./AnimatedSection";

export default function Projects() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const handleFilter = useCallback((e: Event) => {
    const skill = (e as CustomEvent).detail as string;
    setActiveSkill(skill);
  }, []);

  useEffect(() => {
    window.addEventListener("skill-filter", handleFilter);
    return () => window.removeEventListener("skill-filter", handleFilter);
  }, [handleFilter]);

  const matchesSkill = (tags: string[]) => {
    if (!activeSkill) return true;
    // Fuzzy match — check if any tag contains the skill or vice versa (case-insensitive)
    const s = activeSkill.toLowerCase();
    return tags.some(
      (t) => t.toLowerCase().includes(s) || s.includes(t.toLowerCase())
    );
  };

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-mono text-cyan text-sm tracking-wider mb-2">
            {"// "}Projects
          </h2>
          <div className="flex items-center gap-4 mb-16 flex-wrap">
            <h3 className="text-3xl sm:text-4xl font-bold">
              Latest Adventures
            </h3>
            <AnimatePresence>
              {activeSkill && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setActiveSkill(null)}
                  className="flex items-center gap-1.5 bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono px-3 py-1.5 rounded-full hover:bg-cyan/20 transition-all"
                >
                  {activeSkill}
                  <X className="w-3 h-3" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const matches = matchesSkill(project.tags);
            return (
              <AnimatedSection key={project.title} delay={i * 0.1}>
                <div
                  className={`group bg-card border rounded-xl p-6 card-hover h-full flex flex-col transition-all duration-300 ${
                    activeSkill
                      ? matches
                        ? "border-cyan/40 shadow-[0_0_20px_rgba(0,229,255,0.15)]"
                        : "border-card-border opacity-30"
                      : "border-card-border"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold leading-tight pr-2">
                      {project.title}
                    </h4>
                    <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-cyan shrink-0 transition-colors" />
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => {
                      const tagMatch =
                        activeSkill &&
                        (tag.toLowerCase().includes(activeSkill.toLowerCase()) ||
                          activeSkill.toLowerCase().includes(tag.toLowerCase()));
                      return (
                        <span
                          key={tag}
                          className={`text-xs font-mono px-2 py-1 rounded transition-all ${
                            tagMatch
                              ? "text-cyan bg-cyan/15 border border-cyan/40"
                              : "text-cyan/70 bg-cyan/5 border border-cyan/10"
                          }`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
