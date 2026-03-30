
'use client';
import AboutPage from '../components/AboutPage';
import { useApp } from '../context/AppContext';

export default function AboutRoute() {
  const { language } = useApp();
  return <AboutPage language={language} />;
}
