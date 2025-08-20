'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-background text-navy py-8">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm">
            Studio Tied — Wedding & Bachelorette Branding 2025 ©
          </p>
          <p className="text-sm text-navy/80">
            קו אחיד, ייחודי לכם.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}