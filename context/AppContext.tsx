
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
  token: string | null;
  user: any;
  setAuth: (user: any, token: string) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// AppProvider component to manage global state
// Fixed: Using explicit props type instead of React.FC for better compatibility with children across TS versions
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const [currentPath, setCurrentPath] = useState('/');
  const [isChatOpen, setChatOpen] = useState(false);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [user, setUser] = useState<any>(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null);

  const setAuth = (userData: any, authToken: string) => {
    setToken(authToken);
    setUser(userData);
    localStorage.setItem('token', authToken);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigateTo('/');
  };

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
      setChatOpen,
      token,
      user,
      setAuth,
      logout
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
