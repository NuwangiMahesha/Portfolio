import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { engineeringProjects } from '../data/engineeringProjects';

export function EngineeringProjects() {
  const [open, setOpen] = useState<string | null>(engineeringProjects[0]?.id ?? null);

  return (
    <section className="relative border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          eyebrow="Engineering Projects"
          title="Projects demonstrating software engineering capability."
          description="Systems, applications and data work built during my studies and professional roles." />
        

        <ul className="mt-14">
          {engineeringProjects.map((project, i) => {
            const isOpen = open === project.id;
            return (
              <Reveal as="li" key={project.id} delay={0.04 * i}>
                <div className="border-t border-white/[0.08] last:border-b">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : project.id)}
                    aria-expanded={isOpen}
                    aria-controls={`eng-${project.id}`}
                    data-cursor="open"
                    className="group flex w-full items-center gap-6 py-7 text-left">
                    
                    <span className="font-mono text-[11px] tracking-[0.18em] text-mute-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[clamp(1.15rem,2.2vw,1.7rem)] font-medium tracking-tight text-white">
                        {project.title}
                      </span>
                      {project.type &&
                      <span className="mt-1.5 block text-[13px] text-mute-400">{project.type}</span>
                      }
                    </span>
                    <motion.span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/12 text-mute-300 transition-colors duration-200 ease-premium group-hover:border-white/30 group-hover:text-white"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}>
                      
                      <PlusIcon className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen &&
                    <motion.div
                      id={`eng-${project.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden">
                      
                        <div className="grid gap-8 pb-9 md:grid-cols-[1.4fr_1fr] md:pl-12">
                          <p className="max-w-2xl text-[15px] leading-relaxed text-mute-300 md:text-base">
                            {project.description}
                          </p>
                          <div className="space-y-6">
                            {project.features &&
                          <div>
                                <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute-400">
                                  Key Features
                                </h4>
                                <ul className="mt-3 space-y-1.5">
                                  {project.features.map((feature) =>
                              <li key={feature} className="flex items-center gap-2.5 text-sm text-mute-200">
                                      <span
                                  className="h-1 w-1 rounded-full bg-accent-cyan/70"
                                  aria-hidden="true" />
                                
                                      {feature}
                                    </li>
                              )}
                                </ul>
                              </div>
                          }
                            {project.technologies &&
                          <div>
                                <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute-400">
                                  Technologies
                                </h4>
                                <ul className="mt-3 flex flex-wrap gap-2">
                                  {project.technologies.map((tech) =>
                              <li
                                key={tech}
                                className="rounded-full border border-white/[0.09] px-3 py-1 font-mono text-[10px] text-mute-200">
                                
                                      {tech}
                                    </li>
                              )}
                                </ul>
                              </div>
                          }
                          </div>
                        </div>
                      </motion.div>
                    }
                  </AnimatePresence>
                </div>
              </Reveal>);

          })}
        </ul>
      </div>
    </section>);

}