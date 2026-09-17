import { useEffect } from 'react';
import { useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/**
 * Normalised pointer position (-0.5 → 0.5) relative to the window, spring-smoothed.
 * Returns static zeroed values when the user prefers reduced motion.
 */
export function usePointerParallax() {
  const reduced = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 90, damping: 20, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 90, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (event: PointerEvent) => {
      rawX.set(event.clientX / window.innerWidth - 0.5);
      rawY.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [rawX, rawY, reduced]);

  return { x, y, reduced: Boolean(reduced) };
}