'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { translations } from '../translations';
import { useApp } from '../context/AppContext';

interface AgroServicesGridProps { language: 'fr' | 'en'; }

const AgroServicesGrid: React.FC<AgroServicesGridProps> = ({ language }) => {
  const t = translations[language].miniServices;
  const { navigateTo } = useApp();
  
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 lg:mb-24 gap-6 sm:gap-8 lg:gap-10">
          <div className="max-w-3xl w-full">
            <h2 className="heading-h2 text-agro-dark">
              {t.title}
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {t.items.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg group hover:bg-gray-50 transition-all duration-500 shadow-sm border border-gray-100 relative overflow-hidden">
               <div className="mb-6 sm:mb-8 md:mb-10">
                 <div className="relative w-full h-40 sm:h-44 md:h-48 lg:h-52 rounded-xl overflow-hidden bg-gray-50">
                   <img
                     src={item.image}
                     alt={item.title}
                     loading="lazy"
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   />
                 </div>
               </div>
               <h3 className="heading-h3 text-agro-dark mb-4 sm:mb-6 md:mb-8">{item.title}</h3>
               <p className="text-body text-gray-500 mb-6 sm:mb-8 md:mb-12 font-light">{item.desc}</p>
               <button 
                 onClick={() => navigateTo((item as { path?: string }).path ?? '/shop')}
                 className="btn btn-ghost btn-md text-agro-dark group"
               >
                 <span>{t.learnMore}</span>
                 <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-3 transition-transform" />
               </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgroServicesGrid;
