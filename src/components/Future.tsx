"use client";

import { Sparkles } from "lucide-react";
import { futureThemes, futureManifesto } from "@/data/content";
import AnimatedSection from "./AnimatedSection";

export default function Future() {
  return (
    <section id="future" className="py-24 px-6 relative overflow-hidden">
      {/* Subtle dot grid bg */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-mono text-cyan text-sm tracking-wider mb-2">
            {"// "}Vision
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-8">
            The Future of IT
          </h3>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-card/60 backdrop-blur border border-card-border rounded-2xl p-8 sm:p-12 mb-12">
            <Sparkles className="w-8 h-8 text-cyan mx-auto mb-6" />
            <p className="text-lg sm:text-xl leading-relaxed text-foreground/90 font-light">
              {futureManifesto}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {futureThemes.map((theme, i) => (
            <AnimatedSection key={theme} delay={0.3 + i * 0.1}>
              <div className="flex items-center gap-3 bg-card/40 border border-card-border rounded-lg p-4 text-left card-hover">
                <span className="text-cyan font-mono text-lg shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-muted">{theme}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
