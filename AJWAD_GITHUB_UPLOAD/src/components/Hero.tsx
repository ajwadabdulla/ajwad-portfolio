import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollBlurOverlay } from './ScrollBlurOverlay';

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // PART 3: Scroll-Driven hooks for parallax & fade-out
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax Image Scrolling: Maps vertical scroll to a subtle downward translation (0% to 18%)
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  // Content Fade-Out: Text in the left column smoothly fades to opacity: 0 and glides upward as user scrolls deep
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentTranslateY = useTransform(scrollYProgress, [0, 0.65], [0, -45]);

  // PART 2: Initial Load Stagger Variants
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
      className="relative w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-[#F9F9FA] text-[#111111] border-b border-neutral-200 overflow-hidden"
    >
      
      {/* ========================================================
          LEFT COLUMN (col-span-7) - Calder & Wynn Layout
          ======================================================== */}
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-20 pt-28 pb-16 lg:py-24 relative z-10">
        
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
              className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl mb-10 rounded-none"
            >
              ACCA Affiliate and accounting graduate based in Bahrain. Open to audit, internal audit, and financial analysis roles across the GCC.
            </motion.p>

            {/* Buttons: Two inline items (solid red-orange sharp button + bold underlined text link) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 sm:gap-8 rounded-none"
            >
              <a
                href="/Ajwad_Abdulla_Alavi_CV.pdf"
                download="Ajwad_Abdulla_Alavi_CV.pdf"
                className="px-8 py-4 bg-[#E03C1A] hover:bg-[#c53214] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-none shadow-sm transition-colors duration-200 inline-flex items-center justify-center min-h-[48px]"
              >
                Download CV
              </a>

              <a
                href="#experience-and-projects"
                className="text-[#111111] hover:text-[#E03C1A] text-sm sm:text-base font-bold underline underline-offset-8 decoration-2 hover:decoration-[#E03C1A] transition-colors duration-200 py-3 rounded-none inline-flex items-center"
              >
                See case results
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ========================================================
            VERTICAL SCROLL INDICATOR (Blushing Globe Style)
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
          RIGHT COLUMN (col-span-5) - Clean Full-Bleed Image (No Overlapping Box)
          ======================================================== */}
      <div className="col-span-1 lg:col-span-5 relative w-full h-full min-h-[480px] sm:min-h-[580px] lg:min-h-full p-0 m-0 overflow-hidden">
        
        {/* Parallax image container */}
        <div className="relative w-full h-[480px] sm:h-[580px] lg:h-full min-h-[480px] lg:min-h-full overflow-hidden p-0 m-0 rounded-none">
          <motion.div
            className="w-full h-[118%] -top-[9%] relative overflow-hidden"
            style={{ y: imageParallaxY }}
          >
            {/* Cinematic Image Load */}
            <motion.img
              src="/ajwad.jpg"
              alt="Portrait of Ajwad Abdulla Alavi"
              className="w-full h-full object-cover select-none rounded-none"
              style={{
                objectPosition: 'center 20%',
              }}
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 1, scale: 1.0 }}
              transition={{
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              loading="eager"
              width="600"
              height="800"
            />
          </motion.div>

          {/* Dynamic Scroll Blur Overlay directly over the Hero Image */}
          <ScrollBlurOverlay className="absolute inset-0 pointer-events-none z-10 rounded-none select-none" />
        </div>

      </div>

    </section>
  );
};

export default Hero;
