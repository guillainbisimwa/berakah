'use client';
import React from 'react';
import { MdArrowForward, MdAutoAwesome } from 'react-icons/md';
import { translations } from '../translations';
import { useApp } from '../context/AppContext';

interface CallToActionProps { language: 'fr' | 'en'; }

const CallToAction: React.FC<CallToActionProps> = ({ language }) => {
  const { navigateTo } = useApp();
  const t = translations[language].cta;

  return (
    <section className="py-20 sm:py-28 bg-gray-50/50 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-full max-w-7xl h-full">
           <div className="absolute top-12 left-12 w-72 h-72 bg-agro-lime/50 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
           <div className="absolute bottom-0 -right-8 w-72 h-72 bg-yellow-500/70 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="rounded-2xl p-8 sm:p-16 md:p-20 shadow-xl shadow-gray-200/50 border border-white/50 backdrop-blur-sm text-center relative overflow-hidden group min-h-[400px] flex items-center justify-center"
          style={{ 
            backgroundImage: 'linear-gradient(to bottom, rgba(76, 175, 47, 0.8), rgba(11, 26, 7, 0.85)), url("https://res.cloudinary.com/drsd8adkq/image/upload/v1769370970/gren-3_z0l68i.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="heading-h2 text-white mb-6">
              {t.title}
            </h2>
            
            <p className="text-body-lg text-white/70 mb-10 max-w-2xl mx-auto font-light">
              {t.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button 
                onClick={() => navigateTo('/contacts')}
                className="btn btn-lg btn-secondary hover:bg-black hover:scale-105 w-full sm:w-auto"
              >
                {t.btnPrimary}
              </button>
              <button 
                onClick={() => navigateTo('/contacts')}
                className="btn btn-lg bg-white text-agro-dark border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 w-full sm:w-auto group shadow-sm"
              >
                {language === 'fr' ? "En savoir plus" : "Learn more"} 
                <MdArrowForward className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform text-agro-lime" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
