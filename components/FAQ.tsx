'use client';
import React, { useState } from 'react';
import { MdAdd, MdRemove, MdMail } from 'react-icons/md';
import { translations } from '../translations';
import { useApp } from '../context/AppContext';

interface FAQProps { language: 'fr' | 'en'; }

const FAQ: React.FC<FAQProps> = ({ language }) => {
  const { navigateTo } = useApp();
  const t = translations[language].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Header & Contact Card */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="heading-h2 text-slate-900 mb-4">
                {t.title}
              </h2>
              <p className="text-body text-slate-500">
                {t.subtitle}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h4 className="heading-h4 text-slate-900 mb-2">{t.stillHaveQuestions}</h4>
              <p className="text-body-sm text-slate-500 mb-6">
                {t.contactUsDesc}
              </p>
              <button 
                onClick={() => navigateTo('/contacts')}
                className="btn btn-md btn-secondary w-full"
              >
                {t.contactBtn}
              </button>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {t.items.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-2xl transition-all duration-300 ${
                    openIndex === idx ? 'border-gray-200 bg-white shadow-sm' : 'border-transparent bg-transparent hover:bg-gray-50'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-agro-lime focus-visible:ring-inset rounded-2xl"
                  >
                    <span className={`text-body font-bold transition-colors ${openIndex === idx ? 'text-agro-dark' : 'text-slate-700'}`}>
                      {item.q}
                    </span>
                    <div className={`p-2 rounded-full transition-colors ${openIndex === idx ? 'bg-agro-lime text-agro-dark' : 'bg-gray-100 text-gray-500'}`}>
                      {openIndex === idx ? <MdRemove className="w-4 h-4" /> : <MdAdd className="w-4 h-4" />}
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 pt-0 text-body-sm text-slate-500">
                      {item.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
