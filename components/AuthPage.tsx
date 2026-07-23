import React, { useState } from 'react';
import { Mail, Lock, User as UserIcon, ArrowRight, Phone } from 'lucide-react';

interface AuthPageProps {
  language: 'fr' | 'en';
  onAuthSuccess: (user: any, token: string) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ language, onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', password: '', confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError(language === 'fr' ? 'Les mots de passe ne correspondent pas' : 'Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const endpoint = isLogin ? 'http://localhost:3001/auth/login' : 'http://localhost:3001/auth/register';
      const body = isLogin 
        ? { email: formData.email, password: formData.password }
        : { ...formData };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || (language === 'fr' ? 'Une erreur est survenue' : 'An error occurred'));
      }

      if (!isLogin) {
        // Automatically log in after registration
        const loginRes = await fetch('http://localhost:3001/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: formData.email, password: formData.password })
        });
        const loginData = await loginRes.json();
        onAuthSuccess(loginData.user, loginData.access_token);
      } else {
        onAuthSuccess(data.user, data.access_token);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8 text-center bg-agro-dark text-white">
          <h2 className="text-2xl font-bold mb-2">
            {isLogin 
              ? (language === 'fr' ? 'Bon retour !' : 'Welcome Back!')
              : (language === 'fr' ? 'Créer un compte' : 'Create an Account')}
          </h2>
          <p className="text-agro-lime/80 text-sm">
            {isLogin 
              ? (language === 'fr' ? 'Connectez-vous pour accéder à votre tableau de bord' : 'Sign in to access your dashboard')
              : (language === 'fr' ? 'Rejoignez-nous pour gérer vos produits' : 'Join us to manage your products')}
          </p>
        </div>

        <div className="p-8">
          {error && (
            <div className="mb-6 p-3 bg-red-50 text-red-600 rounded-lg text-sm text-center border border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">{language === 'fr' ? 'Prénom' : 'First Name'}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-4 w-4 text-slate-400" />
                    </div>
                    <input required type="text" className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">{language === 'fr' ? 'Nom' : 'Last Name'}</label>
                  <input required type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-slate-400" />
                </div>
                <input required type="email" className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">{language === 'fr' ? 'Téléphone' : 'Phone'}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-4 w-4 text-slate-400" />
                  </div>
                  <input type="tel" className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">{language === 'fr' ? 'Mot de passe' : 'Password'}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-slate-400" />
                </div>
                <input required type="password" minLength={6} className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">{language === 'fr' ? 'Confirmer le mot de passe' : 'Confirm Password'}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-slate-400" />
                  </div>
                  <input required type="password" minLength={6} className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm" value={formData.confirmPassword} onChange={e => setFormData({...formData, confirmPassword: e.target.value})} />
                </div>
              </div>
            )}

            <button type="submit" disabled={loading} className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 mt-6">
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>{isLogin ? (language === 'fr' ? 'Se connecter' : 'Sign In') : (language === 'fr' ? 'S\'inscrire' : 'Sign Up')}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-slate-500">
              {isLogin 
                ? (language === 'fr' ? 'Pas encore de compte ? ' : 'Don\'t have an account? ')
                : (language === 'fr' ? 'Déjà un compte ? ' : 'Already have an account? ')}
            </span>
            <button onClick={() => { setIsLogin(!isLogin); setError(''); }} className="text-green-600 font-medium hover:underline">
              {isLogin 
                ? (language === 'fr' ? 'S\'inscrire' : 'Sign Up')
                : (language === 'fr' ? 'Se connecter' : 'Sign In')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
