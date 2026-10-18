import React from 'react';
import { Briefcase, Building2, MapPin, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-[#E5DEC9] dark:border-[#2B3446]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[#C5A059] block mb-1">
            WORK HISTORY &amp; INTERNSHIPS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#064E3B] dark:text-[#6EE7B7]">
            Professional Experience
          </h2>
        </div>

        {/* Split-column timeline */}
        <div className="space-y-8">
          {experience.map((item, idx) => (
            <div 
              key={item.company}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 rounded-xl bg-white dark:bg-[#111827] border border-[#E5DEC9] dark:border-[#2B3446] shadow-subtle hover:border-[#C5A059] transition-all"
            >
              {/* Left Column (Dates & Location in JetBrains Mono) */}
              <div className="md:col-span-4 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E5DEC9] dark:border-[#2B3446] pb-4 md:pb-0 md:pr-6">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded bg-[#064E3B]/10 dark:bg-[#6EE7B7]/10 text-[#064E3B] dark:text-[#6EE7B7] text-xs font-mono font-bold mb-2">
                    {item.period}
                  </span>
                  
                  <div className="flex items-center text-xs font-mono text-[#57534E] dark:text-[#A8A29E] mt-2">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-[#C5A059]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="hidden md:block pt-4 text-[11px] font-mono text-stone-400">
                  Record #{idx + 1} &bull; On-site Internship
                </div>
              </div>

              {/* Right Column (Company, Role, & Verifiable Contributions) */}
              <div className="md:col-span-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <Building2 className="w-4 h-4 text-[#C5A059]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#57534E] dark:text-[#A8A29E]">
                    {item.company}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#064E3B] dark:text-[#6EE7B7] mb-3">
                  {item.role}
                </h3>

                <ul className="space-y-2 mt-2">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start text-sm text-[#1C1917] dark:text-[#E7E5E4] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 mr-2.5 flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
