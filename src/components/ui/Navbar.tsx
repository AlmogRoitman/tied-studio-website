'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const navigationItems = [
  { name: 'בית', href: '#hero' },
  { name: 'מי אנחנו', href: '#about' },
  { name: 'מה אנחנו עושות', href: '#services' },
  { name: 'תיק עבודות', href: '#portfolio' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero');
      const heroHeight = heroElement ? heroElement.offsetHeight : window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight);
      
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
            <div className="flex items-center gap-6" style={{ direction: 'ltr' }}>
              <AnimatePresence>
                {isScrolled && (
                  <motion.div
                    className="h-6 flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <img 
                      src="/images/portfolio/Logo_text.svg" 
                      alt="Tied Studio" 
                      className="h-full object-contain"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="w-13 flex items-center justify-center">
                <img 
                  src="/images/portfolio/logo.svg" 
                  alt="Tied Studio Logo Symbol" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation - RTL Flow */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-8">
              {navigationItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-2 py-2 text-base font-medium transition-all duration-300 ${
                      isActive
                        ? isScrolled
                          ? 'text-primary'
                          : 'text-white'
                        : isScrolled
                        ? 'text-navy hover:text-primary'
                        : 'text-white hover:text-white/70'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          isScrolled ? 'bg-primary' : 'bg-white'
                        }`}
                        layoutId="activeTab"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
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
        className="p-3 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-8 h-8 flex flex-col justify-center items-center">
          <motion.div
            className="w-7 h-0.5 bg-black absolute"
            animate={isOpen ? { rotate: 45 } : { rotate: 0, y: -4 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ height: '1px' }}
          />
          <motion.div
            className="w-7 h-0.5 bg-black absolute"
            animate={isOpen ? { rotate: -45 } : { rotate: 0, y: 4 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ height: '1px' }}
          />
        </div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-40"
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