'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MdChatBubbleOutline, MdSend, MdClose, MdSmartToy, MdRefresh, MdDeleteSweep } from 'react-icons/md';
import { getFarmingAdvice } from '../services/geminiService';
import { translations } from '../translations';
import { useApp } from '../context/AppContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIAdvisorProps {
  language: 'fr' | 'en';
}

const AIAdvisor: React.FC<AIAdvisorProps> = ({ language }) => {
  const t = translations[language].ai;
  const { setChatOpen } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMessages([{ role: 'assistant', content: t.greeting }]);
  }, [language, t.greeting]);

  useEffect(() => {
    setChatOpen(isOpen);
  }, [isOpen, setChatOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const aiResponse = await getFarmingAdvice(userMessage, language);
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      const errorMessage = language === 'fr' 
        ? "Désolé, une erreur s'est produite."
        : "Sorry, an error occurred.";
      setMessages(prev => [...prev, { role: 'assistant', content: errorMessage }]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{ role: 'assistant', content: t.greeting }]);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 font-sans">
      {/* TRIGGER BUTTON */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="btn btn-md btn-secondary group pl-2 sm:pl-4 pr-2 py-2 shadow-2xl hover:scale-105 border border-white/10"
        >
          <span className="hidden sm:inline-block sm:max-w-0 sm:overflow-hidden sm:opacity-0 sm:group-hover:max-w-[20ch] sm:group-hover:opacity-100 sm:group-hover:ml-1 transition-all duration-200 whitespace-nowrap text-sm font-medium">{t.trigger}</span>
          <div className="bg-agro-lime p-3 rounded-full text-agro-dark shadow-inner">
            <MdChatBubbleOutline className="w-6 h-6" />
          </div>
        </button>
      )}

      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="bg-slate-50 w-[95vw] sm:w-[400px] h-[80vh] max-h-[650px] rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* HEADER */}
          <div className="bg-agro-dark p-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="bg-agro-lime/20 p-2 rounded-xl border border-agro-lime/30">
                <MdSmartToy className="w-6 h-6 text-agro-lime" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm leading-tight">{t.title}</h4>
                <p className="text-[11px] text-agro-lime/80 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-agro-lime rounded-full animate-pulse" />
                  {t.status}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={clearChat}
                className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                title="Clear Chat"
              >
                <MdDeleteSweep className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label={language === 'fr' ? 'Fermer' : 'Close'}
                title={language === 'fr' ? 'Fermer' : 'Close'}
              >
                <MdClose className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* MESSAGES AREA */}
          <div 
            ref={scrollRef}
            className="grow p-4 overflow-y-auto space-y-6 scroll-smooth bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-5"
          >
            {messages.map((m, i) => (
              <div 
                key={i} 
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2 animate-in zoom-in-95 duration-200`}
              >
                {m.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-agro-dark shrink-0 flex items-center justify-center mb-1">
                    <MdSmartToy className="w-4 h-4 text-agro-lime" />
                  </div>
                )}
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm sm:text-[15px] shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-agro-dark text-white rounded-br-none' 
                    : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none'
                }`}>
                  <div className="whitespace-pre-wrap wrap-break-word">{m.content}</div>
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-agro-dark flex items-center justify-center">
                  <MdRefresh className="w-4 h-4 text-agro-lime animate-spin" />
                </div>
                <div className="bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm">
                  <span className="text-xs text-slate-400 font-medium animate-pulse">{t.thinking}</span>
                </div>
              </div>
            )}
          </div>

          {/* INPUT AREA */}
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
            <div className="relative flex items-center gap-2">
              <input 
                ref={inputRef}
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.placeholder}
                className="grow bg-slate-100 text-slate-800 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-agro-lime/50 focus:bg-white border-transparent focus:border-agro-lime transition-all"
                disabled={loading}
              />
              <button 
                type="submit"
                disabled={loading || !input.trim()}
                className="btn btn-sm btn-primary p-3 rounded-xl hover:scale-105 active:scale-95 disabled:opacity-30 disabled:grayscale"
                aria-label={language === 'fr' ? 'Envoyer' : 'Send'}
                title={language === 'fr' ? 'Envoyer' : 'Send'}
              >
                <MdSend className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AIAdvisor;