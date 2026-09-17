import React from 'react';
import { Reveal } from '../components/Reveal';

export function Approach() {
  return (
    <section className="relative border-t border-white/[0.06] py-24 md:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/[0.06] blur-[120px]"
        aria-hidden="true" />
      
      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-mute-400">
            Professional Approach
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-[clamp(2.1rem,5vw,3.6rem)] font-semibold leading-[1.04] tracking-tightest text-white">
            Code is only part of the solution.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-relaxed text-mute-300 md:text-lg">
            I focus on understanding the problem, designing practical experiences, engineering reliable
            solutions and delivering production-ready digital products.
          </p>
        </Reveal>
      </div>
    </section>);

}