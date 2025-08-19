'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navigationItems = [
  { name: 'בית', href: '#hero' },
  { name: 'אודות', href: '#about' },
  { name: 'שירותים', href: '#services' },
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
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-xl shadow-xl border-b border-primary/20'
          : 'bg-gradient-to-b from-black/20 via-black/10 to-transparent backdrop-blur-sm'
      }`}
      style={{ direction: 'ltr' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20" style={{ direction: 'rtl' }}>
          {/* Logo - Now on the right in RTL */}
          <motion.div
            className="cursor-pointer logo"
            onClick={() => scrollToSection('#hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-3" style={{ direction: 'ltr' }}>
              <span className={`font-bold text-2xl transition-colors duration-300 ${
                isScrolled 
                  ? 'text-navy' 
                  : 'text-white drop-shadow-lg'
              }`}>
                Tied Studio
              </span>
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-accent to-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">T</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation - RTL Flow */}
          <div className="hidden lg:flex items-center">
            <div className={`flex items-center gap-4 p-2 rounded-2xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-secondary/30 shadow-inner border border-primary/10' 
                : 'bg-white/10 backdrop-blur-md border border-white/20'
            }`}>
              {navigationItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-6 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                      isActive
                        ? isScrolled
                          ? 'text-white bg-primary shadow-lg'
                          : 'text-navy bg-white/90 shadow-lg backdrop-blur-sm'
                        : isScrolled
                        ? 'text-navy hover:text-primary hover:bg-primary/10'
                        : 'text-white hover:text-navy hover:bg-white/20 backdrop-blur-sm'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
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
        className={`p-3 rounded-xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-secondary/30 text-navy border border-primary/10 shadow-md' 
            : 'bg-white/10 text-white border border-white/20 backdrop-blur-md'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <motion.div
            className={`w-5 h-0.5 bg-current mb-1.5 rounded-full transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <motion.div
            className={`w-5 h-0.5 bg-current mb-1.5 rounded-full transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <motion.div
            className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <motion.div
        className={`fixed top-20 right-4 left-4 bg-white/98 backdrop-blur-xl shadow-2xl border border-primary/20 rounded-2xl z-50 overflow-hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          y: isOpen ? 0 : -20, 
          scale: isOpen ? 1 : 0.95 
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-navy mb-2">תפריט ניווט</h3>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-2">
            {items.map((item, index) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <motion.button
                  key={item.name}
                  onClick={() => {
                    onNavigate(item.href);
                    setIsOpen(false);
                  }}
                  className={`w-full text-center px-6 py-4 text-base font-medium rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-primary shadow-lg transform scale-105'
                      : 'text-navy hover:text-primary hover:bg-primary/10 hover:shadow-md'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
}