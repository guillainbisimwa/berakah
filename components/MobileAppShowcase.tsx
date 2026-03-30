'use client';
import React from 'react';
import { MdPlayArrow, MdCheckCircle } from 'react-icons/md';
import { Play, CheckCircle2, ShieldCheck, Thermometer, Droplets, Box, QrCode, Zap, MoreVertical, AlertTriangle, XCircle } from 'lucide-react';
import { translations } from '../translations';

interface MobileAppShowcaseProps {
  language: 'fr' | 'en';
}

const MobileAppShowcase: React.FC<MobileAppShowcaseProps> = ({ language }) => {
  const t = translations[language].mobileApp;

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Side */}
          <div className="space-y-8 lg:order-1 order-1">

            <h2 className="heading-h2 text-slate-900 tracking-tight">
              {t.title}
            </h2>

            <p className="text-body text-slate-500 leading-relaxed max-w-lg">
              {t.subtitle}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-agro-lime shrink-0" />
                  <span className="text-body-sm font-semibold text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
            {/* Desktop Buttons */}
            <div className="hidden lg:block pt-6">
              <p className="text-tag text-slate-400 mb-4">{t.comingSoon}</p>
              <div className="flex flex-row gap-4">
                <button className="btn btn-md bg-black text-white rounded-xl opacity-50 cursor-not-allowed">
                  <img src="https://res.cloudinary.com/drsd8adkq/image/upload/v1769376287/appstore_id63qq.png" alt="Apple" className="w-5 h-5" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold text-white/60 leading-none">Download on the</p>
                    <p className="text-sm font-bold leading-none mt-1">App Store</p>
                  </div>
                </button>
                <button className="btn btn-md bg-slate-900 text-white rounded-xl opacity-50 cursor-not-allowed">
                  <img src="https://res.cloudinary.com/drsd8adkq/image/upload/v1769376285/playstore-_nhhubb.png" alt="Android" className="w-5 h-5 invert" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold text-white/60 leading-none">GET IT ON</p>
                    <p className="text-sm font-bold leading-none mt-1">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Phone Mockup Side */}
          <div className="relative lg:order-2 order-2 flex justify-center lg:justify-end">
            {/* Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-agro-lime rounded-[3rem] -rotate-6 -z-10 opacity-20"></div>
            
            {/* Phone Frame */}
            <div className="relative z-10 w-[300px] bg-[#1a1a1a] rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden aspect-9/19">
              {/* Screen */}
              <div className="w-full h-full bg-[#121212] text-white flex flex-col p-6 pt-12 overflow-y-auto hide-scrollbar">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-lg font-black tracking-tight leading-none mb-1 text-white">BERAKAH TECH</h1>
                    <p className="text-[9px] text-agro-lime flex items-center gap-1 font-medium">
                      <span className="text-[7px]">▶</span> {language === 'fr' ? 'Suivi de Ferme à l\'Étagère' : 'Farm to Shelf Tracking'}
                    </p>
                  </div>
                  <MoreVertical className="w-4 h-4 text-gray-500" />
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center border border-white/10 overflow-hidden">
                    <img src="https://res.cloudinary.com/drsd8adkq/image/upload/v1769355439/solon_xbcgni.jpg" className="w-full h-full object-cover" alt="User" />
                  </div>
                  <p className="text-[8px] text-gray-400 font-medium">Dimanche, 25 Janvier 2026, 20:05:10 CAT</p>
                </div>

                {/* Process Card */}
                <div className="rounded-3xl bg-gradient-to-br from-[#4caf2f]/40 via-agro-dark to-agro-dark/80 p-5 border border-white/5 shadow-2xl mb-8 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-agro-lime/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                   
                   <p className="text-[8px] text-white/60 font-black uppercase mb-2 tracking-widest">{language === 'fr' ? 'PROCESSUS ACTIF' : 'ACTIVE PROCESS'}</p>
                   <h2 className="text-xl font-bold mb-6">Batch #217 - {language === 'fr' ? 'Séchage' : 'Drying'}</h2>
                   
                   <div className="flex justify-center gap-8 mb-6">
                      {/* Temp Gauge */}
                      <div className="flex flex-col items-center relative">
                        <div className="w-16 h-16 rounded-full border-2 border-white/10 flex flex-col items-center justify-center bg-black/20">
                           <Thermometer className="w-3 h-3 text-agro-lime mb-0.5" />
                           <p className="text-[7px] text-white/40 uppercase font-bold">Temp.</p>
                           <p className="text-xs font-black">35°C</p>
                        </div>
                        <svg className="absolute -inset-1 w-[72px] h-[72px] -rotate-90">
                          <circle cx="36" cy="36" r="33" fill="none" stroke="#4caf2f" strokeWidth="3" strokeDasharray="207" strokeDashoffset="50" className="opacity-80" />
                        </svg>
                      </div>

                      {/* Humid Gauge */}
                      <div className="flex flex-col items-center relative">
                        <div className="w-16 h-16 rounded-full border-2 border-white/10 flex flex-col items-center justify-center bg-black/20">
                           <Droplets className="w-3 h-3 text-blue-400 mb-0.5" />
                           <p className="text-[7px] text-white/40 uppercase font-bold">Humidity</p>
                           <p className="text-xs font-black">18%</p>
                        </div>
                        <svg className="absolute -inset-1 w-[72px] h-[72px] -rotate-90">
                          <circle cx="36" cy="36" r="33" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="207" strokeDashoffset="160" className="opacity-80" />
                        </svg>
                      </div>
                   </div>

                   <div className="space-y-1.5">
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                         <div className="bg-agro-lime h-full w-[75%] rounded-full shadow-[0_0_10px_#4caf2f]"></div>
                      </div>
                      <p className="text-center text-[9px] font-black text-white/40">75%</p>
                   </div>
                </div>

                {/* Real-time data */}
                <div className="mb-8">
                  <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-4">REAL-TIME DATA</p>
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { icon: <Thermometer className="w-4 h-4" />, label: language === 'fr' ? 'Température' : 'Temperature' },
                      { icon: <Droplets className="w-4 h-4" />, label: language === 'fr' ? 'Humidité' : 'Humidity' },
                      { icon: <Box className="w-4 h-4" />, label: language === 'fr' ? 'Poids' : 'Weight' },
                      { icon: <Zap className="w-4 h-4" />, label: language === 'fr' ? 'Airflow' : 'Airflow' }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-xl border-2 border-agro-lime/30 flex items-center justify-center text-agro-lime bg-agro-lime/5">
                          {item.icon}
                        </div>
                        <span className="text-[7px] font-bold text-gray-400 uppercase text-center">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Batch History */}
                <div className="flex-1 pb-4">
                  <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-4">BATCH HISTORY</p>
                  <div className="space-y-3">
                    {[
                      { id: '#216', name: 'Mangoes', status: 'Complété', color: 'text-agro-lime', icon: <CheckCircle2 className="w-4 h-4" /> },
                      { id: '#215', name: 'Ginger', status: 'En Pause', color: 'text-yellow-500', icon: <AlertTriangle className="w-4 h-4" />, sub: 'Alerte Humidité' },
                      { id: '#214', name: 'Annulé', status: 'Power Loss', color: 'text-red-500', icon: <XCircle className="w-4 h-4" />, sub: 'Power Loss' }
                    ].map((batch, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className={batch.color}>
                            {batch.icon}
                          </div>
                          <div>
                            <p className="text-[10px] font-black">{batch.name.includes('Annulé') ? batch.name : `Batch ${batch.id} - ${batch.name}`}</p>
                            {batch.sub && <p className="text-[8px] text-gray-500 leading-none mt-0.5">{batch.sub}</p>}
                          </div>
                        </div>
                        <span className={`text-[8px] font-black uppercase ${batch.color}`}>{batch.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="lg:hidden order-3 flex flex-col items-center pt-8">
            <p className="text-tag text-slate-400 mb-6 text-center">{t.comingSoon}</p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
              <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center justify-center gap-3 opacity-50 cursor-not-allowed transition-all w-full">
                <img src="https://res.cloudinary.com/drsd8adkq/image/upload/v1769376287/appstore_id63qq.png" alt="Apple" className="w-5 h-5" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-white/60 leading-none">Download on the</p>
                  <p className="text-sm font-bold leading-none mt-1">App Store</p>
                </div>
              </button>
              <button className="btn btn-md bg-slate-900 text-white rounded-xl opacity-50 cursor-not-allowed w-full">
                <img src="https://res.cloudinary.com/drsd8adkq/image/upload/v1769376285/playstore-_nhhubb.png" alt="Android" className="w-7 h-auto invert" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-white/60 leading-none">GET IT ON</p>
                  <p className="text-sm font-bold leading-none mt-1">Google Play</p>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileAppShowcase;
