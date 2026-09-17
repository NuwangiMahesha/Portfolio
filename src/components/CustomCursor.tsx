import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

type CursorLabel = '' | 'View' | 'Open';

/**
 * Desktop-only cursor: a small dot that expands into a labelled indicator over
 * elements carrying `data-cursor="view" | "open"`.
 */
export function CustomCursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<CursorLabel>('');
  const [visible, setVisible] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { stiffness: 900, damping: 50, mass: 0.35 });
  const y = useSpring(rawY, { stiffness: 900, damping: 50, mass: 0.35 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;
    setEnabled(true);
    document.body.classList.add('cursor-custom');
    return () => document.body.classList.remove('cursor-custom');
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: PointerEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
      setVisible(true);

      const target = event.target as HTMLElement | null;
      const hit = target?.closest<HTMLElement>('[data-cursor]');
      const kind = hit?.dataset.cursor;
      setLabel(kind === 'view' ? 'View' : kind === 'open' ? 'Open' : '');
    };

    const onLeave = () => setVisible(false);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, [enabled, rawX, rawY]);

  if (!enabled || reduced) return null;

  const expanded = label !== '';

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x, y }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}>
      
      <motion.div
        className="flex items-center justify-center rounded-full border border-white/25 bg-white/5 backdrop-blur-[2px]"
        style={{ translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: expanded ? 68 : 8,
          height: expanded ? 68 : 8,
          backgroundColor: expanded ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.92)',
          borderColor: expanded ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.92)'
        }}
        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}>
        
        <AnimatePresence>
          {expanded &&
          <motion.span
            key={label}
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-white"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.14, ease: [0.23, 1, 0.32, 1] }}>
            
              {label}
            </motion.span>
          }
        </AnimatePresence>
      </motion.div>
    </motion.div>);

}