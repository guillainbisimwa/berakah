'use client';
import React from 'react';
import { translations } from '../translations';
import { useApp } from '../context/AppContext';
import { ArrowRight, Leaf, Globe, Award } from 'lucide-react';

interface OrganicShowcaseProps { language: 'fr' | 'en'; }

const OrganicShowcase: React.FC<OrganicShowcaseProps> = ({ language }) => {
  const { navigateTo } = useApp();
  const t = translations[language].organic;

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-agro-lime/10 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-agro-yellow/10 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Creative Image Composition (Span 7) */}
          <div className="lg:col-span-7 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              {/* Main Large Image */}
              <div className="col-span-2 relative h-64 sm:h-80 rounded-[2rem] overflow-hidden shadow-2xl group">
                <img 
                  src="https://res.cloudinary.com/drsd8adkq/image/upload/v1770403521/farm0_e0xozm.jpg" 
                  alt="Quality Production"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Secondary Image 1 */}
              <div className="relative h-40 sm:h-56 rounded-[2rem] overflow-hidden shadow-xl group mt-8">
                <img 
                  src="https://res.cloudinary.com/drsd8adkq/image/upload/v1769612196/corn_xshymz.jpg" 
                  alt="Sustainable"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Secondary Image 2 (Offset) */}
              <div className="relative h-40 sm:h-56 rounded-[2rem] overflow-hidden shadow-xl group -mt-8">
                <img 
                  src="https://res.cloudinary.com/drsd8adkq/image/upload/v1770399878/poudres_ue3dui.jpg" 
                  alt="Community"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </div>

          {/* Right: Content (Span 5) */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="heading-h2 text-agro-dark">
              {t.title}
            </h2>

            <p className="text-body text-gray-500">
              {t.desc}
            </p>

            {/* Feature List */}
            <div className="space-y-4 pt-4">
              {[
                { icon: Globe, text: language === 'fr' ? 'Impact Régional' : 'Regional Impact' },
                { icon: Award, text: language === 'fr' ? 'Excellence Certifiée' : 'Certified Excellence' },
                { icon: Leaf, text: language === 'fr' ? '100% Durable' : '100% Sustainable' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-default">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-agro-lime group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-body-sm font-medium text-gray-700 group-hover:text-agro-dark transition-colors">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <button 
                onClick={() => {
                  navigateTo('/');
                  setTimeout(() => {
                    const el = document.getElementById('vision');
                    if (el) {
                      window.location.hash = 'vision';
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 350);
                }}
                className="btn btn-lg btn-secondary group relative overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 w-full h-full bg-agro-lime/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <div className="relative flex items-center justify-center gap-3">
                  <span>{language === 'fr' ? 'Découvrir Notre Vision' : 'Discover Our Vision'}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OrganicShowcase;
