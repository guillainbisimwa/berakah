'use client';
import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    { name: "Partner 5", logo: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769264244/Pasted_image_2_yhidzw.png" },
    { name: "Partner 4", logo: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769264109/enable_p7dqge.png" },
    { name: "Partner 1", logo: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769335888/Pasted_image_11_i8wryy.png" },
    { name: "Partner 3", logo: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769265296/Pasted_image_8_ba9y0z.png" },
    { name: "Partner 5", logo: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769264331/Pasted_image_sl0otk.png" },
    { name: "Partner 6", logo: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769264245/Pasted_image_3_nhp9td.png" },
    { name: "Partner 7", logo: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769264705/Pasted_image_7_b1u0cl.png" },
    { name: "Partner 8", logo: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770458650/anapi_ywzdmz.png" },
    { name: "Partner 8", logo: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770458651/iita_yvl60p.webp" },
    { name: "Partner 8", logo: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770480966/lubahub_xrvwzc.jpg" },
    { name: "Partner 9", logo: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769337163/1stop_ptczc6.png" },
    { name: "Partner 10", logo: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769337161/recheio_xgz2yi.png" },
    { name: "Partner 12", logo: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769337161/sk_whurhl.png" },
    { name: "Partner 13", logo: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769338458/assek_e2yhhu.png" },
    { name: "Partner 13", logo: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769334226/Pasted_image_2_m6msh5.png" },
    { name: "Partner 14", logo: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769337162/hp_jxxe3d.png" }
  ];

  // Duplicate the array to create a seamless infinite scroll effect
  const marqueePartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden my-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <h2 className="heading-h2 text-slate-900">Nos Partenaires</h2>
          <p className="text-body-sm text-slate-500 mt-1">Ils nous font confiance pour transformer l'agriculture</p>
        </div>
      </div>
        
      <div className="relative w-full flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {marqueePartners.map((partner, idx) => (
            <div key={idx} className="mx-8 sm:mx-12 md:mx-16 flex items-center justify-center min-w-[100px] sm:min-w-[120px]">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-16 md:h-24 w-auto object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Add custom animation style for marquee if not in tailwind config */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;
