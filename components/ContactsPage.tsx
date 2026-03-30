'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Send } from 'lucide-react';
import { translations } from '../translations';
import { useApp } from '../context/AppContext';
import AboutCTA from './AboutCTA';
import emailjs from '@emailjs/browser';

// Declare Leaflet types
declare global {
  interface Window {
    L: any;
  }
}

interface ContactsPageProps { language: 'fr' | 'en'; }

const ContactsPage: React.FC<ContactsPageProps> = ({ language }) => {
  const t = translations[language];
  const contacts = t.contacts;
  const testimonials = t.testimonials;
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState(false);
  const [stepError, setStepError] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    role: '',
    profile: '',
    mainNeed: '',
    message: '',
    wishes: [] as string[],
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('0ILWIJa8A7jc6KnkO');
  }, []);

  // Button handlers
  const handleContactNow = () => {
    // If we're on the contact page, scroll to form
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Focus on first input after scroll
      setTimeout(() => {
        const firstInput = formElement.querySelector('input');
        if (firstInput) firstInput.focus();
      }, 800);
    } else {
      // If not on contact page, navigate to it
      window.location.href = '/contacts#contact-form';
    }
  };

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Scroll to testimonials section as fallback
      const testimonialsSection = document.querySelector('[data-testid="testimonials"]') ||
                                 document.querySelector('.py-12.bg-gray-50');
      if (testimonialsSection) {
        testimonialsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all required fields before submitting
    const formT = translations[language].contacts.form;
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() ||
        !formData.phone.trim() || !formData.companyName.trim() || !formData.role.trim() ||
        !formData.profile || !formData.mainNeed) {
      setStepError(formT.errors.requiredAll);
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStepError(formT.errors.invalidEmail);
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);
    setFormError(false); // Reset error state
    setStepError(''); // Clear step error

    try {
      // Prepare form data for EmailJS
      const emailData = {
        ...formData,
        wishes: formData.wishes.join(', '), // Convert array to string
        fullName: `${formData.firstName} ${formData.lastName}`, // Add full name
        time: new Date().toLocaleString(), // Date & time of submission
        subject: formData.mainNeed, // Map mainNeed to subject
        message: formData.message || '', // Optional free-text message
      };

      await emailjs.send(
        'service_m3q0p4q',
        'template_09fbzi9',
        emailData,
        '0ILWIJa8A7jc6KnkO'
      );

      setFormSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormError(false);
        setStepError('');
        setCurrentStep(1);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          companyName: '',
          role: '',
          profile: '',
          mainNeed: '',
          message: '',
          wishes: [],
        });
      }, 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formT = translations[language].contacts.form;
  const nextStep = () => {
    let isValid = true;
    let errorMessage = '';

    if (currentStep === 1) {
      if (!formData.firstName.trim()) {
        isValid = false;
        errorMessage = formT.errors.fname;
      } else if (!formData.lastName.trim()) {
        isValid = false;
        errorMessage = formT.errors.lname;
      } else if (!formData.email.trim()) {
        isValid = false;
        errorMessage = formT.errors.email;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        isValid = false;
        errorMessage = formT.errors.invalidEmail;
      } else if (!formData.phone.trim()) {
        isValid = false;
        errorMessage = formT.errors.phone;
      }
    } else if (currentStep === 2) {
      if (!formData.companyName.trim()) {
        isValid = false;
        errorMessage = formT.errors.companyName;
      } else if (!formData.role.trim()) {
        isValid = false;
        errorMessage = formT.errors.role;
      } else if (!formData.profile) {
        isValid = false;
        errorMessage = formT.errors.profile;
      }
    }

    if (isValid) {
      setStepError('');
      setFormError(false);
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      }
    } else {
      setStepError(errorMessage);
      setFormError(false);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setFormError(false); // Reset error on step change
      setStepError(''); // Clear step validation error
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear step error when user starts typing
    if (stepError) {
      setStepError('');
    }
  };

  const handleCheckboxChange = (wish: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      wishes: checked
        ? [...prev.wishes, wish]
        : prev.wishes.filter(w => w !== wish)
    }));
  };

  const handleSocialClick = (platform: string) => {
    const urls = {
      facebook: 'https://facebook.com/berakah.cd',
      twitter: 'https://twitter.com/berakah_cd',
      instagram: 'https://instagram.com/berakah.cd',
      linkedin: 'https://linkedin.com/company/berakah'
    };

    const url = urls[platform as keyof typeof urls];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // Fallback: show a message or copy contact info
      alert(`Contactez-nous sur ${platform} - Informations bientôt disponibles!`);
    }
  };

  const handleBottomCTA = () => {
    // Scroll to top or to contact form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Initialize interactive map
  useEffect(() => {
    if (typeof window !== 'undefined' && !mapLoaded) {
      // Load Leaflet CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);

      // Load Leaflet JS
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = () => {
        initializeMap();
        setMapLoaded(true);
      };
      document.head.appendChild(script);
    }
  }, [mapLoaded]);

  const initializeMap = () => {
    if (!mapRef.current || typeof window === 'undefined' || !window.L) return;

    // Initialize map centered on Africa
    const map = window.L.map('interactive-map').setView([-4.0383, 21.7587], 4);

    // Add OpenStreetMap tiles
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map);

    // Custom marker icons
    const createCustomIcon = (color: string) => {
      return window.L.divIcon({
        html: `
          <div style="
            background-color: ${color};
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            animation: pulse 2s infinite;
          ">
            <div style="
              width: 8px;
              height: 8px;
              background-color: white;
              border-radius: 50%;
            "></div>
          </div>
          <style>
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.2); }
              100% { transform: scale(1); }
            }
          </style>
        `,
        className: 'custom-marker',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });
    };

    // Add markers for different locations
    const locations = [
      {
        coords: [-4.4419, 15.2663], // Kinshasa, DRC
        title: 'Siège Social - Kinshasa',
        description: 'Notre quartier général et centre de développement',
        color: '#22c55e', // agro-lime
        type: 'headquarters'
      },
      {
        coords: [-11.6609, 27.4794], // Lubumbashi, DRC
        title: 'Centre de Recherche - Lubumbashi',
        description: 'Innovation agricole et partenariats stratégiques',
        color: '#3b82f6', // blue
        type: 'research'
      },
      {
        coords: [-1.6585, 29.2200], // Goma, DRC
        title: 'Hub Logistique - Goma',
        description: 'Distribution et support opérationnel',
        color: '#8b5cf6', // purple
        type: 'logistics'
      },
      {
        coords: [1.3733, 32.2903], // Bangui, CAR (partnership)
        title: 'Partenaire - Bangui',
        description: 'Collaboration agricole régionale',
        color: '#f59e0b', // amber
        type: 'partner'
      },
      {
        coords: [3.8480, 11.5021], // Yaoundé, Cameroon
        title: 'Partenaire - Yaoundé',
        description: 'Expansion en Afrique Centrale',
        color: '#ef4444', // red
        type: 'partner'
      }
    ];

    locations.forEach((location, index) => {
      const marker = window.L.marker(location.coords, {
        icon: createCustomIcon(location.color)
      }).addTo(map);

      // Create popup with animation
      const popupContent = `
        <div style="
          padding: 16px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          min-width: 200px;
          animation: slideIn 0.3s ease-out;
        ">
          <div style="
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
          ">
            <div style="
              width: 12px;
              height: 12px;
              background-color: ${location.color};
              border-radius: 50%;
              border: 2px solid white;
              box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            "></div>
            <h3 style="
              font-weight: bold;
              color: #1f2937;
              margin: 0;
              font-size: 14px;
            ">${location.title}</h3>
          </div>
          <p style="
            color: #6b7280;
            margin: 0;
            font-size: 13px;
            line-height: 1.4;
          ">${location.description}</p>
        </div>
        <style>
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        </style>
      `;

      marker.bindPopup(popupContent, {
        closeButton: true,
        className: 'custom-popup'
      });

      // Add click animation
      marker.on('click', () => {
        map.flyTo(location.coords, 8, {
          duration: 1.5,
          easeLinearity: 0.25
        });
      });

      // Stagger marker appearance
      setTimeout(() => {
        marker.addTo(map);
      }, index * 200);
    });

    // Add zoom controls styling
    const zoomControl = document.querySelector('.leaflet-control-zoom');
    if (zoomControl) {
      zoomControl.setAttribute('style', `
        border: none !important;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
        border-radius: 8px !important;
        overflow: hidden !important;
      `);
    }

    // Add scale control
    window.L.control.scale({
      position: 'bottomleft',
      imperial: false
    }).addTo(map);

    // Add click outside to close popups
    map.on('click', () => {
      map.closePopup();
    });

    // Add loading animation
    const loadingDiv = document.createElement('div');
    loadingDiv.innerHTML = `
      <div style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255,255,255,0.9);
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 500;
        color: #374151;
      ">
        <div style="
          width: 20px;
          height: 20px;
          border: 2px solid #e5e7eb;
          border-top: 2px solid #22c55e;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        "></div>
        Chargement de la carte...
      </div>
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    `;
    mapRef.current?.appendChild(loadingDiv);

    // Remove loading after map loads
    setTimeout(() => {
      if (loadingDiv.parentNode) {
        loadingDiv.parentNode.removeChild(loadingDiv);
      }
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section with Premium Design */}
      <section className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] overflow-hidden pt-16 sm:pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/drsd8adkq/image/upload/v1769369775/green-1_uococa.jpg" 
            alt="Contact Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Overlay - More pronounced on mobile */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40 md:from-black/80 md:via-black/50 md:to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Animated Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-slate-800/10 to-black/40 pointer-events-none">
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 h-full flex flex-col items-center justify-center py-8 sm:py-12 md:py-16">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 text-body-sm text-gray-300 mb-4 sm:mb-6 md:mb-8 opacity-0 animate-fadeInDown">
            <span>{contacts.breadcrumb.split(' / ')[0]}</span>
            <span className="text-gray-500">/</span>
            <span className="text-agro-lime font-semibold">{contacts.breadcrumb.split(' / ')[1]}</span>
          </div>

          {/* Main Title */}
          <div className="text-center max-w-4xl mx-auto mb-4 sm:mb-6 opacity-0 animate-fadeInDown" style={{animationDelay: '0.2s'}}>
            <h1 className="heading-h1 text-white px-2">
              <span className="bg-gradient-to-r from-agro-lime via-white to-agro-lime bg-clip-text text-transparent">
                {contacts.headerTitle}
              </span>
            </h1>
            <p className="text-body text-gray-300 font-medium max-w-2xl mx-auto px-4 mt-4">
              Nous sommes là pour répondre à vos questions et explorer ensemble comment Berakah peut transformer votre agriculture.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mt-6 sm:mt-8 opacity-0 animate-fadeInDown" style={{animationDelay: '0.4s'}}>
            <button
              onClick={handleContactNow}
              className="btn btn-lg bg-white text-agro-dark hover:shadow-2xl hover:shadow-agro-lime/50 w-full sm:w-auto"
            >
              <Send className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              <span className="hidden sm:inline">{contacts.form.contactNow}</span>
              <span className="sm:hidden">{contacts.form.contactNowShort}</span>
            </button>
            <button
              onClick={handleLearnMore}
              className="btn btn-lg border-2 border-agro-lime/50 text-agro-lime hover:bg-agro-lime/10 hover:border-agro-lime w-full sm:w-auto group"
            >
              <span className="hidden sm:inline">{contacts.form.learnMore}</span>
              <span className="sm:hidden">{contacts.form.moreInfo}</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">

        <div className="flex flex-col lg:flex-col gap-8 lg:gap-12">

          {/* Form Section - Full width on desktop, stacked on mobile */}
          <div className="w-full lg:w-full space-y-4">
            <div>
              <span className="text-tag text-agro-lime mb-1 block">
                {contacts.formTag}
              </span>
              <h2 className="heading-h2 text-slate-900">
                {contacts.formTitle}
              </h2>
            </div>

            <form id="contact-form" className="space-y-6 mt-4" onSubmit={handleFormSubmit}>
              {/* Progress Dots */}
              <div className="flex justify-center space-x-2 mb-6">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      step === currentStep ? 'bg-agro-lime' : step < currentStep ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Step Validation Error */}
              {stepError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg animate-fadeInDown">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 text-white font-bold text-xs">✕</div>
                    </div>
                    <p className="text-sm text-red-800 font-medium">{stepError}</p>
                  </div>
                </div>
              )}

              {/* Step 1: Identité et contact */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="heading-h4 text-gray-800">{contacts.form.step1Title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{contacts.form.fname.replace(' *', '')}</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-agro-lime/50 focus:border-agro-lime transition-colors"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{contacts.form.lname.replace(' *', '')}</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-agro-lime/50 focus:border-agro-lime transition-colors"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{contacts.form.email.replace(' *', '')}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-agro-lime/50 focus:border-agro-lime transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{contacts.form.phone.replace(' *', '')}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-agro-lime/50 focus:border-agro-lime transition-colors"
                      placeholder="+243..."
                      pattern="[\+]?[0-9\s\-\(\)]*"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Informations professionnelles */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="heading-h4 text-gray-800">{contacts.form.step2Title}</h3>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{contacts.form.companyName}</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-agro-lime/50 focus:border-agro-lime transition-colors"
                      placeholder="Votre société"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{contacts.form.roleLabel}</label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-agro-lime/50 focus:border-agro-lime transition-colors"
                      placeholder="Directeur, Agriculteur, etc."
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{contacts.form.profileLabel}</label>
                    <select
                      name="profile"
                      value={formData.profile}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-agro-lime/50 focus:border-agro-lime transition-colors text-gray-600"
                      required
                    >
                      <option value="">{contacts.form.profilePlaceholder}</option>
                      {contacts.form.profileOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Besoin principal et souhaits */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="heading-h4 text-gray-800">{contacts.form.step3Title}</h3>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{contacts.form.mainNeedLabel}</label>
                    <select
                      name="mainNeed"
                      value={formData.mainNeed}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-agro-lime/50 focus:border-agro-lime transition-colors text-gray-600"
                      required
                    >
                      <option value="">{contacts.form.mainNeedPlaceholder}</option>
                      {contacts.form.mainNeedOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{contacts.form.wishesLabel}</label>
                    <div className="space-y-2">
                      {contacts.form.wishesOptions.map((opt) => (
                        <label key={opt.value} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={formData.wishes.includes(opt.value)}
                            onChange={(e) => handleCheckboxChange(opt.value, e.target.checked)}
                            className="rounded border-gray-300 text-agro-lime focus:ring-agro-lime"
                          />
                          <span className="text-sm text-gray-700">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{contacts.form.messageOptional}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-agro-lime/50 focus:border-agro-lime transition-colors"
                      placeholder={contacts.form.messagePlaceholder}
                      rows={4}
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-4">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn btn-md bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-lg"
                  >
                    {contacts.form.previous}
                  </button>
                )}
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn btn-md btn-primary hover:bg-agro-dark hover:text-white ml-auto rounded-lg"
                  >
                    {contacts.form.next}
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-md flex items-center gap-2 shadow-sm ml-auto rounded-lg ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : formSubmitted
                          ? 'bg-green-500 hover:bg-green-600 text-white'
                          : 'btn-primary'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        {contacts.form.sending}
                      </>
                    ) : formSubmitted ? (
                      <>
                        <div className="w-4 h-4 text-white">✓</div>
                        {contacts.form.sent}
                      </>
                    ) : (
                      <>
                        {contacts.form.send}
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>

            {/* Success Message */}
            {formSubmitted && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fadeInDown">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 text-white font-bold">✓</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">{contacts.form.successTitle}</h3>
                    <p className="text-sm text-green-600">{contacts.form.successMessage}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {formError && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-fadeInDown">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 text-white font-bold">✕</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-800">{contacts.form.errorTitle}</h3>
                    <p className="text-sm text-red-600">{contacts.form.connectionError}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Card Section - Below form on desktop, stacked on mobile */}
          <div className="w-full lg:w-full">
            <div className="bg-agro-lime rounded-2xl p-6 sm:p-8 h-full relative overflow-hidden text-agro-dark">
              {/* Badge */}
              <div className="absolute top-6 right-6 bg-black text-white w-16 h-16 rounded-full flex items-center justify-center text-center text-xs font-bold uppercase leading-tight animate-spin-slow whitespace-pre-line z-20">
                {contacts.info.partnerBadge}
              </div>

              <div className="space-y-6 mt-6 relative z-10">
                {/* Address */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> {contacts.info.addressTitle}
                  </h3>
                  <p className="text-agro-dark/80 font-medium leading-relaxed whitespace-pre-line text-sm">
                    {contacts.info.address}
                  </p>
                </div>

                {/* Contact */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Phone className="w-4 h-4" /> {contacts.info.contactTitle}
                  </h3>
                  <div className="space-y-1 text-agro-dark/80 font-medium text-sm">
                    <p>Phone: +243 99 800 9996</p>
                    <p>Email: berakahbusiness8@gmail.com</p>
                  </div>
                </div>

                {/* Open Time */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {contacts.info.openTimeTitle}
                  </h3>
                  <p className="text-agro-dark/80 font-medium text-sm">
                    {contacts.info.openTime}
                  </p>
                </div>

                {/* Quick Response Promise */}
                <div className="bg-white/20 rounded-lg p-4 space-y-2">
                  <h3 className="text-base font-bold flex items-center gap-2">
                    ⚡ Réponse rapide garantie
                  </h3>
                  <p className="text-agro-dark/90 font-medium text-xs leading-relaxed">
                    Nous répondons à tous les messages dans les 24 heures ouvrables. Votre satisfaction est notre priorité !
                  </p>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center gap-3">
             <h2 className="heading-h2 text-slate-900">{testimonials.title}</h2>
             <span className="text-tag bg-agro-lime text-agro-dark rounded-full">{testimonials.tag}</span>
          </div>
        </div>

        {/* Carousel 1 (Left) */}
        <div className="relative w-full flex overflow-x-hidden mb-6">
          <div className="flex animate-marquee-slow whitespace-nowrap gap-4 pl-4">
            {[...testimonials.items, ...testimonials.items].map((item, idx) => (
              <div key={`t1-${idx}`} className="w-[280px] sm:w-[320px] md:w-[350px] flex-shrink-0 bg-white p-4 sm:p-6 rounded-2xl shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <p className="text-sm text-gray-600 italic mb-6 leading-relaxed whitespace-normal">"{item.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.author} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.author}</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{item.role}</p>
                  </div>
                </div>
                {/* Gradient Blur */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-yellow-200/50 rounded-full blur-2xl group-hover:bg-agro-lime/30 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel 2 (Right) */}
        <div className="relative w-full flex overflow-x-hidden">
          <div className="flex animate-marquee-slow-reverse whitespace-nowrap gap-4 pl-4">
            {[...testimonials.items, ...testimonials.items].reverse().map((item, idx) => (
              <div key={`t2-${idx}`} className="w-[280px] sm:w-[320px] md:w-[350px] flex-shrink-0 bg-white p-4 sm:p-6 rounded-2xl shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <p className="text-sm text-gray-600 italic mb-6 leading-relaxed whitespace-normal">"{item.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.author} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.author}</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{item.role}</p>
                  </div>
                </div>
                {/* Gradient Blur */}
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-200/50 rounded-full blur-2xl group-hover:bg-purple-200/50 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Bottom CTA */}
      <AboutCTA language={language} />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-slow {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-slow-reverse {
          animation: marquee 40s linear infinite reverse;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-marquee-slow:hover, .animate-marquee-slow-reverse:hover {
          animation-play-state: paused;
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        /* Interactive Map Styles */
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
          border-radius: 8px !important;
          overflow: hidden !important;
        }
        .leaflet-control-zoom a {
          background-color: white !important;
          color: #374151 !important;
          border: none !important;
          width: 32px !important;
          height: 32px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-weight: bold !important;
          transition: all 0.2s ease !important;
        }
        .leaflet-control-zoom a:hover {
          background-color: #f3f4f6 !important;
          color: #22c55e !important;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 12px !important;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
          border: none !important;
        }
        .leaflet-popup-tip {
          background-color: white !important;
        }
        .leaflet-control-attribution {
          background-color: rgba(255,255,255,0.8) !important;
          backdrop-filter: blur(8px) !important;
          border-radius: 6px !important;
          margin-bottom: 8px !important;
          margin-left: 8px !important;
        }
        .leaflet-control-scale {
          background-color: rgba(255,255,255,0.9) !important;
          backdrop-filter: blur(8px) !important;
          border-radius: 6px !important;
          margin-left: 8px !important;
          margin-bottom: 8px !important;
        }
      `}</style>
    </div>
  );
};

export default ContactsPage;
