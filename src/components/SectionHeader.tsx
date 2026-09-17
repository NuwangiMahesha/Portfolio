import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className = ''
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`${isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'} ${className}`}>
      <Reveal>
        <div className={`flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}>
          <span className="h-[1px] w-8 rule-accent" aria-hidden="true" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-mute-400">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.02] tracking-tightest text-white">
          {title}
        </h2>
      </Reveal>
      {description &&
      <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mute-300 md:text-[17px]">
            {description}
          </p>
        </Reveal>
      }
    </div>);

}