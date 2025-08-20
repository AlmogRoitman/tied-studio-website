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
    title: "חתונות",
    category: "חתונות",
    description: "מיתוג מלא לחתונה בסגנון רומנטי עם פרטים מוזהבים",
    folder: "dana-almog",
    mainImage: "DSC05379.jpg",
    allImages: [
      "DSC05379.jpg", "DSC05852.jpg", "DSC05900.jpg", "DSCF9633.jpg", 
      "DSCF9687.jpg", "DSCF9706.jpg", "DSCF9737.jpg", "DSCF9738.jpg",
      "DSCF9746.jpg", "DSCF9756.jpg", "SB201266.jpg", "SB201273.jpg",
      "SB201344.jpg", "SB201518.jpg", "SB201758.jpg"
    ],
  },
  {
    id: 2,
    title: "מסיבות רווקות",
    category: "מסיבות רווקות",
    description: "עיצוב ומיתוג למסיבות רווקות מיוחדות",
    folder: "dana-almog", // Using same folder for now, you can change this later
    mainImage: "DSC05379.jpg", // You can specify different image
    allImages: [
      "DSC05379.jpg", "DSC05852.jpg", "DSC05900.jpg", "DSCF9633.jpg", "DSCF9687.jpg"
    ],
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = portfolioItems;

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
            תיק עבודות
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-24 h-1 bg-primary mx-auto mb-6"
          />
          <motion.p
            variants={fadeIn}
            className="text-xl text-foreground/80 mx-auto mb-8"
          >
            כל אירוע הוא סיפור אחר - בכל פרויקט אנחנו יוצרות שפה אחידה, ובתוכה ייחודיות לזוג או לכלה.
          </motion.p>
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
                <div style={{ padding: '24px 32px' }}>
                  <h3 className="text-xl font-semibold text-navy group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
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
          <div className="flex gap-6 justify-center">
            <motion.a
              href="https://www.instagram.com/studio_tied?igsh=MTFqNXh4cGl4ODdnag=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-black hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://wa.me/972528014889?text=היי! אני מעוניין/ת בשירותי מיתוג חתונות של Tied Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-black hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </motion.a>
          </div>
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