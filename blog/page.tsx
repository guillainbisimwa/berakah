
'use client';
import BlogPage from '../components/BlogPage';
import { useApp } from '../context/AppContext';

export default function BlogRoute() {
  const { language } = useApp();
  return <BlogPage language={language} />;
}
