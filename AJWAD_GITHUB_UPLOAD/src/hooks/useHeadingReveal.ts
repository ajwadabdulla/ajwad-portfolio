import { useEffect, useRef } from 'react';

export const useHeadingReveal = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Content fully visible
      const heading = container.querySelector('.reveal-heading');
      const paragraph = container.querySelector('.reveal-paragraph');
      if (heading) heading.classList.add('reveal-active');
      if (paragraph) paragraph.classList.add('reveal-active');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heading = entry.target.querySelector('.reveal-heading');
            const paragraph = entry.target.querySelector('.reveal-paragraph');
            if (heading) heading.classList.add('reveal-active');
            if (paragraph) paragraph.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 } // 25% in view
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return containerRef;
};
