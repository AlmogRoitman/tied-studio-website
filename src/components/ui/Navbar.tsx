'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navigationItems = [
  { name: 'בית', href: '#hero' },
  { name: 'אודות', href: '#about' },
  { name: 'שירותים', href: '#services' },
  { name: 'למה אנחנו', href: '#why-choose-us' },
  { name: 'עבודות', href: '#portfolio' },
  { name: 'צור קשר', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="font-bold text-xl text-navy cursor-pointer"
            onClick={() => scrollToSection('#hero')}
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-l from-primary via-accent to-primary bg-clip-text text-transparent">
              Tied Studio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navigationItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-primary'
                      : isScrolled
                      ? 'text-navy hover:text-primary'
                      : 'text-white hover:text-primary'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileMenu 
              items={navigationItems} 
              activeSection={activeSection}
              onNavigate={scrollToSection}
              isScrolled={isScrolled}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function MobileMenu({ 
  items, 
  activeSection, 
  onNavigate, 
  isScrolled 
}: { 
  items: typeof navigationItems;
  activeSection: string;
  onNavigate: (href: string) => void;
  isScrolled: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 ${isScrolled ? 'text-navy' : 'text-white'}`}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <motion.div
            className={`w-5 h-0.5 bg-current mb-1 transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <motion.div
            className={`w-5 h-0.5 bg-current mb-1 transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <motion.div
            className={`w-5 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <motion.div
        className={`fixed top-16 right-0 w-64 bg-white shadow-xl border-r border-primary/10 z-50 ${
          isOpen ? 'block' : 'hidden'
        }`}
        initial={{ x: 256 }}
        animate={{ x: isOpen ? 0 : 256 }}
        transition={{ duration: 0.3 }}
      >
        <div className="py-4">
          {items.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            
            return (
              <motion.button
                key={item.name}
                onClick={() => {
                  onNavigate(item.href);
                  setIsOpen(false);
                }}
                className={`w-full text-right px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-primary bg-primary/10 border-r-2 border-primary'
                    : 'text-navy hover:text-primary hover:bg-primary/5'
                }`}
                whileHover={{ x: -5 }}
              >
                {item.name}
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}