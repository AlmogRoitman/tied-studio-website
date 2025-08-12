'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeIn, staggerContainer, slideInRight, slideInLeft } from '@/lib/animations';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-28 bg-gradient-to-b from-background to-secondary/30" ref={ref}>
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
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                מה אנחנו מציעות
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                אנחנו מתמחות במיתוג חתונות מקצה לקצה, ויצירת עיצוב מותאם אישית לכל זוג. 
                המטרה שלנו היא ליצור מיתוג אחיד ויוקרתי שמשקף את האישיות והסטיל הייחודי שלכם.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-navy mb-3">
                הגישה האישית שלנו
              </h4>
              <p className="text-lg text-foreground/80 leading-relaxed">
                אנחנו מאמינות שכל חתונה היא ייחודית, ולכן אנחנו עובדות בשיתוף צמוד עם הזוג 
                כדי להבין את החזון שלהם ולהפוך אותו למציאות. מהפגישה הראשונה ועד להדפסה הסופית - 
                אנחנו כאן לכל השלבים.
              </p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-navy mb-4">
                הייחודיות שלנו
              </h4>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                לפני שאנחנו מתחילות בתהליך העיצוב, אנחנו יושבות עם הזוג להכיר את החזון שלהם, 
                את הסטיל שהם אוהבים ואת האווירה שהם רוצים ליצור.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="text-center p-4 bg-primary/10 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-navy">חתונות מוצלחות</div>
                </motion.div>
                <motion.div
                  className="text-center p-4 bg-accent/10 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-accent mb-2">5+</div>
                  <div className="text-sm text-navy">שנות ניסיון</div>
                </motion.div>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {[
                "עיצוב מותאם אישית לכל זוג",
                "לווי צמוד לאורך כל התהליך",
                "תיאום עם ספקים ובתי דפוס",
                "איכות פרימיום בכל פרט"
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 space-x-reverse"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <p className="text-foreground/80">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}