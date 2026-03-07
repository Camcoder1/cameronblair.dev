"use client";

import {
  Cloud,
  Server,
  Brain,
  Database,
  HardDrive,
  Network,
  ArrowRight,
  BarChart3,
  RefreshCw,
  Layers,
  Container,
  Cpu,
  Activity,
  Cog,
  Globe,
  GitBranch,
  Code2,
  Lock,
  Rocket,
  Zap,
  Package,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

/* ------------------------------------------------------------------ */
/*  Shared primitives                                                  */
/* ------------------------------------------------------------------ */

function DiagramBox({
  label,
  icon,
  accent = false,
  className = "",
}: {
  label: string;
  icon?: React.ReactNode;
  accent?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`
        flex items-center gap-2 bg-card border rounded-lg px-3 py-2 font-mono text-xs
        ${accent ? "border-cyan/40 text-cyan shadow-[0_0_12px_rgba(0,229,255,0.1)]" : "border-card-border text-foreground/80"}
        ${className}
      `}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="leading-tight">{label}</span>
    </div>
  );
}

function HorizontalArrow({ animated = false }: { animated?: boolean }) {
  return (
    <div className="flex items-center justify-center shrink-0 w-6 sm:w-8">
      <div
        className={`h-px flex-1 ${animated ? "border-t border-dashed border-cyan/60 animate-pulse" : "bg-cyan/30"}`}
      />
      <ArrowRight className="w-3 h-3 text-cyan/60 -ml-0.5 shrink-0" />
    </div>
  );
}

function VerticalConnector({ animated = false }: { animated?: boolean }) {
  return (
    <div className="flex flex-col items-center py-1">
      <div
        className={`w-px h-5 ${animated ? "border-l border-dashed border-cyan/60 animate-pulse" : "bg-cyan/30"}`}
      />
      <ArrowRight className="w-3 h-3 text-cyan/50 rotate-90 -mt-0.5" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Diagram 1 -- Hybrid Cloud Architecture                             */
/* ------------------------------------------------------------------ */

function HybridCloudDiagram() {
  return (
    <AnimatedSection delay={0.1}>
      <div className="bg-card/60 backdrop-blur border border-card-border rounded-2xl p-6 sm:p-8 card-hover">
        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <Network className="w-5 h-5 text-cyan" />
          <h4 className="font-mono font-bold text-sm text-cyan tracking-wider">
            Hybrid Cloud Architecture
          </h4>
        </div>

        {/* Main grid: On-Prem | VPN | Cloud */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.4fr] gap-4 lg:gap-2 items-start">
          {/* ---- On-Prem Section ---- */}
          <div className="border border-card-border rounded-xl p-4 bg-background/40">
            <p className="font-mono text-[10px] text-muted uppercase tracking-widest mb-3">
              On-Premises
            </p>
            <div className="flex flex-col items-center gap-1">
              <DiagramBox
                label="Data Center"
                icon={<Server className="w-3.5 h-3.5" />}
              />
              <VerticalConnector />
              <DiagramBox
                label="Cisco UCS"
                icon={<Cpu className="w-3.5 h-3.5" />}
              />
              <VerticalConnector />
              <DiagramBox
                label="Pure Storage"
                icon={<HardDrive className="w-3.5 h-3.5" />}
              />
              <VerticalConnector />
              <DiagramBox
                label="VMware vSphere"
                icon={<Layers className="w-3.5 h-3.5" />}
              />
            </div>
          </div>

          {/* ---- VPN Bridge (middle) ---- */}
          <div className="flex lg:flex-col items-center justify-center gap-2 py-4 lg:py-0 lg:h-full">
            {/* Horizontal on mobile, vertical on desktop */}
            <div className="hidden lg:flex flex-col items-center h-full justify-center gap-1">
              <motion.div
                className="w-px flex-1 border-l-2 border-dashed border-cyan/50"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="bg-cyan/10 border border-cyan/30 rounded-lg px-3 py-2 font-mono text-[10px] text-cyan text-center whitespace-nowrap">
                Cloud VPN /<br />Direct Connect
              </div>
              <motion.div
                className="w-px flex-1 border-l-2 border-dashed border-cyan/50"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </div>

            {/* Mobile horizontal bridge */}
            <div className="flex lg:hidden items-center gap-2 w-full justify-center">
              <motion.div
                className="h-px flex-1 max-w-16 border-t-2 border-dashed border-cyan/50"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="bg-cyan/10 border border-cyan/30 rounded-lg px-3 py-2 font-mono text-[10px] text-cyan text-center whitespace-nowrap">
                Cloud VPN / Direct Connect
              </div>
              <motion.div
                className="h-px flex-1 max-w-16 border-t-2 border-dashed border-cyan/50"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
          </div>

          {/* ---- Cloud Section ---- */}
          <div className="border border-card-border rounded-xl p-4 bg-background/40">
            <p className="font-mono text-[10px] text-muted uppercase tracking-widest mb-3">
              Multi-Cloud
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* GCP */}
              <div className="border border-cyan/20 rounded-lg p-3 bg-cyan/[0.03]">
                <p className="font-mono text-[10px] text-cyan font-bold mb-2 flex items-center gap-1.5">
                  <Cloud className="w-3 h-3" /> GCP
                </p>
                <div className="flex flex-col gap-1.5">
                  <DiagramBox
                    label="Vertex AI"
                    icon={<Brain className="w-3 h-3" />}
                    accent
                    className="text-[10px] px-2 py-1"
                  />
                  <DiagramBox
                    label="GKE"
                    icon={<Container className="w-3 h-3" />}
                    accent
                    className="text-[10px] px-2 py-1"
                  />
                  <DiagramBox
                    label="Cloud Run"
                    icon={<Cog className="w-3 h-3" />}
                    accent
                    className="text-[10px] px-2 py-1"
                  />
                </div>
              </div>
              {/* AWS */}
              <div className="border border-card-border rounded-lg p-3">
                <p className="font-mono text-[10px] text-foreground/60 font-bold mb-2 flex items-center gap-1.5">
                  <Cloud className="w-3 h-3" /> AWS
                </p>
                <div className="flex flex-col gap-1.5">
                  <DiagramBox
                    label="EKS"
                    icon={<Container className="w-3 h-3" />}
                    className="text-[10px] px-2 py-1"
                  />
                  <DiagramBox
                    label="Lambda"
                    icon={<Cog className="w-3 h-3" />}
                    className="text-[10px] px-2 py-1"
                  />
                </div>
              </div>
              {/* Azure */}
              <div className="border border-card-border rounded-lg p-3">
                <p className="font-mono text-[10px] text-foreground/60 font-bold mb-2 flex items-center gap-1.5">
                  <Cloud className="w-3 h-3" /> Azure
                </p>
                <div className="flex flex-col gap-1.5">
                  <DiagramBox
                    label="AKS"
                    icon={<Container className="w-3 h-3" />}
                    className="text-[10px] px-2 py-1"
                  />
                  <DiagramBox
                    label="Functions"
                    icon={<Cog className="w-3 h-3" />}
                    className="text-[10px] px-2 py-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Unified Operations Bar ---- */}
        <motion.div
          className="mt-5 border border-cyan/30 bg-cyan/[0.04] rounded-lg px-4 py-3 flex items-center justify-center gap-3"
          animate={{ boxShadow: ["0 0 0px rgba(0,229,255,0)", "0 0 16px rgba(0,229,255,0.12)", "0 0 0px rgba(0,229,255,0)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Activity className="w-4 h-4 text-cyan shrink-0" />
          <span className="font-mono text-xs text-cyan tracking-wide">
            Unified Operations &mdash; Monitoring &bull; Automation &bull; Compliance &bull; Cost&nbsp;Management
          </span>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

/* ------------------------------------------------------------------ */
/*  Diagram 2 -- MLOps Pipeline                                        */
/* ------------------------------------------------------------------ */

const pipelineSteps = [
  { label: "Data Sources", icon: <Database className="w-3.5 h-3.5" /> },
  { label: "BigQuery", icon: <Database className="w-3.5 h-3.5" /> },
  { label: "Feature Eng.", icon: <Cog className="w-3.5 h-3.5" /> },
  { label: "Vertex AI Training", icon: <Brain className="w-3.5 h-3.5" />, accent: true },
  { label: "Model Registry", icon: <Layers className="w-3.5 h-3.5" /> },
  { label: "Production", icon: <Cloud className="w-3.5 h-3.5" />, accent: true },
  { label: "Monitoring", icon: <BarChart3 className="w-3.5 h-3.5" /> },
];

/* ------------------------------------------------------------------ */
/*  Diagram 3 -- This Site: Build & Delivery Pipeline                   */
/* ------------------------------------------------------------------ */

const cicdStages = [
  { label: "Lint & Types", icon: <Cog className="w-3.5 h-3.5" /> },
  { label: "Build & Test", icon: <Package className="w-3.5 h-3.5" /> },
  { label: "TF Plan / Apply", icon: <Layers className="w-3.5 h-3.5" />, accent: true },
  { label: "Deploy", icon: <Rocket className="w-3.5 h-3.5" />, accent: true },
];

function SiteArchDiagram() {
  return (
    <AnimatedSection delay={0.4}>
      <div className="bg-card/60 backdrop-blur border border-card-border rounded-2xl p-6 sm:p-8 card-hover">
        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-5 h-5 text-cyan" />
          <h4 className="font-mono font-bold text-sm text-cyan tracking-wider">
            This Site &mdash; Build &amp; Delivery Pipeline
          </h4>
        </div>

        {/* Layer 1: Development Stack */}
        <div className="border border-card-border rounded-xl p-4 bg-background/40">
          <p className="font-mono text-[10px] text-muted uppercase tracking-widest mb-3">
            Development Stack
          </p>
          <div className="flex flex-wrap gap-2">
            <DiagramBox
              label="Next.js 16"
              icon={<Code2 className="w-3.5 h-3.5" />}
              accent
            />
            <DiagramBox
              label="React 19"
              icon={<Code2 className="w-3.5 h-3.5" />}
            />
            <DiagramBox
              label="TypeScript 5"
              icon={<Code2 className="w-3.5 h-3.5" />}
            />
            <DiagramBox
              label="Tailwind CSS 4"
              icon={<Layers className="w-3.5 h-3.5" />}
            />
            <DiagramBox
              label="Framer Motion"
              icon={<Zap className="w-3.5 h-3.5" />}
            />
          </div>
        </div>

        <VerticalConnector />

        {/* Layer 2: GitHub + CI/CD Pipeline */}
        <div className="border border-cyan/20 rounded-xl p-4 bg-cyan/[0.03]">
          <p className="font-mono text-[10px] text-cyan uppercase tracking-widest mb-3 font-bold flex items-center gap-1.5">
            <GitBranch className="w-3 h-3" /> GitHub &amp; CI/CD
          </p>

          {/* Trigger label */}
          <p className="font-mono text-[9px] text-muted mb-2 tracking-wide">
            Push to main &rarr; GitHub Actions workflow triggers:
          </p>

          {/* Desktop: horizontal pipeline */}
          <div className="hidden md:flex items-center gap-1 overflow-x-auto pb-1">
            {cicdStages.map((stage, i) => (
              <div key={stage.label} className="flex items-center shrink-0">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                >
                  <DiagramBox
                    label={stage.label}
                    icon={stage.icon}
                    accent={stage.accent}
                  />
                </motion.div>
                {i < cicdStages.length - 1 && <HorizontalArrow />}
              </div>
            ))}
          </div>

          {/* Mobile: vertical pipeline */}
          <div className="flex md:hidden flex-col items-center gap-1">
            {cicdStages.map((stage, i) => (
              <div key={stage.label} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                >
                  <DiagramBox
                    label={stage.label}
                    icon={stage.icon}
                    accent={stage.accent}
                  />
                </motion.div>
                {i < cicdStages.length - 1 && <VerticalConnector />}
              </div>
            ))}
          </div>
        </div>

        <VerticalConnector animated />

        {/* Layer 3: Infrastructure (Terraform-managed) */}
        <div className="border border-card-border rounded-xl p-4 bg-background/40">
          <div className="flex items-center justify-between mb-3">
            <p className="font-mono text-[10px] text-muted uppercase tracking-widest">
              Infrastructure
            </p>
            <span className="font-mono text-[9px] text-cyan/70 bg-cyan/[0.08] border border-cyan/20 rounded px-2 py-0.5">
              Terraform-managed
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <DiagramBox
              label="GCP Cloud Run"
              icon={<Cloud className="w-3.5 h-3.5" />}
              accent
            />
            <DiagramBox
              label="Cloud CDN"
              icon={<Globe className="w-3.5 h-3.5" />}
              accent
            />
            <DiagramBox
              label="Cloud DNS"
              icon={<Globe className="w-3.5 h-3.5" />}
            />
            <DiagramBox
              label="SSL / TLS"
              icon={<Lock className="w-3.5 h-3.5" />}
            />
          </div>
        </div>

        {/* Bottom: Live indicator */}
        <motion.div
          className="mt-5 border border-cyan/30 bg-cyan/[0.04] rounded-lg px-4 py-3 flex items-center justify-center gap-3"
          animate={{
            boxShadow: [
              "0 0 0px rgba(0,229,255,0)",
              "0 0 16px rgba(0,229,255,0.12)",
              "0 0 0px rgba(0,229,255,0)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-green-400"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="font-mono text-xs text-cyan tracking-wide">
            Live &mdash; Automated Deploys &bull; Push to Main &bull; Zero
            Downtime
          </span>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function MLOpsPipeline() {
  return (
    <AnimatedSection delay={0.25}>
      <div className="bg-card/60 backdrop-blur border border-card-border rounded-2xl p-6 sm:p-8 card-hover">
        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <Brain className="w-5 h-5 text-cyan" />
          <h4 className="font-mono font-bold text-sm text-cyan tracking-wider">
            MLOps Pipeline
          </h4>
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-center gap-1 overflow-x-auto pb-2">
          {pipelineSteps.map((step, i) => (
            <div key={step.label} className="flex items-center shrink-0">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              >
                <DiagramBox
                  label={step.label}
                  icon={step.icon}
                  accent={step.accent}
                />
              </motion.div>
              {i < pipelineSteps.length - 1 && <HorizontalArrow />}
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="flex md:hidden flex-col items-center gap-1">
          {pipelineSteps.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              >
                <DiagramBox
                  label={step.label}
                  icon={step.icon}
                  accent={step.accent}
                />
              </motion.div>
              {i < pipelineSteps.length - 1 && <VerticalConnector />}
            </div>
          ))}
        </div>

        {/* Feedback loop arrow */}
        <motion.div
          className="mt-4 flex items-center justify-center gap-2 text-cyan/50"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span className="font-mono text-[10px] tracking-wider">
            Feedback Loop &mdash; Monitoring triggers retraining
          </span>
          <div className="h-px w-12 border-t border-dashed border-cyan/40" />
          <ArrowRight className="w-3 h-3 -ml-1 rotate-180" />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

/* ------------------------------------------------------------------ */
/*  Exported Section                                                   */
/* ------------------------------------------------------------------ */

export default function Diagrams() {
  return (
    <section id="architecture" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-mono text-cyan text-sm tracking-wider mb-2">
            {"// "}Architecture
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-16">
            System Design
          </h3>
        </AnimatedSection>

        <div className="flex flex-col gap-8">
          <SiteArchDiagram />
          <HybridCloudDiagram />
          <MLOpsPipeline />
        </div>
      </div>
    </section>
  );
}
