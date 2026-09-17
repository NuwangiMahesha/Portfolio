import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'li' | 'section' | 'article';
}

const motionElements = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
  article: motion.article
} as const;

/** Scroll-triggered entrance. Short, ease-out, and disabled under reduced motion. */
export function Reveal({ children, delay = 0, y = 18, className, as = 'div' }: RevealProps) {
  const reduced = useReducedMotion();
  const Component = motionElements[as];

  if (reduced) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px -10% 0px' }}
      transition={{ duration: 0.28, delay, ease: [0.23, 1, 0.32, 1] }}>
      
      {children}
    </Component>);

}