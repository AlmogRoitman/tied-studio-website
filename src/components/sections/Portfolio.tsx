'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { fadeIn, staggerContainer } from '@/lib/animations';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  folder?: string;
  mainImage?: string;
  allImages?: string[];
  image?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "חתונת חלומות - דנה ואלמוג",
    category: "מיתוג מלא",
    description: "מיתוג מושלם וייחודי שמשקף את האישיות והסטיל של הזוג, כולל הזמנות, תפריטים וקישוטים מותאמים אישית",
    folder: "dana-almog",
    mainImage: "DSC05379.jpg",
    allImages: [
      "DSC05379.jpg", "DSC05852.jpg", "DSC05900.jpg", "DSCF9633.jpg", 
      "DSCF9687.jpg", "DSCF9706.jpg", "DSCF9737.jpg", "DSCF9738.jpg",
      "DSCF9746.jpg", "DSCF9756.jpg", "SB201266.jpg", "SB201273.jpg",
      "SB201344.jpg", "SB201518.jpg", "SB201758.jpg"
    ],
  },
];

const categories = ["הכל", "מיתוג מלא"];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("הכל");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = activeCategory === "הכל" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const openProject = (project: PortfolioItem) => {
    if (project.allImages && project.allImages.length > 0) {
      setSelectedProject(project);
      setCurrentImageIndex(0);
    }
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.allImages) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.allImages!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.allImages) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.allImages!.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="portfolio" className="section-spacing bg-gradient-to-b from-background to-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-24"
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
            className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8"
          >
            הציצו בתיק העבודות שלנו וראו כיצד אנחנו הופכות חזונות לעיצובים מושלמים
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-20"
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-16"
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
              onClick={() => openProject(item)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={item.folder && item.mainImage 
                      ? `/images/portfolio/${item.folder}/${item.mainImage}`
                      : item.image || ''
                    }
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-6 group-hover:text-primary transition-colors duration-300">
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
          className="text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-lg text-foreground/80 mb-8">
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

      {/* Image Gallery Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeProject}
        >
          <div className="relative max-w-6xl w-full max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              onClick={closeProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Project Title */}
            <div className="absolute top-4 left-4 z-10 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
              <h3 className="text-lg font-semibold">{selectedProject.title}</h3>
              <p className="text-sm opacity-80">
                {currentImageIndex + 1} / {selectedProject.allImages?.length}
              </p>
            </div>

            {/* Main Image */}
            <motion.div
              className="relative w-full h-[80vh] flex items-center justify-center"
              key={currentImageIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={`/images/portfolio/${selectedProject.folder}/${selectedProject.allImages?.[currentImageIndex]}`}
                alt={`${selectedProject.title} - תמונה ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Navigation Arrows */}
            {selectedProject.allImages && selectedProject.allImages.length > 1 && (
              <>
                <motion.button
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  onClick={prevImage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>

                <motion.button
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  onClick={nextImage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </>
            )}

            {/* Thumbnail Strip */}
            {selectedProject.allImages && selectedProject.allImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-2 max-w-full overflow-x-auto">
                {selectedProject.allImages.map((image, index) => (
                  <motion.button
                    key={image}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex 
                        ? 'border-primary scale-110' 
                        : 'border-white/20 hover:border-white/40'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    whileHover={{ scale: index === currentImageIndex ? 1.1 : 1.05 }}
                  >
                    <img
                      src={`/images/portfolio/${selectedProject.folder}/${image}`}
                      alt={`תמונה ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </section>
  );
}