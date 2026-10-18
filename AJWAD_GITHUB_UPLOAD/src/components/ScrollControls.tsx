import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';

export const ScrollControls: React.FC = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    // Listen to vertical scroll to trigger the Back to Top button past 500px
    const unsubscribe = scrollY.on('change', (latest) => {
      setShowTopButton(latest > 500);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ========================================================
          1. THE SCROLL PROGRESS BAR (Top Edge)
          ======================================================== */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#E03C1A] z-[100] pointer-events-none"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: '0%',
        }}
      />

      {/* ========================================================
          2. THE "BACK TO TOP" BUTTON (Bottom Right - Strictly Square)
          ======================================================== */}
      <AnimatePresence>
        {showTopButton && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 z-50 bg-white border border-gray-300 shadow-md rounded-none px-3 py-2 text-[10px] font-bold tracking-widest text-gray-700 uppercase hover:text-black hover:bg-neutral-50 hover:border-gray-400 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-black select-none cursor-pointer"
            aria-label="Back to top"
          >
            &uarr; TOP
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollControls;
