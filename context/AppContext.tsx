
'use client';
import * as React from 'react';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentPath: string;
  navigateTo: (path: string) => void;
  isChatOpen: boolean;
  setChatOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// AppProvider component to manage global state
// Fixed: Using explicit props type instead of React.FC for better compatibility with children across TS versions
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const [currentPath, setCurrentPath] = useState('/');
  const [isChatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    // Force white background always
    document.documentElement.classList.remove('dark');
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#1a3a2a';

    // Sync state with URL hash if present
    const hash = window.location.hash.replace('#', '') || '/';
    setCurrentPath(hash);

    const handlePopState = () => {
      const h = window.location.hash.replace('#', '') || '/';
      setCurrentPath(h);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    window.location.hash = path === '/' ? '' : path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider value={{ 
      language, 
      setLanguage, 
      currentPath,
      navigateTo,
      isChatOpen,
      setChatOpen
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
