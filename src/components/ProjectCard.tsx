import React, { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import type { Project } from '../types';
import { BrowserFrame, ProjectPreview } from './BrowserFrame';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  /** Preview height class — drives the asymmetric layout. */
  heightClass: string;
}

export function ProjectCard({ project, onOpen, heightClass }: ProjectCardProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const rotateX = useSpring(rotX, { stiffness: 180, damping: 20 });
  const rotateY = useSpring(rotY, { stiffness: 180, damping: 20 });

  const handleMove = (event: React.PointerEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rotY.set(((event.clientX - rect.left) / rect.width - 0.5) * 5);
    rotX.set(((event.clientY - rect.top) / rect.height - 0.5) * -5);
  };

  const reset = () => {
    rotX.set(0);
    rotY.set(0);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
      className="group">
      
      <motion.div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        style={reduced ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}>
        
        <button
          type="button"
          onClick={() => onOpen(project)}
          data-cursor="view"
          aria-label={`Open case study for ${project.title}`}
          className="block w-full text-left">
          
          <BrowserFrame url={project.url} className="transition-all duration-500 ease-out group-hover:border-white/30 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            <div className={`relative overflow-hidden ${heightClass}`}>
              <ProjectPreview
                title={project.title}
                index={project.index}
                category={project.category}
                image={project.image} />
              
              <div className="pointer-events-none absolute inset-0 flex items-end bg-ink-950/0 p-5 opacity-0 transition-opacity duration-300 ease-premium group-hover:bg-ink-950/55 group-hover:opacity-100">
                <span className="flex items-center gap-2 text-sm font-medium text-white">
                  View Project <ArrowUpRightIcon className="h-4 w-4" />
                </span>
              </div>
            </div>
          </BrowserFrame>

          <div className="mt-5 flex items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] tracking-[0.18em] text-mute-400">
                  {project.index}
                </span>
                <h3 className="text-lg font-medium tracking-tight text-white md:text-xl">
                  {project.title}
                </h3>
              </div>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-mute-300">{project.focus}</p>
            </div>
            <span className="shrink-0 rounded-full border border-white/[0.09] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-mute-400">
              {project.category}
            </span>
          </div>
        </button>
      </motion.div>
    </motion.article>);

}