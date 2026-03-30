'use client';
import * as React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { translations } from '../translations';
import { useApp } from '../context/AppContext';

const Footer: React.FC = () => {
  const { language, navigateTo } = useApp();
  const t = translations[language].footer;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/berakah-business/" },
    { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100063227869032&mibextid=wwXIfr&mibextid=wwXIfr" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@berakahbusiness?_r=1&_t=ZS-93LdNvvQvsm" },
    { icon: FaInstagram, href: "https://www.instagram.com/berakah_business?igsh=Z3NwYjYwMWMyc2Mx" }
  ];

  const footerLinks = {
    company: [
      { name: language === 'fr' ? 'À propos' : 'About Us', path: '/about' },
      { name: language === 'fr' ? 'Blog' : 'Blog', path: '/blog' },

    ],
    product: [
      { name: language === 'fr' ? 'Nos Produits' : 'Our Products', path: '/products' },
      { name: language === 'fr' ? 'Matériel' : 'Equipment', path: '/products' },
      { name: language === 'fr' ? 'Services' : 'Services', path: '/#services' },
    ],
    
  };

  return (
    <footer className="bg-black text-gray-400 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Newsletter (Optional idea, keeping it simple for now) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <button onClick={() => navigateTo('/')} className="flex items-center gap-3 group">
               <div className="relative w-12 h-12 overflow-hidden rounded-full bg-white border border-white/10 p-2 group-hover:bg-agro-lime/10 group-hover:border-agro-lime/30 transition-all duration-300">
                 <img
                  src="https://res.cloudinary.com/drsd8adkq/image/upload/v1768935755/berakah-_ogo_vaqkua.png"
                  alt="Berakah Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-2xl text-white tracking-tight group-hover:text-agro-lime transition-colors">
                  BERAKAH
                </span>
                <span className="text-xs font-medium text-agro-lime tracking-widest uppercase">
                  Business
                </span>
              </div>
            </button>
            <p className="text-xs md:text-sm leading-relaxed max-w-sm text-gray-400">
              {t.desc}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-950 text-gray-400 hover:bg-agro-lime hover:text-agro-dark transition-all duration-300 border border-white/5 hover:border-agro-lime hover:-translate-y-1"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Links Columns (Span 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            
            {/* Company */}
            <div>
              <h4 className="heading-h4 text-white mb-6">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link, i) => (
                  <li key={i}>
                    <button onClick={() => navigateTo(link.path)} className="text-body-sm hover:text-agro-lime transition-colors text-left flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-agro-lime/0 group-hover:bg-agro-lime transition-all"></span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product */}
            <div>
              <h4 className="heading-h4 text-white mb-6">Product</h4>
              <ul className="space-y-4">
                {footerLinks.product.map((link, i) => (
                  <li key={i}>
                    <button onClick={() => navigateTo(link.path)} className="text-body-sm hover:text-agro-lime transition-colors text-left flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-agro-lime/0 group-hover:bg-agro-lime transition-all"></span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="heading-h4 text-white mb-6">Contact</h4>
              <ul className="space-y-0 md:space-y-4">
                <li>
                  <a href="mailto:contact@berakah.cd" className="flex items-center gap-3 group">
                    <div className="mt-1 w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center group-hover:bg-agro-lime group-hover:text-agro-dark transition-colors flex-shrink-0">
                      <MdEmail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs md:text-sm text-gray-300 group-hover:text-white transition-colors">berakahbusiness8@gmail.com</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="tel:+243998009996" className="flex items-center gap-3 group">
                    <div className="mt-1 w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center group-hover:bg-agro-lime group-hover:text-agro-dark transition-colors flex-shrink-0">
                      <MdPhone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs md:text-sm text-gray-300 group-hover:text-white transition-colors">+243 99 800 9996</span>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 group">
                    <div className="mt-1 w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center group-hover:bg-agro-lime group-hover:text-agro-dark transition-colors flex-shrink-0">
                      <MdLocationOn className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-300 group-hover:text-white transition-colors md:text-sm">Lubumbashi, Haut-Katanga, RDC</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 text-xs md:text-sm text-gray-500 lg:text-center">
          <p>© {currentYear} Berakah Business. {t.rights}</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
