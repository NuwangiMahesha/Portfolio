import React from 'react';
import { AwardIcon, GraduationCapIcon } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { certifications, education } from '../data/education';

export function Education() {
  return (
    <section className="relative border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader eyebrow="Education" title="Academic foundation." />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <ol className="relative">
            <span
              className="absolute left-[7px] top-3 bottom-6 w-[1px] bg-gradient-to-b from-accent-blue/40 via-white/10 to-transparent"
              aria-hidden="true" />
            
            {education.map((item, i) =>
            <Reveal as="li" key={item.id} delay={0.05 * i}>
                <div className="group relative border-b border-white/[0.07] pb-6 pl-9 pt-6">
                  <span
                  className="absolute left-0 top-[1.9rem] flex h-[15px] w-[15px] items-center justify-center rounded-full border border-white/18 bg-ink-950 transition-colors duration-200 ease-premium group-hover:border-accent-blue/60"
                  aria-hidden="true">
                  
                    <GraduationCapIcon className="h-2 w-2 text-mute-400" />
                  </span>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="text-[clamp(1.05rem,1.8vw,1.35rem)] font-medium tracking-tight text-white">
                      {item.qualification}
                    </h3>
                    <span className="font-mono text-[11px] tracking-[0.12em] text-mute-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-mute-300">
                    {item.institution}
                    {item.current &&
                  <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-cyan">
                        In progress
                      </span>
                  }
                  </p>
                </div>
              </Reveal>
            )}
          </ol>

          <div>
            <Reveal>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute-400">
                Certifications
              </h3>
            </Reveal>
            <ul className="mt-6 space-y-3">
              {certifications.map((cert, i) =>
              <Reveal as="li" key={cert.id} delay={0.05 * i}>
                  <div className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 transition-colors duration-200 ease-premium hover:border-white/20">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10">
                      <AwardIcon className="h-4 w-4 text-mute-300" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white">{cert.title}</p>
                      <p className="mt-0.5 font-mono text-[11px] text-mute-400">{cert.institution}</p>
                    </div>
                  </div>
                </Reveal>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>);

}