"use client";

import { Cloud, Server, Brain, Users } from "lucide-react";
import { about, stats } from "@/data/content";
import AnimatedSection from "./AnimatedSection";

const statIcons = [
  <Cloud key="cloud" className="w-6 h-6 text-cyan" />,
  <Server key="server" className="w-6 h-6 text-cyan" />,
  <Brain key="brain" className="w-6 h-6 text-cyan" />,
  <Users key="users" className="w-6 h-6 text-cyan" />,
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-mono text-cyan text-sm tracking-wider mb-2">
            {"// "}
            {about.heading}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-8">
            Who I Am
          </h3>
          <p className="text-muted text-lg leading-relaxed max-w-3xl mb-16">
            {about.description}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="bg-card border border-card-border rounded-xl p-6 text-center card-hover">
                <div className="flex justify-center mb-3">{statIcons[i]}</div>
                <div className="text-2xl sm:text-3xl font-bold text-cyan font-mono mb-1">
                  {stat.value}
                </div>
                <div className="text-muted text-sm">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
