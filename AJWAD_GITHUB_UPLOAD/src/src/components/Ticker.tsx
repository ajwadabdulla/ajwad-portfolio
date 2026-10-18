import React, { useEffect, useRef, useState } from 'react';

export const Ticker: React.FC = () => {
  const tickerItems = [
    'Audit',
    'Internal controls',
    'IFRS',
    'Reconciliation',
    'Risk analysis',
    'MS Excel',
    'Power BI',
    'Zoho Books',
    'AI-assisted analysis',
    'Bahrain',
    'Saudi Arabia',
    'Qatar'
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef<number>(0);
  const speedRef = useRef<number>(0.8);
  const lastScrollY = useRef<number>(0);
  const isHovered = useRef<boolean>(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsReducedMotion(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down -> move left
        speedRef.current = 1.0;
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up -> reverse direction
        speedRef.current = -1.0;
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    let animationId: number;

    const animate = () => {
      if (containerRef.current && !isHovered.current) {
        offsetRef.current += speedRef.current;
        const halfWidth = containerRef.current.scrollWidth / 2;

        if (offsetRef.current >= halfWidth) {
          offsetRef.current = 0;
        } else if (offsetRef.current <= 0) {
          offsetRef.current = halfWidth;
        }

        containerRef.current.scrollLeft = offsetRef.current;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div 
      className="w-full border-b border-neutral-200 bg-white py-4 overflow-hidden select-none"
      onMouseEnter={() => { isHovered.current = true; }}
      onMouseLeave={() => { isHovered.current = false; }}
      aria-label="Skill areas and locations"
    >
      <div
        ref={containerRef}
        className={`w-full flex overflow-x-hidden whitespace-nowrap ${isReducedMotion ? 'overflow-x-auto justify-center' : ''}`}
      >
        {/* Render repeated copies to ensure seamless loop */}
        {[0, 1, 2, 3].map((copyIndex) => (
          <div key={copyIndex} className="flex items-center flex-shrink-0">
            {tickerItems.map((item, idx) => (
              <span key={`${copyIndex}-${idx}`} className="inline-flex items-center">
                <span className="font-sans text-xs uppercase tracking-widest text-[#111111] px-5 font-bold">
                  {item}
                </span>
                <span className="text-[#E03C1A] text-xs font-mono opacity-80">&bull;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
