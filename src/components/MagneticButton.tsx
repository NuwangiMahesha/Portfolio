import React, { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

type Variant = 'primary' | 'secondary' | 'ghost';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

const base =
'group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 ease-premium';

const variants: Record<Variant, string> = {
  primary: 'bg-white text-ink-950 hover:bg-mute-200',
  secondary: 'border border-white/15 bg-white/[0.03] text-white hover:border-white/30 hover:bg-white/[0.07]',
  ghost: 'text-mute-300 hover:text-white'
};

/** Button/link with a small magnetic pull toward the pointer. */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  external = false,
  className = '',
  ariaLabel
}: MagneticButtonProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 260, damping: 22, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 260, damping: 22, mass: 0.5 });

  const handleMove = (event: React.PointerEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set(((event.clientX - rect.left) / rect.width - 0.5) * 12);
    rawY.set(((event.clientY - rect.top) / rect.height - 0.5) * 8);
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const inner =
  <motion.span
    ref={ref}
    style={{ x, y }}
    className={`${base} ${variants[variant]} ${className}`}
    onPointerMove={handleMove}
    onPointerLeave={reset}>
    
      {children}
    </motion.span>;


  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        data-cursor="open"
        {...external ? { target: '_blank', rel: 'noreferrer noopener' } : {}}
        className="inline-flex rounded-full">
        
        {inner}
      </a>);

  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} data-cursor="open" className="inline-flex rounded-full">
      {inner}
    </button>);

}