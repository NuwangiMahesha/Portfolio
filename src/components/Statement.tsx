import React from 'react';
import { Reveal } from './Reveal';

interface StatementProps {
  text: string;
  align?: 'left' | 'center';
}

/** Small personal-brand statement band used sparingly between major sections. */
export function Statement({ text, align = 'center' }: StatementProps) {
  return (
    <div className="border-y border-white/[0.06] bg-ink-900/40">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <Reveal>
          <p
            className={`font-mono text-[11px] uppercase tracking-[0.34em] text-mute-400 ${
            align === 'center' ? 'text-center' : ''}`
            }>
            
            {text}
          </p>
        </Reveal>
      </div>
    </div>);

}