'use client';
import React from 'react';
import { translations } from '../translations';
import { useApp } from '../context/AppContext';
import { MdArrowForward, MdCheckCircle } from 'react-icons/md';

interface FeaturesProps {
  language: 'fr' | 'en';
}

const Features: React.FC<FeaturesProps> = ({ language }) => {
  const t = translations[language].features;
  const { navigateTo } = useApp();
  
  return (
    <section className="bg-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Images Grid */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6 mt-12 sm:mt-16">
                <div className="bg-agro-lime rounded-2xl p-6 sm:p-8 shadow-xl transform hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-4xl sm:text-5xl font-bold text-agro-dark mb-2">+10T</h3>
                  <p className="text-sm font-bold text-agro-dark/70 uppercase tracking-widest">
                    {language === 'fr' ? "Tonnes Transformées" : "Tons Processed"}
                  </p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop" 
                  alt="Agriculture" 
                  className="rounded-2xl w-full h-48 sm:h-64 object-cover shadow-lg hover:shadow-xl transition-shadow duration-500"
                />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <img 
                  src="https://res.cloudinary.com/drsd8adkq/image/upload/v1770403521/farm-1_e5kqba.jpg" 
                  alt="Farming" 
                  className="rounded-2xl w-full h-48 sm:h-64 object-cover shadow-lg hover:shadow-xl transition-shadow duration-500"
                />
                <div className="bg-agro-dark rounded-2xl p-6 sm:p-8 shadow-xl transform hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2">300+</h3>
                  <p className="text-sm font-bold text-agro-lime uppercase tracking-widest">
                    {language === 'fr' ? "Producteurs Actifs" : "Active Producers"}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] max-h-[500px] bg-agro-lime/20 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-widest mb-6">
                {t.tag}
              </span>
            <h2 className="heading-h2 text-agro-dark leading-tight">
              {t.title}
            </h2>
            </div>
            
            <p className="text-body text-gray-500">
              {t.desc}
            </p>

            <div className="space-y-4">
              {[
                language === 'fr' ? "Innovation Technologique" : "Technological Innovation",
                language === 'fr' ? "Support Communautaire" : "Community Support",
                language === 'fr' ? "Croissance Durable" : "Sustainable Growth"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <MdCheckCircle className="w-5 h-5 text-agro-lime shrink-0" />
                  <span className="text-body-sm font-medium text-agro-dark">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button 
                onClick={() => navigateTo('/products')}
                className="btn btn-lg btn-secondary hover:bg-agro-lime hover:text-agro-dark group"
              >
                <span>{t.btn}</span>
                <MdArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
