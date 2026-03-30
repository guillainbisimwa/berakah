'use client';
import React from 'react';
import { Handshake, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface AboutCTAProps { language: 'fr' | 'en'; }

const AboutCTA: React.FC<AboutCTAProps> = ({ language }) => {
  const { navigateTo } = useApp();
  const isFr = language === 'fr';

  const handlePartner = () => {
    const message = "Bonjour Berakah Business, je souhaite collaborer avec vous en tant que partenaire/investisseur.";
    window.open(`https://wa.me/243998009996?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section 
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden relative min-h-[400px] flex items-center"
      style={{ 
        backgroundImage: 'linear-gradient(to right, rgba(76, 175, 47, 0.9), rgba(11, 26, 7, 0.85)), url("https://res.cloudinary.com/drsd8adkq/image/upload/v1769371198/gren-4_sfityd.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 sm:gap-16 relative z-10 w-full">
        <div className="max-w-2xl text-center">
          <h2 className="heading-h2 text-white mb-6">
            {isFr ? "Prêt à transformer l'avenir ?" : "Ready to transform the future?"}
          </h2>
          <p className="text-body-lg text-white/80 max-w-xl mx-auto font-light">
            {isFr 
              ? "Investisseurs, partenaires ou coopératives rurales : rejoignez notre chaîne d'approvisionnement durable et inclusive."
              : "Investors, partners, or rural cooperatives: join our sustainable and inclusive supply chain."}
          </p>
        </div>
        <button 
          onClick={() => navigateTo('/contacts')}
          className="btn btn-lg btn-secondary shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:bg-black hover:scale-105 group"
        >
          <span>{isFr ? "Collaborer avec nous" : "Partner with us"}</span>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>

      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-agro-dark/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default AboutCTA;
