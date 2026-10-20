import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';

export const MicroLoader: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    // Fast-running percentage counter from 00 to 100 in ~550ms
    const duration = 550;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentVal = Math.floor(progress * 100);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        // Counter hits 100; hold briefly for 50ms then trigger exit slide
        setTimeout(() => {
          setIsVisible(false);
        }, 50);
      }
    };

    const frameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          key="micro-loader-overlay"
          initial={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1], // Brutalist sharp spring-like cubic bezier
          }}
          className="fixed inset-0 z-50 flex items-end justify-end p-8 bg-[#F9F9FA] select-none pointer-events-auto"
        >
          {/* Raw Technical Data Counter */}
          <span className="text-[#E03C1A] text-sm md:text-base font-mono font-bold tracking-widest">
            {String(count).padStart(2, '0')}%
          </span>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default MicroLoader;
