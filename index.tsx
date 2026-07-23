
import React from 'react';
import ReactDOM from 'react-dom/client';
import RootLayout from './layout';
import HomePage from './page';
import AboutRoute from './about/page';
import BlogRoute from './blog/page';
import PortfolioRoute from './portfolio/page';
import ShopRoute from './shop/page';
import ProductsRoute from './products/page';
import ContactsRoute from './contacts/page';
import BlogDetailPage from './components/BlogDetailPage';
import DashboardPage from './components/DashboardPage';
import { useApp } from './context/AppContext';

import AuthPage from './components/AuthPage';

// Component to handle page routing based on the current context path
const PageRouter = () => {
  const { currentPath, language, token, user, logout, setAuth, navigateTo } = useApp();
  
  // Check for blog detail pages
  if (currentPath.startsWith('/blog/')) {
    const postId = currentPath.replace('/blog/', '');
    return <BlogDetailPage language={language} postId={postId} />;
  }
  
  const handleAuthSuccess = (userData: any, authToken: string) => {
    setAuth(userData, authToken);
    navigateTo('/dashboard');
  };

  switch (currentPath) {
    case '/': return <HomePage />;
    case '/about': return <AboutRoute />;
    case '/products': return <ProductsRoute />;
    case '/blog': return <BlogRoute />;
    case '/portfolio': return <PortfolioRoute />;
    case '/shop': return <ShopRoute />;
    case '/contacts': return <ContactsRoute />;
    case '/auth': return <AuthPage language={language} onAuthSuccess={handleAuthSuccess} />;
    case '/dashboard': 
      if (!token) {
        // Render auth page if not logged in
        return <AuthPage language={language} onAuthSuccess={handleAuthSuccess} />;
      }
      return <DashboardPage language={language} user={user} onLogout={logout} />;
    default: return <HomePage />;
  }
};

// Main application entry component
// Fixed: Passed children as an explicit prop to RootLayout to satisfy strict type checking
const Main = () => {
  return (
    <React.StrictMode>
      <RootLayout children={<PageRouter />} />
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Main />);
}
