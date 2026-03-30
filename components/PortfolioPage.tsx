
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioPageProps {
  language: 'fr' | 'en';
}

const getProjects = (lang: string) => [
  {
    title: lang === 'fr' ? "Révolution de la Chaîne de Valeur des Épices" : "Spice Value Chain Revolution",
    impact: lang === 'fr' ? "-90% de pertes post-récolte" : "-90% Post-Harvest Losses",
    category: lang === 'fr' ? "Innovation Technologique" : "Technological Innovation",
    images: [
      "/berakah-gallery/1769287548993.jpg",
      "/berakah-gallery/1769287605060.jpg",
      "/berakah-gallery/1769287613377.jpg"
    ],
    desc: lang === 'fr' 
      ? "L'intégration de nos séchoirs intelligents BERAKAHTech a transformé la gestion des surplus. En stabilisant les paramètres de séchage via le monitoring digital, nous avons permis aux producteurs de transformer leurs pertes en produits premium exportables."
      : "The integration of our BERAKAHTech smart dryers has transformed surplus management. By stabilizing drying parameters through digital monitoring, we've enabled producers to turn their losses into exportable premium products.",
    points: lang === 'fr' 
      ? ["Zéro additifs chimiques", "Conservation longue durée", "Qualité industrielle", "Traçabilité numérique"]
      : ["Zero chemical additives", "Long-term preservation", "Industrial quality", "Digital traceability"]
  },
  {
    title: lang === 'fr' ? "Programme d'Inclusion Apicole" : "Beekeeping Inclusion Program",
    impact: lang === 'fr' ? "+150% de revenus pour les producteurs" : "+150% Income for Producers",
    category: lang === 'fr' ? "Inclusion Économique" : "Economic Inclusion",
    images: [
      "/berakah-gallery/1769287753091.jpg",
      "/berakah-gallery/1769287743768.jpg",
      "/berakah-gallery/1769287736703.jpg"
    ],
    desc: lang === 'fr'
      ? "Nous avons structuré une chaîne d'approvisionnement éthique qui garantit une rémunération juste. En fournissant des outils de collecte modernes et un accès direct aux marchés urbains, nous avons supprimé les intermédiaires non productifs."
      : "We've structured an ethical supply chain that guarantees fair compensation. By providing modern collection tools and direct access to urban markets, we've eliminated unproductive intermediaries.",
    points: lang === 'fr' 
      ? ["Rémunération équitable", "Protection de la biodiversité", "Accès direct au marché", "Formation technique"]
      : ["Fair compensation", "Biodiversity protection", "Direct market access", "Technical training"]
  },
  {
    title: lang === 'fr' ? "Transformation Nutritionnelle Décentralisée" : "Decentralized Nutritional Processing",
    impact: lang === 'fr' ? "80% des emplois occupés par des femmes" : "80% of Jobs Held by Women",
    category: lang === 'fr' ? "Impact Social & Genre" : "Social & Gender Impact",
    images: [
      "/berakah-gallery/1769287650337.jpg",
      "/berakah-gallery/1769287618894.jpg",
      "/berakah-gallery/1769287572565.jpg"
    ],
    desc: lang === 'fr'
      ? "Nos unités de transformation décentralisées rapprochent l'industrie des champs. Cela permet non seulement de lutter contre la malnutrition locale mais aussi de créer des emplois durables là où ils sont le plus nécessaires."
      : "Our decentralized processing units bring industry closer to the fields. This not only fights local malnutrition but also creates sustainable jobs where they are needed most.",
    points: lang === 'fr' 
      ? ["Autonomisation des femmes", "Nutrition fortifiée", "Emplois locaux", "Économie circulaire"]
      : ["Women empowerment", "Fortified nutrition", "Local jobs", "Circular economy"]
  }
];

const galleryPhotos = [

  { url: "/berakah-gallery/1769287643633.jpg", title: "Logistique" },
  { url: "/berakah-gallery/1769287645785.jpg", title: "Distribution" },
  { url: "/berakah-gallery/1769287647809.jpg", title: "Marché" },
  { url: "/berakah-gallery/1769287650337.jpg", title: "Communauté" },
  { url: "/berakah-gallery/1769287652826.jpg", title: "Avenir" },
  { url: "/berakah-gallery/1769287673118.jpg", title: "Écosystème" },
  { url: "/berakah-gallery/1769287680090.jpg", title: "Rigueur" },
  { url: "/berakah-gallery/1769287683559.jpg", title: "Standards" },
  { url: "/berakah-gallery/1769287686891.jpg", title: "Contrôle" },
  { url: "/berakah-gallery/1769287689711.jpg", title: "Traçabilité" },
  { url: "/berakah-gallery/1769287692499.jpg", title: "Authenticité" },
  { url: "/berakah-gallery/1769287736703.jpg", title: "Patrimoine" },
  { url: "/berakah-gallery/1769287740191.jpg", title: "Terroir" },
  { url: "/berakah-gallery/1769287743768.jpg", title: "Richesse" },
  { url: "/berakah-gallery/1769287746637.jpg", title: "Nature" },
  { url: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770403521/farm-1_e5kqba.jpg", title: "Communauté" },
  { url: "/berakah-gallery/1769287623738.jpg", title: "Partenariat" },
  { url: "/berakah-gallery/1769287627439.jpg", title: "Croissance" },
  { url: "/berakah-gallery/1769287630686.jpg", title: "Durabilité" },
  { url: "/berakah-gallery/1769287540891.jpg", title: "Impact Terrain" },
  { url: "/berakah-gallery/1769287544043.jpg", title: "Production Locale" },
  { url: "/berakah-gallery/1769287546570.jpg", title: "Transformation Durable" },
  { url: "/berakah-gallery/1769287548993.jpg", title: "Séchage Intelligent" },
  { url: "/berakah-gallery/1769287551301.jpg", title: "Qualité Premium" },
  { url: "/berakah-gallery/1769287556828.jpg", title: "Expertise Agricole" },
  { url: "/berakah-gallery/1769287559561.jpg", title: "Récolte Fraîche" },
  { url: "/berakah-gallery/1769287563295.jpg", title: "Chaîne de Valeur" },
  { url: "/berakah-gallery/1769287566368.jpg", title: "Innovation Rurale" },
  { url: "/berakah-gallery/1769287572565.jpg", title: "Impact Social" },
  { url: "/berakah-gallery/1769287575474.jpg", title: "Développement Local" },
  { url: "/berakah-gallery/1769287579900.jpg", title: "Savoir-faire" },
  { url: "/berakah-gallery/1769287605060.jpg", title: "Technologie" },
  { url: "/berakah-gallery/1769287610304.jpg", title: "Immersion" },
  { url: "/berakah-gallery/1769287613377.jpg", title: "Processus" },
  { url: "/berakah-gallery/1769287616212.jpg", title: "Excellence" },
  { url: "/berakah-gallery/1769287618894.jpg", title: "Engagement" },
  { url: "/berakah-gallery/1769287621404.jpg", title: "Vision" },
  { url: "/berakah-gallery/1769287753091.jpg", title: "Pureté" },
  { url: "/berakah-gallery/1769287761027.jpg", title: "Soin" },
  { url: "/berakah-gallery/1769287868523.jpg", title: "Berakah Business" }
];

const ProjectCard: React.FC<{ project: any; language: string; reverse?: boolean }> = ({ project, language, reverse }) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const nextImg = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
    }, [project.images.length]);

    const prevImg = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-stretch group`}>
            {/* Image */}
            <div className="w-full lg:w-[48%] overflow-hidden rounded-xl relative aspect-[4/3] bg-gray-100 flex-shrink-0">
                {project.images.map((img: string, idx: number) => (
                    <img
                        key={idx}
                        src={img}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${idx === currentImgIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'}`}
                        alt=""
                    />
                ))}
                <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button type="button" onClick={prevImg} className="p-2.5 bg-white/90 text-agro-dark rounded-full shadow-md hover:bg-agro-lime hover:text-agro-dark transition-colors" aria-label={language === 'fr' ? 'Précédent' : 'Previous'}>
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button type="button" onClick={() => nextImg()} className="p-2.5 bg-white/90 text-agro-dark rounded-full shadow-md hover:bg-agro-lime hover:text-agro-dark transition-colors" aria-label={language === 'fr' ? 'Suivant' : 'Next'}>
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-[52%] flex flex-col justify-center py-2">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-agro-dark leading-tight mb-4">
                    {project.title}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
                    {project.desc}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                    {project.points.map((point: string, i: number) => (
                        <li key={i} className="flex items-center gap-2.5 text-gray-700 text-sm">
                            <span className="w-1 h-1 bg-agro-lime rounded-full shrink-0" />
                            {point}
                        </li>
                    ))}
                </ul>
                <p className="text-sm font-semibold text-agro-dark">
                    {project.impact}
                </p>
            </div>
        </div>
    );
};

const CountingNumber = ({ value, duration = 2000 }: { value: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);

  // Parse the value more robustly: extract number, prefix, and suffix
  // Handles cases like "-90%", "+10T", "2k", etc.
  const match = value.match(/^([^\d]*)([\d.]+)([^\d]*)$/);
  const prefix = match ? match[1] : '';
  const numberPart = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // If it's a small number, maybe keep decimals, but for integers floor it
      const currentCount = progress * numberPart;
      setCount(numberPart % 1 === 0 ? Math.floor(currentCount) : Number(currentCount.toFixed(1)));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, numberPart, duration]);

  return <span ref={countRef}>{prefix}{count}{suffix}</span>;
};

const PortfolioPage: React.FC<PortfolioPageProps> = ({ language }) => {
  const projects = getProjects(language);

  return (
    <div className="bg-white selection:bg-agro-lime selection:text-agro-dark overflow-x-hidden">
      
      {/* HERO SECTION - COMPACT DESIGN WITH BG IMAGE */}
      <section className="relative min-h-[400px] sm:min-h-[500px] flex items-center overflow-hidden pt-32 pb-20 sm:py-32 md:py-40 bg-agro-dark">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/drsd8adkq/image/upload/v1769369775/green-1_uococa.jpg" 
            alt="Impact Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-agro-dark/80 via-agro-dark/40 to-agro-dark/80" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-agro-lime/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-agro-lime/5 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center">
            
            {/* Text Content */}
            <div className="animate-in slide-in-from-bottom duration-700 fade-in flex flex-col items-center">
              <h1 className="heading-h1 text-white mb-6 uppercase">
                {language === 'fr' ? (
                  <>
                    L'Impact qui change le Futur. 
                  </>
                ) : (
                  <>
                    Impact shaping the Future.
                  </>
                )}
              </h1>
              
              <p className="text-body-lg text-gray-200 max-w-2xl leading-relaxed font-light">
                {language === 'fr' 
                  ? "Nous ne transformons pas seulement des produits, nous redéfinissons la souveraineté alimentaire de l'Afrique par une industrialisation décentralisée et technologique." 
                  : "We don't just process products; we redefine Africa's food sovereignty through decentralized, technology-driven industrialization."}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* IMPACT STATS SECTION */}
      <section className="bg-white py-16 sm:py-24 border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
            <span className="text-tag text-agro-dark flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-agro-lime inline-block"></span>
              {language === 'fr' ? 'Notre Impact en Chiffres' : 'Our Impact in Numbers'}
            </span>
            <h2 className="heading-h2 text-slate-900 uppercase">
              {language === 'fr' ? 'Une croissance portée par l\'innovation' : 'Growth driven by innovation'}
            </h2>
            <p className="text-body text-slate-500">
              {language === 'fr' 
                ? "Nous mesurons notre succès par l'autonomisation des communautés rurales et l'efficacité technologique."
                : "We measure our success through the empowerment of rural communities and technological efficiency."}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-1 sm:gap-12 lg:gap-24 items-start max-w-full overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3 group">
                <div className="space-y-0.5 sm:space-y-1">
                  <h4 className="text-2xl sm:text-5xl lg:text-7xl font-black text-agro-dark tracking-tighter">
                    <CountingNumber value="-90%" />
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {language === 'fr' ? 'Pertes Réduites' : 'Reduced Losses'}
                  </p>
                </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3 group">
                <div className="space-y-0.5 sm:space-y-1">
                  <h4 className="text-2xl sm:text-5xl lg:text-7xl font-black text-agro-dark tracking-tighter">
                    <CountingNumber value="+10T" />
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {language === 'fr' ? 'Capacité Industrielle' : 'Industrial Capacity'}
                  </p>
                </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3 group">
                <div className="space-y-0.5 sm:space-y-1">
                  <h4 className="text-2xl sm:text-5xl lg:text-7xl font-black text-agro-dark tracking-tighter">
                    <CountingNumber value="+300" />
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {language === 'fr' ? 'Producteurs Impactés' : 'Impacted Farmers'}
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pb-16 lg:pb-24">
        {/* NARRATIVE SECTION: THE CHALLENGE & SOLUTION */}
        <section className="grid lg:grid-cols-2 gap-12 lg:gap-32 mb-16 lg:mb-24 items-start py-12 lg:py-16">
          <div className="space-y-10 lg:space-y-12">
            <div className="space-y-4 lg:space-y-6">
              <h2 className="heading-h2 text-agro-dark uppercase">
                {language === 'fr' ? "Une Vision pour le Futur." : "A Vision for the Future."}
              </h2>
              <p className="text-body text-gray-500">
                {language === 'fr' 
                  ? "Face à l'ampleur des pertes post-récolte qui freinent le développement rural, BERAKAH BUSINESS déploie une infrastructure de transformation agile, connectée et respectueuse des écosystèmes."
                  : "Facing the scale of post-harvest losses that hinder rural development, BERAKAH BUSINESS deploys an agile, connected, and ecosystem-friendly processing infrastructure."}
              </p>
            </div>

            <div className="space-y-8 lg:space-y-10">
              {[
                { 
                  title: language === 'fr' ? "Industrie Connectée" : "Connected Industry",
                  desc: language === 'fr' ? "Monitoring digital en temps réel pour une qualité d'exportation garantie." : "Real-time digital monitoring for guaranteed export quality."
                },
                { 
                  title: language === 'fr' ? "Économie Circulaire" : "Circular Economy",
                  desc: language === 'fr' ? "Valorisation intégrale de la ressource, éliminant tout gaspillage organique." : "Integral resource valorization, eliminating all organic waste."
                },
                { 
                  title: language === 'fr' ? "Impact Data-Driven" : "Data-Driven Impact",
                  desc: language === 'fr' ? "Chaque tonne transformée est tracée, mesurée et certifiée durable." : "Every ton processed is tracked, measured, and certified sustainable."
                }
              ].map((item, i) => (
                <div key={i} className="space-y-1 lg:space-y-2">
                  <h4 className="heading-h4 text-agro-dark flex items-center gap-3">
                    <span className="w-6 lg:w-8 h-px bg-agro-lime" />
                    {item.title}
                  </h4>
                  <p className="text-body text-gray-500 leading-relaxed pl-9 lg:pl-11">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative pt-12 lg:pt-0">
            <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/drsd8adkq/image/upload/v1770403521/farm-1_e5kqba.jpg" 
                className="w-full h-full object-cover" 
                alt="Impact Illustration" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-agro-dark/40 to-transparent" />
            </div>
            {/* Minimalist Floating Badge */}
            {/* <div className="absolute -bottom-6 -left-4 lg:-bottom-8 lg:-left-8 bg-agro-lime p-6 lg:p-8 rounded-sm shadow-xl">
              <span className="text-agro-dark font-black text-3xl lg:text-5xl block mb-1">100%</span>
              <p className="text-tag text-agro-dark/70 leading-tight">
                {language === 'fr' ? "Énergie Propre" : "Clean Energy"}
              </p>
            </div> */}
          </div>
        </section>

        {/* Nos Piliers */}
        <section className="mb-20 lg:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-agro-dark tracking-tight mb-3">
              {language === 'fr' ? "Nos Piliers" : "Our Pillars"}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              {language === 'fr'
                ? "L'équilibre entre l'excellence technologique et l'engagement communautaire."
                : "The balance between technological excellence and community engagement."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: language === 'fr' ? "Énergie Propre" : "Clean Energy",
                desc: language === 'fr' ? "Nos unités solaires évitent l'émission de centaines de tonnes de CO2, protégeant nos écosystèmes fragiles." : "Our solar units prevent the emission of hundreds of tons of CO2, protecting our fragile ecosystems."
              },
              {
                title: language === 'fr' ? "Prospérité Rurale" : "Rural Prosperity",
                desc: language === 'fr' ? "Nous créons une valeur économique directe au cœur des zones de production, inversant l'exode rural." : "We create direct economic value in the heart of production areas, reversing rural exodus."
              },
              {
                title: language === 'fr' ? "Inclusion Radicale" : "Radical Inclusion",
                desc: language === 'fr' ? "En privilégiant l'entrepreneuriat des femmes et des jeunes, nous bâtissons un modèle social plus résilient." : "By prioritizing women's and youth entrepreneurship, we build a more resilient social model."
              }
            ].map((pillar, i) => (
              <div
                key={i}
                className="p-6 lg:p-8 bg-white border border-gray-100 rounded-xl hover:border-agro-lime/30 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-agro-dark mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CASE STUDIES - Preuves de Succès */}
        <section className="mb-20 lg:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-agro-dark tracking-tight mb-3">
              {language === 'fr' ? "Preuves de Succès" : "Success Stories"}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              {language === 'fr'
                ? "Découvrez comment nos déploiements technologiques transforment les chaînes de valeur."
                : "Discover how our technology deployments are transforming value chains."}
            </p>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {projects.map((project, idx) => (
              <article
                key={idx}
                className="relative border-b border-gray-100 pb-20 lg:pb-28 last:border-b-0 last:pb-0"
              >
                <ProjectCard
                  project={project}
                  language={language}
                  reverse={idx % 2 === 1}
                />
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* STATIC GALLERY */}
      <section className="mb-16 lg:mb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-agro-dark tracking-tight">
            {language === 'fr' ? "Nos Réalisations" : "Our Work"}
          </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
            {galleryPhotos.map((photo, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg bg-gray-100 group">
                <img
                  src={photo.url}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* RECOGNITION & TRUST */}
        <section className="text-center mb-16 lg:mb-24 py-12 lg:py-20 bg-gray-50 rounded-sm relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="heading-h2 text-agro-dark mb-8 lg:mb-12 tracking-tight uppercase">Une Excellence Reconnue</h2>
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 text-left mt-8 lg:mt-12">
              <div className="space-y-3 lg:space-y-4 p-6 lg:p-8 bg-white rounded-sm shadow-lg border border-gray-100 transform hover:-translate-y-1 lg:hover:-translate-y-2 transition-transform duration-500">
                <div className="w-10 h-px bg-agro-lime mb-2" />
                <h4 className="heading-h4 text-agro-dark uppercase">Innovators Sprint Up</h4>
                <p className="text-body text-gray-500 italic leading-relaxed">"BERAKAH BUSINESS représente l'avant-garde de l'industrialisation verte en Afrique, alliant tech de pointe et impact social réel."</p>
              </div>
              <div className="space-y-3 lg:space-y-4 p-6 lg:p-8 bg-white rounded-sm shadow-lg border border-gray-100 transform hover:-translate-y-1 lg:hover:-translate-y-2 transition-transform duration-500">
                <div className="w-10 h-px bg-agro-lime mb-2" />
                <h4 className="heading-h4 text-agro-dark uppercase">Agriculture Émergente</h4>
                <p className="text-body text-gray-500 italic leading-relaxed">"Leur modèle de séchage intelligent est une réponse concrète et scalable au gaspillage alimentaire continental."</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL COMMUNITY CALL */}
        <div 
          className="p-10 lg:p-16 rounded-2xl relative overflow-hidden mb-16 lg:mb-24 min-h-[400px] flex items-center"
          style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(76, 175, 47, 0.9), rgba(11, 26, 7, 0.8)), url("https://res.cloudinary.com/drsd8adkq/image/upload/v1769370969/gren-1_iryhpq.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute top-0 right-0 w-[60%] h-full bg-white/10 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-12 text-left w-full">
            <div className="max-w-2xl">
              <h2 className="heading-h2 text-white mb-4 lg:mb-6 tracking-tight leading-tight uppercase">
                {language === 'fr' ? "Bâtissons l'Héritage." : "Build the Legacy."}
              </h2>
              <p className="text-body text-white/80 leading-relaxed font-medium">
                {language === 'fr' 
                  ? "Rejoignez-nous pour construire une agro-industrie souveraine, intelligente et durable. Chaque tonne transformée est un pas vers une Afrique plus forte." 
                  : "Join us in building a sovereign, smart, and sustainable agro-industry. Every ton processed is a step toward a stronger Africa."}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button 
                className="btn btn-lg btn-secondary hover:bg-white hover:text-black group whitespace-nowrap uppercase tracking-widest"
                title={language === 'fr' ? 'Devenir Partenaire' : 'Become a Partner'}
              >
                {language === 'fr' ? "Devenez Partenaire" : "Become a Partner"}
              </button>
              <button 
                className="btn btn-lg bg-agro-dark/10 backdrop-blur-md border-2 border-agro-dark text-agro-dark hover:bg-agro-dark hover:text-white whitespace-nowrap uppercase tracking-widest"
                title={language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
              >
                {language === 'fr' ? "Contactez-Nous" : "Contact Us"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
