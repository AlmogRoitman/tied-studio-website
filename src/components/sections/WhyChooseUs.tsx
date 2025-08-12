'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeIn, staggerContainer, scaleIn, slideInLeft, slideInRight } from '@/lib/animations';

const reasons = [
  {
    icon: "💡",
    title: "הבנה עמוקה של החזון שלכם",
    description: "אנחנו יושבות עם כל זוג להבין את הרצונות, החלומות והסטיל הייחודי שלהם"
  },
  {
    icon: "🎯",
    title: "מיתוג אישי וייחודי",
    description: "כל פרויקט הוא סיפור חדש - אנחנו יוצרות עיצוב שמשקף בדיוק את האישיות שלכם"
  },
  {
    icon: "⚙️",
    title: "ניהול תהליך מקצה לקצה",
    description: "מהרעיון הראשוני ועד למוצר המוגמר - אנחנו דואגות לכל הפרטים"
  },
  {
    icon: "👑",
    title: "קהל יעד איכותי",
    description: "אנחנו מתמחות בשירות זוגות מהמעמד הבינוני-גבוה הכי מעוניין באיכות פרימיום"
  }
];

const features = [
  "ניסיון של מעל 5 שנים בתחום המיתוג",
  "רשת קשרים עם ספקים ובתי דפוס מובילים",
  "תיק עבודות מרשים עם מעל 100 חתונות",
  "ליווי אישי ותמיכה לאורך כל התהליך",
  "זמינות גבוהה ותקשורת שוטפת",
  "מחירים הוגנים וחבילות גמישות"
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="why-choose-us" className="section-spacing bg-gradient-to-b from-secondary/30 to-background" ref={ref}>
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
            למה לבחור בנו
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-24 h-1 bg-primary mx-auto mb-6"
          />
          <motion.p
            variants={fadeIn}
            className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8"
          >
            הייחודיות שלנו נובעת מהגישה האישית והמקצועיות הגבוהה שאנחנו מביאות לכל פרויקט
          </motion.p>
        </motion.div>

        {/* Main Reasons Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-32"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="bg-white rounded-2xl p-12 shadow-lg border border-secondary/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-10 text-center">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-navy mb-8 text-center">
                {reason.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed text-center">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Features List */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <h3 className="text-3xl font-bold text-navy mb-16">
              מה מייחד אותנו
            </h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-lg text-foreground/80 mb-2">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats & Testimonial */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="bg-white rounded-2xl p-12 shadow-lg mb-12">
              <h4 className="text-2xl font-bold text-navy mb-12 text-center">
                המספרים מדברים בעד עצמם
              </h4>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <motion.div
                    className="text-4xl font-bold text-primary mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.8, type: "spring" }}
                  >
                    100+
                  </motion.div>
                  <div className="text-navy font-semibold">חתונות מוצלחות</div>
                </div>
                <div className="text-center">
                  <motion.div
                    className="text-4xl font-bold text-accent mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.9, type: "spring" }}
                  >
                    98%
                  </motion.div>
                  <div className="text-navy font-semibold">לקוחות מרוצים</div>
                </div>
                <div className="text-center">
                  <motion.div
                    className="text-4xl font-bold text-primary mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1.0, type: "spring" }}
                  >
                    5+
                  </motion.div>
                  <div className="text-navy font-semibold">שנות ניסיון</div>
                </div>
                <div className="text-center">
                  <motion.div
                    className="text-4xl font-bold text-accent mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1.1, type: "spring" }}
                  >
                    24/7
                  </motion.div>
                  <div className="text-navy font-semibold">תמיכה ולווי</div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <motion.div
              className="bg-primary/10 rounded-2xl p-10 border-2 border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
            >
              <div className="text-4xl text-primary mb-6 text-center">&ldquo;</div>
              <p className="text-lg text-navy italic leading-relaxed text-center mb-6">
                Tied Studio יצרו לנו מיתוג מושלם שהפך את החתונה שלנו לחוויה בלתי נשכחת. 
                הקשב האישי והמקצועיות ללא פשרות.
              </p>
              <div className="text-center text-foreground/70 font-semibold">
                - שרה ודוד כהן
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}