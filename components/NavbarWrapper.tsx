'use client';
import React from 'react';
import Navbar from './Navbar';
import { useApp } from '../context/AppContext';

export default function NavbarWrapper() {
  const { currentPath } = useApp();
  if (currentPath === '/dashboard') return null;
  return <Navbar />;
}
