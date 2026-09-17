import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, ArrowUpRightIcon, GithubIcon } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { HeroVisual } from '../components/HeroVisual';
import { heroMeta, profile } from '../data/content';

const headline = ['Engineering digital', 'experiences that turn', 'ideas into products.'];

export function Hero() {
  const reduced = useReducedMotion();

  const line = (i: number) =>
  reduced ?
  {} :
  {
    initial: { opacity: 0, y: '0.3em' },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.06 * i, ease: [0.23, 1, 0.32, 1] as const }
  };

  const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-accent-purple/[0.08] blur-[120px]"
        aria-hidden="true" />
      

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-28">
        <div>
          <motion.div
            className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.03] px-3.5 py-1.5"
            initial={reduced ? undefined : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}>
            
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent-cyan/60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            </span>
            <span className="text-[12px] text-mute-200">
              Open to professional opportunities &amp; selected projects
            </span>
          </motion.div>

          <h1 className="mt-7 text-[clamp(2.5rem,6.2vw,4.7rem)] font-semibold leading-[0.98] tracking-tightest text-white">
            {headline.map((text, i) =>
            <span key={text} className="block overflow-hidden">
                <motion.span className="block" {...line(i)}>
                  {i === 2 ?
                <>
                      ideas into <span className="text-accent-gradient">products.</span>
                    </> :

                text
                }
                </motion.span>
              </span>
            )}
          </h1>

          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-mute-300">
            Associate Software Engineer specializing in full-stack development, modern web experiences,
            cloud deployment and practical digital solutions.
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-mute-400">
            {heroMeta.map((item, i) =>
            <li key={item} className="flex items-center gap-3">
                {i > 0 && <span className="h-3 w-[1px] bg-white/10" aria-hidden="true" />}
                {item}
              </li>
            )}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <MagneticButton onClick={() => scrollTo('projects')}>
              Explore My Work
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-0.5" />
            </MagneticButton>
            <MagneticButton variant="secondary" onClick={() => scrollTo('contact')}>
              Let's Talk
            </MagneticButton>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              data-cursor="open"
              className="group ml-1 inline-flex items-center gap-2 py-3 text-sm text-mute-300 transition-colors duration-200 ease-premium hover:text-white">
              
              <GithubIcon className="h-4 w-4" />
              View GitHub
              <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-200 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="relative lg:pl-6">
          <HeroVisual />
        </div>
      </div>
    </section>);

}