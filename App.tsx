
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import WorkProcess from './components/WorkProcess';
import TeamMembers from './components/TeamMembers';
import EcoHeroBanner from './components/EcoHeroBanner';
import AgroServicesGrid from './components/AgroServicesGrid';
import OrganicShowcase from './components/OrganicShowcase';
import CallToAction from './components/CallToAction';
import MobileAppShowcase from './components/MobileAppShowcase';
import AIAdvisor from './components/AIAdvisor';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import PortfolioPage from './components/PortfolioPage';
import ShopPage from './components/ShopPage';
import ContactsPage from './components/ContactsPage';
import { translations } from './translations';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const t = translations[language];

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  // Force white background always
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#1a3a2a';
  }, []);

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <Hero language={language} />
            <WorkProcess language={language} />
            <TeamMembers language={language} />
            <EcoHeroBanner language={language} />
            <AgroServicesGrid language={language} />
            <OrganicShowcase language={language} />
            <Features language={language} />
            <Services language={language} />
            <MobileAppShowcase language={language} />
            <CallToAction language={language} />
          </>
        );
      case 'pages':
        return <AboutPage language={language} />;
      case 'blog':
        return <BlogPage language={language} />;
      case 'portfolio':
        return <PortfolioPage language={language} />;
      case 'shop':
        return <ShopPage language={language} />;
      case 'contacts':
        return <ContactsPage language={language} />;
      default:
        return <Hero language={language} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <div className="bg-white text-[#1a3a2a] transition-colors duration-500">
        <Navbar />
        <main className="flex-grow">
          {renderContent()}
        </main>
        <Footer />
        <AIAdvisor language={language} />
        <BackToTop />
      </div>
    </div>
  );
};

export default App;
