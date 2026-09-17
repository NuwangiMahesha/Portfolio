import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { profile } from '../data/content';

const links = [
{ id: 'about', label: 'About' },
{ id: 'experience', label: 'Experience' },
{ id: 'skills', label: 'Skills' },
{ id: 'projects', label: 'Projects' },
{ id: 'contact', label: 'Contact' }];


const socials = [
{ id: 'github', label: 'GitHub', href: profile.github, Icon: GithubIcon, external: true },
{ id: 'linkedin', label: 'LinkedIn', href: profile.linkedin, Icon: LinkedinIcon, external: true },
{ id: 'email', label: 'Email', href: `mailto:${profile.email}`, Icon: MailIcon, external: false }];


export function Footer() {
  const go = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <footer className="border-t border-white/[0.06] bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_auto]">
          <div>
            <p className="text-[clamp(1.35rem,3vw,1.9rem)] font-semibold uppercase tracking-tight text-white">
              Nuwangi Ariyasingha
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mute-400">
              {profile.title}
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-mute-400">
              Design. Engineer. Deploy.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-y-2.5 sm:grid-cols-1">
              {links.map((link) =>
              <li key={link.id}>
                  <button
                  type="button"
                  onClick={() => go(link.id)}
                  data-cursor="open"
                  className="text-sm text-mute-300 transition-colors duration-200 ease-premium hover:text-white">
                  
                    {link.label}
                  </button>
                </li>
              )}
            </ul>
          </nav>

          <ul className="flex items-start gap-2.5">
            {socials.map(({ id, label, href, Icon, external }) =>
            <li key={id}>
                <a
                href={href}
                aria-label={label}
                data-cursor="open"
                {...external ? { target: '_blank', rel: 'noreferrer noopener' } : {}}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mute-300 transition-colors duration-200 ease-premium hover:border-white/30 hover:text-white">
                
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            )}
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-mute-400">
            © 2026 Nuwangi Ariyasingha. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-mute-400/70">
            Built for people. Engineered for performance.
          </p>
        </div>
      </div>
    </footer>);

}