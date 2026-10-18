import React, { useState } from 'react';
import { Award, CheckCircle2, ChevronRight, Globe2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface BentoCardsProps {
  onOpenCertificateModal: () => void;
}

export const BentoCards: React.FC<BentoCardsProps> = ({ onOpenCertificateModal }) => {
  const { credentials, skills } = portfolioData;
  const [activePathwayStep, setActivePathwayStep] = useState<number | null>(2); // Default to Strategic Professional

  return (
    <section className="py-16 md:py-20 border-b border-[#E5DEC9] dark:border-[#2B3446]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[#C5A059] block mb-1">
            QUALIFICATION &amp; MOBILITY DOSSIER
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#064E3B] dark:text-[#6EE7B7]">
            Core Credibility &amp; Regional Reach
          </h2>
        </div>

        {/* 3 Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: 13/13 ACCA Exams Passed (md:col-span-4) */}
          <div className="md:col-span-4 bg-white dark:bg-[#111827] border border-[#E5DEC9] dark:border-[#2B3446] rounded-xl p-6 flex flex-col justify-between shadow-subtle hover:-translate-y-0.5 transition-transform duration-200">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold text-[#57534E] dark:text-[#A8A29E] tracking-wider uppercase">
                  ACCA COMPLETION
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#064E3B]/10 dark:bg-[#6EE7B7]/10 text-[#064E3B] dark:text-[#6EE7B7] border border-[#064E3B]/20 dark:border-[#6EE7B7]/20">
                  Affiliate
                </span>
              </div>

              {/* Big Figure */}
              <div className="font-mono text-5xl font-bold tracking-tight text-[#064E3B] dark:text-[#6EE7B7] mb-1">
                13 / 13
              </div>
              <p className="font-medium text-sm text-[#1C1917] dark:text-[#E7E5E4] mb-1">
                ACCA Exams Passed
              </p>
              <p className="text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed mb-6">
                Strategic Professional level finalized in June 2026. All ethics, reporting, and assurance papers completed.
              </p>
            </div>

            {/* Stepped Gold Level Progress Graphic */}
            <div className="pt-4 border-t border-[#E5DEC9] dark:border-[#2B3446]">
              <div className="text-[11px] font-mono text-[#57534E] dark:text-[#A8A29E] mb-2 flex justify-between">
                <span>Pathway Progress</span>
                <span className="text-[#C5A059] font-semibold">100% Complete</span>
              </div>
              
              <div className="space-y-2">
                {/* Step 1 */}
                <div className="flex items-center text-xs">
                  <div className="w-4 h-4 rounded-full bg-[#064E3B] text-[#EFE2BC] flex items-center justify-center text-[9px] font-mono mr-2">âœ“</div>
                  <span className="text-xs font-medium text-[#1C1917] dark:text-[#E7E5E4]">Applied Knowledge</span>
                  <span className="ml-auto font-mono text-[11px] text-[#57534E] dark:text-[#A8A29E]">3/3</span>
                </div>
                {/* Step 2 */}
                <div className="flex items-center text-xs">
                  <div className="w-4 h-4 rounded-full bg-[#064E3B] text-[#EFE2BC] flex items-center justify-center text-[9px] font-mono mr-2">âœ“</div>
                  <span className="text-xs font-medium text-[#1C1917] dark:text-[#E7E5E4]">Applied Skills</span>
                  <span className="ml-auto font-mono text-[11px] text-[#57534E] dark:text-[#A8A29E]">6/6</span>
                </div>
                {/* Step 3 */}
                <div className="flex items-center text-xs">
                  <div className="w-4 h-4 rounded-full bg-[#C5A059] text-[#064E3B] flex items-center justify-center text-[9px] font-mono font-bold mr-2">âœ“</div>
                  <span className="text-xs font-bold text-[#064E3B] dark:text-[#6EE7B7]">Strategic Professional</span>
                  <span className="ml-auto font-mono text-[11px] font-semibold text-[#C5A059]">4/4</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenCertificateModal}
                className="mt-4 w-full text-center py-2 text-xs font-mono text-[#064E3B] dark:text-[#6EE7B7] hover:text-[#C5A059] border border-[#E5DEC9] dark:border-[#2B3446] rounded hover:border-[#C5A059] transition-colors"
              >
                Inspect Official Pass Record â†’
              </button>
            </div>
          </div>

          {/* Card 2: ACCA Pathway SVG Diagram (md:col-span-4) */}
          <div className="md:col-span-4 bg-white dark:bg-[#111827] border border-[#E5DEC9] dark:border-[#2B3446] rounded-xl p-6 flex flex-col justify-between shadow-subtle hover:-translate-y-0.5 transition-transform duration-200">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-semibold text-[#57534E] dark:text-[#A8A29E] tracking-wider uppercase">
                  ACCA PATHWAY BREAKDOWN
                </span>
                <Award className="w-4 h-4 text-[#C5A059]" />
              </div>
              
              <p className="text-xs text-[#57534E] dark:text-[#A8A29E] mb-4">
                Interactive structure of completed examination tiers. Focus areas in Strategic Professional include Advanced Audit and Advanced Financial Management.
              </p>

              {/* Interactive Pathway Nodes */}
              <div className="space-y-2.5">
                {credentials.acca.levels.map((lvl, idx) => {
                  const isSelected = activePathwayStep === idx;
                  return (
                    <div
                      key={lvl.name}
                      onClick={() => setActivePathwayStep(idx)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActivePathwayStep(idx); }}
                      tabIndex={0}
                      role="button"
                      aria-label={`View details for ${lvl.name}`}
                      className={`p-3 rounded-lg border transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-[#C5A059] bg-[#FAF8F5] dark:bg-[#1F293D]/60 ring-1 ring-[#C5A059]' 
                          : 'border-[#E5DEC9] dark:border-[#2B3446] bg-transparent hover:border-[#C5A059]/60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#1C1917] dark:text-[#E7E5E4] flex items-center">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#6EE7B7] mr-1.5 flex-shrink-0" />
                          {lvl.name}
                        </span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90 text-[#C5A059]' : 'text-stone-400'}`} />
                      </div>

                      {/* Expanded Paper Badges on selection */}
                      {isSelected && (
                        <div className="mt-2.5 pt-2 border-t border-[#E5DEC9] dark:border-[#2B3446] flex flex-wrap gap-1.5">
                          {lvl.papers.map((p) => (
                            <span
                              key={p.code}
                              className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-[#111827] border border-[#E5DEC9] dark:border-[#2B3446] text-[#064E3B] dark:text-[#6EE7B7]"
                              title={p.title}
                            >
                              <strong className="font-semibold mr-1">{p.code}</strong> {p.title.length > 20 ? p.title.substring(0, 18) + '...' : p.title}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Strategic Professional highlight */}
            <div className="mt-4 pt-3 border-t border-[#E5DEC9] dark:border-[#2B3446] text-[11px] font-mono text-[#57534E] dark:text-[#A8A29E] flex items-center justify-between">
              <span>Final Exam Pass:</span>
              <span className="text-[#064E3B] dark:text-[#6EE7B7] font-semibold">AAA &bull; AFM &bull; SBL &bull; SBR</span>
            </div>
          </div>

          {/* Card 3: GCC Geographic Mobility Card (md:col-span-4) */}
          <div className="md:col-span-4 bg-white dark:bg-[#111827] border border-[#E5DEC9] dark:border-[#2B3446] rounded-xl p-6 flex flex-col justify-between shadow-subtle hover:-translate-y-0.5 transition-transform duration-200">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-semibold text-[#57534E] dark:text-[#A8A29E] tracking-wider uppercase">
                  REGIONAL MOBILITY
                </span>
                <Globe2 className="w-4 h-4 text-[#C5A059]" />
              </div>
              
              <h3 className="font-medium text-sm text-[#1C1917] dark:text-[#E7E5E4] mb-1">
                Open to roles across the GCC
              </h3>
              <p className="text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed mb-4">
                Based in Bahrain with local visa available. Readily mobile for audit and corporate finance opportunities in Saudi Arabia (Riyadh, Eastern Province) and Qatar (Doha).
              </p>

              {/* Simplified Accurate GCC Map SVG */}
              <div className="relative w-full h-36 bg-[#FAF8F5] dark:bg-[#0B0F19] rounded-lg border border-[#E5DEC9] dark:border-[#2B3446] flex items-center justify-center p-2 overflow-hidden">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 320 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Arabian Peninsula landmass outline (Saudi Arabia, Eastern Province, Arabian Gulf) */}
                  <path
                    d="M 20,40 Q 60,30 110,45 Q 160,35 210,60 Q 230,70 235,95 L 235,115 Q 225,145 250,155 L 290,170 L 30,170 Z"
                    fill="currentColor"
                    className="text-[#E5DEC9]/40 dark:text-[#1F293D]/70"
                    stroke="#C5A059"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                  
                  {/* Saudi Arabia Label */}
                  <text x="110" y="115" className="fill-[#57534E] dark:fill-[#A8A29E] text-[10px] font-mono font-medium tracking-widest">
                    SAUDI ARABIA
                  </text>
                  
                  {/* Qatar Peninsula outline */}
                  <path
                    d="M 242,90 C 245,75 252,70 256,72 C 260,75 258,95 254,105 Z"
                    fill="#C5A059"
                    fillOpacity="0.25"
                    stroke="#C5A059"
                    strokeWidth="1.2"
                  />
                  <text x="260" y="88" className="fill-[#064E3B] dark:fill-[#6EE7B7] text-[9px] font-mono font-bold">
                    QATAR
                  </text>

                  {/* Bahrain Archipelago (Island cluster off Qatar coast) */}
                  <circle cx="232" cy="80" r="4" fill="#064E3B" className="dark:fill-[#6EE7B7]" stroke="#C5A059" strokeWidth="1.5" />
                  
                  {/* Bahrain Marker Pin & Pulse */}
                  <circle cx="232" cy="80" r="8" fill="none" stroke="#C5A059" strokeWidth="1" strokeDasharray="2 2" className="animate-ping" />
                  
                  {/* Bahrain Callout Box */}
                  <line x1="228" y1="76" x2="185" y2="55" stroke="#064E3B" strokeWidth="1" className="dark:stroke-[#6EE7B7]" />
                  <rect x="135" y="42" width="60" height="18" rx="2" fill="#064E3B" className="dark:fill-[#111827]" stroke="#C5A059" strokeWidth="0.8" />
                  <text x="165" y="54" textAnchor="middle" className="fill-[#EFE2BC] dark:fill-[#6EE7B7] text-[8px] font-mono font-semibold">
                    BAHRAIN (BASE)
                  </text>
                </svg>
              </div>
            </div>

            {/* Target Locations Tag Row */}
            <div className="mt-4 pt-3 border-t border-[#E5DEC9] dark:border-[#2B3446] flex items-center justify-between text-xs font-mono">
              <span className="text-[#064E3B] dark:text-[#6EE7B7] font-medium">Bahrain (Resident)</span>
              <span className="text-[#57534E] dark:text-[#A8A29E]">&bull;</span>
              <span className="text-[#57534E] dark:text-[#A8A29E]">KSA</span>
              <span className="text-[#57534E] dark:text-[#A8A29E]">&bull;</span>
              <span className="text-[#57534E] dark:text-[#A8A29E]">Qatar</span>
            </div>
          </div>

        </div>

        {/* Skill Pills Row (No filtering, pure refined hover styling) */}
        <div className="mt-10">
          <div className="text-xs font-mono uppercase tracking-wider text-[#57534E] dark:text-[#A8A29E] mb-3">
            Core Competencies &amp; Technical Capabilities
          </div>
          <div className="flex flex-wrap gap-2.5">
            {skills.competencies.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium font-sans bg-white dark:bg-[#111827] text-[#1C1917] dark:text-[#E7E5E4] border border-[#E5DEC9] dark:border-[#2B3446] hover:border-[#C5A059] dark:hover:border-[#6EE7B7] hover:bg-[#FAF8F5] dark:hover:bg-[#1F293D] transition-all cursor-default shadow-sm"
              >
                {skill}
              </span>
            ))}
            {skills.software.map((sw) => (
              <span
                key={sw}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-[#064E3B]/5 dark:bg-[#6EE7B7]/10 text-[#064E3B] dark:text-[#6EE7B7] border border-[#064E3B]/20 dark:border-[#6EE7B7]/30 hover:border-[#C5A059] transition-all cursor-default"
              >
                {sw}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
