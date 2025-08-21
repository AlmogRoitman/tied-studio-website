'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeIn, staggerContainer } from '@/lib/animations';

const services = [
  {
    title: "מיתוג חתונה",
    bulletPoints: [
      "<span class=\"text-primary font-bold\">קונספט ושפה</span> - צבעים, טיפוגרפיה, אלמנטים גרפיים וגריד.",
      "<span class=\"text-primary font-bold\">הזמנות</span> - Save the Date, הזמנה - דיגיטלית/מודפסת.",
      "<span class=\"text-primary font-bold\">יום האירוע</span> - לוח הושבה, מספרי שולחן, תפריטים, כרטיסי שם, שילוט.",
      "<span class=\"text-primary font-bold\">מסיבה</span> - פרופס שייחודיים רק לכם.",
      "<span class=\"text-primary font-bold\">דיגיטל</span> - עמוד/אתר חתונה.",
      "<span class=\"text-primary font-bold\">הפקה</span> - קבצים לדפוס, בדיקות חומרים."
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "מיתוג מסיבת רווקות",
    bulletPoints: [
      "קונספט בהתאמה לכלה והחבורה.",
      "<span class=\"text-primary font-bold\">עיצוב חבילה ממותגת</span> - הזמנה, מדבקות.",
      "<span class=\"text-primary font-bold\">קיטים אישיים</span> - תגי שם, גלויות, אריזות מתנה, מדבקות לבקבוקים/כוסות.",
      "<span class=\"text-primary font-bold\">דיגיטל</span> - סטוריז, רקעים.",
      "<span class=\"text-primary font-bold\">הפקה</span> - קבצים לדפוס/בית דפוס, התאמות חומרים."
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.091 3.091zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
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
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16 mt-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="group"
            >
              <motion.div
                className="bg-white rounded-3xl shadow-lg h-full border border-secondary/10 hover:border-primary/20 transition-all duration-300"
                style={{ padding: '32px' }}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-navy">
                    {service.title}
                  </h3>
                </div>
                <div className="space-y-3 text-right" style={{ padding: '0 16px' }}>
                  {service.bulletPoints?.map((point, i) => (
                    <div key={i} className="flex items-start gap-3" style={{ paddingBottom: '6px' }}>
                      <span className="text-primary mt-1 flex-shrink-0 text-lg">•</span>
                      <span className="text-foreground/80 leading-relaxed text-base" dangerouslySetInnerHTML={{__html: point}}></span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Timeline */}
        <div className="mt-32 flex flex-col items-center">
          <motion.h3 
            className="text-3xl font-bold text-navy text-center mb-20"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            תהליך עבודה
          </motion.h3>
          
          <div className="space-y-12 max-w-2xl">
            {[
              { step: "1", title: "היכרות קצרה", desc: "לומדות להכיר אתכם ואת האווירה שאתם רוצים לייצר." },
              { step: "2", title: "בניית קונספט", desc: "מגדירות יחד צבעים, פונטים והשראות שיתחברו לסיפור שלכם." },
              { step: "3", title: "עיצוב כל מה שצריך", desc: "מההזמנה ועד השלטים, מהתפריטים ועד פריטים קטנים למסיבה – הכול באותו קו אחיד." },
              { step: "4", title: "הפקה והדפסה", desc: "דואגות שהכול יוצא מדויק, בזמן ובקו אחיד." },
              { step: "5", title: "מסירה מסודרת", desc: "מקבלים חבילה נקייה ומוכנה, כך שהאירוע כולו נראה שלם וייחודי." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-8 mb-12"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-navy mb-4">{item.title}</h4>
                  <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}