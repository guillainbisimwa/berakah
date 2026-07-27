'use client';
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { API_BASE, API_ORIGIN } from '../lib/api';

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

export const getPosts = (lang: string): BlogPost[] => [];

const BlogPage: React.FC<BlogPageProps> = ({ language }) => {
  const { navigateTo } = useApp();
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${API_BASE}/blog?language=${language}`);
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Failed to fetch posts', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [language]);

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
