'use client';
import { useApp } from '../context/AppContext';
import AIAdvisor from './AIAdvisor';

export default function AIAdvisorWrapper() {
  const { language, currentPath } = useApp();
  if (currentPath === '/dashboard') return null;
  return <AIAdvisor language={language} />;
}
