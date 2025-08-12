'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { fadeIn, staggerContainer } from '@/lib/animations';

const portfolioItems = [
  {
    id: 1,
    title: "חתונת חלומות - שרה ודוד",
    category: "מיתוג מלא",
    description: "מיתוג מושלם בגוני ורוד עתיק וזהב, כולל הזמנות, תפריטים וקישוטים",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: 2,
    title: "אלגנטיות קלאסית - מיכל ויוסי",
    category: "הזמנות וסטישנרי",
    description: "עיצוב קלאסי ואלגנטי בגוני קרם ונחושת עם טיפוגרפיה מיוחדת",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: 3,
    title: "בוהמיינית מודרנית - רות ואלון",
    category: "מיתוג דיגיטלי",
    description: "מיתוג בוהמייני עם מגע מודרני, כולל אתר חתונה ותוכן לרשתות חברתיות",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: 4,
    title: "יוקרה מינימלית - דנה ותומר",
    category: "מיתוג מלא",
    description: "עיצוב מינימליסטי ויוקרתי עם דגש על טיפוגרפיה נקייה וחומרים איכותיים",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: 5,
    title: "רומנטיקה וינטג' - ליה ונועם",
    category: "סייב דה דייט",
    description: "צילומי סייב דה דייט עם מיתוג וינטג' רומנטי ואביזרים מותאמים",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: 6,
    title: "חתונה בטבע - איה ועידן",
    category: "מיתוג אורגני",
    description: "מיתוג טבעי ואורגני עם מוטיבים בוטניים וחומרים ידידותיים לסביבה",
    image: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&h=400&fit=crop&crop=center",
  },
];

const categories = ["הכל", "מיתוג מלא", "הזמנות וסטישנרי", "מיתוג דיגיטלי", "סייב דה דייט", "מיתוג אורגני"];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("הכל");

  const filteredItems = activeCategory === "הכל" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-navy mb-6 font-serif"
          >
            עבודות שלנו
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-24 h-1 bg-primary mx-auto mb-6"
          />
          <motion.p
            variants={fadeIn}
            className="text-xl text-foreground/80 max-w-3xl mx-auto"
          >
            הציצו בתיק העבודות שלנו וראו כיצד אנחנו הופכות חזונות לעיצובים מושלמים
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-navy hover:bg-primary/10 border border-primary/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          layout
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Content */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                      <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-lg text-foreground/80 mb-6">
            רוצים לראות עוד עבודות? 📸
          </p>
          <motion.a
            href="https://instagram.com/tiedstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            עקבו אחרינו באינסטגרם
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}