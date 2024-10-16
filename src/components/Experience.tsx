"use client";

import { Briefcase, Terminal, Award } from "lucide-react";
import { experiences } from "@/data/content";
import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-mono text-cyan text-sm tracking-wider mb-2">
            {"// "}Experience
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-16">
            Where I&apos;ve Built
          </h3>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] timeline-line" />

          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.period} delay={i * 0.15}>
              <div
                className={`relative flex flex-col md:flex-row gap-6 mb-16 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 top-1 w-4 h-4 rounded-full bg-background border-2 border-cyan glow-cyan z-10" />

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-card border border-card-border rounded-xl p-6 card-hover">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-cyan shrink-0" />
                      <span className="font-mono text-cyan text-xs">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-1">{exp.role}</h4>
                    <p className="text-muted text-sm font-mono mb-4">
                      {exp.company}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-muted text-sm flex items-start gap-2"
                        >
                          <span className="text-cyan mt-1.5 shrink-0">&#9656;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            </AnimatedSection>
          ))}

          {/* Origin Story — Where It All Started */}
          <AnimatedSection delay={0.3}>
            <div className="relative flex flex-col items-center mt-8">
              {/* Terminal dot — larger, special */}
              <div className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 -top-1 w-5 h-5 rounded-full bg-cyan/20 border-2 border-cyan glow-cyan z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              </div>

              <div className="ml-10 md:ml-0 md:max-w-2xl w-full">
                <div className="relative bg-[#0c0c14] border border-cyan/30 rounded-xl overflow-hidden glow-cyan">
                  {/* Terminal title bar */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0e0e18] border-b border-cyan/20">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <span className="font-mono text-xs text-muted ml-2">origin.sh</span>
                  </div>

                  {/* Terminal content */}
                  <div className="p-6 font-mono text-sm">
                    <div className="text-muted mb-1">
                      <span className="text-cyan">$</span> cat ./origin_story
                    </div>
                    <div className="mt-4 mb-6">
                      <p className="text-cyan text-lg font-bold mb-1 flex items-center gap-2">
                        <Terminal className="w-4 h-4" />
                        system.init()
                      </p>
                      <p className="text-accent font-bold text-xs tracking-widest uppercase">
                        Where It All Started
                      </p>
                    </div>

                    <div className="space-y-4 text-foreground/90 leading-relaxed">
                      <p>
                        Most people start their IT career after college. I started mine at 17 —
                        earning my{" "}
                        <span className="text-cyan font-bold">Microsoft MCSE</span> and{" "}
                        <span className="text-cyan font-bold">Cisco CCNA</span> at
                        PC Professor while kids my age were still deciding on majors.
                      </p>
                      <p className="text-muted">
                        I knew early that I wanted to build things, not just study them.
                        That head start meant I was racking servers and configuring networks
                        before most engineers finished their first internship — and I haven&apos;t
                        slowed down since.
                      </p>
                    </div>

                    {/* Cert badges */}
                    <div className="flex flex-wrap gap-3 mt-6">
                      <div className="flex items-center gap-2 bg-cyan/5 border border-cyan/20 rounded-lg px-3 py-2">
                        <Award className="w-4 h-4 text-cyan" />
                        <div>
                          <div className="text-cyan text-xs font-bold">MCSE</div>
                          <div className="text-muted text-[10px]">Microsoft Certified</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-cyan/5 border border-cyan/20 rounded-lg px-3 py-2">
                        <Award className="w-4 h-4 text-cyan" />
                        <div>
                          <div className="text-cyan text-xs font-bold">CCNA</div>
                          <div className="text-muted text-[10px]">Cisco Certified</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-lg px-3 py-2">
                        <Terminal className="w-4 h-4 text-accent" />
                        <div>
                          <div className="text-accent text-xs font-bold">PC Professor</div>
                          <div className="text-muted text-[10px]">Age 17</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 text-muted text-xs">
                      <span className="text-cyan">$</span> <span className="cursor-blink">_</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
