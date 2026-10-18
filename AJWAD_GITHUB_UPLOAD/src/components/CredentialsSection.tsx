import React from 'react';
import { Award, FileText, CheckCircle2, Shield, ExternalLink, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface CredentialsProps {
  onOpenCertificateModal: () => void;
}

export const CredentialsSection: React.FC<CredentialsProps> = ({ onOpenCertificateModal }) => {
  const { credentials, personal } = portfolioData;
  const strategicPapers = credentials.acca.levels[2].papers;

  return (
    <section id="credentials" className="py-16 md:py-24 border-b border-[#E5DEC9] dark:border-[#2B3446]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[#C5A059] block mb-1">
            PROFESSIONAL CERTIFICATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#064E3B] dark:text-[#6EE7B7]">
            ACCA Affiliate Credentials
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Dossier Card */}
          <div className="lg:col-span-7 bg-white dark:bg-[#111827] border border-[#E5DEC9] dark:border-[#2B3446] rounded-xl p-6 sm:p-8 shadow-subtle">
            
            {/* Header with ACCA Gold Seal Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E5DEC9] dark:border-[#2B3446] gap-4">
              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-[#064E3B] text-[#EFE2BC] text-xs font-mono font-semibold tracking-wider uppercase mb-2">
                  Official Affiliate Status
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1C1917] dark:text-[#E7E5E4]">
                  ACCA (UK) Affiliate
                </h3>
                <p className="text-xs text-[#57534E] dark:text-[#A8A29E] mt-0.5">
                  Association of Chartered Certified Accountants, United Kingdom
                </p>
              </div>

              <div className="text-left sm:text-right font-mono text-xs text-[#57534E] dark:text-[#A8A29E]">
                <div>Passed: <strong className="text-[#064E3B] dark:text-[#6EE7B7]">June 2026</strong></div>
                <div>Reg No: <strong className="text-[#1C1917] dark:text-[#E7E5E4]">{credentials.acca.registrationNo}</strong></div>
                <div>Cert No: <strong className="text-[#1C1917] dark:text-[#E7E5E4]">{credentials.acca.certificateNo}</strong></div>
              </div>
            </div>

            {/* Strategic Professional Papers Grid */}
            <div className="py-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#57534E] dark:text-[#A8A29E] mb-4 flex items-center">
                <Award className="w-4 h-4 text-[#C5A059] mr-2" />
                Strategic Professional Examinations Passed:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {strategicPapers.map((paper) => (
                  <div
                    key={paper.code}
                    className="p-3.5 rounded-lg border border-[#E5DEC9] dark:border-[#2B3446] bg-[#FAF8F5]/80 dark:bg-[#1F293D]/40 flex items-start justify-between"
                  >
                    <div>
                      <span className="inline-block font-mono text-xs font-bold text-[#064E3B] dark:text-[#6EE7B7] mb-0.5">
                        {paper.code}
                      </span>
                      <p className="text-xs font-medium text-[#1C1917] dark:text-[#E7E5E4] leading-snug">
                        {paper.title}
                      </p>
                    </div>
                    <span className="inline-flex items-center text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                      PASS
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Footer Link */}
            <div className="pt-6 border-t border-[#E5DEC9] dark:border-[#2B3446] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center text-xs text-[#57534E] dark:text-[#A8A29E]">
                <Shield className="w-4 h-4 text-[#C5A059] mr-1.5 flex-shrink-0" />
                <span>All 13 Foundation, Applied &amp; Strategic papers completed</span>
              </div>

              <button
                type="button"
                onClick={onOpenCertificateModal}
                className="inline-flex items-center text-xs font-mono font-medium text-[#064E3B] dark:text-[#6EE7B7] hover:text-[#C5A059] underline underline-offset-4 decoration-[#C5A059]"
              >
                <span>Inspect Certificate Details</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>

          </div>

          {/* Right Column: Certificate Document Preview Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white dark:bg-[#111827] border border-[#E5DEC9] dark:border-[#2B3446] rounded-xl p-5 shadow-subtle flex flex-col">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5DEC9] dark:border-[#2B3446] mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#57534E] dark:text-[#A8A29E] flex items-center">
                  <FileText className="w-3.5 h-3.5 mr-1.5 text-[#C5A059]" />
                  Official Certificate Document
                </span>
                <span className="text-[11px] font-mono text-[#064E3B] dark:text-[#6EE7B7]">
                  June 2026
                </span>
              </div>

              {/* Digital Certificate Visual Simulation */}
              <div 
                onClick={onOpenCertificateModal}
                className="group relative cursor-pointer border-2 border-dashed border-[#C5A059]/40 hover:border-[#C5A059] rounded-lg p-6 bg-[#FAF8F5] dark:bg-[#0B0F19] text-center transition-all"
              >
                {/* Red square logo echo */}
                <div className="w-10 h-10 mx-auto mb-3 bg-[#D40028] text-white flex items-center justify-center font-bold text-xs font-sans tracking-tighter">
                  ACCA
                </div>
                
                <h5 className="font-serif text-lg font-bold text-[#1C1917] dark:text-[#E7E5E4] mb-1">
                  Strategic Professional
                </h5>
                <p className="text-xs text-[#57534E] dark:text-[#A8A29E] mb-3">
                  This is to certify that
                </p>
                <div className="font-serif text-xl font-bold text-[#064E3B] dark:text-[#6EE7B7] mb-3">
                  Ajwad Abdulla
                </div>
                <p className="text-[11px] text-[#57534E] dark:text-[#A8A29E] max-w-xs mx-auto mb-4">
                  has completed the Strategic Professional ACCA examinations (SBL, SBR, AFM, AAA)
                </p>

                <div className="pt-3 border-t border-[#E5DEC9] dark:border-[#2B3446] flex justify-between text-[10px] font-mono text-stone-500">
                  <span>REG: 5634576</span>
                  <span>CERT: 2885634576450</span>
                </div>

                <div className="absolute inset-0 bg-[#064E3B]/0 group-hover:bg-[#064E3B]/5 dark:group-hover:bg-[#6EE7B7]/5 rounded-lg flex items-center justify-center transition-colors">
                  <span className="opacity-0 group-hover:opacity-100 inline-flex items-center px-3 py-1.5 rounded bg-[#064E3B] text-[#EFE2BC] text-xs font-mono shadow transition-opacity">
                    Click to Enlarge Certificate
                  </span>
                </div>
              </div>

              {/* Download / Open Original PDF Link */}
              <div className="mt-4 pt-3 flex items-center justify-between text-xs">
                <a
                  href={personal.certificatePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#064E3B] dark:text-[#6EE7B7] hover:text-[#C5A059] font-medium"
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-1 text-[#C5A059]" />
                  Open Raw Certificate PDF
                </a>
                
                <a
                  href={personal.certificatePath}
                  download="ACCA_Strategic_Professional_Certificate_Ajwad_Abdulla.pdf"
                  className="inline-flex items-center text-[#57534E] dark:text-[#A8A29E] hover:text-[#064E3B] font-mono text-[11px]"
                >
                  <Download className="w-3 h-3 mr-1 text-[#C5A059]" />
                  Download
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
