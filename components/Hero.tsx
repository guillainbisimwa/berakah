'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { MdArrowOutward, MdStar, MdChevronLeft, MdChevronRight} from 'react-icons/md';
import { translations } from '../translations';
import { useApp } from '../context/AppContext';

interface HeroProps {
  language: 'fr' | 'en';
}

const heroImages = [
  "https://res.cloudinary.com/drsd8adkq/image/upload/v1769369774/dark-green_whgycr.jpg", // African farm landscape
  "https://res.cloudinary.com/drsd8adkq/image/upload/v1769369775/green-1_uococa.jpg"  // Processing
];

const Hero: React.FC<HeroProps> = ({ language }) => {
  const { navigateTo } = useApp();
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const t = translations[language].hero;

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextImage, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextImage]);

  // Pause autoplay on interaction
  const handleInteraction = () => setIsAutoPlaying(false);

  return (
    <section className="relative min-h-dvh min-h-[600px] flex items-center overflow-hidden rounded-2xl pt-32 sm:pt-40 md:pt-44">
      
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 bg-agro-dark">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out overflow-hidden rounded-2xl ${
              currentImage === idx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img} 
              alt={`Slide ${idx + 1}`}
              className={`w-full h-full object-cover transition-transform duration-10000 ease-linear ${
                currentImage === idx ? 'scale-110' : 'scale-100'
              }`}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-agro-dark/90 via-agro-dark/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-agro-dark/80 via-transparent to-transparent" />
          </div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-12 sm:py-16 md:py-20 w-full min-h-[calc(100dvh-8rem)] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center gap-10 sm:gap-12 md:gap-14">
          
          {/* Text Content */}
          <div className="animate-in slide-in-from-bottom duration-700 fade-in flex flex-col items-center">
            <h1 className="heading-h1 text-white mb-6 sm:mb-8">
              {t.title1}
              <span className="text-agro-lime italic relative inline-block">
                {t.title2}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-agro-lime/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> <br />
              {t.title3}
            </h1>
            
            <p className="text-body-lg text-gray-200 mb-8 sm:mb-10 max-w-2xl font-light px-2">
              {t.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('about-us');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-md btn-primary hover:scale-105 group w-full sm:w-auto"
              >
                {t.btn1} <MdArrowOutward className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigateTo('/#services')}
                className="btn btn-md btn-outline hidden sm:inline-flex group backdrop-blur-sm text-white border-white/50 hover:border-white hover:bg-white/10"
              >
                <span>{t.btn2}</span>
              </button>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-6 pt-8 sm:pt-10 md:pt-12 border-t border-white/10 justify-center w-full sm:w-auto flex-shrink-0">
              <div className="flex -space-x-4">
                {[
                  "https://res.cloudinary.com/drsd8adkq/image/upload/v1769264109/enable_p7dqge.png",
                  "https://res.cloudinary.com/drsd8adkq/image/upload/v1769264331/Pasted_image_sl0otk.png",
                  "https://res.cloudinary.com/drsd8adkq/image/upload/v1769265296/Pasted_image_8_ba9y0z.png",
                  "https://res.cloudinary.com/drsd8adkq/image/upload/v1769264244/Pasted_image_2_yhidzw.png"
                ].map((logo, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-agro-dark overflow-hidden bg-white p-1.5">
                    <img 
                      src={logo}
                      alt={`Partner ${i + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-agro-dark bg-agro-lime flex items-center justify-center text-agro-dark font-bold text-xs">
                  +10
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-1 mb-1">
                  {[1,2,3,4,5].map(i => <MdStar key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-white/80 text-body-sm font-medium">
                  {language === 'fr' ? "+10 Partenaires & Producteurs" : "+10 Partners & Producers"}
                </p>
            </div>
          </div>

          {/* Navigation Controls (Desktop) - Absolute positioning */}
          <div className="hidden lg:flex absolute inset-y-0 left-8 items-center z-30">
             <button 
                onClick={() => { prevImage(); handleInteraction(); }}
                className="w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-agro-lime hover:text-agro-dark hover:border-agro-lime transition-all duration-300 group"
                aria-label="Previous Slide"
              >
                <MdChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
              </button>
          </div>
          
          <div className="hidden lg:flex absolute inset-y-0 right-8 items-center z-30">
              <button 
                onClick={() => { nextImage(); handleInteraction(); }}
                className="w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-agro-lime hover:text-agro-dark hover:border-agro-lime transition-all duration-300 group"
                aria-label="Next Slide"
              >
                <MdChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </button>
          </div>

        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {heroImages.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => { setCurrentImage(idx); handleInteraction(); }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentImage === idx ? 'w-12 bg-agro-lime' : 'w-2 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
