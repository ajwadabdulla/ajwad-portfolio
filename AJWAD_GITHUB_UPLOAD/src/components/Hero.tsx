import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Scroll-Driven hooks for left-column fade-out
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Content Fade-Out: Text in the left column smoothly fades to opacity: 0 and glides upward as user scrolls deep
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentTranslateY = useTransform(scrollYProgress, [0, 0.65], [0, -45]);

  // Initial Load Stagger Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // cinematic smooth ease-out
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-[calc(100vh-100px)] lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#F9F9FA] text-[#111111] border-b border-gray-300 overflow-hidden"
    >
      
      {/* ========================================================
          LEFT COLUMN - Calder & Wynn Layout
          ======================================================== */}
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-20 pt-28 pb-16 lg:py-24 relative z-10">
        
        {/* Scroll-driven fade-out wrapper */}
        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentTranslateY,
          }}
          className="max-w-2xl flex flex-col text-left"
        >
          {/* Staggered text reveal container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Headline: Candidate Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[76px] font-black leading-[0.98] tracking-tighter text-[#111111] mb-6 rounded-none select-none"
            >
              Ajwad Abdulla Alavi
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl rounded-none"
            >
              ACCA Affiliate and Accounting graduate based in Bahrain. Open to audit, internal audit, and financial analysis roles across the GCC.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* ========================================================
            VERTICAL SCROLL INDICATOR
            ======================================================== */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="hidden lg:flex items-center gap-3 absolute bottom-10 left-16 xl:left-20 z-20 pointer-events-none select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#111111] [writing-mode:vertical-lr] rotate-180">
            SCROLL
          </span>
          <div className="w-[1.5px] h-12 bg-neutral-300 relative overflow-hidden">
            <motion.div
              className="w-full h-5 bg-[#E03C1A]"
              animate={{
                y: [-20, 52],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>

      </div>

      {/* ========================================================
          RIGHT COLUMN - Strict 50% Split, B&W Editorial Portrait
          ======================================================== */}
      <div className="relative w-full h-full min-h-[480px] lg:min-h-full p-0 overflow-hidden border-t lg:border-t-0 lg:border-l border-gray-300">
        <motion.img
          src="/ajwad.webp"
          srcSet="/ajwad-hero-450.webp 450w, /ajwad.webp 900w"
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt="Portrait of Ajwad Abdulla Alavi"
          className="absolute inset-0 w-full h-full object-cover object-[center_top] grayscale contrast-125 select-none rounded-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="600"
          height="800"
        />
      </div>

    </section>
  );
};

export default Hero;
