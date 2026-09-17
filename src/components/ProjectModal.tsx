import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRightIcon, CloudIcon, XIcon } from 'lucide-react';
import type { Project } from '../types';
import { BrowserFrame, ProjectPreview } from './BrowserFrame';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

/** Expandable case study. Only sections supported by available information are shown. */
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project &&
      <motion.div
        className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-ink-950/80 p-4 backdrop-blur-sm md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        onClick={onClose}>
        
          <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-lift"
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 8 }}
          transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
          onClick={(event) => event.stopPropagation()}>
          
            <div className="flex items-start justify-between gap-6 border-b border-white/[0.07] p-6 md:p-8">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute-400">
                  {project.index} — {project.category}
                </p>
                <h3
                id="case-study-title"
                className="mt-3 text-[clamp(1.6rem,3.4vw,2.4rem)] font-semibold leading-tight tracking-tight text-white">
                
                  {project.title}
                </h3>
              </div>
              <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 text-mute-300 transition-colors duration-200 ease-premium hover:border-white/30 hover:text-white">
              
                <XIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-8 p-6 md:p-8">
              <BrowserFrame url={project.url}>
                <div className="h-56 md:h-72">
                  <ProjectPreview
                  title={project.title}
                  index={project.index}
                  category={project.category}
                  image={project.image} />
                
                </div>
              </BrowserFrame>

              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute-400">
                  Overview
                </h4>
                <p className="mt-3 text-[17px] leading-relaxed text-mute-200">{project.focus}</p>
              </div>

              <dl className="grid gap-6 border-t border-white/[0.06] pt-6 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute-400">
                    Category
                  </dt>
                  <dd className="mt-2 text-sm text-mute-200">{project.category}</dd>
                </div>
                {project.deployment &&
              <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute-400">
                      Deployment
                    </dt>
                    <dd className="mt-2 flex items-center gap-2 text-sm text-mute-200">
                      <CloudIcon className="h-4 w-4 text-accent-cyan" />
                      {project.deployment}
                    </dd>
                  </div>
              }
              </dl>

              <p className="rounded-lg border border-white/[0.07] bg-ink-850/60 p-4 text-[13px] leading-relaxed text-mute-400">
                Challenge, approach, technology stack and key-feature detail can be added here once the
                project documentation is available.
              </p>

              <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              data-cursor="open"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink-950 transition-colors duration-200 ease-premium hover:bg-mute-200">
              
                Visit Live Website
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}