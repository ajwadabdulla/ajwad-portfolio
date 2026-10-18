import React, { useEffect } from 'react';
import { X, Download, ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  const { personal, credentials } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-[#111827] rounded-xl border border-[#E5DEC9] dark:border-[#2B3446] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          aria-label="Close certificate modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-[#E5DEC9] dark:border-[#2B3446] mb-6">
          <div className="w-10 h-10 rounded-lg bg-[#064E3B] text-[#EFE2BC] flex items-center justify-center font-bold text-xs">
            ACCA
          </div>
          <div>
            <h3 id="certificate-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] dark:text-[#E7E5E4]">
              Strategic Professional Certificate Verification
            </h3>
            <p className="text-xs font-mono text-[#57534E] dark:text-[#A8A29E]">
              Association of Chartered Certified Accountants (UK)
            </p>
          </div>
        </div>

        {/* Certificate Display Paper simulation */}
        <div className="border border-[#E5DEC9] dark:border-[#2B3446] rounded-lg p-6 sm:p-8 bg-[#FAF8F5] dark:bg-[#0B0F19] text-center relative mb-6 shadow-inner">
          <div className="w-12 h-12 mx-auto mb-4 bg-[#D40028] text-white flex items-center justify-center font-bold text-sm tracking-tighter">
            ACCA
          </div>

          <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] dark:text-[#E7E5E4] mb-2">
            Strategic Professional
          </h4>
          <p className="text-xs uppercase font-mono tracking-widest text-[#57534E] dark:text-[#A8A29E] mb-2">
            This is to certify that
          </p>
          <div className="font-serif text-2xl sm:text-3xl font-bold text-[#064E3B] dark:text-[#6EE7B7] mb-3">
            Ajwad Abdulla
          </div>
          <p className="text-xs text-[#57534E] dark:text-[#A8A29E] max-w-md mx-auto mb-6">
            has completed the Strategic Professional ACCA examinations:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left max-w-md mx-auto mb-6">
            <div className="p-2.5 rounded bg-white dark:bg-[#111827] border border-[#E5DEC9] dark:border-[#2B3446] text-xs flex justify-between items-center">
              <span className="font-medium text-[#1C1917] dark:text-[#E7E5E4]">Strategic Business Leader (SBL)</span>
              <span className="font-mono text-[10px] font-bold text-emerald-600">PASS</span>
            </div>
            <div className="p-2.5 rounded bg-white dark:bg-[#111827] border border-[#E5DEC9] dark:border-[#2B3446] text-xs flex justify-between items-center">
              <span className="font-medium text-[#1C1917] dark:text-[#E7E5E4]">Strategic Business Reporting (SBR)</span>
              <span className="font-mono text-[10px] font-bold text-emerald-600">PASS</span>
            </div>
            <div className="p-2.5 rounded bg-white dark:bg-[#111827] border border-[#E5DEC9] dark:border-[#2B3446] text-xs flex justify-between items-center">
              <span className="font-medium text-[#1C1917] dark:text-[#E7E5E4]">Advanced Financial Mgmt (AFM)</span>
              <span className="font-mono text-[10px] font-bold text-emerald-600">PASS</span>
            </div>
            <div className="p-2.5 rounded bg-white dark:bg-[#111827] border border-[#E5DEC9] dark:border-[#2B3446] text-xs flex justify-between items-center">
              <span className="font-medium text-[#1C1917] dark:text-[#E7E5E4]">Advanced Audit &amp; Assurance (AAA)</span>
              <span className="font-mono text-[10px] font-bold text-emerald-600">PASS</span>
            </div>
          </div>

          <div className="font-serif text-sm font-semibold text-[#1C1917] dark:text-[#E7E5E4] mb-4">
            June 2026
          </div>

          <div className="pt-4 border-t border-[#E5DEC9] dark:border-[#2B3446] flex flex-col sm:flex-row justify-between text-xs font-mono text-stone-500 gap-2">
            <div>ACCA REGISTRATION NUMBER: <strong>{credentials.acca.registrationNo}</strong></div>
            <div>CERTIFICATE NUMBER: <strong>{credentials.acca.certificateNo}</strong></div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center text-xs text-stone-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1.5" />
            <span>Original certificate issued by ACCA Qualifications Board</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personal.certificatePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-[2px] bg-[#064E3B] text-[#EFE2BC] text-xs font-mono hover:bg-[#043628] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
              Open Original PDF
            </a>

            <a
              href={personal.certificatePath}
              download="ACCA_Certificate_Ajwad_Abdulla.pdf"
              className="inline-flex items-center px-4 py-2 rounded-[2px] border border-[#E5DEC9] dark:border-[#2B3446] text-xs font-mono text-[#1C1917] dark:text-[#E7E5E4] hover:border-[#C5A059] transition-colors"
            >
              <Download className="w-3.5 h-3.5 mr-1.5 text-[#C5A059]" />
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
