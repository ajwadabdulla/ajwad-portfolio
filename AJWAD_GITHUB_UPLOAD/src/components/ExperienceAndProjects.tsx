import React from 'react';
import { motion } from 'framer-motion';

export const ExperienceAndProjects: React.FC = () => {
  const experiences = [
    {
      period: 'Jul 2025 - Aug 2025',
      company: 'Trans Gulf Consult, Bahrain',
      role: 'Finance Intern',
      description: 'Checked supplier and government payments against ledger records, kept the documentation audit-ready and flagged control gaps.'
    },
    {
      period: 'Jun 2025 - Jul 2025',
      company: 'Unity Contracting and Real Estate W.L.L., Bahrain',
      role: 'Accountant Intern',
      description: 'Reconciled monthly accounts, verified site inventory in person and tightened the month-end closing checklist.'
    }
  ];

  const projects = [
    {
      period: 'May 2026',
      tag: 'SPEEDZEY',
      title: 'Financial Analysis Case Study',
      description: "Analysed a company's finances and presented the findings in slides and a written summary."
    },
    {
      period: 'Nov 2023 - Dec 2023',
      tag: 'UNIVERSITY PROJECT',
      title: 'Equity Research',
      description: 'Compared profitability, liquidity and leverage ratios across listed IT companies and wrote up the results.'
    }
  ];

  return (
    <div id="experience-and-projects">
      {/* Experience Section */}
      <section id="experience" className="py-24 md:py-36 border-b border-gray-300 bg-[#F9F9FA] text-[#111111] font-sans">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Main Heading Reveal: Massive ultra-heavy weight matching Credentials */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-[#111111] mb-12 lg:mb-16 font-sans"
          >
            Experience
          </motion.h2>

          {/* Strict 2-column data ledger grid */}
          <div className="border-t border-gray-300">
            {experiences.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-gray-300 py-10 group"
              >
                {/* Left Column (lg:col-span-4): Dates & Meta */}
                <div className="lg:col-span-4 flex flex-col">
                  <span className="text-xs font-bold tracking-widest text-gray-500 uppercase font-sans">
                    {item.period}
                  </span>
                  <span className="text-xs font-bold tracking-widest text-[#E03C1A] uppercase font-sans mt-1.5">
                    {item.company}
                  </span>
                </div>

                {/* Right Column (lg:col-span-8): Role & Description */}
                <div className="lg:col-span-8 flex flex-col">
                  <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#E03C1A] transition-colors mb-3 font-sans">
                    {item.role}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-sans max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-36 border-b border-gray-300 bg-[#F9F9FA] text-[#111111] font-sans">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Main Heading Reveal: Massive ultra-heavy weight matching Credentials */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-[#111111] mb-12 lg:mb-16 font-sans"
          >
            Projects
          </motion.h2>

          {/* Strict 2-column data ledger grid */}
          <div className="border-t border-gray-300">
            {projects.map((proj, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-gray-300 py-10 group"
              >
                {/* Left Column (lg:col-span-4): Dates & Meta */}
                <div className="lg:col-span-4 flex flex-col">
                  <span className="text-xs font-bold tracking-widest text-gray-500 uppercase font-sans">
                    {proj.period}
                  </span>
                  <span className="text-xs font-bold tracking-widest text-[#E03C1A] uppercase font-sans mt-1.5">
                    {proj.tag}
                  </span>
                </div>

                {/* Right Column (lg:col-span-8): Title & Description */}
                <div className="lg:col-span-8 flex flex-col">
                  <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#E03C1A] transition-colors mb-3 font-sans">
                    {proj.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-sans max-w-3xl">
                    {proj.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ExperienceAndProjects;
