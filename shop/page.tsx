
'use client';
import ShopPage from '../components/ShopPage';
import { useApp } from '../context/AppContext';

export default function ShopRoute() {
  const { language } = useApp();
  return <ShopPage language={language} />;
}
