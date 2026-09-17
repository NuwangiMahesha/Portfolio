import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { processStages } from '../data/content';

export function Process() {
  return (
    <section className="relative border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader eyebrow="Process" title="How I Build Digital Solutions" />

        <div className="relative mt-16">
          <span
            className="absolute left-0 right-0 top-[11px] hidden h-[1px] bg-gradient-to-r from-accent-purple/40 via-accent-blue/25 to-transparent lg:block"
            aria-hidden="true" />
          
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processStages.map((stage, i) =>
            <Reveal as="li" key={stage.id} delay={0.06 * i}>
                <div className="group relative">
                  <span
                  className="relative z-10 flex h-[23px] w-[23px] items-center justify-center rounded-full border border-white/15 bg-ink-950 transition-colors duration-200 ease-premium group-hover:border-accent-cyan/60"
                  aria-hidden="true">
                  
                    <span className="h-[6px] w-[6px] rounded-full bg-white/30 transition-colors duration-200 ease-premium group-hover:bg-accent-cyan" />
                  </span>
                  <p className="mt-6 font-mono text-[11px] tracking-[0.2em] text-mute-400">
                    {stage.index}
                  </p>
                  <h3 className="mt-3 text-[clamp(1.3rem,2.2vw,1.75rem)] font-medium tracking-tight text-white">
                    {stage.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-mute-300">
                    {stage.description}
                  </p>
                </div>
              </Reveal>
            )}
          </ol>
        </div>
      </div>
    </section>);

}