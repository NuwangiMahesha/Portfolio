import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';
import { capabilities } from '../data/content';

export function WhatIBuild() {
  return (
    <section className="relative border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader eyebrow="What I Build" title="From concept to production." />

        <ul className="mt-14 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) =>
          <Reveal as="li" key={item.id} delay={0.04 * i}>
              <div className="group relative flex h-full flex-col border-t border-white/[0.08] py-8 transition-colors duration-200 ease-premium hover:border-white/25">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[clamp(1.35rem,2.2vw,1.9rem)] font-medium leading-tight tracking-tight text-white">
                    {item.title}
                  </h3>
                  <ArrowUpRightIcon className="mt-1 h-4 w-4 shrink-0 text-mute-400 transition-all duration-200 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </div>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-mute-300">{item.description}</p>
                <span
                className="mt-auto pt-6 font-mono text-[10px] tracking-[0.2em] text-mute-400/60"
                aria-hidden="true">
                
                  0{i + 1}
                </span>
              </div>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}