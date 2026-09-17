import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { techNodes } from '../data/skills';

const RADIUS_X = 41;
const RADIUS_Y = 38;

interface Placed {
  name: string;
  description: string;
  left: number;
  top: number;
}

const placed: Placed[] = techNodes.map((node, i) => {
  const angle = i / techNodes.length * Math.PI * 2 - Math.PI / 2;
  return {
    name: node.name,
    description: node.description,
    left: 50 + Math.cos(angle) * RADIUS_X,
    top: 50 + Math.sin(angle) * RADIUS_Y
  };
});

/** Central discipline with orbiting technology nodes and hairline connections. */
export function TechEcosystem() {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState<Placed | null>(null);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-2xl">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
        {placed.map((node) =>
        <line
          key={node.name}
          x1="50"
          y1="50"
          x2={node.left}
          y2={node.top}
          stroke={hovered?.name === node.name ? 'rgba(34,211,238,0.5)' : 'rgba(255,255,255,0.07)'}
          strokeWidth="0.25"
          className="transition-colors duration-200" />

        )}
        <circle cx="50" cy="50" r={RADIUS_X} stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" fill="none" />
      </svg>

      {/* Centre */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-purple/[0.09] blur-3xl"
          aria-hidden="true" />
        
        <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-full border border-white/10 bg-ink-850/90 px-4 md:h-40 md:w-40">
          <span className="text-center text-[13px] font-medium leading-tight tracking-tight text-white md:text-[15px]">
            Software
            <br />
            Engineering
          </span>
          <span className="mt-2 h-[1px] w-8 rule-accent" aria-hidden="true" />
        </div>
      </div>

      {/* Nodes */}
      {placed.map((node, i) => {
        const isHovered = hovered?.name === node.name;
        return (
          <div
            key={node.name}
            style={{ left: `${node.left}%`, top: `${node.top}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2">
            
            <motion.button
              type="button"
              className="rounded-full"
              onMouseEnter={() => setHovered(node)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(node)}
              onBlur={() => setHovered(null)}
              aria-describedby="tech-description"
              animate={
              reduced ?
              { scale: isHovered ? 1.06 : 1 } :
              { scale: isHovered ? 1.08 : 1, y: [0, -4, 0] }
              }
              transition={{
                scale: { duration: 0.2, ease: [0.23, 1, 0.32, 1] },
                y: { duration: 6 + i % 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }
              }}>
              
              <span
                className={`block rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-wide transition-colors duration-200 ease-premium md:text-[11px] ${
                isHovered ?
                'border-accent-cyan/50 bg-ink-800 text-white' :
                'border-white/[0.09] bg-ink-900/90 text-mute-300'}`
                }>
                
                {node.name}
              </span>
            </motion.button>
          </div>);

      })}

      {/* Description readout */}
      <p
        id="tech-description"
        aria-live="polite"
        className="absolute bottom-0 left-1/2 w-full max-w-xs -translate-x-1/2 text-center text-[13px] leading-relaxed text-mute-300">
        
        {hovered ? hovered.description : 'Hover a technology to see how I use it.'}
      </p>
    </div>);

}