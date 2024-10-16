"use client";

import { Mail, Github, Linkedin, Send } from "lucide-react";
import { siteConfig } from "@/data/content";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-mono text-cyan text-sm tracking-wider mb-2">
            {"// "}Contact
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Let&apos;s Build Something
          </h3>
          <p className="text-muted text-lg mb-12 max-w-xl mx-auto">
            Have a project in mind, want to talk cloud architecture, or just
            want to connect? Reach out.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-3 bg-cyan/10 border border-cyan/30 text-cyan px-6 py-3 rounded-lg font-mono text-sm hover:bg-cyan/20 transition-all glow-cyan"
            >
              <Mail className="w-4 h-4" />
              {siteConfig.email}
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-cyan transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-muted hover:text-cyan transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-card-border">
          <p className="text-muted text-xs font-mono">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Built with
            Next.js, Tailwind, and too much caffeine.
          </p>
        </div>
      </div>
    </section>
  );
}
