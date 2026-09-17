import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { sections } from '../data/content';
import { useScrollSpy } from '../hooks/useScrollSpy';

const sectionIds = sections.map((s) => s.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`border-b transition-colors duration-300 ease-premium ${
        scrolled ? 'glass border-white/[0.07]' : 'border-transparent bg-transparent'}`
        }>
        
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
          
          <button
            type="button"
            onClick={() => go('home')}
            className="flex items-center gap-2.5 rounded-md text-left"
            data-cursor="open">
            
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] font-mono text-[11px] font-medium text-white">
              NA
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-white sm:block">Nuwangi</span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {sections.map((section) => {
              const isActive = active === section.id;
              return (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => go(section.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className="relative rounded-full px-3.5 py-2 text-[13px] text-mute-300 transition-colors duration-200 ease-premium hover:text-white"
                    data-cursor="open">
                    
                    <span className={isActive ? 'text-white' : ''}>{section.label}</span>
                    {isActive &&
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.05]"
                      transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }} />

                    }
                  </button>
                </li>);

            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go('contact')}
              className="hidden rounded-full bg-white px-4 py-2 text-[13px] font-medium text-ink-950 transition-colors duration-200 ease-premium hover:bg-mute-200 sm:block"
              data-cursor="open">
              
              Let's Talk
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white lg:hidden"
              data-cursor="open">
              
              {open ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open &&
        <motion.div
          id="mobile-menu"
          className="glass border-b border-white/[0.07] lg:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}>
          
            <ul className="mx-auto max-w-7xl px-6 py-4">
              {sections.map((section, i) =>
            <motion.li
              key={section.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: 0.04 * i, ease: [0.23, 1, 0.32, 1] }}>
              
                  <button
                type="button"
                onClick={() => go(section.id)}
                className="flex w-full items-baseline justify-between border-b border-white/[0.06] py-3.5 text-left">
                
                    <span className="text-lg font-medium tracking-tight text-white">{section.label}</span>
                    <span className="font-mono text-[10px] text-mute-400">
                      0{sections.indexOf(section) + 1}
                    </span>
                  </button>
                </motion.li>
            )}
              <li className="pt-4">
                <button
                type="button"
                onClick={() => go('contact')}
                className="w-full rounded-full bg-white px-4 py-3 text-sm font-medium text-ink-950">
                
                  Let's Talk
                </button>
              </li>
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}