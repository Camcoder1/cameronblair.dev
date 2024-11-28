"use client";

import {
  Cloud,
  Code2,
  Server,
  Brain,
  GitBranch,
  Shield,
} from "lucide-react";
import { skillCategories } from "@/data/content";
import AnimatedSection from "./AnimatedSection";

const categoryIcons: Record<string, React.ReactNode> = {
  Cloud: <Cloud className="w-5 h-5" />,
  "IaC & Automation": <Code2 className="w-5 h-5" />,
  Platforms: <Server className="w-5 h-5" />,
  "AI/ML & Data": <Brain className="w-5 h-5" />,
  DevOps: <GitBranch className="w-5 h-5" />,
  "Networking & Security": <Shield className="w-5 h-5" />,
};

export default function Skills() {
  const handleSkillClick = (skill: string) => {
    // Dispatch custom event so Projects can highlight matching cards
    window.dispatchEvent(
      new CustomEvent("skill-filter", { detail: skill })
    );
    // Scroll to projects
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-mono text-cyan text-sm tracking-wider mb-2">
            {"// "}Skills
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Tech Stack
          </h3>
          <p className="text-muted text-sm mb-16">Click a skill to see related projects</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <AnimatedSection key={cat.category} delay={i * 0.1}>
              <div className="bg-card border border-card-border rounded-xl p-6 card-hover h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-cyan">{categoryIcons[cat.category]}</div>
                  <h4 className="font-mono font-bold text-sm">{cat.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => handleSkillClick(skill)}
                      className="bg-cyan/5 border border-cyan/20 text-cyan text-xs font-mono px-3 py-1.5 rounded-md hover:bg-cyan/15 hover:border-cyan/40 transition-all cursor-pointer"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
