import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { experience } from '../data/experience';

export function Experience() {
  const [open, setOpen] = useState<string | null>(experience[0]?.id ?? null);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="experience" className="relative border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          eyebrow="Experience"
          title="A career built on solving practical problems." />
        

        <ol className="relative mt-16">
          {/* Connecting line */}
          <span
            className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-accent-purple/40 via-white/10 to-transparent md:left-[calc(6rem+7px)]"
            aria-hidden="true" />
          

          {experience.map((item, i) => {
            const isOpen = open === item.id;
            const isHovered = hovered === item.id;
            return (
              <Reveal as="li" key={item.id} delay={0.05 * i}>
                <div
                  className="relative pl-9 md:pl-[calc(6rem+2.25rem)]"
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}>
                  
                  {/* Year rail (desktop) */}
                  <span className="absolute left-0 top-[1.6rem] hidden w-24 font-mono text-[11px] tracking-[0.16em] text-mute-400 md:block">
                    {item.year}
                  </span>

                  {/* Node */}
                  <motion.span
                    className="absolute left-0 top-[1.6rem] flex h-[15px] w-[15px] items-center justify-center rounded-full border bg-ink-950 md:left-24"
                    animate={{
                      borderColor:
                      isOpen || isHovered ? 'rgba(34,211,238,0.7)' : 'rgba(255,255,255,0.18)'
                    }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    aria-hidden="true">
                    
                    <motion.span
                      className="h-[5px] w-[5px] rounded-full"
                      animate={{
                        backgroundColor:
                        isOpen || isHovered ? '#22D3EE' : 'rgba(255,255,255,0.3)'
                      }}
                      transition={{ duration: 0.2 }} />
                    
                  </motion.span>

                  <div className="border-b border-white/[0.07] pb-8">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`exp-${item.id}`}
                      data-cursor="open"
                      className="group flex w-full items-start justify-between gap-6 pt-6 text-left">
                      
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-[clamp(1.2rem,2.2vw,1.6rem)] font-medium tracking-tight text-white">
                            {item.role}
                          </h3>
                          {item.current &&
                          <span className="rounded-full border border-accent-cyan/30 bg-accent-cyan/[0.08] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-cyan">
                              Current
                            </span>
                          }
                        </div>
                        <p className="mt-2 text-sm text-mute-300">
                          {item.company}
                          <span className="mx-2 text-mute-400/50" aria-hidden="true">
                            /
                          </span>
                          <span className="font-mono text-[12px] text-mute-400">{item.period}</span>
                        </p>
                      </div>
                      <motion.span
                        className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/12 text-mute-300 transition-colors duration-200 ease-premium group-hover:border-white/30 group-hover:text-white"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}>
                        
                        <ChevronDownIcon className="h-4 w-4" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen &&
                      <motion.div
                        id={`exp-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden">
                        
                          <div className="grid gap-8 pt-6 md:grid-cols-[1.3fr_1fr]">
                            <ul className="space-y-2.5">
                              {item.responsibilities.map((task) =>
                            <li key={task} className="flex gap-3 text-[15px] leading-relaxed text-mute-300">
                                  <span
                                className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-cyan/70"
                                aria-hidden="true" />
                              
                                  {task}
                                </li>
                            )}
                            </ul>
                            <div>
                              <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute-400">
                                Focus Areas
                              </h4>
                              <ul className="mt-3 flex flex-wrap gap-2">
                                {item.focus.map((tag) =>
                              <li
                                key={tag}
                                className="rounded-full border border-white/[0.09] px-3 py-1 font-mono text-[10px] text-mute-200">
                                
                                    {tag}
                                  </li>
                              )}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      }
                    </AnimatePresence>
                  </div>
                </div>
              </Reveal>);

          })}
        </ol>
      </div>
    </section>);

}