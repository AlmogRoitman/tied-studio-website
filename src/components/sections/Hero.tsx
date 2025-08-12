'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textReveal } from '@/lib/animations';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-primary/20" />
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23c4968e" fill-opacity="0.1"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto px-6 relative z-10 text-center"
      >
        {/* Company Name */}
        <motion.div
          variants={textReveal}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-navy mb-4 font-serif">
            <span className="bg-gradient-to-l from-primary via-accent to-primary bg-clip-text text-transparent">
              Tied Studio
            </span>
          </h1>
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={fadeIn} className="mb-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy mb-4">
            מיתוג חתונות מקצה לקצה
          </h2>
        </motion.div>

        {/* Subheading */}
        <motion.div variants={fadeIn} className="mb-12">
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            עיצוב אישי ויוקרתי לחתונה המושלמת שלכם
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={fadeIn}>
          <motion.button
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary hover:border-primary/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            בואו ליצור ביחד
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-accent/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-16 h-16 rounded-full bg-primary/20"
          animate={{
            y: [0, 20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}