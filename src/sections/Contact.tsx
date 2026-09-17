import React from 'react';
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { MagneticButton } from '../components/MagneticButton';
import { profile } from '../data/content';

const channels = [
{ id: 'email', label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
{ id: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, Icon: PhoneIcon },
{ id: 'github', label: 'GitHub', value: 'github.com/NuwangiMahesha', href: profile.github, Icon: GithubIcon },
{
  id: 'linkedin',
  label: 'LinkedIn',
  value: 'linkedin.com/in/nuwangi-ariyasingha',
  href: profile.linkedin,
  Icon: LinkedinIcon
}];


export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/[0.06] py-24 md:py-32">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 h-[420px] w-[560px] -translate-x-1/2 rounded-full bg-accent-purple/[0.08] blur-[130px]"
        aria-hidden="true" />
      

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 rule-accent" aria-hidden="true" />
                <span className="font-mono text-[11px] tracking-[0.2em] text-mute-400">Contact</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-[clamp(2.4rem,6vw,4.2rem)] font-semibold leading-[0.98] tracking-tightest text-white">
                Have an idea?{' '}
                <span className="text-accent-gradient">Let's build it.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-mute-300">
                Whether it's a business website, web application, e-commerce experience, booking platform
                or custom digital solution, let's turn the idea into something real.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <MagneticButton href={`mailto:${profile.email}`}>
                  Start a Conversation
                  <ArrowUpRightIcon className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton
                  variant="secondary"
                  onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                  }>
                  
                  View My Work
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <ul className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {channels.map(({ id, label, value, href, Icon }) =>
              <li key={id}>
                  <a
                  href={href}
                  {...id === 'github' || id === 'linkedin' ?
                  { target: '_blank', rel: 'noreferrer noopener' } :
                  {}}
                  data-cursor="open"
                  className="group flex items-center gap-5 py-5 transition-colors duration-200 ease-premium hover:bg-white/[0.02]">
                  
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-mute-300 transition-colors duration-200 ease-premium group-hover:border-white/30 group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-mute-400">
                        {label}
                      </span>
                      <span className="mt-1 block truncate text-[15px] text-white">{value}</span>
                    </span>
                    <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-mute-400 transition-all duration-200 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </a>
                </li>
              )}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>);

}