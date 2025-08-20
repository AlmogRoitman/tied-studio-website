'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeIn, staggerContainer, slideInRight, slideInLeft } from '@/lib/animations';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="section-spacing bg-gradient-to-b from-background to-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-20"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-navy mb-6 font-serif"
          >
            מי אנחנו
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-24 h-1 bg-primary mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-8"
          >
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-6">
                מה אנחנו מציעות
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                אנחנו מתמחות במיתוג חתונות מקצה לקצה, ויצירת עיצוב מותאם אישית לכל זוג. 
                המטרה שלנו היא ליצור מיתוג אחיד ויוקרתי שמשקף את האישיות והסטיל הייחודי שלכם.
              </p>
            </div>

            <div className="mb-12">
              <h4 className="text-xl font-semibold text-navy mb-4">
                הגישה האישית שלנו
              </h4>
              <p className="text-lg text-foreground/80 leading-relaxed">
                אנחנו מאמינות שכל חתונה היא ייחודית, ולכן אנחנו עובדות בשיתוף צמוד עם הזוג 
                כדי להבין את החזון שלהם ולהפוך אותו למציאות. מהפגישה הראשונה ועד להדפסה הסופית - 
                אנחנו כאן לכל השלבים.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="relative flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-3/4">
              <motion.img
                src="/images/portfolio/DSC04050.jpg"
                alt="עבודה של Tied Studio - מיתוג חתונות"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            
            {/* Decorative element */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}