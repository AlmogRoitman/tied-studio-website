'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { contactFormSchema, ContactFormData } from '@/lib/validations';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('היי! אני מעוניין/ת בשירותי מיתוג חתונות של Tied Studio');
    window.open(`https://wa.me/972500000000?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="section-spacing bg-gradient-to-b from-secondary/20 to-navy/5" ref={ref}>
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="bg-white rounded-3xl shadow-2xl border border-secondary/20 backdrop-blur-sm"
          >
            <div style={{ padding: '3rem' }}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-navy mb-4">
                שלחו לנו הודעה
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
              <p className="text-foreground/70 text-lg">
                נשמח לשמוע מכם ולעזור ביצירת החתונה המושלמת
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-8 p-4 bg-green-100 border border-green-300 rounded-lg text-green-700 text-center">
                ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-4 bg-red-100 border border-red-300 rounded-lg text-red-700 text-center">
                אירעה שגיאה בשליחת ההודעה. אנא נסו שוב מאוחר יותר.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
              <div className="relative">
                <label className="block text-navy font-semibold mb-4 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  שם מלא
                </label>
                <input
                  {...register('name')}
                  type="text"
                  className="w-full px-8 py-5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-lg bg-gray-50/50 hover:bg-white hover:border-gray-300"
                  placeholder="הכניסו את שם הזוג"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <label className="block text-navy font-semibold mb-4 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  כתובת אימייל
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-8 py-5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-lg bg-gray-50/50 hover:bg-white hover:border-gray-300"
                  placeholder="example@email.com"
                  style={{ direction: 'ltr', textAlign: 'left' }}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <label className="block text-navy font-semibold mb-4 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  מספר טלפון
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-8 py-5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-lg bg-gray-50/50 hover:bg-white hover:border-gray-300"
                  placeholder="050-123-4567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <label className="block text-navy font-semibold mb-4 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  תאריך החתונה המתוכנן
                </label>
                <input
                  {...register('weddingDate')}
                  type="date"
                  className="w-full px-8 py-5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-lg bg-gray-50/50 hover:bg-white hover:border-gray-300"
                />
                {errors.weddingDate && (
                  <p className="text-red-500 text-sm mt-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.weddingDate.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <label className="block text-navy font-semibold mb-4 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                  </svg>
                  ספרו לנו על החתונה שלכם
                </label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className="w-full px-8 py-5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-lg bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-vertical"
                  placeholder="מה החזון שלכם? איזה סטיל אתם אוהבים? איך אתם רואים את החתונה המושלמת שלכם?"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 rounded-2xl font-bold text-lg text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl hover:shadow-2xl transform hover:-translate-y-1'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
                whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a7.646 7.646 0 100 15.292V12"/>
                    </svg>
                    שולח הודעה...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    שלחו הודעה
                  </>
                )}
              </motion.button>
            </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-8"
          >


          </motion.div>
        </div>
      </div>
    </section>
  );
}