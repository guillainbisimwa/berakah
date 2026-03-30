'use client';
import React, { useState, useEffect } from 'react';
import { MdMenu, MdClose, MdLanguage, MdLightMode, MdChevronRight } from 'react-icons/md';
import { translations } from '../translations';
import { useApp } from '../context/AppContext';
import { cn } from '../lib/utils';

const Navbar: React.FC = () => {
  const { language, setLanguage, currentPath, navigateTo } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t.home, path: '/' },
    { name: t.pages, path: '/about' },
    { name: t.shop, path: '/shop' },
    { name: t.products, path: '/products' },
    { name: t.portfolio, path: '/portfolio' },
    { name: t.blog, path: '/blog' },
  ];

  const isHome = currentPath === '/';
  const isTransparent = !isScrolled && isHome;
  
  const navClasses = cn(
    "fixed z-50 transition-all duration-500 ease-in-out",
    isTransparent
      ? "top-0 w-full py-6 bg-transparent"
      : "top-0 w-full py-3 bg-white/90 backdrop-blur-md"
  );

  const textClasses = cn(
    "transition-colors duration-300",
    isTransparent ? "text-white" : "text-slate-800"
  );

  return (
    <>
      <nav className={navClasses}>
        <div className="px-4 md:px-8 mx-auto max-w-7xl flex justify-between items-center h-full">
          {/* Logo Area */}
          <button onClick={() => navigateTo('/')} className="flex items-center gap-3 group z-50 relative lg:mr-4">
            <div className="relative w-10 h-10 md:w-14 md:h-14 overflow-hidden rounded-full border-2 border-agro-lime/20 group-hover:border-agro-lime transition-colors bg-white">
               <img
                src="https://res.cloudinary.com/drsd8adkq/image/upload/v1768935755/berakah-_ogo_vaqkua.png"
                alt="Berakah Logo"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <span className={cn("font-bold text-lg md:text-lg tracking-tight hidden sm:block", textClasses)}>
              BERAKAH
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.path} 
                onClick={() => navigateTo(link.path)}
                className={cn(
                  "text-sm font-medium transition-all relative group py-1",
                  textClasses,
                  currentPath === link.path ? "text-agro-lime font-bold" : "hover:text-agro-lime"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-agro-lime transition-all duration-300",
                  currentPath === link.path ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </button>
            ))}
          </div>

          {/* Actions Area (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <div className={cn(
              "flex items-center gap-1 px-2 py-1 rounded-full border",
              isTransparent ? "border-white/70 bg-white/5 text-white" : "border-slate-300 bg-slate-50 text-slate-600"
            )}>
              <MdLanguage className="w-4 h-4 opacity-70" />
              <button 
                onClick={() => setLanguage('fr')} 
                className={cn("text-xs font-bold px-1 rounded transition-colors", language === 'fr' && "text-agro-lime")}
              >FR</button>
              <span className="opacity-30 text-xs">|</span>
              <button 
                onClick={() => setLanguage('en')} 
                className={cn("text-xs font-bold px-1 rounded transition-colors", language === 'en' && "text-agro-lime")}
              >EN</button>
            </div>

            <button 
              onClick={() => navigateTo('/contacts')}
              className="btn btn-md btn-primary"
            >
              {t.getStarted}
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className={cn("lg:hidden p-2 rounded-md transition-colors", textClasses)}
            aria-label="Open Menu"
          >
            <MdMenu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Content */}
      <div className={cn(
        "fixed top-0 right-0 bottom-0 z-[1000] w-[80%] max-w-sm bg-zinc-950 shadow-2xl transition-transform duration-300 ease-out lg:hidden flex flex-col border-l border-white/10",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <span className="font-bold text-xl text-white">Menu</span>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-full text-white/70 hover:text-white transition-colors"
          >
            <MdClose className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto py-4 px-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button 
                key={link.path} 
                onClick={() => { navigateTo(link.path); setMobileMenuOpen(false); }}
                className={cn(
                  "flex items-center justify-between w-full p-4 rounded-xl text-left font-medium transition-all",
                  currentPath === link.path 
                    ? "bg-agro-lime/10 text-agro-lime" 
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                )}
              >
                {link.name}
                {currentPath === link.path && <MdChevronRight className="w-5 h-5 text-agro-lime" />}
              </button>
            ))}
          </div>
        </div>

        {/* Drawer Footer (Actions) */}
        <div className="p-5 space-y-4 border-t border-white/10">
          <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 px-4 py-3 rounded-full border border-white/10 bg-white/5 text-white w-full justify-center">
              <MdLanguage className="w-4 h-4 opacity-70" />
              <button 
                onClick={() => setLanguage('fr')} 
                className={cn("text-xs font-bold px-1 rounded transition-colors", language === 'fr' && "text-agro-lime")}
              >FR</button>
              <span className="opacity-30 text-xs">|</span>
              <button 
                onClick={() => setLanguage('en')} 
                className={cn("text-xs font-bold px-1 rounded transition-colors", language === 'en' && "text-agro-lime")}
              >EN</button>
            </div>
          </div>

          <button 
            onClick={() => { navigateTo('/contacts'); setMobileMenuOpen(false); }}
            className="btn btn-md btn-primary w-full"
          >
            {t.getStarted}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
