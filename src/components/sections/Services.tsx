'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeIn, staggerContainer } from '@/lib/animations';

const services = [
  {
    title: "פגישת היכרות והגדרת קונספט",
    description: "ישיבה אישית להבנת החזון שלכם ויצירת קונספט עיצובי מותאם",
    icon: "●",
  },
  {
    title: "לווי צמוד ותיאום עם בתי דפוס",
    description: "ניהול מלא של תהליך הדפוס ואספקה עם ספקים מובחרים",
    icon: "◆",
  },
  {
    title: "הפקה מקצה לקצה",
    description: "מעיצוב ראשוני ועד למוצר מוגמר - אנחנו מטפלות בכל השלבים",
    icon: "▲",
  },
  {
    title: "מיתוג משולב דיגיטלי ופיזי",
    description: "שילוב מושלם בין עיצוב דיגיטלי למוצרים פיזיים",
    icon: "■",
  },
  {
    title: "עיצוב מותאם אישית",
    description: "פונטים, צבעים ונייר נבחרים במיוחד עבור החתונה שלכם",
    icon: "★",
  },
  {
    title: "צילומי סייב דה דייט ממותגים",
    description: "צילומים מקצועיים הכוללים את המיתוג שלכם",
    icon: "♦",
  },
  {
    title: "מוצרי רווקות ממותגים",
    description: "חפצים ומזכרות מיוחדים למסיבת הרווקות",
    icon: "◉",
  },
  {
    title: "תיאום מקצועי",
    description: "ליווי והכוונה לאורך כל שלבי התכנון וההפקה",
    icon: "♠",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-28 bg-background" ref={ref}>
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
            השירותים שלנו
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-24 h-1 bg-primary mx-auto mb-6"
          />
          <motion.p
            variants={fadeIn}
            className="text-xl text-foreground/80 max-w-3xl mx-auto"
          >
            אנחנו מציעות חבילת שירותים מקצועית וכוללת למיתוג החתונה שלכם
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="group"
            >
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg h-full border border-secondary/20 cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-6xl mb-6 text-center text-primary">{service.icon}</div>
                <h3 className="text-lg font-semibold text-navy mb-3 text-center min-h-[3rem] flex items-center justify-center">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-center leading-relaxed">
                  {service.description}
                </p>
                
                {/* Decorative line */}
                <motion.div
                  className="w-0 h-0.5 bg-primary mx-auto mt-4 group-hover:w-12"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-navy text-center mb-12">
            תהליך העבודה שלנו
          </h3>
          
          <div className="space-y-8">
            {[
              { step: "01", title: "פגישת היכרות", desc: "הכנות זוג והגדרת חזון" },
              { step: "02", title: "יצירת קונספט", desc: "פיתוח רעיונות ועיצוב ראשוני" },
              { step: "03", title: "עיצוב מפורט", desc: "יצירת כל החומרים הגרפיים" },
              { step: "04", title: "הדפסה ואספקה", desc: "ייצור והספקת המוצרים" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-navy mb-1">{item.title}</h4>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}