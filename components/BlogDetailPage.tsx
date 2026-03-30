'use client';
import React from 'react';
import { Calendar, Clock, ArrowLeft, Share2, User } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getPosts, BlogPost } from './BlogPage';

interface BlogDetailPageProps { 
  language: 'fr' | 'en';
  postId: string;
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ language, postId }) => {
  const { navigateTo } = useApp();
  const posts = getPosts(language);
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-20 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h2 className="heading-h2 text-agro-dark mb-4">
            {language === 'fr' ? 'Article non trouvé' : 'Article not found'}
          </h2>
          <button
            onClick={() => navigateTo('/blog')}
            className="btn btn-md btn-primary"
          >
            {language === 'fr' ? 'Retour au blog' : 'Back to blog'}
          </button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert(language === 'fr' ? 'Lien copié dans le presse-papiers!' : 'Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigateTo('/blog')}
          className="btn btn-ghost btn-sm text-agro-dark/70 mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>{language === 'fr' ? 'Retour au blog' : 'Back to blog'}</span>
        </button>

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="heading-h1 text-agro-dark leading-tight mb-4 sm:mb-6">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-body-sm text-gray-600 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-agro-dark/40" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-agro-dark/40" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-agro-dark/40" />
              <div>
                <span className="font-semibold text-agro-dark">{post.author}</span>
                <span className="text-gray-500 text-body-sm ml-2">{post.authorRole}</span>
              </div>
            </div>
            <button
              onClick={handleShare}
              className="btn btn-sm bg-gray-100 hover:bg-agro-lime text-gray-700 hover:text-agro-dark ml-auto"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">{language === 'fr' ? 'Partager' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8 sm:mb-10 md:mb-12">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg sm:prose-xl max-w-none">
          <div className="text-body text-gray-700 leading-relaxed whitespace-pre-line space-y-4 sm:space-y-6">
            {post.content.split('\n\n').map((paragraph, idx) => {
              // Check if paragraph is a source link
              if (paragraph.startsWith('Source:')) {
                const url = paragraph.replace('Source:', '').trim();
                return (
                  <div key={idx} className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
                    <p className="text-body-sm text-gray-600 mb-2">
                      {language === 'fr' ? 'Source:' : 'Source:'}
                    </p>
                    <a 
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-agro-lime hover:text-agro-dark underline break-all text-sm sm:text-base"
                    >
                      {url}
                    </a>
                  </div>
                );
              }
              return (
                <p key={idx} className="mb-4 sm:mb-6">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>

        {/* Author Card */}
        <div className="mt-12 sm:mt-16 md:mt-20 p-6 sm:p-8 bg-gray-50 rounded-2xl border border-gray-200">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-agro-lime rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 sm:w-10 sm:h-10 text-agro-dark" />
            </div>
            <div>
              <h3 className="heading-h4 text-agro-dark mb-1 sm:mb-2">
                {post.author}
              </h3>
              <p className="text-body-sm text-gray-600 mb-3 sm:mb-4">
                {post.authorRole}
              </p>
              <p className="text-body text-gray-500">
                {language === 'fr' 
                  ? 'Expert en agriculture durable et technologies innovantes pour l\'Afrique.'
                  : 'Expert in sustainable agriculture and innovative technologies for Africa.'}
              </p>
            </div>
          </div>
        </div>

        {/* Back to Blog Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={() => navigateTo('/blog')}
            className="btn btn-lg btn-primary"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{language === 'fr' ? 'Voir tous les articles' : 'View all articles'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
