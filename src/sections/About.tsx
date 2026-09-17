import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPinIcon, UserIcon } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';
import { profile } from '../data/content';

const focusAreas = [
'Full-stack development',
'Cloud infrastructure',
'Responsive UI engineering',
'Business & internal systems',
'Technical troubleshooting',
'Production deployment'];


export function About() {
  const reduced = useReducedMotion();

  return (
    <section id="about" className="relative border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          eyebrow="About"
          title={
          <>
              Engineer. Builder. <span className="text-mute-400">Problem Solver.</span>
            </>
          } />
        

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="max-w-2xl text-[19px] leading-relaxed text-mute-200 md:text-[21px]">
                I'm a software engineering professional with hands-on experience in full-stack
                development and cloud infrastructure.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute-300 md:text-[17px]">
                I've worked as an Associate Software Engineer, Technical Support Engineer and Production
                Associate — with a strong focus on problem solving, adaptability and delivering
                high-performance solutions. Day to day that means building responsive interfaces,
                implementing backend logic, maintaining infrastructure and managing production
                deployments on modern cloud platforms.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-10 grid gap-x-8 gap-y-0 sm:grid-cols-2">
                {focusAreas.map((area) =>
                <li
                  key={area}
                  className="flex items-center gap-3 border-b border-white/[0.06] py-3.5 text-sm text-mute-200">
                  
                    <span className="h-1 w-1 rounded-full bg-accent-cyan/70" aria-hidden="true" />
                    {area}
                  </li>
                )}
              </ul>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-10 flex flex-wrap items-center gap-6 font-mono text-[11px] uppercase tracking-[0.16em] text-mute-400">
                <span className="flex items-center gap-2">
                  <MapPinIcon className="h-3.5 w-3.5" />
                  {profile.location}
                </span>
                <a
                  href={profile.portfolio}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cursor="open"
                  className="transition-colors duration-200 ease-premium hover:text-white">
                  
                  Previous portfolio ↗
                </a>
              </div>
            </Reveal>
          </div>

          {/* Portrait frame — swap the placeholder for a real photograph */}
          <Reveal delay={0.08} className="lg:pt-4">
            <motion.figure
              className="relative"
              whileHover={reduced ? undefined : { y: -4 }}
              transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}>
              
              <div
                className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-accent-purple/40 via-accent-blue/20 to-transparent opacity-60"
                aria-hidden="true" />
              
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-850">
                <div
                  className="relative flex aspect-[4/5] items-center justify-center"
                  role="img"
                  aria-label="Professional portrait placeholder — awaiting photograph">
                  
                  <div className="grid-texture absolute inset-0 opacity-60" aria-hidden="true" />
                  <div className="relative flex flex-col items-center gap-3 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.03]">
                      <UserIcon className="h-5 w-5 text-mute-400" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute-400">
                      Portrait pending
                    </span>
                  </div>
                </div>
                <figcaption className="flex items-baseline justify-between border-t border-white/[0.07] px-5 py-4">
                  <span className="text-sm font-medium text-white">{profile.name}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute-400">
                    {profile.title}
                  </span>
                </figcaption>
              </div>
            </motion.figure>
          </Reveal>
        </div>
      </div>
    </section>);

}