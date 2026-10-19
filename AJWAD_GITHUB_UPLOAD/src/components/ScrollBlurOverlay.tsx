import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ScrollBlurOverlay
 * 
 * Dynamic Scroll Blur Overlay for the Hero section:
 * As the user scrolls down (0px to 400px), smoothly transitions from
 * completely transparent to a heavily blurred (20px) frosted-glass effect
 * tinted with the agency off-white background color (rgba(249, 249, 250, 0.85)).
 * 
 * Positioned fixed inset-0 pointer-events-none z-10 over the hero content,
 * allowing the content below to remain clickable without interference.
 */
export const ScrollBlurOverlay: React.FC = () => {
  // 1. Framer Motion Setup: Extract raw pixel scroll value
  const { scrollY } = useScroll();

  // 2. Dynamic Interpolation:
  // Map scroll position to a blur pixel value (0px scroll -> 0px blur; 400px scroll -> 20px blur)
  const blurAmount = useTransform(scrollY, [0, 400], [0, 20]);

  // Convert number into a CSS backdrop-filter string
  const backdropFilter = useTransform(blurAmount, (blur) => `blur(${blur}px)`);

  // Map scroll position to an opacity value for the background tint (0 to 0.85)
  const bgOpacity = useTransform(scrollY, [0, 400], [0, 0.85]);

  // Convert to rgba string using exact agency off-white background color (#F9F9FA)
  const backgroundColor = useTransform(
    bgOpacity,
    (opacity) => `rgba(249, 249, 250, ${opacity})`
  );

  // 3. The Overlay Component:
  // fixed inset-0 pointer-events-none z-10 with direct style binding
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-10 rounded-none select-none"
      style={{
        backdropFilter,
        WebkitBackdropFilter: backdropFilter,
        backgroundColor,
      }}
    />
  );
};

export default ScrollBlurOverlay;
