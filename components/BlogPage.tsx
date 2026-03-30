'use client';
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface BlogPageProps { language: 'fr' | 'en'; }

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
}

export const getPosts = (lang: string): BlogPost[] => [
  {
    id: '1',
    title: lang === 'fr' ? "BERAKAH BUSINESS parmi les 5 meilleurs pitchs L-Impact Saison 2 à Lubumbashi" : "BERAKAH BUSINESS among the Top 5 Pitches L-Impact Season 2 in Lubumbashi",
    excerpt: lang === 'fr' ? "Berakah Business, portée par l'entrepreneure dynamique Solange Elvirah, se distingue dans l'écosystème entrepreneurial de Lubumbashi et fait partie des 5 meilleurs pitchs du programme L-Impact." : "Berakah Business, led by dynamic entrepreneur Solange Elvirah, stands out in Lubumbashi's entrepreneurial ecosystem and is among the top 5 pitches in the L-Impact program.",
    content: lang === 'fr' 
      ? "Berakah Business est cette entreprise portée par une femme entrepreneur dynamique au nom de Solange Elvirah qui œuvre dans l'agroalimentaire pour valoriser davantage les produits du terroir. Cette entreprise a de plus en plus de l'influence dans l'écosystème entrepreneurial de Lubumbashi et les différents prix engrangés n'en sont que la preuve. Elle fait partie des entreprises qui ont obtenu divers appuis et soutiens pour son émergence.\n\nParticipant à plusieurs foires, salons, colloques, etc. pour faire connaitre ses produits ; sa promotrice est parfois invitée à intervenir dans plusieurs évènements pour témoigner de son parcours et inspirer les autres entrepreneurs, en particulier les femmes. Active sur les réseaux sociaux parmi lesquelles TikTok où l'entreprise se déploie quotidiennement à faire connaitre ses produits.\n\nActuellement, Berakah Business propose du thé à base des épices divers répondant à divers besoins digestifs de ses consommateurs ; des épices en poudre ; du miel ; de la farine de sorgho, des produits capillaires ; du savon ; tous ces produits en général distribués, sous la marque La Saveur, sont bien présents dans plusieurs points de vente de la ville de Lubumbashi, Bukavu, Kolwezi, Kinshasa, etc.\n\nCe n'est que normal que cette entreprise ait été plébiscitée parmi les 5 meilleurs pitchs pour le récent programme L-Impact ; un programme d'incubation de 6 mois qui renforce les capacités des entrepreneurs pour mieux les professionnaliser.\n\nBerakah Business, La Saveur ainsi que sa promotrice ne peuvent que continuer à se déployer davantage pour plus d'impact au sein du secteur entrepreneurial et la SADEK-GIE ne peut que leur souhaiter un franc succès.\n\nLa Synergie d'Appui au Développement de l'Entrepreneuriat au Kongo en sigle SADEK–GIE/ RDC, est un Groupement d'intérêt Economique, un réseau d'accompagnement des entrepreneurs de toute catégorie initié pour contribuer à la croissance économique et la création d'emplois en République Démocratique du Congo à travers les entrepreneurs aspirants ou en activités : hommes, femmes, jeunes, etc. dans les pays de la zone SADC ; ce, depuis 2016 selon les expériences des entrepreneurs de divers ressorts et backgrounds.\n\nSource: https://www.sadek-rdc.com/2024/07/08/berakah-business-parmi-les-5-meilleurs-pitchs-l-impact-saison-2-a-lubumbashi/"
      : "Berakah Business is this company led by a dynamic woman entrepreneur named Solange Elvirah who works in agri-food to further enhance local products. This company has an increasing influence in Lubumbashi's entrepreneurial ecosystem, and the various awards won are proof of this. It is among the companies that have received various support and backing for its emergence.\n\nParticipating in several fairs, trade shows, conferences, etc. to promote her products; her promoter is sometimes invited to speak at various events to share her journey and inspire other entrepreneurs, especially women. Active on social media including TikTok where the company works daily to promote its products.\n\nCurrently, Berakah Business offers tea based on various spices responding to various digestive needs of its consumers; powdered spices; honey; sorghum flour, hair products; soap; all these products in general distributed under the brand La Saveur, are well present in several points of sale in the cities of Lubumbashi, Bukavu, Kolwezi, Kinshasa, etc.\n\nIt is only natural that this company was selected among the top 5 pitches for the recent L-Impact program; a 6-month incubation program that strengthens entrepreneurs' capacities to better professionalize them.\n\nBerakah Business, La Saveur and its promoter can only continue to expand further for more impact within the entrepreneurial sector and SADEK-GIE can only wish them great success.\n\nThe Synergy for Supporting Entrepreneurship Development in Kongo, abbreviated SADEK–GIE/ DRC, is an Economic Interest Group, a network supporting entrepreneurs of all categories initiated to contribute to economic growth and job creation in the Democratic Republic of Congo through aspiring or active entrepreneurs: men, women, youth, etc. in SADC zone countries; this, since 2016 according to the experiences of entrepreneurs from various backgrounds.\n\nSource: https://www.sadek-rdc.com/2024/07/08/berakah-business-parmi-les-5-meilleurs-pitchs-l-impact-saison-2-a-lubumbashi/",
    image: "/berakah-gallery/1769287540891.jpg",
    date: "08 Juillet 2024",
    readTime: "6 min",
    author: lang === 'fr' ? "Équipe SADEK-GIE/ RDC" : "SADEK-GIE/ DRC Team",
    authorRole: lang === 'fr' ? "Réseau d'Accompagnement des Entrepreneurs" : "Entrepreneur Support Network"
  }
];

const BlogPage: React.FC<BlogPageProps> = ({ language }) => {
  const { navigateTo } = useApp();
  const posts = getPosts(language);

  const handlePostClick = (postId: string) => {
    navigateTo(`/blog/${postId}`);
  };

  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <span className="text-tag text-agro-dark inline-block px-3 sm:px-4 py-1.5 sm:py-2 border border-agro-dark/10 rounded-full mb-4 sm:mb-6">
            {language === 'fr' ? 'Agri-Insights' : 'Agri-Insights'}
          </span>
          <h1 className="heading-h1 text-agro-dark leading-tight mb-2 sm:mb-3">
            {language === 'fr' ? "Dernières Nouvelles" : "Latest News"}
          </h1>
          <h2 className="heading-h2 text-agro-dark/80">
            {language === 'fr' ? "& Conseils Experts" : "& Expert Insights"}
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {posts.map((post) => (
            <article 
              key={post.id} 
              onClick={() => handlePostClick(post.id)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                <img 
                  src={post.image} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt={post.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-grow">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-body-sm text-gray-500 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-agro-dark/40" /> 
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-agro-dark/40" /> 
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="heading-h3 text-agro-dark mb-2 sm:mb-3 leading-tight line-clamp-2 group-hover:text-agro-lime transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-body text-gray-600 mb-4 sm:mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <div className="mt-auto">
                  <button className="btn btn-ghost btn-md text-agro-dark group">
                    <span>{language === 'fr' ? 'Lire l\'Article' : 'Read Article'}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
