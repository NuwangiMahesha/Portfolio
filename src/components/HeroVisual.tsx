import React from 'react';
import { motion, useReducedMotion, useTransform, type MotionValue } from 'framer-motion';
import { CloudIcon, GitBranchIcon, TerminalIcon } from 'lucide-react';
import { usePointerParallax } from '../hooks/usePointerParallax';
import { BrowserFrame, ProjectPreview } from './BrowserFrame';
import { projects } from '../data/projects';

const codeLines: Array<{text: string;tone: string;}> = [
{ text: 'const deploy = async (build) => {', tone: 'text-mute-300' },
{ text: '  await bundle(build.assets)', tone: 'text-accent-cyan/80' },
{ text: '  return cloud.publish(build)', tone: 'text-accent-purple/80' },
{ text: '}', tone: 'text-mute-300' }];


const badges = ['React', 'Spring Boot', 'AWS', 'PostgreSQL'];

interface LayerProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  className: string;
  delay?: number;
  float?: boolean;
  children: React.ReactNode;
}

/** Parallax wrapper (outer) + independent floating motion (inner). */
function Layer({ x, y, className, delay = 0, float = true, children }: LayerProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div className={className} style={{ x, y }}>
      <motion.div
        animate={reduced || !float ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay }}>
        
        {children}
      </motion.div>
    </motion.div>);

}

/**
 * Interactive digital-workspace composition: layered browser windows, a code
 * panel, a terminal, cloud status and technology badges, joined by hairlines.
 */
export function HeroVisual() {
  const { x, y } = usePointerParallax();

  const frontX = useTransform(x, (v) => v * -26);
  const frontY = useTransform(y, (v) => v * -26);
  const midX = useTransform(x, (v) => v * -16);
  const midY = useTransform(y, (v) => v * -16);
  const backX = useTransform(x, (v) => v * -8);
  const backY = useTransform(y, (v) => v * -8);

  const [primary, secondary] = projects;

  return (
    <div className="relative aspect-[4/3.4] w-full select-none" aria-hidden="true">
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-accent-purple/10 blur-[90px]" />
      <div className="absolute bottom-6 right-8 h-56 w-56 rounded-full bg-accent-cyan/[0.07] blur-[90px]" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 340" fill="none">
        <path
          d="M96 246 C 150 246, 150 118, 214 118"
          stroke="url(#heroLine)"
          strokeWidth="1"
          strokeDasharray="3 5" />
        
        <path
          d="M300 62 C 330 110, 300 176, 262 214"
          stroke="url(#heroLine)"
          strokeWidth="1"
          strokeDasharray="3 5" />
        
        <defs>
          <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.12" />
          </linearGradient>
        </defs>
      </svg>

      {/* Back window — supporting project preview */}
      <Layer x={backX} y={backY} className="absolute right-0 top-2 w-[58%]" delay={0.8}>
        <BrowserFrame url={secondary.url} compact className="opacity-70">
          <div className="h-28 md:h-32">
            <ProjectPreview
              title={secondary.title}
              index={secondary.index}
              category={secondary.category}
              image={secondary.image} />
            
          </div>
        </BrowserFrame>
      </Layer>

      {/* Mid window — primary project preview */}
      <Layer x={midX} y={midY} className="absolute left-[6%] top-[22%] w-[68%]">
        <BrowserFrame url={primary.url}>
          <div className="h-40 md:h-48">
            <ProjectPreview
              title={primary.title}
              index={primary.index}
              category={primary.category}
              image={primary.image} />
            
          </div>
        </BrowserFrame>
      </Layer>

      {/* Code panel */}
      <Layer x={frontX} y={frontY} className="absolute bottom-[12%] right-0 w-[52%]" delay={1.6}>
        <div className="rounded-xl border border-white/10 bg-ink-850/90 p-3.5 shadow-panel backdrop-blur-sm">
          <div className="flex items-center gap-2 pb-2.5">
            <GitBranchIcon className="h-3 w-3 text-mute-400" />
            <span className="font-mono text-[10px] text-mute-400">deploy.ts</span>
          </div>
          <pre className="overflow-hidden font-mono text-[10px] leading-relaxed md:text-[11px]">
            {codeLines.map((line) =>
            <div key={line.text} className={line.tone}>
                {line.text}
              </div>
            )}
          </pre>
        </div>
      </Layer>

      {/* Terminal panel */}
      <Layer x={frontX} y={frontY} className="absolute bottom-[2%] left-0 w-[48%]" delay={2.4}>
        <div className="rounded-xl border border-white/10 bg-ink-950/90 p-3.5 shadow-panel">
          <div className="flex items-center gap-2 pb-2">
            <TerminalIcon className="h-3 w-3 text-mute-400" />
            <span className="font-mono text-[10px] text-mute-400">build</span>
          </div>
          <p className="font-mono text-[10px] leading-relaxed text-mute-300">
            <span className="text-accent-cyan">✓</span> compiled
            <br />
            <span className="text-accent-purple">→</span> deploying…
          </p>
        </div>
      </Layer>

      {/* Cloud status */}
      <Layer x={midX} y={midY} className="absolute left-[2%] top-[6%]" delay={1.2}>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-ink-850/90 px-3 py-1.5 shadow-lift backdrop-blur-sm">
          <CloudIcon className="h-3.5 w-3.5 text-accent-cyan" />
          <span className="font-mono text-[10px] tracking-wide text-mute-200">Deployed</span>
        </div>
      </Layer>

      {/* Technology badges */}
      <Layer x={frontX} y={frontY} className="absolute right-[4%] top-[48%]" delay={2}>
        <ul className="space-y-1.5">
          {badges.map((badge, i) =>
          <li
            key={badge}
            className="rounded-md border border-white/[0.08] bg-ink-800/80 px-2.5 py-1 text-right font-mono text-[10px] text-mute-300 backdrop-blur-sm"
            style={{ marginRight: `${i * 6}px` }}>
            
              {badge}
            </li>
          )}
        </ul>
      </Layer>

      {/* Pipeline label */}
      <Layer
        x={backX}
        y={backY}
        float={false}
        className="absolute bottom-0 left-1/2 -translate-x-1/2">
        
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mute-400/70">
          Design → Develop → Deploy
        </span>
      </Layer>
    </div>);

}