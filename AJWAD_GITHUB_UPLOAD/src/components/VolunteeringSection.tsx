import React from 'react';
import { motion } from 'framer-motion';

export const VolunteeringSection: React.FC = () => {
  return (
    <section id="volunteering" className="py-24 md:py-36 border-b border-gray-300 bg-[#F9F9FA] text-[#111111] font-sans">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Heading Reveal: Massive ultra-heavy weight matching Credentials */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-[#111111] mb-12 lg:mb-16 font-sans"
        >
          Volunteering
        </motion.h2>

        {/* Strict 2-column data ledger grid */}
        <div className="border-t border-gray-300">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-gray-300 py-10 group"
          >
            {/* Left Column (lg:col-span-4): Dates & Meta */}
            <div className="lg:col-span-4 flex flex-col">
              <span className="text-xs font-bold tracking-widest text-gray-600 uppercase font-sans">
                Oct 2025
              </span>
              <span className="text-xs font-bold tracking-widest text-[#C83415] uppercase font-sans mt-1.5">
                Bahrain Olympic Committee
              </span>
            </div>

            {/* Right Column (lg:col-span-8): Role & Event Title */}
            <div className="lg:col-span-8 flex flex-col">
              <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#E03C1A] transition-colors mb-2 font-sans">
                Volunteer
              </h3>
              <p className="text-gray-700 leading-relaxed font-sans max-w-3xl">
                3rd Asian Youth Games Bahrain 2025
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default VolunteeringSection;
