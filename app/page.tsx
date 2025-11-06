'use client';

import { useState, useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Documentation from './components/Documentation';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  // Handle hash navigation when coming from other pages
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Small delay to ensure page is fully rendered
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const headerOffset = 80; // Account for fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }, 100);
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Header />
      
      {/* Main Content */}
      <Hero />
      <About />
      <Technologies />
      <Documentation onContactClick={() => setIsContactFormOpen(true)} />
      
      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}

