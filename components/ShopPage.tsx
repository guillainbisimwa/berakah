
'use client';
import React, { useState, useEffect } from 'react';
import { Star, Plus, MessageCircle, Info, X, CheckCircle2, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { translations, getTranslatedProducts } from '../translations';
import ProductCardSkeleton from './ProductCardSkeleton';

interface ShopPageProps { language: 'fr' | 'en'; }

const WHATSAPP_NUMBER = "243998009996"; // Berakah Business DRC number

// Helper function pour encoder correctement les URLs d'images avec espaces
const encodeImageUrl = (url: string): string => {
  if (!url) return '';
  // Si c'est déjà une URL complète (http/https), on la retourne telle quelle
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  // Pour les chemins locaux, on encode l'URL complète en préservant les slashes
  // encodeURI préserve les slashes mais encode les espaces et autres caractères spéciaux
  return encodeURI(url);
};

const SKELETON_COUNT = 12;

const ShopPage: React.FC<ShopPageProps> = ({ language }) => {
  const [filter, setFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [modalImageIdx, setModalImageIdx] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [productsLoading, setProductsLoading] = useState(true);

  useEffect(() => {
    if (selectedProduct) setModalImageIdx(0);
  }, [selectedProduct]);

  useEffect(() => {
    const t = setTimeout(() => setProductsLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const promoImages = [
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1769361165/berakah-2_p3d2uv.png", // Basket
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1769361166/more_mncgam.png", // Spices
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1769361164/beraka-nobg_cfucbb.png", // Basket
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1769361164/berak-nobg_e3diut.png", // Spices
    "https://res.cloudinary.com/drsd8adkq/image/upload/v1769362049/more-img_by3nh4.png" // Teas
    // "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1200" 
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % promoImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  // Utilisation de la structure optimisée avec traductions imbriquées
  const spiceProducts = getTranslatedProducts(language);

  const categories = [
    { id: 'all', label: language === 'fr' ? 'Tout' : 'All' },
    { id: 'Tisanes', label: language === 'fr' ? 'Tisanes' : 'Teas' },
    { id: 'Farines', label: language === 'fr' ? 'Farines' : 'Flours' },
    { id: 'Poudres', label: language === 'fr' ? 'Poudres d’assaisonnement' : 'Seasoning Powders' },
    { id: 'Huiles', label: language === 'fr' ? 'Huiles' : 'Oils' },
    { id: 'Savons', label: language === 'fr' ? 'Savons' : 'Soaps' },
    { id: 'Miels', label: language === 'fr' ? 'Miels' : 'Honey' }
  ];

  const handleWhatsApp = (productName?: string) => {
    const message = productName 
      ? `Bonjour Berakah Business, je souhaite commander : ${productName}`
      : `Bonjour Berakah Business, je souhaite consulter votre catalogue LA SAVEUR.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const filteredItems = filter === 'all' 
    ? spiceProducts 
    : spiceProducts.filter((item: any) => item.category === filter);

  return (
    <div className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-24 md:pb-32 bg-white">
      <div className="max-w-[1400px] px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Header Actions */}
        

        {/* Hero Promo Section - Professional Mobile-First Design */}
          <div className="bg-agro-dark rounded-[24px] sm:rounded-[40px] mb-10 sm:mb-16 relative overflow-hidden flex flex-row items-center p-6 sm:p-12 md:p-16 text-white min-h-[200px] sm:min-h-[450px] shadow-xl">
            
            {/* Professional Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-agro-dark via-agro-dark/80 to-transparent z-0" />
            
            {/* Subtle Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-[500px] sm:h-[500px] bg-agro-lime/10 rounded-full blur-[80px] sm:blur-[120px] translate-x-1/4 -translate-y-1/4 opacity-60" />
            
            {/* Left Content Column */}
            <div className="relative z-10 w-[65%] sm:w-1/2 text-left pr-2 sm:pr-0">

              <h2 className="text-base sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-3 sm:mb-6">
                {language === 'fr' ? (
                  <>Livraison <span className="text-agro-lime">Gratuite</span> dès 200$</>
                ) : (
                  <>Free <span className="text-agro-lime">Shipping</span> on $200</>
                )}
              </h2>

              <p className="text-white/80 text-xs sm:text-lg mb-5 sm:mb-10 leading-snug sm:leading-relaxed max-w-md line-clamp-3 sm:line-clamp-none ">
                {language === 'fr' 
                  ? "Recevez l'excellence de LA SAVEUR directement chez vous. Rapide, frais et efficace." 
                  : "Experience LA SAVEUR's excellence delivered to your doorstep. Fast, fresh, and reliable."}
              </p>

              <button 
                onClick={() => handleWhatsApp()}
                className="bg-agro-lime hover:bg-white text-agro-dark font-bold py-2.5 px-5 sm:py-4 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-xs sm:text-base shadow-lg shadow-agro-lime/20"
              >
                <span>{language === 'fr' ? 'Profiter de l\'offre' : 'Shop Now'}</span>
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
                    alt={`Product ${idx}`}
                  />
                </div>
              ))}
              
              {/* Refined Indicators */}
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
        {/* Filter Controls */}
        <div className="mb-12">
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

        {/* Products Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-4 md:gap-6">
          {productsLoading
            ? Array.from({ length: SKELETON_COUNT }, (_, i) => <ProductCardSkeleton key={i} />)
            : filteredItems.map((product: any, idx: number) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg sm:rounded-xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Image Side - Edge to Edge */}
              <div className="relative aspect-square bg-gray-50 overflow-hidden">
                <img 
                  src={encodeImageUrl(product.image)} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={product.name}
                  onError={(e) => {
                    // Fallback si l'image ne charge pas
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                
                {/* Labels */}
                <div className="absolute top-1 left-1 sm:top-1.5 sm:left-1.5 flex flex-col gap-0.5 sm:gap-1">
                   {idx % 3 === 0 && <span className="bg-red-500 text-white text-[7px] sm:text-[8px] font-bold px-1 sm:px-1.5 py-0.5 rounded-sm uppercase tracking-tighter">Hot</span>}
                   {idx % 2 === 0 && <span className="bg-agro-lime text-agro-dark text-[7px] sm:text-[8px] font-bold px-1 sm:px-1.5 py-0.5 rounded-sm uppercase tracking-tighter">New</span>}
                </div>

                {/* Quick View Icon */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="bg-white/90 p-1.5 sm:p-2 rounded-full shadow-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Info className="w-3 h-3 sm:w-4 sm:h-4 text-agro-dark" />
                   </div>
                </div>
              </div>
              
              {/* Content Side - With Padding */}
              <div className="p-2 sm:p-4 grow flex flex-col">
                <h3 className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-800 line-clamp-2 min-h-8 sm:min-h-10 mb-1 sm:mb-1.5 group-hover:text-agro-lime transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-0.5 sm:space-x-1 mb-1.5 sm:mb-2">
                   <div className="flex items-center">
                     <Star className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-orange-400 fill-orange-400" />
                     <span className="text-[9px] sm:text-[10px] font-bold ml-0.5 sm:ml-1 text-gray-600">{product.rating}</span>
                   </div>
                   <span className="text-[9px] sm:text-[10px] text-gray-300">•</span>
                   <span className="text-[9px] sm:text-[10px] text-gray-400">{product.weight}</span>
                </div>

                <div className="mt-auto flex justify-between items-end">
                   <div className="flex flex-col">
                      <span className="text-xs sm:text-sm md:text-lg font-bold text-agro-dark">{product.price}</span>
                      <span className="text-[8px] sm:text-[9px] text-gray-400 line-through opacity-0 group-hover:opacity-100 transition-opacity">{(parseFloat(product.price.replace('$', '')) * 1.2).toFixed(2)}$</span>
                   </div>
                   <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsApp(product.name);
                    }}
                    className="bg-agro-dark p-1 sm:p-1.5 rounded-lg text-white hover:bg-agro-lime hover:text-agro-dark transition-colors shadow-sm"
                    title={language === 'fr' ? 'Acheter sur WhatsApp' : 'Shop on WhatsApp'}
                   >
                     <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-y-auto">
           <div 
            className="fixed inset-0 bg-agro-dark/60 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
           />
           <div className="bg-white relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden flex flex-col-reverse lg:flex-row max-h-[90vh] z-10">
             
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

             {/* Content Side - First on Mobile */}
             <div className="w-full lg:w-3/5 p-6 lg:p-10 overflow-y-auto bg-white flex-1 min-h-0">
                <div className="space-y-5">
                  <div>
                    <h2 className="heading-h3 text-agro-dark mb-2">
                      {selectedProduct.name}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3">
                       <span className="text-lg font-black text-agro-lime bg-agro-dark px-4 py-1.5 rounded-xl">{selectedProduct.price}</span>
                       <div className="flex items-center space-x-1">
                          {[1,2,3,4,5].map(i => <Star key={i} className={`w-3 h-3 ${i <= Math.floor(selectedProduct.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />)}
                          <span className="text-gray-400 text-xs font-bold ml-1">{selectedProduct.rating}</span>
                       </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-tag text-gray-400 mb-2">Description</h4>
                    <p className="text-body-sm text-gray-600 leading-relaxed">
                      {selectedProduct.desc}
                    </p>
                  </div>

                  {selectedProduct.specs && (
                    <div>
                      <h4 className="text-tag text-gray-400 mb-2">Specifications</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedProduct.specs.map((spec: string, i: number) => (
                          <div key={i} className="flex items-center space-x-2 text-agro-dark">
                            <CheckCircle2 className="w-3.5 h-3.5 text-agro-lime shrink-0" />
                            <span className="text-body-sm">{spec}</span>
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
                      <span>{language === 'fr' ? 'Commander sur WhatsApp' : 'Order on WhatsApp'}</span>
                    </button>
                  </div>
                </div>
             </div>

             {/* Image Side - Second on Mobile */}
             <div className="w-full lg:w-2/5 relative bg-gray-50 flex items-center justify-center h-[35vh] max-h-[35vh] lg:h-auto lg:max-h-[500px] lg:min-h-0 shrink-0 overflow-hidden">
               <div className="w-full h-full relative group/modal p-4 lg:p-6 flex items-center justify-center">
                 <img 
                   src={selectedProduct.gallery 
                     ? encodeImageUrl(selectedProduct.gallery[modalImageIdx]) 
                     : encodeImageUrl(selectedProduct.image.replace('w=400', 'w=1200'))}
                   className="max-w-full max-h-full w-auto h-auto object-contain"
                   alt={selectedProduct.name}
                   onError={(e) => {
                     // Fallback si l'image ne charge pas
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                   }}
                 />
                 
                 {/* Gallery Dots */}
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
           </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
