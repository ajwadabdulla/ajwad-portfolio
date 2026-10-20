import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollBlurOverlayProps {
  className?: string;
}

/**
 * ScrollBlurOverlay
 * 
 * Recreates the dynamic scroll blur overlay effect:
 * As the user scrolls from 0px to 500px, smoothly transitions from completely
 * transparent to a heavily blurred (24px), tinted frosted-glass effect
 * using the agency off-white palette (#F9F9FA / rgba(249, 249, 250, 0.85)).
 */
export const ScrollBlurOverlay: React.FC<ScrollBlurOverlayProps> = ({
  className = "fixed inset-0 pointer-events-none z-10 rounded-none select-none"
}) => {
  // 1. Framer Motion Setup: extract raw pixel scroll value
  const { scrollY } = useScroll();

  // 2. Dynamic Interpolation (useTransform)
  // Map scroll position to a blur pixel value: 0px at top -> 24px at 500px scroll
  const blurAmount = useTransform(scrollY, [0, 500], [0, 24]);

  // Convert numeric blur value into a CSS backdrop-filter string
  const backdropFilter = useTransform(blurAmount, (blur) => `blur(${blur}px)`);

  // Map scroll position to an opacity value for the background tint (0 -> 0.85)
  const bgOpacity = useTransform(scrollY, [0, 500], [0, 0.85]);

  // Convert to rgba string using agency off-white background color (#F9F9FA = 249, 249, 250)
  const backgroundColor = useTransform(
    bgOpacity,
    (opacity) => `rgba(249, 249, 250, ${opacity})`
  );

  // 3. The Overlay Component
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      style={{
        backdropFilter,
        WebkitBackdropFilter: backdropFilter,
        backgroundColor,
      }}
    />
  );
};

export default ScrollBlurOverlay;
