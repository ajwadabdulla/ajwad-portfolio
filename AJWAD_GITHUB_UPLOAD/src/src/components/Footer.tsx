import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <footer className="py-14 border-t border-gray-300 bg-[#F9F9FA] text-xs font-sans text-neutral-500">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1180px] mx-auto px-6 sm:px-8 text-center"
        >
          <p className="mx-auto flex flex-wrap items-center justify-center gap-2">
            <span className="font-semibold text-[#111111]">Ajwad Abdulla Alavi</span>
            <span className="text-neutral-400">&bull;</span>
            <button
              onClick={() => setTermsOpen(true)}
              className="text-neutral-600 hover:text-[#E03C1A] underline underline-offset-4 decoration-neutral-300 hover:decoration-[#E03C1A] transition-colors"
            >
              Terms and Conditions
            </button>
            <span className="text-neutral-400">&bull;</span>
            <span>Bahrain</span>
          </p>
        </motion.div>
      </footer>

      {/* Terms and Conditions Modal with AnimatePresence */}
      <AnimatePresence>
        {termsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            onClick={() => setTermsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-none p-6 sm:p-10 max-h-[85vh] overflow-y-auto shadow-2xl text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Back / Close button */}
              <div className="flex items-center justify-between pb-6 border-b border-neutral-200 mb-6">
                <button
                  onClick={() => setTermsOpen(false)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-[#E03C1A] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to portfolio</span>
                </button>

                <button
                  onClick={() => setTermsOpen(false)}
                  className="p-1.5 text-neutral-400 hover:text-[#E03C1A] transition-colors"
                  aria-label="Close Terms and Conditions"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Terms text */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-2">
                Terms and Conditions
              </h2>
              <p className="text-xs font-mono text-neutral-500 mb-6">
                Last updated: October 2026
              </p>

              <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <p>
                  This website is the personal portfolio of Ajwad Abdulla Alavi. It is provided for general information about my education, experience and skills.
                </p>
                <p>
                  I take care to keep the content accurate, but it may change without notice and is not professional advice.
                </p>
                <p>
                  The text and photographs on this site belong to me unless stated otherwise. Please do not copy or reuse them without my written permission.
                </p>
                <p>
                  Links to other websites, such as LinkedIn, are provided for convenience. I am not responsible for their content.
                </p>
                <p>
                  This site does not run analytics or advertising trackers. If you contact me by email or WhatsApp, I will use your details only to reply.
                </p>
                <p className="pt-4 border-t border-neutral-200 text-sm">
                  Questions:{' '}
                  <a href="mailto:ajwadabdulla42@gmail.com" className="font-semibold text-[#E03C1A] underline">
                    ajwadabdulla42@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
