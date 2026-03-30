
'use client';
import PortfolioPage from '../components/PortfolioPage';
import { useApp } from '../context/AppContext';

export default function PortfolioRoute() {
  const { language } = useApp();
  return <PortfolioPage language={language} />;
}
