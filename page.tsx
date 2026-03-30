
'use client';
import React from 'react';
import Hero from './components/Hero';
import Partners from './components/Partners';
import AboutSection from './components/AboutSection';
import TeamMembers from './components/TeamMembers';
import MobileAppShowcase from './components/MobileAppShowcase';
import FAQ from './components/FAQ';
import AboutCTA from './components/AboutCTA';
import { useApp } from './context/AppContext';

export default function HomePage() {
  const { language } = useApp();

  return (
    <>
      <Hero language={language} />
      <Partners />
      <AboutSection language={language} />
      <TeamMembers language={language} />
      <MobileAppShowcase language={language} />
      <FAQ language={language} />
      <AboutCTA language={language} />
    </>
  );
}
