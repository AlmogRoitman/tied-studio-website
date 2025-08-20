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
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                אנחנו דנה ומישל - שתי חברות שהפכו את התשוקה שלנו למיתוג לעסק חלומות. הכל התחיל כשעיצבנו את החתונה של דנה והבנו שיש משהו קסום בשפה עיצובית שמחברת כל פרט באירוע לסיפור אחד גדול. זה הרגע שבו נולד Studio Tied - מתוך האמונה שכל זוג ראוי למיתוג ייחודי שמשקף את האישיות שלו.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                מישל מביאה מומחיות רב-תחומית בעיצוב גרפי, מיתוג דיגיטלי ו-UX/UI. דנה תורמת ניסיון עשיר בניהול מוצר אסטרטגי ותהליכים עסקיים מתקדמים.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                הגישה המקצועית שלנו משלבת חשיבה אסטרטגית עם ביצוע עיצובי מדויק. אנו מספקות פתרון מקיף הכולל תכנון, עיצוב והפקה - תוך הקפדה על איכות גבוהה, עמידה בלוחות זמנים ויצירת תוצר סופי שמעצב חוויה בלתי נשכחת.
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}