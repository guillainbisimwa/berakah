
'use client';
import { useApp } from '../context/AppContext';
import AIAdvisor from './AIAdvisor';

export default function AIAdvisorWrapper() {
  const { language } = useApp();
  return <AIAdvisor language={language} />;
}
