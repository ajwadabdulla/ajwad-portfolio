import React from 'react';
import { motion } from 'framer-motion';

export const CredentialsAndSkills: React.FC = () => {
  return (
    <section id="credentials" className="py-24 md:py-36 border-b border-gray-300 bg-[#F9F9FA] text-[#111111] font-sans">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* CSS Grid (grid grid-cols-1 lg:grid-cols-2 gap-16) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* ========================================================
              LEFT COLUMN: Main Heading, ACCA Detail & Massive Metric, Education
              ======================================================== */}
          <div className="flex flex-col">
            
            {/* Main Heading: Massive, ultra-heavy weight */}
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-12 lg:mb-16 text-[#111111]"
            >
              Credentials &amp; Skills
            </motion.h2>

            {/* ACCA Detail & The Massive Metric Block (Thin top border) */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-gray-300 pt-8 pb-10 grid grid-cols-1 sm:grid-cols-12 gap-8 items-start"
            >
              {/* ACCA Detail */}
              <div className="sm:col-span-6 flex flex-col justify-center">
                {/* 3 red-orange segmented dashes */}
                <div className="flex items-center gap-1.5 mb-5" aria-hidden="true">
                  <span className="w-8 h-1 bg-[#E03C1A] inline-block" />
                  <span className="w-8 h-1 bg-[#E03C1A] inline-block" />
                  <span className="w-8 h-1 bg-[#E03C1A] inline-block" />
                </div>

                <h3 className="text-3xl font-black tracking-tight text-[#111111] mb-3">
                  ACCA Affiliate
                </h3>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                  Completed all 13 professional examinations and earned the Strategic Professional Certificate (2026).
                </p>
              </div>

              {/* The Massive Metric (13 / 13) */}
              <div className="sm:col-span-6 flex flex-col sm:items-end text-left sm:text-right justify-center">
                <span className="text-7xl md:text-9xl font-black tracking-tighter text-[#111111] leading-none select-none">
                  13 / 13
                </span>
                <span className="text-sm font-bold tracking-widest text-[#E03C1A] uppercase mt-3">
                  EXAMS COMPLETED IN 2026
                </span>
              </div>
            </motion.div>

            {/* Education Ledger Rows (Thin horizontal separation lines) */}
            <div className="space-y-0">
              
              {/* University */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-gray-300 py-6"
              >
                <div className="flex justify-between items-baseline gap-4">
                  <h4 className="text-lg sm:text-xl font-bold text-[#111111]">
                    Dayananda Sagar University, Bangalore
                  </h4>
                  <span className="font-mono text-sm font-semibold text-neutral-500 whitespace-nowrap">
                    2021 &mdash; 2024
                  </span>
                </div>
                <p className="text-sm sm:text-base text-neutral-600 mt-1">
                  B.Sc, Major in Accounting
                </p>
              </motion.div>

              {/* High School */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-gray-300 py-6"
              >
                <div className="flex justify-between items-baseline gap-4">
                  <h4 className="text-lg sm:text-xl font-bold text-[#111111]">
                    The Indian School, Bahrain
                  </h4>
                  <span className="font-mono text-sm font-semibold text-neutral-500 whitespace-nowrap">
                    2007 &mdash; 2021
                  </span>
                </div>
                <p className="text-sm sm:text-base text-neutral-600 mt-1">
                  Higher Secondary (Commerce Math)
                </p>
              </motion.div>

            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: Core Competencies Ledger
              ======================================================== */}
          <div className="flex flex-col lg:pt-4">
            
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl font-black text-[#111111] tracking-tight mb-8"
            >
              Core Competencies
            </motion.h3>

            <div className="space-y-0">
              
              {/* Category 1: TECHNICAL */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-gray-300 py-6"
              >
                <span className="text-xs font-bold tracking-widest text-[#E03C1A] uppercase block mb-2">
                  TECHNICAL
                </span>
                <p className="text-base sm:text-lg font-medium text-[#111111] leading-relaxed">
                  AI-Assisted Workflows, Data Analytics, AI Modelling.
                </p>
              </motion.div>

              {/* Category 2: FOUNDATIONS */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-gray-300 py-6"
              >
                <span className="text-xs font-bold tracking-widest text-[#E03C1A] uppercase block mb-2">
                  FOUNDATIONS
                </span>
                <p className="text-base sm:text-lg font-medium text-[#111111] leading-relaxed">
                  Internal controls, Risk analysis, Compliance testing, IFRS, ISA, Accounting Operations, Financial Reporting.
                </p>
              </motion.div>

              {/* Category 3: ANALYSIS AND TOOLS */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-gray-300 py-6"
              >
                <span className="text-xs font-bold tracking-widest text-[#E03C1A] uppercase block mb-2">
                  ANALYSIS AND TOOLS
                </span>
                <p className="text-base sm:text-lg font-medium text-[#111111] leading-relaxed">
                  Advanced Excel, Power BI, Zoho Books, Google Slides, Google Sheets.
                </p>
              </motion.div>

              {/* Category 4: LANGUAGES */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-gray-300 py-6 border-b border-gray-300"
              >
                <span className="text-xs font-bold tracking-widest text-[#E03C1A] uppercase block mb-2">
                  LANGUAGES
                </span>
                <p className="text-base sm:text-lg font-medium text-[#111111] leading-relaxed">
                  English (fluent), Arabic (basic).
                </p>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CredentialsAndSkills;
