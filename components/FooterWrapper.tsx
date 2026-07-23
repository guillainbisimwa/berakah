'use client';
import React from 'react';
import Footer from './Footer';
import { useApp } from '../context/AppContext';

export default function FooterWrapper() {
  const { currentPath } = useApp();
  if (currentPath === '/dashboard') return null;
  return <Footer />;
}
