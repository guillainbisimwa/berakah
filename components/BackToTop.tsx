import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useApp } from '../context/AppContext';

const BackToTop: React.FC = () => {
  const { isChatOpen } = useApp();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible || isChatOpen) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="btn btn-sm btn-primary fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-[90] p-3 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-agro-lime focus-visible:ring-offset-2 group"
    >
      <ChevronUp className="w-6 h-6 text-agro-dark transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
};

export default BackToTop;
