import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { TechEcosystem } from '../components/TechEcosystem';
import { skillCategories } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          eyebrow="Skills"
          title="A working technology ecosystem."
          description="The languages, platforms and services I build and deploy with day to day." />
        

        <div className="mt-16 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">
          <div className="space-y-10">
            {skillCategories.map((category, i) =>
            <Reveal key={category.id} delay={0.05 * i}>
                <div className="border-t border-white/[0.08] pt-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-medium tracking-tight text-white">{category.label}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute-400">
                      {category.skills.length}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13px] text-mute-400">{category.caption}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) =>
                  <li
                    key={skill}
                    className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2.5 py-1.5 text-[13px] text-mute-200 transition-colors duration-200 ease-premium hover:border-white/20 hover:text-white">
                    
                        {skill}
                      </li>
                  )}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>

          <Reveal delay={0.08} className="pb-10">
            <TechEcosystem />
          </Reveal>
        </div>
      </div>
    </section>);

}