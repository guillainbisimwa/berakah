'use client';
import React, { useState, useEffect } from 'react';
import { MoveRight, ShoppingBag } from 'lucide-react';
import { translations } from '../translations';
import { useApp } from '../context/AppContext';

interface AboutSectionProps { language: 'fr' | 'en'; }

const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const { navigateTo } = useApp();
  const isFr = language === 'fr';
  const [brandImageIdx, setBrandImageIdx] = useState(0);
  const [ingredientImageIdx, setIngredientImageIdx] = useState(0);

  const brandImages = [
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1769609419/easoning-1_nfnpek.jpg", // Basket
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1769611836/cereals_pskw36.jpg", // Cereals
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1769347609/vegies-1_zyx6wd.png", // Spices
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1769609417/seasonings-0_uu9q1u.jpg",
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1769347609/vegies_ouxnmg.jpg"
  ];

  const ingredientImages = [
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1769706942/spice2_ncierf.jpg",
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1769706943/spice_emcvwr.jpg",
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1769706942/spice1_s3rs17.jpg",
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1769612196/corn_xshymz.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBrandImageIdx((prev) => (prev + 1) % brandImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [brandImages.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIngredientImageIdx((prev) => (prev + 1) % ingredientImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [ingredientImages.length]);

  const handleOrder = () => {
    const message = "Bonjour Berakah Business, je souhaite commander vos produits LA SAVEUR.";
    window.open(`https://wa.me/243998009996?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white">
      {/* --- QUI SOMMES-NOUS --- */}
      <section id="about-us" className="pt-12 sm:pt-24 pb-12 sm:pb-24 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:items-center">
          <div className="lg:w-1/2 text-left space-y-4 sm:space-y-6">
            <h2 className="text-tag text-agro-dark mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-agro-lime inline-block"></span>
              {isFr ? "Qui sommes-nous ?" : "Who are we?"}
            </h2>
            <h2 className="heading-h2 text-agro-dark mb-6 sm:mb-10">
              BERAKAH BUSINESS<span className="text-agro-lime">.</span>
            </h2>
            <p className="text-body text-slate-500 max-w-2xl">
              {isFr 
                ? "Nous sommes une entreprise agro-industrielle innovante spécialisée dans la production et la transformation durable et décentralisée, dédiée à la réduction des pertes post-récolte et au renforcement de la sécurité alimentaire en Afrique."
                : "We are an innovative agro-industrial company specializing in production and sustainable decentralized processing, dedicated to reducing post-harvest losses and strengthening food security in Africa."}
            </p>
            <p className="text-body text-slate-500 max-w-2xl">
              {isFr
                ? "Au-delà de la transformation, nous nous encourageons et accompagnons l'adoption de pratiques agricoles durables et responsables, notamment l'utilisation d'engrais organiques, la gestion durable des sols et le reboisement à travers des cultures résilientes et séquestrices de carbone."
                : "Beyond processing, we promote and support the adoption of sustainable and responsible agricultural practices, including the use of organic fertilizers, sustainable soil management and reforestation through resilient, carbon-sequestering crops."}
            </p>
            <p className="text-body text-slate-500 max-w-2xl">
              {isFr
                ? "Grâce à cette approche intégrée, BERAKAH BUSINESS place la sécurité alimentaire au cœur de son action en réduisant significativement les pertes post-récolte et en développant des chaînes de valeur agricoles durables et inclusives. L’entreprise s’engage activement dans la protection de l’environnement, le renforcement de la résilience climatique des systèmes agricoles, tout en générant un impact socio-économique durable au bénéfice des communautés rurales."
                : "Through this integrated approach, we place food security at the heart of our action by significantly reducing post-harvest losses and developing sustainable and inclusive agricultural value chains. We are actively committed to environmental protection and strengthening the climate resilience of agricultural systems, while generating a sustainable socio-economic impact for the benefit of rural communities."}
            </p>
          </div>
          <div className="lg:w-1/2 h-[250px] sm:h-[400px] md:h-[500px] relative group overflow-hidden rounded-lg">
            <img 
              src="https://res.cloudinary.com/drsd8adkq/image/upload/v1769359050/impact-2_s5tpgm.jpg" 
              className="w-full h-full object-contain rounded-lg transform group-hover:scale-105 transition-transform duration-1000" 
              alt="Agricultural Innovation"
            />
          </div>
        </div>
      </section>

      {/* --- NOTRE VISION & IMPACT --- */}
      <section 
        id="vision"
        className="py-24 sm:py-32 md:py-48 text-white relative overflow-hidden flex items-center justify-center text-center px-4 sm:px-6"
        style={{ 
          backgroundImage: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url("https://res.cloudinary.com/drsd8adkq/image/upload/v1769359050/impact_wlpojd.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10 space-y-6 sm:space-y-10">
          <h2 className="text-tag text-white mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-agro-lime inline-block"></span>
            {isFr ? "Notre Vision" : "Our Vision"}
          </h2>
          
          <h2 className="heading-h2 text-white">
            {isFr 
              ? "Bâtir une référence africaine alliant technologie et inclusion sociale."
              : "Building an African reference combining technology and social inclusion."}
          </h2>
          
          <p className="text-body-lg text-slate-300 max-w-2xl mx-auto px-2">
            {isFr
              ? "Nous visons l'extension de notre modèle pour renforcer la souveraineté alimentaire et créer des partenariats stratégiques internationaux."
              : "We aim to expand our model to strengthen food sovereignty and create international strategic partnerships."}
          </p>
          
          <div className="flex justify-center pt-4 sm:pt-8">
            <button 
              onClick={() => navigateTo('/portfolio')}
              className="btn btn-lg btn-primary bg-white text-slate-900 hover:bg-agro-lime hover:text-agro-dark shadow-2xl hover:scale-105 active:scale-95"
            >
              {isFr ? "Découvrir notre impact" : "Discover our impact"}
              <MoveRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* --- CONCEPT & SECTEURS --- */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-24">
          <h2 className="heading-h2 mb-4 sm:mb-6 uppercase">{isFr ? "Concept & Secteurs" : "Concept & Sectors"}</h2>
          <div className="w-16 h-1 bg-agro-lime mx-auto mb-6 sm:mb-8"></div>
          <p className="text-body text-slate-500">
            {isFr 
              ? "Une approche décentralisée basée sur des séchoirs solaires intelligents et une gestion digitale de la donnée."
              : "A decentralized approach based on smart solar dryers and digital data management."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 lg:gap-20">
          {[
            {  
              title: isFr ? "Séchoirs Solaires" : "Solar Dryers", 
              desc: isFr ? "Digitalisés pour garantir une qualité homogène et une réduction des pertes." : "Digitalized to ensure consistent quality and waste reduction.",
              img: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769509264/food-dry_c87v0r.png"
            },
            { 
              title: isFr ? "Plateforme Digitale" : "Digital Platform", 
              desc: isFr ? "Traçabilité et optimisation en temps réel de la chaîne de valeur." : "Traceability and real-time optimization of the value chain.",
              img: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769364336/berakah-app_emfg4l.png"
            },
            { 
              title: isFr ? "Innovation Ingrédients" : "Ingredient Innovation", 
              desc: isFr ? "Transformation en ingrédients naturels de haute qualité : poudres d'assaisonnement, tisanes fonctionnelles, farines enrichies et céréales locales… des produits conçus pour allier bien-être et plaisir du goût." : "Transformation into high-quality natural ingredients: seasoning powders, functional herbal teas, fortified flours, and local cereals… products designed to blend wellness with exceptional taste.",
              img: ingredientImages,
              isCarousel: true
            }
          ].map((item, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center">
              <div className={`order-2 sm:order-1 w-full relative overflow-hidden rounded-lg ${
                item.isCarousel ? 'h-52 sm:h-52' : 'h-52 sm:h-52'
              }`}>
                {item.isCarousel && Array.isArray(item.img) ? (
                  <>
                    {item.img.map((img, imgIdx) => (
                      <div 
                        key={imgIdx}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center justify-center rounded-lg overflow-hidden ${
                          imgIdx === ingredientImageIdx ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                        }`}
                      >
                        <img 
                          src={img} 
                          className="w-full h-full object-contain rounded-lg transform group-hover:scale-110 transition-transform duration-1000" 
                          alt={`${item.title} ${imgIdx + 1}`} 
                        />
                      </div>
                    ))}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                      {item.img.map((_, imgIdx) => (
                        <button 
                          key={imgIdx}
                          onClick={() => setIngredientImageIdx(imgIdx)}
                          title={`Image ${imgIdx + 1}`}
                          className={`h-1 rounded-full transition-all ${
                            imgIdx === ingredientImageIdx ? 'w-6 bg-agro-lime' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <img 
                    src={typeof item.img === 'string' ? item.img : item.img[0]} 
                    className="w-full h-full object-contain rounded-lg transform group-hover:scale-110 transition-transform duration-1000" 
                    alt={item.title} 
                  />
                )}
              </div>
              <div className="order-1 sm:order-2">
                <h3 className="heading-h3 mb-4 group-hover:text-agro-lime transition-colors">{item.title}</h3>
                <p className="text-body-sm text-slate-500 max-w-xs mb-8 sm:mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- LA SAVEUR BRAND --- */}
      <section className="py-20 sm:py-32 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 sm:gap-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-tag text-agro-dark mb-4 sm:mb-6 flex items-center gap-2 justify-center lg:justify-start">
              <span className="w-8 h-px bg-agro-lime inline-block"></span>
              {isFr ? "Marque Premium" : "Premium Brand"}
            </h2>
            <h2 className="heading-h2 text-agro-dark mb-6 sm:mb-10 uppercase italic">LA SAVEUR<span className="text-agro-lime">.</span></h2>
            <p className="text-body text-slate-600 mb-8 sm:mb-12 max-w-xl mx-auto lg:mx-0">
              {isFr 
                ? "Marque africaine d'ingrédients naturels valorisant les terroirs locaux. Poudres d'épices, tisanes et formulations fonctionnelles conçues pour la santé et le goût."
                : "African brand of natural ingredients valuing local terroirs. Spice powders, teas, and functional formulations designed for health and taste."}
            </p>
            <button 
              onClick={() => navigateTo('/shop')}
              className="btn btn-xl btn-secondary hover:bg-agro-lime hover:text-agro-dark shadow-xl hover:scale-105 active:scale-95 group mx-auto lg:mx-0"
            >
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              <span>{isFr ? "Commander nos produits" : "Order our products"}</span>
            </button>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {brandImages.map((img, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center justify-center rounded-lg overflow-hidden ${
                    idx === brandImageIdx ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                >
                  <img src={img} className="w-full h-full object-contain rounded-lg" alt={`Brand Image ${idx}`} />
                </div>
              ))}
              
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {brandImages.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setBrandImageIdx(idx)}
                    title={`Image ${idx + 1}`}
                    className={`h-1 rounded-full transition-all ${
                      idx === brandImageIdx ? 'w-8 bg-agro-lime' : 'w-2 bg-slate-200 hover:bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
