import React, { useMemo, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { projectFilters, projects } from '../data/projects';
import type { Project, ProjectScale } from '../types';

const spanByScale: Record<ProjectScale, string> = {
  hero: 'md:col-span-12',
  large: 'md:col-span-7',
  medium: 'md:col-span-5',
  small: 'md:col-span-4'
};

const heightByScale: Record<ProjectScale, string> = {
  hero: 'h-64 md:h-[26rem]',
  large: 'h-56 md:h-80',
  medium: 'h-52 md:h-72',
  small: 'h-48 md:h-56'
};

export function SelectedWork() {
  const [filter, setFilter] = useState<string>('All');
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () => filter === 'All' ? projects : projects.filter((p) => p.filters.includes(filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          eyebrow="Featured Work"
          title="Selected Work"
          description="Digital experiences, applications and solutions I've designed and developed." />
        

        <Reveal delay={0.08}>
          <div
            className="mt-12 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects by category">
            
            {projectFilters.map((item) => {
              const isActive = filter === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  aria-pressed={isActive}
                  data-cursor="open"
                  className={`relative rounded-full px-4 py-2 text-[13px] transition-colors duration-200 ease-premium ${
                  isActive ? 'text-ink-950' : 'text-mute-300 hover:text-white'}`
                  }>
                  
                  {isActive &&
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white"
                    transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }} />

                  }
                  <span
                    className={`absolute inset-0 -z-20 rounded-full border ${
                    isActive ? 'border-transparent' : 'border-white/[0.09]'}`
                    }
                    aria-hidden="true" />
                  
                  {item}
                </button>);

            })}
          </div>
        </Reveal>

        <LayoutGroup>
          <motion.div layout className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12">
            <AnimatePresence mode="popLayout">
              {visible.map((project) =>
              <motion.div
                layout
                key={project.id}
                className={spanByScale[project.scale]}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}>
                
                  <ProjectCard
                  project={project}
                  onOpen={setActive}
                  heightClass={heightByScale[project.scale]} />
                
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {visible.length === 0 &&
        <p className="mt-16 border border-dashed border-white/10 p-10 text-center text-sm text-mute-400">
            No projects in this category yet.
          </p>
        }
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>);

}