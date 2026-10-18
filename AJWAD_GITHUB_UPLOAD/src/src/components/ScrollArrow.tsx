import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ScrollArrow: React.FC = () => {
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const [scrollY, setScrollY] = useState(0);
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Determine if near the bottom of the page
      if (currentScrollY + windowHeight >= documentHeight - 120) {
        setIsNearBottom(true);
      } else {
        setIsNearBottom(false);
      }

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      lastScrollY = currentScrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldPointUp = isNearBottom || scrollDirection === 'up';

  const handleClick = () => {
    if (shouldPointUp) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const nextSection = document.getElementById('about');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
      }
    }
  };

  return (
    <AnimatePresence>
      {scrollY > 150 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 select-none"
        >
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 500, damping: 22 }}
            className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#111111] hover:bg-[#E03C1A] text-white shadow-2xl rounded-none border border-neutral-700/80 transition-colors focus:outline-none"
            aria-label={shouldPointUp ? 'Scroll to top' : 'Scroll down'}
          >
            {/* Directional Animated Arrow (Framer Arrow style) */}
            <motion.div
              animate={{ rotate: shouldPointUp ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="flex items-center justify-center"
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-y-0.5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="square" 
                strokeLinejoin="miter"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </motion.div>

            {/* Subtle animated bouncing ping indicator */}
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full bg-[#E03C1A] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 bg-[#E03C1A]" />
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollArrow;
