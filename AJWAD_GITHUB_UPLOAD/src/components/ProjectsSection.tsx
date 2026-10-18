import React from 'react';
import { FileSpreadsheet, TrendingUp, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-[#E5DEC9] dark:border-[#2B3446]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[#C5A059] block mb-1">
            ANALYTICAL WORK &amp; CASE STUDIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#064E3B] dark:text-[#6EE7B7]">
            Selected Projects
          </h2>
        </div>

        {/* Simple Rows (Not Cards, per design rules) */}
        <div className="divide-y divide-[#E5DEC9] dark:divide-[#2B3446] border-y border-[#E5DEC9] dark:border-[#2B3446]">
          {projects.map((proj) => (
            <div 
              key={proj.title}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors"
            >
              {/* Left Column: Metadata */}
              <div className="md:col-span-4 space-y-1">
                <span className="inline-block font-mono text-xs font-semibold text-[#064E3B] dark:text-[#6EE7B7]">
                  {proj.period}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1C1917] dark:text-[#E7E5E4]">
                  {proj.title}
                </h3>
                <p className="text-xs font-mono text-[#57534E] dark:text-[#A8A29E] flex items-center">
                  <MapPin className="w-3 h-3 mr-1 text-[#C5A059]" />
                  {proj.organization} &bull; {proj.location}
                </p>
                <div className="pt-2">
                  <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono bg-[#FAF8F5] dark:bg-[#111827] border border-[#E5DEC9] dark:border-[#2B3446] text-[#57534E] dark:text-[#A8A29E]">
                    {proj.type}
                  </span>
                </div>
              </div>

              {/* Right Column: Execution Description */}
              <div className="md:col-span-8">
                <p className="text-sm sm:text-base text-[#1C1917] dark:text-[#E7E5E4] leading-relaxed">
                  {proj.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
