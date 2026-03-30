
'use client';
import React, { useState, useEffect } from 'react';
import { Star, Plus, Info, MessageCircle, X, CheckCircle2, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { translations, getTranslatedEquipmentProducts } from '../translations';
import ProductCardSkeleton from './ProductCardSkeleton';

interface ProductsPageProps { language: 'fr' | 'en'; }

const WHATSAPP_NUMBER = "243998009996";

const SKELETON_COUNT = 12;

const ProductsPage: React.FC<ProductsPageProps> = ({ language }) => {
  const t = translations[language].productsPage;
  const equipmentProducts = getTranslatedEquipmentProducts(language);
  const [filter, setFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [modalImageIdx, setModalImageIdx] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [productsLoading, setProductsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setProductsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const promoImages = [
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1769509264/food-dry_c87v0r.png",
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1770404454/angrais-5l_heyrhc.png",
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1769351097/tools_qjagjg.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % promoImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (selectedProduct) setModalImageIdx(0);
  }, [selectedProduct]);

  const categories = [
    { id: 'all', label: t.filters.all },
    { id: 'tools', label: t.filters.tools },
    { id: 'seeds', label: t.filters.seeds },
    { id: 'fertilizers', label: t.filters.fertilizers },
    { id: 'dryers', label: t.filters.dryers },
  ];

  const handleWhatsApp = (productName?: string) => {
    const message = productName 
      ? `Bonjour Berakah Business, je souhaite obtenir un devis pour : ${productName}`
      : `Bonjour Berakah Business, je souhaite consulter votre catalogue d'équipements.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const filteredItems = filter === 'all'
    ? equipmentProducts
    : equipmentProducts.filter((item: any) => item.category === filter);

  const getProductImage = (item: any) => {
    if (item.image) return item.image;
    const category = item.category?.toLowerCase() || '';
    const name = item.name?.toLowerCase() || '';
    if (category === 'dryers' || name.includes('séchoir') || name.includes('dryer')) return "https://res.cloudinary.com/drsd8adkq/image/upload/v1769509264/food-dry_c87v0r.png";
    if (category === 'fertilizers' || name.includes('fertilizer')) return "https://res.cloudinary.com/drsd8adkq/image/upload/v1770404454/angrais-5l_heyrhc.png";
    if (category === 'seeds' || name.includes('seed')) return "https://res.cloudinary.com/drsd8adkq/image/upload/v1769351094/seed_g0gqxv.png";
    return "https://res.cloudinary.com/drsd8adkq/image/upload/v1769351097/tools_qjagjg.png";
  };

  return (
    <div className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-24 md:pb-32 bg-white">
      <div className="max-w-[1400px] px-4 sm:px-6 lg:px-8 mx-auto">
        
        
        {/* Hero Promo Section - Aligned with LA SAVEUR shop banner */}
        <div className="bg-agro-dark rounded-[24px] sm:rounded-[40px] mb-10 sm:mb-16 relative overflow-hidden flex flex-row items-center p-6 sm:p-12 md:p-16 text-white min-h-[200px] sm:min-h-[450px] shadow-xl">
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-agro-dark via-agro-dark/80 to-transparent z-0" />
          {/* Subtle background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-[500px] sm:h-[500px] bg-agro-lime/10 rounded-full blur-[80px] sm:blur-[120px] translate-x-1/4 -translate-y-1/4 opacity-60" />

          {/* Left Content Column */}
          <div className="relative z-10 w-[65%] sm:w-1/2 text-left pr-2 sm:pr-0">
            <h2 className="text-base sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-3 sm:mb-6">
              {language === 'fr' ? (
                <>Obtenez la <span className="text-agro-lime">livraison gratuite</span> dès 200$ d'achat</>
              ) : (
                <>Get <span className="text-agro-lime">free delivery</span> on $200</>
              )}
            </h2>
            <p className="text-white/80 text-xs sm:text-lg mb-5 sm:mb-10 leading-snug sm:leading-relaxed max-w-md line-clamp-3 sm:line-clamp-none">
              {language === 'fr'
                ? "De la technologie de séchage BERAKAHTech aux semences sélectionnées, nous équipons les agriculteurs visionnaires."
                : "From BERAKAHTech drying technology to selected seeds, we equip visionary farmers."}
            </p>
            <button
              onClick={() => handleWhatsApp()}
              className="bg-agro-lime hover:bg-white text-agro-dark font-bold py-2.5 px-5 sm:py-4 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-xs sm:text-base shadow-lg shadow-agro-lime/20"
            >
              <span>{language === 'fr' ? 'Détails' : 'Learn More'}</span>
              <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Right Image Column */}
          <div className="relative z-10 w-[35%] sm:w-1/2 flex justify-end items-center h-40 sm:h-[450px]">
            {promoImages.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-end ${
                  idx === currentImage ? 'opacity-100 translate-x-0 scale-100 rotate-0' : 'opacity-0 translate-x-10 scale-90 rotate-3'
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                  alt={`Promo ${idx}`}
                />
              </div>
            ))}
            {/* Refined indicators */}
            <div className="absolute bottom-0 right-0 flex space-x-1.5 sm:space-x-3 p-2">
              {promoImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === currentImage ? 'bg-agro-lime w-6 sm:w-10' : 'bg-white/20 w-2 sm:w-3'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex overflow-x-auto pb-4 sm:pb-0 scrollbar-hide gap-2 sm:flex-wrap lg:justify-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`btn btn-sm whitespace-nowrap shrink-0 ${
                  filter === cat.id 
                  ? 'btn-secondary border-agro-dark' 
                  : 'bg-white text-gray-600 border border-gray-100 hover:border-agro-dark'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-4 md:gap-6">
          {productsLoading
            ? Array.from({ length: SKELETON_COUNT }, (_, i) => <ProductCardSkeleton key={i} />)
            : filteredItems.map((item, idx) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col"
              onClick={() => setSelectedProduct(item)}
            >
              {/* Image Side - Edge to Edge */}
              <div className="relative aspect-square bg-gray-50 overflow-hidden">
                <img 
                  src={getProductImage(item)} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={item.name}
                />
                
                {/* Quick View Icon */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="bg-white/90 p-2 rounded-full shadow-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Info className="w-4 h-4 text-agro-dark" />
                   </div>
                </div>
              </div>
              
              {/* Content Side - With Padding */}
              <div className="p-2.5 sm:p-4 grow flex flex-col">
                <h3 className="text-xs sm:text-sm font-medium text-gray-800 line-clamp-2 min-h-10 mb-1.5 group-hover:text-agro-lime transition-colors">
                  {item.name}
                </h3>
                
                <div className="flex items-center space-x-1 mb-2">
                   <div className="flex items-center">
                     <Star className="w-2.5 h-2.5 text-orange-400 fill-orange-400" />
                     <span className="text-[10px] font-bold ml-1 text-gray-600">4.8</span>
                   </div>
                   <span className="text-[10px] text-gray-300">•</span>
                   <span className="text-[10px] text-gray-400">120+ sold</span>
                </div>

                <div className="mt-auto flex justify-between items-end">
                   <div className="flex flex-col">
                      <span className="text-sm sm:text-lg font-bold text-agro-dark">{item.price}</span>
                      <span className="text-[9px] text-gray-400 line-through opacity-0 group-hover:opacity-100 transition-opacity">{(parseFloat(item.price.replace('$', '')) * 1.2).toFixed(2)}$</span>
                   </div>
                   <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsApp(item.name);
                    }}
                    className="bg-agro-dark p-1.5 rounded-lg text-white hover:bg-agro-lime hover:text-agro-dark transition-colors shadow-sm"
                    title={language === 'fr' ? 'Contacter sur WhatsApp' : 'Contact on WhatsApp'}
                   >
                     <Plus className="w-4 h-4" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-y-auto">
           <div 
            className="fixed inset-0 bg-agro-dark/60 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
           />
           <div className="bg-white relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh] z-10">
             
             {/* Close Button */}
             <button 
               onClick={(e) => {
                 e.stopPropagation();
                 setSelectedProduct(null);
               }}
               className="absolute top-4 right-4 z-50 p-2 bg-white/80 backdrop-blur-md rounded-full text-agro-dark hover:bg-white transition-colors shadow-lg"
               title={language === 'fr' ? 'Fermer' : 'Close'}
             >
               <X className="w-6 h-6" />
             </button>

             {/* Image Side */}
            <div className="lg:w-1/2 relative bg-gray-50 flex items-center justify-center min-h-[300px] lg:min-h-full">
              <div className="w-full h-full relative group/modal">
                <img 
                  src={selectedProduct.gallery ? selectedProduct.gallery[modalImageIdx] : getProductImage(selectedProduct)}
                  className="w-full h-full object-contain lg:object-cover"
                  alt={selectedProduct.name}
                />
                 
                 {/* Swipe / Navigation dots for gallery */}
                 {selectedProduct.gallery && selectedProduct.gallery.length > 1 && (
                   <>
                     <div className="absolute inset-y-0 left-0 flex items-center px-2 z-20">
                       <button
                         onClick={() => setModalImageIdx((prev: number) => (prev === 0 ? selectedProduct.gallery.length - 1 : prev - 1))}
                         className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-agro-dark hover:bg-white transition-all shadow-lg"
                         title={language === 'fr' ? 'Précédent' : 'Previous'}
                       >
                         <ChevronLeft className="w-5 h-5" />
                       </button>
                     </div>
                     <div className="absolute inset-y-0 right-0 flex items-center px-2 z-20">
                       <button
                         onClick={() => setModalImageIdx((prev: number) => (prev === selectedProduct.gallery.length - 1 ? 0 : prev + 1))}
                         className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-agro-dark hover:bg-white transition-all shadow-lg"
                         title={language === 'fr' ? 'Suivant' : 'Next'}
                       >
                         <ChevronRight className="w-5 h-5" />
                       </button>
                     </div>
                     <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                       {selectedProduct.gallery.map((_: any, idx: number) => (
                         <button
                           key={idx}
                           onClick={() => setModalImageIdx(idx)}
                           className={`w-2 h-2 rounded-full transition-all ${idx === modalImageIdx ? 'bg-agro-lime w-4' : 'bg-agro-dark/20 hover:bg-agro-dark/40'}`}
                           title={`Image ${idx + 1}`}
                         />
                       ))}
                     </div>
                   </>
                 )}
               </div>

               <div className="absolute top-4 left-4">
                  <span className="bg-agro-lime text-agro-dark px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">
                    {selectedProduct.category}
                  </span>
               </div>
             </div>

             {/* Content Side */}
             <div className="lg:w-1/2 p-6 lg:p-10 overflow-y-auto bg-white">
                <div className="space-y-5">
                  <div>
                    <h2 className="heading-h3 text-agro-dark mb-2">
                      {selectedProduct.name}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3">
                       <span className="text-lg font-black text-agro-lime bg-agro-dark px-4 py-1.5 rounded-xl">{selectedProduct.price}</span>
                       <div className="flex items-center space-x-1">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                          <span className="text-gray-400 text-xs font-bold ml-1">4.8</span>
                       </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Description</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {selectedProduct.desc}
                    </p>
                  </div>

                  {selectedProduct.specs && (
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Specifications</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedProduct.specs.map((spec: string, i: number) => (
                          <div key={i} className="flex items-center space-x-2 text-agro-dark">
                            <CheckCircle2 className="w-3.5 h-3.5 text-agro-lime shrink-0" />
                            <span className="text-[11px]">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={() => handleWhatsApp(selectedProduct.name)}
                      className="btn btn-md btn-secondary grow rounded-xl"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{language === 'fr' ? 'Devis sur WhatsApp' : 'Get Quote on WhatsApp'}</span>
                    </button>
                  </div>
                </div>
             </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
