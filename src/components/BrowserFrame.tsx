import React from 'react';

interface BrowserFrameProps {
  url: string;
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
}

function hostOf(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

/** Chromed browser window used to present project previews. */
export function BrowserFrame({ url, children, className = '', compact = false }: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-ink-850 shadow-panel ${className}`}>
      
      <div
        className={`flex items-center gap-3 border-b border-white/[0.07] bg-ink-800/80 px-3 ${
        compact ? 'py-2' : 'py-2.5'}`
        }>
        
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-md border border-white/[0.06] bg-ink-950/60 px-2.5 py-1 font-mono text-[10px] text-mute-400">
          {hostOf(url)}
        </div>
      </div>
      {children}
    </div>);

}

interface PreviewProps {
  title: string;
  index: string;
  category: string;
  image?: string;
  className?: string;
}

/**
 * Renders a real screenshot when `image` is provided; otherwise an honest
 * placeholder surface that can be swapped for a captured screenshot later.
 */
export function ProjectPreview({ title, index, category, image, className = '' }: PreviewProps) {
  if (image) {
    return (
      <img
        src={image}
        alt={`${title} — ${category} website screenshot`}
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover object-top transition-all duration-[5000ms] ease-in-out group-hover:object-bottom group-hover:scale-[1.02] ${className}`} />);


  }

  return (
    <div
      className={`relative flex h-full w-full flex-col justify-between overflow-hidden bg-ink-900 p-5 ${className}`}
      role="img"
      aria-label={`${title} preview placeholder — awaiting screenshot`}>
      
      <div className="grid-texture absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative flex items-start justify-between">
        <span className="font-mono text-[11px] tracking-[0.2em] text-mute-400">{index}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute-400/70">
          Screenshot pending
        </span>
      </div>
      <div className="relative">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-cyan/70">{category}</p>
        <p className="mt-2 text-xl font-medium tracking-tight text-white/90">{title}</p>
      </div>
    </div>);

}