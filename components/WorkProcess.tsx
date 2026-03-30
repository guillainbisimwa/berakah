'use client';
import React from 'react';
import { translations } from '../translations';
import { useApp } from '../context/AppContext';
import { ArrowRight } from 'lucide-react';

interface WorkProcessProps { language: 'fr' | 'en'; }

const WorkProcess: React.FC<WorkProcessProps> = ({ language }) => {
  const t = translations[language].work;
  const { navigateTo } = useApp();

  const wavePath = "M0,100 C150,100 150,200 300,200 C450,200 450,100 600,100 C750,100 750,200 900,200 C1050,200 1050,100 1200,100";
  /* Vertical: même courbes Bézier que le desktop, amplitude forte (40→260) pour un vrai volume */
  const wavePathVertical = "M40,0 C40,150 260,150 260,300 C260,450 40,450 40,600 C40,750 260,750 260,900 C260,1050 40,1050 40,1200";

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          
          {/* Top Section: Title, Subtitle, Button - Centered on Laptop */}
          <div className="text-center lg:text-center">
            <span className="text-tag text-agro-lime mb-4 block">
              {t.tag}
            </span>
            <h2 className="heading-h2 text-agro-dark mb-6">
              {t.title}
            </h2>
            <p className="text-body text-gray-500 mb-8 max-w-2xl mx-auto">
              {t.desc}
            </p>
            <button 
              onClick={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else navigateTo('/about');
              }}
              className="btn btn-lg btn-primary hover:bg-agro-dark hover:text-white mx-auto"
            >
              <span>{language === 'fr' ? 'En savoir plus' : 'Learn More'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Section: 4 Services Grid */}
          <div className="relative min-h-[500px] flex items-center">
            
            {/* SVG Wave Background - Visible on Desktop */}
            <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
                {/* Shadow Path */}
                <path 
                  d={wavePath} 
                  fill="none" 
                  stroke="rgba(0,0,0,0.05)" 
                  strokeWidth="12" 
                  className="blur-sm transform translate-y-2"
                />
                {/* Main Path */}
                <path 
                  d={wavePath} 
                  fill="none" 
                  stroke="#84cc16" // agro-lime
                  strokeWidth="4" 
                  strokeLinecap="round"
                  className="drop-shadow-md"
                />
              </svg>
            </div>

            {/* Mobile: vague verticale avec volume et courbes identiques au desktop */}
            <div className="lg:hidden absolute left-0 top-0 bottom-0 w-16 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 300 1200" preserveAspectRatio="none">
                <path
                  d={wavePathVertical}
                  fill="none"
                  stroke="rgba(0,0,0,0.08)"
                  strokeWidth="16"
                  strokeLinecap="round"
                  className="blur-[2px]"
                />
                <path
                  d={wavePathVertical}
                  fill="none"
                  stroke="#84cc16"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-md"
                />
              </svg>
            </div>

            {/* Steps Container */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 relative">
              {t.steps.map((step, idx) => {
                // Determine position relative to wave (alternating)
                const isLow = idx % 2 === 0; 
                
                return (
                  <div 
                    key={idx} 
                    className={`relative flex lg:block items-start gap-8 lg:gap-0 ${isLow ? 'lg:pt-48' : 'lg:pb-48'}`}
                  >
                    {/* Dot on the line (Desktop) */}
                    <div className={`
                      hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-md z-10
                      ${isLow ? 'top-[33%] bg-agro-dark' : 'bottom-[33%] bg-white border-agro-lime'}
                    `}></div>

                    {/* Mobile Dot sur la vague */}
                    <div className="lg:hidden absolute left-8 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-agro-lime border-2 border-white shadow-sm z-10"></div>

                    {/* Content Card */}
                    <div className="relative pt-1 pl-16 lg:pl-0">
                      {/* Big Number Background (Visible on Mobile too now) */}
                      <span className="absolute -top-8 -left-4 lg:left-0 text-8xl lg:text-9xl font-black text-gray-100/50 lg:text-gray-100/50 -z-10 select-none transition-colors group-hover:text-agro-lime/10">
                        {step.num}
                      </span>

                      <h3 className="heading-h4 text-agro-dark mb-2 lg:mb-3 relative z-10">
                        {step.title}
                      </h3>
                      <p className="text-body-sm text-gray-500 relative z-10">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
