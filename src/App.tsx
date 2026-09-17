import React from 'react';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Statement } from './components/Statement';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { WhatIBuild } from './sections/WhatIBuild';
import { SelectedWork } from './sections/SelectedWork';
import { EngineeringProjects } from './sections/EngineeringProjects';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Process } from './sections/Process';
import { Approach } from './sections/Approach';
import { Contact } from './sections/Contact';
import { useDocumentMeta } from './hooks/useDocumentMeta';
import { profile } from './data/content';

interface AppProps {
  /** Desktop-only custom cursor. Turn off for a conventional system cursor. */
  customCursor?: boolean;
}

export function App({ customCursor = true }: AppProps) {
  useDocumentMeta(
    'Nuwangi Ariyasingha — Associate Software Engineer',
    'Nuwangi Ariyasingha is an Associate Software Engineer specializing in full-stack development, modern web experiences, cloud deployment and digital solutions.',
    profile.portfolio
  );

  return (
    <div className="min-h-screen w-full bg-ink-950 font-sans text-white antialiased">
      {customCursor && <CustomCursor />}

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink-950">
        
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <WhatIBuild />
        <Statement text="Turning ideas into working software." />
        <SelectedWork />
        <EngineeringProjects />
        <Skills />
        <Experience />
        <Education />
        <Statement text="Digital products built with purpose." />
        <Process />
        <Approach />
        <Contact />
      </main>

      <Footer />
    </div>);

}