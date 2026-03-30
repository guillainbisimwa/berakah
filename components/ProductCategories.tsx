'use client';
import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import { translations } from '../translations';
import { useApp } from '../context/AppContext';

interface ProductCategoriesProps { language: 'fr' | 'en'; }

const ProductCategories: React.FC<ProductCategoriesProps> = ({ language }) => {
  const { navigateTo } = useApp();
  const t = translations[language].productCategories;

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-tag text-agro-lime mb-2 block">
              {t.tag}
            </span>
            <h2 className="heading-h2 text-agro-dark">
              {t.title}
            </h2>
            <p className="mt-4 text-body text-gray-500">
              {t.desc}
            </p>
          </div>
          <button 
            onClick={() => navigateTo('/products')}
            className="btn btn-ghost text-agro-dark group"
          >
            <span>{t.viewAll}</span>
            <div className="w-8 h-8 rounded-full bg-agro-dark text-agro-lime flex items-center justify-center group-hover:bg-agro-lime group-hover:text-agro-dark transition-all">
              <MdArrowForward className="w-4 h-4 group-hover:-rotate-45 transition-transform" />
            </div>
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.categories.map((cat, idx) => (
            <div 
              key={idx} 
              onClick={() => navigateTo((cat as { path?: string }).path ?? '/products')}
              className="group cursor-pointer bg-white rounded-2xl p-6 border border-gray-100 hover:border-agro-lime/30 hover:shadow-xl hover:shadow-agro-lime/5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-agro-lime/0 to-agro-lime/0 group-hover:from-agro-lime/5 group-hover:to-transparent transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="h-32 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300 shadow-sm overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="heading-h3 text-agro-dark mb-3 group-hover:text-agro-lime transition-colors">
                  {cat.title}
                </h3>
                
                <p className="text-body-sm text-gray-500 mb-6">
                  {cat.desc}
                </p>

                <div className="flex items-center text-body-sm font-bold text-gray-400 group-hover:text-agro-dark transition-colors">
                  <span className="mr-2">Découvrir</span>
                  <MdArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
