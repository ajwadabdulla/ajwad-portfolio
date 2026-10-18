import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 border-b border-gray-300 bg-[#F9F9FA] text-[#111111] font-sans">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="max-w-3xl">
          {/* Main Heading: Massive, ultra-heavy weight matching Credentials */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-[#111111] mb-12 lg:mb-16 font-sans"
          >
            About
          </motion.h2>

          {/* About paragraphs: Constrained line length, clean legible dark gray */}
          <div className="space-y-6 text-lg md:text-xl text-gray-800 leading-relaxed font-medium font-sans">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              I am interested in how a number travels from a transaction to a report, and where that path can break. As an accounting graduate with my ACCA exams complete, I am building a career in audit and finance, two fields that begin with that same question.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              I keep my work simple and well documented, so others can follow it.
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
