'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeIn, staggerContainer } from '@/lib/animations';

const services = [
  {
    title: "פגישת היכרות והגדרת קונספט",
    description: "ישיבה אישית להבנת החזון שלכם ויצירת קונספט עיצובי מותאם",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "לווי צמוד ותיאום עם בתי דפוס",
    description: "ניהול מלא של תהליך הדפוס ואספקה עם ספקים מובחרים",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "הפקה מקצה לקצה",
    description: "מעיצוב ראשוני ועד למוצר מוגמר - אנחנו מטפלות בכל השלבים",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "מיתוג משולב דיגיטלי ופיזי",
    description: "שילוב מושלם בין עיצוב דיגיטלי למוצרים פיזיים",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "עיצוב מותאם אישית",
    description: "פונטים, צבעים ונייר נבחרים במיוחד עבור החתונה שלכם",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
      </svg>
    ),
  },
  {
    title: "צילומי סייב דה דייט ממותגים",
    description: "צילומים מקצועיים הכוללים את המיתוג שלכם",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "מוצרי רווקות ממותגים",
    description: "חפצים ומזכרות מיוחדים למסיבת הרווקות",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 0v1.5m0 0V9a2 2 0 012 0v8a2 2 0 01-2 2m-6 0V9a2 2 0 012-2V6a2 2 0 112 0v2.5" />
      </svg>
    ),
  },
  {
    title: "תיאום מקצועי",
    description: "ליווי והכוונה לאורך כל שלבי התכנון וההפקה",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="section-spacing bg-background" ref={ref}>
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
            מה אנחנו עושות
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-24 h-1 bg-primary mx-auto mb-6"
          />
          <motion.p
            variants={fadeIn}
            className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8"
          >
            אנחנו מציעות חבילת שירותים מקצועית וכוללת למיתוג החתונה שלכם
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="group"
            >
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg h-full border border-secondary/20 cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-10 text-center text-primary flex justify-center">{service.icon}</div>
                <h3 className="text-lg font-semibold text-navy mb-8 text-center min-h-[3rem] flex items-center justify-center">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-center leading-relaxed mb-8">
                  {service.description}
                </p>
                
                {/* Decorative line */}
                <motion.div
                  className="w-0 h-0.5 bg-primary mx-auto mt-6 group-hover:w-12"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          className="mt-32 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-navy text-center mb-20">
            תהליך העבודה שלנו
          </h3>
          
          <div className="space-y-12">
            {[
              { step: "01", title: "פגישת היכרות", desc: "הכנות זוג והגדרת חזון" },
              { step: "02", title: "יצירת קונספט", desc: "פיתוח רעיונות ועיצוב ראשוני" },
              { step: "03", title: "עיצוב מפורט", desc: "יצירת כל החומרים הגרפיים" },
              { step: "04", title: "הדפסה ואספקה", desc: "ייצור והספקת המוצרים" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-8 mb-12"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-navy mb-4">{item.title}</h4>
                  <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}