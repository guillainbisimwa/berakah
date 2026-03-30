'use client';
import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { translations } from '../translations';

interface TeamMembersProps { language: 'fr' | 'en'; }

const TeamMembers: React.FC<TeamMembersProps> = ({ language }) => {
  const t = translations[language].team;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const teamImages = [
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1769355439/solon_xbcgni.jpg",
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1751911849/Image_d%C3%A9pos%C3%A9e_krhkfh.png",
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1751577525/735575ce-d606-41d9-ae56-3645048e311a.png",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 sm:mb-20">
          <h2 className="heading-h2 text-agro-dark mb-6">
            {t.title} <br />
            <span className="text-gray-400 font-light italic">{t.subtitle}</span>
          </h2>
          <p className="text-body text-gray-500 max-w-2xl">
            {language === 'fr' 
              ? "Une équipe d'experts passionnés par l'agriculture durable et l'innovation technologique en RDC." 
              : "A team of experts passionate about sustainable agriculture and technological innovation in DRC."}
          </p>
        </div>

        {/* Accordion Slider */}
        <div className="flex flex-col lg:flex-row h-[500px] sm:h-[600px] lg:h-[500px] gap-4 w-full">
          {t.members.map((member, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex(hoveredIndex === idx ? null : idx)} // Mobile tap support
              className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                hoveredIndex === idx ? 'lg:flex-3 flex-3' : 'lg:flex-1 flex-1'
              } ${hoveredIndex !== null && hoveredIndex !== idx ? 'lg:flex-[0.5] flex-[0.5] opacity-50' : 'opacity-100'}`}
            >
              {/* Image Background */}
              <img 
                src={teamImages[idx]} 
                alt={member.name}
                className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-transform duration-700 ${hoveredIndex === idx ? 'scale-105' : 'scale-100'}`}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-agro-dark/90 via-agro-dark/20 to-transparent opacity-60 hover:opacity-80 transition-opacity duration-300"></div>

              {/* Content */}
              <div className={`absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end h-full transition-all duration-500 ${
                hoveredIndex === idx ? 'items-start' : 'items-center lg:items-start'
              }`}>
                
                {/* Collapsed State: Vertical Text (Desktop only) */}
                <div className={`hidden lg:block absolute bottom-8 left-8 transition-opacity duration-300 ${
                  hoveredIndex === idx ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}>
                  <h3 className="heading-h3 text-white writing-mode-vertical rotate-180 tracking-widest uppercase">
                    {member.name.split(' ')[0]}
                  </h3>
                </div>

                {/* Expanded State: Full Info */}
                <div className={`transform transition-all duration-500 ${
                  hoveredIndex === idx ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 lg:translate-y-0 lg:opacity-0'
                } w-full`}>
                  <div className="flex justify-between items-end w-full">
                    <div>
                      <p className="text-tag text-agro-lime mb-2">
                        {member.role}
                      </p>
                      <h3 className="heading-h3 text-white leading-tight mb-2">
                        {member.name}
                      </h3>
                      <p className="text-gray-300 text-body-sm max-w-xs line-clamp-2">
                        {language === 'fr' 
                          ? "Expert en transformation agro-alimentaire avec 10+ ans d'expérience." 
                          : "Agro-processing expert with 10+ years of experience."}
                      </p>
                    </div>
                    <button 
                      className="bg-white/10 hover:bg-white text-white hover:text-agro-dark p-3 rounded-full backdrop-blur-md transition-all duration-300"
                      title={language === 'fr' ? 'Détails' : 'Details'}
                    >
                      <MdAdd className="w-6 h-6" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamMembers;
