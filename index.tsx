
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
import { useApp } from './context/AppContext';

// Component to handle page routing based on the current context path
const PageRouter = () => {
  const { currentPath, language } = useApp();
  
  // Check for blog detail pages
  if (currentPath.startsWith('/blog/')) {
    const postId = currentPath.replace('/blog/', '');
    return <BlogDetailPage language={language} postId={postId} />;
  }
  
  switch (currentPath) {
    case '/': return <HomePage />;
    case '/about': return <AboutRoute />;
    case '/products': return <ProductsRoute />;
    case '/blog': return <BlogRoute />;
    case '/portfolio': return <PortfolioRoute />;
    case '/shop': return <ShopRoute />;
    case '/contacts': return <ContactsRoute />;
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
