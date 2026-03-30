'use client';
import React from 'react';
import { Play, Phone, Mail } from 'lucide-react';
import { translations } from '../translations';
import { useApp } from '../context/AppContext';

interface EcoHeroBannerProps { language: 'fr' | 'en'; }

const EcoHeroBanner: React.FC<EcoHeroBannerProps> = ({ language }) => {
  const t = translations[language].ecoHero;
  const { navigateTo } = useApp();
  return (
    <section className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <video 
          src="https://www.pexels.com/download/video/7109380/" 
          className="w-full h-full object-cover brightness-50"
            autoPlay
            muted
            loop
            playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-agro-dark/40 to-agro-dark/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 sm:py-32 w-full">
        <div className="max-w-4xl space-y-8 sm:space-y-10">
          <h2 className="heading-h2 text-white tracking-tight leading-[1.1] sm:leading-[0.9]">
            {t.title}
          </h2>
          <p className="text-body-lg text-gray-300 leading-relaxed max-w-2xl">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
            <button 
              onClick={() => navigateTo('/contacts')}
              className="btn btn-xl btn-primary hover:scale-105"
            >
              {t.btn1} <span className="ml-3">→</span>
            </button>
         
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default EcoHeroBanner;
