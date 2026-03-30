
'use client';
import ProductsPage from '../components/ProductsPage';
import { useApp } from '../context/AppContext';

export default function ProductsRoute() {
  const { language } = useApp();
  return <ProductsPage language={language} />;
}
