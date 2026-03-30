'use client';
import React from 'react';
import { MdAgriculture, MdWaterDrop, MdShowChart, MdArrowForward } from 'react-icons/md';
import { translations } from '../translations';
import { useApp } from '../context/AppContext';

interface ServicesProps { language: 'fr' | 'en'; }

const Services: React.FC<ServicesProps> = ({ language }) => {
  const t = translations[language].services;
  const { navigateTo } = useApp();

  const services = [
    {
      icon: <MdAgriculture className="w-8 h-8" />,
      title: t.s1.title,
      description: t.s1.desc
    },
    {
      icon: <MdWaterDrop className="w-8 h-8" />,
      title: t.s2.title,
      description: t.s2.desc
    },
    {
      icon: <MdShowChart className="w-8 h-8" />,
      title: t.s3.title,
      description: t.s3.desc
    }
  ];

  return (
    <section id="services" className="bg-gray-50/50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-tag text-gray-600 mb-6 inline-block">
            {t.tag}
          </span>
          <h2 className="heading-h2 text-agro-dark mb-6">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-agro-lime mx-auto rounded-full"></div>
        </div>

        {/* Featured Service (Large Card) */}
        <div className="relative rounded-xl overflow-hidden mb-12 group">
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-50" 
              alt="Field"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-agro-dark/90 via-agro-dark/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-end justify-between gap-8 min-h-[400px] md:min-h-[500px]">
            <div className="max-w-2xl text-white">
              <h2 className="heading-h2 text-white mb-6">
                {t.featuredTitle}
              </h2>
              <p className="text-body-lg font-light">
                {t.featuredDesc}
              </p>
            </div>
            <button 
              onClick={() => navigateTo('/products')}
              className="btn btn-lg btn-primary hover:bg-white hover:text-agro-dark group/btn"
            >
              <span>{t.discover}</span>
              <MdArrowForward className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 text-agro-lime flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="heading-h4 text-agro-dark mb-4 group-hover:text-agro-lime transition-colors">{service.title}</h4>
              <p className="text-body-sm text-gray-500 mb-6">{service.description}</p>
              <button 
                type="button"
                onClick={() => navigateTo('/shop')}
                className="inline-flex items-center text-body-sm font-bold text-agro-dark hover:text-agro-lime transition-colors group/link"
              >
                {t.learnMore} 
                <MdArrowForward className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
