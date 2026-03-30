
import React, { ReactNode } from 'react';
import { AppProvider } from './context/AppContext';
import NavbarWrapper from './components/NavbarWrapper';
import FooterWrapper from './components/FooterWrapper';
import AIAdvisorWrapper from './components/AIAdvisorWrapper';
import BackToTop from './components/BackToTop';

// RootLayout component for wrapping the application pages
// Fixed: Explicitly passed children as a prop to AppProvider to resolve "missing children" errors on line 18
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-white text-[#1a3a2a] transition-colors duration-500">
      <AppProvider children={
        <React.Fragment>
          <NavbarWrapper />
          <main className="flex-grow bg-white">
            {children}
          </main>
          <FooterWrapper />
          <AIAdvisorWrapper />
          <BackToTop />
        </React.Fragment>
      } />
    </div>
  );
}
