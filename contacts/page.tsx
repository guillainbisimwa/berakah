
'use client';
import ContactsPage from '../components/ContactsPage';
import { useApp } from '../context/AppContext';

export default function ContactsRoute() {
  const { language } = useApp();
  return <ContactsPage language={language} />;
}
