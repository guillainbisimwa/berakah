'use client';
import React from 'react';
import WorkProcess from './WorkProcess';
import EcoHeroBanner from './EcoHeroBanner';
import AgroServicesGrid from './AgroServicesGrid';
import OrganicShowcase from './OrganicShowcase';
import ProductCategories from './ProductCategories';
import Features from './Features';
import Services from './Services';
import AboutCTA from './AboutCTA';

interface AboutPageProps { language: 'fr' | 'en'; }

const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
  return (
    <div className="pt-20">
      <WorkProcess language={language} />
      <EcoHeroBanner language={language} />
      <AgroServicesGrid language={language} />
      <OrganicShowcase language={language} />
      <ProductCategories language={language} />
      <Features language={language} />
      <Services language={language} />
      <AboutCTA language={language} />
    </div>
  );
};

export default AboutPage;
